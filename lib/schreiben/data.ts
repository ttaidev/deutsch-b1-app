export interface WritingTask {
  id: string;
  title: string;
  level: string;
  topic: string;
  minWords: number;
  duration: string;
  completed?: boolean;
  score?: string;
  prompt: string;
  type: "Teil 1" | "Teil 2" | "Teil 3";
}

const TEIL_1_BASE: WritingTask[] = [
  {
    id: "schreiben-1-1",
    title: "Teil 1: Absage für eine Party (Informeller Brief)",
    level: "B1",
    topic: "Freunde & Freizeit",
    minWords: 80,
    duration: "20 Phút",
    type: "Teil 1",
    prompt: `Ihr Freund Alex hat Sie zu seiner Geburtstagsfeier am Samstagabend eingeladen. 
Schreiben Sie Alex eine E-Mail, in der Sie sich bedanken und absagen.

Bearbeiten Sie die folgenden drei Punkte:
1. Grund für die Absage nennen (Nêu lý do từ chối).
2. Ein Geschenk vorschlagen oder versprechen (Hứa hoặc gợi ý món quà).
3. Einen neuen Termin für ein Treffen vereinbaren (Hẹn một buổi gặp khác).`,
  },
  {
    id: "schreiben-1-2",
    title: "Teil 1: Einladung zum Essen",
    level: "B1",
    topic: "Freunde & Freizeit",
    minWords: 80,
    duration: "20 Phút",
    type: "Teil 1",
    prompt: `Sie haben am Wochenende Geburtstag und möchten Ihre Freundin Sarah zum Essen in ein Restaurant einladen.

Schreiben Sie eine E-Mail an Sarah:
- Laden Sie sie ein und nennen Sie den Grund.
- Geben Sie Informationen zu Zeit und Ort.
- Bitten Sie um eine schnelle Antwort, da Sie den Tisch reservieren müssen.`,
  },
  {
    id: "schreiben-1-3",
    title: "Teil 1: Hilfe beim Umzug",
    level: "B1",
    topic: "Wohnen & Alltag",
    minWords: 80,
    duration: "20 Phút",
    type: "Teil 1",
    prompt: `Sie ziehen nächste Woche in eine neue Wohnung um. Schreiben Sie eine E-Mail an Ihren Freund Max.

- Bitten Sie ihn um Hilfe beim Umzug.
- Nennen Sie den genauen Termin (Tag und Uhrzeit).
- Versprechen Sie ihm als Dankeschön ein gutes Essen nach dem Umzug.`,
  },
  {
    id: "schreiben-1-4",
    title: "Teil 1: Vergessenes Buch",
    level: "B1",
    topic: "Freunde & Schule",
    minWords: 80,
    duration: "20 Phút",
    type: "Teil 1",
    prompt: `Sie haben sich von Ihrer Freundin Lisa ein Buch für den Deutschkurs ausgeliehen. Leider haben Sie es im Zug liegen lassen.
Schreiben Sie eine E-Mail an Lisa.

- Erklären Sie, was passiert ist.
- Entschuldigen Sie sich für den Fehler.
- Schlagen Sie eine Lösung vor (z.B. ein neues Buch kaufen).`,
  },
  {
    id: "schreiben-1-5",
    title: "Teil 1: Vorschlag für einen Ausflug",
    level: "B1",
    topic: "Reisen & Freizeit",
    minWords: 80,
    duration: "20 Phút",
    type: "Teil 1",
    prompt: `Sie möchten am Wochenende mit Ihrem Freund Julian einen Ausflug an den See machen.
Schreiben Sie ihm eine E-Mail.

- Schlagen Sie den Ausflug vor und sagen Sie, warum Sie das machen möchten.
- Fragen Sie, ob er Zeit und Lust hat.
- Machen Sie einen Vorschlag, was Sie dorthin mitnehmen sollen (Essen, Getränke...).`,
  }
];

const TEIL_2_BASE: WritingTask[] = [
  {
    id: "schreiben-2-1",
    title: "Teil 2: Meinung zum Thema 'Homeoffice & Arbeit'",
    level: "B1",
    topic: "Medien & Beruf",
    minWords: 80,
    duration: "25 Phút",
    type: "Teil 2",
    prompt: `Sie haben im Fernsehen eine Diskussionssendung zum Thema "Homeoffice - Die Zukunft der Arbeit?" gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:

Jonas: "Ich finde Homeoffice schrecklich. Man ist immer allein, hat keinen Kontakt zu den Kollegen und arbeitet oft länger als im Büro. Für mich ist das keine gute Lösung."

Schreiben Sie nun Ihre Meinung (ca. 80 Wörter) zu diesem Thema.`,
  },
  {
    id: "schreiben-2-2",
    title: "Teil 2: Meinung zu 'Soziale Medien bei Jugendlichen'",
    level: "B1",
    topic: "Medien & Gesellschaft",
    minWords: 80,
    duration: "25 Phút",
    type: "Teil 2",
    prompt: `Sie haben in einem Online-Magazin einen Artikel zum Thema "Soziale Medien im Leben von Jugendlichen" gelesen. Im Kommentarbereich schreibt:

Klara: "Ich finde, Jugendliche verbringen viel zu viel Zeit auf Instagram und TikTok. Sie verlernen die echte Kommunikation und vergleichen sich ständig mit anderen. Das macht unglücklich."

Schreiben Sie Ihre eigene Meinung dazu (ca. 80 Wörter). Stimmen Sie Klara zu oder sehen Sie das anders?`,
  },
  {
    id: "schreiben-2-3",
    title: "Teil 2: Meinung zu 'Autofreie Innenstädte'",
    level: "B1",
    topic: "Umwelt & Verkehr",
    minWords: 80,
    duration: "25 Phút",
    type: "Teil 2",
    prompt: `Sie haben eine Diskussion über "Autofreie Innenstädte" im Radio gehört. Im Internetforum der Radiosendung schreibt:

Thomas: "Autos haben in der Innenstadt nichts zu suchen. Sie machen Lärm, verschmutzen die Luft und sind gefährlich. Man sollte alle Straßen im Zentrum für Autos sperren."

Schreiben Sie Ihre Meinung dazu (ca. 80 Wörter).`,
  },
  {
    id: "schreiben-2-4",
    title: "Teil 2: Meinung zu 'Online-Shopping vs. Einkaufszentrum'",
    level: "B1",
    topic: "Einkaufen & Konsum",
    minWords: 80,
    duration: "25 Phút",
    type: "Teil 2",
    prompt: `In einem Blog lesen Sie einen Beitrag zum Thema "Einkaufen der Zukunft". Ein User schreibt:

Marie: "Ich kaufe nur noch online. Das ist viel bequemer, man hat mehr Auswahl und die Preise sind oft besser. Geschäfte in der Stadt brauche ich nicht mehr."

Schreiben Sie Ihre Meinung dazu (ca. 80 Wörter).`,
  },
  {
    id: "schreiben-2-5",
    title: "Teil 2: Meinung zu 'Gesunde Ernährung in der Kantine'",
    level: "B1",
    topic: "Gesundheit & Ernährung",
    minWords: 80,
    duration: "25 Phút",
    type: "Teil 2",
    prompt: `Sie haben in einer Zeitung einen Artikel über das Essen in Schulkantinen gelesen. Im Online-Forum der Zeitung schreibt ein Leser:

Stefan: "Es ist unmöglich, was den Kindern oft als Mittagessen angeboten wird. Nur Pommes, Pizza und süße Getränke. Die Schulen müssen dafür sorgen, dass es jeden Tag frisches Gemüse und gesundes Essen gibt!"

Schreiben Sie Ihre Meinung dazu (ca. 80 Wörter).`,
  }
];

const TEIL_3_BASE: WritingTask[] = [
  {
    id: "schreiben-3-1",
    title: "Teil 3: Formaler Beschwerdebrief an ein Hotel",
    level: "B1",
    topic: "Reisen & Beschwerde",
    minWords: 40,
    duration: "15 Phút",
    type: "Teil 3",
    prompt: `Sie haben letzte Woche in einem Hotel in Berlin übernachtet, aber Sie waren sehr unzufrieden. Ihr Zimmer war laut und das Frühstück war sehr schlecht.
Schreiben Sie eine E-Mail an das Hotel (Herrn Müller). 

Entschuldigen Sie sich nicht, sondern beschweren Sie sich höflich, aber bestimmt.
Erklären Sie kurz die Probleme (lautes Zimmer, schlechtes Frühstück) und bitten Sie um eine teilweise Rückerstattung (hoàn tiền một phần).

Schreiben Sie eine E-Mail (ca. 40 Wörter). Vergessen Sie nicht die formelle Anrede und den Gruß.`,
  },
  {
    id: "schreiben-3-2",
    title: "Teil 3: Entschuldigung beim Chef (Krankheit)",
    level: "B1",
    topic: "Arbeit & Beruf",
    minWords: 40,
    duration: "15 Phút",
    type: "Teil 3",
    prompt: `Sie sind krank geworden und können heute und morgen nicht zur Arbeit kommen.
Schreiben Sie eine E-Mail an Ihren Chef, Herrn Wagner.

- Entschuldigen Sie sich für das Fehlen.
- Erklären Sie, dass Sie beim Arzt waren und bis Mittwoch krankgeschrieben sind.
- Sagen Sie, dass eine Kollegin Ihre dringenden Aufgaben übernimmt.

Schreiben Sie ca. 40 Wörter formell.`,
  },
  {
    id: "schreiben-3-3",
    title: "Teil 3: Terminverschiebung beim Arzt",
    level: "B1",
    topic: "Gesundheit & Termine",
    minWords: 40,
    duration: "15 Phút",
    type: "Teil 3",
    prompt: `Sie haben am Donnerstag einen Termin bei Ihrem Zahnarzt, Dr. Schmidt, aber Sie müssen unerwartet arbeiten.
Schreiben Sie eine formelle E-Mail an die Praxis.

- Entschuldigen Sie sich, dass Sie den Termin absagen müssen.
- Erklären Sie kurz den Grund (müssen arbeiten).
- Bitten Sie um einen neuen Termin in der nächsten Woche.`,
  },
  {
    id: "schreiben-3-4",
    title: "Teil 3: Entschuldigung beim Kursleiter",
    level: "B1",
    topic: "Schule & Lernen",
    minWords: 40,
    duration: "15 Phút",
    type: "Teil 3",
    prompt: `Sie nehmen an einem Deutschkurs teil. Morgen haben Sie eine wichtige Prüfung, aber Sie haben starke Kopfschmerzen und können nicht kommen.
Schreiben Sie eine formelle E-Mail an Ihre Kursleiterin, Frau Weber.

- Entschuldigen Sie sich für das Fehlen.
- Erklären Sie, dass Sie krank sind.
- Fragen Sie, wann Sie die Prüfung nachholen können.`,
  },
  {
    id: "schreiben-3-5",
    title: "Teil 3: Bitte um Informationen (Sprachschule)",
    level: "B1",
    topic: "Lernen & Information",
    minWords: 40,
    duration: "15 Phút",
    type: "Teil 3",
    prompt: `Sie möchten im Sommer einen Intensivkurs in einer Sprachschule in München besuchen. 
Schreiben Sie eine E-Mail an die Sprachschule (Frau Richter).

- Fragen Sie nach den genauen Terminen für den B1-Kurs im August.
- Bitten Sie um Informationen zu den Kosten.
- Fragen Sie, ob die Schule auch eine Unterkunft für Studenten anbietet.`,
  }
];

export const SCHREIBEN_TASKS: WritingTask[] = [
  ...TEIL_1_BASE,
  ...TEIL_1_BASE.map(t => ({ ...t, id: t.id + "-copy", title: t.title + " (Luyện tập thêm)" })),
  ...TEIL_2_BASE,
  ...TEIL_2_BASE.map(t => ({ ...t, id: t.id + "-copy", title: t.title + " (Luyện tập thêm)" })),
  ...TEIL_3_BASE,
  ...TEIL_3_BASE.map(t => ({ ...t, id: t.id + "-copy", title: t.title + " (Luyện tập thêm)" }))
];
