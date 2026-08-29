"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, Square, Play, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { evaluatePronunciation, PronunciationFeedback } from "@/lib/ai/evaluator";

interface MicrophoneRecorderProps {
  promptTitle: string; // Used for UI display mostly
  targetText?: string; // The text the user needs to read
  prepSeconds?: number;
  recordSeconds?: number;
  onComplete?: (feedback: any) => void; // Keep generic to avoid breaking other usages temporarily if any, though we now pass PronunciationFeedback
}

export function MicrophoneRecorder({
  promptTitle,
  targetText,
  onComplete,
}: MicrophoneRecorderProps) {
  const [phase, setPhase] = useState<"IDLE" | "RECORDING" | "PROCESSING" | "DONE">("IDLE");
  const [micPermission, setMicPermission] = useState<"UNKNOWN" | "GRANTED" | "DENIED">("UNKNOWN");
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);

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
    setTranscript("");

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

    const finalTranscript = transcript || "";
    // Note: If evaluatePronunciation takes (targetText, transcript)
    const result = await evaluatePronunciation(targetText || promptTitle, finalTranscript);

    setFeedback(result);
    setPhase("DONE");
    if (onComplete) {
      // Map it to old format just in case it's used elsewhere, but mainly we use score
      onComplete({
        fluencyScore: result.score,
        grammarScore: result.score,
        vocabularyScore: result.score,
        transcript: result.transcript
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trạng thái ghi âm</span>
          <h4 className="text-base font-bold text-primary">
            {phase === "IDLE" && micPermission !== "GRANTED" && "Vui lòng cấp quyền Micro để bắt đầu ghi âm."}
            {phase === "IDLE" && micPermission === "GRANTED" && "Sẵn sàng ghi âm. Nhấn nút bên dưới để bắt đầu."}
            {phase === "RECORDING" && "Đang ghi âm... Gạo hãy nói tiếng Đức vào Micro"}
            {phase === "PROCESSING" && "KI đang phân tích phát âm..."}
            {phase === "DONE" && "Hoàn tất ghi âm & Đã phân tích xong"}
          </h4>
        </div>
        {phase === "RECORDING" && (
          <div className="px-4 py-2 rounded-xl text-xs font-bold border bg-red-50 text-red-600 border-red-200 animate-pulse">
            ĐANG GHI ÂM
          </div>
        )}
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-col items-center justify-center py-6 gap-4">
        {phase === "IDLE" && micPermission === "UNKNOWN" && (
          <button
            onClick={requestMicrophonePermission}
            className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs shadow-md flex items-center gap-2 transition"
          >
            <Mic className="w-5 h-5" /> CẤP QUYỀN MICROPHONE
          </button>
        )}

        {phase === "IDLE" && micPermission === "DENIED" && (
          <div className="text-center space-y-2">
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Bạn đã từ chối quyền truy cập Micro. Vui lòng cấp quyền trong cài đặt trình duyệt để tiếp tục.
            </div>
            <button
              onClick={requestMicrophonePermission}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 underline"
            >
              Thử yêu cầu lại quyền Micro
            </button>
          </div>
        )}

        {phase === "IDLE" && micPermission === "GRANTED" && (
          <button
            onClick={startRecording}
            className="px-6 py-3 rounded-full bg-accent hover:bg-red-700 text-white font-extrabold text-xs shadow-lg flex items-center gap-2 transition"
          >
            <Mic className="w-5 h-5" /> BẮT ĐẦU GHI ÂM
          </button>
        )}

        {phase === "RECORDING" && (
          <button
            onClick={stopRecording}
            className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex flex-col items-center justify-center shadow-xl transition-all scale-105 animate-pulse"
          >
            <Square className="w-8 h-8 fill-white" />
            <span className="text-[10px] font-bold mt-1">DỪNG LẠI</span>
          </button>
        )}

        {phase === "PROCESSING" && (
          <div className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
            <RefreshCw className="w-6 h-6 animate-spin text-primary" />
            <span>Đang tạo bản ghi âm & Đánh giá...</span>
          </div>
        )}
      </div>

      {/* Feedback & Corrections Output */}
      {phase === "DONE" && feedback && (
        <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in">
          {/* Score Pills */}
          <div className="flex justify-center">
            <div className={`border rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg ${feedback.score >= 80 ? 'bg-emerald-50 border-emerald-200' : feedback.score >= 50 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'}`}>
              <span className="text-[10px] font-bold uppercase text-slate-500 mb-1">Độ chính xác</span>
              <p className={`text-4xl font-black ${feedback.score >= 80 ? 'text-emerald-600' : feedback.score >= 50 ? 'text-amber-600' : 'text-red-600'}`}>
                {feedback.score}%
              </p>
            </div>
          </div>

          <p className="text-center text-sm font-bold text-slate-700 my-4">{feedback.feedback}</p>

          {/* Transcript Box */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Hệ thống nhận diện bạn đọc:</span>
            <p className="text-base text-slate-800 font-medium">"{feedback.transcript}"</p>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-[11px] text-blue-800 flex items-start gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{feedback.disclaimer}</span>
          </div>
        </div>
      )}
    </div>
  );
}
