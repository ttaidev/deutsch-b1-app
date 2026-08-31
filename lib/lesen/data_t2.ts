import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T2: ReadingExercise[] = [
  {
    id: "lesen-mc-4",
    title: "Teil 2: Senioren im Internet",
    level: "B1",
    topic: "Technik & Gesellschaft",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Lokalnachrichten: Immer mehr ältere Menschen möchten lernen, wie man das Internet nutzt. Die Stadtverwaltung hat deshalb das Projekt "Senioren online" ins Leben gerufen. In kostenlosen Computerkursen lernen Rentner, wie sie E-Mails schreiben, Videotelefonate mit ihren Enkeln führen oder Informationen im Netz suchen.
Das Projekt ist ein großer Erfolg. Die ersten Kurse waren bereits nach zwei Tagen komplett ausgebucht. Viele Teilnehmer berichten, dass sie sich durch das Internet weniger einsam fühlen, besonders wenn sie nicht mehr so gut laufen können. Die Stadt plant nun, noch mehr ehrenamtliche Lehrer zu suchen, um zusätzliche Kurse anbieten zu können.`,
    questions: [
      { id: 1, question: "Für wen ist das neue Projekt der Stadtverwaltung?", options: ["A) Für junge Leute.", "B) Für ältere Menschen (Senioren).", "C) Für Computer-Experten."], correct: "B) Für ältere Menschen (Senioren).", explanation: "Das Projekt heißt 'Senioren online'." },
      { id: 2, question: "Was lernen die Teilnehmer in den Kursen?", options: ["A) Wie man einen Computer repariert.", "B) Wie man E-Mails schreibt und telefoniert.", "C) Wie man Webseiten programmiert."], correct: "B) Wie man E-Mails schreibt und telefoniert.", explanation: "Sie lernen, wie sie E-Mails schreiben, Videotelefonate führen..." },
      { id: 3, question: "Wie viel kostet der Kurs?", options: ["A) Er ist kostenlos.", "B) Er kostet etwas Geld.", "C) Das steht nicht im Text."], correct: "A) Er ist kostenlos.", explanation: "In kostenlosen Computerkursen lernen Rentner..." },
      { id: 4, question: "War das Projekt bisher erfolgreich?", options: ["A) Nein, niemand wollte mitmachen.", "B) Ja, die Kurse waren sehr schnell voll.", "C) Man weiß es noch nicht."], correct: "B) Ja, die Kurse waren sehr schnell voll.", explanation: "Die ersten Kurse waren bereits nach zwei Tagen komplett ausgebucht." },
      { id: 5, question: "Warum finden viele Teilnehmer das Internet gut?", options: ["A) Weil sie Geld sparen können.", "B) Weil sie sich dadurch weniger allein fühlen.", "C) Weil sie einkaufen können."], correct: "B) Weil sie sich dadurch weniger allein fühlen.", explanation: "...dass sie sich durch das Internet weniger einsam fühlen..." },
      { id: 6, question: "Was plant die Stadt für die Zukunft?", options: ["A) Mehr Lehrer zu finden für neue Kurse.", "B) Die Kurse teurer zu machen.", "C) Computer zu verschenken."], correct: "A) Mehr Lehrer zu finden für neue Kurse.", explanation: "Die Stadt plant nun, noch mehr ehrenamtliche Lehrer zu suchen..." }
    ]
  },
  {
    id: "lesen-mc-5",
    title: "Teil 2: Erlebnispädagogik an Schulen",
    level: "B1",
    topic: "Bildung & Jugend",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Pädagogik-Magazin: Der normale Unterricht im Klassenzimmer reicht vielen Schulen heute nicht mehr aus. Immer mehr Lehrer setzen auf die sogenannte Erlebnispädagogik. Das bedeutet, dass Schüler durch gemeinsame Ausflüge, Sportcamps oder den Besuch von Kletterparks lernen sollen, im Team zu arbeiten.
Eine Studie zeigt, dass Kinder, die regelmäßig an solchen Ausflügen teilnehmen, besser miteinander kommunizieren und weniger streiten. Die Schulen organisieren dafür zum Beispiel am Ende des Schuljahres oft große Fahrten in Freizeitparks oder in die Natur. Ein Problem sind jedoch oft die hohen Kosten für die Busfahrt und den Eintritt, die meistens von den Eltern bezahlt werden müssen.`,
    questions: [
      { id: 1, question: "Worum geht es in dem Text?", options: ["A) Um Probleme mit Hausaufgaben.", "B) Um Ausflüge und Teamarbeit bei Schülern.", "C) Um teure Privatschulen."], correct: "B) Um Ausflüge und Teamarbeit bei Schülern.", explanation: "Der Text handelt von Erlebnispädagogik (Ausflüge, Sportcamps) für Schüler." },
      { id: 2, question: "Was ist Erlebnispädagogik?", options: ["A) Viel lesen und schreiben im Unterricht.", "B) Lernen durch Ausflüge und Aktivitäten.", "C) Früh nach Hause gehen."], correct: "B) Lernen durch Ausflüge und Aktivitäten.", explanation: "Das bedeutet, dass Schüler durch gemeinsame Ausflüge... lernen sollen..." },
      { id: 3, question: "Was ist ein positiver Effekt dieser Ausflüge?", options: ["A) Die Kinder bekommen bessere Noten.", "B) Die Kinder kommunizieren besser und streiten weniger.", "C) Die Lehrer haben weniger Arbeit."], correct: "B) Die Kinder kommunizieren besser und streiten weniger.", explanation: "...dass Kinder, die regelmäßig an solchen Ausflügen teilnehmen, besser miteinander kommunizieren und weniger streiten." },
      { id: 4, question: "Wann finden diese großen Fahrten oft statt?", options: ["A) Am Ende des Schuljahres.", "B) Jedes Wochenende.", "C) Am Anfang des Schuljahres."], correct: "A) Am Ende des Schuljahres.", explanation: "Die Schulen organisieren dafür zum Beispiel am Ende des Schuljahres oft große Fahrten..." },
      { id: 5, question: "Welches Problem wird im Text genannt?", options: ["A) Die Kinder mögen die Ausflüge nicht.", "B) Die Ausflüge sind oft sehr teuer für die Eltern.", "C) Es gibt nicht genug Busse."], correct: "B) Die Ausflüge sind oft sehr teuer für die Eltern.", explanation: "Ein Problem sind jedoch oft die hohen Kosten... die meistens von den Eltern bezahlt werden müssen." },
      { id: 6, question: "Was lernen die Kinder im Kletterpark laut Text?", options: ["A) Wie man im Team arbeitet.", "B) Wie man einen Bus fährt.", "C) Wie man Geld spart."], correct: "A) Wie man im Team arbeitet.", explanation: "...lernen sollen, im Team zu arbeiten." }
    ]
  },
  {
    id: "lesen-mc-6",
    title: "Teil 2: Das neue Stadtbad ist fertig",
    level: "B1",
    topic: "Lokales & Sport",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Tageszeitung: Nach zweijähriger Umbauzeit wird am kommenden Samstag das städtische Schwimmbad endlich wiedereröffnet. Für knapp 5 Millionen Euro wurde das alte Gebäude komplett modernisiert und ist nun auch für Menschen im Rollstuhl barrierefrei zugänglich.
Die größte Neuerung ist das beheizte Außenbecken, das man auch im Winter nutzen kann. Zudem gibt es nun einen großen Bereich nur für Familien mit kleinen Kindern. Am Samstag zur feierlichen Eröffnung verlangt die Stadtverwaltung keinen Eintritt. Ab Sonntag gelten dann die neuen, leicht erhöhten Preise: Ein Ticket für Erwachsene kostet 5 Euro, für Kinder 3 Euro. Die Öffnungszeiten wurden ebenfalls verlängert.`,
    questions: [
      { id: 1, question: "Wie lange war das Schwimmbad geschlossen?", options: ["A) Zwei Monate.", "B) Zwei Jahre.", "C) Fünf Jahre."], correct: "B) Zwei Jahre.", explanation: "Im Text steht: 'Nach zweijähriger Umbauzeit'." },
      { id: 2, question: "Was ist besonders wichtig für Menschen im Rollstuhl?", options: ["A) Das Bad ist nun barrierefrei zugänglich.", "B) Sie zahlen keinen Eintritt.", "C) Es gibt mehr Parkplätze."], correct: "A) Das Bad ist nun barrierefrei zugänglich.", explanation: "...und ist nun auch für Menschen im Rollstuhl barrierefrei zugänglich." },
      { id: 3, question: "Was ist die größte neue Attraktion?", options: ["A) Die große Sauna.", "B) Das Restaurant.", "C) Das beheizte Außenbecken."], correct: "C) Das beheizte Außenbecken.", explanation: "Die größte Neuerung ist das beheizte Außenbecken..." },
      { id: 4, question: "Wie viel muss man am Samstag für den Eintritt bezahlen?", options: ["A) 5 Euro.", "B) Nichts, der Eintritt ist frei.", "C) 3 Euro."], correct: "B) Nichts, der Eintritt ist frei.", explanation: "Am Samstag zur feierlichen Eröffnung verlangt die Stadtverwaltung keinen Eintritt." },
      { id: 5, question: "Was hat sich bei den Preisen ab Sonntag geändert?", options: ["A) Sie sind etwas höher als früher.", "B) Sie sind billiger geworden.", "C) Sie sind gleich geblieben."], correct: "A) Sie sind etwas höher als früher.", explanation: "Ab Sonntag gelten dann die neuen, leicht erhöhten Preise..." },
      { id: 6, question: "Was passierte mit den Öffnungszeiten?", options: ["A) Sie sind kürzer geworden.", "B) Sie sind länger geworden.", "C) Sie gelten nur noch am Wochenende."], correct: "B) Sie sind länger geworden.", explanation: "Die Öffnungszeiten wurden ebenfalls verlängert." }
    ]
  },
  {
    id: "lesen-mc-7",
    title: "Teil 2: Theater kämpfen um junge Besucher",
    level: "B1",
    topic: "Kultur & Kunst",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Kultur-Journal: Viele klassische Theater in Deutschland haben ein Problem: Ihr Publikum wird immer älter. Junge Menschen gehen lieber ins Kino oder schauen Filme im Internet. Um wieder mehr junge Leute für Kultur zu begeistern, testen viele Theaterhäuser nun neue Konzepte.
Ein beliebtes Modell ist das "Studi-Abo". Studenten können für wenig Geld fünf Vorstellungen im Jahr besuchen. Außerdem bieten einige Theater jetzt Stücke an, die sich mit modernen Themen wie Digitalisierung oder Klimawandel beschäftigen. Eine weitere Neuerung: Nach der Vorstellung gibt es oft Partys oder Diskussionsrunden mit den Schauspielern. Die Theater hoffen, so ihr verstaubtes Image loszuwerden.`,
    questions: [
      { id: 1, question: "Welches Problem haben viele Theater?", options: ["A) Sie haben keine guten Schauspieler mehr.", "B) Es kommen zu wenig junge Besucher.", "C) Die Eintrittskarten sind zu billig."], correct: "B) Es kommen zu wenig junge Besucher.", explanation: "Der Text sagt: 'Ihr Publikum wird immer älter. Junge Menschen gehen lieber ins Kino...'" },
      { id: 2, question: "Was machen junge Menschen lieber?", options: ["A) Sie gehen ins Theater.", "B) Sie schauen Filme online oder im Kino.", "C) Sie lesen Bücher."], correct: "B) Sie schauen Filme online oder im Kino.", explanation: "Junge Menschen gehen lieber ins Kino oder schauen Filme im Internet." },
      { id: 3, question: "Was ist das 'Studi-Abo'?", options: ["A) Ein billiges Angebot für Studenten für fünf Vorstellungen.", "B) Ein kostenloses Ticket für alle.", "C) Ein Ticket für eine Party."], correct: "A) Ein billiges Angebot für Studenten für fünf Vorstellungen.", explanation: "Studenten können für wenig Geld fünf Vorstellungen im Jahr besuchen." },
      { id: 4, question: "Welche neuen Themen werden in den Stücken behandelt?", options: ["A) Nur alte, historische Geschichten.", "B) Moderne Themen wie Klimawandel und Digitalisierung.", "C) Komödien über Tiere."], correct: "B) Moderne Themen wie Klimawandel und Digitalisierung.", explanation: "...Stücke an, die sich mit modernen Themen wie Digitalisierung oder Klimawandel beschäftigen." },
      { id: 5, question: "Was passiert manchmal nach der Theatervorstellung?", options: ["A) Das Theater wird sofort geschlossen.", "B) Es gibt Partys oder Diskussionen mit Schauspielern.", "C) Die Zuschauer müssen aufräumen."], correct: "B) Es gibt Partys oder Diskussionen mit Schauspielern.", explanation: "Nach der Vorstellung gibt es oft Partys oder Diskussionsrunden mit den Schauspielern." },
      { id: 6, question: "Was ist das Ziel der Theater?", options: ["A) Sie wollen ihr altes Image ändern.", "B) Sie wollen noch ältere Besucher anziehen.", "C) Sie wollen schließen."], correct: "A) Sie wollen ihr altes Image ändern.", explanation: "Die Theater hoffen, so ihr verstaubtes Image loszuwerden." }
    ]
  },
  {
    id: "lesen-mc-8",
    title: "Teil 2: Das grüne Stadtviertel der Zukunft",
    level: "B1",
    topic: "Wohnen & Umwelt",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Architektur-Magazin: Im Süden der Hauptstadt entsteht ein komplett neues Stadtviertel, das europaweit als Vorzeigeprojekt gilt: der "Sonnenpark". Bis 2028 sollen hier Wohnungen für rund 5.000 Menschen gebaut werden. Das Besondere an diesem Projekt ist die zu 100 Prozent umweltfreundliche Planung. 
Alle Häuser werden mit Solarenergie beheizt und verfügen über Dächer mit Pflanzen. Autos sind in den kleinen Straßen des Viertels nicht erlaubt. Anwohner müssen ihre Fahrzeuge in großen Parkhäusern am Rand des Viertels abstellen. Dafür gibt es eine sehr gute Anbindung an die öffentlichen Verkehrsmittel und breite, sichere Fahrradwege. Auch ein Supermarkt und eine neue Grundschule sind fest eingeplant.`,
    questions: [
      { id: 1, question: "Was passiert im Süden der Hauptstadt?", options: ["A) Ein Park wird geschlossen.", "B) Es wird ein neues Stadtviertel gebaut.", "C) Eine Universität wird eröffnet."], correct: "B) Es wird ein neues Stadtviertel gebaut.", explanation: "Es entsteht ein komplett neues Stadtviertel." },
      { id: 2, question: "Wie viele Menschen sollen dort in Zukunft wohnen?", options: ["A) Ungefähr 5.000.", "B) Mehr als 20.000.", "C) Etwa 2.000."], correct: "A) Ungefähr 5.000.", explanation: "Bis 2028 sollen hier Wohnungen für rund 5.000 Menschen gebaut werden." },
      { id: 3, question: "Was ist das Besondere an dem Viertel?", options: ["A) Die Wohnungen sind extrem billig.", "B) Es ist sehr umweltfreundlich geplant.", "C) Es dürfen dort nur alte Menschen wohnen."], correct: "B) Es ist sehr umweltfreundlich geplant.", explanation: "Das Besondere an diesem Projekt ist die zu 100 Prozent umweltfreundliche Planung." },
      { id: 4, question: "Wo müssen die Autos geparkt werden?", options: ["A) Direkt vor den Häusern.", "B) In Parkhäusern am Rand des Viertels.", "C) Im Zentrum der Stadt."], correct: "B) In Parkhäusern am Rand des Viertels.", explanation: "Anwohner müssen ihre Fahrzeuge in großen Parkhäusern am Rand des Viertels abstellen." },
      { id: 5, question: "Was wird im Viertel für Autofahrer als Alternative angeboten?", options: ["A) Es gibt keine Alternativen.", "B) Sehr gute Busse/Bahnen und Fahrradwege.", "C) Kostenlose Taxis."], correct: "B) Sehr gute Busse/Bahnen und Fahrradwege.", explanation: "Dafür gibt es eine sehr gute Anbindung an die öffentlichen Verkehrsmittel und breite, sichere Fahrradwege." },
      { id: 6, question: "Was soll im Viertel noch gebaut werden?", options: ["A) Ein Krankenhaus.", "B) Eine Grundschule und ein Supermarkt.", "C) Ein großes Kino."], correct: "B) Eine Grundschule und ein Supermarkt.", explanation: "Auch ein Supermarkt und eine neue Grundschule sind fest eingeplant." }
    ]
  },
  {
    id: "lesen-mc-9",
    title: "Teil 2: Der Trend zum Selberkochen",
    level: "B1",
    topic: "Essen & Trinken",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Magazin Gesundheit: Lange Zeit galt Fast Food bei jungen Leuten als cool. Doch das ändert sich gerade. Immer mehr Menschen zwischen 20 und 30 Jahren entdecken das Kochen für sich. Kochkurse an Volkshochschulen, besonders für internationale Gerichte wie italienische Pasta oder japanisches Sushi, sind oft Monate im Voraus ausgebucht.
Experten sehen zwei Gründe für diesen Trend: Erstens möchten viele junge Menschen gesünder leben und genau wissen, was in ihrem Essen steckt. Zweitens spielen die sozialen Medien eine große Rolle. Wer ein schönes, selbst gekochtes Gericht auf Instagram oder TikTok postet, bekommt viele Likes. Kochen ist vom langweiligen Haushaltspflichtprogramm zu einem beliebten Hobby geworden.`,
    questions: [
      { id: 1, question: "Was war früher bei jungen Leuten beliebt?", options: ["A) Kochen lernen.", "B) Fast Food essen.", "C) Nur Gemüse essen."], correct: "B) Fast Food essen.", explanation: "Lange Zeit galt Fast Food bei jungen Leuten als cool." },
      { id: 2, question: "Was machen heute viele 20- bis 30-Jährige?", options: ["A) Sie essen gar nicht mehr.", "B) Sie entdecken das Kochen für sich.", "C) Sie gehen jeden Tag ins Restaurant."], correct: "B) Sie entdecken das Kochen für sich.", explanation: "Immer mehr Menschen zwischen 20 und 30 Jahren entdecken das Kochen für sich." },
      { id: 3, question: "Wie gut sind Kochkurse an Volkshochschulen besucht?", options: ["A) Niemand geht dorthin.", "B) Sie sind sehr schnell ausgebucht.", "C) Nur ältere Leute besuchen sie."], correct: "B) Sie sind sehr schnell ausgebucht.", explanation: "Kochkurse... sind oft Monate im Voraus ausgebucht." },
      { id: 4, question: "Was ist der erste Grund für den neuen Trend?", options: ["A) Kochen ist billiger.", "B) Die Leute wollen gesund leben und das Essen kontrollieren.", "C) Sie haben zu viel Freizeit."], correct: "B) Die Leute wollen gesund leben und das Essen kontrollieren.", explanation: "...möchten viele junge Menschen gesünder leben und genau wissen, was in ihrem Essen steckt." },
      { id: 5, question: "Welche Rolle spielt das Internet (soziale Medien)?", options: ["A) Man kann dort Rezepte kaufen.", "B) Fotos von Essen bringen Likes (Anerkennung).", "C) Man kann Essen im Internet bestellen."], correct: "B) Fotos von Essen bringen Likes (Anerkennung).", explanation: "Wer ein schönes, selbst gekochtes Gericht auf Instagram... postet, bekommt viele Likes." },
      { id: 6, question: "Was ist Kochen heute für viele junge Leute?", options: ["A) Eine langweilige Pflicht.", "B) Ein beliebtes Hobby.", "C) Zu schwer zu lernen."], correct: "B) Ein beliebtes Hobby.", explanation: "Kochen ist... zu einem beliebten Hobby geworden." }
    ]
  },
  {
    id: "lesen-mc-10",
    title: "Teil 2: Personalmangel in Kitas",
    level: "B1",
    topic: "Familie & Gesellschaft",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Familien-News: Viele Eltern in Deutschland haben ein Problem: Sie finden keinen Betreuungsplatz für ihre Kinder oder die Kindergärten verkürzen ihre Öffnungszeiten. Der Grund dafür ist ein extremer Mangel an Erzieherinnen und Erziehern. Laut einer neuen Statistik fehlen bundesweit mehr als 100.000 Fachkräfte in Kitas.
Weil das Personal fehlt, müssen viele Einrichtungen am Nachmittag früher schließen. Für berufstätige Eltern ist das eine große Herausforderung. Einige Arbeitgeber reagieren bereits darauf und bieten ihren Mitarbeitern flexiblere Arbeitszeiten an. Politiker fordern nun, den Beruf des Erziehers besser zu bezahlen, um ihn für junge Menschen attraktiver zu machen und das Problem langfristig zu lösen.`,
    questions: [
      { id: 1, question: "Welches Problem haben viele Eltern?", options: ["A) Die Kitas sind zu laut.", "B) Es gibt keinen Platz oder kürzere Öffnungszeiten.", "C) Die Kinder wollen nicht in die Kita gehen."], correct: "B) Es gibt keinen Platz oder kürzere Öffnungszeiten.", explanation: "Sie finden keinen Betreuungsplatz... oder die Kindergärten verkürzen ihre Öffnungszeiten." },
      { id: 2, question: "Was ist der Hauptgrund für das Problem?", options: ["A) Es gibt nicht genug Erzieher.", "B) Es gibt nicht genug Gebäude.", "C) Es gibt keine Spielzeuge mehr."], correct: "A) Es gibt nicht genug Erzieher.", explanation: "Der Grund dafür ist ein extremer Mangel an Erzieherinnen und Erziehern." },
      { id: 3, question: "Wie viele Fachkräfte fehlen in Deutschland?", options: ["A) Etwa 10.000.", "B) Mehr als 100.000.", "C) Etwa eine Million."], correct: "B) Mehr als 100.000.", explanation: "Laut einer neuen Statistik fehlen bundesweit mehr als 100.000 Fachkräfte..." },
      { id: 4, question: "Was müssen viele Kindergärten wegen des Personalmangels tun?", options: ["A) Sie schließen am Nachmittag früher.", "B) Sie öffnen am Wochenende.", "C) Sie werden teurer."], correct: "A) Sie schließen am Nachmittag früher.", explanation: "Weil das Personal fehlt, müssen viele Einrichtungen am Nachmittag früher schließen." },
      { id: 5, question: "Wie helfen einige Arbeitgeber den Eltern?", options: ["A) Sie geben ihnen mehr Geld.", "B) Sie bieten flexiblere Arbeitszeiten an.", "C) Sie bauen eigene Kitas."], correct: "B) Sie bieten flexiblere Arbeitszeiten an.", explanation: "Einige Arbeitgeber... bieten ihren Mitarbeitern flexiblere Arbeitszeiten an." },
      { id: 6, question: "Was fordern Politiker als Lösung?", options: ["A) Eltern sollen zu Hause bleiben.", "B) Der Erzieher-Beruf soll besser bezahlt werden.", "C) Kinder sollen früher in die Schule gehen."], correct: "B) Der Erzieher-Beruf soll besser bezahlt werden.", explanation: "Politiker fordern nun, den Beruf des Erziehers besser zu bezahlen..." }
    ]
  }
];
