"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  Bookmark, 
  GraduationCap, 
  Award, 
  Bot, 
  ShieldCheck, 
  Flame, 
  Zap, 
  LayoutDashboard,
  Menu,
  X,
  ChevronRight,
  User as UserIcon,
  Home
} from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  user?: {
    name: string;
    avatar: string;
    xp: number;
    streak: number;
  };
}

export function Navbar({ user = { name: "Gạoo", avatar: "https://i.pinimg.com/736x/e4/e9/42/e4e942729798f81701b9df9b89ff8dad.jpg", xp: 0, streak: 0 } }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Trang chủ", icon: Home, color: "text-slate-500" },
    { href: "/dashboard", label: "Tổng quan", icon: LayoutDashboard, color: "text-blue-500" },
    { href: "/lernen/lesen", label: "Luyện Đọc (Lesen)", icon: BookOpen, color: "text-indigo-500" },
    { href: "/lernen/hoeren", label: "Luyện Nghe (Hören)", icon: Headphones, color: "text-amber-500" },
    { href: "/lernen/schreiben", label: "Luyện Viết (Schreiben)", icon: PenTool, color: "text-purple-500" },
    { href: "/lernen/sprechen", label: "Luyện Nói (Sprechen)", icon: Mic, color: "text-emerald-500" },
    { href: "/vokabeln", label: "Từ vựng (Wortschatz)", icon: Bookmark, color: "text-rose-500" },
    { href: "/grammatik", label: "Ngữ pháp (Grammatik)", icon: GraduationCap, color: "text-cyan-500" },
  ];

  return (
    <>
      {/* MOBILE TOP BAR (Visible only on < lg screens) */}
      <header className="lg:hidden sticky top-0 z-50 glass-panel border-b border-slate-200/80 shadow-xs">
        <div className="px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-rose-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
              <span className="text-amber-300 font-black text-xs">B1</span>
            </div>
            <div>
              <span className="font-extrabold text-base bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-600 bg-clip-text text-transparent leading-none block">
                Deutsch <span className="text-rose-600">B1</span>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>{user.streak}N</span>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-2xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                    isActive ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : link.color}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
              <Link href="/profil" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full border border-indigo-400 object-cover" />
                <span>{user.name}</span>
              </Link>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {user.xp} XP
              </span>
            </div>
          </div>
        )}
      </header>

      {/* DESKTOP VERTICAL SIDEBAR (Visible on >= lg screens, fixed on left) */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 bg-white border-r border-slate-200/90 z-40 shadow-sm">
        {/* Top Logo Section */}
        <div className="p-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-rose-500 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
              <span className="text-amber-300 font-black">B1</span>
            </div>
            <div>
              <span className="font-black text-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-rose-700 bg-clip-text text-transparent tracking-tight block leading-tight">
                Deutsch <span className="text-rose-600">B1</span>
              </span>
              <span className="text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest block">
                Plattform B1
              </span>
            </div>
          </Link>
        </div>

        {/* User Stats Card in Sidebar */}
        <div className="px-4 py-3 mx-4 mt-4 bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-2xl border border-slate-200/80 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Trạng thái học</span>
            <span className="text-[11px] text-indigo-600">Level B1</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-amber-200 text-amber-900 text-xs font-black shadow-2xs">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
              <span>{user.streak} Ngày</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-emerald-200 text-emerald-900 text-xs font-black shadow-2xs">
              <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500 shrink-0" />
              <span>{user.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Vertical Nav Links */}
        <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto scrollbar-none">
          <div className="px-2 pb-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            Menu Chức Năng
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === "/" ? pathname === "/" : (link.href !== "/dashboard" ? pathname.startsWith(link.href) : pathname === "/dashboard");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all group ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-white" : link.color}`} />
                  <span>{link.label}</span>
                </div>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-white/80" />}
              </Link>
            );
          })}
        </div>

        {/* Bottom Profile Footer */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/profil"
            className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-100 transition border border-transparent hover:border-slate-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-9 h-9 rounded-full border-2 border-indigo-400 object-cover shadow-xs"
              />
              <div className="text-left">
                <span className="text-xs font-extrabold text-slate-800 block leading-tight">{user.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">Hồ sơ cá nhân</span>
              </div>
            </div>
            <UserIcon className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </aside>
    </>
  );
}
