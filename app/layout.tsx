import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Deutsch B1 - Die B1-Prüfungsvorbereitung Plattform",
  description: "Trainiere Deutsch zielgerichtet auf B1 Niveau. Lesen, Hören, Schreiben, Sprechen, Vokabeln mit Spaced Repetition und B1 Prüfungssimulation.",
};

import { getCurrentUser } from "@/lib/auth/session";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <html lang="de">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        <Navbar user={user} />
        <div className="lg:pl-64 flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
