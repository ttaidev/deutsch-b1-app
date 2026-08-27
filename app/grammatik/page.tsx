"use client";

import Link from "next/link";
import { GraduationCap, Wrench, ArrowLeft } from "lucide-react";

export default function GrammatikOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
            </div>
            <h1 className="text-3xl font-extrabold text-primary">Ngữ pháp (Grammatik)</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-24 px-4 text-center space-y-6">
        <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center border-4 border-amber-100">
          <Wrench className="w-12 h-12 text-amber-500" />
        </div>
        
        <div className="space-y-2 max-w-lg">
          <h2 className="text-2xl font-black text-slate-900">Tính năng đang được bảo trì</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Hệ thống bài tập và bài giảng ngữ pháp B1 hiện đang được nâng cấp để mang lại trải nghiệm học tập tốt hơn. Gạo quay lại sau nhé!
          </p>
        </div>

        <Link
          href="/"
          className="mt-4 px-6 py-3 rounded-xl bg-primary hover:bg-slate-800 text-white font-bold flex items-center gap-2 transition shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> Về trang chủ
        </Link>
      </div>
    </div>
  );
}
