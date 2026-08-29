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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/lernen/sprechen" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách Luyện phát âm
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
          Phát âm • {task.type}
        </span>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4 text-center">
        <h1 className="text-xl font-bold text-slate-500">{task.title}</h1>
        <div className="py-6">
          <p className="text-4xl font-black text-primary leading-snug">{task.targetText}</p>
          <p className="text-sm text-slate-500 font-bold mt-4">{task.translation}</p>
        </div>
      </div>

      {/* Microphone Component */}
      <MicrophoneRecorder
        promptTitle={task.title}
        targetText={task.targetText}
        onComplete={async (feedback) => {
          try {
            await fetch('/api/progress', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                skill: "SPRECHEN",
                exerciseId: task.id,
                score: feedback.fluencyScore, // Lấy score phát âm làm score tổng
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
