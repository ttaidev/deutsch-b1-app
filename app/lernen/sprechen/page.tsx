"use client";

import Link from "next/link";
import { Mic, ArrowRight, CheckCircle2 } from "lucide-react";
import { SPRECHEN_TASKS } from "@/lib/sprechen/data";

export default function SprechenOverviewPage() {
  const speakingTasks = SPRECHEN_TASKS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-md">
              <Mic className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-black text-slate-900">Kỹ năng Nói (Sprechen)</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Luyện thu âm Micro và nhận đánh giá tự động từ Trí tuệ nhân tạo.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Loại 1 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Loại 1 (Teil 1)</h2>
            <p className="text-sm text-slate-500 font-medium">Cùng nhau lên kế hoạch cho một sự kiện hoặc hoạt động</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTasks.filter(t => t.type === "Teil 1").map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {t.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.topic}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa nói</span>
                  )}

                  <Link
                    href={`/lernen/sprechen/${t.id}`}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-md"
                  >
                    Luyện Nói <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-slate-500 font-medium">Thuyết trình về một chủ đề cụ thể (có chia sẻ kinh nghiệm bản thân)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTasks.filter(t => t.type === "Teil 2").map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                      {t.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.topic}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa nói</span>
                  )}

                  <Link
                    href={`/lernen/sprechen/${t.id}`}
                    className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-md"
                  >
                    Luyện Nói <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-slate-500 font-medium">Phản hồi và đặt câu hỏi về bài thuyết trình của đối tác</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTasks.filter(t => t.type === "Teil 3").map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                      {t.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.topic}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa nói</span>
                  )}

                  <Link
                    href={`/lernen/sprechen/${t.id}`}
                    className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-md"
                  >
                    Luyện Nói <ArrowRight className="w-4 h-4" />
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
