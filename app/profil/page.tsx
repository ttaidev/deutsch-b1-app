export const dynamic = "force-dynamic";

import { getCurrentUser } from "@/lib/auth/session";
import { getUserDashboardStats } from "@/lib/db/progress";
import { User, Flame, Zap, Award, BookOpen, Clock, ShieldCheck } from "lucide-react";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const stats = await getUserDashboardStats(user.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center gap-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover shadow-md"
        />
        <div className="space-y-2 text-center sm:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-black text-primary">{user.name}</h1>
            <span className="px-3 py-0.5 rounded-full bg-accent text-white font-bold text-xs">
              Trình độ {user.currentLevel}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">{user.email}</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Flame className="w-4 h-4 fill-amber-500" /> {user.streak} Ngày liên tục
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Zap className="w-4 h-4 fill-emerald-500" /> {user.xp} Tổng XP
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
        <h3 className="text-lg font-bold text-primary border-b pb-3">Thành tích & Cột mốc học tập của Gạo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
            <Award className="w-8 h-8 text-accent" />
            <div>
              <h4 className="text-xs font-bold text-primary">Tiến độ B1</h4>
              <p className="text-[11px] text-slate-500 font-medium">{stats.overview.overallReadiness}% Hoàn thành</p>
            </div>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="text-xs font-bold text-primary">Bậc thầy từ vựng</h4>
              <p className="text-[11px] text-slate-500 font-medium">Đã học {stats.overview.vocabLearned} từ</p>
            </div>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <div>
              <h4 className="text-xs font-bold text-primary">Sẵn sàng thi B1</h4>
              <p className="text-[11px] text-slate-500 font-medium">Đã làm {stats.overview.examsCompleted} Đề thi thử</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
