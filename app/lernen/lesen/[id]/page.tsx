"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, XCircle, Bookmark, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import { WordModal } from "@/components/vocabulary/WordModal";
import { LESEN_EXERCISES } from "@/lib/lesen/data";
import { notFound } from "next/navigation";
import { type VocabularyAIEssence, autoCompleteVocabulary } from "@/lib/ai/evaluator";

export default function LesenExerciseDetail({ params }: { params: { id: string } }) {
  const exercise = LESEN_EXERCISES.find((ex) => ex.id === params.id);
  
  if (!exercise) {
    notFound();
  }

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalWord, setModalWord] = useState<VocabularyAIEssence | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const readingText = exercise.readingText;
  const questions = exercise.questions;

  const handleSelectOption = (qId: number, optionKey: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionKey }));
  };

  const handleWordClick = async (word: string) => {
    const cleanWord = word.replace(/[^a-zA-ZäöüÄÖÜß]/g, "");
    if (!cleanWord || isTranslating) return;

    setIsTranslating(true);
    setModalWord(null);
    setIsModalOpen(true);
    
    try {
      const res = await autoCompleteVocabulary(cleanWord);
      setModalWord(res);
    } catch (error) {
      console.error("Lỗi tra từ:", error);
      setIsModalOpen(false);
    } finally {
      setIsTranslating(false);
    }
  };

  // Render text words clickable and handle newlines
  const renderInteractiveText = (text: string) => {
    return text.split("\n").map((line, lineIdx) => (
      <p key={lineIdx} className="mb-5 last:mb-0 text-justify">
        {line.split(" ").map((w, wIdx) => {
          if (!w) return null;
          return (
            <span
              key={`${lineIdx}-${wIdx}`}
              onClick={() => handleWordClick(w)}
              className="inline-block mr-[5px] px-[2px] cursor-pointer transition-all duration-200 text-slate-800 hover:text-indigo-800 hover:bg-indigo-100/80 rounded-md border-b-2 border-transparent hover:border-indigo-300"
              title="Bấm để tra nghĩa từ vựng & lưu trữ"
            >
              {w}
            </span>
          );
        })}
      </p>
    ));
  };

  const getCorrectCount = () => {
    let count = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) count += 1;
    });
    return count;
  };

  const calculateScore = () => {
    return Math.round((getCorrectCount() / questions.length) * 100);
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const score = getCorrectCount();
    
    try {
      import('@/lib/utils/sound').then(({ playSuccessSound }) => playSuccessSound());
      localStorage.setItem(`lesen_progress_${exercise.id}`, `${score}/${questions.length}`);
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skill: "LESEN",
          exerciseId: exercise.id,
          score: score,
          maxScore: questions.length
        })
      });
    } catch (err) {
      console.error("Lỗi khi lưu tiến độ:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/lernen/lesen" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách bài Đọc
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
          Luyện Đọc {exercise.level} • {exercise.topic}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Reading Passage */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/40 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-indigo-600" />
              Bài đọc: {exercise.title}
            </h2>
            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              Mẹo: Bấm vào từ để tra nghĩa
            </span>
          </div>

          <div className="p-6 md:p-8 bg-[#fdfbf7] rounded-2xl border border-[#e8e4d9] shadow-inner text-[16px] leading-[2.2] text-slate-800 font-serif">
            {renderInteractiveText(readingText)}
          </div>
        </div>

        {/* Right: Questions & Quiz */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
            <h2 className="text-lg font-bold text-primary border-b pb-3">Câu hỏi đọc hiểu B1</h2>

            {questions.map((q) => (
              <div key={q.id} className="space-y-3">
                <p className="text-sm font-bold text-slate-800">
                  {q.id}. {q.question}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const optKey = opt;
                    const isSelected = selectedAnswers[q.id] === optKey;
                    const isCorrectOpt = q.correct === optKey;

                    let style = "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700";
                    if (isSelected) {
                      style = "bg-primary text-white border-primary";
                    }
                    if (isSubmitted) {
                      if (isCorrectOpt) {
                        style = "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold";
                      } else if (isSelected && !isCorrectOpt) {
                        style = "bg-red-50 text-red-800 border-red-300 font-bold";
                      }
                    }

                    return (
                      <button
                        key={optKey}
                        onClick={() => handleSelectOption(q.id, optKey)}
                        className={`w-full text-left p-3.5 rounded-2xl border text-xs font-medium transition ${style}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {isSubmitted && (
                  <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900 space-y-1">
                    <p className="font-bold">Giải thích đáp án chi tiết:</p>
                    <p>{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length < questions.length}
                className="w-full py-3.5 rounded-2xl bg-primary hover:bg-slate-800 text-white font-bold text-xs shadow-md transition disabled:opacity-50"
              >
                Kiểm tra đáp án
              </button>
            ) : (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-800">Kết quả: {calculateScore()}%</h4>
                <p className="text-xs text-emerald-700 font-bold">+50 XP đã được cộng cho Gạo!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Clickable Word Modal */}
      <WordModal
        wordData={modalWord}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isLoading={isTranslating}
      />
    </div>
  );
}
