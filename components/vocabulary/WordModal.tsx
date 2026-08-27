"use client";

import { useState } from "react";
import { Bookmark, Plus, Check, Volume2, X } from "lucide-react";
import { VocabularyAIEssence } from "@/lib/ai/evaluator";

interface WordModalProps {
  wordData: VocabularyAIEssence | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WordModal({ wordData, isOpen, onClose }: WordModalProps) {
  const [selectedDeck, setSelectedDeck] = useState("b1-pruefung");
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen || !wordData) return null;

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(wordData.word);
      utterance.lang = "de-DE";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Word Header */}
        <div className="flex items-start justify-between gap-3 pr-8">
          <div>
            <div className="flex items-center gap-2">
              {wordData.article && (
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  {wordData.article}
                </span>
              )}
              <h3 className="text-2xl font-black text-primary">{wordData.word}</h3>
              <button
                onClick={speak}
                title="Nghe phát âm chuẩn"
                className="p-1.5 rounded-full text-primary hover:bg-slate-100 transition"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            {wordData.plural && (
              <p className="text-xs text-slate-500 font-medium mt-1">Số nhiều (Plural): {wordData.plural}</p>
            )}
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {wordData.cefr || "B1"}
          </span>
        </div>

        {/* Translation & Word Type */}
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Nghĩa Tiếng Việt</span>
            <p className="text-base font-bold text-slate-800">{wordData.translation}</p>
          </div>

          {wordData.example && (
            <div>
              <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Ví dụ câu Tiếng Đức</span>
              <p className="text-xs font-medium text-slate-700 italic bg-slate-50 p-3 rounded-xl border border-slate-200 mt-1">
                "{wordData.example}"
              </p>
              {wordData.exampleTrans && (
                <p className="text-[11px] text-slate-500 mt-1 pl-1">{wordData.exampleTrans}</p>
              )}
            </div>
          )}
        </div>

        {/* Save to deck selection */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
          <label className="text-xs font-bold text-slate-700 block">
            Chọn danh sách từ vựng lưu trữ:
          </label>
          <select
            value={selectedDeck}
            onChange={(e) => setSelectedDeck(e.target.value)}
            className="w-full text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="b1-pruefung">Bộ từ vựng Thi B1 chuẩn</option>
            <option value="arbeit">Tiếng Đức Công việc & Văn phòng</option>
            <option value="schwierig">Từ vựng cần chú ý (Khó nhớ)</option>
            <option value="alltag">Tiếng Đức Giao tiếp Đời sống</option>
          </select>

          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`w-full py-3 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all ${
              isSaved
                ? "bg-emerald-600 text-white"
                : "bg-primary hover:bg-slate-800 text-white"
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4" />
                Đã lưu thành công vào danh sách của Gạo!
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                Lưu vào danh sách của tôi
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
