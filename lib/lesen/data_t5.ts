import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T5: ReadingExercise[] = [
  {
    id: "lesen-ru-1",
    title: "Teil 5: Hausordnung im Kurhotel",
    level: "B1",
    topic: "Urlaub & Reisen",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Hausordnung und Gästehinweise für das Kurhotel "Alpenblick"

Sehr geehrte Gäste, wir heißen Sie in unserem Haus herzlich willkommen. Um allen Gästen einen erholsamen Aufenthalt zu garantieren, bitten wir um zwingende Beachtung der folgenden Richtlinien:

1. Verpflegung: Das reichhaltige Frühstücksbuffet wird täglich von 07:00 bis 10:30 Uhr im großen Speisesaal serviert. Sollten Sie aufgrund einer frühen Abreise oder eines gebuchten Ausflugs vor 07:00 Uhr frühstücken wollen, bereiten wir Ihnen gerne ein umfangreiches Lunchpaket vor. Dies muss jedoch zwingend am Vorabend bis spätestens 19:00 Uhr an der Hauptrezeption angemeldet werden. Eine spätere Anmeldung kann aus organisatorischen Gründen leider nicht mehr berücksichtigt werden.

2. Wellnessbereich: Die Nutzung der Saunalandschaft und des Hallenbads ist für alle Hotelgäste im regulären Zimmerpreis inkludiert. Spezielle Spa-Behandlungen wie Massagen müssen jedoch separat gebucht und bezahlt werden. Bademäntel und Handtücher finden Sie bei Ihrer Anreise in Ihrem Kleiderschrank. Bitte werfen Sie die benutzten Handtücher nach dem Besuch nicht auf den Boden im Zimmer, sondern ausschließlich in die dafür vorgesehenen weißen Auffangkörbe am Ausgang des Wellnessbereichs.

3. Abreise: Am Tag Ihrer Abreise ist das Zimmer bis spätestens 10:30 Uhr vollständig zu räumen und die Zimmerkarte abzugeben. Ein sogenannter "Late Check-out" (Verlängerung bis 15:00 Uhr) ist nur bei geringer Auslastung des Hotels und nach vorheriger Absprache mit dem Management möglich. Hierfür wird eine Pauschalgebühr in Höhe von 35 Euro fällig.`,
    questions: [
      { id: 1, question: "Was muss ein Gast tun, wenn er sein Frühstück mitnehmen möchte?", options: ["A) Er muss sich am Morgen direkt an das Küchenpersonal wenden.", "B) Er muss dies am Abend vorher bis 19:00 Uhr an der Rezeption anmelden.", "C) Er darf einfach etwas vom Buffet in eine Tüte packen."], correct: "B) Er muss dies am Abend vorher bis 19:00 Uhr an der Rezeption anmelden.", explanation: "Dies muss jedoch zwingend am Vorabend bis spätestens 19:00 Uhr an der Hauptrezeption angemeldet werden." },
      { id: 2, question: "Welche Dienstleistung im Wellnessbereich kostet extra Geld?", options: ["A) Das Schwimmen im Hallenbad.", "B) Die Benutzung der Sauna.", "C) Spezielle Spa-Behandlungen wie Massagen."], correct: "C) Spezielle Spa-Behandlungen wie Massagen.", explanation: "Spezielle Spa-Behandlungen wie Massagen müssen jedoch separat gebucht und bezahlt werden." },
      { id: 3, question: "Wohin sollen die Gäste die nassen Handtücher bringen?", options: ["A) Sie sollen sie auf den Boden im Zimmer werfen.", "B) Sie sollen sie in weiße Körbe beim Wellnessbereich legen.", "C) Sie sollen sie dem Zimmermädchen persönlich geben."], correct: "B) Sie sollen sie in weiße Körbe beim Wellnessbereich legen.", explanation: "...sondern ausschließlich in die dafür vorgesehenen weißen Auffangkörbe am Ausgang des Wellnessbereichs." },
      { id: 4, question: "Unter welcher Bedingung kann man sein Zimmer am Abreisetag länger behalten?", options: ["A) Wenn man extra bezahlt und es vorher mit dem Management klärt.", "B) Wenn man krank ist und eine Bestätigung vom Arzt hat.", "C) Das ist in diesem Hotel grundsätzlich niemals erlaubt."], correct: "A) Wenn man extra bezahlt und es vorher mit dem Management klärt.", explanation: "Ein... 'Late Check-out'... ist nur... nach vorheriger Absprache... möglich. Hierfür wird eine Pauschalgebühr... fällig." }
    ]
  },
  {
    id: "lesen-ru-2",
    title: "Teil 5: Teilnahmebedingungen Stadtmarathon",
    level: "B1",
    topic: "Sport & Freizeit",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Offizielle Teilnahmebedingungen für den 15. Münchener Stadtmarathon

Wir freuen uns über Ihr Interesse an unserem jährlichen Sportevent. Um einen reibungslosen und sicheren Ablauf für die über 10.000 erwarteten Läufer zu gewährleisten, gelten folgende verbindliche Bestimmungen:

Anmeldung und Gebühren: Die Registrierung für alle angebotenen Distanzen (5 km, 10 km und Halbmarathon) kann ausschließlich über unser gesichertes Online-Portal erfolgen. Anmeldeschluss ist der 1. September um 23:59 Uhr. Eine Nachmeldung am Tag des Laufes ist aus versicherungstechnischen Gründen strikt ausgeschlossen. Die reguläre Teilnahmegebühr beträgt 45 Euro für Erwachsene und 20 Euro für Minderjährige. In dieser Gebühr sind die Zeitmessung, die medizinische Versorgung auf der Strecke und das offizielle Teilnehmershirt inkludiert. Das Shirt wird zusammen mit den Startnummern ausgegeben.

Abholung der Startunterlagen: Bitte holen Sie Ihre Startnummer zwingend am Samstag, dem Tag vor dem Lauf, zwischen 09:00 und 19:00 Uhr in der Haupthalle des Rathauses ab. Eine Abholung durch Dritte ist nur mit einer unterschriebenen Vollmacht und einer Ausweiskopie möglich.

Sicherheitsrichtlinien: Während der gesamten Veranstaltung sind die Straßen der Innenstadt für jeglichen motorisierten Verkehr komplett gesperrt. Wir weisen ausdrücklich darauf hin, dass Begleitpersonen (Freunde, Familie) die Strecke auf keinen Fall mit Fahrrädern oder E-Scootern befahren dürfen, da dies eine enorme Verletzungsgefahr für die Läufer darstellt. Zuwiderhandlungen führen zur sofortigen Disqualifikation des begleiteten Läufers.`,
    questions: [
      { id: 1, question: "Wie kann man sich für den Marathon registrieren?", options: ["A) Man muss am Tag des Laufes frühzeitig vor Ort sein.", "B) Man kann sich ausschließlich über das Internet anmelden.", "C) Man kann ein Formular im Rathaus ausfüllen."], correct: "B) Man kann sich ausschließlich über das Internet anmelden.", explanation: "Die Registrierung... kann ausschließlich über unser gesichertes Online-Portal erfolgen." },
      { id: 2, question: "Was bekommen alle bezahlenden Teilnehmer unter anderem?", options: ["A) Ein Paar neue Laufschuhe von einem Sponsor.", "B) Ein offizielles Teilnehmershirt.", "C) Eine kostenlose Mahlzeit nach dem Lauf."], correct: "B) Ein offizielles Teilnehmershirt.", explanation: "In dieser Gebühr sind die Zeitmessung, die medizinische Versorgung auf der Strecke und das offizielle Teilnehmershirt inkludiert." },
      { id: 3, question: "Was wird benötigt, wenn ein Freund die Startnummer für jemanden abholt?", options: ["A) Das ist nicht erlaubt, jeder muss selbst kommen.", "B) Ein Anruf des Läufers beim Veranstalter.", "C) Eine unterschriebene Vollmacht und eine Kopie des Ausweises."], correct: "C) Eine unterschriebene Vollmacht und eine Kopie des Ausweises.", explanation: "Eine Abholung durch Dritte ist nur mit einer unterschriebenen Vollmacht und einer Ausweiskopie möglich." },
      { id: 4, question: "Welche strikte Regel gilt für Zuschauer und Freunde an der Strecke?", options: ["A) Sie dürfen nicht mit Fahrrädern auf der Strecke fahren.", "B) Sie müssen eine Gebühr von 20 Euro bezahlen.", "C) Sie dürfen keine Fotos von den Läufern machen."], correct: "A) Sie dürfen nicht mit Fahrrädern auf der Strecke fahren.", explanation: "...dass Begleitpersonen... die Strecke auf keinen Fall mit Fahrrädern... befahren dürfen." }
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
    readingText: `Nutzungs- und Gebührenordnung der Zentralbibliothek:

1. Ausleihe und Fristen: Die Ausleihe von Büchern, wissenschaftlichen Zeitschriften und audiovisuellen Medien (CDs, DVDs) ist für alle registrierten Bürger mit einem gültigen Bibliotheksausweis grundsätzlich kostenlos. Die reguläre Leihfrist beträgt für gedruckte Bücher exakt 4 Wochen, für alle audiovisuellen Medien jedoch nur 2 Wochen. Sollten Sie die Medien für Ihr Studium länger benötigen, können Sie die Frist online über Ihr Benutzerkonto um weitere 14 Tage verlängern. Dies ist jedoch strengstens untersagt, falls das entsprechende Medium in der Zwischenzeit von einem anderen Nutzer verbindlich reserviert (vorgemerkt) wurde.

2. Gebühren bei Verspätung: Bitte achten Sie penibel auf das Rückgabedatum. Bei einer Überschreitung der Leihfrist fallen automatisch und ohne vorherige schriftliche Warnung Mahngebühren an: Diese belaufen sich auf 2,00 Euro pro Buch und angefangener Woche. Bei DVDs sind die Strafgebühren mit 3,00 Euro pro Woche deutlich höher.

3. Verhalten in den Lesesälen: Um eine ruhige Arbeitsatmosphäre zu garantieren, ist das Führen von Telefonaten sowie der Konsum von geruchsintensiven Speisen in den Lesesälen absolut verboten. Ausnahmen gelten lediglich für Getränke, sofern diese in fest verschließbaren Behältern (z.B. Thermoskannen oder Trinkflaschen) transportiert werden. Mäntel, Jacken und Taschen, die größer als das DIN-A4-Format sind, dürfen nicht mit an die Arbeitsplätze genommen werden und müssen zwingend in den elektronischen Schließfächern im Foyer deponiert werden.`,
    questions: [
      { id: 1, question: "Wie lange darf man DVDs und CDs ausleihen, bevor man sie verlängert?", options: ["A) Genau 4 Wochen.", "B) Nur 2 Wochen.", "C) So lange, wie man sie zum Lernen braucht."], correct: "B) Nur 2 Wochen.", explanation: "Die reguläre Leihfrist beträgt für gedruckte Bücher exakt 4 Wochen, für alle audiovisuellen Medien (CDs, DVDs) jedoch nur 2 Wochen." },
      { id: 2, question: "Unter welcher Bedingung ist eine Fristverlängerung online nicht erlaubt?", options: ["A) Wenn man die Medien schon seit einem Jahr hat.", "B) Wenn ein anderer Leser das Buch oder die DVD bereits reserviert hat.", "C) Wenn man keine E-Mail-Adresse im System hinterlegt hat."], correct: "B) Wenn ein anderer Leser das Buch oder die DVD bereits reserviert hat.", explanation: "Dies ist jedoch strengstens untersagt, falls das entsprechende Medium... von einem anderen Nutzer verbindlich reserviert (vorgemerkt) wurde." },
      { id: 3, question: "Was passiert, wenn man ein normales Buch eine Woche zu spät zurückgibt?", options: ["A) Man bekommt zuerst einen Warnbrief ohne Gebühren.", "B) Man muss eine Strafe von 3,00 Euro zahlen.", "C) Man muss eine automatische Mahngebühr von 2,00 Euro zahlen."], correct: "C) Man muss eine automatische Mahngebühr von 2,00 Euro zahlen.", explanation: "...fallen automatisch und ohne vorherige schriftliche Warnung Mahngebühren an: Diese belaufen sich auf 2,00 Euro pro Buch und angefangener Woche." },
      { id: 4, question: "Welche Regel gilt für das Mitbringen von Getränken in den Lesesaal?", options: ["A) Getränke sind strengstens verboten.", "B) Man darf sie nur in Flaschen mitbringen, die man fest verschließen kann.", "C) Man darf nur Wasser mitbringen, keinen Kaffee."], correct: "B) Man darf sie nur in Flaschen mitbringen, die man fest verschließen kann.", explanation: "Ausnahmen gelten lediglich für Getränke, sofern diese in fest verschließbaren Behältern... transportiert werden." }
    ]
  },
  {
    id: "lesen-ru-4",
    title: "Teil 5: Hausordnung im Studentenwohnheim",
    level: "B1",
    topic: "Wohnen & Leben",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Zentrale Hausordnung des Studentenwohnheims "Campus Süd":

Um ein harmonisches und konfliktfreies Zusammenleben von über 200 Studierenden aus verschiedenen Kulturen zu gewährleisten, ist die strikte Einhaltung der folgenden Hausordnung vertraglich vorgeschrieben:

1. Lärmschutz und Ruhezeiten: Das Wohnheim ist kein Partyraum. Die gesetzlichen Ruhezeiten zwischen 22:00 und 07:00 Uhr, sowie an Sonn- und Feiertagen ganztägig, sind von allen Bewohnern kompromisslos einzuhalten. Während dieser Stunden dürfen Musik und Fernseher ausschließlich auf Zimmerlautstärke betrieben werden. Bei wiederholten massiven Ruhestörungen behält sich die Heimleitung vor, den Mietvertrag fristlos zu kündigen.

2. Nutzung der Gemeinschaftsküchen: Die Küchen auf den jeweiligen Stockwerken sind Eigentum der Universität. Jeder Bewohner ist verpflichtet, Herd, Spüle und Arbeitsflächen nach jeder Benutzung selbstständig und gründlich zu reinigen. Schmutziges Geschirr darf unter keinen Umständen über Nacht auf den Tischen stehen gelassen werden. Eine beauftragte Reinigungsfirma putzt lediglich einmal wöchentlich die Fußböden. 

3. Sicherheit und Brandschutz: Aus brandschutzrechtlichen Gründen ist das Abstellen von Fahrrädern, E-Scootern oder Möbeln in den Fluren und im gesamten Treppenhaus strengstens verboten. Diese Fluchtwege müssen immer frei bleiben. Bitte nutzen Sie für Ihre Fahrräder den beleuchteten, überdachten Fahrradständer direkt vor dem Haupteingang. Das Halten von Haustieren (mit Ausnahme von kleinen Fischen in Aquarien) ist im gesamten Gebäude aus hygienischen Gründen untersagt.`,
    questions: [
      { id: 1, question: "Wann müssen die Studierenden im Wohnheim besonders leise sein?", options: ["A) Nur am Wochenende und in der Prüfungszeit.", "B) Täglich von 22 bis 7 Uhr und an Sonn- und Feiertagen den ganzen Tag.", "C) Jeden Tag von 22 bis 7 Uhr, außer am Samstag."], correct: "B) Täglich von 22 bis 7 Uhr und an Sonn- und Feiertagen den ganzen Tag.", explanation: "Die gesetzlichen Ruhezeiten zwischen 22:00 und 07:00 Uhr, sowie an Sonn- und Feiertagen ganztägig, sind... kompromisslos einzuhalten." },
      { id: 2, question: "Wer ist hauptsächlich für die Sauberkeit der Küchen zuständig?", options: ["A) Eine Reinigungsfirma putzt jeden Abend alles sauber.", "B) Die Studierenden müssen nach dem Kochen selbst putzen.", "C) Der Hausmeister kontrolliert und putzt die Küche."], correct: "B) Die Studierenden müssen nach dem Kochen selbst putzen.", explanation: "Jeder Bewohner ist verpflichtet, Herd, Spüle und Arbeitsflächen nach jeder Benutzung selbstständig und gründlich zu reinigen." },
      { id: 3, question: "Wo müssen die Fahrräder der Studenten geparkt werden?", options: ["A) In den Fluren vor den Zimmern.", "B) Vor dem Haupteingang in einem speziellen Fahrradständer.", "C) Im Treppenhaus, wenn es regnet."], correct: "B) Vor dem Haupteingang in einem speziellen Fahrradständer.", explanation: "Bitte nutzen Sie für Ihre Fahrräder den beleuchteten, überdachten Fahrradständer direkt vor dem Haupteingang." },
      { id: 4, question: "Welche Haustiere sind in den Zimmern ausnahmsweise erlaubt?", options: ["A) Keine, alle Tiere sind absolut verboten.", "B) Nur kleine Hunde oder Katzen, die nicht bellen.", "C) Nur kleine Fische in einem Aquarium."], correct: "C) Nur kleine Fische in einem Aquarium.", explanation: "Das Halten von Haustieren (mit Ausnahme von kleinen Fischen in Aquarien) ist... untersagt." }
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
    readingText: `Offizielle Richtlinien der Stadtverwaltung zur korrekten Mülltrennung:

Um die Umwelt nachhaltig zu schützen und ein effizientes Recycling zu ermöglichen, ist eine strikte und fehlerfreie Mülltrennung in unserer Gemeinde gesetzlich vorgeschrieben. Bei gravierenden Verstößen können Bußgelder verhängt werden. Bitte beachten Sie dringend die folgende Zuordnung für Ihren Hausmüll:

- Papiertonne (Blaue Tonne): Diese Tonne ist ausschließlich für sauberes Papier, Pappe, Zeitungen und Kartonagen vorgesehen. Achtung: Stark verschmutzte Papiere (wie zum Beispiel benutzte Papiertaschentücher, feuchte Küchenrollen oder fettige Pizzakartons) können nicht recycelt werden und gehören unter keinen Umständen hierher!
- Wertstofftonne (Gelbe Tonne / Gelber Sack): Hier sammeln Sie alle Leichtverpackungen aus Kunststoff, Metall und Aluminium. Dazu zählen leere Joghurtbecher (bitte den Aluminiumdeckel vorher abziehen!), Konservendosen, Shampooflaschen und Plastikfolien. 
- Biotonne (Braune Tonne): Diese Tonne ist reserviert für alle organischen und kompostierbaren Abfälle wie Obst- und Gemüsereste, Kaffeefilter, Eierschalen und Gartenabfälle. Bitte verwenden Sie zum Sammeln in der Küche keine normalen Plastiktüten. Auch die sogenannten "kompostierbaren" Bio-Plastiktüten aus dem Supermarkt sind in unserer Anlage verboten, da sie nicht schnell genug verrotten. Verwenden Sie Papiertüten oder wickeln Sie den Müll in Zeitungspapier.
- Restmüll (Schwarze Tonne): Für alle Abfälle, die weder recycelt noch kompostiert werden können. Beispiele: Windeln, Asche, Staubsaugerbeutel oder kaputtes Porzellan.
Altglas (Flaschen, Marmeladengläser) darf auf keinen Fall in den Hausmüll, sondern muss farblich getrennt (weiß, grün, braun) in die öffentlichen Glascontainer eingeworfen werden.`,
    questions: [
      { id: 1, question: "Warum wurden diese strengen Richtlinien verfasst?", options: ["A) Um die Bürger finanziell durch Bußgelder zu bestrafen.", "B) Um die Umwelt zu schützen und effizientes Recycling zu ermöglichen.", "C) Weil die Müllabfuhr streikt und keinen Müll mehr abholt."], correct: "B) Um die Umwelt zu schützen und effizientes Recycling zu ermöglichen.", explanation: "Um die Umwelt nachhaltig zu schützen und ein effizientes Recycling zu ermöglichen, ist eine strikte... Mülltrennung... vorgeschrieben." },
      { id: 2, question: "In welche Tonne gehört ein schmutziger, öliger Pizzakarton?", options: ["A) In die Blaue Tonne (Papiertonne).", "B) In die Braune Tonne (Biotonne).", "C) Er gehört nicht in die Blaue Tonne, da er verschmutzt ist."], correct: "C) Er gehört nicht in die Blaue Tonne, da er verschmutzt ist.", explanation: "Achtung: Stark verschmutzte Papiere (... fettige Pizzakartons)... gehören unter keinen Umständen hierher (in die Papiertonne)!" },
      { id: 3, question: "Was ist beim Entsorgen von Biomüll besonders wichtig?", options: ["A) Man darf Bio-Plastiktüten aus dem Supermarkt benutzen.", "B) Man darf gar keine Plastiktüten verwenden, auch keine Bio-Plastiktüten.", "C) Man muss den Müll vorher in Alufolie einwickeln."], correct: "B) Man darf gar keine Plastiktüten verwenden, auch keine Bio-Plastiktüten.", explanation: "Auch die sogenannten 'kompostierbaren' Bio-Plastiktüten aus dem Supermarkt sind in unserer Anlage verboten..." },
      { id: 4, question: "Wie und wo müssen leere Weinflaschen entsorgt werden?", options: ["A) Sie kommen einfach in die Schwarze Tonne.", "B) Sie kommen ungetrennt in die Gelbe Tonne.", "C) Sie müssen nach Farben sortiert in öffentliche Container auf der Straße."], correct: "C) Sie müssen nach Farben sortiert in öffentliche Container auf der Straße.", explanation: "Altglas... muss farblich getrennt (weiß, grün, braun) in die öffentlichen Glascontainer eingeworfen werden." }
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
    readingText: `Verbindliche Richtlinien für die Nutzung von Firmenfahrzeugen (TechCorp GmbH):

An alle Mitarbeiterinnen und Mitarbeiter im Außendienst,
die Firma stellt Ihnen für Ihre tägliche Arbeit bei unseren Kunden moderne Firmenfahrzeuge zur Verfügung. Um Missbrauch vorzubeugen und die Wartungskosten zu kontrollieren, gelten ab sofort folgende strenge Dienstanweisungen:

1. Ausschließliche Dienstnutzung: Die Firmenwagen dürfen unter keinen Umständen für private Zwecke genutzt werden. Selbst kurze Fahrten nach Feierabend (z. B. zum Supermarkt oder zum Abholen der Kinder) sind strengstens untersagt. Ein Verstoß gegen diese Regel wird als schwerwiegendes Fehlverhalten gewertet und kann zu einer fristlosen Kündigung führen. 

2. Dokumentation: Jeder Fahrer ist verpflichtet, nach dem Beenden jeder einzelnen Fahrt das elektronische Fahrtenbuch, welches fest im Auto installiert ist, sorgfältig auszufüllen. Es müssen der genaue Kilometerstand, das angefahrene Ziel sowie der Name des besuchten Kunden eingetragen werden. 

3. Tankregelungen: Bitte nutzen Sie zum Tanken der Fahrzeuge ausschließlich die Flotten-Tankkarten, die sich im Handschuhfach jedes Autos befinden. Unsere Firma hat einen exklusiven Großkundenvertrag mit der Tankstellenkette "Star". Das Tanken an anderen Tankstellen (z. B. Shell oder Aral) ist nur in absoluten Notfällen erlaubt. In diesem Fall müssen Sie die Quittung aufheben und einen Antrag auf Rückerstattung in der Buchhaltung einreichen.
Am Ende jedes Arbeitstages muss das Fahrzeug vollgetankt auf dem gesicherten Firmenparkplatz abgestellt werden.`,
    questions: [
      { id: 1, question: "Darf ein Mitarbeiter mit dem Firmenauto nach der Arbeit kurz einkaufen fahren?", options: ["A) Ja, wenn er das Benzin aus eigener Tasche zahlt.", "B) Nein, das ist streng verboten und kann zur Kündigung führen.", "C) Ja, aber nur wenn der Supermarkt auf dem Weg liegt."], correct: "B) Nein, das ist streng verboten und kann zur Kündigung führen.", explanation: "Selbst kurze Fahrten nach Feierabend (z. B. zum Supermarkt...) sind strengstens untersagt. Ein Verstoß... kann zu einer fristlosen Kündigung führen." },
      { id: 2, question: "Welche Pflicht hat der Fahrer direkt nach einer Dienstfahrt?", options: ["A) Er muss das Auto gründlich in der Waschanlage waschen.", "B) Er muss seinen Vorgesetzten anrufen und Bericht erstatten.", "C) Er muss wichtige Daten im elektronischen System des Autos eintragen."], correct: "C) Er muss wichtige Daten im elektronischen System des Autos eintragen.", explanation: "...nach dem Beenden jeder einzelnen Fahrt das elektronische Fahrtenbuch... sorgfältig auszufüllen. Es müssen... Kilometerstand... eingetragen werden." },
      { id: 3, question: "Welche Regel gilt für das Tanken des Firmenwagens?", options: ["A) Man muss immer bei der 'Star'-Tankstelle tanken, Ausnahmen gibt es nur im Notfall.", "B) Man kann tanken, wo es am billigsten ist.", "C) Man muss das Benzin immer selbst bezahlen und bekommt das Geld am Monatsende zurück."], correct: "A) Man muss immer bei der 'Star'-Tankstelle tanken, Ausnahmen gibt es nur im Notfall.", explanation: "Unsere Firma hat einen exklusiven Großkundenvertrag mit der Tankstellenkette 'Star'. Das Tanken an anderen Tankstellen... ist nur in absoluten Notfällen erlaubt." },
      { id: 4, question: "In welchem Zustand muss das Auto abends auf dem Firmenparkplatz abgestellt werden?", options: ["A) Mit komplett leerem Tank.", "B) Mit vollem Tank.", "C) Das Auto darf man abends mit nach Hause nehmen."], correct: "B) Mit vollem Tank.", explanation: "Am Ende jedes Arbeitstages muss das Fahrzeug vollgetankt auf dem gesicherten Firmenparkplatz abgestellt werden." }
    ]
  },
  {
    id: "lesen-ru-7",
    title: "Teil 5: Regeln im Naturschutzgebiet",
    level: "B1",
    topic: "Freizeit & Natur",
    duration: "15 Phút",
    type: "Quy định & Thông báo",
    questionType: "multiple_choice",
    readingText: `Besucherordnung für das Erholungs- und Naturschutzgebiet "Silbersee":

Herzlich willkommen am Silbersee! Damit die empfindliche Natur geschützt wird und gleichzeitig alle Besucher einen erholsamen Tag verbringen können, ist den Anweisungen der Park-Ranger Folge zu leisten. Bitte beachten Sie zwingend die folgenden Vorschriften:

1. Schwimmen und Wassersport: Das Schwimmen, Tauchen und Bootfahren ist ausschließlich in den speziell gekennzeichneten Bereichen am Hauptstrand erlaubt. Bitte beachten Sie die roten Schwimmbojen im Wasser. Hinter diesen Bojen im nördlichen Teil des Sees beginnt ein streng geschütztes Naturschutzgebiet für seltene Wasservögel. Dieses Gebiet darf unter keinen Umständen betreten oder beschwommen werden.

2. Feuer und Grillen: Aufgrund der hohen Waldbrandgefahr im Sommer sind offene Feuer und das Grillen auf den Wiesen und im Wald absolut verboten. Wer grillen möchte, muss die gemauerten und fest installierten Grillplätze direkt neben dem Kiosk nutzen. Die Asche muss danach fachgerecht entsorgt werden.

3. Mitführen von Tieren: Hunde sind am Hauptstrand und auf den Liegewiesen für Familien aus hygienischen Gründen nicht gestattet. Für Gäste, die ihren Hund mitbringen, haben wir jedoch einen separaten Hundestrand im südlichen Teil des Sees eingerichtet. Nur dort dürfen die Tiere auch ohne Leine ins Wasser laufen. Auf allen anderen Wegen im Park herrscht strikte Leinenpflicht. Wer Müll oder Hundekot in der Natur liegen lässt, muss mit einem Bußgeld von 50 Euro rechnen.`,
    questions: [
      { id: 1, question: "Wo ist das Schwimmen im Silbersee gestattet?", options: ["A) Überall, wo das Wasser tief genug ist.", "B) Nur vor den roten Bojen am Hauptstrand.", "C) Besonders gut im Naturschutzgebiet bei den Vögeln."], correct: "B) Nur vor den roten Bojen am Hauptstrand.", explanation: "Hinter diesen Bojen... beginnt ein... Naturschutzgebiet... Dieses Gebiet darf unter keinen Umständen... beschwommen werden." },
      { id: 2, question: "Darf man am See ein Barbecue veranstalten?", options: ["A) Nein, das ist wegen der Waldbrandgefahr überall streng verboten.", "B) Ja, aber ausschließlich an den gemauerten Plätzen beim Kiosk.", "C) Ja, man darf überall auf der Wiese grillen, wenn man aufpasst."], correct: "B) Ja, aber ausschließlich an den gemauerten Plätzen beim Kiosk.", explanation: "Wer grillen möchte, muss die gemauerten und fest installierten Grillplätze direkt neben dem Kiosk nutzen." },
      { id: 3, question: "Was ist die Regel für Hunde am Silbersee?", options: ["A) Hunde sind im gesamten Parkgelände verboten.", "B) Hunde dürfen am Hauptstrand frei herumlaufen.", "C) Es gibt einen extra Hundestrand, wo sie ohne Leine ins Wasser dürfen."], correct: "C) Es gibt einen extra Hundestrand, wo sie ohne Leine ins Wasser dürfen.", explanation: "...haben wir jedoch einen separaten Hundestrand... eingerichtet. Nur dort dürfen die Tiere auch ohne Leine ins Wasser laufen." },
      { id: 4, question: "Welche Strafe droht, wenn man Abfall in die Natur wirft?", options: ["A) Man darf den Park nie wieder betreten.", "B) Man wird gezwungen, den ganzen Strand aufzuräumen.", "C) Man muss eine Geldstrafe in Höhe von 50 Euro bezahlen."], correct: "C) Man muss eine Geldstrafe in Höhe von 50 Euro bezahlen.", explanation: "Wer Müll oder Hundekot in der Natur liegen lässt, muss mit einem Bußgeld von 50 Euro rechnen." }
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
    readingText: `Wichtige Fluggastinformationen der Fluggesellschaft AeroAir:

Sehr geehrte Passagiere, bitte lesen Sie die folgenden Gepäck- und Sicherheitsbestimmungen für Ihren bevorstehenden internationalen Flug sorgfältig durch, um Verzögerungen bei der Sicherheitskontrolle zu vermeiden:

Check-in und Boarding: Wir empfehlen dringend, dass Sie sich mindestens zwei Stunden vor der geplanten Abflugzeit an den Check-in-Schaltern in der Haupthalle einfinden. Die Schalter schließen pünktlich 45 Minuten vor Abflug. Passagiere, die danach eintreffen, verlieren ihren Anspruch auf Beförderung.

Aufgabegepäck: Je nach gebuchtem Tarif gelten unterschiedliche Regeln. Im Standard-Tarif (Economy) ist pro Passagier ein großer Koffer mit einem Maximalgewicht von genau 23 kg im Ticketpreis enthalten. Falls Ihr Koffer schwerer sein sollte, gilt dies als Übergepäck. Dieses muss am Schalter mit einer Gebühr von 15 Euro pro zusätzlichem Kilo teuer bezahlt werden.

Handgepäck und Sicherheitskontrolle: Jeder Fluggast darf ein Handgepäckstück (max. 8 kg) sowie einen kleinen persönlichen Gegenstand (z. B. Handtasche oder Laptoptasche) mit in die Flugzeugkabine nehmen. Bitte beachten Sie die strengen internationalen Regeln für Flüssigkeiten: Im Handgepäck dürfen Flüssigkeiten, Gels oder Cremes (wie Shampoo oder Zahnpasta) nur in kleinen Behältern von maximal 100 ml mitgeführt werden. All diese kleinen Behälter müssen zusammen in einem einzigen, durchsichtigen und wiederverschließbaren Plastikbeutel (max. 1 Liter Fassungsvermögen) verpackt sein und bei der Kontrolle unaufgefordert vorgezeigt werden.`,
    questions: [
      { id: 1, question: "Wann sollten die Passagiere spätestens am Check-in-Schalter sein?", options: ["A) 45 Minuten vor dem Flug.", "B) Zwei Stunden vor dem Abflug.", "C) Genau drei Stunden vorher."], correct: "B) Zwei Stunden vor dem Abflug.", explanation: "Wir empfehlen dringend, dass Sie sich mindestens zwei Stunden vor der geplanten Abflugzeit an den Check-in-Schaltern... einfinden." },
      { id: 2, question: "Wie viel darf das normale Reisegepäck (Koffer) im Economy-Tarif wiegen?", options: ["A) Es gibt keine Gewichtsbegrenzung.", "B) Maximal 8 kg.", "C) Maximal 23 kg."], correct: "C) Maximal 23 kg.", explanation: "Im Standard-Tarif (Economy) ist pro Passagier ein großer Koffer mit einem Maximalgewicht von genau 23 kg im Ticketpreis enthalten." },
      { id: 3, question: "Was geschieht, wenn der Koffer 25 kg wiegt?", options: ["A) Der Koffer darf nicht mit ins Flugzeug.", "B) Man muss für die 2 kg zu viel eine Gebühr von insgesamt 30 Euro bezahlen.", "C) Es ist kostenlos, weil es nur 2 kg mehr sind."], correct: "B) Man muss für die 2 kg zu viel eine Gebühr von insgesamt 30 Euro bezahlen.", explanation: "Übergepäck... muss am Schalter mit einer Gebühr von 15 Euro pro zusätzlichem Kilo teuer bezahlt werden. (2 kg = 30 Euro)." },
      { id: 4, question: "Wie müssen Kosmetikartikel (wie Shampoo) im Handgepäck transportiert werden?", options: ["A) Sie sind in der Kabine komplett verboten.", "B) In großen Flaschen, wenn sie gut verschlossen sind.", "C) In kleinen Behältern bis 100 ml, verpackt in einer durchsichtigen Plastiktüte."], correct: "C) In kleinen Behältern bis 100 ml, verpackt in einer durchsichtigen Plastiktüte.", explanation: "Im Handgepäck dürfen Flüssigkeiten... nur in kleinen Behältern von maximal 100 ml mitgeführt werden... zusammen in einem einzigen, durchsichtigen... Plastikbeutel." }
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
    readingText: `Wichtige Betriebs- und Pflegehinweise für den Kaffeevollautomaten "AromaPlus 3000":

Herzlichen Glückwunsch zum Kauf dieses hochwertigen Geräts. Um eine lange Lebensdauer der Maschine zu gewährleisten, lesen Sie bitte vor der Inbetriebnahme die folgenden Punkte genau durch:

Inbetriebnahme (Vor der allerersten Benutzung): Bevor Sie den ersten Kaffee kochen können, müssen die internen Leitungen gereinigt werden. Füllen Sie dazu den Wassertank auf der Rückseite bis zur markierten MAX-Linie mit kaltem Leitungswasser. Schalten Sie das Gerät ein und drücken Sie die Spültaste, ohne vorher Kaffeebohnen in das Mahlwerk einzufüllen! Lassen Sie das Wasser einmal komplett durch das System laufen.

Kaffeezubereitung: Füllen Sie frische Kaffeebohnen in das obere Fach. Warnung: Verwenden Sie unter keinen Umständen bereits gemahlenen Kaffee (Kaffeepulver) oder löslichen Instant-Kaffee! Das Einfüllen von Pulver verstopft das empfindliche Mahlwerk sofort und führt zum Verlust der Garantie. 

Reinigung und Entkalkung: Die Maschine verfügt über ein automatisches Warnsystem. Sobald die rote Kontrolllampe auf dem Display aufleuchtet, muss das Gerät zwingend entkalkt werden. Verwenden Sie für diesen Vorgang ausschließlich den flüssigen Original-Entkalker der Firma "Aroma". Die Verwendung von aggressiven Haushaltsmitteln wie Essig oder Zitronensäure kann die Plastikschläuche im Inneren dauerhaft zerstören. Der Auffangbehälter für den nassen Kaffeesatz muss außerdem aus hygienischen Gründen jeden Abend geleert und mit warmem Wasser ausgewaschen werden, um Schimmelbildung zu vermeiden.`,
    questions: [
      { id: 1, question: "Was ist bei der allerersten Benutzung des Geräts zu tun?", options: ["A) Man muss heißen Kaffee kochen, um die Maschine zu testen.", "B) Man muss die Maschine nur mit Wasser durchspülen, ohne Kaffee einzufüllen.", "C) Man muss die Maschine sofort mit Essig entkalken."], correct: "B) Man muss die Maschine nur mit Wasser durchspülen, ohne Kaffee einzufüllen.", explanation: "Füllen Sie dazu den Wassertank... mit kaltem Leitungswasser... drücken Sie die Spültaste, ohne vorher Kaffeebohnen... einzufüllen!" },
      { id: 2, question: "Welche Art von Kaffee darf NICHT in die Maschine gefüllt werden?", options: ["A) Ganze Kaffeebohnen.", "B) Sehr stark geröstete Kaffeebohnen.", "C) Kaffeepulver oder Instant-Kaffee."], correct: "C) Kaffeepulver oder Instant-Kaffee.", explanation: "Warnung: Verwenden Sie unter keinen Umständen bereits gemahlenen Kaffee (Kaffeepulver) oder löslichen Instant-Kaffee!" },
      { id: 3, question: "Wann weiß man, dass das Gerät entkalkt werden muss?", options: ["A) Man muss es jeden Freitag machen.", "B) Wenn ein rotes Licht auf dem Display leuchtet.", "C) Wenn der Kaffee nicht mehr gut schmeckt."], correct: "B) Wenn ein rotes Licht auf dem Display leuchtet.", explanation: "Sobald die rote Kontrolllampe auf dem Display aufleuchtet, muss das Gerät zwingend entkalkt werden." },
      { id: 4, question: "Womit darf die Maschine entkalkt werden?", options: ["A) Mit normalem Essig aus dem Supermarkt.", "B) Mit Zitronensäure.", "C) Nur mit dem speziellen Mittel des Herstellers 'Aroma'."], correct: "C) Nur mit dem speziellen Mittel des Herstellers 'Aroma'.", explanation: "Verwenden Sie für diesen Vorgang ausschließlich den flüssigen Original-Entkalker der Firma 'Aroma'. Die Verwendung von... Essig... kann die Plastikschläuche... zerstören." }
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
    readingText: `Offizielle Sicherheits- und Evakuierungsrichtlinien der Firma TechCorp: Verhalten im Brandfall

Die Sicherheit unserer Mitarbeiter hat oberste Priorität. Prägen Sie sich die folgenden Handlungsanweisungen gut ein. Wenn Sie den Feueralarm (einen extrem lauten, auf- und abschwellenden Sirenenton) hören, bewahren Sie unbedingt Ruhe und geraten Sie nicht in Panik. 

1. Arbeitsplatz verlassen: Verlassen Sie sofort und zügig Ihren Arbeitsplatz. Nehmen Sie nur Ihre absolut wichtigsten persönlichen Wertgegenstände wie Handy, Geldbörse und Autoschlüssel mit. Verschwenden Sie keine Zeit damit, schwere Laptops einzupacken oder den Computer ordnungsgemäß herunterzufahren! Schließen Sie beim Verlassen des Büros die Türen, schließen Sie diese aber nicht mit dem Schlüssel ab.

2. Fluchtwege: Nutzen Sie bei einem Feueralarm auf gar keinen Fall die elektrischen Aufzüge, da diese bei einem Stromausfall stecken bleiben können und dann zu einer tödlichen Falle werden. Benutzen Sie ausschließlich die ausgeschilderten Treppenhäuser, um nach unten ins Erdgeschoss zu gelangen. Folgen Sie immer den grünen, leuchtenden Notausgangs-Schildern an der Decke. Helfen Sie Kollegen, die Schwierigkeiten beim Gehen haben.

3. Sammelplatz: Gehen Sie nach dem Verlassen des Gebäudes direkt und auf kürzestem Weg zum offiziellen Sammelplatz. Dieser befindet sich auf dem großen Mitarbeiterparkplatz hinter dem Gebäude (markiert als Zone B). Stellen Sie sich dort nicht auf die Straßen, um die anrückenden Feuerwehrfahrzeuge nicht zu blockieren.

4. Anwesenheitskontrolle: Melden Sie sich auf dem Sammelplatz sofort bei Ihrem direkten Abteilungsleiter, damit anhand der Listen kontrolliert werden kann, ob alle Mitarbeiter das brennende Gebäude sicher verlassen haben. Gehen Sie unter keinen Umständen einfach nach Hause, bevor der Feuerwehr-Einsatzleiter offiziell Entwarnung gibt und den Einsatz für beendet erklärt.`,
    questions: [
      { id: 1, question: "Was sollen die Mitarbeiter tun, bevor sie das Büro verlassen?", options: ["A) Sie sollen den Computer ausschalten und alle Fenster öffnen.", "B) Sie sollen ihre schweren Laptops in die Taschen packen.", "C) Sie sollen nur kleine Wertsachen mitnehmen und keine Zeit verschwenden."], correct: "C) Sie sollen nur kleine Wertsachen mitnehmen und keine Zeit verschwenden.", explanation: "Nehmen Sie nur Ihre absolut wichtigsten persönlichen Wertgegenstände... mit. Verschwenden Sie keine Zeit damit, schwere Laptops einzupacken oder den Computer... herunterzufahren!" },
      { id: 2, question: "Warum darf man bei einem Brand den Aufzug nicht benutzen?", options: ["A) Weil er zu langsam ist und nicht genug Platz für alle hat.", "B) Weil er bei einem Stromausfall stecken bleiben könnte.", "C) Weil der Aufzug nur für die Feuerwehr reserviert ist."], correct: "B) Weil er bei einem Stromausfall stecken bleiben könnte.", explanation: "...auf gar keinen Fall die elektrischen Aufzüge, da diese bei einem Stromausfall stecken bleiben können..." },
      { id: 3, question: "Wo befindet sich der Ort, an dem sich alle treffen müssen (Sammelplatz)?", options: ["A) Auf der großen Straße direkt vor dem Haupteingang.", "B) Auf dem Parkplatz, der sich hinter dem Gebäude befindet.", "C) Im Erdgeschoss des Bürogebäudes."], correct: "B) Auf dem Parkplatz, der sich hinter dem Gebäude befindet.", explanation: "Dieser befindet sich auf dem großen Mitarbeiterparkplatz hinter dem Gebäude..." },
      { id: 4, question: "Wann dürfen die Mitarbeiter nach dem Alarm nach Hause gehen?", options: ["A) Wenn sie sich beim Abteilungsleiter gemeldet haben.", "B) Erst wenn die Feuerwehr sagt, dass die Situation sicher ist.", "C) Sie dürfen sofort nach Hause gehen, sobald sie draußen sind."], correct: "B) Erst wenn die Feuerwehr sagt, dass die Situation sicher ist.", explanation: "Gehen Sie unter keinen Umständen einfach nach Hause, bevor der Feuerwehr-Einsatzleiter offiziell Entwarnung gibt..." }
    ]
  }
];
