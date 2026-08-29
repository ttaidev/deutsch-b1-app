export interface PronunciationTask {
  id: string;
  title: string;
  level: string;
  topic: string;
  type: "Từ vựng" | "Câu giao tiếp" | "Líu lưỡi";
  targetText: string;
  translation: string;
  completed?: boolean;
  score?: string;
}

export const SPRECHEN_TASKS: PronunciationTask[] = [
  // --- Từ vựng khó phát âm ---
  {
    id: "aussprache-wort-1",
    title: "Từ vựng: Entschuldigung",
    level: "A1-B1",
    topic: "Giao tiếp cơ bản",
    type: "Từ vựng",
    targetText: "Entschuldigung",
    translation: "Xin lỗi",
  },
  {
    id: "aussprache-wort-2",
    title: "Từ vựng: Streichholzschächtelchen",
    level: "B2",
    topic: "Đố vui phát âm",
    type: "Từ vựng",
    targetText: "Streichholzschächtelchen",
    translation: "Bao diêm nhỏ",
  },
  {
    id: "aussprache-wort-3",
    title: "Từ vựng: Sehenswürdigkeiten",
    level: "A2",
    topic: "Du lịch",
    type: "Từ vựng",
    targetText: "Sehenswürdigkeiten",
    translation: "Các địa điểm tham quan",
  },
  {
    id: "aussprache-wort-4",
    title: "Từ vựng: Eichhörnchen",
    level: "A2",
    topic: "Động vật",
    type: "Từ vựng",
    targetText: "Eichhörnchen",
    translation: "Con sóc",
  },
  {
    id: "aussprache-wort-5",
    title: "Từ vựng: Geschwindigkeit",
    level: "B1",
    topic: "Giao thông",
    type: "Từ vựng",
    targetText: "Geschwindigkeit",
    translation: "Tốc độ",
  },
  {
    id: "aussprache-wort-6",
    title: "Từ vựng: Unabhängigkeit",
    level: "B1",
    topic: "Xã hội",
    type: "Từ vựng",
    targetText: "Unabhängigkeit",
    translation: "Sự độc lập",
  },

  // --- Câu giao tiếp ---
  {
    id: "aussprache-satz-1",
    title: "Câu giao tiếp: Đặt món",
    level: "A1",
    topic: "Nhà hàng",
    type: "Câu giao tiếp",
    targetText: "Ich hätte gerne einen Kaffee und ein Stück Kuchen, bitte.",
    translation: "Cho tôi một ly cà phê và một miếng bánh ngọt.",
  },
  {
    id: "aussprache-satz-2",
    title: "Câu giao tiếp: Hỏi đường",
    level: "A1",
    topic: "Phương hướng",
    type: "Câu giao tiếp",
    targetText: "Können Sie mir sagen, wo der Bahnhof ist?",
    translation: "Bạn có thể cho tôi biết ga tàu ở đâu không?",
  },
  {
    id: "aussprache-satz-3",
    title: "Câu giao tiếp: Tại nơi làm việc",
    level: "B1",
    topic: "Công sở",
    type: "Câu giao tiếp",
    targetText: "Wir müssen dieses Projekt bis spätestens Freitag abschließen.",
    translation: "Chúng ta phải hoàn thành dự án này chậm nhất là vào thứ sáu.",
  },
  {
    id: "aussprache-satz-4",
    title: "Câu giao tiếp: Xin lỗi đi muộn",
    level: "A2",
    topic: "Công sở",
    type: "Câu giao tiếp",
    targetText: "Es tut mir leid, dass ich zu spät bin. Der Bus hatte Verspätung.",
    translation: "Tôi xin lỗi vì đã đến muộn. Xe buýt bị trễ.",
  },
  {
    id: "aussprache-satz-5",
    title: "Câu giao tiếp: Bày tỏ ý kiến",
    level: "B1",
    topic: "Thảo luận",
    type: "Câu giao tiếp",
    targetText: "Meiner Meinung nach ist das eine sehr gute Idee für unsere Zukunft.",
    translation: "Theo ý kiến của tôi, đó là một ý tưởng rất hay cho tương lai của chúng ta.",
  },
  {
    id: "aussprache-satz-6",
    title: "Câu giao tiếp: Lời chúc",
    level: "A2",
    topic: "Xã hội",
    type: "Câu giao tiếp",
    targetText: "Ich wünsche dir viel Erfolg bei deiner Prüfung morgen!",
    translation: "Chúc bạn nhiều thành công trong kỳ thi ngày mai!",
  },

  // --- Líu lưỡi (Zungenbrecher) ---
  {
    id: "aussprache-zungen-1",
    title: "Zungenbrecher: Blaukraut",
    level: "B2",
    topic: "Líu lưỡi",
    type: "Líu lưỡi",
    targetText: "Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.",
    translation: "Bắp cải xanh vẫn là bắp cải xanh và váy cưới vẫn là váy cưới.",
  },
  {
    id: "aussprache-zungen-2",
    title: "Zungenbrecher: Fischer Fritz",
    level: "B1",
    topic: "Líu lưỡi",
    type: "Líu lưỡi",
    targetText: "Fischers Fritz fischt frische Fische, frische Fische fischt Fischers Fritz.",
    translation: "Anh ngư phủ Fritz đánh bắt cá tươi, cá tươi được anh ngư phủ Fritz đánh bắt.",
  },
  {
    id: "aussprache-zungen-3",
    title: "Zungenbrecher: Fliegen",
    level: "B1",
    topic: "Líu lưỡi",
    type: "Líu lưỡi",
    targetText: "Wenn Fliegen hinter Fliegen fliegen, fliegen Fliegen Fliegen nach.",
    translation: "Khi những con ruồi bay sau những con ruồi, ruồi bay theo ruồi.",
  },
  {
    id: "aussprache-zungen-4",
    title: "Zungenbrecher: Katzen kratzen",
    level: "A2",
    topic: "Líu lưỡi",
    type: "Líu lưỡi",
    targetText: "Katzen kratzen mit ihren Tatzen.",
    translation: "Những con mèo cào bằng bàn chân của chúng.",
  }
];
