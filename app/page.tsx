"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Award, 
  Bookmark, 
  Zap, 
  ShieldCheck,
  Star,
  Flame,
  Play
} from "lucide-react";

export default function LandingPage() {
  const skills = [
    {
      id: "lesen",
      title: "Kỹ năng Đọc (Lesen)",
      subtitle: "Hiểu rõ các văn bản B1 chuẩn xác.",
      description: "Bài đọc B1 thực tế với tính năng bấm tra từ vựng trực tiếp và giải thích đáp án chi tiết.",
      icon: BookOpen,
      gradient: "from-blue-600 to-indigo-600",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      progress: 0,
      href: "/lernen/lesen",
    },
    {
      id: "hoeren",
      title: "Kỹ năng Nghe (Hören)",
      subtitle: "Rèn luyện phản xạ nghe tiếng Đức.",
      description: "Trình phát audio hiện đại tùy chỉnh tốc độ 0.75x - 1.25x, ẩn/mở bài đọc và chế độ chép chính tả.",
      icon: Headphones,
      gradient: "from-amber-500 to-orange-500",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      progress: 0,
      href: "/lernen/hoeren",
    },
    {
      id: "schreiben",
      title: "Kỹ năng Viết (Schreiben)",
      subtitle: "Viết thư & bài luận mạch lạc.",
      description: "Đề thi viết B1 với công cụ đếm từ, kiểm tra tiêu chí bắt buộc và nhận xét chi tiết từ KI.",
      icon: PenTool,
      gradient: "from-purple-600 to-pink-600",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      progress: 0,
      href: "/lernen/schreiben",
    },
    {
      id: "sprechen",
      title: "Kỹ năng Nói (Sprechen)",
      subtitle: "Tự tin diễn đạt tự nhiên.",
      description: "Ghi âm trực tiếp qua Micro với bộ đếm thời gian chuẩn bị & thời gian nói kèm chấm điểm ngữ pháp.",
      icon: Mic,
      gradient: "from-emerald-500 to-teal-600",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      progress: 0,
      href: "/lernen/sprechen",
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Học lý thuyết", desc: "Nắm vững ngữ pháp và từ vựng B1 qua các bài học ngắn gọn." },
    { step: "02", title: "Luyện tập 4 kỹ năng", desc: "Thực hành Đọc, Nghe, Viết và Nói với phản hồi tức thì." },
    { step: "03", title: "Ôn tập thông minh", desc: "Sử dụng Flashcard lặp lại ngắt quãng (SM-2 Spaced Repetition)." },
    { step: "04", title: "Thi thử mô phỏng", desc: "Làm đề thi thử B1 chuẩn form Goethe & telc dưới áp lực thời gian." },
    { step: "05", title: "Cải thiện điểm yếu", desc: "Theo dõi gợi ý cá nhân hóa để chinh phục tấm bằng B1." },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Colorful background glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-purple-200/80 text-purple-900 text-xs font-extrabold shadow-xs">
                <Sparkles className="w-4 h-4 text-purple-600 fill-purple-600 animate-spin" />
                <span>Nền tảng luyện thi tiếng Đức B1 thế hệ mới</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
                Học tiếng Đức. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600">
                  Bắt trọn bằng B1!
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
                Rèn luyện tiếng Đức với hệ thống lộ trình thiết kế chuẩn form thi Goethe & telc B1. Đầy đủ Đọc, Nghe, Viết và Nói kết hợp chấm điểm bằng AI thông minh.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-extrabold text-base shadow-xl shadow-purple-200 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                >
                  Bắt đầu học ngay <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pruefung"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-base border-2 border-slate-200 shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Award className="w-5 h-5 text-rose-500" />
                  Thi thử B1
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-bold border-t border-slate-200/80">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Bám sát khung B1 CEFR
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Zap className="w-4 h-4 text-amber-500" /> Thẻ từ vựng SM-2
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Star className="w-4 h-4 text-purple-500 fill-purple-500" /> Đánh giá tự động
                </span>
              </div>
            </motion.div>

            {/* Right Live Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-indigo-100 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    Bảng điều khiển trực tiếp
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl text-white flex items-center justify-between shadow-md">
                    <div>
                      <span className="text-xs text-indigo-100 font-bold uppercase tracking-wider">Tiến độ B1 cá nhân</span>
                      <h4 className="text-2xl font-black">0% Hoàn thành</h4>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-black text-lg border border-white/30">
                      0%
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-2">
                          <div className="flex items-center justify-between">
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${skill.gradient} text-white flex items-center justify-center font-bold shadow-xs`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-white text-slate-800 border">
                              {skill.progress}%
                            </span>
                          </div>
                          <span className="text-xs font-bold text-slate-900">{skill.title.split(" ")[0]} {skill.title.split(" ")[1]}</span>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`} style={{ width: `${skill.progress}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            4 Kỹ năng trọng tâm
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Luyện tập toàn diện cho kỳ thi B1
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tất cả mô-đun được xây dựng theo đúng cấu trúc đề thi chính thức của Goethe-Institut và telc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${skill.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{skill.title}</h3>
                    <p className="text-xs font-bold text-slate-500 mt-0.5">{skill.subtitle}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {skill.description}
                  </p>
                </div>

                <Link
                  href={skill.href}
                  className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-indigo-600 group-hover:text-purple-600 transition"
                >
                  <span>Bắt đầu bài học</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Learning System Workflow */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Lộ trình 5 bước
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">Chinh phục bằng B1 tiếng Đức hiệu quả</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div key={step.step} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3 hover:bg-white/15 transition">
                <span className="text-3xl font-black text-amber-400">{step.step}</span>
                <h4 className="text-base font-extrabold text-white">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vocabulary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold backdrop-blur-md">
              <Bookmark className="w-4 h-4 text-amber-300" />
              <span>Hệ thống từ vựng thông minh</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Ghi nhớ từ vựng B1 qua Spaced Repetition
            </h2>
            <p className="text-sm sm:text-base text-purple-100 leading-relaxed max-w-xl font-medium">
              Không bao giờ quên từ vựng! Lưu từ trực tiếp khi học bài và ôn luyện lại theo thuật toán SuperMemo SM-2 giúp ghi nhớ lâu gấp 3 lần.
            </p>
            <div className="flex flex-wrap gap-2.5 text-xs font-bold pt-2">
              <span className="px-3 py-1.5 rounded-xl bg-white/20 border border-white/30">Thẻ Flashcard</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/20 border border-white/30">Dịch Đức ↔ Việt</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/20 border border-white/30">Điền từ vào chỗ trống</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/20 border border-white/30">Bổ sung từ với KI</span>
            </div>
            <div className="pt-4">
              <Link
                href="/vokabeln"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-purple-900 font-extrabold text-sm hover:bg-slate-100 transition shadow-xl"
              >
                Mở kho từ vựng <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold uppercase text-slate-400">Thẻ từ vựng xem trước</span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">die Bewerbung</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-black text-slate-900">die Bewerbung, -en</h4>
              <p className="text-xs text-indigo-600 font-bold">Đơn xin việc / hồ sơ ứng tuyển</p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs italic border border-slate-200 text-slate-700 font-medium">
                "Ich habe eine Bewerbung an die Firma geschickt."
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-2">
              <button className="py-2 text-[10px] font-bold rounded-xl bg-red-100 text-red-700">Again</button>
              <button className="py-2 text-[10px] font-bold rounded-xl bg-amber-100 text-amber-700">Hard</button>
              <button className="py-2 text-[10px] font-bold rounded-xl bg-blue-100 text-blue-700">Good</button>
              <button className="py-2 text-[10px] font-bold rounded-xl bg-emerald-100 text-emerald-700">Easy</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-rose-600 text-white flex items-center justify-center mx-auto shadow-xl">
          <Award className="w-8 h-8 text-amber-300" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Sẵn sàng chinh phục bằng B1?</h2>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
          Bắt đầu luyện tập ngay hôm nay với hệ thống chuẩn hóa giúp bạn tự tin đạt điểm cao trong kỳ thi chính thức.
        </p>
        <div>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-purple-600 hover:opacity-95 text-white font-extrabold text-base shadow-xl shadow-rose-200 transition transform hover:-translate-y-0.5"
          >
            Đăng ký miễn phí ngay <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
