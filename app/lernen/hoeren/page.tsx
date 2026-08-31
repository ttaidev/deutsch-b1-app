"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Headphones, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { HOEREN_EXERCISES } from "@/lib/hoeren/data";

export default function HoerenOverviewPage() {
  const [exercises, setExercises] = useState(HOEREN_EXERCISES);

  useEffect(() => {
    const updated = HOEREN_EXERCISES.map(ex => {
      const savedScore = localStorage.getItem(`hoeren_progress_${ex.id}`);
      if (savedScore) {
        return { ...ex, completed: true, score: savedScore };
      }
      return ex as any; // Cast to bypass strict type for temporary completed state
    });
    setExercises(updated);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold shadow-md">
              <Headphones className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-black text-slate-900">Kỹ năng Nghe hiểu (Hören)</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Luyện nghe bằng giọng đọc AI tiếng Đức bản xứ, tự động điều chỉnh tốc độ.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Loại 1 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Loại 1 (Teil 1)</h2>
            <p className="text-sm text-slate-500 font-medium">Nghe đoạn hội thoại và chọn đáp án đúng</p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory hide-scrollbar">
            {exercises.filter(ex => ex.id.startsWith("hoeren-1-")).map((ex: any) => (
              <div
                key={ex.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1 shrink-0 w-[320px] sm:w-[350px] snap-center"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Chuẩn {ex.level}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {ex.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{ex.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{ex.topic} • {ex.type}</p>
                  </div>
                  
                  <div className="text-xs text-amber-600 font-bold">
                    {ex.questions.length} câu hỏi • AI Text-to-Speech
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {ex.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> Đạt: {ex.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa nghe</span>
                  )}

                  <Link
                    href={`/lernen/hoeren/${ex.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#f59e0b', '--btn-border': '#b45309' } as React.CSSProperties}
                  >
                    Luyện Nghe <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loại 2 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Loại 2 (Teil 2)</h2>
            <p className="text-sm text-slate-500 font-medium">Nghe thông báo và điền thông tin còn thiếu</p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory hide-scrollbar">
            {exercises.filter(ex => ex.id.startsWith("hoeren-2-")).map((ex: any) => (
              <div
                key={ex.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1 shrink-0 w-[320px] sm:w-[350px] snap-center"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Chuẩn {ex.level}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {ex.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{ex.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{ex.topic} • {ex.type}</p>
                  </div>
                  
                  <div className="text-xs text-blue-600 font-bold">
                    {ex.questions.length} chỗ trống • AI Text-to-Speech
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {ex.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> Đạt: {ex.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa nghe</span>
                  )}

                  <Link
                    href={`/lernen/hoeren/${ex.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#3b82f6', '--btn-border': '#1d4ed8' } as React.CSSProperties}
                  >
                    Luyện Nghe <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loại 3 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Loại 3 (Teil 3)</h2>
            <p className="text-sm text-slate-500 font-medium">Nghe đoạn độc thoại/hội thoại dài và trả lời câu hỏi</p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory hide-scrollbar">
            {exercises.filter(ex => ex.id.startsWith("hoeren-3-")).map((ex: any) => (
              <div
                key={ex.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1 shrink-0 w-[320px] sm:w-[350px] snap-center"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Chuẩn {ex.level}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {ex.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{ex.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{ex.topic} • {ex.type}</p>
                  </div>
                  
                  <div className="text-xs text-emerald-600 font-bold">
                    {ex.questions.length} câu hỏi • AI Text-to-Speech
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {ex.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> Đạt: {ex.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa nghe</span>
                  )}

                  <Link
                    href={`/lernen/hoeren/${ex.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#10b981', '--btn-border': '#047857' } as React.CSSProperties}
                  >
                    Luyện Nghe <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
