"use client";

import Link from "next/link";
import { PenTool, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

import { SCHREIBEN_TASKS } from "@/lib/schreiben/data";

export default function SchreibenOverviewPage() {
  const tasks = SCHREIBEN_TASKS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold shadow-md">
              <PenTool className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-black text-slate-900">Kỹ năng Viết (Schreiben)</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Tạo bài viết B1 với công cụ đếm từ, kiểm tra tiêu chí và nhận đánh giá ngữ pháp chi tiết.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Loại 1 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Loại 1 (Teil 1)</h2>
            <p className="text-sm text-slate-500 font-medium">Email cá nhân khoảng 80 từ phản hồi lời mời hoặc yêu cầu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tasks.filter(t => t.type === "Teil 1").map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      {t.level}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {t.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.topic} • Tối thiểu {t.minWords} từ</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa viết</span>
                  )}

                  <Link
                    href={`/lernen/schreiben/${t.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#9333ea', '--btn-border': '#6b21a8' } as React.CSSProperties}
                  >
                    Viết ngay <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-slate-500 font-medium">Cho ý kiến về một chủ đề nào đó khoảng 80 từ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tasks.filter(t => t.type === "Teil 2").map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {t.level}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {t.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.topic} • Tối thiểu {t.minWords} từ</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa viết</span>
                  )}

                  <Link
                    href={`/lernen/schreiben/${t.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#2563eb', '--btn-border': '#1e40af' } as React.CSSProperties}
                  >
                    Viết ngay <ArrowRight className="w-4 h-4" />
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
            <p className="text-sm text-slate-500 font-medium">Viết email trang trọng khoảng 40 từ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tasks.filter(t => t.type === "Teil 3").map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {t.level}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {t.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{t.title}</h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">{t.topic} • Tối thiểu {t.minWords} từ</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {t.completed ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" /> {t.score}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Chưa viết</span>
                  )}

                  <Link
                    href={`/lernen/schreiben/${t.id}`}
                    className="btn-3d text-xs px-4 py-2.5"
                    style={{ '--btn-bg': '#059669', '--btn-border': '#065f46' } as React.CSSProperties}
                  >
                    Viết ngay <ArrowRight className="w-4 h-4" />
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
