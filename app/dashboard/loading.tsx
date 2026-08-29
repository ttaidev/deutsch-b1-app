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
      {/* Header Skeleton */}
      <div className="bg-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-4 w-full md:w-1/2">
          <div className="h-4 bg-slate-300 rounded w-1/4"></div>
          <div className="h-8 bg-slate-300 rounded w-3/4"></div>
          <div className="h-4 bg-slate-300 rounded w-1/2"></div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-slate-300 px-4 py-2.5 rounded-2xl w-24 h-16"></div>
          <div className="bg-slate-300 px-4 py-2.5 rounded-2xl w-24 h-16"></div>
          <div className="bg-slate-300 px-4 py-2.5 rounded-2xl w-24 h-16"></div>
        </div>
      </div>

      {/* Overview Metric Bar Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
            <div className="h-8 bg-slate-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>

      {/* 4 Core Skill Cards Grid Skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-slate-200 rounded w-48 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-md space-y-4 h-64 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-200"></div>
                  <div className="w-12 h-6 rounded-full bg-slate-200"></div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="h-5 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="mt-auto h-12 bg-slate-200 rounded-2xl w-full"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Personalized Recommendations & Weaknesses Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-lg space-y-4">
           <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
           <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 bg-slate-100 rounded-2xl border border-slate-200"></div>
              ))}
           </div>
        </div>
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-lg space-y-4">
           <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
           <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-slate-100 rounded-2xl border border-slate-200"></div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
