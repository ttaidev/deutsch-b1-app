export interface RecommendationItem {
  id: string;
  title: string;
  subtitle: string;
  category: "LESEN" | "HOEREN" | "SCHREIBEN" | "SPRECHEN" | "VOCABULARY" | "GRAMMAR";
  actionUrl: string;
  badge: string;
}

export interface WeaknessItem {
  id: string;
  topic: string;
  accuracy: number; // percentage e.g. 58%
  reason: string;
}

export async function getPersonalizedRecommendations(userId: string) {
  // Analytical default weaknesses for B1 level practice
  const weaknesses: WeaknessItem[] = [
    {
      id: "w1",
      topic: "Konjunktiv II (Wünsche & Höflichkeit)",
      accuracy: 55,
      reason: "Häufige Fehler in Grammatik-Quizzes",
    },
    {
      id: "w2",
      topic: "Hören – Teil 2 (Radiobeiträge)",
      accuracy: 62,
      reason: "Letzte Übung mit 62% abgeschlossen",
    },
    {
      id: "w3",
      topic: "Relativsätze im Dativ",
      accuracy: 64,
      reason: "Empfohlene Wiederholung",
    },
    {
      id: "w4",
      topic: "Wortschatz – Arbeit & Beruf",
      accuracy: 70,
      reason: "12 Vokabeln warten auf Fälligkeit",
    },
  ];

  const recommendations: RecommendationItem[] = [
    {
      id: "r1",
      title: "Wiederhole 15 Wörter aus 'Arbeit & Beruf'",
      subtitle: "Nutze das Spaced Repetition Flashcard System",
      category: "VOCABULARY",
      actionUrl: "/vokabeln",
      badge: "Dringend",
    },
    {
      id: "r2",
      title: "Übe Grammatik: Konjunktiv II",
      subtitle: "Erklärungen + 8 interaktive Quizfragen",
      category: "GRAMMAR",
      actionUrl: "/grammatik/konjunktiv-2",
      badge: "Empfohlen",
    },
    {
      id: "r3",
      title: "Starte Hören Teil 2: 'Arbeitswelt im Wandel'",
      subtitle: "Audioaufnahme mit Transkript & Diktat-Modus",
      category: "HOEREN",
      actionUrl: "/lernen/hoeren",
      badge: "Training",
    },
    {
      id: "r4",
      title: "Schreibe B1 Aufgabe: Formaler Beschwerdebrief",
      subtitle: "Erhalte sofortiges KI-Feedback & Grammatik-Check",
      category: "SCHREIBEN",
      actionUrl: "/lernen/schreiben",
      badge: "Prüfungstipp",
    },
  ];

  return { weaknesses, recommendations };
}
