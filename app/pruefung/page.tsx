"use client";

import Link from "next/link";
import { Wrench, ArrowRight } from "lucide-react";

export default function ExamOverviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-8 min-h-[60vh]">
      <div className="w-24 h-24 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center shadow-lg shadow-red-100 animate-bounce">
        <Wrench className="w-12 h-12" />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-slate-800">Tính năng Đang Bảo Trì</h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Hệ thống thi thử B1 hiện đang được nâng cấp để mang lại trải nghiệm và chất lượng đề thi tốt nhất. Vui lòng quay lại sau nhé!
        </p>
      </div>
      <Link
        href="/"
        className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold transition shadow-lg hover:shadow-red-200 inline-flex items-center gap-2"
      >
        Về Trang Chủ <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
