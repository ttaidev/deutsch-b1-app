"use client";

import { useState } from "react";
import { WordModal } from "./WordModal";
import { VocabularyAIEssence } from "@/lib/ai/evaluator";

interface ClickableTextProps {
  text: string;
  className?: string;
}

export function ClickableText({ text, className = "" }: ClickableTextProps) {
  const [modalWord, setModalWord] = useState<VocabularyAIEssence | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWordClick = (rawWord: string) => {
    const cleanWord = rawWord.replace(/[^a-zA-ZäöüÄÖÜß]/g, "");
    if (!cleanWord || cleanWord.length < 2) return;

    // Dictionary lookup / AI essence generator
    let article: string | undefined = undefined;
    let plural: string | undefined = undefined;

    const lower = cleanWord.toLowerCase();
    if (["wohnung", "anzeige", "bewerbung", "firma", "party", "einladung"].includes(lower)) {
      article = "die";
    } else if (["besichtigungstermin", "brief", "chef", "vorteil", "beruf"].includes(lower)) {
      article = "der";
    } else if (["thema", "homeoffice", "geschenk", "gehalt", "modell"].includes(lower)) {
      article = "das";
    }

    setModalWord({
      word: cleanWord,
      article,
      plural,
      wordType: article ? "Nomen" : "Wort",
      translation: `Nghĩa tiếng Việt của từ "${cleanWord}"`,
      example: text.length > 100 ? text.substring(0, 100) + "..." : text,
      exampleTrans: `Ví dụ sử dụng từ "${cleanWord}" trong câu.`,
      cefr: "B1",
    });
    setIsModalOpen(true);
  };

  const words = text.split(/(\s+)/);

  return (
    <span className={className}>
      {words.map((part, idx) => {
        if (/^\s+$/.test(part)) return <span key={idx}>{part}</span>;
        return (
          <span
            key={idx}
            onClick={() => handleWordClick(part)}
            className="hover:bg-amber-100 hover:text-primary rounded px-0.5 cursor-pointer transition border-b border-dashed border-slate-300 hover:border-accent"
            title="Bấm để xem từ vựng & lưu vào danh sách"
          >
            {part}
          </span>
        );
      })}

      <WordModal
        wordData={modalWord}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </span>
  );
}
