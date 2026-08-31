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

ich möchte mich heute offiziell und in aller Form bei Ihnen allen entschuldigen. Gestern Abend habe ich in meiner Wohnung meinen 30. Geburtstag gefeiert und die Musik war leider ab 23 Uhr deutlich zu laut. Ich hatte eigentlich vorgehabt, die Feier in ein Restaurant zu verlegen, aber leider wurden mir die Tische dort im letzten Moment storniert, sodass ich spontan zu Hause feiern musste. 

Ich weiß sehr wohl, dass viele von Ihnen morgens früh aufstehen müssen, um zur Arbeit zu gehen, und dass die gesetzliche Nachtruhe ab 22 Uhr gilt. Es war wirklich nicht meine Absicht, Sie um Ihren verdienten Schlaf zu bringen oder Sie zu stören. Einige von Ihnen haben sogar an die Wand geklopft, was mir im Nachhinein unglaublich unangenehm ist. 

Als kleine Entschuldigung und als Versuch der Wiedergutmachung habe ich heute den ganzen Nachmittag in der Küche gestanden und zwei große Kuchen gebacken – einen Schokoladenkuchen und einen Obstkuchen. Sie sind alle herzlich eingeladen, am kommenden Sonntag ab 16 Uhr auf ein Stück Kuchen und eine gute Tasse Kaffee zu mir in den 2. Stock zu kommen. Wir können uns dabei vielleicht auch ein bisschen besser kennenlernen, da ich ja erst vor drei Monaten hier eingezogen bin. Ich hoffe wirklich, dass Sie mir diesen Fehltritt verzeihen und meine Entschuldigung annehmen.

Viele Grüße,
Ihre Julia (Wohnung 8)`,
    questions: [
      { id: 1, question: "Julia hat von Anfang an geplant, zu Hause zu feiern.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie hatte eigentlich vorgehabt, die Feier in ein Restaurant zu verlegen, musste dann aber spontan zu Hause feiern." },
      { id: 2, question: "Einige Nachbarn haben sich während der Feier bemerkbar gemacht.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie schreibt: 'Einige von Ihnen haben sogar an die Wand geklopft'." },
      { id: 3, question: "Julia hat den Kuchen in einem Café bestellt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie hat den ganzen Nachmittag in der Küche gestanden und selbst gebacken." },
      { id: 4, question: "Die Nachbarn sind für heute Nachmittag eingeladen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sind 'am kommenden Sonntag ab 16 Uhr' eingeladen, nicht heute." },
      { id: 5, question: "Julia wohnt im zweiten Stockwerk.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie lädt die Nachbarn 'zu mir in den 2. Stock' ein." },
      { id: 6, question: "Julia wohnt schon sehr lange in dem Haus.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: '...da ich ja erst vor drei Monaten hier eingezogen bin'." }
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
    readingText: `Blog von Thomas: Traumurlaub mit Hindernissen in Italien

Hallo Leute, viele Grüße aus dem sonnigen Rom! Meine Frau und ich sind am Montag nach einer langen, anstrengenden Fahrt endlich hier im Hotel angekommen. Zuerst hatten wir Angst, dass es regnen würde, weil die Wetter-App das behauptet hat, aber das Wetter ist einfach traumhaft. Jeden Tag über 30 Grad im Schatten und durchgehend strahlender Sonnenschein. 

Wir waren schon sehr aktiv und haben nicht nur das berühmte Kolosseum besichtigt, sondern auch eine riesige Menge echter italienischer Pizza gegessen. Leider gibt es auch eine schlechte Nachricht: Gestern am überfüllten Strand haben wir unsere teure digitale Spiegelreflexkamera aus den Augen gelassen und sie wurde uns gestohlen, oder wir haben sie einfach verloren – wir wissen es nicht genau. Wir haben zwar noch unsere Handys, aber die Fotoqualität ist natürlich bei Weitem nicht so gut, vor allem, wenn wir abends im Dunkeln fotografieren wollen. Das war ein echter Schock für uns!

Aber wir lassen uns die Urlaubsstimmung nicht verderben. Morgen fahren wir mit dem Schnellzug weiter in den Süden nach Neapel und bleiben dort für drei Tage. Eigentlich wollten wir einen Mietwagen nehmen, aber der Verkehr hier ist uns einfach zu chaotisch. Von Neapel aus fliegen wir dann am Sonntagabend direkt zurück nach Deutschland. Drückt uns die Daumen, dass auf der Rückreise nicht noch mehr schiefgeht!

Bis bald,
Euer Thomas`,
    questions: [
      { id: 1, question: "Thomas und seine Frau hatten eine entspannte Anreise.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt, sie sind 'nach einer langen, anstrengenden Fahrt endlich hier im Hotel angekommen'." },
      { id: 2, question: "Das Wetter ist so schlecht, wie die App es vorhergesagt hat.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er schreibt: '...aber das Wetter ist einfach traumhaft. Jeden Tag über 30 Grad...'." },
      { id: 3, question: "Sie können mit den Handys besonders im Dunkeln gute Fotos machen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt, dass die Fotoqualität der Handys 'vor allem, wenn wir abends im Dunkeln fotografieren wollen' nicht so gut ist." },
      { id: 4, question: "Sie reisen mit dem Auto weiter nach Neapel.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie fahren 'mit dem Schnellzug', da ihnen der Verkehr für einen Mietwagen zu chaotisch ist." },
      { id: 5, question: "Sie bleiben in Neapel für drei Tage.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Er schreibt: '...bleiben dort für drei Tage'." },
      { id: 6, question: "Der Flug nach Deutschland startet am Sonntagmorgen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie fliegen 'am Sonntagabend direkt zurück nach Deutschland'." }
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
    readingText: `Forenbeitrag von Lisa (Thema: Fitnessstudio Partner gesucht):

Hallo liebe Leute aus der Nachbarschaft! Ich habe mich endlich dazu durchgerungen, etwas mehr für meine Gesundheit zu tun, und möchte mich gerne im neuen und modernen Fitnessstudio "Fit&Gesund" in der Innenstadt anmelden. Ich war gestern schon persönlich dort, habe mir die Geräte angeschaut und mich ausführlich informiert. 

Der Grund, warum ich euch schreibe, ist folgender: Es gibt im Moment ein absolut unschlagbares Angebot. Wenn man sich zu zweit als sogenanntes "Trainings-Duo" anmeldet, zahlt man im ersten halben Jahr nur die Hälfte der normalen Monatsgebühr! Da ich ohnehin ungern alleine trainiere, wäre das die perfekte Gelegenheit. Das Studio ist wirklich riesig, hell und bietet sogar kostenlose Yogakurse am späten Abend an – ideal für mich, da ich tagsüber im Büro sitze. Außerdem gibt es dort eine kleine, gemütliche Sauna zum Entspannen nach dem Training, was man in anderen Studios oft extra bezahlen muss. 

Der Vertrag läuft dort standardmäßig für 12 Monate, eine kürzere Laufzeit bieten sie leider nicht an. Hätte jemand von euch Lust, Zeit und Motivation, sich mit mir zusammen dort anzumelden und vielleicht ein- bis zweimal pro Woche gemeinsam zu trainieren? Wir könnten uns am kommenden Mittwochabend direkt vor dem Studio treffen, uns alles in Ruhe ansehen und bei Gefallen gleich den Vertrag unterschreiben. Meldet euch bitte per Direktnachricht bei mir!`,
    questions: [
      { id: 1, question: "Lisa sucht im Forum nach einem Fitness-Trainer.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sucht nach einem Partner, um sich gemeinsam anzumelden und den Rabatt zu nutzen." },
      { id: 2, question: "Der Rabatt gilt für die gesamte Vertragslaufzeit von einem Jahr.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Rabatt (die Hälfte zahlen) gilt nur 'im ersten halben Jahr'." },
      { id: 3, question: "Yogakurse kosten in diesem Studio zusätzlich Geld.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Studio bietet 'sogar kostenlose Yogakurse' an." },
      { id: 4, question: "Lisa trainiert am liebsten tagsüber, da sie abends arbeitet.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie arbeitet tagsüber im Büro und findet die Kurse am späten Abend 'ideal'." },
      { id: 5, question: "Das Studio bietet keine Verträge für nur 6 Monate an.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Der Vertrag läuft 'standardmäßig für 12 Monate, eine kürzere Laufzeit bieten sie leider nicht an'." },
      { id: 6, question: "Lisa bittet Interessenten, ihr eine direkte Nachricht zu schreiben.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie schreibt: 'Meldet euch bitte per Direktnachricht bei mir!'." }
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
    readingText: `Sprachschul-Blog: Schlechtes Wetter, kranker Lehrer – Neues aus dem B1-Kurs

Hallo liebe Mitschüler! Ich bin’s, euer Kurssprecher Jan. Es gibt leider keine so guten Nachrichten für unsere Unterrichtswoche. Das Sekretariat hat mir heute Morgen telefonisch mitgeteilt, dass Herr Müller, unser sympathischer Deutschlehrer, diese Woche wegen einer schweren Grippe komplett krankgeschrieben ist. Der Arzt hat ihm absolute Bettruhe verordnet. Das bedeutet konkret: Der Unterricht am Dienstag und am Donnerstag fällt leider ersatzlos aus. 

Die Sprachschule bemüht sich derzeit intensiv darum, für die nächste Woche eine kompetente Vertretungskraft zu organisieren, falls Herr Müller bis dahin noch nicht wieder ganz gesund sein sollte. Eigentlich wollten wir diese Woche den wichtigen Test zu den Präpositionen schreiben, aber der wird nun auf unbestimmte Zeit verschoben. 

Damit wir den Anschluss nicht verlieren, sollen wir die unerwartet freie Zeit nutzen, um die Hausaufgaben auf Seite 45 im Arbeitsbuch zu erledigen. Außerdem sollen wir einen kurzen Text (circa 100 Wörter) über unser letztes Wochenende schreiben. Am kommenden Montag können wir unsere gesammelten Ergebnisse dann im Sekretariat in ein spezielles Fach legen, damit sie korrigiert werden. Ich finde das ehrlich gesagt ein bisschen viel Arbeit für zu Hause, aber was soll man machen? Ich hoffe jedenfalls sehr, dass Herr Müller sich ausruht und bald wieder gesund wird. Genießt trotzdem die freien Tage!

Euer Kurssprecher, Jan`,
    questions: [
      { id: 1, question: "Herr Müller hat sich beim Sport verletzt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er ist 'wegen einer schweren Grippe komplett krankgeschrieben', nicht wegen Sport." },
      { id: 2, question: "Der Test zu den Präpositionen findet am Donnerstag statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Test 'wird nun auf unbestimmte Zeit verschoben'." },
      { id: 3, question: "Die Schule hat bereits einen neuen Lehrer für nächste Woche gefunden.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Schule 'bemüht sich derzeit intensiv darum', eine Vertretung zu organisieren." },
      { id: 4, question: "Die Schüler müssen zwei verschiedene Aufgaben zu Hause erledigen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie müssen die Aufgaben auf Seite 45 machen UND einen kurzen Text schreiben." },
      { id: 5, question: "Jan findet die Hausaufgaben sehr einfach und wenig.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er schreibt: 'Ich finde das ehrlich gesagt ein bisschen viel Arbeit für zu Hause'." },
      { id: 6, question: "Die Hausaufgaben sollen am Montag im Sekretariat abgegeben werden.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Am kommenden Montag können wir unsere gesammelten Ergebnisse... im Sekretariat in ein spezielles Fach legen." }
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

wir danken Ihnen vielmals für Ihr Interesse an unserem Unternehmen und für Ihre aussagekräftige Bewerbung als Filialleiterin in unserer Bäckereikette. Sie hatten sich zwar ursprünglich für die Stelle im Stadtzentrum beworben, diese ist jedoch bereits intern vergeben worden. Allerdings haben Ihre professionellen Unterlagen und Ihre jahrelange Erfahrung in der Branche uns so sehr überzeugt, dass wir Ihnen gerne eine alternative Position in unserer neuesten Filiale am Südbahnhof anbieten möchten.

Um die Details zu besprechen und Sie persönlich kennenzulernen, laden wir Sie herzlich zu einem Vorstellungsgespräch ein. Bitte kommen Sie am kommenden Donnerstag, den 12. Mai, um 10:00 Uhr in unsere Hauptverwaltung in der Goethestraße (nicht in die Bäckerei selbst!). Denken Sie bitte unbedingt daran, ein aktuelles Gesundheitszeugnis sowie Ihr Original-Abschlusszeugnis mitzubringen, da diese in unseren Akten noch fehlen.

Da wir wissen, dass Sie derzeit noch in einem anderen Arbeitsverhältnis stehen, bieten wir Ihnen natürlich Flexibilität an: Wenn Ihnen dieser Termin am Vormittag aus beruflichen Gründen absolut nicht passen sollte, rufen Sie unsere Assistentin, Frau Weber, unter der Nummer 030-123456 an. Sie wird dann gemeinsam mit Ihnen nach einem Termin am späten Nachmittag suchen. Wir freuen uns sehr auf das Gespräch mit Ihnen!

Mit freundlichen Grüßen,
Klaus Schmidt (Personalchef)`,
    questions: [
      { id: 1, question: "Frau Nguyen bekommt genau die Stelle, für die sie sich beworben hat.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Stelle im Stadtzentrum ist schon vergeben. Sie bekommt eine Position in der Filiale am Südbahnhof angeboten." },
      { id: 2, question: "Herr Schmidt war von der Erfahrung von Frau Nguyen sehr beeindruckt.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Ihre Unterlagen und Erfahrung haben sie 'so sehr überzeugt'." },
      { id: 3, question: "Das Gespräch findet direkt in einer der Bäckereien statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das Gespräch findet 'in unserer Hauptverwaltung in der Goethestraße (nicht in die Bäckerei selbst!)' statt." },
      { id: 4, question: "Frau Nguyen soll zwei wichtige Dokumente zum Gespräch mitbringen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie soll ein 'aktuelles Gesundheitszeugnis' sowie das 'Original-Abschlusszeugnis' mitbringen." },
      { id: 5, question: "Frau Nguyen ist im Moment ohne Arbeit.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Im Text steht: 'Da wir wissen, dass Sie derzeit noch in einem anderen Arbeitsverhältnis stehen...'." },
      { id: 6, question: "Frau Nguyen kann den Termin auf den späten Nachmittag verschieben lassen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Wenn der Termin am Vormittag nicht passt, kann sie anrufen, um 'nach einem Termin am späten Nachmittag' zu suchen." }
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

entschuldige, dass ich mich so lange nicht gemeldet habe, aber ich habe momentan ein riesiges Problem und hoffe sehr, dass du mir helfen kannst! Mein Internetanschluss zu Hause funktioniert seit gestern Nachmittag absolut gar nicht mehr. Ich habe schon alles versucht, was ich im Internet auf dem Handy an Tipps finden konnte: Ich habe den Router mehrfach vom Strom genommen, neu gestartet und sogar alle Kabel überprüft, aber das hat leider überhaupt nichts gebracht. Die kleinen Kontrolllichter am Gerät blinken ununterbrochen rot und piepen manchmal.

Die Situation ist für mich extrem stressig, denn ich brauche das Internet wirklich dringend für mein Studium. Ich muss an diesem Wochenende meine finale Hausarbeit für das Seminar in Soziologie schreiben und dafür unzählige Online-Artikel recherchieren. Ohne WLAN bin ich völlig aufgeschmissen, weil mein Handy-Datenvolumen schon aufgebraucht ist! Du kennst dich doch mit Technik, Computern und Netzwerken viel besser aus als ich, oder? 

Hättest du vielleicht am Freitagabend nach deiner Schicht im Restaurant kurz Zeit, bei mir vorbeizukommen und dir das störrische Gerät mal anzusehen? Ich wäre dir unendlich dankbar! Als kleines Dankeschön für deine Mühe koche ich uns auch gerne dein Lieblingsessen – Spaghetti Carbonara – und besorge ein paar kalte Getränke. Bitte melde dich kurz, ob du es einrichten kannst!

Verzweifelte Grüße,
Deine Sophie`,
    questions: [
      { id: 1, question: "Sophie hat sich lange nicht bei Felix gemeldet, weil ihr Internet kaputt ist.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie entschuldigt sich, dass sie sich lange nicht gemeldet hat, aber das Internet ist erst 'seit gestern Nachmittag' kaputt." },
      { id: 2, question: "Sophie hat noch nichts unternommen, um das Problem selbst zu lösen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie hat den Router mehrfach vom Strom genommen, neu gestartet und alle Kabel überprüft." },
      { id: 3, question: "Sophie kann die Hausarbeit nicht einfach auf dem Handy schreiben.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie braucht das Internet am PC zum Recherchieren und ihr 'Handy-Datenvolumen ist schon aufgebraucht'." },
      { id: 4, question: "Felix arbeitet nebenbei in einem Restaurant.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sophie fragt, ob er 'am Freitagabend nach deiner Schicht im Restaurant' Zeit hat." },
      { id: 5, question: "Sophie lädt Felix als Dankeschön zum Essen in ein Restaurant ein.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie schreibt: '...koche ich uns auch gerne dein Lieblingsessen', also kocht sie selbst zu Hause." },
      { id: 6, question: "Die Lichter am Router sind komplett aus.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Kontrolllichter 'blinken ununterbrochen rot und piepen manchmal'." }
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
    readingText: `Liebe Freunde, liebe Familie,

wir trauen uns endlich! Wer hätte das gedacht? Nach fünf wunderschönen gemeinsamen Jahren und unzähligen Erlebnissen haben wir uns dazu entschieden, den nächsten großen Schritt zu wagen und zu heiraten. Unsere feierliche Trauung findet am 20. August um 14 Uhr in der historischen St. Martinskirche im Stadtzentrum statt. Bitte beachtet, dass es direkt an der Kirche nur sehr wenige Parkplätze gibt, es ist also besser, mit den öffentlichen Verkehrsmitteln oder dem Taxi zu kommen.

Im Anschluss an die Trauung möchten wir mit euch allen ein rauschendes Fest feiern! Wir haben dafür den großen Saal in der traditionellen Gaststätte "Zum Goldenen Löwen" gemietet, der nur zehn Gehminuten von der Kirche entfernt liegt. Für hervorragendes Essen in Form eines riesigen Buffets, kühle Getränke und natürlich eine tolle Live-Band, die bis tief in die Nacht spielen wird, ist bestens gesorgt. Wer möchte, kann natürlich auch gerne etwas Lustiges oder eine kleine Rede für das Abendprogramm vorbereiten – wendet euch dafür bitte heimlich an meine Schwester Maria, die das Programm organisiert.

Noch ein wichtiges Wort zu den Geschenken: Da unser gemeinsames Haus nach dem letzten Umzug bereits randvoll mit Dingen ist, müsst ihr euch wirklich keine Gedanken über Haushaltsgeräte oder ähnliches machen. Wir freuen uns am allermeisten über einen kleinen finanziellen Beitrag für unsere Traum-Flitterwochen in Spanien, die wir gleich am Montag nach der Hochzeit antreten werden. 
Bitte gebt uns unbedingt bis Ende Juli Bescheid, ob ihr kommt, damit wir das Essen planen können.

Wir freuen uns riesig auf euch!
Laura und Tim`,
    questions: [
      { id: 1, question: "Laura und Tim empfehlen ihren Gästen, mit dem eigenen Auto zur Kirche zu fahren.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie raten davon ab, weil es an der Kirche nur wenige Parkplätze gibt (besser mit den öffentlichen Verkehrsmitteln)." },
      { id: 2, question: "Die Feier findet im selben Gebäude wie die Trauung statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Trauung ist in der Kirche, die Feier in der Gaststätte (zehn Gehminuten entfernt)." },
      { id: 3, question: "Es gibt auf der Feier ein Buffet und Musik von einer Live-Band.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Es ist für 'hervorragendes Essen in Form eines riesigen Buffets... und natürlich eine tolle Live-Band' gesorgt." },
      { id: 4, question: "Gäste sollen sich bei Tim melden, wenn sie eine Rede halten möchten.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sollen sich 'heimlich an meine Schwester Maria' wenden." },
      { id: 5, question: "Laura und Tim wünschen sich zur Hochzeit eine neue Kaffeemaschine.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie wünschen sich keine Haushaltsgeräte, sondern einen finanziellen Beitrag für ihre Flitterwochen." },
      { id: 6, question: "Die Gäste müssen bis Ende August auf die Einladung antworten.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie müssen 'unbedingt bis Ende Juli Bescheid' geben." }
    ]
  }
];
