"use client";

import Link from "next/link";
import { ArrowLeft, Mic } from "lucide-react";
import { MicrophoneRecorder } from "@/components/speaking/MicrophoneRecorder";

import { SPRECHEN_TASKS } from "@/lib/sprechen/data";

export default function SprechenTaskDetail({ params }: { params: { id: string } }) {
  const task = SPRECHEN_TASKS.find((t) => t.id === params.id);

  if (!task) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Không tìm thấy bài tập!</h1>
        <Link href="/lernen/sprechen" className="text-primary mt-4 inline-block font-bold">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 relative">
      {/* Decorative background blobs */}
      <div className="fixed top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/60 pb-5">
        <Link href="/lernen/sprechen" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" /> Zurück zur Sprech-Übersicht
        </Link>
        <span className="text-xs font-black px-4 py-1.5 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 text-emerald-700 border border-emerald-200/50 rounded-full shadow-sm">
          Sprechen B1 • Teil 1
        </span>
      </div>

      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl shadow-slate-200/40 space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-3xl" />
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">{task.title}</h1>
        <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-100 text-sm leading-relaxed text-slate-700 font-medium whitespace-pre-line shadow-inner">
          {task.prompt}
        </div>
      </div>

      {/* Microphone Component */}
      <MicrophoneRecorder
        promptTitle={task.title}
        promptText={task.prompt}
        onComplete={async (feedback) => {
          try {
            await fetch('/api/progress', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                skill: "SPRECHEN",
                exerciseId: task.id,
                score: Math.round((feedback.fluencyScore + feedback.grammarScore + feedback.vocabularyScore) / 3),
                maxScore: 100
              })
            });
          } catch (err) {
            console.error("Lỗi khi lưu tiến độ:", err);
          }
        }}
      />
    </div>
  );
}
