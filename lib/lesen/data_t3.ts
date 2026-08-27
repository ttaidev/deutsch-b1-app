import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T3: ReadingExercise[] = [
  {
    id: "lesen-jn-4",
    title: "Teil 3: Regeln im Schwimmbad",
    level: "B1",
    topic: "Freizeit & Sport",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Hausordnung für das städtische Freibad:
1. Das Mitbringen von Glasflaschen auf das Gelände ist strengstens verboten (Verletzungsgefahr!).
2. Nichtschwimmer dürfen sich nur in den gekennzeichneten flachen Becken aufhalten.
3. Vor dem Betreten der Becken ist aus hygienischen Gründen das Duschen Pflicht.
4. Das Springen vom Beckenrand ist nur an der tiefen Seite des Sportbeckens erlaubt.
5. Essen und Trinken sind auf der Liegewiese gestattet, jedoch nicht direkt am Beckenrand.
6. Kinder unter 10 Jahren dürfen das Bad nur in Begleitung eines Erwachsenen betreten.
7. Bei Gewitter ist das Wasser sofort zu verlassen.`,
    questions: [
      { id: 1, question: "Darf man Getränke in Glasflaschen mitbringen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Glasflaschen sind strengstens verboten." },
      { id: 2, question: "Dürfen Nichtschwimmer ins tiefe Wasser?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Nichtschwimmer dürfen sich nur in flachen Becken aufhalten." },
      { id: 3, question: "Muss man vor dem Schwimmen duschen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Das Duschen vor dem Betreten der Becken ist Pflicht." },
      { id: 4, question: "Darf man überall ins Wasser springen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Nur an der tiefen Seite des Sportbeckens erlaubt." },
      { id: 5, question: "Darf man am Beckenrand essen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Essen und Trinken ist auf der Liegewiese gestattet, nicht am Beckenrand." },
      { id: 6, question: "Darf ein 8-jähriges Kind alleine ins Schwimmbad?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Kinder unter 10 Jahren nur in Begleitung eines Erwachsenen." },
      { id: 7, question: "Muss man bei einem Gewitter aus dem Wasser?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Bei Gewitter ist das Wasser sofort zu verlassen." }
    ]
  },
  {
    id: "lesen-jn-5",
    title: "Teil 3: Regeln in der Stadtbibliothek",
    level: "B1",
    topic: "Bildung & Kultur",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Benutzungsordnung der Stadtbibliothek:
1. Die Ausleihe von Büchern ist kostenlos, wenn Sie einen gültigen Bibliotheksausweis besitzen.
2. DVDs und Konsolenspiele kosten eine Leihgebühr von 1 Euro pro Woche.
3. Die normale Leihfrist für Bücher beträgt 4 Wochen. Sie kann zweimal online verlängert werden, wenn das Buch nicht reserviert ist.
4. Bei Überschreitung der Leihfrist fallen sofort Mahngebühren an (0,50 Euro pro Buch und Tag).
5. Essen und laute Gespräche sind in den Lesesälen verboten. Getränke in verschlossenen Flaschen sind erlaubt.
6. Das Ausdrucken von Dokumenten am PC kostet 10 Cent pro Seite.
7. Mäntel und große Rucksäcke müssen an der Garderobe im Erdgeschoss eingeschlossen werden.`,
    questions: [
      { id: 1, question: "Ist das Ausleihen von Büchern mit Ausweis gratis?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Die Ausleihe von Büchern ist kostenlos (mit Ausweis)." },
      { id: 2, question: "Sind DVDs auch kostenlos?", options: ["Ja", "Nein"], correct: "Nein", explanation: "DVDs kosten eine Leihgebühr von 1 Euro pro Woche." },
      { id: 3, question: "Kann man ein Buch immer dreimal verlängern?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Man kann es zweimal verlängern, wenn es nicht reserviert ist." },
      { id: 4, question: "Muss man Strafe zahlen, wenn man Bücher zu spät zurückbringt?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Bei Überschreitung fallen sofort Mahngebühren an." },
      { id: 5, question: "Darf man im Lesesaal ein Sandwich essen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Essen ist in den Lesesälen verboten." },
      { id: 6, question: "Darf man eine Wasserflasche mit in den Lesesaal nehmen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Getränke in verschlossenen Flaschen sind erlaubt." },
      { id: 7, question: "Darf man seinen großen Rucksack mit an den Tisch nehmen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Mäntel und große Rucksäcke müssen an der Garderobe eingeschlossen werden." }
    ]
  },
  {
    id: "lesen-jn-6",
    title: "Teil 3: Campingplatz Vorschriften",
    level: "B1",
    topic: "Urlaub & Natur",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Herzlich willkommen auf dem Campingplatz 'Natur pur'!
Bitte beachten Sie folgende Regeln:
1. Die Anreise ist von 14:00 bis 20:00 Uhr möglich. Bei späterer Anreise rufen Sie bitte an.
2. Zwischen 22:00 und 07:00 Uhr herrscht Nachtruhe. Auf dem Platz dürfen in dieser Zeit keine Autos fahren.
3. Offenes Feuer ist auf dem gesamten Gelände verboten. Das Grillen mit Holzkohle ist nur auf dem speziellen Grillplatz am See erlaubt.
4. Hunde sind willkommen, müssen aber auf dem Campingplatz immer an der Leine geführt werden.
5. Der Müll muss getrennt werden (Papier, Glas, Plastik). Bitte werfen Sie keinen Müll in die Natur.
6. Die Nutzung der Duschen kostet 50 Cent (Münzeinwurf) für 5 Minuten warmes Wasser.
7. Bitte verlassen Sie Ihren Platz am Abreisetag bis spätestens 11:00 Uhr sauber.`,
    questions: [
      { id: 1, question: "Darf man ohne Anruf um 21:00 Uhr anreisen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Die Anreise ist nur bis 20:00 Uhr. Danach muss man anrufen." },
      { id: 2, question: "Darf man nachts mit dem Auto auf dem Platz fahren?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Zwischen 22:00 und 07:00 Uhr dürfen keine Autos fahren." },
      { id: 3, question: "Darf man vor seinem Zelt ein Lagerfeuer machen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Offenes Feuer ist auf dem gesamten Gelände verboten." },
      { id: 4, question: "Darf man am See grillen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Grillen ist auf dem speziellen Grillplatz am See erlaubt." },
      { id: 5, question: "Dürfen Hunde frei auf dem Platz herumlaufen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Hunde müssen auf dem Campingplatz immer an der Leine geführt werden." },
      { id: 6, question: "Sind die warmen Duschen kostenlos?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Die Duschen kosten 50 Cent für 5 Minuten warmes Wasser." },
      { id: 7, question: "Muss man am Abreisetag bis 11 Uhr den Platz verlassen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Verlassen Sie Ihren Platz am Abreisetag bis spätestens 11:00 Uhr." }
    ]
  },
  {
    id: "lesen-jn-7",
    title: "Teil 3: Verhaltensregeln im Zug",
    level: "B1",
    topic: "Reisen & Verkehr",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Sehr geehrte Fahrgäste, willkommen im ICE!
Damit alle entspannt reisen können, beachten Sie bitte:
1. Im gesamten Zug herrscht striktes Rauchverbot, auch auf den Toiletten.
2. In den Ruhewagen bitten wir Sie, nicht zu telefonieren und Gespräche leise zu führen.
3. Wenn Sie Musik hören, nutzen Sie bitte Kopfhörer, damit andere Fahrgäste nicht gestört werden.
4. Großes Gepäck (Koffer) muss in den speziellen Gepäckregalen am Anfang oder Ende des Wagens verstaut werden.
5. Kleine Taschen können unter dem Sitz oder auf der Ablage über dem Sitz aufbewahrt werden.
6. Fahrräder dürfen nur mitgenommen werden, wenn Sie vorher einen Stellplatz reserviert haben.
7. Das Bordbistro ist durchgehend geöffnet und bietet warme Speisen und Getränke an.`,
    questions: [
      { id: 1, question: "Darf man auf der Zugtoilette rauchen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Im gesamten Zug herrscht striktes Rauchverbot, auch auf den Toiletten." },
      { id: 2, question: "Darf man im Ruhewagen laut telefonieren?", options: ["Ja", "Nein"], correct: "Nein", explanation: "In den Ruhewagen bitten wir Sie, nicht zu telefonieren." },
      { id: 3, question: "Darf man Musik über Lautsprecher hören?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Wenn Sie Musik hören, nutzen Sie bitte Kopfhörer." },
      { id: 4, question: "Darf ein großer Koffer auf dem Sitzplatz stehen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Großes Gepäck muss in den speziellen Gepäckregalen verstaut werden." },
      { id: 5, question: "Können kleine Taschen über dem Sitz liegen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Kleine Taschen können... auf der Ablage über dem Sitz aufbewahrt werden." },
      { id: 6, question: "Darf man sein Fahrrad spontan und ohne Reservierung mitnehmen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Fahrräder dürfen nur mitgenommen werden, wenn Sie vorher einen Stellplatz reserviert haben." },
      { id: 7, question: "Kann man im Zug etwas Warmes zu essen kaufen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Das Bordbistro bietet warme Speisen und Getränke an." }
    ]
  },
  {
    id: "lesen-jn-8",
    title: "Teil 3: Regeln im Krankenhaus",
    level: "B1",
    topic: "Gesundheit & Regeln",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Besucherordnung des Stadtkrankenhauses:
1. Die offiziellen Besuchszeiten sind täglich von 14:00 bis 19:00 Uhr. Besuche außerhalb dieser Zeiten müssen mit dem Arzt abgesprochen werden.
2. Es dürfen maximal zwei Personen gleichzeitig einen Patienten im Zimmer besuchen, um Ruhe zu gewährleisten.
3. Bitte bringen Sie keine Topfpflanzen mit ins Krankenhaus (Erde enthält Bakterien). Schnittblumen in Vasen sind jedoch erlaubt.
4. Kinder unter 12 Jahren dürfen das Krankenhaus nur als Besucher betreten, wenn sie gesund sind.
5. Auf den Intensivstationen gelten besondere Regeln: Handys müssen komplett ausgeschaltet werden.
6. Das Rauchen ist im gesamten Gebäude verboten. Es gibt einen Raucherpavillon im Garten.
7. Bitte setzen Sie sich aus hygienischen Gründen nicht auf das Bett des Patienten, sondern nutzen Sie die Stühle.`,
    questions: [
      { id: 1, question: "Darf man Patienten am Vormittag ohne Absprache besuchen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Besuchszeiten sind ab 14 Uhr. Vorher muss man mit dem Arzt absprechen." },
      { id: 2, question: "Dürfen drei Freunde gleichzeitig im Patientenzimmer sein?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Es dürfen maximal zwei Personen gleichzeitig einen Patienten besuchen." },
      { id: 3, question: "Darf man eine Pflanze im Topf schenken?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Bitte bringen Sie keine Topfpflanzen mit ins Krankenhaus." },
      { id: 4, question: "Sind Blumensträuße (Schnittblumen) erlaubt?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Schnittblumen in Vasen sind jedoch erlaubt." },
      { id: 5, question: "Darf man auf der Intensivstation telefonieren?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Auf den Intensivstationen... müssen Handys komplett ausgeschaltet werden." },
      { id: 6, question: "Gibt es einen Ort zum Rauchen im Garten?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Es gibt einen Raucherpavillon im Garten." },
      { id: 7, question: "Sollen Besucher sich auf das Bett des Patienten setzen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Setzen Sie sich aus hygienischen Gründen nicht auf das Bett... nutzen Sie die Stühle." }
    ]
  },
  {
    id: "lesen-jn-9",
    title: "Teil 3: Prüfungsordnung Sprachschule",
    level: "B1",
    topic: "Schule & Lernen",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Hinweise für die B1-Deutschprüfung:
1. Bitte seien Sie am Prüfungstag spätestens 30 Minuten vor Beginn der Prüfung im Testzentrum.
2. Sie müssen einen gültigen Personalausweis oder Reisepass vorzeigen. Ein Führerschein wird nicht akzeptiert.
3. Handys, Smartwatches und andere elektronische Geräte müssen ausgeschaltet und in der Tasche bleiben.
4. Sie dürfen nur mit einem schwarzen oder blauen Kugelschreiber schreiben. Bleistifte sind nicht erlaubt.
5. Das Verwenden von Wörterbüchern (auch elektronisch) ist in dieser Prüfung strikt verboten.
6. Wenn Sie während der Prüfung auf die Toilette müssen, melden Sie sich bitte beim Aufsichtspersonal. Es darf immer nur eine Person den Raum verlassen.
7. Wer beim Abschreiben erwischt wird, wird sofort von der Prüfung ausgeschlossen und erhält kein Zertifikat.`,
    questions: [
      { id: 1, question: "Sollte man pünktlich zum Prüfungsbeginn kommen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Man muss spätestens 30 Minuten vor Beginn da sein, nicht genau zum Beginn." },
      { id: 2, question: "Darf man sich mit einem Führerschein ausweisen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Ein Führerschein wird nicht akzeptiert." },
      { id: 3, question: "Darf man seine Smartwatch während der Prüfung tragen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Smartwatches müssen ausgeschaltet und in der Tasche bleiben." },
      { id: 4, question: "Darf man den Test mit einem Bleistift schreiben?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Bleistifte sind nicht erlaubt." },
      { id: 5, question: "Darf man ein Wörterbuch benutzen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Das Verwenden von Wörterbüchern... ist in dieser Prüfung strikt verboten." },
      { id: 6, question: "Darf man während der Prüfung zur Toilette gehen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Ja, aber man muss sich beim Aufsichtspersonal melden und nur einzeln gehen." },
      { id: 7, question: "Bekommt man ein Zertifikat, wenn man abschreibt?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Wer beim Abschreiben erwischt wird... erhält kein Zertifikat." }
    ]
  },
  {
    id: "lesen-jn-10",
    title: "Teil 3: Hausordnung Miethaus",
    level: "B1",
    topic: "Wohnen & Alltag",
    duration: "15 Phút",
    type: "Có / Không",
    questionType: "ja_nein",
    readingText: `Hausordnung für die Mieter der Blumenstraße 12:
1. Die Treppenhausreinigung wird von einer Reinigungsfirma durchgeführt. Die Kosten sind in den Nebenkosten enthalten.
2. Kinderwägen dürfen im Erdgeschoss unter der Treppe abgestellt werden, solange der Fluchtweg frei bleibt.
3. Das Grillen auf den Balkonen ist nur mit Elektrogrills erlaubt. Holzkohlegrills sind wegen Brandgefahr verboten.
4. Waschmaschine und Trockner im Keller dürfen nur zwischen 07:00 und 21:00 Uhr benutzt werden.
5. Reparaturen in der Wohnung müssen immer zuerst dem Vermieter oder Hausmeister gemeldet werden, bevor ein Handwerker gerufen wird.
6. Das Trocknen von Wäsche ist auf dem Balkon erlaubt, jedoch nicht im Treppenhaus.
7. Bei Verlust des Haustürschlüssels muss sofort der Hausmeister informiert werden, da eventuell das ganze Schloss ausgetauscht werden muss.`,
    questions: [
      { id: 1, question: "Müssen die Mieter das Treppenhaus selbst putzen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Die Treppenhausreinigung wird von einer Reinigungsfirma durchgeführt." },
      { id: 2, question: "Darf man den Kinderwagen im Flur stehen lassen?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Kinderwägen dürfen im Erdgeschoss unter der Treppe abgestellt werden." },
      { id: 3, question: "Darf man auf dem Balkon mit Holzkohle grillen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Holzkohlegrills sind wegen Brandgefahr verboten." },
      { id: 4, question: "Darf man um 22:30 Uhr im Keller Wäsche waschen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Waschmaschine und Trockner dürfen nur bis 21:00 Uhr benutzt werden." },
      { id: 5, question: "Muss man den Vermieter vor einer Reparatur informieren?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Reparaturen... müssen immer zuerst dem Vermieter... gemeldet werden." },
      { id: 6, question: "Darf man nasse Wäsche im Treppenhaus aufhängen?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Das Trocknen von Wäsche ist... nicht im Treppenhaus erlaubt." },
      { id: 7, question: "Muss man den Hausmeister informieren, wenn man den Schlüssel verliert?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Bei Verlust des Haustürschlüssels muss sofort der Hausmeister informiert werden." }
    ]
  }
];
