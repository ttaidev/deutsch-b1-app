export interface SpeakingTask {
  id: string;
  title: string;
  level: string;
  topic: string;
  type: "Teil 1" | "Teil 2" | "Teil 3";
  prompt: string;
  completed?: boolean;
  score?: string;
}

export const SPRECHEN_TASKS: SpeakingTask[] = [
  // --- Teil 1 (7 Aufgaben) ---
  {
    id: "sprechen-1-1",
    title: "Teil 1: Gemeinsam etwas planen (Geburtstagsgeschenk)",
    level: "B1",
    topic: "Freunde & Feste",
    type: "Teil 1",
    prompt: `Ihr gemeinsamer Freund Thomas feiert nächste Woche seinen 30. Geburtstag.
Sie möchten ein schönes Geschenk organisieren. Hinterlassen Sie einem anderen Freund eine Sprachnachricht, um das Geschenk zu planen.

Sprechen Sie über folgende Punkte:
1. Was wollen Sie schenken? (Ideen sammeln)
2. Wie viel Geld soll ausgegeben werden?
3. Wer kauft das Geschenk und wann übergebt ihr es?`,
  },
  {
    id: "sprechen-1-2",
    title: "Teil 1: Eine Überraschungsparty planen",
    level: "B1",
    topic: "Freunde & Freizeit",
    type: "Teil 1",
    prompt: `Eine Freundin aus Ihrem Kurs hat die B1-Prüfung bestanden. 
Sie möchten eine kleine Überraschungsparty für sie planen. Hinterlassen Sie einem anderen Kursteilnehmer eine Sprachnachricht.

Sprechen Sie über folgende Punkte:
1. Wann und wo soll die Party stattfinden?
2. Wen möchten Sie einladen?
3. Essen und Getränke: Wer bringt was mit?`,
  },
  {
    id: "sprechen-1-3",
    title: "Teil 1: Einen Ausflug am Wochenende organisieren",
    level: "B1",
    topic: "Reisen & Natur",
    type: "Teil 1",
    prompt: `Sie haben am Wochenende frei und möchten einen Ausflug in die Natur machen. 
Hinterlassen Sie einem Freund eine Sprachnachricht, um den Ausflug zu planen.

Sprechen Sie über folgende Punkte:
1. Wohin soll der Ausflug gehen? (See, Berge, Wald...)
2. Wie wollen Sie dorthin fahren? (Auto, Zug, Fahrrad...)
3. Was müssen Sie mitnehmen?`,
  },
  {
    id: "sprechen-1-4",
    title: "Teil 1: Einen Besuch im Krankenhaus planen",
    level: "B1",
    topic: "Gesundheit & Hilfe",
    type: "Teil 1",
    prompt: `Ein gemeinsamer Kollege liegt im Krankenhaus. 
Sie möchten ihn am Nachmittag besuchen. Hinterlassen Sie einer anderen Kollegin eine Sprachnachricht zur Planung.

Sprechen Sie über folgende Punkte:
1. Wann treffen Sie sich?
2. Was möchten Sie als Geschenk mitbringen? (Blumen, Buch...)
3. Wie lange wollen Sie bleiben?`,
  },
  {
    id: "sprechen-1-5",
    title: "Teil 1: Umzugshilfe organisieren",
    level: "B1",
    topic: "Wohnen & Alltag",
    type: "Teil 1",
    prompt: `Sie ziehen am nächsten Wochenende in eine neue Wohnung. 
Hinterlassen Sie einem Freund eine Sprachnachricht, bitten Sie ihn um Hilfe und planen Sie den Umzugstag.

Sprechen Sie über folgende Punkte:
1. Wann genau soll der Umzug starten?
2. Was genau muss gemacht werden? (Möbel tragen, Auto fahren...)
3. Was gibt es als Dankeschön zu essen/trinken?`,
  },
  {
    id: "sprechen-1-6",
    title: "Teil 1: Ein Abschiedsgeschenk für den Lehrer",
    level: "B1",
    topic: "Schule & Lernen",
    type: "Teil 1",
    prompt: `Ihr Deutschkurs geht bald zu Ende. 
Sie möchten ein kleines Geschenk für den Lehrer kaufen. Hinterlassen Sie einem Mitschüler eine Sprachnachricht, um das zu planen.

Sprechen Sie über folgende Punkte:
1. Was für ein Geschenk ist passend?
2. Wie sammeln Sie das Geld von den anderen Kursteilnehmern?
3. Wann und wie wollen Sie das Geschenk überreichen?`,
  },
  {
    id: "sprechen-1-7",
    title: "Teil 1: Planung eines gemeinsamen Abendessens",
    level: "B1",
    topic: "Essen & Kochen",
    type: "Teil 1",
    prompt: `Sie möchten am Freitagabend gemeinsam mit Freunden kochen. 
Hinterlassen Sie einem Freund eine Sprachnachricht, um den Abend zu planen.

Sprechen Sie über folgende Punkte:
1. Was wollen Sie kochen? (Vorspeise, Hauptspeise, Dessert)
2. Wer geht einkaufen und was wird gebraucht?
3. Wo treffen Sie sich zum Kochen?`,
  },

  // --- Teil 2 (7 Aufgaben) ---
  {
    id: "sprechen-2-1",
    title: "Teil 2: Präsentation - Haustiere im Alltag",
    level: "B1",
    topic: "Tiere & Alltag",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Sollten Kinder mit Haustieren aufwachsen?"

Gehen Sie dabei auf folgende Punkte ein:
- Ihre persönlichen Erfahrungen mit Haustieren.
- Welche Rolle spielen Haustiere in Ihrem Heimatland?
- Nennen Sie Vor- und Nachteile (z.B. Verantwortung lernen vs. Kosten/Zeit).
- Ihre eigene Meinung zum Thema.`,
  },
  {
    id: "sprechen-2-2",
    title: "Teil 2: Präsentation - Einkaufen im Internet",
    level: "B1",
    topic: "Konsum & Medien",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Online-Shopping vs. Geschäfte in der Stadt".

Gehen Sie dabei auf folgende Punkte ein:
- Ihre persönlichen Erfahrungen (Was kaufen Sie wo?).
- Wie ist die Situation in Ihrem Heimatland?
- Nennen Sie Vor- und Nachteile des Online-Shoppings (z.B. Bequemlichkeit vs. keine Beratung).
- Ihre eigene Meinung zum Thema.`,
  },
  {
    id: "sprechen-2-3",
    title: "Teil 2: Präsentation - Leben auf dem Land oder in der Stadt",
    level: "B1",
    topic: "Wohnen & Umwelt",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Wo lebt es sich besser: In der Stadt oder auf dem Land?"

Gehen Sie dabei auf folgende Punkte ein:
- Ihre persönlichen Erfahrungen (Wo leben Sie aktuell?).
- Wo wohnen die meisten Menschen in Ihrem Heimatland und warum?
- Nennen Sie Vor- und Nachteile beider Wohnorte.
- Ihre eigene Meinung zum Thema.`,
  },
  {
    id: "sprechen-2-4",
    title: "Teil 2: Präsentation - Fremdsprachen lernen",
    level: "B1",
    topic: "Lernen & Bildung",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Wie wichtig ist es, Fremdsprachen zu lernen?"

Gehen Sie dabei auf folgende Punkte ein:
- Ihre persönlichen Erfahrungen beim Sprachenlernen.
- Welche Fremdsprachen lernt man typischerweise in Ihrem Heimatland?
- Vor- und Nachteile (z.B. Karrierechancen vs. Zeitaufwand).
- Ihre eigene Meinung zum Thema.`,
  },
  {
    id: "sprechen-2-5",
    title: "Teil 2: Präsentation - Soziale Netzwerke",
    level: "B1",
    topic: "Medien & Gesellschaft",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Brauchen wir soziale Netzwerke (Facebook, Instagram, etc.)?"

Gehen Sie dabei auf folgende Punkte ein:
- Ihre persönliche Nutzung von sozialen Medien.
- Welche Rolle spielen soziale Netzwerke in Ihrem Heimatland?
- Vor- und Nachteile (z.B. Kontakt zu Freunden vs. Datenschutz/Sucht).
- Ihre eigene Meinung zum Thema.`,
  },
  {
    id: "sprechen-2-6",
    title: "Teil 2: Präsentation - Fast Food",
    level: "B1",
    topic: "Ernährung & Gesundheit",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Fast Food – Praktisch, aber ungesund?"

Gehen Sie dabei auf folgende Punkte ein:
- Wie oft und warum essen Sie Fast Food?
- Ist Fast Food in Ihrem Heimatland sehr beliebt?
- Vor- und Nachteile (z.B. Zeitersparnis vs. Gesundheitsrisiken).
- Ihre eigene Meinung zum Thema.`,
  },
  {
    id: "sprechen-2-7",
    title: "Teil 2: Präsentation - Sport im Alltag",
    level: "B1",
    topic: "Gesundheit & Freizeit",
    type: "Teil 2",
    prompt: `Halten Sie eine kurze Präsentation zum Thema: "Ist täglicher Sport wirklich notwendig?"

Gehen Sie dabei auf folgende Punkte ein:
- Wie oft machen Sie selbst Sport?
- Welche Sportarten sind in Ihrem Heimatland besonders beliebt?
- Vor- und Nachteile von viel Sport (Gesundheit vs. Verletzungsgefahr/Stress).
- Ihre eigene Meinung zum Thema.`,
  },

  // --- Teil 3 (6 Aufgaben) ---
  {
    id: "sprechen-3-1",
    title: "Teil 3: Reagieren (Thema Haustiere)",
    level: "B1",
    topic: "Tiere & Alltag",
    type: "Teil 3",
    prompt: `Stellen Sie sich vor, Sie haben gerade eine Präsentation über Haustiere gehört. 
Sprechen Sie Ihre Reaktion darauf ein:

- Geben Sie ein kurzes Feedback (z.B. "Deine Präsentation hat mir gut gefallen...").
- Stellen Sie eine Frage zum Thema (z.B. "Hast du denn als Kind selbst ein Haustier gehabt?").`,
  },
  {
    id: "sprechen-3-2",
    title: "Teil 3: Reagieren (Thema Online-Shopping)",
    level: "B1",
    topic: "Konsum & Medien",
    type: "Teil 3",
    prompt: `Stellen Sie sich vor, Sie haben gerade eine Präsentation über Online-Shopping gehört. 
Sprechen Sie Ihre Reaktion darauf ein:

- Geben Sie ein kurzes Feedback zu der Präsentation.
- Stellen Sie eine Frage (z.B. "Hast du schon mal schlechte Erfahrungen mit einem Online-Shop gemacht?").`,
  },
  {
    id: "sprechen-3-3",
    title: "Teil 3: Reagieren (Thema Stadt oder Land)",
    level: "B1",
    topic: "Wohnen & Umwelt",
    type: "Teil 3",
    prompt: `Stellen Sie sich vor, Sie haben gerade eine Präsentation über das Leben in der Stadt und auf dem Land gehört. 
Sprechen Sie Ihre Reaktion darauf ein:

- Geben Sie ein kurzes Feedback (z.B. "Ich fand interessant, was du über... gesagt hast").
- Stellen Sie eine Frage (z.B. "Könntest du dir vorstellen, später auf einem Bauernhof zu leben?").`,
  },
  {
    id: "sprechen-3-4",
    title: "Teil 3: Reagieren (Thema Fremdsprachen)",
    level: "B1",
    topic: "Lernen & Bildung",
    type: "Teil 3",
    prompt: `Stellen Sie sich vor, Sie haben gerade eine Präsentation über das Erlernen von Fremdsprachen gehört. 
Sprechen Sie Ihre Reaktion darauf ein:

- Geben Sie ein kurzes Feedback zur Struktur oder zum Inhalt.
- Stellen Sie eine Frage (z.B. "Welche Sprache möchtest du in Zukunft noch lernen und warum?").`,
  },
  {
    id: "sprechen-3-5",
    title: "Teil 3: Reagieren (Thema Soziale Netzwerke)",
    level: "B1",
    topic: "Medien & Gesellschaft",
    type: "Teil 3",
    prompt: `Stellen Sie sich vor, Sie haben gerade eine Präsentation über soziale Netzwerke gehört. 
Sprechen Sie Ihre Reaktion darauf ein:

- Geben Sie ein kurzes, freundliches Feedback.
- Stellen Sie eine Frage (z.B. "Glaubst du, dass wir in Zukunft ganz auf persönliche Treffen verzichten werden?").`,
  },
  {
    id: "sprechen-3-6",
    title: "Teil 3: Reagieren (Thema Fast Food)",
    level: "B1",
    topic: "Ernährung & Gesundheit",
    type: "Teil 3",
    prompt: `Stellen Sie sich vor, Sie haben gerade eine Präsentation über Fast Food gehört. 
Sprechen Sie Ihre Reaktion darauf ein:

- Geben Sie ein kurzes Feedback.
- Stellen Sie eine Frage (z.B. "Was ist dein persönliches Lieblingsessen, wenn es mal schnell gehen muss?").`,
  }
];
