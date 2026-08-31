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
    title: "Teil 2: Die 4-Tage-Woche in Deutschland",
    level: "B1",
    topic: "Arbeit & Beruf",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Wirtschaftsblatt: Immer mehr deutsche Unternehmen testen ein neues Arbeitsmodell: die 4-Tage-Woche bei vollem Lohnausgleich. Laut einer aktuellen Studie der Universität Münster haben bereits über 150 Firmen in Deutschland dieses Modell eingeführt.
Die Ergebnisse des ersten Testjahres sind überraschend positiv. Obwohl die Mitarbeiter einen Tag weniger arbeiten, ist die Produktion in 80 Prozent der Firmen gleich geblieben oder sogar leicht gestiegen. Viele Angestellte berichten von weniger Stress und einer besseren Balance zwischen Familie und Beruf. Experten warnen jedoch, dass dieses Modell nicht für alle Branchen geeignet ist, insbesondere nicht für Krankenhäuser oder die Gastronomie, wo rund um die Uhr Personal benötigt wird.`,
    questions: [
      { id: 1, question: "Was ist das neue Arbeitsmodell?", options: ["A) 4 Tage arbeiten, aber weniger Geld verdienen.", "B) 4 Tage arbeiten und das gleiche Geld verdienen.", "C) 5 Tage arbeiten und mehr Urlaub bekommen."], correct: "B) 4 Tage arbeiten und das gleiche Geld verdienen.", explanation: "Im Text steht: 'die 4-Tage-Woche bei vollem Lohnausgleich'." },
      { id: 2, question: "Wie viele Firmen machen laut Studie schon mit?", options: ["A) Etwa 50 Firmen.", "B) Über 150 Firmen.", "C) 80 Prozent aller Firmen."], correct: "B) Über 150 Firmen.", explanation: "Laut einer aktuellen Studie... haben bereits über 150 Firmen... dieses Modell eingeführt." },
      { id: 3, question: "Was passierte mit der Produktion in den meisten Firmen?", options: ["A) Sie ist stark gesunken.", "B) Sie ist gleich geblieben oder gestiegen.", "C) Sie hat sich verdoppelt."], correct: "B) Sie ist gleich geblieben oder gestiegen.", explanation: "...ist die Produktion in 80 Prozent der Firmen gleich geblieben oder sogar leicht gestiegen." },
      { id: 4, question: "Welchen Vorteil nennen viele Mitarbeiter?", options: ["A) Sie haben weniger Stress.", "B) Sie verdienen mehr Geld.", "C) Sie bekommen einen Firmenwagen."], correct: "A) Sie haben weniger Stress.", explanation: "Viele Angestellte berichten von weniger Stress..." },
      { id: 5, question: "Für wen ist das Modell laut Experten nicht gut?", options: ["A) Für Büromitarbeiter.", "B) Für Menschen mit Familie.", "C) Für Krankenhäuser und Restaurants."], correct: "C) Für Krankenhäuser und Restaurants.", explanation: "Experten warnen jedoch, dass dieses Modell nicht für alle Branchen geeignet ist, insbesondere nicht für Krankenhäuser oder die Gastronomie..." },
      { id: 6, question: "Was ist die Hauptaussage des Textes?", options: ["A) Die 4-Tage-Woche funktioniert gut, aber nicht überall.", "B) Niemand in Deutschland möchte mehr arbeiten.", "C) Alle Firmen in Deutschland müssen das Modell übernehmen."], correct: "A) Die 4-Tage-Woche funktioniert gut, aber nicht überall.", explanation: "Der Text zeigt, dass es in vielen Firmen gut funktioniert (positiv), aber Experten warnen, dass es nicht für alle Branchen passt." }
    ]
  },
  {
    id: "lesen-mc-2",
    title: "Teil 2: Immer mehr Erwachsene lernen Sprachen",
    level: "B1",
    topic: "Bildung & Sprachen",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Bildung aktuell: Nicht nur Kinder und Jugendliche, sondern auch immer mehr Erwachsene in Deutschland drücken wieder die Schulbank. Volkshochschulen (VHS) melden für dieses Jahr einen Rekord bei den Anmeldungen für Fremdsprachenkurse.
Der Grund dafür ist oft der Beruf: Viele Firmen arbeiten heute international und erwarten von ihren Mitarbeitern gute Englisch- oder Spanischkenntnisse. Aber auch das Reisen spielt eine Rolle. Immer mehr Menschen über 50 Jahre lernen Sprachen wie Italienisch oder Französisch, um im Urlaub besser mit Einheimischen sprechen zu können. Um dem Trend gerecht zu werden, bieten die Schulen nun auch vermehrt Online-Kurse am Wochenende an.`,
    questions: [
      { id: 1, question: "Wer lernt laut dem Text wieder mehr Sprachen?", options: ["A) Nur Kinder.", "B) Erwachsene in Deutschland.", "C) Nur Studenten."], correct: "B) Erwachsene in Deutschland.", explanation: "Der Text sagt: '...auch immer mehr Erwachsene in Deutschland drücken wieder die Schulbank'." },
      { id: 2, question: "Wo gibt es besonders viele neue Anmeldungen?", options: ["A) An Universitäten.", "B) An Volkshochschulen (VHS).", "C) In privaten Sprachschulen im Ausland."], correct: "B) An Volkshochschulen (VHS).", explanation: "Volkshochschulen (VHS) melden für dieses Jahr einen Rekord..." },
      { id: 3, question: "Warum lernen viele jüngere Erwachsene Sprachen?", options: ["A) Weil sie im Ausland studieren wollen.", "B) Wegen ihres Berufs (die Firmen erwarten es).", "C) Weil sie auswandern möchten."], correct: "B) Wegen ihres Berufs (die Firmen erwarten es).", explanation: "Der Grund dafür ist oft der Beruf: Viele Firmen... erwarten von ihren Mitarbeitern gute...kenntnisse." },
      { id: 4, question: "Welchen Grund haben viele Menschen über 50 Jahre?", options: ["A) Sie wollen sich im Urlaub mit Einheimischen unterhalten.", "B) Sie wollen eine neue Arbeit finden.", "C) Sie möchten das Gehirn trainieren."], correct: "A) Sie wollen sich im Urlaub mit Einheimischen unterhalten.", explanation: "...um im Urlaub besser mit Einheimischen sprechen zu können." },
      { id: 5, question: "Welche Sprachen werden von den Älteren oft gelernt?", options: ["A) Englisch und Spanisch.", "B) Italienisch und Französisch.", "C) Chinesisch und Japanisch."], correct: "B) Italienisch und Französisch.", explanation: "Immer mehr Menschen über 50 Jahre lernen Sprachen wie Italienisch oder Französisch..." },
      { id: 6, question: "Wie reagieren die Schulen auf den Trend?", options: ["A) Sie machen die Kurse billiger.", "B) Sie bieten mehr Online-Kurse am Wochenende an.", "C) Sie bauen neue Gebäude."], correct: "B) Sie bieten mehr Online-Kurse am Wochenende an.", explanation: "Um dem Trend gerecht zu werden, bieten die Schulen nun auch vermehrt Online-Kurse am Wochenende an." }
    ]
  },
  {
    id: "lesen-mc-3",
    title: "Teil 2: Ökotourismus in den Alpen",
    level: "B1",
    topic: "Reisen & Umwelt",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Reisemagazin: Der Tourismus in den Alpen verändert sich. Immer mehr Urlauber interessieren sich für sogenannten "Ökotourismus". Statt in riesigen Hotels mit Poollandschaften zu übernachten, wählen viele Gäste kleine Bio-Bauernhöfe oder klimaneutrale Pensionen.
Diese neue Art des Reisens schont nicht nur die Natur, sondern stärkt auch die lokale Wirtschaft. Die Touristen kaufen Käse direkt beim Bauernhof und nutzen den öffentlichen Nahverkehr statt des eigenen Autos. Einige Gemeinden in Bayern haben deshalb begonnen, kostenlose Bustickets für Touristen anzubieten. Experten glauben, dass dieser umweltfreundliche Trend in den nächsten Jahren weiter wachsen wird, da die Menschen bewusster leben möchten.`,
    questions: [
      { id: 1, question: "Was ist das Hauptthema des Artikels?", options: ["A) Der Bau von großen Hotels.", "B) Umweltfreundlicher Tourismus in den Alpen.", "C) Eine neue Käsesorte aus Bayern."], correct: "B) Umweltfreundlicher Tourismus in den Alpen.", explanation: "Es geht um Ökotourismus in den Alpen." },
      { id: 2, question: "Wo schlafen viele Touristen lieber?", options: ["A) Auf kleinen Bio-Bauernhöfen.", "B) Im Auto.", "C) In großen Hotels mit Pools."], correct: "A) Auf kleinen Bio-Bauernhöfen.", explanation: "...wählen viele Gäste kleine Bio-Bauernhöfe oder klimaneutrale Pensionen." },
      { id: 3, question: "Wem hilft der Ökotourismus laut Text?", options: ["A) Nur der Natur.", "B) Nur den großen Firmen.", "C) Der Natur und der lokalen Wirtschaft."], correct: "C) Der Natur und der lokalen Wirtschaft.", explanation: "Diese neue Art des Reisens schont nicht nur die Natur, sondern stärkt auch die lokale Wirtschaft." },
      { id: 4, question: "Woher bekommen die Touristen ihren Käse?", options: ["A) Aus dem Supermarkt.", "B) Direkt vom Bauernhof.", "C) Sie bringen ihn von zu Hause mit."], correct: "B) Direkt vom Bauernhof.", explanation: "Die Touristen kaufen Käse direkt beim Bauernhof..." },
      { id: 5, question: "Was bekommen Touristen in einigen bayerischen Gemeinden geschenkt?", options: ["A) Ein kostenloses Busticket.", "B) Ein kostenloses Frühstück.", "C) Einen Mietwagen."], correct: "A) Ein kostenloses Busticket.", explanation: "Einige Gemeinden... haben begonnen, kostenlose Bustickets für Touristen anzubieten." },
      { id: 6, question: "Wie sehen Experten die Zukunft dieses Trends?", options: ["A) Sie denken, er wird bald enden.", "B) Sie glauben, er wird weiter wachsen.", "C) Sie glauben, er ist zu teuer."], correct: "B) Sie glauben, er wird weiter wachsen.", explanation: "Experten glauben, dass dieser umweltfreundliche Trend in den nächsten Jahren weiter wachsen wird..." }
    ]
  }
];

LESEN_EXERCISES.push(...LESEN_EXERCISES_T1, ...LESEN_EXERCISES_T2, ...LESEN_EXERCISES_T3, ...LESEN_EXERCISES_T4, ...LESEN_EXERCISES_T5);
