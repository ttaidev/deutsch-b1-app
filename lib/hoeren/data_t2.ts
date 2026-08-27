import { ListeningExercise } from "./data";

export const HOEREN_T2_EXERCISES: ListeningExercise[] = [
  {
    id: "hoeren-2-1",
    title: "Teil 2: Durchsage am Bahnhof",
    level: "B1",
    topic: "Verkehr & Reisen",
    duration: "6 Phút",
    type: "Điền thông tin còn thiếu (Lückenfüller)",
    transcript: `Achtung an Gleis 4. Der Intercity Express 502 nach München Hauptbahnhof, planmäßige Abfahrt um 14 Uhr 30, hat heute voraussichtlich 20 Minuten Verspätung. Der Grund dafür sind Personen im Gleis. Wir bitten um Ihr Verständnis. Fahrgäste nach Stuttgart steigen bitte in den Regionalexpress am Gleis 7 um. Dieser Zug fährt pünktlich um 14 Uhr 45 ab.`,
    questions: [
      { id: 1, question: "Der ICE fährt nach ______ Hauptbahnhof.", type: "fill_blank", correct: "München", explanation: "Ansage: 'nach München Hauptbahnhof'." },
      { id: 2, question: "Planmäßige Abfahrt ist um ______ Uhr 30.", type: "fill_blank", correct: "14", explanation: "Ansage: 'planmäßige Abfahrt um 14 Uhr 30'." },
      { id: 3, question: "Der Zug hat ______ Minuten Verspätung.", type: "fill_blank", correct: "20", explanation: "Ansage: 'voraussichtlich 20 Minuten Verspätung'." },
      { id: 4, question: "Der Grund für die Verspätung sind ______ im Gleis.", type: "fill_blank", correct: "Personen", explanation: "Ansage: 'Der Grund dafür sind Personen im Gleis'." },
      { id: 5, question: "Wir bitten um Ihr ______.", type: "fill_blank", correct: "Verständnis", explanation: "Ansage: 'Wir bitten um Ihr Verständnis'." },
      { id: 6, question: "Fahrgäste nach ______ steigen bitte um.", type: "fill_blank", correct: "Stuttgart", explanation: "Ansage: 'Fahrgäste nach Stuttgart steigen bitte... um'." },
      { id: 7, question: "Sie steigen in den ______ um.", type: "fill_blank", correct: "Regionalexpress", explanation: "Ansage: 'in den Regionalexpress'." },
      { id: 8, question: "Der Anschlusszug fährt von Gleis ______ ab.", type: "fill_blank", correct: "7", explanation: "Ansage: 'am Gleis 7'." },
      { id: 9, question: "Dieser Zug fährt ______ ab.", type: "fill_blank", correct: "pünktlich", explanation: "Ansage: 'Dieser Zug fährt pünktlich...'." },
      { id: 10, question: "Die Abfahrt ist um 14 Uhr ______.", type: "fill_blank", correct: "45", explanation: "Ansage: 'um 14 Uhr 45 ab'." }
    ]
  },
  {
    id: "hoeren-2-2",
    title: "Teil 2: Angebot im Supermarkt",
    level: "B1",
    topic: "Einkaufen & Alltag",
    duration: "6 Phút",
    type: "Điền từ vào đoạn văn (Cloze Test)",
    transcript: `Liebe Kundinnen und Kunden, wir haben heute ein besonderes Angebot für Sie in unserer Obstabteilung. Frische Erdbeeren aus der Region kosten heute nur 2 Euro 50 für die 500-Gramm-Schale. Außerdem finden Sie an unserer Käsetheke spanischen Manchego-Käse im Angebot. Wenn Sie 200 Gramm kaufen, erhalten Sie ein Glas Feigensenf gratis dazu. Besuchen Sie auch unsere Bäckerei im Eingangsbereich: Ab 18 Uhr gibt es dort 30 Prozent Rabatt auf alle Brote.`,
    questions: [
      { id: 1, question: "Liebe ______ und Kunden...", type: "fill_blank", correct: "Kundinnen", explanation: "Ansage: 'Liebe Kundinnen und Kunden'." },
      { id: 2, question: "Das Angebot ist in der ______.", type: "fill_blank", correct: "Obstabteilung", explanation: "Ansage: 'in unserer Obstabteilung'." },
      { id: 3, question: "Frische ______ aus der Region...", type: "fill_blank", correct: "Erdbeeren", explanation: "Ansage: 'Frische Erdbeeren aus der Region'." },
      { id: 4, question: "Sie kosten heute nur ______ Euro 50.", type: "fill_blank", correct: "2", explanation: "Ansage: 'kosten heute nur 2 Euro 50'." },
      { id: 5, question: "Das gilt für die 500-______-Schale.", type: "fill_blank", correct: "Gramm", explanation: "Ansage: 'für die 500-Gramm-Schale'." },
      { id: 6, question: "An der ______ gibt es Käse im Angebot.", type: "fill_blank", correct: "Käsetheke", explanation: "Ansage: 'an unserer Käsetheke'." },
      { id: 7, question: "Es ist ein ______ Manchego-Käse.", type: "fill_blank", correct: "spanischen", explanation: "Ansage: 'spanischen Manchego-Käse'." },
      { id: 8, question: "Man erhält ein Glas Feigensenf ______ dazu.", type: "fill_blank", correct: "gratis", explanation: "Ansage: 'erhalten Sie ein Glas Feigensenf gratis dazu'." },
      { id: 9, question: "Besuchen Sie auch unsere Bäckerei im ______.", type: "fill_blank", correct: "Eingangsbereich", explanation: "Ansage: 'in unserer Bäckerei im Eingangsbereich'." },
      { id: 10, question: "Ab 18 Uhr gibt es 30 Prozent ______ auf alle Brote.", type: "fill_blank", correct: "Rabatt", explanation: "Ansage: '30 Prozent Rabatt auf alle Brote'." }
    ]
  },
  {
    id: "hoeren-2-3",
    title: "Teil 2: Wetterbericht im Radio",
    level: "B1",
    topic: "Wetter & Natur",
    duration: "6 Phút",
    type: "Điền từ vào đoạn văn (Cloze Test)",
    transcript: `Und nun zum Wetter für morgen, Freitag. Der Tag beginnt im ganzen Land stark bewölkt und am Vormittag regnet es im Norden immer wieder. Gegen Mittag lässt der Regen nach und im Süden zeigt sich öfter die Sonne. Die Temperaturen erreichen maximal 15 Grad an der Küste und bis zu 22 Grad im Breisgau. Der Wind weht schwach bis mäßig aus westlicher Richtung. Am Wochenende wird es dann wieder wärmer und sonniger.`,
    questions: [
      { id: 1, question: "Und nun zum Wetter für morgen, ______.", type: "fill_blank", correct: "Freitag", explanation: "Ansage: 'morgen, Freitag'." },
      { id: 2, question: "Der Tag beginnt im ganzen Land stark ______.", type: "fill_blank", correct: "bewölkt", explanation: "Ansage: 'stark bewölkt'." },
      { id: 3, question: "Am Vormittag ______ es im Norden immer wieder.", type: "fill_blank", correct: "regnet", explanation: "Ansage: 'regnet es im Norden'." },
      { id: 4, question: "Gegen ______ lässt der Regen nach.", type: "fill_blank", correct: "Mittag", explanation: "Ansage: 'Gegen Mittag lässt der Regen nach'." },
      { id: 5, question: "Im Süden zeigt sich öfter die ______.", type: "fill_blank", correct: "Sonne", explanation: "Ansage: 'zeigt sich öfter die Sonne'." },
      { id: 6, question: "Die Temperaturen erreichen ______ 15 Grad.", type: "fill_blank", correct: "maximal", explanation: "Ansage: 'erreichen maximal 15 Grad'." },
      { id: 7, question: "Das ist an der ______ der Fall.", type: "fill_blank", correct: "Küste", explanation: "Ansage: 'an der Küste'." },
      { id: 8, question: "Im Breisgau wird es bis zu 22 ______.", type: "fill_blank", correct: "Grad", explanation: "Ansage: 'bis zu 22 Grad im Breisgau'." },
      { id: 9, question: "Der Wind weht aus ______ Richtung.", type: "fill_blank", correct: "westlicher", explanation: "Ansage: 'aus westlicher Richtung'." },
      { id: 10, question: "Am Wochenende wird es wieder wärmer und ______.", type: "fill_blank", correct: "sonniger", explanation: "Ansage: 'wärmer und sonniger'." }
    ]
  },
  {
    id: "hoeren-2-4",
    title: "Teil 2: Nachricht auf dem Anrufbeantworter",
    level: "B1",
    topic: "Arbeit & Termine",
    duration: "5 Phút",
    type: "Điền thông tin còn thiếu (Lückenfüller)",
    transcript: `Guten Tag, Herr Schneider, hier spricht Müller von der Zahnarztpraxis Dr. Schmidt. Sie haben morgen um 14 Uhr 30 einen Termin zur Kontrolle. Leider ist Dr. Schmidt krank geworden. Wir müssen den Termin daher verschieben. Können Sie stattdessen am Donnerstag um 15 Uhr kommen? Bitte rufen Sie uns heute noch bis 18 Uhr zurück, um den Termin zu bestätigen. Unsere Nummer ist die 089 34 56 78. Vielen Dank und auf Wiederhören.`,
    questions: [
      { id: 1, question: "Hier spricht Müller von der ______ Dr. Schmidt.", type: "fill_blank", correct: "Zahnarztpraxis", explanation: "Ansage: 'Zahnarztpraxis Dr. Schmidt'." },
      { id: 2, question: "Der Termin ist morgen um 14 Uhr ______.", type: "fill_blank", correct: "30", explanation: "Ansage: '14 Uhr 30'." },
      { id: 3, question: "Der Termin war zur ______ geplant.", type: "fill_blank", correct: "Kontrolle", explanation: "Ansage: 'zur Kontrolle'." },
      { id: 4, question: "Leider ist Dr. Schmidt ______ geworden.", type: "fill_blank", correct: "krank", explanation: "Ansage: 'krank geworden'." },
      { id: 5, question: "Sie müssen den Termin daher ______.", type: "fill_blank", correct: "verschieben", explanation: "Ansage: 'den Termin daher verschieben'." },
      { id: 6, question: "Der neue Termin ist am ______.", type: "fill_blank", correct: "Donnerstag", explanation: "Ansage: 'am Donnerstag'." },
      { id: 7, question: "Der neue Termin ist um ______ Uhr.", type: "fill_blank", correct: "15", explanation: "Ansage: 'um 15 Uhr'." },
      { id: 8, question: "Bitte rufen Sie heute noch bis ______ Uhr zurück.", type: "fill_blank", correct: "18", explanation: "Ansage: 'bis 18 Uhr zurück'." },
      { id: 9, question: "Der Rückruf ist nötig, um den Termin zu ______.", type: "fill_blank", correct: "bestätigen", explanation: "Ansage: 'um den Termin zu bestätigen'." },
      { id: 10, question: "Die Telefonnummer endet mit ______.", type: "fill_blank", correct: "78", explanation: "Ansage: '56 78'." }
    ]
  },
  {
    id: "hoeren-2-5",
    title: "Teil 2: Veranstaltungshinweis im Radio",
    level: "B1",
    topic: "Freizeit & Kultur",
    duration: "7 Phút",
    type: "Điền từ vào đoạn văn (Cloze Test)",
    transcript: `Und hier noch ein Tipp für das Wochenende: Das Stadtfest beginnt am Freitag um 18 Uhr auf dem Marktplatz. Es gibt Live-Musik von lokalen Bands und viele Essensstände mit internationalen Spezialitäten. Am Samstagvormittag findet ein großer Flohmarkt statt. Kinder können sich auf der Hüpfburg am Stadtpark vergnügen. Das Fest endet am Sonntagabend mit einem großen Feuerwerk um 22 Uhr. Der Eintritt für alle Veranstaltungen ist frei.`,
    questions: [
      { id: 1, question: "Das ______ beginnt am Freitag.", type: "fill_blank", correct: "Stadtfest", explanation: "Ansage: 'Das Stadtfest beginnt'." },
      { id: 2, question: "Es startet um ______ Uhr auf dem Marktplatz.", type: "fill_blank", correct: "18", explanation: "Ansage: 'um 18 Uhr auf dem Marktplatz'." },
      { id: 3, question: "Es gibt Live-Musik von ______ Bands.", type: "fill_blank", correct: "lokalen", explanation: "Ansage: 'von lokalen Bands'." },
      { id: 4, question: "Es gibt Stände mit ______ Spezialitäten.", type: "fill_blank", correct: "internationalen", explanation: "Ansage: 'mit internationalen Spezialitäten'." },
      { id: 5, question: "Am Samstagvormittag findet ein großer ______ statt.", type: "fill_blank", correct: "Flohmarkt", explanation: "Ansage: 'ein großer Flohmarkt'." },
      { id: 6, question: "Kinder können sich auf der ______ vergnügen.", type: "fill_blank", correct: "Hüpfburg", explanation: "Ansage: 'auf der Hüpfburg'." },
      { id: 7, question: "Diese befindet sich am ______.", type: "fill_blank", correct: "Stadtpark", explanation: "Ansage: 'am Stadtpark'." },
      { id: 8, question: "Das Fest endet am ______.", type: "fill_blank", correct: "Sonntagabend", explanation: "Ansage: 'am Sonntagabend'." },
      { id: 9, question: "Es gibt ein großes ______ um 22 Uhr.", type: "fill_blank", correct: "Feuerwerk", explanation: "Ansage: 'ein großes Feuerwerk'." },
      { id: 10, question: "Der ______ für alle Veranstaltungen ist frei.", type: "fill_blank", correct: "Eintritt", explanation: "Ansage: 'Der Eintritt ... ist frei'." }
    ]
  }
];

// Duplicate to get 10 items
export const HOEREN_T2_FULL = [
  ...HOEREN_T2_EXERCISES,
  ...HOEREN_T2_EXERCISES.map(ex => ({ ...ex, id: ex.id + "-copy" }))
];
