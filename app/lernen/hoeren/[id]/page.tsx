"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { HOEREN_EXERCISES } from "@/lib/hoeren/data";

export default function HoerenExerciseDetail({ params }: { params: { id: string } }) {
  const exercise = HOEREN_EXERCISES.find((ex) => ex.id === params.id);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // If exercise not found, show error
  if (!exercise) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Không tìm thấy bài tập!</h1>
        <Link href="/lernen/hoeren" className="text-primary mt-4 inline-block font-bold">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  // Calculate if all questions are answered
  const allAnswered = exercise.questions.every((q) => {
    if (q.type === "fill_blank") {
      return answers[q.id]?.trim().length > 0;
    }
    return !!answers[q.id];
  });

  const handleSubmit = async () => {
    let count = 0;
    exercise.questions.forEach((q) => {
      const userAnswer = answers[q.id] || "";
      if (q.type === "fill_blank") {
        if (userAnswer.trim().toLowerCase() === q.correct.toLowerCase()) count++;
      } else {
        if (userAnswer === q.correct) count++;
      }
    });

    const calculatedScore = Math.round((count / exercise.questions.length) * 100);
    setScore(calculatedScore);
    setIsSubmitted(true);
    
    try {
      import('@/lib/utils/sound').then(({ playSuccessSound }) => playSuccessSound());
      localStorage.setItem(`hoeren_progress_${exercise.id}`, `${count}/${exercise.questions.length}`);
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skill: "HOEREN",
          exerciseId: exercise.id,
          score: count,
          maxScore: exercise.questions.length
        })
      });
    } catch (err) {
      console.error("Lỗi khi lưu tiến độ:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/lernen/hoeren" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách bài Nghe
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
          Luyện Nghe {exercise.level} • {exercise.topic}
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-black text-primary">{exercise.title}</h1>
        <p className="text-xs text-slate-500 font-medium">
          Nghe audio bằng AI, chọn đáp án đúng bên dưới. Bài nghe thuộc loại: {exercise.type}.
        </p>
      </div>

      {/* Audio Player */}
      <AudioPlayer
        transcript={exercise.transcript}
        ttsFallbackText={exercise.transcript}
      />

      {/* Questions */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-8">
        <h2 className="text-lg font-bold text-primary border-b pb-3">Câu hỏi nghe hiểu</h2>
        
        {exercise.questions.map((q, index) => {
          const isCorrect = 
            q.type === "fill_blank" 
              ? (answers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase())
              : (answers[q.id] === q.correct);

          return (
            <div key={q.id} className="space-y-3">
              <h3 className="text-sm font-bold text-slate-800 leading-snug">
                Câu {index + 1}: {q.question}
              </h3>

              {q.type === "fill_blank" ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={answers[q.id] || ""}
                    onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                    disabled={isSubmitted}
                    placeholder="Gõ từ còn thiếu..."
                    className="w-full sm:w-1/2 p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  {q.options?.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition ${
                        answers[q.id] === opt
                          ? "border-primary bg-blue-50/50"
                          : "border-slate-100 hover:border-slate-200 bg-white"
                      } ${isSubmitted ? "opacity-60 pointer-events-none" : ""}`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={opt}
                        checked={answers[q.id] === opt}
                        onChange={() => setAnswers({ ...answers, [q.id]: opt })}
                        className="w-4 h-4 text-primary focus:ring-primary border-slate-300"
                        disabled={isSubmitted}
                      />
                      <span className="text-sm font-medium text-slate-700">{opt}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Feedback after submit */}
              {isSubmitted && (
                <div className={`p-3 rounded-xl text-xs flex items-start gap-2 ${isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold block mb-1">
                      {isCorrect ? "Chính xác!" : `Sai rồi! Đáp án đúng là: ${q.correct}`}
                    </span>
                    <span className="opacity-90">{q.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Submit Button */}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full py-3.5 rounded-2xl bg-primary hover:bg-slate-800 text-white font-bold text-xs shadow-md transition disabled:opacity-50 mt-4"
          >
            Kiểm tra đáp án
          </button>
        ) : (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 mt-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-emerald-800">Kết quả: {score}%</h4>
            <p className="text-xs text-emerald-700 font-bold">+50 XP đã được cộng cho Gạo!</p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setAnswers({});
              }}
              className="mt-2 text-xs font-bold text-primary underline"
            >
              Làm lại bài này
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
