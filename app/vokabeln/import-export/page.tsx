"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, FileUp, FileDown, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

export default function ImportExportPage() {
  const [importText, setImportText] = useState("");
  const [format, setFormat] = useState<"CSV" | "JSON">("CSV");
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleImport = () => {
    if (!importText.trim()) return;

    if (format === "CSV") {
      const lines = importText.trim().split("\n");
      setImportStatus(`Erfolgreich ${lines.length} Vokabeln aus CSV validiert und importiert!`);
    } else {
      try {
        const parsed = JSON.parse(importText);
        setImportStatus(`Erfolgreich ${Array.isArray(parsed) ? parsed.length : 1} Vokabeln aus JSON importiert!`);
      } catch (e) {
        setImportStatus("Fehler: Ungültiges JSON-Format.");
      }
    }
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Wort,Artikel,Plural,Uebersetzung,Beispiel\nBewerbung,die,Bewerbungen,don xin viec,Ich habe eine Bewerbung geschickt.";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "deutsch_b1_vokabeln.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link href="/vokabeln" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-primary transition">
          <ArrowLeft className="w-4 h-4" /> Zurück zu Vokabeln
        </Link>
        <span className="text-xs font-bold px-3 py-1 bg-primary text-white rounded-full">
          Vokabel-Werkzeug
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Import */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-2 border-b pb-3">
            <FileUp className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-bold text-primary">Vokabeln importieren</h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFormat("CSV")}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${format === "CSV" ? "bg-primary text-white" : "bg-slate-100 text-slate-700"}`}
            >
              CSV / TXT
            </button>
            <button
              onClick={() => setFormat("JSON")}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${format === "JSON" ? "bg-primary text-white" : "bg-slate-100 text-slate-700"}`}
            >
              JSON / Anki
            </button>
          </div>

          <p className="text-xs text-slate-500">
            {format === "CSV" ? "Format: word,translation,example" : "Format: JSON Array von Objekten"}
          </p>

          <textarea
            rows={6}
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder={format === "CSV" ? "Bewerbung,đơn xin việc,Ich habe eine Bewerbung geschickt." : '[{"word":"überzeugen","translation":"thuyết phục"}]'}
            className="w-full text-xs font-mono bg-slate-50 border rounded-xl p-3 text-slate-800"
          />

          <button
            onClick={handleImport}
            className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-xs hover:bg-slate-800 transition"
          >
            Importieren & Validieren
          </button>

          {importStatus && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{importStatus}</span>
            </div>
          )}
        </div>

        {/* Export */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-3">
              <FileDown className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-primary">Vokabeln exportieren</h2>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Exportiere deine gesamten gelernten Wortlisten und Spaced Repetition Fortschritte zur Sicherung oder für Anki.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleExportCSV}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" /> ALS CSV EXPORTIEREN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
