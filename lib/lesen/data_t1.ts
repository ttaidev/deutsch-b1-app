import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T1: ReadingExercise[] = [
  {
    id: "lesen-tf-4",
    title: "Teil 1: Beschwerde über Lärm",
    level: "B1",
    topic: "Wohnen & Nachbarn",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Liebe Nachbarn,
ich möchte mich bei Ihnen entschuldigen. Gestern Abend habe ich meinen 30. Geburtstag gefeiert und die Musik war leider etwas zu laut. Ich weiß, dass viele von Ihnen früh aufstehen müssen, um zur Arbeit zu gehen. Es war nicht meine Absicht, Sie zu stören. Als kleine Entschuldigung habe ich heute Nachmittag einen Kuchen gebacken. Sie sind herzlich eingeladen, ab 16 Uhr auf ein Stück Kuchen und eine Tasse Kaffee zu mir in den 2. Stock zu kommen. Ich hoffe, Sie nehmen meine Entschuldigung an.
Viele Grüße,
Julia (Wohnung 8)`,
    questions: [
      { id: 1, question: "Julia hat gestern eine Party gefeiert.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie hat gestern Abend ihren 30. Geburtstag gefeiert." },
      { id: 2, question: "Die Nachbarn haben sich über den Lärm beschwert.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das steht nicht im Text. Julia entschuldigt sich von sich aus." },
      { id: 3, question: "Julia hat Kuchen im Supermarkt gekauft.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie hat den Kuchen selbst gebacken ('habe ich... einen Kuchen gebacken')." },
      { id: 4, question: "Die Nachbarn sind am Nachmittag eingeladen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sind ab 16 Uhr (Nachmittag) eingeladen." },
      { id: 5, question: "Julia wohnt im Erdgeschoss.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie wohnt im 2. Stock." },
      { id: 6, question: "Es gibt bei Julia auch etwas zu trinken.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie lädt auf ein Stück Kuchen und eine Tasse Kaffee ein." }
    ]
  },
  {
    id: "lesen-tf-5",
    title: "Teil 1: Urlaub in Italien",
    level: "B1",
    topic: "Reisen & Urlaub",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Hallo Peter,
viele Grüße aus Rom! Meine Frau und ich sind am Montag hier angekommen und das Wetter ist traumhaft. Jeden Tag über 30 Grad und viel Sonnenschein. Wir haben schon das Kolosseum besichtigt und sehr viel Pizza gegessen. Leider haben wir gestern am Strand unsere Kamera verloren, deshalb können wir keine Fotos mehr machen. Zum Glück haben wir noch unsere Handys. Am Freitag fahren wir mit dem Zug weiter nach Neapel und bleiben dort für drei Tage, bevor wir zurück nach Deutschland fliegen.
Bis bald,
Dein Thomas`,
    questions: [
      { id: 1, question: "Thomas macht mit seiner Frau Urlaub in Italien.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Er sendet 'Grüße aus Rom' und sagt 'Meine Frau und ich...'." },
      { id: 2, question: "Das Wetter in Rom ist schlecht.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Wetter ist traumhaft (über 30 Grad)." },
      { id: 3, question: "Sie haben die Kamera im Hotel vergessen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie haben die Kamera am Strand verloren." },
      { id: 4, question: "Thomas kann gar keine Fotos mehr machen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt: 'Zum Glück haben wir noch unsere Handys', womit man auch fotografieren kann." },
      { id: 5, question: "Sie reisen mit dem Zug nach Neapel.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Am Freitag fahren wir mit dem Zug weiter nach Neapel." },
      { id: 6, question: "Sie fliegen von Neapel nach Deutschland zurück.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Er sagt: '...bleiben dort (in Neapel) für drei Tage, bevor wir zurück nach Deutschland fliegen'." }
    ]
  },
  {
    id: "lesen-tf-6",
    title: "Teil 1: Anmeldung zum Fitnessstudio",
    level: "B1",
    topic: "Sport & Freizeit",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Liebe Anna,
weißt du noch, dass wir uns im neuen Fitnessstudio anmelden wollten? Ich war gestern dort und habe mich informiert. Es gibt im Moment ein tolles Angebot: Wenn wir uns zu zweit anmelden, zahlen wir im ersten halben Jahr nur die Hälfte! Das Studio ist riesig und bietet sogar Yogakurse am Abend an. Außerdem gibt es eine kleine Sauna. Der Vertrag läuft normalerweise für 12 Monate. Hättest du am Mittwochabend Zeit, mit mir hinzugehen? Dann könnten wir uns alles ansehen und gleich den Vertrag unterschreiben.
Deine Lisa`,
    questions: [
      { id: 1, question: "Lisa hat sich schon im Fitnessstudio angemeldet.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie hat sich nur informiert, nicht angemeldet." },
      { id: 2, question: "Es gibt einen Rabatt für Paare/Freunde.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Wenn sie sich zu zweit anmelden, zahlen sie weniger." },
      { id: 3, question: "Der Rabatt gilt für das ganze Jahr.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Rabatt gilt nur im ersten halben Jahr." },
      { id: 4, question: "Yogakurse finden nur morgens statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Studio bietet Yogakurse am Abend an." },
      { id: 5, question: "Der Vertrag muss für mindestens ein Jahr abgeschlossen werden.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Der Vertrag läuft normalerweise für 12 Monate." },
      { id: 6, question: "Lisa möchte, dass Anna am Mittwoch mitkommt.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie fragt: 'Hättest du am Mittwochabend Zeit, mit mir hinzugehen?'" }
    ]
  },
  {
    id: "lesen-tf-7",
    title: "Teil 1: Krankheit des Lehrers",
    level: "B1",
    topic: "Schule & Krankheit",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Liebe Kursteilnehmer des B1-Kurses,
leider muss ich Ihnen mitteilen, dass Herr Müller, Ihr Deutschlehrer, diese Woche wegen einer Grippe krankgeschrieben ist. Der Unterricht am Dienstag und Donnerstag fällt deshalb aus. Wir versuchen, für die nächste Woche eine Vertretung zu organisieren, falls Herr Müller noch nicht gesund ist. Bitte nutzen Sie die freie Zeit, um die Hausaufgaben auf Seite 45 im Arbeitsbuch zu erledigen. Am Montag können Sie Ihre Ergebnisse dann im Sekretariat abgeben. Wir bitten um Ihr Verständnis und wünschen Herrn Müller gute Besserung.
Das Sprachschul-Team`,
    questions: [
      { id: 1, question: "Herr Müller hat einen Unfall gehabt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er ist wegen einer Grippe krankgeschrieben." },
      { id: 2, question: "In dieser Woche gibt es keinen Deutschunterricht.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Der Unterricht am Dienstag und Donnerstag fällt aus." },
      { id: 3, question: "Es gibt diese Woche schon eine Vertretung.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Sprachschule versucht erst für die nächste Woche eine Vertretung zu organisieren." },
      { id: 4, question: "Die Schüler sollen zu Hause üben.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sollen die Hausaufgaben auf Seite 45 im Arbeitsbuch erledigen." },
      { id: 5, question: "Die Hausaufgaben werden am Montag kontrolliert.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Am Montag können die Ergebnisse im Sekretariat abgegeben werden." },
      { id: 6, question: "Herr Müller kommt sicher nächste Woche wieder.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Es ist nicht sicher ('falls Herr Müller noch nicht gesund ist')." }
    ]
  },
  {
    id: "lesen-tf-8",
    title: "Teil 1: Einladung zum Vorstellungsgespräch",
    level: "B1",
    topic: "Arbeit & Beruf",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Sehr geehrte Frau Nguyen,
vielen Dank für Ihre Bewerbung als Verkäuferin in unserer Bäckerei. Ihre Unterlagen haben uns sehr gefallen. Wir möchten Sie gerne persönlich kennenlernen und laden Sie zu einem Vorstellungsgespräch ein. Bitte kommen Sie am Donnerstag, den 12. Mai, um 10:00 Uhr in unsere Hauptfiliale am Marktplatz. Bringen Sie bitte noch ein aktuelles Gesundheitszeugnis mit. Wenn Ihnen der Termin nicht passt, rufen Sie uns bitte unter der Nummer 030-123456 an. Wir freuen uns auf das Gespräch mit Ihnen!
Mit freundlichen Grüßen,
Klaus Schmidt (Personalchef)`,
    questions: [
      { id: 1, question: "Frau Nguyen hat sich als Bäckerin beworben.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie hat sich als Verkäuferin beworben." },
      { id: 2, question: "Herr Schmidt findet die Bewerbung von Frau Nguyen gut.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Er sagt: 'Ihre Unterlagen haben uns sehr gefallen'." },
      { id: 3, question: "Das Gespräch findet am Nachmittag statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Gespräch ist um 10:00 Uhr, also am Vormittag." },
      { id: 4, question: "Frau Nguyen soll ein Dokument mitbringen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie soll ein aktuelles Gesundheitszeugnis mitbringen." },
      { id: 5, question: "Frau Nguyen kann den Termin nicht mehr ändern.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Wenn der Termin nicht passt, kann sie anrufen." },
      { id: 6, question: "Das Gespräch findet im Büro von Herrn Schmidt statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Gespräch findet in der Hauptfiliale am Marktplatz statt." }
    ]
  },
  {
    id: "lesen-tf-9",
    title: "Teil 1: Problem mit dem Internet",
    level: "B1",
    topic: "Technik & Alltag",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Hallo Felix,
kannst du mir helfen? Mein Internet zu Hause funktioniert seit gestern nicht mehr. Ich habe schon den Router neu gestartet, aber das hat nichts gebracht. Die Lichter am Gerät blinken rot. Ich brauche das Internet dringend für mein Studium, weil ich am Wochenende eine wichtige Hausarbeit schreiben muss. Du kennst dich doch mit Computern aus, oder? Hast du vielleicht am Freitagabend kurz Zeit, bei mir vorbeizukommen und dir das anzusehen? Ich koche uns als Dankeschön auch dein Lieblingsessen.
Liebe Grüße,
Sophie`,
    questions: [
      { id: 1, question: "Sophies Internet ist seit einer Woche kaputt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Internet funktioniert seit gestern nicht mehr." },
      { id: 2, question: "Sophie hat versucht, das Problem selbst zu lösen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie hat den Router neu gestartet ('schon den Router neu gestartet')." },
      { id: 3, question: "Sophie braucht das Internet für ihren Job.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie braucht das Internet für ihr Studium (Hausarbeit schreiben)." },
      { id: 4, question: "Felix arbeitet bei einer Computerfirma.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das steht nicht im Text. Sie sagt nur: 'Du kennst dich doch mit Computern aus'." },
      { id: 5, question: "Felix soll am Freitag zu Sophie kommen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie fragt, ob er am Freitagabend Zeit hat, vorbeizukommen." },
      { id: 6, question: "Sophie lädt Felix ins Restaurant ein.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Ich koche uns als Dankeschön auch dein Lieblingsessen'." }
    ]
  },
  {
    id: "lesen-tf-10",
    title: "Teil 1: Einladung zur Hochzeit",
    level: "B1",
    topic: "Familie & Feste",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Liebe Freunde und Familie,
wir trauen uns! Nach fünf gemeinsamen Jahren möchten wir endlich heiraten. Unsere Hochzeit findet am 20. August um 14 Uhr in der St. Martinskirche statt. Danach feiern wir alle zusammen in der Gaststätte "Zum Goldenen Löwen". Für gutes Essen, Getränke und Live-Musik ist gesorgt. Über Geschenke müsst ihr euch keine Gedanken machen – da unser Haus schon voll ist, freuen wir uns am meisten über einen kleinen Beitrag für unsere Flitterwochen in Spanien. Bitte gebt uns bis Ende Juli Bescheid, ob ihr kommt.
Wir freuen uns auf euch!
Laura und Tim`,
    questions: [
      { id: 1, question: "Laura und Tim kennen sich erst seit kurzem.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sind seit fünf Jahren zusammen ('Nach fünf gemeinsamen Jahren')." },
      { id: 2, question: "Die Trauung ist in einer Kirche.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Die Hochzeit findet in der St. Martinskirche statt." },
      { id: 3, question: "Das Fest findet im Freien statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie feiern in der Gaststätte 'Zum Goldenen Löwen'." },
      { id: 4, question: "Laura und Tim wünschen sich viele kleine Geschenke.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie wünschen sich Geld ('kleinen Beitrag') für ihre Flitterwochen." },
      { id: 5, question: "Das Paar fliegt nach der Hochzeit nach Spanien.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie machen Flitterwochen in Spanien." },
      { id: 6, question: "Die Gäste müssen bis August antworten.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie müssen bis Ende Juli Bescheid geben." }
    ]
  }
];
