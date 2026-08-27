import { LESEN_EXERCISES_T1 } from "./data_t1";
import { LESEN_EXERCISES_T2 } from "./data_t2";
import { LESEN_EXERCISES_T3 } from "./data_t3";

export type QuestionType = "multiple_choice" | "true_false" | "ja_nein";

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
  },

  // --- LOẠI 3: CÓ / KHÔNG (Ja / Nein) ---
  {
    id: "lesen-jn-1",
    title: "Teil 3: Umweltschutz im Büro",
    level: "B1",
    topic: "Umwelt & Arbeit",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Wichtige Informationen für alle Mitarbeiter zum Thema "Grünes Büro":
Um unsere Umwelt zu schonen, möchten wir ab sofort einige Dinge in unserem Büroalltag ändern.
1. Bitte drucken Sie Dokumente nur aus, wenn es wirklich notwendig ist. Benutzen Sie immer beide Seiten des Papiers (Doppelseitendruck).
2. Schalten Sie Ihre Computer und Monitore nach der Arbeit vollständig aus. Der Standby-Modus verbraucht zu viel Strom.
3. Wir haben in der Küche neue Mülleimer aufgestellt. Bitte trennen Sie Plastik, Papier und Restmüll.
4. Wir stellen ab nächster Woche kostenloses Leitungswasser in Glasflaschen zur Verfügung. Bitte bringen Sie keine Plastikflaschen mehr mit.
Wir danken für Ihre Mithilfe!`,
    questions: [
      { id: 1, question: "Dürfen die Mitarbeiter gar nichts mehr ausdrucken?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie dürfen ausdrucken, wenn es wirklich notwendig ist." },
      { id: 2, question: "Soll das Papier auf beiden Seiten bedruckt werden?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Im Text steht: 'Benutzen Sie immer beide Seiten des Papiers'." },
      { id: 3, question: "Ist der Standby-Modus nach der Arbeit erlaubt?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Nein, sie sollen die Computer vollständig ausschalten." },
      { id: 4, question: "Muss der Müll in der Küche getrennt werden?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie sollen Plastik, Papier und Restmüll trennen." },
      { id: 5, question: "Gibt es bald kostenloses Wasser für die Mitarbeiter?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Ab nächster Woche wird kostenloses Leitungswasser zur Verfügung gestellt." },
      { id: 6, question: "Gibt es das Wasser in Plastikflaschen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Das Wasser wird in Glasflaschen zur Verfügung gestellt." },
      { id: 7, question: "Sind die Regeln ab sofort gültig?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Im Text steht: 'möchten wir ab sofort einige Dinge... ändern'." }
    ]
  },
  {
    id: "lesen-jn-2",
    title: "Teil 3: Fitnessstudio Regeln",
    level: "B1",
    topic: "Sport & Gesundheit",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Liebe Mitglieder von "Fit & Gesund",
bitte beachten Sie unsere neuen Hausregeln, die ab dem 1. März gelten:
- Das Betreten der Trainingsfläche ist nur mit sauberen Sportschuhen erlaubt. Straßenschuhe sind verboten.
- Bitte legen Sie beim Training immer ein Handtuch auf die Geräte, um Schweiß zu vermeiden.
- Nach dem Gebrauch müssen die Gewichte wieder an ihren Platz geräumt werden.
- Das Telefonieren auf der Trainingsfläche ist nicht gestattet. Wenn Sie telefonieren müssen, gehen Sie bitte in die Umkleidekabine oder in den Eingangsbereich.
- Das Fitnessstudio schließt unter der Woche um 23 Uhr. Am Wochenende schließen wir bereits um 20 Uhr.`,
    questions: [
      { id: 1, question: "Darf man mit Schuhen trainieren, die man auf der Straße trägt?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Straßenschuhe sind verboten." },
      { id: 2, question: "Braucht man ein Handtuch für die Geräte?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Man soll immer ein Handtuch auf die Geräte legen." },
      { id: 3, question: "Räumt das Personal die Gewichte auf?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Nach dem Gebrauch müssen die Mitglieder die Gewichte selbst an ihren Platz räumen." },
      { id: 4, question: "Darf man während des Trainings telefonieren?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Das Telefonieren auf der Trainingsfläche ist nicht gestattet." },
      { id: 5, question: "Darf man in der Umkleidekabine telefonieren?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Zum Telefonieren soll man in die Umkleidekabine oder den Eingangsbereich gehen." },
      { id: 6, question: "Kann man am Mittwoch um 22:30 Uhr noch trainieren?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Unter der Woche schließt das Studio erst um 23 Uhr." },
      { id: 7, question: "Ist das Studio am Sonntag bis 23 Uhr geöffnet?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Am Wochenende schließt das Studio bereits um 20 Uhr." }
    ]
  },
  {
    id: "lesen-jn-3",
    title: "Teil 3: Hausordnung für Studentenwohnheim",
    level: "B1",
    topic: "Wohnen & Regeln",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Hausordnung für alle Bewohner:
1. Ruhezeiten: Von 22:00 Uhr bis 07:00 Uhr sowie sonntags ganztägig ist Lärm zu vermeiden. Musik darf nur in Zimmerlautstärke gehört werden.
2. Gemeinschaftsküche: Jeder Bewohner muss sein eigenes Geschirr nach dem Essen sofort abwaschen. Der Herd ist nach Benutzung zu reinigen.
3. Müll: Bitte bringen Sie Ihren Müll regelmäßig in die Container im Hof. Es ist verboten, Müllbeutel im Flur abzustellen.
4. Haustiere: Das Halten von Hunden und Katzen ist in den Zimmern strikt verboten. Kleine Tiere (wie Fische) sind nach Absprache erlaubt.
5. Fahrräder: Fahrräder dürfen nicht im Hausflur stehen. Bitte nutzen Sie den Fahrradkeller.`,
    questions: [
      { id: 1, question: "Darf man am Sonntagabend laut Musik hören?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sonntags ist ganztägig Lärm zu vermeiden." },
      { id: 2, question: "Wird das Geschirr von einer Putzfrau abgewaschen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Jeder Bewohner muss sein eigenes Geschirr sofort abwaschen." },
      { id: 3, question: "Darf man Müllbeutel kurz im Flur abstellen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Es ist verboten, Müllbeutel im Flur abzustellen." },
      { id: 4, question: "Stehen die Müllcontainer im Gebäude?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Die Container befinden sich im Hof (also draußen)." },
      { id: 5, question: "Sind Hunde im Wohnheim erlaubt?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Das Halten von Hunden und Katzen ist strikt verboten." },
      { id: 6, question: "Sind Fische im Aquarium erlaubt?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Kleine Tiere wie Fische sind nach Absprache erlaubt." },
      { id: 7, question: "Dürfen Fahrräder im Flur parken?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Fahrräder dürfen nicht im Hausflur stehen, sondern im Fahrradkeller." }
    ]
  }
];

LESEN_EXERCISES.push(...LESEN_EXERCISES_T1, ...LESEN_EXERCISES_T2, ...LESEN_EXERCISES_T3);
