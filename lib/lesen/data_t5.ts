import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T5: ReadingExercise[] = [
  {
    id: "lesen-ru-1",
    title: "Teil 5: Informationen für Hotelgäste",
    level: "B1",
    topic: "Urlaub & Reisen",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Herzlich willkommen im Hotel "Seeblick"!
Bitte beachten Sie die folgenden Informationen für einen angenehmen Aufenthalt:
Das Frühstücksbuffet ist täglich von 07:00 bis 10:00 Uhr im Speisesaal im Erdgeschoss für Sie geöffnet. Wenn Sie vor 07:00 Uhr abreisen müssen, bereiten wir Ihnen gerne ein Lunchpaket vor. Bitte geben Sie in diesem Fall am Vorabend bis spätestens 20:00 Uhr an der Rezeption Bescheid.
Die Nutzung unseres Wellnessbereichs (Sauna und Schwimmbad) ist im Zimmerpreis enthalten. Handtücher finden Sie auf Ihrem Zimmer. Bitte bringen Sie diese nach der Nutzung nicht wieder mit aufs Zimmer, sondern werfen Sie sie in die weißen Körbe am Ausgang des Wellnessbereichs. Der Bereich ist von 08:00 bis 22:00 Uhr geöffnet.
Am Abreisetag bitten wir Sie, das Zimmer bis spätestens 11:00 Uhr freizugeben. Eine spätere Abreise (Late Check-out) ist auf Anfrage und gegen eine Gebühr von 20 Euro möglich. Bitte klären Sie dies einen Tag im Voraus mit der Rezeption.`,
    questions: [
      { id: 1, question: "Was muss man tun, wenn man ganz früh am Morgen abreist?", options: ["A) Man muss am Morgen an der Rezeption anrufen.", "B) Man kann am Abend vorher ein Essenspaket bestellen.", "C) Man darf im Zimmer frühstücken."], correct: "B) Man kann am Abend vorher ein Essenspaket bestellen.", explanation: "Wenn Sie vor 07:00 Uhr abreisen... bereiten wir Ihnen gerne ein Lunchpaket vor. Bitte geben Sie... am Vorabend Bescheid." },
      { id: 2, question: "Was kostet die Benutzung des Schwimmbads?", options: ["A) Nichts, es ist kostenlos.", "B) 20 Euro.", "C) Man muss für die Handtücher bezahlen."], correct: "A) Nichts, es ist kostenlos.", explanation: "Die Nutzung unseres Wellnessbereichs... ist im Zimmerpreis enthalten (kostenlos)." },
      { id: 3, question: "Was sollen die Gäste mit den nassen Handtüchern machen?", options: ["A) Sie sollen sie im Zimmer trocknen.", "B) Sie sollen sie der Rezeption geben.", "C) Sie sollen sie in Körbe im Wellnessbereich werfen."], correct: "C) Sie sollen sie in Körbe im Wellnessbereich werfen.", explanation: "...werfen Sie sie in die weißen Körbe am Ausgang des Wellnessbereichs." },
      { id: 4, question: "Unter welcher Bedingung kann man länger im Zimmer bleiben?", options: ["A) Wenn man extra bezahlt und vorher fragt.", "B) Wenn man krank ist.", "C) Es ist nicht möglich, man muss um 11 Uhr gehen."], correct: "A) Wenn man extra bezahlt und vorher fragt.", explanation: "Eine spätere Abreise... ist auf Anfrage (vorher fragen) und gegen eine Gebühr von 20 Euro (extra bezahlen) möglich." }
    ]
  },
  {
    id: "lesen-ru-2",
    title: "Teil 5: Anmeldung zum Stadtlauf",
    level: "B1",
    topic: "Sport & Freizeit",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Informationen zum 10. Münchener Stadtlauf
Der diesjährige Stadtlauf findet am Sonntag, den 15. September statt. Es gibt Strecken über 5 km und 10 km sowie einen Kinderlauf über 1 km.
Anmeldung: Die Anmeldung ist nur online über unsere Webseite bis zum 1. September möglich. Eine Anmeldung am Tag des Laufes ist nicht mehr möglich. Die Teilnahmegebühr beträgt 25 Euro für Erwachsene und 10 Euro für Kinder. Im Preis inbegriffen ist ein T-Shirt, das Sie bei der Abholung Ihrer Startnummer erhalten.
Startnummern: Bitte holen Sie Ihre Startnummer am Samstag vor dem Lauf zwischen 10:00 und 18:00 Uhr im Rathaus ab. Vergessen Sie nicht, Ihren Personalausweis mitzubringen.
Sicherheit: Während des Laufes sind die Straßen für den Autoverkehr gesperrt. Begleitpersonen dürfen die Strecke nicht mit Fahrrädern befahren. Sanitäter befinden sich alle 2 km am Streckenrand.`,
    questions: [
      { id: 1, question: "Wie kann man sich für den Lauf anmelden?", options: ["A) Man kann sich nur im Internet anmelden.", "B) Man kann sich am Sonntag anmelden.", "C) Man muss ins Rathaus gehen."], correct: "A) Man kann sich nur im Internet anmelden.", explanation: "Die Anmeldung ist nur online über unsere Webseite... möglich." },
      { id: 2, question: "Was bekommen alle Teilnehmer für ihr Geld?", options: ["A) Einen Gutschein für Sportkleidung.", "B) Ein T-Shirt.", "C) Eine Medaille."], correct: "B) Ein T-Shirt.", explanation: "Im Preis inbegriffen ist ein T-Shirt." },
      { id: 3, question: "Wann und wo bekommt man seine Startnummer?", options: ["A) Am Sonntag vor dem Lauf.", "B) Am Samstag im Rathaus.", "C) Am Samstag im Internet."], correct: "B) Am Samstag im Rathaus.", explanation: "Bitte holen Sie Ihre Startnummer am Samstag... im Rathaus ab." },
      { id: 4, question: "Welche Regel gilt für Familienmitglieder oder Freunde, die zuschauen?", options: ["A) Sie dürfen nicht mit dem Fahrrad auf der Laufstrecke fahren.", "B) Sie müssen auch 10 Euro bezahlen.", "C) Sie dürfen nicht mit dem Auto in die Stadt fahren."], correct: "A) Sie dürfen nicht mit dem Fahrrad auf der Laufstrecke fahren.", explanation: "Begleitpersonen dürfen die Strecke nicht mit Fahrrädern befahren." }
    ]
  },
  {
    id: "lesen-ru-3",
    title: "Teil 5: Bibliotheksordnung",
    level: "B1",
    topic: "Bildung & Alltag",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Hinweise zur Nutzung der Stadtbibliothek:
Die Ausleihe von Büchern, CDs und DVDs ist für alle Bürger mit einem gültigen Bibliotheksausweis kostenlos. Die Leihfrist beträgt für Bücher 4 Wochen, für DVDs und CDs 2 Wochen. Wenn Sie Medien länger behalten möchten, können Sie die Frist online oder telefonisch um weitere 2 Wochen verlängern, sofern das Medium nicht von einem anderen Leser vorgemerkt wurde.
Bei Überschreitung der Leihfrist fallen Mahngebühren an: 1,50 Euro pro Buch und Woche. In den Lesesälen ist das Essen und Telefonieren strengstens verboten. Getränke dürfen nur in verschließbaren Flaschen mitgebracht werden. Jacken und große Taschen müssen vor dem Betreten in die Schließfächer im Eingangsbereich eingeschlossen werden.`,
    questions: [
      { id: 1, question: "Wie lange darf man DVDs normalerweise behalten?", options: ["A) 4 Wochen.", "B) 2 Wochen.", "C) So lange man will."], correct: "B) 2 Wochen.", explanation: "Die Leihfrist beträgt für Bücher 4 Wochen, für DVDs und CDs 2 Wochen." },
      { id: 2, question: "Wann ist eine Verlängerung NICHT möglich?", options: ["A) Wenn man telefonisch anruft.", "B) Wenn jemand anderes das Buch reserviert (vorgemerkt) hat.", "C) Wenn man keinen Ausweis hat."], correct: "B) Wenn jemand anderes das Buch reserviert (vorgemerkt) hat.", explanation: "...sofern das Medium nicht von einem anderen Leser vorgemerkt wurde." },
      { id: 3, question: "Was kostet es, wenn man ein Buch zu spät zurückgibt?", options: ["A) Es ist kostenlos.", "B) 1,50 Euro pro Tag.", "C) 1,50 Euro pro Woche und Buch."], correct: "C) 1,50 Euro pro Woche und Buch.", explanation: "Bei Überschreitung der Leihfrist fallen Mahngebühren an: 1,50 Euro pro Buch und Woche." },
      { id: 4, question: "Was darf man in den Lesesaal mitnehmen?", options: ["A) Einen Apfel.", "B) Eine Wasserflasche, die man zumachen kann.", "C) Eine große Sporttasche."], correct: "B) Eine Wasserflasche, die man zumachen kann.", explanation: "Getränke dürfen nur in verschließbaren Flaschen mitgebracht werden." }
    ]
  },
  {
    id: "lesen-ru-4",
    title: "Teil 5: Regeln im Studentenwohnheim",
    level: "B1",
    topic: "Wohnen & Leben",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Hausordnung des Studentenwohnheims "Campus Mitte":
Wir bitten alle Bewohner um gegenseitige Rücksichtnahme. Die gesetzlichen Ruhezeiten zwischen 22:00 und 07:00 Uhr sowie sonntags ganztägig sind strikt einzuhalten. In dieser Zeit darf Musik nur auf Zimmerlautstärke gehört werden.
Die Gemeinschaftsküchen sind nach jeder Benutzung selbstständig zu reinigen. Schmutziges Geschirr darf nicht auf den Tischen stehen gelassen werden. Der Müll ist regelmäßig in die Container im Innenhof zu bringen – bitte achten Sie auf die Mülltrennung (Papier, Plastik, Restmüll).
Fahrräder dürfen aus Brandschutzgründen nicht in den Fluren oder im Treppenhaus abgestellt werden. Bitte nutzen Sie dafür den überdachten Fahrradständer vor dem Haus. Haustiere sind im gesamten Gebäude nicht gestattet.`,
    questions: [
      { id: 1, question: "Wann muss es im Wohnheim ruhig sein?", options: ["A) Nur am Sonntag.", "B) Nachts und am ganzen Sonntag.", "C) Jeden Tag von 22 bis 7 Uhr, außer am Wochenende."], correct: "B) Nachts und am ganzen Sonntag.", explanation: "Ruhezeiten zwischen 22:00 und 07:00 Uhr sowie sonntags ganztägig." },
      { id: 2, question: "Wer putzt die Küche?", options: ["A) Eine Putzfrau am Wochenende.", "B) Die Studenten nach dem Kochen.", "C) Der Hausmeister."], correct: "B) Die Studenten nach dem Kochen.", explanation: "Die Gemeinschaftsküchen sind nach jeder Benutzung selbstständig zu reinigen." },
      { id: 3, question: "Wo müssen die Fahrräder parken?", options: ["A) Im Treppenhaus.", "B) Im Innenhof bei den Müllcontainern.", "C) Vor dem Gebäude unter einem Dach."], correct: "C) Vor dem Gebäude unter einem Dach.", explanation: "Bitte nutzen Sie dafür den überdachten Fahrradständer vor dem Haus." },
      { id: 4, question: "Darf man eine Katze im Zimmer halten?", options: ["A) Ja, wenn sie leise ist.", "B) Nein, Tiere sind verboten.", "C) Nur mit Erlaubnis des Hausmeisters."], correct: "B) Nein, Tiere sind verboten.", explanation: "Haustiere sind im gesamten Gebäude nicht gestattet." }
    ]
  },
  {
    id: "lesen-ru-5",
    title: "Teil 5: Abfallentsorgung in der Gemeinde",
    level: "B1",
    topic: "Umwelt & Alltag",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Offizielle Richtlinien der Stadt zur Mülltrennung:
Um die Umwelt zu schützen und Recycling zu ermöglichen, ist eine strikte Mülltrennung gesetzlich vorgeschrieben. Bitte beachten Sie die korrekte Zuordnung:
- Papiertonne (Blau): Nur für sauberes Papier, Pappe und Kartons. Achtung: Verschmutzte Papiere (z.B. benutzte Taschentücher oder fettige Pizzakartons) gehören nicht hierher!
- Wertstofftonne (Gelb): Für alle Verpackungen aus Kunststoff, Metall und Aluminium (z.B. leere Joghurtbecher, Konservendosen, Plastikfolien). 
- Biotonne (Braun): Ausschließlich für organische Abfälle wie Essensreste, Kaffeefilter und Gartenabfälle. Bitte verwenden Sie keine Plastiktüten zum Sammeln, auch keine sogenannten "kompostierbaren" Bio-Plastiktüten.
- Restmüll (Schwarz): Für alle nicht recycelbaren Abfälle wie Windeln, Asche oder Staubsaugerbeutel.
Altglas muss nach Farben sortiert in die öffentlichen Glascontainer (Standorte siehe Webseite) eingeworfen werden.`,
    questions: [
      { id: 1, question: "Warum gibt es diese Richtlinien?", options: ["A) Um Geld zu sparen.", "B) Um die Umwelt zu schützen und Recycling zu ermöglichen.", "C) Weil die Müllabfuhr streikt."], correct: "B) Um die Umwelt zu schützen und Recycling zu ermöglichen.", explanation: "Um die Umwelt zu schützen und Recycling zu ermöglichen, ist eine strikte Mülltrennung gesetzlich vorgeschrieben." },
      { id: 2, question: "Wohin kommt ein schmutziger, fettiger Pizzakarton?", options: ["A) In die Blaue Tonne (Papiertonne).", "B) In die Gelbe Tonne.", "C) Nicht in die Papiertonne."], correct: "C) Nicht in die Papiertonne.", explanation: "Verschmutzte Papiere (z.B. ... fettige Pizzakartons) gehören nicht hierher!" },
      { id: 3, question: "Was ist bei der Biotonne wichtig?", options: ["A) Man darf auch Bio-Plastiktüten benutzen.", "B) Man darf gar keine Plastiktüten benutzen.", "C) Man darf Asche hineinwerfen."], correct: "B) Man darf gar keine Plastiktüten benutzen.", explanation: "Bitte verwenden Sie keine Plastiktüten zum Sammeln, auch keine sogenannten 'kompostierbaren' Bio-Plastiktüten." },
      { id: 4, question: "Wo kann man leere Flaschen wegwerfen?", options: ["A) In die Schwarze Tonne.", "B) In die Gelbe Tonne.", "C) In spezielle öffentliche Container."], correct: "C) In spezielle öffentliche Container.", explanation: "Altglas muss nach Farben sortiert in die öffentlichen Glascontainer... eingeworfen werden." }
    ]
  },
  {
    id: "lesen-ru-6",
    title: "Teil 5: Nutzung des Firmenwagens",
    level: "B1",
    topic: "Arbeit & Verkehr",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Rundschreiben an alle Mitarbeiter im Außendienst:
Regeln für die Nutzung der Firmenfahrzeuge
1. Die Firmenwagen dürfen ausschließlich für dienstliche Fahrten genutzt werden. Private Fahrten, auch kurze Fahrten nach Feierabend, sind strengstens untersagt und können zur Kündigung führen.
2. Jeder Fahrer ist verpflichtet, vor Fahrtantritt den Zustand des Autos (Reifen, Licht) kurz zu prüfen.
3. Nach jeder Fahrt muss das elektronische Fahrtenbuch im Auto ausgefüllt werden. Bitte tragen Sie den Kilometerstand und das Ziel ein.
4. Tanken: Bitte nutzen Sie nur die Tankkarten, die im Handschuhfach liegen. Wir haben einen Vertrag mit der "Star"-Tankstelle. Tankrechnungen von anderen Tankstellen werden nur im Notfall von der Firma bezahlt.
5. Das Auto muss am Ende des Tages vollgetankt auf dem Firmenparkplatz abgestellt werden.`,
    questions: [
      { id: 1, question: "Darf man mit dem Firmenauto am Wochenende einkaufen fahren?", options: ["A) Ja, wenn man das Benzin selbst zahlt.", "B) Nein, das ist streng verboten.", "C) Nur mit Erlaubnis des Chefs."], correct: "B) Nein, das ist streng verboten.", explanation: "Private Fahrten... sind strengstens untersagt." },
      { id: 2, question: "Was muss man direkt nach der Fahrt machen?", options: ["A) Das Auto waschen.", "B) Den Chef anrufen.", "C) Informationen im Auto-Computer eintragen."], correct: "C) Informationen im Auto-Computer eintragen.", explanation: "Nach jeder Fahrt muss das elektronische Fahrtenbuch im Auto ausgefüllt werden." },
      { id: 3, question: "Wo soll man am besten tanken?", options: ["A) Bei einer 'Star'-Tankstelle.", "B) Bei der billigsten Tankstelle.", "C) Bei einer Tankstelle im Ausland."], correct: "A) Bei einer 'Star'-Tankstelle.", explanation: "Wir haben einen Vertrag mit der 'Star'-Tankstelle." },
      { id: 4, question: "Wie muss man das Auto am Abend verlassen?", options: ["A) Mit leerem Tank.", "B) Mit vollem Tank auf dem Firmenparkplatz.", "C) Man darf es mit nach Hause nehmen."], correct: "B) Mit vollem Tank auf dem Firmenparkplatz.", explanation: "Das Auto muss am Ende des Tages vollgetankt auf dem Firmenparkplatz abgestellt werden." }
    ]
  },
  {
    id: "lesen-ru-7",
    title: "Teil 5: Regeln am Badesee",
    level: "B1",
    topic: "Freizeit & Natur",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Badeordnung "Silbersee":
Herzlich willkommen an unserem Badesee! Damit alle Gäste einen schönen Tag verbringen können, bitten wir Sie, folgende Regeln zu beachten:
- Das Schwimmen ist nur im gekennzeichneten Bereich erlaubt. Hinter den roten Bojen beginnt ein Naturschutzgebiet, das nicht betreten oder beschwommen werden darf.
- Grillen und offenes Feuer sind auf den Wiesen streng verboten. Bitte nutzen Sie dafür die festen Grillplätze am Kiosk.
- Hunde sind am Hauptstrand nicht erlaubt. Für Gäste mit Hunden gibt es einen separaten Hundestrand im südlichen Teil des Sees. Dort dürfen die Tiere auch ohne Leine ins Wasser.
- Bitte nehmen Sie Ihren Müll wieder mit oder werfen Sie ihn in die großen Mülleimer am Parkplatz. Wer Müll in der Natur liegen lässt, muss eine Strafe von 50 Euro zahlen.`,
    questions: [
      { id: 1, question: "Wo darf man schwimmen?", options: ["A) Überall im See.", "B) Nur vor den roten Bojen.", "C) Nur im Naturschutzgebiet."], correct: "B) Nur vor den roten Bojen.", explanation: "Hinter den roten Bojen beginnt ein Naturschutzgebiet, das nicht... beschwommen werden darf." },
      { id: 2, question: "Darf man am See grillen?", options: ["A) Nein, das ist überall verboten.", "B) Ja, aber nur an speziellen Plätzen beim Kiosk.", "C) Ja, überall auf der Wiese."], correct: "B) Ja, aber nur an speziellen Plätzen beim Kiosk.", explanation: "Bitte nutzen Sie dafür die festen Grillplätze am Kiosk." },
      { id: 3, question: "Was müssen Hundebesitzer beachten?", options: ["A) Sie müssen zu einem extra Strandabschnitt gehen.", "B) Hunde dürfen nicht ins Wasser.", "C) Sie dürfen mit dem Hund an den Hauptstrand."], correct: "A) Sie müssen zu einem extra Strandabschnitt gehen.", explanation: "Für Gäste mit Hunden gibt es einen separaten Hundestrand." },
      { id: 4, question: "Was passiert, wenn man seinen Müll auf der Wiese liegen lässt?", options: ["A) Man darf nie wiederkommen.", "B) Man muss den ganzen Strand putzen.", "C) Man muss 50 Euro Strafe bezahlen."], correct: "C) Man muss 50 Euro Strafe bezahlen.", explanation: "Wer Müll in der Natur liegen lässt, muss eine Strafe von 50 Euro zahlen." }
    ]
  },
  {
    id: "lesen-ru-8",
    title: "Teil 5: Gepäckbestimmungen am Flughafen",
    level: "B1",
    topic: "Reisen & Verkehr",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Wichtige Fluggastinformationen der AeroAir:
Bitte beachten Sie für Ihren bevorstehenden Flug unsere aktuellen Gepäck- und Sicherheitsbestimmungen:
Check-in: Wir empfehlen, mindestens zwei Stunden vor der geplanten Abflugzeit am Schalter zu erscheinen. Das Boarding beginnt pünktlich 45 Minuten vor Abflug.
Aufgabegepäck: Pro Passagier ist ein Koffer mit einem Maximalgewicht von 23 kg im Ticketpreis enthalten. Übergepäck muss am Schalter mit 15 Euro pro zusätzlichem Kilo bezahlt werden.
Handgepäck: Jeder Fluggast darf ein Handgepäckstück (max. 8 kg) sowie einen kleinen persönlichen Gegenstand (z. B. Laptoptasche) mit in die Kabine nehmen.
Flüssigkeiten: Im Handgepäck dürfen Flüssigkeiten nur in Behältern von maximal 100 ml mitgeführt werden. Diese müssen in einem durchsichtigen, wiederverschließbaren Plastikbeutel verpackt sein.`,
    questions: [
      { id: 1, question: "Wann sollten die Passagiere am Flughafen sein?", options: ["A) 45 Minuten vor dem Flug.", "B) Mindestens zwei Stunden vor dem Abflug.", "C) Genau zwei Stunden vorher."], correct: "B) Mindestens zwei Stunden vor dem Abflug.", explanation: "Wir empfehlen, mindestens zwei Stunden vor der geplanten Abflugzeit am Schalter zu erscheinen." },
      { id: 2, question: "Wie viel schwer darf der Koffer sein, der im Preis dabei ist?", options: ["A) So schwer wie man möchte.", "B) Maximal 8 kg.", "C) Maximal 23 kg."], correct: "C) Maximal 23 kg.", explanation: "Pro Passagier ist ein Koffer mit einem Maximalgewicht von 23 kg im Ticketpreis enthalten." },
      { id: 3, question: "Was kostet es, wenn der Koffer zu schwer ist?", options: ["A) Es ist kostenlos.", "B) 15 Euro für jedes Kilo zu viel.", "C) Man darf nicht mitfliegen."], correct: "B) 15 Euro für jedes Kilo zu viel.", explanation: "Übergepäck muss am Schalter mit 15 Euro pro zusätzlichem Kilo bezahlt werden." },
      { id: 4, question: "Wie müssen Getränke oder Shampoos im Handgepäck eingepackt sein?", options: ["A) Sie dürfen gar nicht ins Handgepäck.", "B) In Flaschen, die größer als 100 ml sind.", "C) In Behältern bis 100 ml, in einer Plastiktüte."], correct: "C) In Behältern bis 100 ml, in einer Plastiktüte.", explanation: "Im Handgepäck dürfen Flüssigkeiten nur in Behältern von maximal 100 ml... Diese müssen in einem durchsichtigen... Plastikbeutel verpackt sein." }
    ]
  },
  {
    id: "lesen-ru-9",
    title: "Teil 5: Gebrauchsanweisung Kaffeemaschine",
    level: "B1",
    topic: "Technik & Alltag",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Wichtige Hinweise zur Bedienung des Kaffeevollautomaten "AromaPlus 3000":
- Vor der ersten Benutzung: Füllen Sie den Wassertank bis zur MAX-Linie mit kaltem Wasser und lassen Sie das Gerät einmal komplett durchlaufen, ohne Kaffeebohnen einzufüllen. So reinigen Sie die Leitungen.
- Kaffee zubereiten: Füllen Sie Kaffeebohnen in das obere Fach. Warnung: Verwenden Sie niemals gemahlenen Kaffee oder Instant-Kaffee! Dies zerstört das Mahlwerk. 
- Reinigung: Die rote Kontrolllampe leuchtet auf, wenn das Gerät entkalkt werden muss. Verwenden Sie dafür nur den Original-Entkalker der Firma "Aroma". Essig oder andere Haushaltsmittel können die Maschine kaputt machen. Der Kaffeesatzbehälter muss jeden Abend geleert und gewaschen werden.`,
    questions: [
      { id: 1, question: "Was muss man tun, bevor man den allerersten Kaffee kocht?", options: ["A) Man muss die Maschine mit Wasser spülen.", "B) Man muss speziellen Kaffee kaufen.", "C) Man muss die Maschine entkalken."], correct: "A) Man muss die Maschine mit Wasser spülen.", explanation: "Vor der ersten Benutzung: ... Gerät einmal komplett durchlaufen (lassen), ohne Kaffeebohnen..." },
      { id: 2, question: "Welchen Kaffee darf man NICHT benutzen?", options: ["A) Kaffeebohnen.", "B) Gemahlenen Kaffee (Pulver).", "C) Teuren Kaffee."], correct: "B) Gemahlenen Kaffee (Pulver).", explanation: "Verwenden Sie niemals gemahlenen Kaffee... Dies zerstört das Mahlwerk." },
      { id: 3, question: "Wann muss die Maschine entkalkt werden?", options: ["A) Jeden Abend.", "B) Wenn ein rotes Licht brennt.", "C) Jeden Monat."], correct: "B) Wenn ein rotes Licht brennt.", explanation: "Die rote Kontrolllampe leuchtet auf, wenn das Gerät entkalkt werden muss." },
      { id: 4, question: "Womit darf man die Maschine entkalken?", options: ["A) Mit Essig aus der Küche.", "B) Mit jedem normalen Reinigungsmittel.", "C) Nur mit dem Mittel vom Hersteller."], correct: "C) Nur mit dem Mittel vom Hersteller.", explanation: "Verwenden Sie dafür nur den Original-Entkalker der Firma 'Aroma'." }
    ]
  },
  {
    id: "lesen-ru-10",
    title: "Teil 5: Verhaltensregeln bei Feueralarm",
    level: "B1",
    topic: "Sicherheit & Arbeit",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Sicherheitsrichtlinien der Firma TechCorp: Verhalten im Brandfall
Wenn Sie den Feueralarm (lauter Sirenenton) hören, bewahren Sie Ruhe. 
1. Verlassen Sie sofort Ihren Arbeitsplatz. Nehmen Sie nur Ihre wichtigsten persönlichen Dinge (Handy, Schlüssel) mit. Schalten Sie den Computer nicht aus!
2. Nutzen Sie auf keinen Fall die Aufzüge. Benutzen Sie die Treppenhäuser, um nach unten zu gelangen. Folgen Sie den grünen Notausgangs-Schildern.
3. Helfen Sie Kollegen, die Schwierigkeiten beim Gehen haben.
4. Gehen Sie direkt zum Sammelplatz. Dieser befindet sich auf dem großen Parkplatz hinter dem Gebäude (Zone B).
5. Melden Sie sich dort sofort bei Ihrem Abteilungsleiter, damit kontrolliert werden kann, ob alle Mitarbeiter das Gebäude verlassen haben. Gehen Sie nicht nach Hause, bevor der Feuerwehr-Einsatzleiter Entwarnung gibt.`,
    questions: [
      { id: 1, question: "Was soll man tun, bevor man das Büro verlässt?", options: ["A) Den Computer herunterfahren.", "B) Nichts Wichtiges mitnehmen.", "C) Nur Schlüssel und Handy einstecken."], correct: "C) Nur Schlüssel und Handy einstecken.", explanation: "Nehmen Sie nur Ihre wichtigsten persönlichen Dinge (Handy, Schlüssel) mit." },
      { id: 2, question: "Wie soll man das Gebäude verlassen?", options: ["A) Mit dem Aufzug.", "B) Über die Treppe.", "C) Durch das Fenster."], correct: "B) Über die Treppe.", explanation: "Nutzen Sie auf keinen Fall die Aufzüge. Benutzen Sie die Treppenhäuser..." },
      { id: 3, question: "Wo sollen alle Mitarbeiter hingehen?", options: ["A) Auf die Straße vor dem Haus.", "B) Auf den Parkplatz hinter dem Haus.", "C) Nach Hause."], correct: "B) Auf den Parkplatz hinter dem Haus.", explanation: "Dieser befindet sich auf dem großen Parkplatz hinter dem Gebäude..." },
      { id: 4, question: "Wann darf man nach dem Alarm nach Hause gehen?", options: ["A) Wenn man sich beim Chef gemeldet hat.", "B) Wenn die Feuerwehr sagt, dass es sicher ist.", "C) Sofort, wenn man auf dem Parkplatz ist."], correct: "B) Wenn die Feuerwehr sagt, dass es sicher ist.", explanation: "Gehen Sie nicht nach Hause, bevor der Feuerwehr-Einsatzleiter Entwarnung gibt." }
    ]
  }
];
