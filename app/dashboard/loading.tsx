import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  Flame, 
  Zap, 
  Sparkles,
  AlertTriangle
} from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-pulse">
      {/* Loading Message */}
      <div className="bg-amber-50 text-amber-700 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 font-black text-sm border-2 border-amber-200/50 shadow-md">
        <img src="/blue-cat.gif" alt="Loading..." className="w-20 h-20 object-contain rounded-xl" />
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500 animate-spin" />
          <span>ĐỢI TÍ NHÉ, WEB ĐANG ĐỒNG BỘ DỮ LIỆU...</span>
        </div>
      </div>

      {/* Header Skeleton - Vibrant Gradient */}
      <div className="bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-rose-900/70 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-purple-800/30 shadow-2xl">
        <div className="space-y-4 w-full md:w-1/2">
          <div className="h-4 bg-purple-300/30 rounded w-1/4"></div>
          <div className="h-8 bg-white/20 rounded w-3/4"></div>
          <div className="h-4 bg-purple-100/20 rounded w-1/2"></div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl w-24 h-16 border border-white/5"></div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl w-24 h-16 border border-white/5"></div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl w-24 h-16 border border-white/5"></div>
        </div>
      </div>

      {/* Overview Metric Bar Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          "bg-indigo-50 border-indigo-100", 
          "bg-purple-50 border-purple-100", 
          "bg-emerald-50 border-emerald-100", 
          "bg-rose-50 border-rose-100"
        ].map((bgClass, i) => (
          <div key={i} className={`p-4 sm:p-5 rounded-2xl border shadow-sm space-y-3 ${bgClass}`}>
            <div className="h-3 bg-slate-300/60 rounded w-1/2"></div>
            <div className="h-8 bg-slate-400/40 rounded w-1/3"></div>
          </div>
        ))}
      </div>

      {/* 4 Core Skill Cards Grid Skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-indigo-100 rounded w-48 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "from-blue-600/40 to-indigo-600/40",
            "from-amber-500/40 to-orange-500/40",
            "from-purple-600/40 to-pink-600/40",
            "from-emerald-500/40 to-teal-600/40"
          ].map((gradient, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md space-y-4 h-64 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${gradient}`}></div>
                  <div className="w-12 h-6 rounded-full bg-slate-100"></div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="h-5 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-100 rounded w-1/2"></div>
                </div>
              </div>
              <div className={`mt-auto h-12 bg-gradient-to-r ${gradient} rounded-2xl w-full`}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Personalized Recommendations & Weaknesses Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-50 shadow-lg space-y-4">
           <div className="h-6 bg-purple-100 rounded w-1/2 mb-4"></div>
           <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 bg-purple-50/50 rounded-2xl border border-purple-100/50"></div>
              ))}
           </div>
        </div>
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-50 shadow-lg space-y-4">
           <div className="h-6 bg-amber-100 rounded w-1/2 mb-4"></div>
           <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-amber-50/50 rounded-2xl border border-amber-100/50"></div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
