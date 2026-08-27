"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, CheckCircle2, AlertCircle, Award, BookOpen, Headphones, PenTool, Mic } from "lucide-react";

export default function ExamSimulationRoom({ params }: { params: { id: string } }) {
  const [activeSection, setActiveSection] = useState<"LESEN" | "HOEREN" | "SCHREIBEN" | "SPRECHEN">("LESEN");
  const [timeLeft, setTimeLeft] = useState(65 * 60); // 65 minutes for Lesen section
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [writingInput, setWritingInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleAnswerSelect = (qId: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Exam Navigation Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/pruefung" className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-primary transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-base font-bold text-primary">Goethe / telc B1 Simulation 1</h2>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Chế độ thi thử đang hoạt động</span>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {[
            { id: "LESEN", label: "Đọc (Lesen)", icon: BookOpen },
            { id: "HOEREN", label: "Nghe (Hören)", icon: Headphones },
            { id: "SCHREIBEN", label: "Viết (Schreiben)", icon: PenTool },
            { id: "SPRECHEN", label: "Nói (Sprechen)", icon: Mic },
          ].map((sec) => {
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeSection === sec.id ? "bg-primary text-white" : "text-slate-600 hover:text-primary"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200 text-accent font-mono font-bold text-sm">
          <Clock className="w-4 h-4" /> {formatTimer(timeLeft)}
        </div>
      </div>

      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Question Area */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
            {activeSection === "LESEN" && (
              <div className="space-y-6">
                <div className="border-b pb-3">
                  <span className="text-xs font-bold uppercase text-slate-400">Phần 1: Đọc hiểu (Lesen Teil 1)</span>
                  <h3 className="text-lg font-bold text-primary">Lesetext: Einladung zum Nachbarschaftsfest (Thư mời tiệc xóm)</h3>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs leading-relaxed text-slate-800">
                  Liebe Nachbarinnen und Nachbarn, wir veranstalten am kommenden Samstag ab 15 Uhr unser jährliches Nachbarschaftsfest im Innenhof. Bitte bringt eigene Salate oder Kuchen mit. Für Getränke ist gesorgt.
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-800">1. Was sollen die Nachbarn mitbringen? (Hàng xóm nên mang theo những gì?)</p>
                  {["A) Getraenke", "B) Salate oder Kuchen", "C) Musikinstrumente"].map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect("q1", opt[0])}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs font-medium transition ${
                        answers["q1"] === opt[0] ? "bg-primary text-white" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "HOEREN" && (
              <div className="space-y-6">
                <div className="border-b pb-3">
                  <span className="text-xs font-bold uppercase text-slate-400">Phần 2: Nghe hiểu (Hören)</span>
                  <h3 className="text-lg font-bold text-primary">Ansage am Hauptbahnhof (Thông báo tại nhà ga)</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium">Lắng nghe thông báo về thay đổi đường ray tàu chạy.</p>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-800">2. Welcher Zug fällt aus? (Chuyến tàu nào bị hủy?)</p>
                  {["A) ICE nach München", "B) RB nach Potsdam", "C) S-Bahn S7"].map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect("q2", opt[0])}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs font-medium transition ${
                        answers["q2"] === opt[0] ? "bg-primary text-white" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "SCHREIBEN" && (
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <span className="text-xs font-bold uppercase text-slate-400">Phần 3: Luyện viết (Schreiben)</span>
                  <h3 className="text-lg font-bold text-primary">Đề bài: Viết E-Mail phản hồi thư mời</h3>
                </div>
                <textarea
                  rows={8}
                  value={writingInput}
                  onChange={(e) => setWritingInput(e.target.value)}
                  placeholder="Gõ bài viết tiếng Đức của Gạo tại đây..."
                  className="w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800"
                />
              </div>
            )}

            {activeSection === "SPRECHEN" && (
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <span className="text-xs font-bold uppercase text-slate-400">Phần 4: Luyện nói (Sprechen)</span>
                  <h3 className="text-lg font-bold text-primary">Đề bài: Lên kế hoạch cùng bạn (Gemeinsam etwas planen)</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium">Chuẩn bị nội dung nói cùng bạn luyện tập trong khung thời gian 15 phút.</p>
              </div>
            )}

            <div className="pt-4 border-t flex justify-end">
              <button
                onClick={handleSubmitExam}
                className="px-6 py-3 rounded-2xl bg-accent hover:bg-red-700 text-white font-extrabold text-xs shadow-md transition"
              >
                Nộp bài thi & Chấm điểm
              </button>
            </div>
          </div>

          {/* Right Question Navigator */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
            <h3 className="text-sm font-bold text-primary border-b pb-2">Danh sách câu hỏi</h3>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 15 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-xl text-center font-bold text-xs border ${
                    answers[`q${idx + 1}`] ? "bg-emerald-50 text-emerald-700 border-emerald-300" : "bg-slate-50 text-slate-400 border-slate-200"
                  }`}
                >
                  {idx + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Results Section 23 Output */
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-8 animate-in fade-in">
          <div className="text-center space-y-2">
            <Award className="w-16 h-16 text-accent mx-auto" />
            <h2 className="text-3xl font-black text-primary">KẾT QUẢ BÀI THI CỦA GẠO</h2>
            <p className="text-xs text-slate-500 font-medium">Kết quả mô phỏng các phần thi B1 chuẩn</p>
          </div>

          {/* Score breakdown per skill */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-1">
              <span className="text-xs font-bold text-slate-500">Đọc (Lesen)</span>
              <p className="text-2xl font-black text-blue-600">82%</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-1">
              <span className="text-xs font-bold text-slate-500">Nghe (Hören)</span>
              <p className="text-2xl font-black text-amber-600">74%</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-1">
              <span className="text-xs font-bold text-slate-500">Viết (Schreiben)</span>
              <p className="text-2xl font-black text-purple-600">68%</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-1">
              <span className="text-xs font-bold text-slate-500">Nói (Sprechen)</span>
              <p className="text-2xl font-black text-emerald-600">71%</p>
            </div>
          </div>

          <div className="p-6 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400">Điểm tổng kết (Overall Score):</span>
              <h3 className="text-3xl font-black text-amber-400">74% • ĐẠT CHỨNG CHỈ B1</h3>
            </div>
            <Link href="/dashboard" className="px-6 py-3 rounded-2xl bg-white text-primary font-bold text-xs hover:bg-slate-100 transition">
              Về Bảng điều khiển
            </Link>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-1 font-medium">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Lưu ý quan trọng:
            </div>
            <p>
              Kết quả này giúp Gạo tự đánh giá năng lực cá nhân. Đây là kết quả luyện tập mô phỏng, không phải chứng chỉ chính thức của Goethe-Institut hay telc.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
