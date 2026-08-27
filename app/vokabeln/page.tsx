"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Bookmark, 
  Plus, 
  Flame, 
  Sparkles, 
  Play, 
  FileUp, 
  Share2, 
  Search,
  Volume2,
  RefreshCw,
  FolderKanban
} from "lucide-react";
import { autoCompleteVocabulary } from "@/lib/ai/evaluator";
import type { VocabularyAIEssence } from "@/lib/ai/evaluator";
import { getVocabularyList, getVocabularyDecks } from "@/lib/vocabulary/actions";

export default function VocabularyDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [wordsList, setWordsList] = useState<any[]>([]);
  const [decksList, setDecksList] = useState<any[]>([]);
  const [loadingWords, setLoadingWords] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [newWordForm, setNewWordForm] = useState<Partial<VocabularyAIEssence>>({
    word: "",
    translation: "",
    article: "die",
    plural: "",
    wordType: "Nomen",
    example: "",
    cefr: "B1",
  });

  const categories = [
    "Tất cả",
    "Gia đình & các mối quan hệ",
    "Nhà ở & sinh hoạt",
    "Công việc & nghề nghiệp",
    "Trường học & học tập",
    "Mua sắm & tiền bạc",
    "Đồ ăn & thức uống",
    "Giao thông & du lịch",
    "Sức khỏe & bệnh tật",
    "Thành phố & địa điểm",
    "Thiên nhiên & môi trường",
    "Công nghệ & truyền thông",
    "Xã hội, chính trị & đời sống cộng đồng",
    "Văn hóa, nghệ thuật & giải trí",
    "Thể thao",
    "Quần áo & ngoại hình",
    "Giao tiếp & ý kiến",
    "Cảm xúc & tính cách",
    "Thời tiết",
    "Đồ vật & công việc thường ngày",
    "Các vấn đề, quy định & hành chính"
  ];

  // Fetch vocabulary decks and word list from database
  useEffect(() => {
    let isMounted = true;
    
    getVocabularyDecks().then((decksData) => {
      if (isMounted && decksData.length > 0) {
        setDecksList(decksData);
      }
    });

    setLoadingWords(true);
    getVocabularyList(selectedCategory, searchTerm, 100).then((data) => {
      if (isMounted) {
        setWordsList(data);
        setLoadingWords(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, searchTerm]);

  const handleAiAutoComplete = async () => {
    if (!newWordForm.word) return;
    setAiLoading(true);
    const res = await autoCompleteVocabulary(newWordForm.word);
    setNewWordForm(res);
    setAiLoading(false);
  };

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
              <Bookmark className="w-5 h-5 text-amber-400" />
            </div>
            <h1 className="text-3xl font-extrabold text-primary">Kho Từ vựng & Bộ thẻ chủ đề B1 của Gạo</h1>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-1">
            3,032 từ vựng Goethe B1 phân chia theo 10 Bộ thẻ (Decks) chủ đề • Luyện tập Flashcard (SM-2)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/vokabeln/import-export"
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 transition"
          >
            <FileUp className="w-4 h-4" /> Nhập / Xuất dữ liệu (Import/Export)
          </Link>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 rounded-xl bg-primary hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition"
          >
            <Plus className="w-4 h-4 text-accent" /> Thêm từ mới / Bộ từ
          </button>
        </div>
      </div>

      {/* Daily Review Reminder Card */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
            <Flame className="w-4 h-4 fill-white" /> Cần ôn tập hôm nay
          </div>
          <h2 className="text-2xl font-black">Đã đến lúc luyện não rồi Gạo ơi! 🚀</h2>
          <p className="text-xs text-amber-100 font-medium mt-2 leading-relaxed">
            Mỗi ngày chỉ cần 10 phút củng cố từ vựng để tự tin hơn trên con đường chinh phục chứng chỉ B1. Bắt đầu ngay với một bộ từ ngẫu nhiên nhé!
          </p>
        </div>

        <Link
          href={
            decksList.length > 0
              ? `/vokabeln/lernen/${decksList[Math.floor(Math.random() * decksList.length)].id}`
              : "/vokabeln/lernen/b1-pruefung-wortschatz"
          }
          className="px-6 py-3 rounded-2xl bg-white text-amber-900 font-extrabold text-xs shadow-md hover:bg-amber-50 transition shrink-0 flex items-center gap-2"
        >
          <Play className="w-4 h-4 fill-amber-900" /> Học ngay bây giờ
        </Link>
      </div>

      {/* Custom Topic Decks Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl font-black text-primary">Các bộ từ vựng phân theo chủ đề (Topic Decks)</h3>
          </div>
          <span className="text-xs font-bold text-slate-500">Hiển thị {decksList.length} bộ từ B1</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decksList.map((deck) => (
            <div
              key={deck.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group hover:-translate-y-1 overflow-hidden"
            >
              <div className="space-y-3">
                {/* Topic Cover Image Banner */}
                <div className="relative h-40 w-full rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={deck.coverImage || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop"}
                    alt={deck.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-white/90 text-indigo-900 shadow-xs backdrop-blur-xs">
                      B1 Deck
                    </span>
                    <span className="text-xs font-black text-white bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                      {deck.wordCount} từ
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-black text-primary group-hover:text-indigo-600 transition leading-snug">{deck.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{deck.description}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="flex justify-between text-[11px] font-bold text-slate-600">
                  <span>Tiến độ đã học: {deck.learnedCount} / {deck.wordCount} từ</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/vokabeln/lernen/${deck.slug || deck.id}`}
                    className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" /> Học Deck này
                  </Link>

                  {deck.isPublic && (
                    <Link
                      href={`/decks/${deck.slug}`}
                      title="Xem trang chia sẻ công khai"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-200 transition"
                    >
                      <Share2 className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Vocabulary Explorer */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4">
          <div>
            <h3 className="text-lg font-bold text-primary">Tra cứu kho 3,032 từ vựng Goethe B1</h3>
            <p className="text-xs text-slate-500 font-medium">Bấm vào các thẻ chủ đề bên dưới để lọc danh sách từ tương ứng</p>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nhập từ tiếng Đức hoặc nghĩa tiếng Việt..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Word Table */}
        <div className="overflow-x-auto">
          {loadingWords ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-primary" />
              <span className="text-xs font-bold block">Đang tải danh sách từ vựng từ cơ sở dữ liệu...</span>
            </div>
          ) : wordsList.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-1">
              <span className="text-sm font-bold block text-slate-600">Không tìm thấy từ vựng phù hợp</span>
              <span className="text-xs">Hãy thử đổi từ khóa tìm kiếm hoặc chọn lại chủ đề</span>
            </div>
          ) : (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-3 px-2">Từ tiếng Đức</th>
                  <th className="py-3 px-2">Nghĩa Tiếng Việt</th>
                  <th className="py-3 px-2">Câu ví dụ</th>
                  <th className="py-3 px-2">Chủ đề</th>
                  <th className="py-3 px-2 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {wordsList.map((w) => (
                  <tr key={w.id} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-2 font-bold text-primary">
                      <div className="flex items-center gap-1.5">
                        {w.article && <span className="text-slate-500 font-bold px-1.5 py-0.5 bg-slate-100 rounded text-[10px]">{w.article}</span>}
                        <span>{w.word}</span>
                        {w.plural && <span className="text-slate-400 font-normal text-[11px]">({w.plural})</span>}
                      </div>
                    </td>
                    <td className="py-3 px-2 font-bold text-emerald-700">{w.translation}</td>
                    <td className="py-3 px-2 text-slate-600 italic">
                      {w.example ? `"${w.example}"` : "-"}
                    </td>
                    <td className="py-3 px-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px]">
                        {w.category || "Alltag"}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button
                        onClick={() => speak(w.word)}
                        title="Phát âm từ này"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-100 transition"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Add Word Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-primary">Thêm từ vựng mới vào kho</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Từ tiếng Đức:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newWordForm.word || ""}
                    onChange={(e) => setNewWordForm({ ...newWordForm, word: e.target.value })}
                    placeholder="VD: überzeugen"
                    className="flex-1 p-2.5 bg-slate-50 border rounded-xl text-slate-800 focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleAiAutoComplete}
                    disabled={aiLoading || !newWordForm.word}
                    className="px-3.5 py-2.5 rounded-xl bg-accent text-white font-bold text-xs flex items-center gap-1 hover:bg-red-700 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Tự động điền bằng KI
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Giống (Artikel):</label>
                  <select
                    value={newWordForm.article || ""}
                    onChange={(e) => setNewWordForm({ ...newWordForm, article: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  >
                    <option value="">(Không có artikel)</option>
                    <option value="der">der (Giống đực)</option>
                    <option value="die">die (Giống cái)</option>
                    <option value="das">das (Giống trung)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Dạng số nhiều (Plural):</label>
                  <input
                    type="text"
                    value={newWordForm.plural || ""}
                    onChange={(e) => setNewWordForm({ ...newWordForm, plural: e.target.value })}
                    placeholder="VD: die Bewerbungen"
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Nghĩa tiếng Việt:</label>
                <input
                  type="text"
                  value={newWordForm.translation || ""}
                  onChange={(e) => setNewWordForm({ ...newWordForm, translation: e.target.value })}
                  placeholder="VD: thuyết phục"
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Câu ví dụ tiếng Đức:</label>
                <input
                  type="text"
                  value={newWordForm.example || ""}
                  onChange={(e) => setNewWordForm({ ...newWordForm, example: e.target.value })}
                  placeholder="VD: Er konnte den Chef von der Idee überzeugen."
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>
            </div>

            <div className="pt-3 border-t flex justify-end gap-2">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs">
                Hủy bỏ
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs hover:bg-slate-800"
              >
                Lưu từ vựng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
