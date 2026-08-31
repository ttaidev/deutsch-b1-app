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
Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie "0".

Anzeigen:

A) Sprachenzentrum City: Englisch, Spanisch, Französisch! Neue Abendkurse für Anfänger und Fortgeschrittene. Beginn: jeden ersten Montag im Monat. 18:00 - 20:30 Uhr. Anmeldung online.
B) Job-Coaching Meier: Sie suchen Arbeit? Wir helfen Ihnen bei der Bewerbung, trainieren das Vorstellungsgespräch und optimieren Ihren Lebenslauf. Individuelles Training, auch am Wochenende.
C) Sprachschule Lingua: Intensivkurse Deutsch als Fremdsprache (A1-C1). Tägliche Kurse von 9:00 - 13:00 Uhr. Vorbereitung auf telc und Goethe-Zertifikate. Nur Vormittags!
D) VHS Computerkurs: "Computer für Senioren". Lernen Sie ganz entspannt den Umgang mit dem Internet, E-Mails und Textverarbeitung. Jeden Dienstagnachmittag.
E) Tandem-Partner gesucht: Ich (Spanier, 25) suche jemanden, der mit mir Deutsch spricht. Biete dafür Spanisch. Treffen 1-2 Mal pro Woche auf einen Kaffee.
F) Volkshochschule: Wochenend-Workshop "Kreatives Schreiben". Sie schreiben gerne Geschichten? Lernen Sie Techniken für bessere Texte. Samstag und Sonntag, 10 - 16 Uhr.`,
    questions: [
      { id: 1, question: "Maria arbeitet Vollzeit bis 17 Uhr und möchte ihr Englisch verbessern.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "A", explanation: "Anzeige A bietet Abendkurse ab 18:00 Uhr für Englisch an, was perfekt für Vollzeitarbeitende ist." },
      { id: 2, question: "Carlos möchte sich auf die Deutsch-B1-Prüfung vorbereiten. Er hat den ganzen Tag Zeit.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Anzeige C bietet Intensivkurse am Vormittag und bereitet auf Goethe-Zertifikate vor." },
      { id: 3, question: "Herr Schmidt ist 70 Jahre alt und möchte lernen, wie man E-Mails schreibt.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Anzeige D richtet sich an Senioren und lehrt E-Mails und Internet." },
      { id: 4, question: "Lena möchte in ihrer Freizeit kostenlos Spanisch üben und dafür beim Deutschlernen helfen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Anzeige E ist ein Tandem-Angebot für Spanisch und Deutsch." },
      { id: 5, question: "Julian sucht einen neuen Job und braucht Hilfe beim Schreiben des Lebenslaufs.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Anzeige B hilft bei Bewerbungen und optimiert Lebensläufe." }
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
Welche Anzeige passt zu welcher Situation? Wählen Sie "0", wenn es keine passende Anzeige gibt.

Anzeigen:

A) Yoga im Park: Entspannen Sie sich an der frischen Luft! Jeden Sonntagmorgen um 9 Uhr im Stadtpark. Bitte eigene Matte mitbringen. Kostenlos!
B) Fitness-Studio "Muskelschmiede": Jetzt Mitglied werden! Gerätetraining, Sauna und viele Kurse. Geöffnet 24 Stunden, 7 Tage die Woche. Studentenrabatt 20%.
C) Schwimmbad Wasserwelt: Großes Sportbecken, Kinderbecken und Rutsche. Täglich geöffnet von 8 bis 20 Uhr. Familienkarten für 15 Euro.
D) Tennisclub Blau-Weiß: Wir suchen neue Mitglieder! Schnupperkurs für Anfänger jeden Mittwochabend. Schläger können geliehen werden.
E) Tanzschule Rhythmus: Salsa, Tango, Walzer. Neue Kurse für Paare beginnen nächsten Monat. Anmeldung nur paarweise möglich!
F) Kletterhalle "Gipfelstürmer": Bouldern und Klettern für alle Niveaus. Ausrüstung kann gemietet werden. Täglich 10 bis 22 Uhr.`,
    questions: [
      { id: 1, question: "Tim und Sarah sind ein Paar und möchten einen Tanzkurs machen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Anzeige E bietet Kurse für Paare an." },
      { id: 2, question: "Lukas ist Student und möchte nachts trainieren, weil er tagsüber arbeitet.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Anzeige B ist 24 Stunden geöffnet und bietet Studentenrabatt." },
      { id: 3, question: "Familie Müller (Eltern und zwei Kinder) möchte am Wochenende etwas gemeinsam im Wasser machen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Anzeige C bietet ein Schwimmbad mit Kinderbecken und Familienkarten." },
      { id: 4, question: "Anna sucht eine Sportart, die sie draußen machen kann, möchte aber kein Geld ausgeben.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "A", explanation: "Anzeige A ist Yoga im Park und komplett kostenlos." },
      { id: 5, question: "Max möchte lernen, wie man Fußball spielt, hat aber noch nie gespielt.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Keine der Anzeigen bietet Fußball an. Daher X." }
    ]
  },
  {
    id: "lesen-ma-3",
    title: "Teil 3: Einkaufen und Geschenke",
    level: "B1",
    topic: "Einkaufen",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) "Buchwurm" Antiquariat: Wir kaufen und verkaufen gebrauchte Bücher. Riesige Auswahl an Romanen und Fachliteratur. Geöffnet Mo-Sa 10-18 Uhr.
B) Elektronik-Markt XXL: Großer Ausverkauf! Laptops, Smartphones und Fernseher bis zu 50% reduziert. Nur dieses Wochenende.
C) Geschenkboutique "Kleine Freude": Handgemachte Seifen, Kerzen und Schmuck. Das perfekte Geschenk für jeden Anlass. Kostenlose Geschenkverpackung.
D) Blumenhaus Flora: Frische Blumensträuße, Zimmerpflanzen und Gartenzubehör. Wir liefern auch direkt nach Hause!
E) Spielzeugland: Alles für Kinder! Von Holzspielzeug bis zu den neuesten Videospielen. Jeden Mittwoch 10% Rabatt auf Brettspiele.
F) Feinkost Meyer: Spezialitäten aus aller Welt. Hochwertige Weine, Käse und Schokolade. Wir stellen Ihnen individuelle Geschenkkörbe zusammen.`,
    questions: [
      { id: 1, question: "Lisa sucht ein persönliches Geschenk für ihre Mutter, das schön duftet.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Anzeige C bietet handgemachte Seifen und Kerzen, was gut duftet und ein schönes Geschenk ist." },
      { id: 2, question: "Tom braucht einen neuen Computer für die Uni, hat aber nicht viel Geld.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Anzeige B hat einen Ausverkauf mit Laptops bis zu 50% reduziert." },
      { id: 3, question: "Frau Schmidt möchte einen schönen Korb mit Wein und Käse verschenken.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "F", explanation: "Feinkost Meyer bietet Wein, Käse und individuelle Geschenkkörbe." },
      { id: 4, question: "Markus sucht einen seltenen Roman aus dem 19. Jahrhundert.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "A", explanation: "Das Antiquariat kauft und verkauft gebrauchte, alte Bücher." },
      { id: 5, question: "Jana sucht ein neues Fahrrad für ihren Sohn zum Geburtstag.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Keine Anzeige verkauft Fahrräder. Spielzeugland (E) hat nur Spielzeug." }
    ]
  },
  {
    id: "lesen-ma-4",
    title: "Teil 3: Urlaub und Unterkunft",
    level: "B1",
    topic: "Urlaub & Reisen",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Hotel Seeblick: 4-Sterne-Luxus direkt am Wasser. Mit großem Wellnessbereich, Gourmetrestaurant und Einzelzimmern. Kinder unter 12 Jahren sind nicht erlaubt (Adults only).
B) Ferienwohnung "Bergluft": Gemütliche Wohnung für 4 Personen in den Alpen. Mit Küche, Balkon und nah am Skilift. Hunde sind herzlich willkommen!
C) Campingplatz "Natur pur": Zeltplätze und Stellplätze für Wohnmobile im Wald. Lagerfeuerplatz, moderne Waschhäuser. Günstige Preise für Studenten.
D) Jugendherberge City: Günstig übernachten mitten in der Stadt. Mehrbettzimmer (4-8 Betten). Inklusive Frühstücksbuffet. Ideal für junge Reisende und Rucksacktouristen.
E) Pension "Zum roten Apfel": Ruhige Zimmer auf einem Bauernhof. Helfen Sie bei der Ernte oder entspannen Sie im Garten. Perfekt für Familien mit kleinen Kindern.
F) Wellness-Ressort Waldessa: Erholung pur für Paare. Täglich Yoga, Massagen und gesundes Essen inklusive. Keine Haustiere erlaubt.`,
    questions: [
      { id: 1, question: "Familie Weber (2 Erwachsene, 2 Kinder) möchte in den Bergen Skifahren und ihren Hund mitnehmen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Anzeige B ist eine Wohnung für 4 Personen am Skilift und erlaubt Hunde." },
      { id: 2, question: "Tim (20) und Lukas (21) reisen mit dem Rucksack durch Deutschland und haben wenig Geld.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Die Jugendherberge (D) ist günstig und ideal für Rucksacktouristen." },
      { id: 3, question: "Herr Klein möchte ein ruhiges Wochenende ohne Kinder am See verbringen und luxuriös essen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "A", explanation: "Hotel Seeblick (A) ist am Wasser, hat ein Gourmetrestaurant und erlaubt keine Kinder." },
      { id: 4, question: "Sarah und Tom suchen ein Hotel in der Innenstadt, das auch einen Pool hat.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Keines der Stadthotels bietet einen Pool. Jugendherberge (D) hat keinen Pool." },
      { id: 5, question: "Familie Bauer möchte mit ihren kleinen Kindern einen entspannten Urlaub in der Natur machen, wo die Kinder Tiere sehen können.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Pension 'Zum roten Apfel' ist auf einem Bauernhof und perfekt für kleine Kinder." }
    ]
  },
  {
    id: "lesen-ma-5",
    title: "Teil 3: Jobsuche und Arbeit",
    level: "B1",
    topic: "Arbeit",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Café Sonnenschein: Suchen freundliche Bedienung für die Wochenenden (Sa/So). Bezahlung auf Stundenbasis + Trinkgeld. Erfahrung in der Gastronomie nicht nötig.
B) IT-Firma TechPro: Wir suchen einen erfahrenen Softwareentwickler (Vollzeit). Home-Office Möglichkeit, gute Bezahlung. Mindestens 3 Jahre Berufserfahrung erforderlich.
C) Supermarkt Frische-Eck: Aushilfe für die Kasse gesucht! Arbeitszeiten flexibel, meistens abends ab 18 Uhr. Ideal für Studenten.
D) Nachhilfe-Institut "Schlaumeier": Suchen Studenten für Nachhilfe in Mathe und Englisch (Klasse 5-10). Arbeitszeit am Nachmittag. Bezahlung 15 Euro/Stunde.
E) Bäckerei Krümel: Suchen Bäcker/in in Vollzeit. Arbeitsbeginn ist nachts um 3 Uhr. Wir bieten ein tolles Team und faire Bezahlung.
F) Hundesalon Bello: Suchen jemanden, der Hunde liebt und sie baden und pflegen kann. Teilzeit, 20 Stunden pro Woche. Vormittags.`,
    questions: [
      { id: 1, question: "Lisa studiert tagsüber und sucht einen Nebenjob für den Abend.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Der Supermarkt sucht Aushilfen für abends ab 18 Uhr." },
      { id: 2, question: "Max ist Programmierer und sucht eine feste Stelle, bei der er auch von zu Hause arbeiten kann.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "TechPro sucht Softwareentwickler in Vollzeit mit Home-Office." },
      { id: 3, question: "Anna liebt Tiere und hat jeden Vormittag Zeit, weil ihre Kinder in der Schule sind.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "F", explanation: "Der Hundesalon sucht jemanden für vormittags (Teilzeit)." },
      { id: 4, question: "Lukas studiert Mathematik und möchte nachmittags etwas Geld dazuverdienen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Das Nachhilfe-Institut sucht Studenten für Mathe am Nachmittag." },
      { id: 5, question: "Herr Meier sucht eine Stelle als Automechaniker in Vollzeit.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Es gibt keine Anzeige für Automechaniker." }
    ]
  },
  {
    id: "lesen-ma-6",
    title: "Teil 3: Dienstleistungen",
    level: "B1",
    topic: "Alltag & Service",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Reparatur-Café: Ihr Toaster oder Radio ist kaputt? Wir reparieren kleine Elektrogeräte kostenlos! Spenden sind willkommen. Jeden Samstag 10-14 Uhr.
B) PC-Doktor: Ihr Computer streikt? Virus auf dem Laptop? Ich komme zu Ihnen nach Hause und löse das Problem. Schneller Service, faire Preise.
C) Friseursalon "Haar-Genau": Waschen, Schneiden, Föhnen. Spezielle Angebote für Studenten jeden Dienstag. Ohne Terminvereinbarung!
D) Umzugsunternehmen "Starke Jungs": Wir helfen beim Umzug! Vom Packen der Kartons bis zum Möbelaufbau. Schnell und zuverlässig. Holen Sie sich ein Angebot.
E) Änderungsschneiderei Nadel & Faden: Hose zu lang? Reißverschluss kaputt? Wir reparieren Ihre Kleidung schnell und günstig.
F) Reinigung "Blitzblank": Wir reinigen Ihre Anzüge, Hemden und Teppiche. Kostenloser Abhol- und Bringservice in der ganzen Stadt.`,
    questions: [
      { id: 1, question: "Klaus zieht in eine neue Wohnung und braucht Hilfe beim Tragen der Möbel.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Das Umzugsunternehmen hilft beim Tragen und Möbelaufbau." },
      { id: 2, question: "Marias neue Jeans ist etwas zu lang und muss gekürzt werden.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Die Änderungsschneiderei kürzt Hosen." },
      { id: 3, question: "Tom hat ein Problem: Sein Laptop geht nicht mehr an.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Der PC-Doktor repariert Computer und Laptops." },
      { id: 4, question: "Frau Müller möchte, dass ihr Garten aufgeräumt und der Rasen gemäht wird.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Es gibt keine Anzeige für Gartenservice." },
      { id: 5, question: "Herr Schmidt hat Kaffeeflecken auf seinem teuren Anzug und möchte ihn säubern lassen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "F", explanation: "Die Reinigung 'Blitzblank' reinigt Anzüge." }
    ]
  },
  {
    id: "lesen-ma-7",
    title: "Teil 3: Hobbys und Kurse",
    level: "B1",
    topic: "Freizeit",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Kochschule "Lecker": Sushikurs für Anfänger! Lernen Sie, wie man perfektes Sushi macht. Nächster Termin: Freitag, 19 Uhr. Inklusive Zutaten und Getränke.
B) Fotostudio Klick: Fotografie-Workshop am Wochenende. Wie mache ich tolle Porträts und Naturfotos? Eigene Kamera muss mitgebracht werden.
C) Musikschule Harmonie: Gitarre, Klavier oder Geige? Wir bieten Einzelunterricht für Kinder und Erwachsene. Erste Probestunde kostenlos!
D) Sportverein Fit&Aktiv: Neue Volleyballmannschaft sucht Spieler! Training immer dienstags und donnerstags um 18 Uhr in der Stadthalle.
E) Kunstakademie: Malkurs "Aquarell". Lernen Sie entspannt malen. Pinsel und Farben werden gestellt. Jeden Montagnachmittag.
F) Sprachschule Lingua: Spanisch für den Urlaub. Kompaktkurs an 4 Abenden. Lernen Sie das Wichtigste für Ihre Reise nach Spanien oder Südamerika.`,
    questions: [
      { id: 1, question: "Felix möchte ein Instrument lernen und sucht einen Lehrer für sich allein.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Die Musikschule bietet Einzelunterricht für Instrumente." },
      { id: 2, question: "Laura reist nächsten Monat nach Madrid und möchte vorher ein bisschen die Sprache lernen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "F", explanation: "Die Sprachschule bietet einen Spanisch-Kompaktkurs für den Urlaub an." },
      { id: 3, question: "Thomas möchte lernen, wie man asiatisches Essen zubereitet.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "A", explanation: "Die Kochschule bietet einen Sushikurs (asiatisches Essen) an." },
      { id: 4, question: "Maria hat sich eine neue Kamera gekauft und möchte lernen, wie man sie richtig benutzt.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Das Fotostudio bietet einen Fotografie-Workshop an." },
      { id: 5, question: "Lukas sucht einen Malkurs, bei dem er am Wochenende mit Ölfarben malen kann.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Die Kunstakademie (E) bietet Aquarell am Montag an, nicht am Wochenende und nicht mit Ölfarben." }
    ]
  },
  {
    id: "lesen-ma-8",
    title: "Teil 3: Essen und Restaurants",
    level: "B1",
    topic: "Gastronomie",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Pizzeria Napoli: Die beste Holzofenpizza der Stadt! Gemütliches Ambiente. Lieferung nach Hause möglich. Montag Ruhetag.
B) Veggie-Haus: 100% vegetarisch und vegan! Wir bieten leckere Salate, Suppen und Gemüsegerichte. Gesunde Säfte und Smoothies.
C) Steakhaus "Texas": Für echte Fleischfans! Riesige Steaks vom Grill, Burger und Spareribs. Jeden Donnerstag: All-you-can-eat.
D) Café Süßschnabel: Selbstgebackene Torten, Kuchen und Kaffeespezialitäten. Tolles Frühstücksbuffet jeden Sonntagmorgen.
E) Fischrestaurant "Nordseebrise": Frischer Fisch und Meeresfrüchte direkt vom Hafen. Mit großer Außenterrasse und Blick auf den Fluss.
F) Imbiss "Curry-König": Wenn es schnell gehen muss! Currywurst, Pommes und Döner. Bis tief in die Nacht geöffnet. Ideal nach der Party!`,
    questions: [
      { id: 1, question: "Julian isst kein Fleisch und möchte heute Abend gesund essen gehen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Das Veggie-Haus ist 100% vegetarisch/vegan und bietet gesundes Essen." },
      { id: 2, question: "Anna und Peter haben Sonntagvormittag Zeit und wollen ausgiebig frühstücken.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Das Café Süßschnabel bietet ein Frühstücksbuffet am Sonntagmorgen." },
      { id: 3, question: "Lukas hat großen Hunger auf ein richtiges Stück Fleisch.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Das Steakhaus bietet riesige Steaks für Fleischfans." },
      { id: 4, question: "Familie Müller möchte am Abend draußen sitzen und Lachs essen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Das Fischrestaurant bietet frischen Fisch und eine Außenterrasse." },
      { id: 5, question: "Sarah möchte heute Mittag chinesisch essen gehen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Keines der Restaurants bietet chinesisches Essen an." }
    ]
  },
  {
    id: "lesen-ma-9",
    title: "Teil 3: Veranstaltungen",
    level: "B1",
    topic: "Kultur & Events",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Stadtmuseum: Sonderausstellung "Römer in Germanien". Entdecken Sie spannende Ausgrabungsstücke. Täglich geöffnet von 10 bis 18 Uhr.
B) Open-Air Kino im Schlosspark: Zeigen jeden Abend aktuelle Blockbuster unter dem Sternenhimmel. Decken und Snacks können mitgebracht werden.
C) Flohmarkt am Rathausplatz: Jeden ersten Samstag im Monat. Von alten Büchern bis zu Kleidung und Möbeln. Trödeln und feilschen!
D) Konzerthalle: Das Symphonieorchester spielt Werke von Mozart und Beethoven. Freitagabend 20 Uhr. Elegante Abendgarderobe erwünscht.
E) Comedy-Club: Lachen bis der Bauch weh tut! Drei Comedians testen ihr neues Programm. Getränke an der Bar. Einlass ab 18 Jahren.
F) Kinderfest im Zoo: Kinderschminken, Hüpfburg und Fütterung der Pinguine. Sonntag von 11 bis 16 Uhr. Kinder bis 12 Jahre haben freien Eintritt!`,
    questions: [
      { id: 1, question: "Herr und Frau Schmidt lieben klassische Musik und möchten sich schick anziehen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Die Konzerthalle spielt Mozart/Beethoven und bittet um elegante Abendgarderobe." },
      { id: 2, question: "Tim sucht nach einem günstigen, alten Fahrrad für die Uni.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Auf dem Flohmarkt gibt es gebrauchte Dinge zum Trödeln." },
      { id: 3, question: "Familie Klein sucht ein Programm für den Sonntag, das ihren kleinen Kindern Spaß macht.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "F", explanation: "Das Kinderfest im Zoo ist am Sonntag und ideal für kleine Kinder." },
      { id: 4, question: "Lisa (19) und ihre Freunde möchten abends Unterhaltung haben und viel lachen.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Der Comedy-Club bietet viel zu lachen und ist ab 18 Jahren." },
      { id: 5, question: "Markus interessiert sich für moderne Kunst und sucht eine Galerie.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Es gibt keine Anzeige für eine moderne Kunstgalerie (A ist ein historisches Museum)." }
    ]
  },
  {
    id: "lesen-ma-10",
    title: "Teil 3: Immobilien und Wohnen",
    level: "B1",
    topic: "Wohnen",
    duration: "15 Phút",
    type: "Ghép thông tin",
    questionType: "matching",
    readingText: `Lesen Sie die Situationen 1 bis 5 und die Anzeigen A bis F. Welche Anzeige passt zu wem?

Anzeigen:
A) Helle 2-Zimmer-Wohnung: 60 qm im Stadtzentrum. Mit Einbauküche und Balkon. Keine Haustiere erlaubt. Kaltmiete 900 Euro. Frei ab sofort.
B) WG-Zimmer frei! Suchen Mitbewohner/in für unsere 3er-WG. Großes Zimmer (20 qm). Wir kochen oft zusammen. Miete 400 Euro inkl. Internet.
C) Haus im Grünen zu verkaufen: Einfamilienhaus am Stadtrand, 120 qm Wohnfläche, großer Garten. Ideal für Familien mit Kindern. Preis auf Anfrage.
D) Seniorenresidenz "Abendrot": Betreutes Wohnen für Menschen ab 65 Jahren. Barrierefreie Apartments, tägliches Mittagessen und medizinisches Personal vor Ort.
E) Bürofläche zu vermieten: 150 qm im Industriegebiet. Hell, modern, mit Teeküche. Perfekt für Start-ups oder kleine Firmen. Ausreichend Parkplätze.
F) Ferienhaus am Meer: Gemütliches Haus an der Ostsee für den Sommerurlaub zu vermieten. Platz für 4 Personen. 10 Minuten zum Strand.`,
    questions: [
      { id: 1, question: "Lena ist Studentin, hat wenig Geld und sucht Anschluss, weil sie neu in der Stadt ist.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "B", explanation: "Die WG ist günstig (400 Euro) und bietet Anschluss ('Wir kochen oft zusammen')." },
      { id: 2, question: "Familie Bauer möchte nicht mehr zur Miete wohnen, sondern Eigentum erwerben.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "C", explanation: "Das Haus im Grünen steht zum Verkauf ('zu verkaufen')." },
      { id: 3, question: "Herr Neumann (75) kann nicht mehr so gut laufen und braucht im Alltag etwas Hilfe.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "D", explanation: "Die Seniorenresidenz bietet betreutes Wohnen, barrierefrei." },
      { id: 4, question: "Julian gründet eine Software-Firma und sucht Räume für seine 5 Mitarbeiter.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "E", explanation: "Die Bürofläche ist perfekt für Firmen und Start-ups." },
      { id: 5, question: "Sarah sucht eine kleine Wohnung für sich und ihren Hund im Zentrum.", options: ["A", "B", "C", "D", "E", "F", "0"], correct: "0", explanation: "Anzeige A ist im Zentrum, erlaubt aber keine Haustiere." }
    ]
  }
];
