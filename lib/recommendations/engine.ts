export interface RecommendationItem {
  id: string;
  title: string;
  subtitle: string;
  category: "LESEN" | "HOEREN" | "SCHREIBEN" | "SPRECHEN" | "VOCABULARY" | "GRAMMAR";
  actionUrl: string;
  badge: string;
}

export interface GoalItem {
  id: string;
  topic: string;
  progress: number; // percentage e.g. 58%
  description: string;
}

export async function getPersonalizedRecommendations(userId: string) {
  // Analytical default goals for B1 level practice
  const goals: GoalItem[] = [
    {
      id: "g1",
      topic: "Hoàn thành 3 bài luyện nghe",
      progress: 33,
      description: "Đã làm 1/3 bài trong tuần này",
    },
    {
      id: "g2",
      topic: "Luyện tập nói 2 bài Teil 1",
      progress: 50,
      description: "Đã làm 1/2 bài trong tuần này",
    },
    {
      id: "g3",
      topic: "Đạt 80% trở lên bài đọc hiểu",
      progress: 0,
      description: "Mục tiêu bài kiểm tra cuối tuần",
    },
    {
      id: "g4",
      topic: "Ôn tập 20 từ vựng chủ đề Công việc",
      progress: 75,
      description: "Đã ôn tập 15/20 từ",
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
      title: "Luyện nói Teil 1: Lên kế hoạch",
      subtitle: "Ghi âm & nhận đánh giá phát âm từ AI",
      category: "SPRECHEN",
      actionUrl: "/lernen/sprechen",
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

  return { goals, recommendations };
}
