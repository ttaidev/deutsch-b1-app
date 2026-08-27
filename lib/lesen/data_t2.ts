import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T2: ReadingExercise[] = [
  {
    id: "lesen-mc-4",
    title: "Teil 2: Neuer Computerkurs",
    level: "B1",
    topic: "Technik & Bildung",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Liebe Vereinsmitglieder,
ab dem nächsten Monat bieten wir in unserem Vereinshaus einen Computerkurs für Senioren an. Der Kurs richtet sich an Anfänger, die lernen möchten, wie man das Internet nutzt, E-Mails schreibt und Fotos auf dem Computer speichert.
Der Kurs findet jeden Dienstag von 10:00 bis 11:30 Uhr statt und dauert insgesamt sechs Wochen. Die Kursgebühr beträgt 40 Euro. Es stehen acht Computer zur Verfügung, Sie müssen also keinen eigenen Laptop mitbringen. Wenn Sie sich anmelden möchten, rufen Sie uns bitte unter der Nummer 9876543 an oder tragen Sie sich in die Liste am schwarzen Brett im Flur ein.`,
    questions: [
      { id: 1, question: "Für wen ist der Computerkurs gedacht?", options: ["A) Für junge Leute.", "B) Für Senioren ohne Vorkenntnisse.", "C) Für Computer-Experten."], correct: "B) Für Senioren ohne Vorkenntnisse.", explanation: "Der Kurs richtet sich an Senioren, die Anfänger sind." },
      { id: 2, question: "Was lernt man in dem Kurs?", options: ["A) Wie man einen Computer repariert.", "B) Wie man E-Mails schreibt und das Internet nutzt.", "C) Wie man Webseiten programmiert."], correct: "B) Wie man E-Mails schreibt und das Internet nutzt.", explanation: "Man lernt, das Internet zu nutzen, E-Mails zu schreiben und Fotos zu speichern." },
      { id: 3, question: "Wann findet der Kurs statt?", options: ["A) Am Wochenende.", "B) Jeden Vormittag.", "C) Jeden Dienstagvormittag."], correct: "C) Jeden Dienstagvormittag.", explanation: "Jeden Dienstag von 10:00 bis 11:30 Uhr (Vormittag)." },
      { id: 4, question: "Wie teuer ist der Kurs?", options: ["A) Er ist kostenlos.", "B) Er kostet 40 Euro pro Woche.", "C) Er kostet 40 Euro insgesamt."], correct: "C) Er kostet 40 Euro insgesamt.", explanation: "Die Kursgebühr beträgt 40 Euro für den gesamten Kurs." },
      { id: 5, question: "Muss man einen eigenen Laptop mitbringen?", options: ["A) Ja, unbedingt.", "B) Nein, es gibt Computer im Kursraum.", "C) Nur, wenn man Fotos speichern will."], correct: "B) Nein, es gibt Computer im Kursraum.", explanation: "Es stehen acht Computer zur Verfügung, man muss keinen eigenen Laptop mitbringen." },
      { id: 6, question: "Wie kann man sich anmelden?", options: ["A) Per E-Mail oder Telefon.", "B) Telefonisch oder über eine Liste im Flur.", "C) Nur persönlich beim Kursleiter."], correct: "B) Telefonisch oder über eine Liste im Flur.", explanation: "Man kann anrufen oder sich in die Liste am schwarzen Brett eintragen." }
    ]
  },
  {
    id: "lesen-mc-5",
    title: "Teil 2: Ausflug zum Freizeitpark",
    level: "B1",
    topic: "Freizeit & Familie",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Liebe Eltern der Klasse 5a,
als Abschluss des Schuljahres planen wir am 20. Juli einen Ausflug in den Freizeitpark 'Wunderland'. Wir treffen uns morgens um 8:00 Uhr pünktlich vor der Schule. Der Bus fährt um 8:15 Uhr ab. Wir werden den ganzen Tag im Park verbringen und gegen 17:00 Uhr wieder an der Schule ankommen.
Die Kosten für die Busfahrt und den Eintritt betragen insgesamt 35 Euro pro Kind. Bitte geben Sie Ihrem Kind das Geld passend im Umschlag bis spätestens nächsten Freitag mit. Jedes Kind sollte einen Rucksack mit ausreichend Essen und Trinken für den Tag mitbringen. Wir benötigen noch zwei Elternteile, die uns begleiten können. Bitte melden Sie sich bei mir.
Herzliche Grüße,
Ihre Klassenlehrerin Frau Sommer`,
    questions: [
      { id: 1, question: "Warum macht die Klasse einen Ausflug?", options: ["A) Weil ein Kind Geburtstag hat.", "B) Weil das Schuljahr zu Ende geht.", "C) Weil sie einen Wettbewerb gewonnen haben."], correct: "B) Weil das Schuljahr zu Ende geht.", explanation: "Der Ausflug ist 'als Abschluss des Schuljahres' geplant." },
      { id: 2, question: "Wann fährt der Bus ab?", options: ["A) Um 8:00 Uhr.", "B) Um 8:15 Uhr.", "C) Um 17:00 Uhr."], correct: "B) Um 8:15 Uhr.", explanation: "Wir treffen uns um 8:00 Uhr... Der Bus fährt um 8:15 Uhr ab." },
      { id: 3, question: "Wann sind die Kinder wieder zurück?", options: ["A) Am Mittag.", "B) Am späten Nachmittag.", "C) Am späten Abend."], correct: "B) Am späten Nachmittag.", explanation: "Sie kommen gegen 17:00 Uhr wieder an der Schule an (später Nachmittag)." },
      { id: 4, question: "Wie wird der Ausflug bezahlt?", options: ["A) Das Geld wird überwiesen.", "B) Die Kinder bringen das Geld in die Schule mit.", "C) Die Schule bezahlt alles."], correct: "B) Die Kinder bringen das Geld in die Schule mit.", explanation: "Geben Sie Ihrem Kind das Geld passend im Umschlag mit." },
      { id: 5, question: "Was sollen die Kinder zum Essen mitnehmen?", options: ["A) Nichts, es gibt Essen im Park.", "B) Nur etwas zu trinken.", "C) Genug Essen und Trinken für den ganzen Tag."], correct: "C) Genug Essen und Trinken für den ganzen Tag.", explanation: "Jedes Kind sollte einen Rucksack mit ausreichend Essen und Trinken mitbringen." },
      { id: 6, question: "Was sucht Frau Sommer noch?", options: ["A) Einen neuen Busfahrer.", "B) Zwei Eltern, die beim Ausflug helfen.", "C) Eine zweite Lehrerin."], correct: "B) Zwei Eltern, die beim Ausflug helfen.", explanation: "Sie sagt: 'Wir benötigen noch zwei Elternteile, die uns begleiten können'." }
    ]
  },
  {
    id: "lesen-mc-6",
    title: "Teil 2: Neueröffnung des Schwimmbads",
    level: "B1",
    topic: "Sport & Freizeit",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Liebe Bürgerinnen und Bürger,
nach zweijähriger Umbauzeit wird unser städtisches Schwimmbad am kommenden Samstag, den 1. Juni, endlich wieder eröffnet. Das Hallenbad ist jetzt viel moderner und barrierefrei. Neu sind das große Sportbecken mit sechs Bahnen, ein beheiztes Außenbecken und ein großer Kinderbereich mit Rutsche.
Am Eröffnungstag ist der Eintritt für alle Besucher frei! Außerdem gibt es von 14 bis 16 Uhr ein besonderes Animationsprogramm für Kinder. Ab Sonntag gelten dann die normalen Eintrittspreise (Erwachsene 5 Euro, Kinder 3 Euro). Das Schwimmbad ist täglich von 8 bis 22 Uhr geöffnet.
Wir freuen uns auf Ihren Besuch!
Ihr Bäder-Team`,
    questions: [
      { id: 1, question: "Wie lange war das Schwimmbad geschlossen?", options: ["A) Zwei Monate.", "B) Zwei Jahre.", "C) Einen Monat."], correct: "B) Zwei Jahre.", explanation: "Im Text steht: 'nach zweijähriger Umbauzeit'." },
      { id: 2, question: "Welcher Bereich ist neu?", options: ["A) Die Sauna.", "B) Das Restaurant.", "C) Ein beheiztes Außenbecken."], correct: "C) Ein beheiztes Außenbecken.", explanation: "Neu sind das große Sportbecken, ein beheiztes Außenbecken und ein Kinderbereich." },
      { id: 3, question: "Was kostet der Eintritt am Samstag?", options: ["A) 5 Euro für Erwachsene.", "B) Nichts, er ist kostenlos.", "C) 3 Euro für Kinder."], correct: "B) Nichts, er ist kostenlos.", explanation: "Am Eröffnungstag ist der Eintritt für alle Besucher frei!" },
      { id: 4, question: "Was passiert am Nachmittag des Eröffnungstages?", options: ["A) Es gibt ein Programm für Kinder.", "B) Das Schwimmbad wird schon wieder geschlossen.", "C) Es gibt einen Schwimmwettbewerb."], correct: "A) Es gibt ein Programm für Kinder.", explanation: "Es gibt von 14 bis 16 Uhr ein besonderes Animationsprogramm für Kinder." },
      { id: 5, question: "Wann ist das Schwimmbad normalerweise geöffnet?", options: ["A) Nur am Wochenende.", "B) Jeden Tag von morgens bis abends.", "C) Nur am Vormittag."], correct: "B) Jeden Tag von morgens bis abends.", explanation: "Das Schwimmbad ist täglich von 8 bis 22 Uhr geöffnet." },
      { id: 6, question: "Was zahlen Kinder ab Sonntag?", options: ["A) 5 Euro.", "B) 3 Euro.", "C) Der Eintritt bleibt frei."], correct: "B) 3 Euro.", explanation: "Die normalen Eintrittspreise sind: Erwachsene 5 Euro, Kinder 3 Euro." }
    ]
  },
  {
    id: "lesen-mc-7",
    title: "Teil 2: Theater-Abonnement",
    level: "B1",
    topic: "Kultur & Kunst",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Sehr geehrte Damen und Herren,
das Stadttheater startet in die neue Spielzeit. Auch dieses Jahr bieten wir wieder unser beliebtes Theater-Abonnement an. Mit dem Abonnement können Sie fünf verschiedene Vorstellungen im Jahr besuchen und sparen dabei 25 % im Vergleich zum Einzelkauf der Tickets. Sie haben außerdem immer einen festen Sitzplatz.
Neu in dieser Saison: Das Abonnement kann jetzt auch online auf unserer Webseite bestellt werden. Alternativ können Sie das Formular ausfüllen und per Post schicken oder direkt an der Theaterkasse abgeben. Bei Fragen rufen Sie unseren Kundenservice an, der montags bis freitags von 9 bis 13 Uhr erreichbar ist.`,
    questions: [
      { id: 1, question: "Was wird in dem Text angeboten?", options: ["A) Eine Ausbildung als Schauspieler.", "B) Ein Abonnement für das Theater.", "C) Ein Job an der Theaterkasse."], correct: "B) Ein Abonnement für das Theater.", explanation: "Es geht um das 'beliebte Theater-Abonnement'." },
      { id: 2, question: "Welchen Vorteil hat das Abonnement?", options: ["A) Man darf hinter die Bühne schauen.", "B) Man kann so oft ins Theater gehen, wie man will.", "C) Es ist billiger als einzelne Tickets zu kaufen."], correct: "C) Es ist billiger als einzelne Tickets zu kaufen.", explanation: "Man spart 25 % im Vergleich zum Einzelkauf." },
      { id: 3, question: "Wie viele Vorstellungen sind im Abonnement enthalten?", options: ["A) Fünf Vorstellungen.", "B) Alle Vorstellungen im Jahr.", "C) Drei Vorstellungen."], correct: "A) Fünf Vorstellungen.", explanation: "Mit dem Abonnement können Sie fünf verschiedene Vorstellungen im Jahr besuchen." },
      { id: 4, question: "Wo sitzt man im Theater, wenn man ein Abonnement hat?", options: ["A) Immer ganz vorne.", "B) Man hat einen festen Sitzplatz.", "C) Man kann sich jeden Abend einen neuen Platz suchen."], correct: "B) Man hat einen festen Sitzplatz.", explanation: "Sie haben außerdem immer einen festen Sitzplatz." },
      { id: 5, question: "Was ist neu in dieser Saison?", options: ["A) Man kann das Abonnement online kaufen.", "B) Es gibt keine Theaterkasse mehr.", "C) Der Kundenservice ist länger geöffnet."], correct: "A) Man kann das Abonnement online kaufen.", explanation: "Neu in dieser Saison: Das Abonnement kann jetzt auch online... bestellt werden." },
      { id: 6, question: "Wann kann man den Kundenservice anrufen?", options: ["A) Am Wochenende.", "B) Jeden Tag von 9 bis 13 Uhr.", "C) Unter der Woche am Vormittag."], correct: "C) Unter der Woche am Vormittag.", explanation: "Kundenservice ist montags bis freitags von 9 bis 13 Uhr erreichbar." }
    ]
  },
  {
    id: "lesen-mc-8",
    title: "Teil 2: Das neue Stadtviertel",
    level: "B1",
    topic: "Wohnen & Umwelt",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Liebe Anwohner,
im Süden der Stadt entsteht ein komplett neues Stadtviertel: der 'Sonnenpark'. Dort sollen bis 2028 Wohnungen für rund 5.000 Menschen gebaut werden. Das Besondere an diesem Projekt ist die umweltfreundliche Planung. Alle Häuser werden mit Solarenergie beheizt und es wird viele Grünflächen geben.
Autos sind in den Straßen des Viertels nicht erlaubt. Anwohner müssen ihre Fahrzeuge in großen Parkhäusern am Rand des Viertels abstellen. Dafür werden die öffentlichen Verkehrsmittel ausgebaut und es gibt überall sichere Fahrradwege. Ein Supermarkt und eine neue Grundschule sind ebenfalls in Planung.`,
    questions: [
      { id: 1, question: "Was passiert im Süden der Stadt?", options: ["A) Ein Park wird geschlossen.", "B) Es wird ein neues Stadtviertel gebaut.", "C) Eine Universität wird eröffnet."], correct: "B) Es wird ein neues Stadtviertel gebaut.", explanation: "Es entsteht ein komplett neues Stadtviertel." },
      { id: 2, question: "Wie viele Menschen sollen dort in Zukunft wohnen?", options: ["A) Ungefähr 5.000.", "B) Mehr als 20.000.", "C) Etwa 2.000."], correct: "A) Ungefähr 5.000.", explanation: "Dort sollen... Wohnungen für rund 5.000 Menschen gebaut werden." },
      { id: 3, question: "Was ist das Besondere an dem Viertel?", options: ["A) Die Wohnungen sind extrem billig.", "B) Es ist sehr umweltfreundlich geplant.", "C) Es dürfen dort nur alte Menschen wohnen."], correct: "B) Es ist sehr umweltfreundlich geplant.", explanation: "Das Besondere an diesem Projekt ist die umweltfreundliche Planung." },
      { id: 4, question: "Darf man mit dem Auto bis vor das Haus fahren?", options: ["A) Ja, aber nur abends.", "B) Ja, jeder hat eine Garage.", "C) Nein, Autos sind in den Straßen nicht erlaubt."], correct: "C) Nein, Autos sind in den Straßen nicht erlaubt.", explanation: "Autos sind in den Straßen des Viertels nicht erlaubt." },
      { id: 5, question: "Wo müssen die Anwohner parken?", options: ["A) Auf der Straße.", "B) In Parkhäusern am Rand des Viertels.", "C) Im Zentrum der Stadt."], correct: "B) In Parkhäusern am Rand des Viertels.", explanation: "Anwohner müssen ihre Fahrzeuge in großen Parkhäusern am Rand des Viertels abstellen." },
      { id: 6, question: "Was soll im Viertel noch gebaut werden?", options: ["A) Ein Krankenhaus.", "B) Eine Grundschule und ein Supermarkt.", "C) Ein großes Kino."], correct: "B) Eine Grundschule und ein Supermarkt.", explanation: "Ein Supermarkt und eine neue Grundschule sind ebenfalls in Planung." }
    ]
  },
  {
    id: "lesen-mc-9",
    title: "Teil 2: Einladung zum Kochkurs",
    level: "B1",
    topic: "Essen & Trinken",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Hallo Susanne,
erinnerst du dich, dass wir zusammen mehr kochen lernen wollten? Ich habe einen tollen Kurs in der Volkshochschule gefunden: "Italienische Küche für Anfänger". Der Kurs geht über vier Abende, immer mittwochs von 18 bis 21 Uhr. 
Die Kursleiterin zeigt uns, wie man frische Pasta, Pizza und leckere Desserts macht. Die Zutaten besorgt die Lehrerin, aber wir müssen eine Schürze und Vorratsdosen für Reste mitbringen. Der Kurs kostet 60 Euro plus 20 Euro für die Lebensmittel. Soll ich uns anmelden? Ruf mich doch heute Abend mal an.
Liebe Grüße, 
Carolin`,
    questions: [
      { id: 1, question: "Worum geht es in der E-Mail?", options: ["A) Um eine Einladung ins Restaurant.", "B) Um einen Kochkurs.", "C) Um einen Urlaub in Italien."], correct: "B) Um einen Kochkurs.", explanation: "Carolin schreibt über einen Kurs: 'Italienische Küche für Anfänger'." },
      { id: 2, question: "Wie lange dauert der Kurs?", options: ["A) Ein ganzes Wochenende.", "B) Einen Abend.", "C) Vier Abende."], correct: "C) Vier Abende.", explanation: "Der Kurs geht über vier Abende." },
      { id: 3, question: "Wer besorgt das Essen zum Kochen (Zutaten)?", options: ["A) Carolin und Susanne.", "B) Die Kursleiterin.", "C) Jeder Teilnehmer selbst."], correct: "B) Die Kursleiterin.", explanation: "Die Zutaten besorgt die Lehrerin." },
      { id: 4, question: "Was müssen die Teilnehmer selbst mitbringen?", options: ["A) Töpfe und Pfannen.", "B) Wein und Wasser.", "C) Eine Schürze und Dosen."], correct: "C) Eine Schürze und Dosen.", explanation: "...wir müssen eine Schürze und Vorratsdosen... mitbringen." },
      { id: 5, question: "Wie viel kostet der Kurs insgesamt pro Person?", options: ["A) 60 Euro.", "B) 80 Euro.", "C) 20 Euro."], correct: "B) 80 Euro.", explanation: "60 Euro plus 20 Euro für die Lebensmittel (zusammen 80 Euro)." },
      { id: 6, question: "Was soll Susanne tun?", options: ["A) Carolin anrufen.", "B) Das Geld überweisen.", "C) Den Kurs absagen."], correct: "A) Carolin anrufen.", explanation: "Carolin schreibt: 'Ruf mich doch heute Abend mal an'." }
    ]
  },
  {
    id: "lesen-mc-10",
    title: "Teil 2: Änderung der Abholzeiten im Kindergarten",
    level: "B1",
    topic: "Familie & Alltag",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Liebe Eltern,
ab dem 1. September ändern sich unsere Öffnungszeiten. Um dem Personal mehr Zeit für Vorbereitungen zu geben, öffnet der Kindergarten morgens erst um 7:30 Uhr (bisher 7:00 Uhr). Die Abholzeit am Nachmittag ändert sich ebenfalls: Bitte holen Sie Ihre Kinder bis spätestens 16:00 Uhr ab. Für Eltern, die länger arbeiten müssen, bieten wir eine Spätbetreuung bis 17:00 Uhr an. Dies kostet allerdings 50 Euro extra pro Monat. Bitte füllen Sie das beiliegende Formular aus, wenn Sie die Spätbetreuung benötigen, und geben Sie es bis Freitag ab.
Mit freundlichen Grüßen,
Die Kita-Leitung`,
    questions: [
      { id: 1, question: "Was ändert sich im Kindergarten?", options: ["A) Das Essen.", "B) Die Öffnungszeiten.", "C) Der Ort."], correct: "B) Die Öffnungszeiten.", explanation: "Ab dem 1. September ändern sich unsere Öffnungszeiten." },
      { id: 2, question: "Warum öffnet der Kindergarten später?", options: ["A) Weil die Eltern länger schlafen wollen.", "B) Weil das Personal mehr Zeit zur Vorbereitung braucht.", "C) Weil die Kinder müde sind."], correct: "B) Weil das Personal mehr Zeit zur Vorbereitung braucht.", explanation: "Um dem Personal mehr Zeit für Vorbereitungen zu geben..." },
      { id: 3, question: "Wann müssen die meisten Kinder abgeholt werden?", options: ["A) Bis 16:00 Uhr.", "B) Bis 17:00 Uhr.", "C) Bis 15:00 Uhr."], correct: "A) Bis 16:00 Uhr.", explanation: "Bitte holen Sie Ihre Kinder bis spätestens 16:00 Uhr ab." },
      { id: 4, question: "Was gibt es für Eltern, die lange arbeiten?", options: ["A) Eine Wochenendbetreuung.", "B) Einen Fahrservice.", "C) Eine Spätbetreuung bis 17:00 Uhr."], correct: "C) Eine Spätbetreuung bis 17:00 Uhr.", explanation: "...bieten wir eine Spätbetreuung bis 17:00 Uhr an." },
      { id: 5, question: "Ist die Betreuung nach 16 Uhr kostenlos?", options: ["A) Ja.", "B) Nein, sie kostet extra.", "C) Das steht nicht im Text."], correct: "B) Nein, sie kostet extra.", explanation: "Dies kostet allerdings 50 Euro extra pro Monat." },
      { id: 6, question: "Was müssen Eltern tun, die die Spätbetreuung brauchen?", options: ["A) Sie müssen anrufen.", "B) Sie müssen ein Formular ausfüllen und abgeben.", "C) Sie müssen nichts tun."], correct: "B) Sie müssen ein Formular ausfüllen und abgeben.", explanation: "Bitte füllen Sie das beiliegende Formular aus..." }
    ]
  }
];
