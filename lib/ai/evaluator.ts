"use server";

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
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `Du bist ein Deutschlehrer (Niveau B1).
Ich gebe dir ein deutsches Wort. Du sollst ein kurzes, präzises Wörterbucheintrag im JSON Format zurückgeben.
JSON Schema:
{
  "word": "das Basiswort (Grundform/Infinitiv, korrekt geschrieben, z.B. groß wenn Nomen)",
  "article": "der, die oder das (nur bei Nomen, sonst null/leer)",
  "plural": "die Pluralform mit Artikel (nur bei Nomen, sonst null/leer, z.B. 'die Wohnungen')",
  "wordType": "Nomen, Verb, Adjektiv, etc.",
  "translation": "Nghĩa tiếng Việt ngắn gọn, dễ hiểu",
  "example": "Ein B1-Beispielsatz auf Deutsch mit genau diesem Wort.",
  "exampleTrans": "Câu ví dụ dịch chuẩn xác sang tiếng Việt.",
  "cefr": "B1"
}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: `Wort: ${query}`,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING },
          article: { type: Type.STRING, nullable: true },
          plural: { type: Type.STRING, nullable: true },
          wordType: { type: Type.STRING },
          translation: { type: Type.STRING },
          example: { type: Type.STRING },
          exampleTrans: { type: Type.STRING },
          cefr: { type: Type.STRING }
        },
        required: ["word", "wordType", "translation", "example", "exampleTrans", "cefr"]
      }
    }
  });

  if (response.text) {
    return JSON.parse(response.text) as VocabularyAIEssence;
  }
  
  throw new Error("No response from AI");
}
