import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Read the text data
const dataContent = fs.readFileSync(path.join(__dirname, "../lib/lesen/data.ts"), "utf-8");

// Extract all reading texts to give context to the AI
const textsMatches = dataContent.match(/readingText:\s*`([\s\S]*?)`/g);
const allTexts = textsMatches ? textsMatches.map(t => t.replace(/readingText:\s*`|`/g, "")).join("\n\n") : "";

// Extract all unique words properly
// Match letters including German umlauts
const wordRegex = /[a-zA-ZäöüÄÖÜß]+/g;
const allWordsRaw = allTexts.match(wordRegex) || [];
const uniqueWords = [...new Set(allWordsRaw.map(w => w.toLowerCase()))].sort();

console.log(`Found ${uniqueWords.length} unique words.`);

const schema = {
  type: Type.OBJECT,
  properties: {
    dictionary: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING },
          translation: { type: Type.STRING, description: "Vietnamese translation" },
          wordType: { type: Type.STRING },
          cefr: { type: Type.STRING }
        },
        required: ["word", "translation", "wordType", "cefr"]
      }
    }
  },
  required: ["dictionary"]
};

async function main() {
  const dictionary: Record<string, any> = {};
  
  // Chunk words to avoid API limits (150 words per chunk)
  const chunkSize = 150;
  for (let i = 0; i < uniqueWords.length; i += chunkSize) {
    const chunk = uniqueWords.slice(i, i + chunkSize);
    console.log(`Processing chunk ${i / chunkSize + 1} of ${Math.ceil(uniqueWords.length / chunkSize)}...`);
    
    const prompt = `
    You are an expert German teacher. 
    Here is a text corpus:
    ${allTexts.substring(0, 2000)}...

    I will give you a list of German words extracted from this corpus.
    For each word, provide the Vietnamese translation (in the context of the corpus if possible), the wordType (e.g. Nomen, Verb, Adjektiv), and CEFR level (A1, A2, B1, etc.).
    For verbs, if the word is conjugated (e.g. "findet", "ziehe"), translate the meaning of that conjugation but keep the word as given.
    
    Words to translate:
    ${chunk.join(", ")}
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: schema,
          temperature: 0.1,
        }
      });
      
      const resultText = response.text || "{}";
      const result = JSON.parse(resultText);
      if (result.dictionary) {
        result.dictionary.forEach((item: any) => {
          dictionary[item.word.toLowerCase()] = item;
        });
      }
    } catch (e) {
      console.error("Error generating chunk:", e);
    }
  }
  
  fs.writeFileSync(path.join(__dirname, "../lib/ai/readingDictionary.json"), JSON.stringify(dictionary, null, 2));
  console.log("Dictionary successfully generated at lib/ai/readingDictionary.json");
}

main();
