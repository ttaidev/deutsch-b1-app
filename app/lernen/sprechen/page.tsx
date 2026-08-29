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
            <h1 className="text-3xl font-black text-slate-900">Luyện phát âm (Aussprache)</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Luyện phát âm chuẩn xác các từ vựng và mẫu câu tiếng Đức với công nghệ nhận diện giọng nói AI.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Từ vựng */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Phát âm từ vựng</h2>
            <p className="text-sm text-slate-500 font-medium">Luyện đọc các từ vựng tiếng Đức dễ phát âm sai</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTasks.filter(t => t.type === "Từ vựng").map((t) => (
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
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.targetText}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.translation}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa đọc</span>
                  )}

                  <Link
                    href={`/lernen/sprechen/${t.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#059669', '--btn-border': '#065f46' } as React.CSSProperties}
                  >
                    Luyện Đọc <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Câu giao tiếp */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Phát âm mẫu câu</h2>
            <p className="text-sm text-slate-500 font-medium">Luyện ngữ điệu qua các câu giao tiếp hàng ngày</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTasks.filter(t => t.type === "Câu giao tiếp").map((t) => (
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
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.targetText}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.translation}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa đọc</span>
                  )}

                  <Link
                    href={`/lernen/sprechen/${t.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#0d9488', '--btn-border': '#115e59' } as React.CSSProperties}
                  >
                    Luyện Đọc <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Líu lưỡi */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Thử thách đọc nhanh (Zungenbrecher)</h2>
            <p className="text-sm text-slate-500 font-medium">Luyện phản xạ và sự dẻo dai của cơ miệng</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTasks.filter(t => t.type === "Líu lưỡi").map((t) => (
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
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.targetText}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.translation}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa đọc</span>
                  )}

                  <Link
                    href={`/lernen/sprechen/${t.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#0891b2', '--btn-border': '#155e75' } as React.CSSProperties}
                  >
                    Luyện Đọc <ArrowRight className="w-4 h-4" />
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
