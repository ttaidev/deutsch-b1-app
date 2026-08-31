"use client";

import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight, Clock, Award } from "lucide-react";

import { useState, useEffect } from "react";
import { LESEN_EXERCISES } from "@/lib/lesen/data";

export default function LesenOverviewPage() {
  const [exercises, setExercises] = useState(LESEN_EXERCISES);

  useEffect(() => {
    const updated = LESEN_EXERCISES.map(ex => {
      const savedScore = localStorage.getItem(`lesen_progress_${ex.id}`);
      if (savedScore) {
        return { ...ex, completed: true, score: savedScore };
      }
      return ex;
    });
    setExercises(updated);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Module Title */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center font-bold shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-black text-slate-900">Kỹ năng Đọc hiểu (Lesen B1)</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Rèn luyện kỹ năng đọc hiểu văn bản tiếng Đức chuyên sâu bám sát cấu trúc đề thi B1 chính thức.
          </p>
        </div>

        {/* Level Badge (Exclusively B1) */}
        <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-4 py-2 rounded-2xl text-xs font-black text-indigo-700">
          <Award className="w-4 h-4 text-indigo-600" />
          <span>Chương trình chuyên luyện Trình độ B1</span>
        </div>
      </div>

      <div className="space-y-12">
        {[
          { id: 1, title: "Loại 1 (Teil 1)", desc: "Đọc hiểu: Chọn Đúng / Sai (Richtig / Falsch)", type: "Đúng / Sai", colorMain: "bg-indigo-50 text-indigo-700 border-indigo-200", colorText: "text-indigo-600", btnStyle: { '--btn-bg': '#4f46e5', '--btn-border': '#3730a3' } },
          { id: 2, title: "Loại 2 (Teil 2)", desc: "Đọc hiểu: Trắc nghiệm (Multiple Choice A/B/C)", type: "Trắc nghiệm", colorMain: "bg-blue-50 text-blue-700 border-blue-200", colorText: "text-blue-600", btnStyle: { '--btn-bg': '#2563eb', '--btn-border': '#1e40af' } },
          { id: 3, title: "Loại 3 (Teil 3)", desc: "Đọc hiểu: Ghép thông tin (Zuordnen)", type: "Ghép thông tin", colorMain: "bg-emerald-50 text-emerald-700 border-emerald-200", colorText: "text-emerald-600", btnStyle: { '--btn-bg': '#059669', '--btn-border': '#065f46' } },
          { id: 4, title: "Loại 4 (Teil 4)", desc: "Đọc hiểu: Quan điểm (Ja / Nein)", type: "Ý kiến", colorMain: "bg-amber-50 text-amber-700 border-amber-200", colorText: "text-amber-600", btnStyle: { '--btn-bg': '#d97706', '--btn-border': '#b45309' } },
          { id: 5, title: "Loại 5 (Teil 5)", desc: "Đọc hiểu: Quy định & Thông báo (Multiple Choice)", type: "Quy định & Thông báo", colorMain: "bg-rose-50 text-rose-700 border-rose-200", colorText: "text-rose-600", btnStyle: { '--btn-bg': '#e11d48', '--btn-border': '#be123c' } },
        ].map(cat => (
          <div key={cat.id} className="space-y-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">{cat.title}</h2>
              <p className="text-sm text-slate-500 font-medium">{cat.desc}</p>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory hide-scrollbar">
              {exercises.filter(ex => ex.type === cat.type).map((ex) => (
                <div
                  key={ex.id}
                  className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1 shrink-0 w-[320px] sm:w-[350px] snap-center"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black px-3 py-0.5 rounded-full border ${cat.colorMain}`}>
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

                    <div className={`text-xs font-bold ${cat.colorText}`}>
                      {ex.questions.length} câu hỏi • Bấm vào từ để tra nghĩa & lưu từ vựng
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {ex.completed ? (
                      <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                        <CheckCircle2 className="w-4 h-4" /> Đạt: {ex.score}
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">Chưa làm</span>
                    )}

                    <Link
                      href={`/lernen/lesen/${ex.id}`}
                      className="btn-3d text-xs px-4 py-2.5"
                      style={cat.btnStyle as React.CSSProperties}
                    >
                      Luyện ngay <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
