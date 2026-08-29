export const dynamic = "force-dynamic";

import Link from "next/link";
import { getCurrentUser } from "@/lib/auth/session";
import { getPersonalizedRecommendations } from "@/lib/recommendations/engine";
import { getUserDashboardStats } from "@/lib/db/progress";
import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  Flame, 
  Zap, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles,
  TrendingUp
} from "lucide-react";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const { weaknesses, recommendations } = await getPersonalizedRecommendations(user.id);
  const stats = await getUserDashboardStats(user.id);

  const skills = [
    {
      id: "lesen",
      title: "Luyện Đọc (Lesen)",
      subtitle: "Đọc hiểu B1",
      progress: stats.skills.lesen.progress,
      completed: stats.skills.lesen.completed,
      recentScore: stats.skills.lesen.recentScore,
      href: "/lernen/lesen",
      icon: BookOpen,
      gradient: "from-blue-600 to-indigo-600",
      bgHex: "#3b82f6",
      borderHex: "#1d4ed8",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      id: "hoeren",
      title: "Luyện Nghe (Hören)",
      subtitle: "Nghe hiểu B1",
      progress: stats.skills.hoeren.progress,
      completed: stats.skills.hoeren.completed,
      recentScore: stats.skills.hoeren.recentScore,
      href: "/lernen/hoeren",
      icon: Headphones,
      gradient: "from-amber-500 to-orange-500",
      bgHex: "#f59e0b",
      borderHex: "#b45309",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      id: "schreiben",
      title: "Luyện Viết (Schreiben)",
      subtitle: "Viết luận B1",
      progress: stats.skills.schreiben.progress,
      completed: stats.skills.schreiben.completed,
      recentScore: stats.skills.schreiben.recentScore,
      href: "/lernen/schreiben",
      icon: PenTool,
      gradient: "from-purple-600 to-pink-600",
      bgHex: "#9333ea",
      borderHex: "#6b21a8",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      id: "sprechen",
      title: "Luyện Nói (Sprechen)",
      subtitle: "Nói phản xạ B1",
      progress: stats.skills.sprechen.progress,
      completed: stats.skills.sprechen.completed,
      recentScore: stats.skills.sprechen.recentScore,
      href: "/lernen/sprechen",
      icon: Mic,
      gradient: "from-emerald-500 to-teal-600",
      bgHex: "#10b981",
      borderHex: "#047857",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Greeting & Overall Progress */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-purple-800/50">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Bảng điều khiển cá nhân</span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Xin chào, {user.name} 👋
          </h1>
          <p className="text-sm text-purple-100 font-medium">
            Trình độ hiện tại: <span className="font-bold text-white px-2.5 py-0.5 rounded-full bg-rose-500 text-xs">Trình độ B1</span>. Hãy tiếp tục lộ trình ôn luyện!
          </p>
        </div>

        {/* Quick Stats Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
            <span className="text-[10px] font-bold uppercase text-amber-300 block">Chuỗi học tập</span>
            <div className="flex items-center gap-1 font-black text-amber-400 text-lg">
              <Flame className="w-5 h-5 fill-amber-400" /> {user.streak} Ngày
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
            <span className="text-[10px] font-bold uppercase text-emerald-300 block">Tổng XP</span>
            <div className="flex items-center gap-1 font-black text-emerald-400 text-lg">
              <Zap className="w-5 h-5 fill-emerald-400" /> {user.xp} XP
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
            <span className="text-[10px] font-bold uppercase text-rose-300 block">Độ sẵn sàng B1</span>
            <div className="font-black text-white text-lg">{stats.overview.overallReadiness}%</div>
          </div>
        </div>
      </div>

      {/* Premium Video Box */}
      <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 overflow-hidden relative group hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="rounded-2xl overflow-hidden shadow-inner relative bg-black/5 flex justify-center w-full max-h-[300px]">
          <video 
            src="/meovideo.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 flex items-center gap-2.5 shadow-sm">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </div>
            <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Động Lực Học Tập</span>
          </div>
        </div>
      </div>

      {/* Overview Metric Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1 hover:border-indigo-300 transition">
          <span className="text-xs text-slate-500 font-bold">Bài tập đã làm</span>
          <p className="text-2xl sm:text-3xl font-black text-indigo-600">{stats.overview.totalCompletedExercises}</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1 hover:border-purple-300 transition">
          <span className="text-xs text-slate-500 font-bold">Từ vựng đã học</span>
          <p className="text-2xl sm:text-3xl font-black text-purple-600">{stats.overview.vocabLearned}</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1 hover:border-emerald-300 transition">
          <span className="text-xs text-slate-500 font-bold">Lần thi thử B1</span>
          <p className="text-2xl sm:text-3xl font-black text-emerald-600">{stats.overview.examsCompleted}</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1 hover:border-rose-300 transition">
          <span className="text-xs text-slate-500 font-bold">Từ vựng cần ôn hôm nay</span>
          <p className="text-2xl sm:text-3xl font-black text-rose-600">{stats.overview.vocabToReviewToday}</p>
        </div>
      </div>

      {/* 4 Core Skill Cards Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" /> Các kỹ năng của bạn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${skill.gradient} text-white flex items-center justify-center font-bold shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border">
                      {skill.progress}%
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900">{skill.title}</h3>
                    <p className="text-xs text-slate-500 font-bold">{skill.subtitle}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-500`}
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1">
                      <span>{skill.completed} Bài tập</span>
                      <span>Điểm gần nhất: <strong className="text-slate-900">{skill.recentScore}</strong></span>
                    </div>
                  </div>
                </div>

                <Link
                  href={skill.href}
                  className="btn-3d w-full text-xs"
                  style={{ '--btn-bg': skill.bgHex, '--btn-border': skill.borderHex } as React.CSSProperties}
                >
                  Tiếp tục học <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Personalized Recommendations & Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Gợi ý dành riêng cho bạn */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" /> Gợi ý học tập dành riêng cho bạn
            </h3>
            <span className="text-xs font-bold text-slate-400">Dựa trên tiến độ cá nhân</span>
          </div>

          <div className="space-y-3">
            {recommendations.map((rec) => (
              <Link
                key={rec.id}
                href={rec.actionUrl}
                className="p-4 rounded-2xl border border-slate-200 hover:border-purple-300 bg-slate-50 hover:bg-purple-50/40 transition flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-600 text-white">
                      {rec.badge}
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-purple-600 transition">
                      {rec.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{rec.subtitle}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Điểm cần cải thiện */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-lg space-y-4">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" /> Điểm cần cải thiện
          </h3>

          <div className="space-y-3">
            {weaknesses.map((weak) => (
              <div key={weak.id} className="p-4 rounded-2xl border border-amber-200 bg-amber-50/60 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900">{weak.topic}</span>
                  <span className="text-xs font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    {weak.accuracy}% Độ chính xác
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium">{weak.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
