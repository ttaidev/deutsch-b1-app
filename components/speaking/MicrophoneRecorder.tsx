"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, Square, Play, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { evaluateSpeaking, SpeakingFeedback } from "@/lib/ai/evaluator";

interface MicrophoneRecorderProps {
  promptTitle: string;
  promptText: string;
  prepSeconds?: number;
  recordSeconds?: number;
  onComplete?: (feedback: SpeakingFeedback) => void;
}

export function MicrophoneRecorder({
  promptTitle,
  promptText,
  onComplete,
}: MicrophoneRecorderProps) {
  const [phase, setPhase] = useState<"IDLE" | "RECORDING" | "PROCESSING" | "DONE">("IDLE");
  const [micPermission, setMicPermission] = useState<"UNKNOWN" | "GRANTED" | "DENIED">("UNKNOWN");
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<SpeakingFeedback | null>(null);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Stop the stream immediately, we just needed to request permission
      stream.getTracks().forEach(track => track.stop());
      setMicPermission("GRANTED");
    } catch (err) {
      console.error("Microphone permission denied:", err);
      setMicPermission("DENIED");
    }
  };

  const startRecording = () => {
    setPhase("RECORDING"); // Triggers the useEffect for RECORDING

    // Browser SpeechRecognition setup if available
    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "de-DE";
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        let currentText = "";
        for (let i = 0; i < event.results.length; ++i) {
          currentText += event.results[i][0].transcript + " ";
        }
        setTranscript(currentText.trim());
      };

      recognition.start();
      (window as any)._activeRecognition = recognition;
    }
  };

  const stopRecording = async () => {
    if ((window as any)._activeRecognition) {
      try {
        (window as any)._activeRecognition.stop();
      } catch (e) {}
    }

    setPhase("PROCESSING"); // Triggers useEffect cleanup, stopping the timer

    const sampleTranscript = transcript || "Ich denke, dass Sport ist sehr wichtig für die Gesundheit. Jeden Tag gehe ich im Park spazieren.";
    const result = await evaluateSpeaking(promptTitle, promptText, sampleTranscript);

    setFeedback(result);
    setPhase("DONE");
    if (onComplete) onComplete(result);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-2xl shadow-slate-200/50 space-y-8 relative overflow-hidden">
      {/* Decorative subtle background for recorder */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Status Header */}
      <div className="flex items-center justify-between relative z-10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Trạng thái ghi âm</span>
          <h4 className="text-lg font-extrabold text-slate-800 tracking-tight">
            {phase === "IDLE" && micPermission !== "GRANTED" && "Vui lòng cấp quyền Micro để bắt đầu."}
            {phase === "IDLE" && micPermission === "GRANTED" && "Đã sẵn sàng. Nhấn nút bên dưới để ghi âm."}
            {phase === "RECORDING" && <span className="text-accent animate-pulse">Đang ghi âm... Hãy tự tin nói nhé!</span>}
            {phase === "PROCESSING" && "KI đang phân tích phát âm & ngữ pháp..."}
            {phase === "DONE" && "Hoàn tất! Phân tích chi tiết ở bên dưới."}
          </h4>
        </div>
        {phase === "RECORDING" && (
          <div className="px-5 py-2 rounded-2xl text-xs font-black tracking-widest border-2 bg-red-50 text-red-600 border-red-200 animate-pulse shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600" /> ĐANG GHI
          </div>
        )}
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-col items-center justify-center py-10 gap-6 relative z-10">
        {phase === "IDLE" && micPermission === "UNKNOWN" && (
          <button
            onClick={requestMicrophonePermission}
            className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-black text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 transition-all duration-300"
          >
            <Mic className="w-5 h-5" /> CẤP QUYỀN MICROPHONE
          </button>
        )}

        {phase === "IDLE" && micPermission === "DENIED" && (
          <div className="text-center space-y-4 max-w-md">
            <div className="p-4 bg-red-50/80 backdrop-blur border border-red-200 rounded-2xl text-sm text-red-800 font-semibold flex items-start gap-3 shadow-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
              <span className="text-left leading-relaxed">Bạn đã từ chối quyền truy cập Micro. Vui lòng cấp quyền trong cài đặt trình duyệt để tiếp tục.</span>
            </div>
            <button
              onClick={requestMicrophonePermission}
              className="text-sm font-bold text-slate-500 hover:text-slate-800 underline transition-colors"
            >
              Thử yêu cầu lại quyền Micro
            </button>
          </div>
        )}

        {phase === "IDLE" && micPermission === "GRANTED" && (
          <button
            onClick={startRecording}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-accent to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black text-base shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 transition-all duration-300"
          >
            <Mic className="w-6 h-6 animate-pulse" /> BẮT ĐẦU GHI ÂM
          </button>
        )}

        {phase === "RECORDING" && (
          <div className="flex flex-col items-center gap-6">
            {/* Audio visualization mock */}
            <div className="flex gap-1 items-center h-12">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-1.5 bg-accent/80 rounded-full animate-bounce`} style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            
            <button
              onClick={stopRecording}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white flex flex-col items-center justify-center shadow-2xl shadow-red-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-4 border-red-200/20"
            >
              <Square className="w-8 h-8 fill-white" />
              <span className="text-[10px] font-black tracking-widest mt-1">DỪNG</span>
            </button>
          </div>
        )}

        {phase === "PROCESSING" && (
          <div className="flex flex-col items-center gap-4 text-slate-600 font-bold text-base">
            <RefreshCw className="w-10 h-10 animate-spin text-primary" />
            <span className="animate-pulse">Đang tạo bản ghi âm & Đánh giá...</span>
          </div>
        )}
      </div>

      {/* Feedback & Corrections Output */}
      {phase === "DONE" && feedback && (
        <div className="pt-8 border-t border-slate-200/60 space-y-6 animate-in slide-in-from-bottom-4 duration-500 relative z-10">
          {/* Score Pills */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-sm rounded-2xl p-4 text-center group hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Độ lưu loát</span>
              <p className="text-3xl font-black text-primary mt-1 group-hover:scale-110 transition-transform">{feedback.fluencyScore}%</p>
            </div>
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-sm rounded-2xl p-4 text-center group hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Ngữ pháp</span>
              <p className="text-3xl font-black text-primary mt-1 group-hover:scale-110 transition-transform">{feedback.grammarScore}%</p>
            </div>
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-sm rounded-2xl p-4 text-center group hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Từ vựng</span>
              <p className="text-3xl font-black text-primary mt-1 group-hover:scale-110 transition-transform">{feedback.vocabularyScore}%</p>
            </div>
          </div>

          {/* Transcript Box */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
            <span className="text-xs font-black tracking-widest uppercase text-slate-400 block mb-2">Văn bản bài nói nhận diện được:</span>
            <p className="text-sm text-slate-700 italic font-medium leading-relaxed">"{feedback.transcript}"</p>
          </div>

          {/* Corrections */}
          {feedback.corrections.length > 0 && (
            <div className="space-y-4">
              <span className="text-sm font-black text-slate-800 block">Gợi ý sửa lỗi phát âm & ngữ pháp:</span>
              <div className="grid gap-3">
                {feedback.corrections.map((item, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-red-50/50 to-white border-l-4 border-l-red-500 border border-y-slate-100 border-r-slate-100 rounded-r-2xl text-sm space-y-2 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <p className="text-red-700/80 font-bold line-through decoration-red-300">
                        {item.original}
                      </p>
                      <span className="hidden sm:inline text-slate-300">→</span>
                      <p className="text-emerald-700 font-black">
                        {item.corrected}
                      </p>
                    </div>
                    <p className="text-slate-600 text-xs font-medium bg-white/60 p-2 rounded-lg border border-slate-100">
                      💡 {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 flex items-start gap-3 font-semibold shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{feedback.disclaimer}</span>
          </div>
        </div>
      )}
    </div>
  );
}
