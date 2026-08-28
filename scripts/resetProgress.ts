import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Resetting all users progress...");

  // Delete all progress tracking records
  await prisma.userProgress.deleteMany({});
  await prisma.writingSubmission.deleteMany({});
  await prisma.speakingSession.deleteMany({});
  
  // Delete all exam records
  await prisma.userAnswer.deleteMany({});
  await prisma.examAttempt.deleteMany({});
  
  // Delete all vocabulary progress
  await prisma.userVocabulary.deleteMany({});
  
  // Reset all profile stats
  await prisma.profile.updateMany({
    data: {
      xp: 0,
      streak: 1,
      currentLevel: "B1",
    },
  });

  console.log("Progress has been successfully reset to 0 for all users!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
