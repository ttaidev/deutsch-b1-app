"use client";

import { useState } from "react";
import { Bot, Send, User, Sparkles, Bookmark, Volume2, ShieldCheck } from "lucide-react";
import { WordModal } from "@/components/vocabulary/WordModal";
import { ClickableText } from "@/components/vocabulary/ClickableText";
import type { VocabularyAIEssence } from "@/lib/ai/evaluator";

interface ChatMessage {
  id: string;
  sender: "USER" | "AI";
  text: string;
  correction?: { original: string; corrected: string; explanation: string };
  timestamp: string;
}

export default function AITutorPage() {
  const [mode, setMode] = useState<"NUR_DEUTSCH" | "DEUTSCH_MIT_ERKLÄRUNG">("DEUTSCH_MIT_ERKLÄRUNG");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "AI",
      text: "Hallo! Ich bin dein KI-Deutschlehrer für B1. Worüber möchtest du heute sprechen? Zum Beispiel über deine Hobbys, Arbeit oder Pläne für das Wochenende?",
      timestamp: "10:00",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [modalWord, setModalWord] = useState<VocabularyAIEssence | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "USER",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    let correction: ChatMessage["correction"] = undefined;
    if (input.includes("dass") && !input.match(/dass\s+[^,.]+\s+(ist|hat|kann|muss|wird|war)[.,]/i)) {
      correction = {
        original: input,
        corrected: input.replace(/dass\s+(\w+)\s+(ist|hat)/i, "dass $1 ... ist"),
        explanation: "Im Nebensatz mit 'dass' kommt das konjugierte Verb ans Ende.",
      };
    }

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "AI",
        text: mode === "NUR_DEUTSCH" 
          ? "Das klingt sehr interessant! Erzähl mir bitte mehr darüber. Was machst du am liebsten in deiner Freizeit?"
          : "Das ist ein schöner Gedanke! (Hinweis: Achte bei Nebensätzen besonders auf die Verbstellung am Ende). Was hast du am Wochenende vor?",
        correction,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleWordClick = (word: string) => {
    const cleanWord = word.replace(/[^a-zA-ZäöüÄÖÜß]/g, "");
    if (!cleanWord) return;

    setModalWord({
      word: cleanWord,
      wordType: "Wort",
      translation: `Nghĩa của "${cleanWord}"`,
      example: `Ich spreche mit dem KI-Tutor über ${cleanWord}.`,
      exampleTrans: `Tôi nói chuyện với gia sư KI về ${cleanWord}.`,
      cefr: "B1",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold shadow-md">
            <Bot className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-primary">KI B1 Sprachlehrer</h1>
            <span className="text-xs text-slate-500 font-medium">Interaktives Konversationstraining</span>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setMode("NUR_DEUTSCH")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              mode === "NUR_DEUTSCH" ? "bg-primary text-white" : "text-slate-600"
            }`}
          >
            Nur Deutsch
          </button>
          <button
            onClick={() => setMode("DEUTSCH_MIT_ERKLÄRUNG")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              mode === "DEUTSCH_MIT_ERKLÄRUNG" ? "bg-primary text-white" : "text-slate-600"
            }`}
          >
            Deutsch + Erklärung
          </button>
        </div>
      </div>

      {/* Chat Conversation Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4 min-h-[450px] flex flex-col justify-between">
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === "USER" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "AI" && (
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-accent" />
                </div>
              )}

              <div className="max-w-md space-y-2">
                <div
                  className={`p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                    msg.sender === "USER"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200"
                  }`}
                >
                  {msg.sender === "AI" ? (
                    <ClickableText text={msg.text} />
                  ) : (
                    <p>{msg.text}</p>
                  )}
                </div>

                {msg.correction && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1 animate-in fade-in">
                    <span className="font-bold block">💡 Grammatik-Tipp:</span>
                    <p className="line-through text-red-600">{msg.correction.original}</p>
                    <p className="font-bold text-emerald-700">{msg.correction.corrected}</p>
                    <p className="text-[11px] text-slate-600">{msg.correction.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-slate-400 text-xs italic">
              <Bot className="w-4 h-4 animate-bounce text-accent" />
              <span>KI-Tutor tippt...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Schreibe eine Nachricht auf Deutsch..."
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary font-medium"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 rounded-xl bg-primary hover:bg-slate-800 text-white font-bold transition shadow-md disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      <WordModal
        wordData={modalWord}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
