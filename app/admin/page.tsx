import { 
  ShieldCheck, 
  BookOpen, 
  Headphones, 
  Bookmark, 
  Users, 
  Plus
} from "lucide-react";

export default function AdminCMSPage() {
  const stats = [
    { title: "Người dùng hệ thống", count: "1 (Gạo)", icon: Users },
    { title: "Bài đọc hiểu (Lesen)", count: "42 bài", icon: BookOpen },
    { title: "Tệp nghe (Audio)", count: "28 tệp", icon: Headphones },
    { title: "Từ vựng hệ thống", count: "2,481 từ", icon: Bookmark },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold shadow-md">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-primary">Hệ thống Quản trị CMS & Quản lý nội dung</h1>
            <span className="text-xs text-slate-500 font-medium">Quản lý tổng quan dữ liệu hệ thống</span>
          </div>
        </div>
      </div>

      {/* Admin Stats Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-bold uppercase">{s.title}</span>
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-2xl font-black text-primary">{s.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
