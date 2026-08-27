import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { getCurrentUser } from "@/lib/auth/session";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Since session.ts uses a hardcoded fallback if db fails, check if we need to use a real ID
    let dbUser = await prisma.user.findUnique({ where: { email: user.email } });
    
    if (!dbUser) {
       // If using the fallback demo user, find the first user in DB to attach progress to, or return 400
       dbUser = await prisma.user.findFirst();
       if (!dbUser) {
         return NextResponse.json({ error: "No users in DB" }, { status: 400 });
       }
    }

    const body = await req.json();
    const { skill, exerciseId, score, maxScore } = body;

    if (!skill || !exerciseId || score === undefined || maxScore === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to UserProgress
    const progress = await prisma.userProgress.create({
      data: {
        userId: dbUser.id,
        skill: skill,
        exerciseId: exerciseId.toString(),
        score: parseInt(score.toString()),
        maxScore: parseInt(maxScore.toString()),
      },
    });

    // Award XP
    const profile = await prisma.profile.findUnique({
      where: { userId: dbUser.id },
    });

    if (profile) {
      const xpGained = Math.round((score / maxScore) * 50); // Up to 50 XP per exercise
      
      await prisma.profile.update({
        where: { userId: dbUser.id },
        data: {
          xp: profile.xp + xpGained,
          lastActive: new Date(),
        }
      });
    }

    return NextResponse.json({ success: true, progress });
  } catch (error) {
    console.error("Failed to save progress:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
