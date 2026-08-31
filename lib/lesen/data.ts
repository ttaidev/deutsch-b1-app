import { LESEN_EXERCISES_T1 } from "./data_t1";
import { LESEN_EXERCISES_T2 } from "./data_t2";
import { LESEN_EXERCISES_T3 } from "./data_t3";
import { LESEN_EXERCISES_T4 } from "./data_t4";
import { LESEN_EXERCISES_T5 } from "./data_t5";

export type QuestionType = "multiple_choice" | "true_false" | "ja_nein" | "matching";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface ReadingExercise {
  id: string;
  title: string;
  level: string;
  topic: string;
  duration: string;
  type: string;
  questionType: QuestionType;
  readingText: string;
  questions: Question[];
  completed?: boolean;
  score?: string;
}

export const LESEN_EXERCISES: ReadingExercise[] = [
  // --- LOẠI 1: ĐÚNG / SAI (Richtig / Falsch) ---
  {
    id: "lesen-tf-1",
    title: "Teil 1: Wohnungsanzeigen in Berlin",
    level: "B1",
    topic: "Wohnen & Leben",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Lieber Markus,
ich habe endlich eine neue Wohnung gefunden! Sie liegt im Zentrum von Berlin, direkt neben einem großen Park. Die Wohnung hat 3 Zimmer, einen Balkon und ist sehr hell. Die Miete ist nicht zu teuer, nur 800 Euro kalt. Nächste Woche am Samstag ziehe ich um. Kannst du mir vielleicht beim Umzug helfen? Ich habe einen Transporter gemietet und wir fangen um 9 Uhr morgens an. Abends lade ich alle Helfer zum Pizzaessen ein.
Liebe Grüße,
Dein Julian`,
    questions: [
      { id: 1, question: "Julian hat eine neue Wohnung auf dem Land gefunden.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Wohnung liegt im Zentrum von Berlin, nicht auf dem Land." },
      { id: 2, question: "Die Wohnung kostet 800 Euro ohne Nebenkosten.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "'800 Euro kalt' bedeutet ohne Nebenkosten." },
      { id: 3, question: "Julian zieht an einem Sonntag um.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er zieht nächste Woche am Samstag um." },
      { id: 4, question: "Julian bittet Markus um Hilfe beim Umzug.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Er fragt: 'Kannst du mir vielleicht beim Umzug helfen?'" },
      { id: 5, question: "Markus soll seinen eigenen Transporter mitbringen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Julian hat bereits einen Transporter gemietet." },
      { id: 6, question: "Julian kocht abends für alle Helfer selbst.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er lädt alle zum Pizzaessen ein, das bedeutet meistens Essen bestellen oder ins Restaurant gehen, nicht selbst kochen." }
    ]
  },
  {
    id: "lesen-tf-2",
    title: "Teil 1: Einladung zum Schulfest",
    level: "B1",
    topic: "Schule & Bildung",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Liebe Eltern,
wir laden Sie herzlich zu unserem diesjährigen Sommerfest an der Goethe-Schule ein. Das Fest findet am 15. Juli von 14:00 bis 18:00 Uhr auf dem Schulhof statt. Es gibt viele Aktivitäten für die Kinder, wie zum Beispiel Kinderschminken, Dosenwerfen und ein kleines Theaterstück, das von der Klasse 3b aufgeführt wird. Für das leibliche Wohl ist ebenfalls gesorgt: Der Elternbeirat verkauft Kaffee, Kuchen und Würstchen. Die Einnahmen gehen an ein Projekt für neue Spielgeräte. Wir freuen uns auf Ihr Kommen!
Die Schulleitung`,
    questions: [
      { id: 1, question: "Das Fest findet am Abend statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Es findet von 14:00 bis 18:00 Uhr statt, also am Nachmittag." },
      { id: 2, question: "Das Sommerfest ist auf dem Schulhof.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Im Text steht: 'auf dem Schulhof'." },
      { id: 3, question: "Alle Klassen führen ein Theaterstück auf.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Nur die Klasse 3b führt ein Theaterstück auf." },
      { id: 4, question: "Essen und Trinken sind kostenlos.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Elternbeirat verkauft Kaffee, Kuchen und Würstchen (die Einnahmen gehen an ein Projekt)." },
      { id: 5, question: "Das gesammelte Geld wird für neues Spielzeug ausgegeben.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Die Einnahmen gehen an ein Projekt für neue Spielgeräte." },
      { id: 6, question: "Der Brief wurde von den Schülern geschrieben.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Brief wurde von der Schulleitung geschrieben." }
    ]
  },
  {
    id: "lesen-tf-3",
    title: "Teil 1: Neuer Job im Krankenhaus",
    level: "B1",
    topic: "Arbeit & Gesundheit",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Hallo Maria,
stell dir vor, ich habe endlich einen Job gefunden! Ich arbeite jetzt als Krankenpflegerin im Stadtkrankenhaus. Die Arbeit ist anstrengend, aber sie macht mir großen Spaß. Meine Schicht beginnt meistens schon um 6 Uhr morgens, deshalb muss ich sehr früh aufstehen. Die Kollegen sind alle sehr nett und hilfsbereit. Nächsten Monat muss ich das erste Mal an einem Wochenende arbeiten. Darauf freue ich mich nicht so sehr, aber das gehört zum Job dazu. Wollen wir uns am Freitagabend auf einen Kaffee treffen?
Liebe Grüße,
Anna`,
    questions: [
      { id: 1, question: "Anna arbeitet als Ärztin.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie arbeitet als Krankenpflegerin." },
      { id: 2, question: "Anna findet die Arbeit sehr entspannend.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt, die Arbeit ist 'anstrengend'." },
      { id: 3, question: "Anna beginnt ihre Arbeit oft am frühen Morgen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Ihre Schicht beginnt meistens um 6 Uhr morgens." },
      { id: 4, question: "Anna hat unfreundliche Kollegen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Kollegen sind sehr nett und hilfsbereit." },
      { id: 5, question: "Anna freut sich sehr auf die Arbeit am Wochenende.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Darauf freue ich mich nicht so sehr'." },
      { id: 6, question: "Anna möchte sich mit Maria am Wochenende treffen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie schlägt vor, sich am Freitagabend (also vor dem Wochenende) zu treffen." }
    ]
  },

  // --- LOẠI 2: TRẮC NGHIỆM A/B/C (Multiple Choice) ---
  {
    id: "lesen-mc-1",
    title: "Teil 2: Einladung zum Firmenjubiläum",
    level: "B1",
    topic: "Arbeit & Beruf",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Sehr geehrte Mitarbeiterinnen und Mitarbeiter,
unser Unternehmen feiert nächsten Monat sein 25-jähriges Bestehen. Aus diesem Anlass möchten wir Sie alle herzlich zu einer großen Jubiläumsfeier einladen. Die Feier findet am Freitag, den 20. Oktober, ab 18 Uhr im großen Saal des Hotels "Vier Jahreszeiten" statt.
Es wird ein reichhaltiges Buffet geben und für die musikalische Unterhaltung sorgt eine Live-Band. Bitte geben Sie bis zum 5. Oktober in der Personalabteilung Bescheid, ob Sie kommen können und ob Sie in Begleitung erscheinen. Wir freuen uns auf einen unvergesslichen Abend mit Ihnen!
Mit freundlichen Grüßen,
Die Geschäftsführung`,
    questions: [
      { id: 1, question: "Warum wird gefeiert?", options: ["A) Weil die Firma 25 Jahre alt wird.", "B) Weil ein neues Hotel eröffnet wird.", "C) Weil ein neuer Chef kommt."], correct: "A) Weil die Firma 25 Jahre alt wird.", explanation: "Das Unternehmen feiert sein 25-jähriges Bestehen." },
      { id: 2, question: "Wo findet die Feier statt?", options: ["A) Im Büro der Firma.", "B) In einem Hotel.", "C) In einem Restaurant."], correct: "B) In einem Hotel.", explanation: "Die Feier findet im Hotel 'Vier Jahreszeiten' statt." },
      { id: 3, question: "Wann beginnt die Veranstaltung?", options: ["A) Am Morgen.", "B) Am Nachmittag.", "C) Am Abend."], correct: "C) Am Abend.", explanation: "Die Feier beginnt ab 18 Uhr (Abend)." },
      { id: 4, question: "Was gibt es zu essen?", options: ["A) Nur Kuchen und Kaffee.", "B) Ein Menü mit drei Gängen.", "C) Ein Buffet."], correct: "C) Ein Buffet.", explanation: "Im Text steht: 'Es wird ein reichhaltiges Buffet geben'." },
      { id: 5, question: "Bis wann muss man sich anmelden?", options: ["A) Bis zum 20. Oktober.", "B) Bis zum 5. Oktober.", "C) Am selben Tag."], correct: "B) Bis zum 5. Oktober.", explanation: "Man muss bis zum 5. Oktober in der Personalabteilung Bescheid geben." },
      { id: 6, question: "Darf man jemanden zur Feier mitbringen?", options: ["A) Ja, man darf eine Begleitung mitbringen.", "B) Nein, nur Mitarbeiter sind eingeladen.", "C) Das steht nicht im Text."], correct: "A) Ja, man darf eine Begleitung mitbringen.", explanation: "Die Anmeldung fragt: 'ob Sie in Begleitung erscheinen'." }
    ]
  },
  {
    id: "lesen-mc-2",
    title: "Teil 2: Neuer Sprachkurs",
    level: "B1",
    topic: "Bildung & Sprachen",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Liebe Kursteilnehmer,
wir freuen uns, Ihnen mitteilen zu können, dass unser neues Kursprogramm für das Wintersemester online ist. Ab November bieten wir neue Intensivkurse für Deutsch auf dem B2-Niveau an. Die Kurse finden dreimal pro Woche statt: montags, mittwochs und freitags von 18 bis 20 Uhr.
Die Kosten betragen 250 Euro für den gesamten Kurs (Dauer: 8 Wochen). Für Studenten gibt es einen Rabatt von 20 Prozent. Wenn Sie sich bis Ende Oktober anmelden, erhalten Sie zusätzlich das Lehrbuch kostenlos. Anmeldungen sind über unsere Webseite oder direkt im Sekretariat möglich.`,
    questions: [
      { id: 1, question: "Für welches Niveau sind die neuen Kurse?", options: ["A) Für Anfänger (A1).", "B) Für das B1-Niveau.", "C) Für das B2-Niveau."], correct: "C) Für das B2-Niveau.", explanation: "Die neuen Intensivkurse sind für Deutsch auf dem B2-Niveau." },
      { id: 2, question: "Wie oft findet der Kurs statt?", options: ["A) Einmal pro Woche.", "B) Dreimal pro Woche.", "C) Jeden Tag."], correct: "B) Dreimal pro Woche.", explanation: "Die Kurse finden dreimal pro Woche statt (montags, mittwochs, freitags)." },
      { id: 3, question: "Wann beginnt der Unterricht?", options: ["A) Um 18 Uhr.", "B) Um 20 Uhr.", "C) Um 16 Uhr."], correct: "A) Um 18 Uhr.", explanation: "Die Kurse finden von 18 bis 20 Uhr statt." },
      { id: 4, question: "Wer muss weniger bezahlen?", options: ["A) Arbeitslose.", "B) Studenten.", "C) Kinder."], correct: "B) Studenten.", explanation: "Für Studenten gibt es einen Rabatt von 20 Prozent." },
      { id: 5, question: "Wie lange dauert ein Kurs insgesamt?", options: ["A) 8 Tage.", "B) 8 Wochen.", "C) 8 Monate."], correct: "B) 8 Wochen.", explanation: "Die Dauer beträgt 8 Wochen." },
      { id: 6, question: "Was bekommen frühe Anmelder gratis?", options: ["A) Ein Wörterbuch.", "B) Einen zweiten Kurs.", "C) Ein Lehrbuch."], correct: "C) Ein Lehrbuch.", explanation: "Wer sich bis Ende Oktober anmeldet, erhält das Lehrbuch kostenlos." }
    ]
  },
  {
    id: "lesen-mc-3",
    title: "Teil 2: Reise nach München",
    level: "B1",
    topic: "Reisen & Verkehr",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Hallo Stefan,
ich habe heute endlich die Zugtickets nach München für unser Wochenende im Dezember gebucht. Da wir frühzeitig gebucht haben, war es sehr günstig: Nur 45 Euro für uns beide zusammen! Der Zug fährt am Freitagnachmittag um 15:30 Uhr ab und wir sind gegen 19 Uhr in München.
Ich habe auch schon ein kleines Hotel in der Nähe des Marienplatzes reserviert. Wir sollten unbedingt den Weihnachtsmarkt besuchen, von dem du so viel geschwärmt hast. Pack warme Kleidung ein, es soll schneien! Ruf mich an, wenn du Zeit hast, damit wir die Details besprechen können.
Grüße, Tobias`,
    questions: [
      { id: 1, question: "Wie reisen Tobias und Stefan nach München?", options: ["A) Mit dem Auto.", "B) Mit dem Flugzeug.", "C) Mit dem Zug."], correct: "C) Mit dem Zug.", explanation: "Tobias schreibt, dass er 'Zugtickets' gebucht hat." },
      { id: 2, question: "Warum war die Fahrt billig?", options: ["A) Weil sie früh gebucht haben.", "B) Weil sie Studenten sind.", "C) Weil sie am Wochenende fahren."], correct: "A) Weil sie früh gebucht haben.", explanation: "Im Text steht: 'Da wir frühzeitig gebucht haben, war es sehr günstig'." },
      { id: 3, question: "Wann kommen sie ungefähr in München an?", options: ["A) Am Freitag um 15:30 Uhr.", "B) Am Freitag um 19:00 Uhr.", "C) Am Samstagmorgen."], correct: "B) Am Freitag um 19:00 Uhr.", explanation: "Der Zug kommt gegen 19 Uhr in München an." },
      { id: 4, question: "Wo liegt das Hotel?", options: ["A) In der Nähe des Bahnhofs.", "B) Direkt am Flughafen.", "C) Beim Marienplatz."], correct: "C) Beim Marienplatz.", explanation: "Tobias hat ein Hotel in der Nähe des Marienplatzes reserviert." },
      { id: 5, question: "Was wollen sie in München machen?", options: ["A) Ein Museum besuchen.", "B) Auf den Weihnachtsmarkt gehen.", "C) Verwandte treffen."], correct: "B) Auf den Weihnachtsmarkt gehen.", explanation: "Sie wollen unbedingt den Weihnachtsmarkt besuchen." },
      { id: 6, question: "Warum soll Stefan warme Kleidung einpacken?", options: ["A) Weil es im Hotel kalt ist.", "B) Weil es schneien soll.", "C) Weil die Heizung im Zug kaputt ist."], correct: "B) Weil es schneien soll.", explanation: "Tobias schreibt: 'es soll schneien!'." }
    ]
  }
];

LESEN_EXERCISES.push(...LESEN_EXERCISES_T1, ...LESEN_EXERCISES_T2, ...LESEN_EXERCISES_T3, ...LESEN_EXERCISES_T4, ...LESEN_EXERCISES_T5);
