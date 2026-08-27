"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles, HelpCircle } from "lucide-react";
import { ClickableText } from "@/components/vocabulary/ClickableText";

export default function GrammarLessonDetail({ params }: { params: { slug: string } }) {
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, string>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const lesson = {
    title: "Konjunktiv II (Thể giả định: Wünsche, Träume & Höflichkeit)",
    category: "Chủ điểm Ngữ pháp B1",
    explanation: `Thể Konjunktiv II trong tiếng Đức được dùng trong các trường hợp:
1. Höfliche Bitten (Lời nhờ vả lịch sự): "Könnten Sie mir bitte helfen?" (Ngài có thể giúp tôi không?)
2. Wünsche & Träume (Ước muốn & Mơ ước): "Ich hätte gerne mehr Zeit." (Tôi ước có nhiều thời gian hơn.)
3. Irreale Bedingungen: "Wenn ich reich wäre, würde ich eine Reise machen." (Nếu tôi giàu, tôi sẽ đi du lịch.)

Công thức cấu thành với 'würde + Động từ nguyên thể (Infinitiv)':
- ich würde lernen
- du würdest lernen
- er/sie/es würde lernen
- wir würden lernen

Các động từ đặc biệt có dạng riêng (rất phổ biến):
- sein -> wäre
- haben -> hätte
- können -> könnte`,
    examples: [
      { de: "Ich hätte gerne einen Kaffee, bitte.", vn: "Tôi muốn dùng một tách cà phê, làm ơn." },
      { de: "Wenn ich Zeit hätte, würde ich dich besuchen.", vn: "Nếu tôi có thời gian, tôi sẽ đến thăm bạn." },
      { de: "Könnten Sie das bitte wiederholen?", vn: "Ngài có thể làm ơn nhắc lại điều đó không?" },
    ],
    questions: [
      {
        id: 1,
        question: "Welcher Satz drückt eine höfliche Bitte im Konjunktiv II aus? (Câu nào thể hiện lời nhờ vả lịch sự ở Konjunktiv II?)",
        options: [
          "A) Ich kaufe heute ein Brot.",
          "B) Könnten Sie mir bitte das Fenster öffnen?",
          "C) Er ist gestern nach Hause gefahren.",
          "D) Wir müssen Deutsch lernen.",
        ],
        correct: "B",
      },
      {
        id: 2,
        question: "Ergänze den Satz: Wenn ich reich ____, würde ich ein Haus kaufen. (Điền động từ đúng vào chỗ trống)",
        options: ["A) bin", "B) war", "C) wäre", "D) würde"],
        correct: "C",
      },
    ],
  };

  const handleSelectQuiz = (qId: number, optKey: string) => {
    if (isQuizSubmitted) return;
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optKey }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/grammatik" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách bài Ngữ pháp
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-primary text-white rounded-full">
          {lesson.category}
        </span>
      </div>

      {/* Lesson Title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-primary">{lesson.title}</h1>
      </div>

      {/* Explanation Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
        <h2 className="text-lg font-bold text-primary border-b pb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" /> Giải thích lý thuyết & Quy tắc ngữ pháp
        </h2>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs leading-relaxed text-slate-800 font-mono whitespace-pre-line">
          {lesson.explanation}
        </div>
      </div>

      {/* Examples Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
        <h2 className="text-lg font-bold text-primary border-b pb-3">Các câu ví dụ thực tế (Bấm vào từ để tra nghĩa & lưu vựng)</h2>
        <div className="space-y-3">
          {lesson.examples.map((ex, idx) => (
            <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
              <p className="font-bold text-primary">
                "<ClickableText text={ex.de} />"
              </p>
              <p className="text-slate-500 font-medium">{ex.vn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Quiz */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
        <h2 className="text-lg font-bold text-primary border-b pb-3 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-accent" /> Bài kiểm tra nhanh (Mini-Quiz)
        </h2>

        {lesson.questions.map((q) => (
          <div key={q.id} className="space-y-3">
            <p className="text-xs font-bold text-slate-800">{q.id}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const optKey = opt[0];
                const isSelected = selectedQuizAnswers[q.id] === optKey;
                const isCorrect = q.correct === optKey;

                let style = "bg-slate-50 border-slate-200 text-slate-700";
                if (isSelected) style = "bg-primary text-white";
                if (isQuizSubmitted) {
                  if (isCorrect) style = "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold";
                  else if (isSelected && !isCorrect) style = "bg-red-50 text-red-800 border-red-300 font-bold";
                }

                return (
                  <button
                    key={optKey}
                    onClick={() => handleSelectQuiz(q.id, optKey)}
                    className={`w-full text-left p-3.5 rounded-2xl border text-xs font-medium transition ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {!isQuizSubmitted ? (
          <button
            onClick={() => setIsQuizSubmitted(true)}
            disabled={Object.keys(selectedQuizAnswers).length < lesson.questions.length}
            className="w-full py-3.5 rounded-2xl bg-primary text-white font-bold text-xs shadow-md transition hover:bg-slate-800 disabled:opacity-50"
          >
            Kiểm tra đáp án Quiz
          </button>
        ) : (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-emerald-800">Chúc mừng Gạo đã hoàn thành xuất sắc bài học!</h4>
            <p className="text-xs text-emerald-700 font-bold">+30 XP đã được cộng vào tài khoản của Gạo!</p>
          </div>
        )}
      </div>
    </div>
  );
}
