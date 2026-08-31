import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T3: ReadingExercise[] = [
  {
    id: "lesen-ma-1",
    title: "Teil 3: Sprachkurse und Weiterbildung",
    level: "B1",
    topic: "Bildung & Sprachen",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F aus verschiedenen Medien.
Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie "X".

Anzeigen:

A) Sprachenzentrum City: Englisch, Spanisch, Französisch! Neue Abendkurse für Anfänger und Fortgeschrittene. Beginn: jeden ersten Montag im Monat. 18:00 - 20:30 Uhr. Anmeldung online.
B) Job-Coaching Meier: Sie suchen Arbeit? Wir helfen Ihnen bei der Bewerbung, trainieren das Vorstellungsgespräch und optimieren Ihren Lebenslauf. Individuelles Training, auch am Wochenende.
C) Sprachschule Lingua: Intensivkurse Deutsch als Fremdsprache (A1-C1). Tägliche Kurse von 9:00 - 13:00 Uhr. Vorbereitung auf telc und Goethe-Zertifikate. Nur Vormittags!
D) VHS Computerkurs: "Computer für Senioren". Lernen Sie ganz entspannt den Umgang mit dem Internet, E-Mails und Textverarbeitung. Jeden Dienstagnachmittag.
E) Tandem-Partner gesucht: Ich (Spanier, 25) suche jemanden, der mit mir Deutsch spricht. Biete dafür Spanisch. Treffen 1-2 Mal pro Woche auf einen Kaffee.
F) Volkshochschule: Wochenend-Workshop "Kreatives Schreiben". Sie schreiben gerne Geschichten? Lernen Sie Techniken für bessere Texte. Samstag und Sonntag, 10 - 16 Uhr.`,
    questions: [
      { id: 1, question: "Maria arbeitet Vollzeit bis 17 Uhr und möchte ihr Englisch verbessern.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "A", explanation: "Anzeige A bietet Abendkurse ab 18:00 Uhr für Englisch an, was perfekt für Vollzeitarbeitende ist." },
      { id: 2, question: "Carlos möchte sich auf die Deutsch-B1-Prüfung vorbereiten. Er hat den ganzen Tag Zeit.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "C", explanation: "Anzeige C bietet Intensivkurse am Vormittag und bereitet auf Goethe-Zertifikate vor." },
      { id: 3, question: "Herr Schmidt ist 70 Jahre alt und möchte lernen, wie man E-Mails schreibt.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "D", explanation: "Anzeige D richtet sich an Senioren und lehrt E-Mails und Internet." },
      { id: 4, question: "Lena möchte in ihrer Freizeit kostenlos Spanisch üben und dafür beim Deutschlernen helfen.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "E", explanation: "Anzeige E ist ein Tandem-Angebot für Spanisch und Deutsch." },
      { id: 5, question: "Julian sucht einen neuen Job und braucht Hilfe beim Schreiben des Lebenslaufs.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "B", explanation: "Anzeige B hilft bei Bewerbungen und optimiert Lebensläufe." }
    ]
  },
  {
    id: "lesen-ma-2",
    title: "Teil 3: Freizeit und Sportangebote",
    level: "B1",
    topic: "Freizeit & Sport",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F aus verschiedenen Medien.
Welche Anzeige passt zu welcher Situation? Wählen Sie "X", wenn es keine passende Anzeige gibt.

Anzeigen:

A) Yoga im Park: Entspannen Sie sich an der frischen Luft! Jeden Sonntagmorgen um 9 Uhr im Stadtpark. Bitte eigene Matte mitbringen. Kostenlos!
B) Fitness-Studio "Muskelschmiede": Jetzt Mitglied werden! Gerätetraining, Sauna und viele Kurse. Geöffnet 24 Stunden, 7 Tage die Woche. Studentenrabatt 20%.
C) Schwimmbad Wasserwelt: Großes Sportbecken, Kinderbecken und Rutsche. Täglich geöffnet von 8 bis 20 Uhr. Familienkarten für 15 Euro.
D) Tennisclub Blau-Weiß: Wir suchen neue Mitglieder! Schnupperkurs für Anfänger jeden Mittwochabend. Schläger können geliehen werden.
E) Tanzschule Rhythmus: Salsa, Tango, Walzer. Neue Kurse für Paare beginnen nächsten Monat. Anmeldung nur paarweise möglich!
F) Kletterhalle "Gipfelstürmer": Bouldern und Klettern für alle Niveaus. Ausrüstung kann gemietet werden. Täglich 10 bis 22 Uhr.`,
    questions: [
      { id: 1, question: "Tim und Sarah sind ein Paar und möchten einen Tanzkurs machen.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "E", explanation: "Anzeige E bietet Kurse für Paare an." },
      { id: 2, question: "Lukas ist Student und möchte nachts trainieren, weil er tagsüber arbeitet.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "B", explanation: "Anzeige B ist 24 Stunden geöffnet und bietet Studentenrabatt." },
      { id: 3, question: "Familie Müller (Eltern und zwei Kinder) möchte am Wochenende etwas gemeinsam im Wasser machen.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "C", explanation: "Anzeige C bietet ein Schwimmbad mit Kinderbecken und Familienkarten." },
      { id: 4, question: "Anna sucht eine Sportart, die sie draußen machen kann, möchte aber kein Geld ausgeben.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "A", explanation: "Anzeige A ist Yoga im Park und komplett kostenlos." },
      { id: 5, question: "Max möchte lernen, wie man Fußball spielt, hat aber noch nie gespielt.", options: ["A", "B", "C", "D", "E", "F", "X"], correct: "X", explanation: "Keine der Anzeigen bietet Fußball an. Daher X." }
    ]
  }
];
