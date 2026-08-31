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
  }
];
