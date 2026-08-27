"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Bookmark, 
  Plus, 
  Share2, 
  CheckCircle2, 
  Globe, 
  Lock, 
  Play, 
  Volume2, 
  Copy,
  Users
} from "lucide-react";
import { ClickableText } from "@/components/vocabulary/ClickableText";

export default function PublicDeckDetailPage({ params }: { params: { slug: string } }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isSavedToMyDecks, setIsSavedToMyDecks] = useState(false);

  // Mock public deck repository
  const publicDecksDatabase: Record<string, any> = {
    "b1-pruefung-wortschatz": {
      title: "B1 Wortschatz Prüfung (Standard)",
      description: "Zentrale Vokabeln für das Goethe / telc B1 Zertifikat mit Beispielsätzen und Artikeln.",
      author: "Deutsch B1 Team",
      isPublic: true,
      wordCount: 120,
      words: [
        { word: "die Bewerbung", article: "die", plural: "die Bewerbungen", translation: "đơn xin việc", example: "Ich habe eine Bewerbung an die Firma geschickt.", category: "Arbeit" },
        { word: "überzeugen", translation: "thuyết phục", example: "Er konnte den Chef von der Idee überzeugen.", category: "Arbeit" },
        { word: "der Besichtigungstermin", article: "der", plural: "die Besichtigungstermine", translation: "buổi hẹn xem nhà", example: "Wir haben morgen einen Besichtigungstermin.", category: "Wohnen" },
        { word: "die Vereinbarkeit", article: "die", translation: "sự hòa hợp / kết hợp", example: "Vereinbarkeit von Familie und Beruf ist wichtig.", category: "Alltag" },
        { word: "das Vorstellungsgespräch", article: "das", plural: "die Vorstellungsgespräche", translation: "buổi phỏng vấn xin việc", example: "Das Vorstellungsgespräch war sehr erfolgreich.", category: "Arbeit" },
      ]
    },
    "deutsch-fuer-arbeit": {
      title: "Deutsch für Arbeit & Beruf",
      description: "Bewerbung, Vorstellungsgespräch, Bürokommunikation und E-Mail-Formulierungen.",
      author: "Lehrer Hans",
      isPublic: true,
      wordCount: 85,
      words: [
        { word: "die Bewerbung", article: "die", plural: "die Bewerbungen", translation: "đơn xin việc", example: "Ich habe eine Bewerbung an die Firma geschickt.", category: "Arbeit" },
        { word: "überzeugen", translation: "thuyết phục", example: "Er konnte den Chef von der Idee überzeugen.", category: "Arbeit" },
        { word: "das Vorstellungsgespräch", article: "das", plural: "die Vorstellungsgespräche", translation: "buổi phỏng vấn xin việc", example: "Das Vorstellungsgespräch war sehr erfolgreich.", category: "Arbeit" },
      ]
    },
    "meine-schwierigen-woerter": {
      title: "Meine schwierigen Wörter",
      description: "Persönliche Sammlung von Wörtern.",
      author: "Privater Nutzer",
      isPublic: false,
      wordCount: 24,
      words: []
    }
  };

  const deck = publicDecksDatabase[params.slug] || {
    title: `Wortliste: ${params.slug}`,
    description: "Öffentlich geteilte Vokabelliste für die B1 Vorbereitung.",
    author: "Deutsch B1 Community",
    isPublic: true,
    wordCount: 50,
    words: [
      { word: "die Bewerbung", article: "die", plural: "die Bewerbungen", translation: "đơn xin việc", example: "Ich habe eine Bewerbung an die Firma geschickt.", category: "Arbeit" },
      { word: "überzeugen", translation: "thuyết phục", example: "Er konnte den Chef von der Idee überzeugen.", category: "Arbeit" },
    ]
  };

  if (!deck.isPublic) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-primary">Diese Wortliste ist privat</h1>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Der Ersteller hat dieses Deck nicht öffentlich freigegeben. Zugriff verweigert.
        </p>
        <Link href="/vokabeln" className="inline-block px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-xs">
          Zurück zu Vokabeln
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleSaveToMyDecks = () => {
    setIsSavedToMyDecks(true);
  };

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/vokabeln" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Zurück zu Vokabeln
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" /> Öffentliches Wortschatz-Deck
        </span>
      </div>

      {/* Hero Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-primary text-white">
                {deck.wordCount} Wörter
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Erstellt von: {deck.author}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-primary">{deck.title}</h1>
            <p className="text-xs text-slate-600 font-medium max-w-2xl">{deck.description}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 transition"
            >
              {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              {isCopied ? "Link kopiert!" : "Deck teilen"}
            </button>

            <button
              onClick={handleSaveToMyDecks}
              disabled={isSavedToMyDecks}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition ${
                isSavedToMyDecks
                  ? "bg-emerald-600 text-white"
                  : "bg-primary hover:bg-slate-800 text-white"
              }`}
            >
              {isSavedToMyDecks ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  In meinen Wortlisten gespeichert!
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-accent" />
                  Zu meinen Wörtern hinzufügen
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">
            Bereit zum Üben? Starte direkt mit Flashcards oder Multiple Choice:
          </span>
          <Link
            href={`/vokabeln/lernen/${params.slug}`}
            className="px-6 py-2.5 rounded-xl bg-accent hover:bg-red-700 text-white font-extrabold text-xs shadow-md transition flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" /> Deck jetzt lernen
          </Link>
        </div>
      </div>

      {/* Words List */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
        <h3 className="text-lg font-bold text-primary border-b pb-3">Enthaltene Vokabeln</h3>
        <div className="divide-y divide-slate-100">
          {deck.words.map((w: any, idx: number) => (
            <div key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 p-3 rounded-xl transition">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {w.article && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {w.article}
                    </span>
                  )}
                  <h4 className="text-base font-bold text-primary">{w.word}</h4>
                  <button onClick={() => speak(w.word)} className="p-1 text-slate-400 hover:text-primary">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                {w.plural && <p className="text-xs text-slate-400">Plural: {w.plural}</p>}
                {w.example && (
                  <p className="text-xs text-slate-600 italic font-medium pt-1">
                    "<ClickableText text={w.example} />"
                  </p>
                )}
              </div>

              <div className="text-right">
                <span className="text-sm font-bold text-emerald-700 block">{w.translation}</span>
                {w.category && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                    {w.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
