"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  RotateCw, 
  Volume2, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw, 
  Mic, 
  Headphones, 
  PenTool, 
  BookOpen,
  HelpCircle,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Repeat
} from "lucide-react";
import { getDeckWords, updateUserWordStatus } from "@/lib/vocabulary/actions";

type ModeType = "FLASHCARD" | "MC" | "DE_TO_VI" | "VI_TO_DE" | "FILL_BLANK" | "LISTENING" | "SPEAKING";

export default function VocabularyPracticePage({ params }: { params: { deckId: string } }) {
  const [practiceMode, setPracticeMode] = useState<ModeType>("FLASHCARD");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrectInput, setIsCorrectInput] = useState(false);
  const [isListeningActive, setIsListeningActive] = useState(false);
  const [transcriptResult, setTranscriptResult] = useState("");

  const [cardDeck, setCardDeck] = useState<any[]>([]);
  const [forgottenQueue, setForgottenQueue] = useState<any[]>([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundNotice, setRoundNotice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getDeckWords(params.deckId, 50).then((words) => {
      if (!isMounted) return;

      if (words && words.length > 0) {
        const formatted = words.map((w, idx) => ({
          id: w.id || `v-${idx}`,
          word: w.word,
          article: w.article || undefined,
          plural: w.plural || undefined,
          translation: w.translation,
          example: w.example || `Ich lerne das Wort "${w.word}".`,
          missingSentence: w.example ? w.example.replace(w.word, "________") : `Ich lerne das Wort ________.`,
          options: [
            w.translation,
            "cuộc hẹn bác sĩ",
            "hợp đồng thuê nhà",
            "bài thi nói tiếng Đức"
          ].sort(() => Math.random() - 0.5),
          correctIndex: 0,
        }));
        setCardDeck(formatted);
      } else {
        setCardDeck([
          {
            id: "v1",
            word: "die Bewerbung",
            article: "die",
            plural: "die Bewerbungen",
            translation: "đơn xin việc",
            example: "Ich habe eine Bewerbung an die Firma geschickt.",
            missingSentence: "Ich habe eine ________ an die Firma geschickt.",
            options: ["đơn xin việc", "cuộc hẹn bác sĩ", "hợp đồng thuê nhà", "bài thi nói"],
            correctIndex: 0,
          },
        ]);
      }
      setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [params.deckId]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-3">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto text-indigo-600" />
        <p className="text-sm font-bold text-slate-600">Đang tải danh sách từ vựng B1 cho bài luyện tập...</p>
      </div>
    );
  }

  const currentCard = cardDeck[currentIndex] || cardDeck[0];

  const handleNextCard = (rating: "AGAIN" | "GOOD" = "GOOD") => {
    if (currentCard?.id) {
      updateUserWordStatus(currentCard.id, rating);
    }

    let nextForgotten = [...forgottenQueue];
    if (rating === "AGAIN") {
      if (!nextForgotten.some((w) => w.id === currentCard.id)) {
        nextForgotten.push(currentCard);
      }
      setForgottenQueue(nextForgotten);
    }

    // Check if more cards exist in current round
    if (currentIndex + 1 < cardDeck.length) {
      setIsFlipped(false);
      setIsAnswerChecked(false);
      setTextInput("");
      setTranscriptResult("");
      setCurrentIndex((prev) => prev + 1);
    } else {
      // End of round! Check if any words were marked forgotten
      if (nextForgotten.length > 0) {
        setCardDeck(nextForgotten);
        setForgottenQueue([]);
        setCurrentIndex(0);
        const nextRound = roundNumber + 1;
        setRoundNumber(nextRound);
        setIsFlipped(false);
        setIsAnswerChecked(false);
        setTextInput("");
        setTranscriptResult("");
        setRoundNotice(`🔁 Hoàn thành Vòng ${roundNumber}! Đang bắt đầu Vòng ${nextRound}: Ôn lại ${nextForgotten.length} từ Gạo chưa nhớ...`);
      } else {
        // All words remembered! Session completed
        setSessionCompleted(true);
      }
    }
  };

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCheckTextAnswer = (expected: string) => {
    const cleanInput = textInput.trim().toLowerCase();
    const cleanExpected = expected.trim().toLowerCase();
    const isOk = cleanInput === cleanExpected || cleanInput.includes(cleanExpected);
    setIsCorrectInput(isOk);
    setIsAnswerChecked(true);
  };

  const handleStartSpeechRecognition = () => {
    setIsListeningActive(true);
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setTranscriptResult("SpeechRecognition API chưa được hỗ trợ trên trình duyệt này.");
      setIsListeningActive(false);
      return;
    }
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "de-DE";
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscriptResult(transcript);
        setIsListeningActive(false);
        setIsAnswerChecked(true);
      };
      recognition.onerror = () => {
        setIsListeningActive(false);
        setTranscriptResult("Không nhận diện được giọng nói. Hãy thử lại!");
      };
      recognition.start();
    } catch (e) {
      setIsListeningActive(false);
      setTranscriptResult("Lỗi khi kết nối Micro.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link
          href="/vokabeln"
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại Kho từ vựng
        </Link>
        
        <div className="flex items-center gap-2">
          {roundNumber > 1 && (
            <span className="text-xs font-black px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full flex items-center gap-1">
              <Repeat className="w-3.5 h-3.5" /> Vòng ôn {roundNumber}
            </span>
          )}
          <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
            Thẻ {currentIndex + 1} / {cardDeck.length}
          </span>
        </div>
      </div>

      {/* Round Notice Banner */}
      {roundNotice && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-2xl text-xs font-bold flex items-center justify-between shadow-xs">
          <span>{roundNotice}</span>
          <button onClick={() => setRoundNotice("")} className="text-indigo-400 hover:text-indigo-700 font-black">✕</button>
        </div>
      )}

      {/* 7 Practice Modes Selector Bar */}
      <div className="bg-white rounded-3xl p-3 border-2 border-slate-100 shadow-sm flex flex-wrap items-center justify-center gap-2.5">
        {[
          { id: "FLASHCARD", label: "Flashcard", icon: RefreshCw, theme: "indigo" },
          { id: "MC", label: "Trắc nghiệm", icon: HelpCircle, theme: "purple" },
          { id: "DE_TO_VI", label: "Đức ➔ Việt", icon: BookOpen, theme: "emerald" },
          { id: "VI_TO_DE", label: "Việt ➔ Đức", icon: PenTool, theme: "rose" },
          { id: "LISTENING", label: "Nghe ghi", icon: Headphones, theme: "cyan" },
          { id: "SPEAKING", label: "Phát âm", icon: Mic, theme: "blue" },
        ].map((m) => {
          const Icon = m.icon;
          const isActive = practiceMode === m.id;
          
          // Color mappings for active/inactive states
          const themeClasses = {
            indigo: isActive ? "bg-indigo-500 text-white border-indigo-600 shadow-md shadow-indigo-200" : "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100",
            purple: isActive ? "bg-purple-500 text-white border-purple-600 shadow-md shadow-purple-200" : "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
            emerald: isActive ? "bg-emerald-500 text-white border-emerald-600 shadow-md shadow-emerald-200" : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
            rose: isActive ? "bg-rose-500 text-white border-rose-600 shadow-md shadow-rose-200" : "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
            amber: isActive ? "bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-200" : "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
            cyan: isActive ? "bg-cyan-500 text-white border-cyan-600 shadow-md shadow-cyan-200" : "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100",
            blue: isActive ? "bg-blue-500 text-white border-blue-600 shadow-md shadow-blue-200" : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
          };

          return (
            <button
              key={m.id}
              onClick={() => {
                setPracticeMode(m.id as ModeType);
                setIsAnswerChecked(false);
                setTextInput("");
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-black transition-all border-b-4 active:border-b-0 active:translate-y-1 ${themeClasses[m.theme as keyof typeof themeClasses]}`}
            >
              <Icon className="w-4 h-4" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {!sessionCompleted ? (
        <div className="space-y-6">
          {/* Mode 1: Flashcard */}
          {practiceMode === "FLASHCARD" && (
            <div className="space-y-4">
              <div className="perspective-1000">
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`w-full min-h-[320px] bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between items-center text-center hover:border-indigo-600 ${
                    isFlipped ? "bg-slate-900 text-white border-slate-800" : ""
                  }`}
                >
                  <div className="w-full flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>Bấm vào thẻ để lật ({isFlipped ? "Mặt sau: Nghĩa Tiếng Việt" : "Mặt trước: Từ tiếng Đức"})</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(currentCard.word);
                      }}
                      className="p-2 rounded-xl bg-slate-100 text-primary hover:bg-slate-200 transition"
                      title="Phát âm tiếng Đức"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {!isFlipped ? (
                    <div className="space-y-3 my-auto">
                      {currentCard.article && (
                        <span className="text-sm font-extrabold text-amber-500 block uppercase tracking-wider">
                          {currentCard.article}
                        </span>
                      )}
                      <h2 className="text-4xl font-black tracking-tight text-primary">{currentCard.word}</h2>
                      {currentCard.plural && (
                        <p className="text-xs text-slate-400 font-medium">Số nhiều (Plural): {currentCard.plural}</p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4 my-auto">
                      <h3 className="text-3xl font-black text-amber-400">{currentCard.translation}</h3>
                      {currentCard.example && (
                        <div className="p-4 bg-slate-800 rounded-2xl text-xs text-slate-300 italic border border-slate-700">
                          "{currentCard.example}"
                        </div>
                      )}
                    </div>
                  )}

                  <span className="text-[11px] font-bold text-slate-400">
                    {isFlipped ? "Bấm [Chưa nhớ] hoặc [Đã nhớ] bên dưới 👇" : "Click anywhere to flip"}
                  </span>
                </div>
              </div>

              {/* Quick Memory Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleNextCard("AGAIN")}
                  className="py-4 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 border-2 border-red-200 font-black text-sm flex items-center justify-center gap-2 shadow-sm transition hover:-translate-y-0.5"
                >
                  <ThumbsDown className="w-5 h-5 text-red-600" /> ❌ Chưa nhớ (Quên)
                </button>
                <button
                  onClick={() => handleNextCard("GOOD")}
                  className="py-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-2 border-emerald-200 font-black text-sm flex items-center justify-center gap-2 shadow-sm transition hover:-translate-y-0.5"
                >
                  <ThumbsUp className="w-5 h-5 text-emerald-600" /> ✅ Đã nhớ từ này
                </button>
              </div>
            </div>
          )}

          {/* Mode 2: Multiple Choice */}
          {practiceMode === "MC" && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-xs font-bold text-slate-400">Trắc nghiệm chọn nghĩa</span>
                <button onClick={() => speak(currentCard.word)} className="p-2 bg-slate-100 rounded-xl hover:bg-slate-200">
                  <Volume2 className="w-4 h-4 text-primary" />
                </button>
              </div>

              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  {currentCard.article || "Từ vựng B1"}
                </span>
                <h2 className="text-3xl font-black text-primary">{currentCard.word}</h2>
                <p className="text-xs text-slate-500">Chọn nghĩa Tiếng Việt chính xác nhất:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentCard.options.map((opt: string, idx: number) => {
                  const isCorrectChoice = opt === currentCard.translation;
                  let inlineStyle = { "--btn-bg": "#f8fafc", "--btn-border": "#e2e8f0", "--btn-text": "#334155" };
                  if (isAnswerChecked) {
                    if (isCorrectChoice) inlineStyle = { "--btn-bg": "#10b981", "--btn-border": "#047857", "--btn-text": "#ffffff" };
                    else inlineStyle = { "--btn-bg": "#f1f5f9", "--btn-border": "#cbd5e1", "--btn-text": "#94a3b8" };
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (isAnswerChecked) return;
                        setIsAnswerChecked(true);
                        setIsCorrectInput(isCorrectChoice);
                      }}
                      className="btn-3d w-full text-sm"
                      style={inlineStyle as React.CSSProperties}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isAnswerChecked && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => handleNextCard(isCorrectInput ? "GOOD" : "AGAIN")}
                    className="btn-3d w-full sm:w-auto text-sm"
                  >
                    Từ tiếp theo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mode 3 & 4: DE->VI and VI->DE Input */}
          {(practiceMode === "DE_TO_VI" || practiceMode === "VI_TO_DE") && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">
                {practiceMode === "DE_TO_VI" ? "Dịch từ tiếng Đức ➔ Việt" : "Dịch từ tiếng Việt ➔ Đức"}
              </span>

              <h2 className="text-3xl font-black text-primary">
                {practiceMode === "DE_TO_VI" ? currentCard.word : currentCard.translation}
              </h2>

              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder={practiceMode === "DE_TO_VI" ? "Gõ nghĩa tiếng Việt..." : "Gõ từ tiếng Đức..."}
                  className="w-full p-3.5 text-xs rounded-2xl bg-slate-50 border border-slate-200 text-center font-bold focus:ring-2 focus:ring-primary"
                />

                {!isAnswerChecked ? (
                  <button
                    onClick={() => handleCheckTextAnswer(practiceMode === "DE_TO_VI" ? currentCard.translation : currentCard.word)}
                    disabled={!textInput.trim()}
                    className="btn-3d w-full text-sm"
                    style={{ "--btn-bg": "#1899D6", "--btn-border": "#147ab1" } as React.CSSProperties}
                  >
                    Kiểm tra đáp án
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className={`p-4 rounded-2xl border text-xs text-center space-y-1 ${isCorrectInput ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                      <p className="font-bold">{isCorrectInput ? "Chính xác! 🎉" : "Chưa chính xác!"}</p>
                      <p>Đáp án đúng: <span className="font-extrabold">{practiceMode === "DE_TO_VI" ? currentCard.translation : currentCard.word}</span></p>
                    </div>
                    <button
                      onClick={() => handleNextCard(isCorrectInput ? "GOOD" : "AGAIN")}
                      className="btn-3d w-full text-sm"
                    >
                      Từ tiếp theo <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}


          {/* Mode 6: Listening Dictation (Hören) */}
          {practiceMode === "LISTENING" && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Nghe audio & Gõ lại từ (Hören & Schreiben)</span>
              
              <div>
                <button
                  onClick={() => speak(currentCard.word)}
                  className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto shadow-lg hover:scale-105 transition"
                >
                  <Volume2 className="w-8 h-8" />
                </button>
                <p className="text-xs text-slate-400 font-medium mt-2">Bấm vào biểu tượng loa để nghe audio phát âm</p>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Gõ từ bạn vừa nghe được..."
                  className="w-full p-3.5 text-xs rounded-2xl bg-slate-50 border border-slate-200 text-center font-bold focus:ring-2 focus:ring-primary"
                />

                {!isAnswerChecked ? (
                  <button
                    onClick={() => handleCheckTextAnswer(currentCard.word)}
                    disabled={!textInput.trim()}
                    className="btn-3d w-full text-sm"
                    style={{ "--btn-bg": "#1899D6", "--btn-border": "#147ab1" } as React.CSSProperties}
                  >
                    Kiểm tra phát âm nghe được
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className={`p-4 rounded-2xl border text-xs text-center space-y-1 ${isCorrectInput ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                      <p className="font-bold">{isCorrectInput ? "Chính xác! 🎉" : "Chưa đúng!"}</p>
                      <p>Từ chuẩn: <span className="font-extrabold">{currentCard.word}</span> ({currentCard.translation})</p>
                    </div>
                    <button
                      onClick={() => handleNextCard(isCorrectInput ? "GOOD" : "AGAIN")}
                      className="btn-3d w-full text-sm"
                    >
                      Từ tiếp theo <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mode 7: Speaking Voice Input (Sprechen) */}
          {practiceMode === "SPEAKING" && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Luyện phát âm giọng nói (Speech Recognition)</span>
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  {currentCard.article || "B1"}
                </span>
                <h2 className="text-3xl font-black text-primary">{currentCard.word}</h2>
                <p className="text-xs text-slate-500">Hãy đọc to từ tiếng Đức này qua Micro!</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleStartSpeechRecognition}
                  disabled={isListeningActive}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md transition ${
                    isListeningActive ? "bg-red-500 text-white animate-ping" : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  <Mic className="w-7 h-7" />
                </button>

                {transcriptResult && (
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-xs space-y-2">
                    <span className="font-bold text-slate-500 block">Âm giọng nhận diện được:</span>
                    <p className="text-sm font-bold text-primary">"{transcriptResult}"</p>
                    <button
                      onClick={() => handleNextCard("GOOD")}
                      className="btn-3d w-full text-xs"
                    >
                      Từ tiếp theo ➔
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Completion Screen */
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-primary">Chúc mừng Gạo đã hoàn thành xuất sắc bài học!</h2>
            <p className="text-xs text-slate-500 font-medium">
              +40 XP đã được cộng vào tài khoản • Đã vượt qua tất cả các vòng ôn từ chưa nhớ!
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={() => {
                setSessionCompleted(false);
                setCurrentIndex(0);
                setRoundNumber(1);
                setForgottenQueue([]);
              }}
              className="btn-3d text-sm"
              style={{ "--btn-bg": "#f1f5f9", "--btn-border": "#cbd5e1", "--btn-text": "#334155" } as React.CSSProperties}
            >
              Học lại danh sách này
            </button>
            <Link
              href="/vokabeln"
              className="btn-3d text-sm"
            >
              Quay về kho từ vựng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
