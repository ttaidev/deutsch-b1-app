import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

// Define the exact 20 user-requested topics
const TOPIC_DEFINITIONS = [
  {
    slug: "b1-gia-dinh-cac-moi-quan-he",
    title: "Gia đình & các mối quan hệ",
    description: "Từ vựng về thành viên gia đình, bạn bè, hôn nhân & mối quan hệ cá nhân",
  },
  {
    slug: "b1-nha-o-sinh-hoat",
    title: "Nhà ở & sinh hoạt",
    description: "Từ vựng về căn hộ, phòng khách, bếp, đồ nội thất & thuê nhà",
  },
  {
    slug: "b1-cong-viec-nghe-nghiep",
    title: "Công việc & nghề nghiệp",
    description: "Từ vựng về xin việc, công sở, sếp, đồng nghiệp, lương & hợp đồng",
  },
  {
    slug: "b1-truong-hoc-hoc-tap",
    title: "Trường học & học tập",
    description: "Từ vựng về trường đại học, khóa học, thi cử, bài tập & điểm số",
  },
  {
    slug: "b1-mua-sam-tien-bac",
    title: "Mua sắm & tiền bạc",
    description: "Từ vựng về siêu thị, giá cả, thanh toán, tiền tệ & tài khoản ngân hàng",
  },
  {
    slug: "b1-do-an-thuc-uong",
    title: "Đồ ăn & thức uống",
    description: "Từ vựng về thực phẩm, đồ uống, nhà hàng, nấu ăn & bữa ăn",
  },
  {
    slug: "b1-giao-thong-du-lich",
    title: "Giao thông & du lịch",
    description: "Từ vựng về xe cộ, vé tàu, sân bay, khách sạn & chuyến đi",
  },
  {
    slug: "b1-suc-khoe-benh-tat",
    title: "Sức khỏe & bệnh tật",
    description: "Từ vựng về bác sĩ, bệnh viện, thuốc, triệu chứng & cấp cứu",
  },
  {
    slug: "b1-thanh-pho-dia-diem",
    title: "Thành phố & địa điểm",
    description: "Từ vựng về phố xá, địa điểm công cộng, bưu điện, bảo tàng & chỉ đường",
  },
  {
    slug: "b1-thien-nhien-moi-truong",
    title: "Thiên nhiên & môi trường",
    description: "Từ vựng về cây cối, động vật, sông núi & bảo vệ môi trường",
  },
  {
    slug: "b1-cong-nghe-truyen-thong",
    title: "Công nghệ & truyền thông",
    description: "Từ vựng về máy tính, internet, điện thoại, email & mạng xã hội",
  },
  {
    slug: "b1-xa-hoi-chinh-tri-doi-song-cong-dong",
    title: "Xã hội, chính trị & đời sống cộng đồng",
    description: "Từ vựng về chính trị, luật pháp, hội đoàn, người dân & cộng đồng",
  },
  {
    slug: "b1-van-hoa-nghe-thuat-giai-tri",
    title: "Văn hóa, nghệ thuật & giải trí",
    description: "Từ vựng về âm nhạc, phim ảnh, rạp hát, lễ hội & sở thích",
  },
  {
    slug: "b1-the-thao",
    title: "Thể thao",
    description: "Từ vựng về bóng đá, bơi lội, gym, chạy bộ & tập luyện",
  },
  {
    slug: "b1-quan-ao-ngoai-hinh",
    title: "Quần áo & ngoại hình",
    description: "Từ vựng về trang phục, thời trang, chiều cao, màu sắc & ngoại hình",
  },
  {
    slug: "b1-giao-tiep-y-kien",
    title: "Giao tiếp & ý kiến",
    description: "Từ vựng về thảo luận, đưa ý kiến, giải thích, tranh luận & giao tiếp",
  },
  {
    slug: "b1-cam-xuc-tinh-cach",
    title: "Cảm xúc & tính cách",
    description: "Từ vựng về niềm vui, nỗi buồn, sự tức giận, lòng tốt & tính cách",
  },
  {
    slug: "b1-thoi-tiet",
    title: "Thời tiết",
    description: "Từ vựng về mưa, nắng, tuyết, gió, nhiệt độ & thời tiết",
  },
  {
    slug: "b1-do-vat-cong-viec-thuong-ngay",
    title: "Đồ vật & công việc thường ngày",
    description: "Từ vựng về vật dụng cá nhân, đồng hồ, túi xách, dọn dẹp & việc nhà",
  },
  {
    slug: "b1-cac-van-de-quy-dinh-hanh-chinh",
    title: "Các vấn đề, quy định & hành chính",
    description: "Từ vựng về thủ tục giấy tờ, cơ quan công quyền, visa, cảnh sát & quy định",
  },
];

function findPrimaryTopicSlug(word: string, translation: string, category: string): string {
  const text = `${word} ${translation}`.toLowerCase();

  const match = (keywords: string[]) => {
    const sorted = [...keywords].sort((a, b) => b.length - a.length);
    const pattern = sorted.join("|");
    const regex = new RegExp(`(^|\\s|[.,?!\(\)"'-])(${pattern})(?=$|\\s|[.,?!\(\)"'-])`, "i");
    return regex.test(text);
  };

  if (match(["familie", "vater", "mutter", "kind", "kinder", "frau", "mann", "partner", "freund", "ehe", "heirat", "sohn", "tochter", "bruder", "schwester", "eltern", "oma", "opa", "tante", "onkel", "bạn", "gia đình", "bố", "mẹ", "con", "vợ", "chồng", "anh", "chị", "em", "kết hôn", "hôn nhân"])) {
    return "b1-gia-dinh-cac-moi-quan-he";
  }
  if (match(["wohnen", "wohnung", "haus", "zimmer", "miete", "möbel", "küche", "bad", "tisch", "stuhl", "bett", "umzug", "balkon", "garage", "garten", "nhà", "căn hộ", "thuê nhà", "phòng", "bếp", "bàn", "ghế", "giường", "chìa khóa", "địa chỉ", "chỗ ở"])) {
    return "b1-nha-o-sinh-hoat";
  }
  if (match(["arbeit", "beruf", "stelle", "bewerbung", "firma", "chef", "gehalt", "kollege", "vertrag", "kündigen", "büro", "job", "arbeiten", "verdienen", "karriere", "lohn", "công việc", "nghề", "xin việc", "công ty", "sếp", "lương", "văn phòng", "hợp đồng", "đồng nghiệp", "làm việc"])) {
    return "b1-cong-viec-nghe-nghiep";
  }
  if (match(["schule", "studium", "universität", "kurs", "lehrer", "schüler", "prüfung", "note", "lernen", "verstehen", "unterricht", "hausaufgabe", "zertifikat", "klausur", "trường", "học", "bài thi", "giáo viên", "học sinh", "khóa học", "chứng chỉ", "đại học", "sinh viên", "điểm"])) {
    return "b1-truong-hoc-hoc-tap";
  }
  if (match(["einkaufen", "geschäft", "laden", "supermarkt", "geld", "preis", "billig", "teuer", "bezahlen", "angebot", "rabatt", "karte", "euro", "bank", "konto", "kaufen", "verkaufen", "mua", "bán", "tiền", "giá", "rẻ", "đắt", "thanh toán", "ngân hàng", "siêu thị", "cửa hàng"])) {
    return "b1-mua-sam-tien-bac";
  }
  if (match(["essen", "trinken", "brot", "wasser", "kaffee", "tee", "milch", "restaurant", "rezept", "kochen", "schmecken", "obst", "gemüse", "fleisch", "fisch", "frühstück", "mittagessen", "abendessen", "kuchen", "ăn", "uống", "cà phê", "trà", "bánh", "cơm", "thịt", "cá", "rau", "nấu ăn", "nhà hàng", "thực phẩm"])) {
    return "b1-do-an-thuc-uong";
  }
  if (match(["reisen", "verkehr", "auto", "zug", "bus", "bahnhof", "flughafen", "ticket", "fahrkarte", "flug", "reise", "hotel", "urlaub", "koffer", "fahren", "fliegen", "bahn", "du lịch", "giao thông", "xe", "tàu", "máy bay", "sân bay", "khách sạn", "vé", "kỳ nghỉ", "lái xe"])) {
    return "b1-giao-thong-du-lich";
  }
  if (match(["gesundheit", "arzt", "krankenhaus", "medikament", "tablette", "schmerz", "krank", "wehtun", "fieber", "grippe", "apotheke", "untersuchung", "notarzt", "sức khỏe", "bác sĩ", "bệnh viện", "thuốc", "đau", "sốt", "ốm", "tiệm thuốc", "khám bệnh"])) {
    return "b1-suc-khoe-benh-tat";
  }
  if (match(["stadt", "platz", "straße", "gebäude", "museum", "park", "post", "kino", "bibliothek", "ort", "adresse", "zentrum", "brücke", "weg", "thành phố", "đường", "công viên", "bưu điện", "bảo tàng", "địa điểm", "trung tâm", "địa chỉ", "cầu"])) {
    return "b1-thanh-pho-dia-diem";
  }
  if (match(["umwelt", "natur", "baum", "wald", "tier", "hund", "katze", "berg", "fluss", "see", "meer", "pflanze", "müll", "recycling", "erde", "sonne", "mond", "môi trường", "thiên nhiên", "cây", "rừng", "động vật", "chó", "mèo", "biển", "rác", "sông", "núi"])) {
    return "b1-thien-nhien-moi-truong";
  }
  if (match(["medien", "technik", "computer", "internet", "handy", "telefon", "email", "app", "website", "fernsehen", "radio", "zeitung", "nachricht", "drucken", "online", "công nghệ", "máy tính", "điện thoại", "báo", "tin tức", "mạng", "phần mềm", "in ấn"])) {
    return "b1-cong-nghe-truyen-thong";
  }
  if (match(["gesellschaft", "politik", "staat", "gesetz", "bürger", "verein", "kultur", "nachbar", "regel", "rechte", "ausländer", "integration", "helfen", "xã hội", "chính trị", "luật", "cộng đồng", "hội", "hàng xóm", "văn hóa", "công dân", "quy tắc", "giúp đỡ"])) {
    return "b1-xa-hoi-chinh-tri-doi-song-cong-dong";
  }
  if (match(["kunst", "musik", "film", "kino", "theater", "konzert", "spiel", "freizeit", "hobby", "tanzen", "singen", "feier", "fest", "party", "văn hóa", "nghệ thuật", "âm nhạc", "phim", "kịch", "lễ hội", "giải trí", "hát", "múa", "sở thích", "trò chơi"])) {
    return "b1-van-hoa-nghe-thuat-giai-tri";
  }
  if (match(["sport", "fußball", "schwimmen", "laufen", "training", "mannschaft", "fitness", "gewinnen", "ball", "fahrrad", "wandern", "thể thao", "bóng đá", "bơi", "chạy", "tập luyện", "xe đạp", "leo núi", "đội", "thắng"])) {
    return "b1-the-thao";
  }
  if (match(["kleidung", "hose", "hemd", "kleid", "schuhe", "jacke", "anzug", "größe", "farbe", "aussehen", "schön", "groß", "klein", "haare", "brille", "quần áo", "quần", "áo", "giày", "váy", "ngoại hình", "đẹp", "tóc", "kính", "màu sắc", "kích cỡ"])) {
    return "b1-quan-ao-ngoai-hinh";
  }
  if (match(["wetter", "regen", "schnee", "wind", "kalt", "warm", "heiß", "wolke", "sonne", "sturm", "thời tiết", "mưa", "nắng", "lạnh", "nóng", "tuyết", "gió", "mây", "bão"])) {
    return "b1-thoi-tiet";
  }
  if (match(["gefühl", "freuen", "glück", "traurig", "angst", "wütend", "nett", "freundlich", "liebe", "böse", "cảm xúc", "tính cách", "vui", "buồn", "sợ", "tức", "thân thiện", "yêu", "giận"])) {
    return "b1-cam-xuc-tinh-cach";
  }
  if (match(["meinung", "glauben", "vorschlagen", "diskussion", "sagen", "fragen", "antworten", "stimmen", "idee", "nói", "hỏi", "trả lời", "ý kiến", "giao tiếp", "thảo luận", "đề nghị", "tin rằng", "đồng ý"])) {
    return "b1-giao-tiep-y-kien";
  }
  if (match(["behörde", "pass", "ausweis", "formular", "polizei", "versicherung", "amt", "dokument", "visum", "hành chính", "hộ chiếu", "quy định", "giấy tờ", "biểu mẫu", "cảnh sát", "bảo hiểm", "cơ quan", "visa"])) {
    return "b1-cac-van-de-quy-dinh-hanh-chinh";
  }

  return "b1-do-vat-cong-viec-thuong-ngay";
}

async function main() {
  console.log("🌱 Cleaning duplicate decks and strictly categorizing 3,032 B1 words...");

  // Seed Demo User Gạo & Profile
  const user = await prisma.user.upsert({
    where: { email: "gao@deutschb1.de" },
    update: { name: "Gạo" },
    create: {
      email: "gao@deutschb1.de",
      passwordHash: "$2a$10$e8N8g9u9...demo_hash",
      name: "Gạo",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      role: "USER",
      profile: {
        create: {
          currentLevel: "B1",
          xp: 1450,
          streak: 7,
        },
      },
    },
  });

  // Clear existing deck relations and decks completely to avoid duplicate decks
  await prisma.deckWord.deleteMany({});
  await prisma.vocabularyDeck.deleteMany({});

  // 1. Create Master Deck (All 3,032 words)
  const masterDeck = await prisma.vocabularyDeck.create({
    data: {
      slug: "b1-pruefung-wortschatz",
      title: "Bộ từ vựng B1 Gesamt (Toàn bộ 3,032 từ B1)",
      description: "Tập hợp tất cả 3,032 từ vựng Goethe B1 Wortliste đầy đủ nghĩa tiếng Việt",
      isPublic: true,
      userId: user.id,
    },
  });

  // 2. Create the 20 specific topic decks
  const createdDecksMap: Record<string, string> = {};

  for (const topicDef of TOPIC_DEFINITIONS) {
    const d = await prisma.vocabularyDeck.create({
      data: {
        slug: topicDef.slug,
        title: topicDef.title,
        description: topicDef.description,
        isPublic: true,
        userId: user.id,
      },
    });
    createdDecksMap[topicDef.slug] = d.id;
  }

  // Read data/vocabulary_vi.json
  const jsonPath = path.join(__dirname, "../data/vocabulary_vi.json");
  if (fs.existsSync(jsonPath)) {
    const rawData = fs.readFileSync(jsonPath, "utf-8");
    const vocabList: any[] = JSON.parse(rawData);
    console.log(`📦 Loaded ${vocabList.length} words from vocabulary_vi.json`);

    let insertedCount = 0;
    for (const item of vocabList) {
      if (!item.word) continue;

      const cleanWord = item.word.trim();
      const primarySlug = findPrimaryTopicSlug(cleanWord, item.translation || "", item.category || "");
      const matchedTopicTitle = TOPIC_DEFINITIONS.find((t) => t.slug === primarySlug)?.title || "Đồ vật & công việc thường ngày";

      try {
        const vocabRecord = await prisma.vocabulary.upsert({
          where: { word: cleanWord },
          update: {
            article: item.article || null,
            plural: item.plural || null,
            translation: item.translation || "",
            wordType: item.wordType || null,
            example: item.example || null,
            category: matchedTopicTitle,
            level: "B1",
          },
          create: {
            word: cleanWord,
            article: item.article || null,
            plural: item.plural || null,
            translation: item.translation || "",
            wordType: item.wordType || null,
            example: item.example || null,
            category: matchedTopicTitle,
            level: "B1",
          },
        });

        // 1. Link to master deck (Contains all 3,032 words)
        await prisma.deckWord.create({
          data: {
            deckId: masterDeck.id,
            vocabularyId: vocabRecord.id,
          },
        });

        // 2. Link to EXACTLY 1 primary topic deck
        const topicDeckId = createdDecksMap[primarySlug];
        if (topicDeckId) {
          await prisma.deckWord.create({
            data: {
              deckId: topicDeckId,
              vocabularyId: vocabRecord.id,
            },
          });
        }

        // 3. Link to Gạo's user vocabulary list
        await prisma.userVocabulary.upsert({
          where: {
            userId_vocabularyId: {
              userId: user.id,
              vocabularyId: vocabRecord.id,
            },
          },
          update: {},
          create: {
            userId: user.id,
            vocabularyId: vocabRecord.id,
            status: "Learning",
            ease: 2.5,
            interval: 1,
            repetitions: 1,
          },
        });

        insertedCount++;
      } catch (err) {
        // Skip duplicates safely
      }
    }
    console.log(`✅ Successfully partitioned ${insertedCount} words into distinct topic decks!`);
  }

  // Delete any empty decks if any exist
  const deletedEmpty = await prisma.vocabularyDeck.deleteMany({
    where: {
      deckWords: {
        none: {},
      },
    },
  });
  if (deletedEmpty.count > 0) {
    console.log(`🗑️ Removed ${deletedEmpty.count} empty decks.`);
  }

  console.log("✅ De-duplication and strict partitioning complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
