# 🇩🇪 Deutsch B1 - German Learning Platform

> A production-ready, commercial-grade German B1 Exam Preparation platform built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Prisma ORM**, and **Supabase / PostgreSQL**.


---

## ✨ Features Overview

### 1. 🎓 4 Core Skill Training Modules
- **Lesen (Reading)**: B1 reading passages with interactive word clicking. Click any German word in the passage to view its article, plural form, translation, and add it directly to custom vocabulary decks.
- **Hören (Listening)**: Professional audio player with speed controls (0.75x, 1x, 1.25x), scrub bar, toggleable hidden transcript, and interactive **Dictation Mode**.
- **Schreiben (Writing)**: Writing editor with real-time word counter, criteria checklist, and **AI Educational Feedback** across 5 categories (*Aufgabe, Grammatik, Wortschatz, Struktur, Verständlichkeit*).
- **Sprechen (Speaking)**: Web Audio & Speech-to-Text recorder with preparation/recording countdown timers and grammar correction breakdown.

### 2. 🎴 Spaced Repetition (SM-2) Vocabulary System
- **SuperMemo SM-2 Engine**: Calculates optimal review intervals based on user ratings (*Again, Hard, Good, Easy*).
- **Multimodal Practice**: Flashcards, Multiple Choice (DE ↔ VN), Lückentext, Listening, and Speaking pronunciation check.
- **"Mit KI ergänzen"**: Auto-completion for vocabulary articles, plurals, translations, and example sentences.
- **Import / Export**: CSV, TXT, JSON, and Anki compatibility.

### 3. 📚 Grammar & B1 Mock Exam Simulator
- **Grammatik**: 10 core B1 grammar units with explanations, example sentences, and interactive quizzes.
- **B1 Mock Exam**: Full timed 4-module simulation (Lesen, Hören, Schreiben, Sprechen) with question navigation and detailed scorecard report.

### 4. 🤖 AI Tutor & Admin CMS
- **AI Tutor**: Real-time German conversation partner with "Nur Deutsch" vs "Deutsch + Erklärung" mode toggles and inline grammar correction.
- **Admin CMS**: Control center for managing database exercises, audio files, vocabulary, and user analytics.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router, Server Actions, Route Handlers)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS, CSS variables, Framer Motion
- **Database**: Prisma ORM with SQLite (local) / PostgreSQL (Supabase)
- **Audio & Speech**: Web Audio API, Web Speech API (TTS & Speech Recognition)

---

## 🚀 Local Quick Start

### 1. Clone & Install Dependencies

```bash
cd d:/learn-deusch
npm install
```

### 2. Configure Environment Variables

Create `.env` file (copied from `.env.example`):

```env
DATABASE_URL="file:./dev.db"
DIRECT_URL="file:./dev.db"
NEXT_PUBLIC_SUPABASE_URL="https://your-supabase-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
AI_API_KEY="your-ai-api-key"
```

### 3. Initialize & Seed Database

```bash
npm run db:push
npm run db:seed
```

### 4. Start Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel & Supabase

### 1. Set Up Supabase Database

1. Create a project at [Supabase.com](https://supabase.com).
2. Get your Connection String from `Project Settings -> Database -> Connection String (URI)`.
3. In `prisma/schema.prisma`, update the datasource provider to `postgresql`:

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

### 2. Run Database Migrations for Production

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 3. Deploy to Vercel

1. Push code to GitHub.
2. Import project in Vercel.
3. Configure Environment Variables in Vercel Project Settings:

| Key | Description |
| --- | --- |
| `DATABASE_URL` | Supabase Transaction Pooler URL (Port 6543) |
| `DIRECT_URL` | Supabase Direct Connection URL (Port 5432) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Public URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Public Anon Key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Service Role Key |
| `AI_API_KEY` | Optional Gemini / OpenAI API key |

4. Click **Deploy**. Vercel will automatically run `npm run build` (`prisma generate && next build`).

---

## 📄 License & Quality Standard

Created for commercial-grade German B1 preparation. All educational content is aligned with CEFR B1 standards.
