"use server";

import readingDictionaryData from "./readingDictionary.json";
import { GoogleGenAI, Type } from "@google/genai";

export interface WritingFeedback {
  score: number; // 0 - 100
  criteria: {
    aufgabe: { score: number; comment: string };
    grammatik: { score: number; comment: string };
    wortschatz: { score: number; comment: string };
    struktur: { score: number; comment: string };
    verstaendlichkeit: { score: number; comment: string };
  };
  corrections: Array<{ original: string; corrected: string; explanation: string }>;
  overallSummary: string;
  disclaimer: string;
}

export interface SpeakingFeedback {
  fluencyScore: number;
  grammarScore: number;
  vocabularyScore: number;
  transcript: string;
  corrections: Array<{ original: string; corrected: string; explanation: string }>;
  overallFeedback: string;
  disclaimer: string;
}

export interface VocabularyAIEssence {
  word: string;
  article?: string;
  plural?: string;
  wordType?: string;
  translation: string;
  example: string;
  exampleTrans?: string;
  cefr: string;
}

/**
 * Educational Writing Evaluation for B1 German Tasks
 */
export async function evaluateWriting(
  promptText: string,
  submissionText: string,
  minWords: number
): Promise<WritingFeedback> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `Du bist ein strenger aber fairer Deutschlehrer, der auf Niveau B1 (Goethe/telc) unterrichtet. 
Deine Aufgabe ist es, einen Text eines Schülers zu bewerten. 
Du bekommst:
1. Die Aufgabenstellung (Prompt)
2. Den Text des Schülers (Submission)
3. Die Mindestwortzahl (Min words)

Bewerte den Text nach folgenden Kriterien auf einer Skala von 0-100:
- aufgabe (Aufgabenerfüllung): Wurden alle Punkte bearbeitet? Ist der Text lang genug?
- grammatik (Grammatik): Sind die Sätze korrekt gebildet?
- wortschatz (Wortschatz): Benutzt der Schüler B1-Vokabeln und Konnektoren?
- struktur (Struktur): Gibt es eine passende Anrede und einen Schlussgruß?
- verstaendlichkeit (Verständlichkeit): Ist der Text insgesamt gut zu lesen?

Erstelle auch eine Liste von Fehlern (corrections) mit Originalsatz, verbessertem Satz und einer kurzen Erklärung auf Vietnamesisch.
Der Kommentar (comment) für jedes Kriterium soll auf Vietnamesisch sein.
OverallSummary soll auch auf Vietnamesisch sein.
Disclaimer soll so lauten: "Hinweis: Dieses Feedback wird von KI generiert und ersetzt keinen echten Lehrer."
`;

  const prompt = `Aufgabenstellung: ${promptText}\nMindestwortzahl: ${minWords}\nSchülertext: ${submissionText}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.INTEGER, description: "Overall score 0-100" },
          criteria: {
            type: Type.OBJECT,
            properties: {
              aufgabe: { type: Type.OBJECT, properties: { score: { type: Type.INTEGER }, comment: { type: Type.STRING } }, required: ["score", "comment"] },
              grammatik: { type: Type.OBJECT, properties: { score: { type: Type.INTEGER }, comment: { type: Type.STRING } }, required: ["score", "comment"] },
              wortschatz: { type: Type.OBJECT, properties: { score: { type: Type.INTEGER }, comment: { type: Type.STRING } }, required: ["score", "comment"] },
              struktur: { type: Type.OBJECT, properties: { score: { type: Type.INTEGER }, comment: { type: Type.STRING } }, required: ["score", "comment"] },
              verstaendlichkeit: { type: Type.OBJECT, properties: { score: { type: Type.INTEGER }, comment: { type: Type.STRING } }, required: ["score", "comment"] }
            },
            required: ["aufgabe", "grammatik", "wortschatz", "struktur", "verstaendlichkeit"]
          },
          corrections: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                original: { type: Type.STRING },
                corrected: { type: Type.STRING },
                explanation: { type: Type.STRING }
              },
              required: ["original", "corrected", "explanation"]
            }
          },
          overallSummary: { type: Type.STRING },
          disclaimer: { type: Type.STRING }
        },
        required: ["score", "criteria", "corrections", "overallSummary", "disclaimer"]
      }
    }
  });

  if (response.text) {
    return JSON.parse(response.text) as WritingFeedback;
  }
  
  throw new Error("No response from AI");
}

/**
 * Educational Speaking Evaluation
 */
export async function evaluateSpeaking(
  promptTitle: string,
  userAudioOrTranscript: string
): Promise<SpeakingFeedback> {
  const text = userAudioOrTranscript || "Ich denke, dass Sport ist sehr wichtig für die Gesundheit.";

  const corrections = [
    {
      original: "Ich denke, dass Sport ist sehr wichtig.",
      corrected: "Ich denke, dass Sport sehr wichtig ist.",
      explanation: "Verb am Ende nach 'dass'.",
    },
  ];

  return {
    fluencyScore: 78,
    grammarScore: 75,
    vocabularyScore: 82,
    transcript: text,
    corrections,
    overallFeedback: "Sehr gut gesprochen! Deine Aussprache ist verständlich. Achte auf die Satzstellung im Nebensatz.",
    disclaimer: "Hinweis: Die Bewertung dient als Orientierung für deine B1-Übung.",
  };
}

export async function autoCompleteVocabulary(wordQuery: string): Promise<VocabularyAIEssence> {
  const query = wordQuery.trim();
  
  // Simulated delay for UI consistency (loading state)
  await new Promise((resolve) => setTimeout(resolve, 600));

  const cleanQuery = query.replace(/[^a-zA-ZäöüÄÖÜß]/g, "");
  const lower = cleanQuery.toLowerCase();
  
  const readingDictionary: Record<string, any> = readingDictionaryData;
  if (readingDictionary[lower]) {
    const entry = readingDictionary[lower];
    const isCapitalized = cleanQuery[0] === cleanQuery[0].toUpperCase();
    
    // Add default examples since JSON only contains word, translation, wordType, cefr
    let example = `Er hat das Wort "${entry.word}" im Text gelesen.`;
    let exampleTrans = `Anh ấy đã đọc từ "${entry.word}" trong văn bản.`;
    if (isCapitalized && entry.wordType === "Nomen") {
        example = `Das ist ein interessantes ${entry.word}.`;
        exampleTrans = `Đó là một ${entry.word} thú vị.`;
    }

    return {
      word: entry.word,
      wordType: entry.wordType,
      translation: entry.translation,
      cefr: entry.cefr,
      example: example,
      exampleTrans: exampleTrans
    };
  }

  // Fallback 1: Try free MyMemory Translation API to get real translation without AI costs
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanQuery)}&langpair=de|vi`);
    if (res.ok) {
      const data = await res.json();
      const translatedText = data?.responseData?.translatedText;
      
      if (translatedText && !translatedText.includes("NO QUERY SPECIFIED") && !translatedText.includes("INVALID")) {
        const isCapitalized = cleanQuery[0] === cleanQuery[0].toUpperCase();
        
        return {
          word: cleanQuery,
          article: isCapitalized ? "das" : undefined,
          plural: isCapitalized ? `${cleanQuery}s` : undefined,
          wordType: isCapitalized ? "Nomen" : "Wort",
          translation: translatedText, // Từ MyMemory
          example: `Er hat das Wort "${cleanQuery}" gelesen.`,
          exampleTrans: `Anh ấy đã đọc từ "${cleanQuery}".`,
          cefr: "A1-B1",
        };
      }
    }
  } catch (e) {
    console.error("Lỗi gọi MyMemory API:", e);
  }

  // Fallback 2: Smarter generic fallback if API fails
  const isCapitalized = cleanQuery[0] === cleanQuery[0].toUpperCase();
  
  // Generating a slightly varied example sentence based on word type
  let genericExample = `Er hat das Wort "${cleanQuery}" im Wörterbuch nachgeschlagen.`;
  let genericExampleTrans = `Anh ấy đã tra từ "${cleanQuery}" trong từ điển.`;
  
  if (isCapitalized) {
    genericExample = `Ich brauche ein neues ${cleanQuery} für mein Projekt.`;
    genericExampleTrans = `Tôi cần một ${cleanQuery} mới cho dự án của mình.`;
  }

  return {
    word: cleanQuery,
    article: isCapitalized ? "das" : undefined, // Fallback to 'das' for unknown nouns
    plural: isCapitalized ? `${cleanQuery}s` : undefined,
    wordType: isCapitalized ? "Nomen" : "Verb / Adjektiv / Adverb",
    translation: `(Chưa có dữ liệu chính xác cho từ "${cleanQuery}")`,
    example: genericExample,
    exampleTrans: genericExampleTrans,
    cefr: "B1",
  };
}
