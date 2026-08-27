import { prisma } from "./prisma";

export async function getUserDashboardStats(userId: string) {
  // 1. Fetch total counts from DB (to calculate percentage)
  const [totalLesen, totalHoeren, totalSchreiben, totalSprechen, totalVocab] = await Promise.all([
    prisma.readingExercise.count(),
    prisma.listeningExercise.count(),
    prisma.writingTask.count(),
    prisma.speakingTask.count(),
    prisma.vocabulary.count(),
  ]);

  // Fallback to reasonable defaults if DB is empty to avoid division by zero
  const maxLesen = totalLesen || 30;
  const maxHoeren = totalHoeren || 30;
  const maxSchreiben = totalSchreiben || 30;
  const maxSprechen = totalSprechen || 20;
  
  // 2. Fetch user's completed exercises for Lesen & Hoeren from UserProgress
  const userProgress = await prisma.userProgress.findMany({
    where: { userId },
  });

  const completedLesen = userProgress.filter(p => p.skill === "LESEN").length;
  const completedHoeren = userProgress.filter(p => p.skill === "HOEREN").length;

  // 3. Fetch completed Writing & Speaking from their respective submission tables
  const completedSchreiben = await prisma.writingSubmission.count({
    where: { userId },
  });

  const completedSprechen = await prisma.speakingSession.count({
    where: { userId },
  });

  // 4. Fetch Vocabulary stats
  const vocabLearned = await prisma.userVocabulary.count({
    where: { userId, status: { in: ["Learning", "Review", "Known"] } },
  });

  const vocabToReviewToday = await prisma.userVocabulary.count({
    where: { 
      userId, 
      nextReview: { lte: new Date() } 
    },
  });

  // 5. Fetch Exam stats
  const examsCompleted = await prisma.examAttempt.count({
    where: { userId, completed: true },
  });

  // Helper to calculate percentage safely
  const calcPercent = (completed: number, total: number) => {
    if (total === 0) return 0;
    return Math.min(100, Math.round((completed / total) * 100));
  };

  const lesenProgress = calcPercent(completedLesen, maxLesen);
  const hoerenProgress = calcPercent(completedHoeren, maxHoeren);
  const schreibenProgress = calcPercent(completedSchreiben, maxSchreiben);
  const sprechenProgress = calcPercent(completedSprechen, maxSprechen);

  // Overall readiness based on the 4 skills average
  const overallReadiness = Math.round((lesenProgress + hoerenProgress + schreibenProgress + sprechenProgress) / 4);
  const totalCompletedExercises = completedLesen + completedHoeren + completedSchreiben + completedSprechen;

  // Recent scores (we could fetch the latest score, but for now we'll just format it if > 0)
  // Or we can just calculate an average score from UserProgress
  const getRecentScore = (skillItems: any[]) => {
    if (skillItems.length === 0) return "--";
    const lastItem = skillItems.sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())[0];
    return lastItem.score !== undefined && lastItem.maxScore ? `${Math.round((lastItem.score / lastItem.maxScore) * 100)}%` : "--";
  };

  const lesenRecentScore = getRecentScore(userProgress.filter(p => p.skill === "LESEN"));
  const hoerenRecentScore = getRecentScore(userProgress.filter(p => p.skill === "HOEREN"));
  // For writing and speaking, it's out of a certain number of points. Let's just return "--" unless we join to get scores.

  return {
    skills: {
      lesen: {
        progress: lesenProgress,
        completed: completedLesen,
        recentScore: lesenRecentScore,
      },
      hoeren: {
        progress: hoerenProgress,
        completed: completedHoeren,
        recentScore: hoerenRecentScore,
      },
      schreiben: {
        progress: schreibenProgress,
        completed: completedSchreiben,
        recentScore: "--", 
      },
      sprechen: {
        progress: sprechenProgress,
        completed: completedSprechen,
        recentScore: "--",
      },
    },
    overview: {
      totalCompletedExercises,
      vocabLearned,
      examsCompleted,
      vocabToReviewToday,
      overallReadiness,
    }
  };
}
