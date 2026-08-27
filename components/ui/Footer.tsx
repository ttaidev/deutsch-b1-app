import Link from "next/link";
import { Shield, Heart, Sparkles, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-rose-500 text-white flex items-center justify-center font-bold shadow-md">
                <span className="text-amber-300 font-black text-xs">B1</span>
              </div>
              <span className="font-extrabold text-lg text-white">Deutsch B1</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Nền tảng học và luyện thi tiếng Đức B1 cá nhân hóa cao cấp. Rèn luyện 4 kỹ năng Nghe, Nói, Đọc, Viết & Flashcard thông minh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Các kỹ năng B1</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/lernen/lesen" className="hover:text-indigo-400 transition">Kỹ năng Đọc (Lesen)</Link></li>
              <li><Link href="/lernen/hoeren" className="hover:text-indigo-400 transition">Kỹ năng Nghe (Hören)</Link></li>
              <li><Link href="/lernen/schreiben" className="hover:text-indigo-400 transition">Kỹ năng Viết (Schreiben)</Link></li>
              <li><Link href="/lernen/sprechen" className="hover:text-indigo-400 transition">Kỹ năng Nói (Sprechen)</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Chương trình học</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/vokabeln" className="hover:text-indigo-400 transition">Thẻ từ vựng (SM-2 Spaced Repetition)</Link></li>
              <li><Link href="/grammatik" className="hover:text-indigo-400 transition">Ngữ pháp B1 trọng tâm</Link></li>
            </ul>
          </div>

          {/* Dedicated Gift Card */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Phiên bản đặc biệt</h4>
            <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 p-4 rounded-2xl border border-indigo-700/50 text-xs text-indigo-100 space-y-2 shadow-lg">
              <div className="flex items-center gap-1.5 font-extrabold text-amber-300">
                <Sparkles className="w-4 h-4" /> Dành riêng cho Gạo
              </div>
              <p className="text-[11px] leading-relaxed text-indigo-200">
                Ứng dụng được thiết kế và xây dựng riêng cho <strong className="text-white">Gạo</strong> để luyện thi bằng B1 tiếng Đức thật hiệu quả và đạt điểm số cao nhất!
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Creator Credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-medium">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <p>© {new Date().getFullYear()} Deutsch B1. from ttai</p>
          </div>
          <div className="flex items-center gap-1 text-slate-300 font-bold">
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px]">
              Gạo ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
