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
      title: "Ôn tập 15 từ vựng chủ đề 'Công việc & Nghề nghiệp'",
      subtitle: "Sử dụng hệ thống thẻ ghi nhớ ngắt quãng (Spaced Repetition)",
      category: "VOCABULARY",
      actionUrl: "/vokabeln",
      badge: "Khẩn cấp",
    },
    {
      id: "r2",
      title: "Luyện nói Teil 1: Lên kế hoạch",
      subtitle: "Ghi âm & nhận đánh giá phát âm từ AI",
      category: "SPRECHEN",
      actionUrl: "/lernen/sprechen",
      badge: "Đề xuất",
    },
    {
      id: "r3",
      title: "Luyện nghe Teil 2: 'Thế giới việc làm đang thay đổi'",
      subtitle: "Bản thu âm kèm phụ đề & chế độ nghe chép chính tả",
      category: "HOEREN",
      actionUrl: "/lernen/hoeren",
      badge: "Đang luyện",
    },
    {
      id: "r4",
      title: "Viết luận B1: Thư phàn nàn trang trọng",
      subtitle: "Nhận phản hồi ngay lập tức từ AI & kiểm tra ngữ pháp",
      category: "SCHREIBEN",
      actionUrl: "/lernen/schreiben",
      badge: "Mẹo thi",
    },
  ];

  return { goals, recommendations };
}
