import { prisma } from "@/lib/db/prisma";

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  currentLevel: string;
  xp: number;
  streak: number;
}

export async function getCurrentUser(): Promise<DemoUser> {
  try {
    const user = await prisma.user.findFirst({
      include: {
        profile: true,
      },
    });

    if (user && user.profile) {
      return {
        id: user.id,
        name: "Gạoo",
        email: user.email,
        avatar: "https://i.pinimg.com/736x/e4/e9/42/e4e942729798f81701b9df9b89ff8dad.jpg",
        role: user.role,
        currentLevel: user.profile.currentLevel,
        xp: user.profile.xp,
        streak: user.profile.streak,
      };
    }
  } catch (err) {
    console.warn("Database lookup in getCurrentUser fallback:", err);
  }

  // Fallback demo user if DB is loading/seeding
  return {
    id: "gao-user-id",
    name: "Gạoo",
    email: "gao@deutschb1.de",
    avatar: "https://i.pinimg.com/736x/e4/e9/42/e4e942729798f81701b9df9b89ff8dad.jpg",
    role: "USER",
    currentLevel: "B1",
    xp: 0,
    streak: 0,
  };
}
