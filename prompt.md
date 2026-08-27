# BUILD A COMPLETE GERMAN B1 LEARNING PLATFORM

You are a senior full-stack engineer, UI/UX designer, and product architect.

Build a production-ready German learning platform focused on **B1 exam preparation**, with a premium modern EdTech interface.

The application must be fully responsive, fast, accessible, scalable, and deployable to **Vercel**.

Do NOT create a simple landing page or static demo. Build a real application architecture with authentication, database, user progress, exercises, vocabulary management, admin CMS, and extensible APIs.

---

# 1. TECHNOLOGY STACK

Use:

* Next.js with App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Supabase

  * PostgreSQL
  * Authentication
  * Storage
* Prisma ORM if appropriate for the architecture
* React Hook Form
* Zod
* Server Actions / Route Handlers
* Vercel deployment

Keep all secrets in environment variables.

Never expose private API keys or service-role keys to the client.

---

# 2. PRODUCT CONCEPT

The product is a German learning platform called:

"Deutsch B1"

The platform helps students prepare for German B1 through:

* Lesen
* Hören
* Schreiben
* Sprechen
* Wortschatz
* Grammatik
* Prüfungssimulation
* Personal learning progress
* AI-powered feedback

The experience should feel like a combination of:

* modern EdTech
* premium SaaS dashboard
* language-learning platform

Do NOT make it look childish or like a direct Duolingo clone.

---

# 3. VISUAL DESIGN

Use a clean, premium German-inspired design.

Style:

* modern
* minimal
* sophisticated
* academic
* slightly editorial
* high-quality SaaS UI

Use:

* off-white / light neutral background
* deep navy as primary color
* subtle German red accent
* white cards
* soft borders
* subtle shadows
* large typography
* generous spacing
* rounded corners

Avoid:

* excessive gradients
* excessive neon
* childish cartoon graphics
* excessive colors
* cluttered layouts

Typography:

* Geist / Inter
* strong hierarchy
* excellent readability

Use Framer Motion for subtle animations:

* page transitions
* card entrance
* progress animations
* hover states
* modal transitions
* number counters
* exercise transitions

Animations must never hurt performance.

---

# 4. LANDING PAGE

Create a premium landing page.

Sections:

## Hero

Headline:

"Deutsch lernen. B1 meistern."

Subheading:

"Trainiere Deutsch mit einem System, das dich gezielt auf die B1-Prüfung vorbereitet."

Buttons:

"Jetzt lernen"

"Prüfung starten"

Show an animated preview of the learning dashboard.

Include visual cards for:

* Lesen
* Hören
* Schreiben
* Sprechen

---

## 4 Skills Section

Show the four core skills:

### Lesen

Verstehe deutsche Texte sicher.

### Hören

Trainiere dein Hörverständnis.

### Schreiben

Schreibe klar und korrekt.

### Sprechen

Sprich sicher und natürlich.

Each card should have its own icon, progress indicator, and hover animation.

---

## Learning System

Explain:

1. Lernen
2. Üben
3. Wiederholen
4. Prüfen
5. Fortschritt verbessern

---

## Vocabulary Section

Show:

* personal vocabulary
* custom word lists
* flashcards
* spaced repetition
* AI-generated vocabulary information

---

## Mock Exam Section

Show a realistic B1 exam interface preview.

---

## Final CTA

"Bereit für B1?"

Button:

"Jetzt anfangen"

---

# 5. AUTHENTICATION

Implement:

* Register
* Login
* Logout
* Password reset
* Google authentication if supported

After registration create a user profile.

User profile fields:

* id
* name
* avatar
* current level
* XP
* streak
* createdAt

Protect dashboard and learning routes.

---

# 6. DASHBOARD

Create:

/dashboard

The dashboard is the central area of the application.

Display:

"Hallo, [Name] 👋"

Overall progress:

"Dein B1-Fortschritt"

Show:

* overall percentage
* XP
* current streak
* exercises completed
* vocabulary learned
* exam attempts

Four skill cards:

Lesen
Hören
Schreiben
Sprechen

Each card displays:

* percentage
* completed exercises
* recent score
* continue button

---

# 7. PERSONALIZED RECOMMENDATIONS

Analyze user progress.

Detect weak areas.

Example:

"Deine Schwächen"

1. Konjunktiv II
2. Hören – Teil 2
3. Relativsätze
4. Wortschatz – Arbeit

Then generate:

"Empfohlen für dich"

Examples:

* Wiederhole 15 Wörter
* Übe Relativsätze
* Starte Hören Teil 2
* Schreibe eine B1 Aufgabe

Recommendations should be based on actual user data.

---

# 8. LESEN MODULE

Route:

/lernen/lesen

Support:

* A1
* A2
* B1

Focus primarily on B1.

Exercise types:

* Multiple Choice
* Richtig / Falsch
* Matching
* Überschriften zuordnen
* Text questions
* Gap filling

Exercise screen:

Display:

* title
* instructions
* reading text
* question
* answers
* progress
* timer when applicable

After submission:

Show:

* correct / incorrect
* correct answer
* explanation
* vocabulary from the text
* grammar notes when useful

Allow users to click words and save them to personal vocabulary.

---

# 9. HÖREN MODULE

Route:

/lernen/hoeren

Build a professional audio player.

Features:

* play / pause
* progress bar
* volume
* replay
* playback speed
* audio duration

Exercise types:

* Multiple Choice
* Richtig / Falsch
* Matching
* Listening comprehension
* Dictation

Transcript must be hidden by default.

Allow:

"Transcript anzeigen"

Dictation mode:

Play an audio sentence.

User types what they heard.

Compare the answer and highlight differences.

---

# 10. SCHREIBEN MODULE

Route:

/lernen/schreiben

Create B1 writing tasks.

Example:

User receives a realistic prompt.

Display:

* task description
* required points
* minimum word count
* writing editor
* word counter
* submit button

After submission:

Perform automatic checks:

* word count
* sentence structure
* punctuation
* grammar patterns
* vocabulary

If AI integration is configured, generate learning feedback.

Display:

Aufgabe
Grammatik
Wortschatz
Struktur
Verständlichkeit

Show corrections clearly.

Important:

AI feedback is educational guidance, not an official exam score.

Allow users to save previous writing submissions.

---

# 11. SPRECHEN MODULE

Route:

/lernen/sprechen

Use browser microphone APIs.

Create speaking exercises.

Example:

"Erzählen Sie über Ihre Freizeit."

Display:

* topic
* instructions
* preparation timer
* recording timer
* microphone button

Flow:

Prepare
→ Record
→ Stop
→ Transcript
→ Feedback

If speech-to-text / AI APIs are configured:

Analyze:

* fluency
* grammar
* vocabulary
* pronunciation when supported
* sentence structure

Show transcript.

Highlight mistakes.

Example:

User:

"Ich denke dass Sport ist wichtig."

Correction:

"Ich denke, dass Sport wichtig ist."

Again, clearly label this as practice feedback, not official exam scoring.

---

# 12. VOCABULARY SYSTEM

This is a CORE feature.

Create:

/vokabeln

The vocabulary system must support:

* global vocabulary
* personal vocabulary
* custom word lists
* flashcards
* spaced repetition
* search
* filtering
* categories
* levels
* favorites
* difficult words
* import
* export

---

# 13. GLOBAL VOCABULARY

Create categories:

* Alltag
* Arbeit & Beruf
* Schule
* Reisen
* Gesundheit
* Wohnen
* Umwelt
* Medien
* Beziehungen
* Essen
* Verkehr
* Prüfung B1

Vocabulary card example:

"die Bewerbung"

Plural:

"die Bewerbungen"

Translation:

"đơn xin việc"

Example:

"Ich habe eine Bewerbung an die Firma geschickt."

Show:

* article
* plural
* word type
* translation
* example
* pronunciation
* CEFR level

---

# 14. CUSTOM VOCABULARY LISTS

Users must be able to create their own vocabulary collections.

Button:

"+ Neue Wortliste"

Fields:

* name
* description
* visibility

Examples:

"Deutsch für meine Prüfung"

"Meine schwierigen Wörter"

"Deutsch für Arbeit"

After creation:

Show:

* number of words
* learning progress
* learned words
* words to review
* start learning button

---

# 15. ADD CUSTOM WORD

Users can manually add words.

Fields:

* German word
* translation
* article
* plural
* word type
* example
* category
* level
* notes

Allow optional AI auto-completion.

If user enters:

"überzeugen"

and clicks:

"Mit KI ergänzen"

AI can generate:

* translation
* word type
* article when applicable
* plural when applicable
* example sentences
* related words
* CEFR estimate

The user must be able to edit everything before saving.

---

# 16. SAVE WORDS FROM ANYWHERE

Any vocabulary item appearing in:

* Lesen
* Hören
* Schreiben
* Grammatik
* AI Tutor

should be clickable.

Example:

"Ich habe eine Bewerbung geschrieben."

Click "Bewerbung".

Open a small vocabulary popup.

Button:

"Zu meiner Liste hinzufügen"

Allow selecting a custom deck.

---

# 17. SPACED REPETITION

Implement a real spaced repetition system.

Each user vocabulary item should track:

* status
* ease
* interval
* repetitions
* correctCount
* wrongCount
* lastReviewed
* nextReview

States:

* New
* Learning
* Review
* Known

Learning buttons:

"Again"

"Hard"

"Good"

"Easy"

Schedule future reviews based on performance.

Do not simply randomize cards.

---

# 18. VOCABULARY PRACTICE MODES

Each vocabulary deck should support:

### Flashcards

German word → reveal meaning.

### Multiple Choice

Choose the correct meaning.

### German → Vietnamese

Translate the word.

### Vietnamese → German

Recall the German word.

### Fill in the blank

Complete a sentence.

### Listening

Listen and select the word.

### Speaking

Read the word aloud.

Track performance for every mode.

---

# 19. VOCABULARY DASHBOARD

Show:

"Meine Wörter"

Example:

2,481 Wörter

Stats:

* sicher
* lernen
* wiederholen

Show:

"Heute wiederholen"

Example:

"12 Wörter warten auf dich."

Button:

"Jetzt lernen"

---

# 20. IMPORT / EXPORT

Allow users to import vocabulary from:

* CSV
* TXT
* JSON

If possible support Anki-compatible imports.

CSV format:

word,translation,example

Also allow export to:

* CSV
* JSON

Validate imported data before inserting into the database.

---

# 21. SHARED VOCABULARY DECKS

Users can optionally make vocabulary decks public.

Example:

"B1 Arbeit"

120 Wörter

"Öffentlich"

Allow:

"Zu meinen Wörtern hinzufügen"

Generate shareable routes:

/decks/[slug]

Private decks must remain inaccessible to other users.

---

# 22. GRAMMAR MODULE

Route:

/grammatik

Categories:

* Perfekt
* Präteritum
* Nebensätze
* Relativsätze
* Konjunktiv II
* Passiv
* Präpositionen
* Dativ / Akkusativ
* Wortstellung
* Modalverben

Each grammar lesson:

Explanation
→ Examples
→ Mini Quiz
→ Practice
→ Review

Track progress.

---

# 23. MOCK EXAM

Route:

/pruefung

Create a realistic B1 simulation.

Sections:

1. Lesen
2. Hören
3. Schreiben
4. Sprechen

Features:

* timer
* progress
* autosave
* question navigation
* submit
* results
* review

Results:

"DEIN ERGEBNIS"

Lesen 82%

Hören 74%

Schreiben 68%

Sprechen 71%

Overall 74%

Show strengths and weaknesses.

Never claim that the result is an official Goethe/telc result unless the scoring system actually matches the specific exam being simulated.

---

# 24. AI TUTOR

Create:

/ki-tutor

The user can practice German conversation.

The AI should:

* communicate primarily in German
* stay around B1 level
* correct important mistakes
* explain corrections in simple language
* ask follow-up questions
* encourage the learner

Allow:

"Nur Deutsch"

"Deutsch + Erklärung"

Save useful vocabulary from conversations.

---

# 25. ADMIN CMS

Create:

/admin

Admin-only access.

Dashboard:

* users
* exercises
* vocabulary
* grammar
* exams
* statistics

CRUD interfaces for:

Reading exercises
Listening exercises
Writing tasks
Speaking tasks
Vocabulary
Grammar lessons
Mock exams

Admin should be able to upload:

* audio
* images
* documents where appropriate

Do NOT hard-code learning content into frontend components.

All educational content should come from the database.

---

# 26. DATABASE ARCHITECTURE

Create a scalable relational schema.

Suggested entities:

User
Profile
Lesson
Exercise
Question
Answer
ReadingExercise
ListeningExercise
WritingTask
SpeakingTask
Vocabulary
VocabularyDeck
DeckWord
UserVocabulary
GrammarLesson
Exam
ExamSection
ExamAttempt
UserAnswer
UserProgress
WritingSubmission
SpeakingSession
Achievement

Make relationships clean and normalized.

A vocabulary word must be reusable across multiple decks.

For example:

"überzeugen"

can exist in:

* B1 Prüfung
* Arbeit
* Meine schwierigen Wörter
* B1 Wortschatz

without duplicating the vocabulary record.

---

# 27. SECURITY

Implement:

* server-side authorization
* protected admin routes
* row-level security where appropriate
* validation with Zod
* rate limiting for expensive AI endpoints
* safe file uploads
* input sanitization
* secure environment variables

Never expose:

* database secrets
* service-role keys
* AI private keys

---

# 28. PERFORMANCE

The website must work well on Vercel.

Optimize:

* images
* audio loading
* database queries
* server components
* client components only when necessary
* lazy loading
* caching where appropriate

Do not load large audio files immediately.

Use Supabase Storage or another suitable object storage for media.

---

# 29. MOBILE RESPONSIVE

The entire application must work on:

* desktop
* laptop
* tablet
* mobile

Dashboard should transform into a mobile-friendly layout.

Audio player and speaking interface must be usable on mobile.

---

# 30. UX DETAILS

Add:

* loading states
* skeletons
* empty states
* error states
* success notifications
* confirmation dialogs
* keyboard accessibility
* clear focus states

Never leave buttons non-functional.

If a backend feature cannot be implemented yet, create a clean abstraction/API boundary rather than fake functionality.

---

# 31. SEED DATA

Create realistic seed data for development.

Include:

* several B1 reading exercises
* several listening exercises
* writing tasks
* speaking prompts
* vocabulary
* grammar lessons
* sample mock exam

Do not copy copyrighted exam questions.

Create original educational content inspired by the skill requirements.

---

# 32. PROJECT STRUCTURE

Use a clean structure similar to:

app/
├── page.tsx
├── dashboard/
├── lernen/
│   ├── lesen/
│   ├── hoeren/
│   ├── schreiben/
│   └── sprechen/
├── vokabeln/
├── grammatik/
├── pruefung/
├── ki-tutor/
├── profil/
└── admin/

components/
├── ui/
├── dashboard/
├── exercises/
├── audio/
├── speaking/
├── writing/
├── vocabulary/
├── grammar/
└── exam/

lib/
├── auth/
├── db/
├── ai/
├── vocabulary/
├── spaced-repetition/
├── validation/
└── utils/

---

# 33. IMPORTANT DEVELOPMENT RULES

Do not build everything as one giant component.

Use reusable components.

Do not hard-code repeated UI.

Do not duplicate vocabulary records unnecessarily.

Do not fake AI responses.

Do not fake database persistence.

Do not use localStorage as the primary database for authenticated user data.

Use real database persistence.

Keep the code modular.

Keep the architecture extensible.

---

# 34. DEVELOPMENT PRIORITY

Build in this order:

PHASE 1

* project setup
* design system
* landing page
* authentication
* database
* dashboard

PHASE 2

* Lesen
* Hören
* exercise engine
* progress tracking

PHASE 3

* Schreiben
* Sprechen
* microphone
* writing submissions

PHASE 4

* vocabulary
* custom vocabulary decks
* flashcards
* spaced repetition
* import/export

PHASE 5

* grammar
* mock exams
* results

PHASE 6

* AI writing feedback
* AI speaking feedback
* AI tutor
* personalized recommendations

PHASE 7

* admin CMS
* analytics
* achievements
* performance optimization
* final UI polish

---

# 35. VERCEL DEPLOYMENT

The final application must be Vercel-ready.

Provide:

* `.env.example`
* database configuration
* Supabase setup instructions
* migration instructions
* seed instructions
* Vercel environment variable requirements
* production build configuration

Use environment variables such as:

DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AI_API_KEY=

Never place real credentials in the repository.

---

# 36. FINAL QUALITY STANDARD

The final result should feel like a real commercial German-learning SaaS product.

It must NOT feel like:

* a school project
* a template
* a static website
* a collection of disconnected pages

The user should be able to:

Register
→ enter dashboard
→ practice Lesen/Hören/Schreiben/Sprechen
→ save vocabulary
→ create personal vocabulary decks
→ review vocabulary using spaced repetition
→ study grammar
→ take mock exams
→ see progress
→ receive personalized recommendations

Everything should feel like one coherent product.

Start by implementing the foundation and core UI, then progressively implement each module while keeping the architecture production-ready.
