"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, PenTool, CheckCircle2, AlertCircle, Sparkles, RefreshCw } from "lucide-react";
import { evaluateWriting } from "@/lib/ai/evaluator";
import type { WritingFeedback } from "@/lib/ai/evaluator";

import { SCHREIBEN_TASKS } from "@/lib/schreiben/data";
import { notFound } from "next/navigation";

export default function SchreibenTaskDetail({ params }: { params: { id: string } }) {
  const [content, setContent] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);

  const task = SCHREIBEN_TASKS.find((t) => t.id === params.id);
  if (!task) {
    notFound();
  }

  const words = content.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const handleSubmit = async () => {
    setIsEvaluating(true);
    const result = await evaluateWriting(task.prompt, content, task.minWords);
    setFeedback(result);
    setIsEvaluating(false);

    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skill: "SCHREIBEN",
          exerciseId: task.id,
          score: result.score,
          maxScore: 100
        })
      });
    } catch (err) {
      console.error("Lỗi khi lưu tiến độ:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/lernen/schreiben" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách bài Viết
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
          Luyện Viết B1 • Phần 1 (Informeller Brief)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Task Prompt & Points Checklist */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
          <h2 className="text-lg font-bold text-primary border-b pb-3">{task.title}</h2>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs leading-relaxed text-slate-700 font-medium whitespace-pre-line">
            {task.prompt}
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl space-y-2 text-xs text-purple-950">
            <span className="font-bold block text-purple-900">Yêu cầu bắt buộc bài viết B1:</span>
            <ul className="list-disc pl-4 space-y-1 font-medium text-purple-900">
              <li>Trả lời đầy đủ cả 3 ý gợi ý trong đề bài</li>
              <li>Số từ tối thiểu: {task.minWords} từ</li>
              <li>Có xưng hô & lời chào phù hợp (VD: "Lieber Alex", "Viele Grüße")</li>
            </ul>
          </div>
        </div>

        {/* Right: Writing Editor & Realtime Metrics */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Khung gõ bài viết của bạn</span>
              <div className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                wordCount >= task.minWords
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}>
                {wordCount} / {task.minWords} từ
              </div>
            </div>

            <textarea
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Lieber Alex, vielen Dank für deine Einladung..."
              className="w-full text-xs font-mono leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            />

            <button
              onClick={handleSubmit}
              disabled={isEvaluating || wordCount < 10}
              className="w-full py-3.5 rounded-2xl bg-primary hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isEvaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> AI đang chấm điểm và phân tích bài viết...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-accent" /> Nộp bài & Nhận nhận xét chi tiết từ AI
                </>
              )}
            </button>
          </div>

          {/* Feedback Output */}
          {feedback && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400">Kết quả phân tích bài viết</span>
                  <h3 className="text-xl font-black text-primary">Điểm tổng kết: {feedback.score}%</h3>
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold text-xs">
                  Đạt chuẩn B1
                </div>
              </div>

              {/* 4 Criteria Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>Mức độ đáp ứng đề bài</span>
                    <span>{feedback.criteria.aufgabe.score}%</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">{feedback.criteria.aufgabe.comment}</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>Ngữ pháp (Grammatik)</span>
                    <span>{feedback.criteria.grammatik.score}%</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">{feedback.criteria.grammatik.comment}</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>Từ vựng (Wortschatz)</span>
                    <span>{feedback.criteria.wortschatz.score}%</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">{feedback.criteria.wortschatz.comment}</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>Cấu trúc & Mạch lạc</span>
                    <span>{feedback.criteria.struktur.score}%</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium">{feedback.criteria.struktur.comment}</p>
                </div>
              </div>

              {/* Corrections */}
              {feedback.corrections.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 block">Gợi ý sửa lỗi chi tiết:</span>
                  {feedback.corrections.map((c, idx) => (
                    <div key={idx} className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs space-y-1">
                      <p className="text-red-700 line-through">Câu gõ của Gạo: {c.original}</p>
                      <p className="text-emerald-700 font-bold">Câu chuẩn: {c.corrected}</p>
                      <p className="text-slate-600 text-[11px] font-medium">{c.explanation}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 flex items-start gap-2 font-medium">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{feedback.disclaimer}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
