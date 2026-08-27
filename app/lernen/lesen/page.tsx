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
        {/* Loại 1 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Loại 1 (Teil 1)</h2>
            <p className="text-sm text-slate-500 font-medium">Đọc hiểu: Chọn Đúng / Sai (Richtig / Falsch)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.filter(ex => ex.type === "Đúng / Sai").map((ex) => (
              <div
                key={ex.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
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

                  <div className="text-xs text-indigo-600 font-bold">
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
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-md"
                  >
                    Luyện ngay <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-slate-500 font-medium">Đọc hiểu: Trắc nghiệm (Multiple Choice A/B/C)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.filter(ex => ex.type === "Trắc nghiệm").map((ex) => (
              <div
                key={ex.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
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
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-md"
                  >
                    Luyện ngay <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-slate-500 font-medium">Đọc hiểu: Chọn Có / Không (Ja / Nein)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.filter(ex => ex.type === "Có / Không").map((ex) => (
              <div
                key={ex.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
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
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-md"
                  >
                    Luyện ngay <ArrowRight className="w-4 h-4" />
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
