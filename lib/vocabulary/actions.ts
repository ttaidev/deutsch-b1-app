"use server";

import { prisma } from "@/lib/db/prisma";
import { calculateSM2 } from "@/lib/spaced-repetition/sm2";
import { revalidatePath } from "next/cache";

const COVER_IMAGES: Record<string, string> = {
  "b1-pruefung-wortschatz": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop",
  "b1-gia-dinh-cac-moi-quan-he": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop",
  "b1-nha-o-sinh-hoat": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop",
  "b1-cong-viec-nghe-nghiep": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop",
  "b1-truong-hoc-hoc-tap": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop",
  "b1-mua-sam-tien-bac": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&auto=format&fit=crop",
  "b1-do-an-thuc-uong": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop",
  "b1-giao-thong-du-lich": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop",
  "b1-suc-khoe-benh-tat": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop",
  "b1-thanh-pho-dia-diem": "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&auto=format&fit=crop&q=80",
  "b1-thien-nhien-moi-truong": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop",
  "b1-cong-nghe-truyen-thong": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
  "b1-xa-hoi-chinh-tri-doi-song-cong-dong": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop",
  "b1-van-hoa-nghe-thuat-giai-tri": "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=600&auto=format&fit=crop",
  "b1-the-thao": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop",
  "b1-quan-ao-ngoai-hinh": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop",
  "b1-giao-tiep-y-kien": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop",
  "b1-cam-xuc-tinh-cach": "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop",
  "b1-thoi-tiet": "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&auto=format&fit=crop",
  "b1-do-vat-cong-viec-thuong-ngay": "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop",
  "b1-cac-van-de-quy-dinh-hanh-chinh": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop",
};

export async function getVocabularyDecks() {
  try {
    const user = await prisma.user.findFirst({
      where: { email: "gao@deutschb1.de" },
    });
    const userId = user?.id || "";

    const userVocabs = await prisma.userVocabulary.findMany({
      where: { userId },
    });
    const vocabStats = new Map();
    userVocabs.forEach((uv) => {
      vocabStats.set(uv.vocabularyId, uv);
    });

    const decks = await prisma.vocabularyDeck.findMany({
      include: {
        _count: {
          select: { deckWords: true },
        },
        deckWords: {
          select: { vocabularyId: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    const now = new Date();

    return decks
      .filter((d) => d._count.deckWords > 0)
      .map((d) => {
        let due = 0;
        let learned = 0;

        d.deckWords.forEach((dw) => {
          const uv = vocabStats.get(dw.vocabularyId);
          if (uv) {
            if (uv.status !== "New") learned++;
            if (new Date(uv.nextReview) <= now) due++;
          } else {
            // New word available to learn
            due++;
          }
        });

        // Cap due count to a reasonable daily max per deck
        due = Math.min(due, 20);

        return {
          id: d.id,
          slug: d.slug,
          title: d.title,
          description: d.description || "",
          wordCount: d._count.deckWords,
          dueCount: due,
          learnedCount: learned,
          isPublic: d.isPublic,
          coverImage: COVER_IMAGES[d.slug] || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop",
        };
      });
  } catch (err) {
    console.error("Error fetching vocabulary decks:", err);
    return [];
  }
}

export async function getVocabularyList(category?: string, search?: string, limit = 100) {
  try {
    const whereClause: any = {};
    if (category && category !== "Tất cả" && category !== "ALL") {
      const cleanCat = category.split("&")[0].trim().split(" ")[0].trim();
      whereClause.category = { contains: cleanCat };
    }

    if (search && search.trim()) {
      const q = search.trim();
      whereClause.OR = [
        { word: { contains: q } },
        { translation: { contains: q } },
        { example: { contains: q } },
      ];
    }

    const words = await prisma.vocabulary.findMany({
      where: whereClause,
      take: limit,
      orderBy: { word: "asc" },
    });

    return words;
  } catch (err) {
    console.error("Error fetching vocabulary:", err);
    return [];
  }
}

export async function getDeckWords(deckIdOrSlug: string, limit = 100) {
  try {
    const deck = await prisma.vocabularyDeck.findFirst({
      where: {
        OR: [{ id: deckIdOrSlug }, { slug: deckIdOrSlug }],
      },
      include: {
        deckWords: {
          include: {
            vocabulary: true,
          },
          take: limit,
        },
      },
    });

    if (deck && deck.deckWords.length > 0) {
      return deck.deckWords.map((dw) => dw.vocabulary);
    }

    // Fallback query directly from vocabulary table
    const words = await prisma.vocabulary.findMany({
      take: limit,
      orderBy: { word: "asc" },
    });
    return words;
  } catch (err) {
    console.error("Error fetching deck words:", err);
    return [];
  }
}

export async function updateUserWordStatus(vocabularyId: string, rating: "AGAIN" | "HARD" | "GOOD" | "EASY") {
  try {
    const user = await prisma.user.findFirst({
      where: { email: "gao@deutschb1.de" },
    });
    if (!user) return { success: false };

    const existing = await prisma.userVocabulary.findFirst({
      where: {
        userId: user.id,
        vocabularyId: vocabularyId,
      },
    });

    const currentState = {
      repetitions: existing?.repetitions || 0,
      interval: existing?.interval || 1,
      ease: existing?.ease || 2.5,
      status: (existing?.status || "Learning") as any,
    };

    const nextSM2 = calculateSM2(rating, currentState);

    await prisma.userVocabulary.upsert({
      where: {
        userId_vocabularyId: {
          userId: user.id,
          vocabularyId: vocabularyId,
        },
      },
      update: {
        repetitions: nextSM2.repetitions,
        interval: nextSM2.interval,
        ease: nextSM2.ease,
        status: nextSM2.status,
      },
      create: {
        userId: user.id,
        vocabularyId: vocabularyId,
        repetitions: nextSM2.repetitions,
        interval: nextSM2.interval,
        ease: nextSM2.ease,
        status: nextSM2.status,
    });

    await prisma.profile.update({
      where: { userId: user.id },
      data: { xp: { increment: 5 } },
    });

    revalidatePath("/");
    revalidatePath("/dashboard");
    revalidatePath("/vokabeln");
    revalidatePath(`/vokabeln/lernen/[slug]`, "page");

    return { success: true, nextSM2 };
  } catch (err) {
    console.error("Error updating word progress:", err);
    return { success: false };
  }
}

export async function getVocabularyStats() {
  try {
    const totalCount = await prisma.vocabulary.count();
    const decksCount = await prisma.vocabularyDeck.count();
    return { totalCount, decksCount };
  } catch (err) {
    return { totalCount: 3032, decksCount: 20 };
  }
}
