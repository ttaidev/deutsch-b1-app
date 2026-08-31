import { ReadingExercise } from "./data";

export const LESEN_EXERCISES_T4: ReadingExercise[] = [
  {
    id: "lesen-op-1",
    title: "Teil 4: Autos in der Innenstadt?",
    level: "B1",
    topic: "Umwelt & Verkehr",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Ist die Person für ein Verbot von Autos in der Innenstadt? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

Beispiel:
Lukas: "Die Luft in der Stadt ist so schlecht. Wir sollten alle Straßen im Zentrum für Autos sperren und nur noch Busse und Fahrräder erlauben." -> Ja (für ein Verbot).

1. Maria (28): "Ich wohne im Zentrum und arbeite als Krankenschwester im Schichtdienst. Wenn ich nachts um 3 Uhr Feierabend habe, fahren keine Busse mehr. Ich bin auf mein Auto angewiesen und kann es nicht einfach am Stadtrand stehen lassen."
2. Paul (45): "Ich habe zwei kleine Kinder. Früher war es viel zu gefährlich, sie alleine mit dem Fahrrad zur Schule fahren zu lassen. Seit unsere Straße für Autos gesperrt ist, mache ich mir keine Sorgen mehr. Das sollte überall so sein!"
3. Lisa (34): "Ich habe ein kleines Geschäft in der Fußgängerzone. Wenn die Leute nicht mehr mit dem Auto in die Stadt fahren dürfen, kaufen sie alles nur noch im Internet oder in großen Einkaufszentren außerhalb. Das wäre das Ende für viele kleine Läden!"
4. Jan (19): "Ich finde Autos in der Stadt total altmodisch. Wir haben heutzutage so gute Alternativen wie E-Scooter, Leihfahrräder und Straßenbahnen. Der Platz, den Autos wegnehmen, könnte für Parks und Cafés genutzt werden."
5. Sarah (50): "Man darf nicht vergessen, dass alte Menschen oder Menschen mit Behinderung oft nicht so weit laufen können. Für sie ist ein Auto wichtig, um Arzttermine in der Stadt wahrzunehmen. Ein komplettes Verbot finde ich deshalb falsch."
6. Tom (31): "In anderen europäischen Städten funktioniert das doch auch super! Schaut euch mal Kopenhagen oder Amsterdam an. Da fahren fast nur Fahrräder und die Lebensqualität ist viel höher. Wir sollten diesem Beispiel sofort folgen."
7. Anna (42): "Ich verstehe die Diskussion nicht. Die meisten Leute fahren sowieso nur alleine in riesigen Autos spazieren. Wir brauchen keine Autos, um Brötchen zu holen. Die Innenstädte müssen wieder den Menschen gehören!"`,
    questions: [
      { id: 1, question: "Ist Maria für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Maria ist dagegen, weil sie im Schichtdienst arbeitet und auf ihr Auto angewiesen ist." },
      { id: 2, question: "Ist Paul für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Paul ist dafür, weil es sicherer für seine Kinder ist." },
      { id: 3, question: "Ist Lisa für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Lisa ist dagegen, weil sie Angst hat, dass weniger Kunden in ihr Geschäft kommen." },
      { id: 4, question: "Ist Jan für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Jan ist dafür, er möchte den Platz für Parks und Cafés nutzen." },
      { id: 5, question: "Ist Sarah für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sarah ist dagegen, um alte und behinderte Menschen nicht zu benachteiligen." },
      { id: 6, question: "Ist Tom für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Tom ist dafür und nennt Kopenhagen und Amsterdam als positive Beispiele." },
      { id: 7, question: "Ist Anna für ein Autoverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Anna ist dafür, weil sie findet, dass die Innenstädte wieder den Menschen gehören müssen." }
    ]
  },
  {
    id: "lesen-op-2",
    title: "Teil 4: Sollen Jugendliche arbeiten?",
    level: "B1",
    topic: "Arbeit & Jugendliche",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass Jugendliche neben der Schule jobben sollten? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Markus (16): "Ich trage am Wochenende Zeitungen aus. Das Geld brauche ich, um mir mein Hobby zu finanzieren. Außerdem lerne ich so schon früh, wie man mit Geld umgeht und dass man dafür arbeiten muss."
2. Frau Müller (Lehrerin): "Ich beobachte oft, dass Schüler, die nachmittags arbeiten, am nächsten Tag in der Schule müde und unkonzentriert sind. Die Schule ist ein Vollzeitjob, da sollte keine Zeit für andere anstrengende Arbeiten verschwendet werden."
3. Sabine (Mutter): "Mein Sohn jobbt samstags in einem Supermarkt. Ich finde das toll! Er ist viel selbstständiger geworden und fragt nicht mehr ständig mich nach Geld für neue Schuhe oder Handyspiele."
4. Herr Bauer (Arzt): "In diesem Alter brauchen Jugendliche ihre Freizeit, um sich zu entwickeln, Sport zu machen und Freunde zu treffen. Der Leistungsdruck ist heutzutage ohnehin schon zu hoch. Arbeit schadet da nur der Gesundheit."
5. Felix (17): "Ich habe letzten Sommer in einem Café gearbeitet. Das hat mir geholfen herauszufinden, was ich nach der Schule machen möchte. Praktische Erfahrung ist durch nichts zu ersetzen!"
6. Laura (15): "Meine Eltern wollen, dass ich arbeite, aber ich sehe das gar nicht ein. Wenn ich acht Stunden in der Schule bin und dann noch Hausaufgaben mache, bin ich fertig. Das Wochenende ist zum Ausruhen da!"
7. Herr Klein (Arbeitgeber): "Wir stellen gerne Schüler als Aushilfen ein. Sie bringen frischen Wind ins Team und lernen früh, wie der Arbeitsalltag funktioniert. Das ist eine wichtige Vorbereitung auf das spätere Berufsleben."`,
    questions: [
      { id: 1, question: "Ist Markus für Schülerjobs?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Markus jobbt selbst und findet es gut, um den Umgang mit Geld zu lernen." },
      { id: 2, question: "Ist Frau Müller für Schülerjobs?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie ist dagegen, weil die Schüler dann müde in der Schule sind." },
      { id: 3, question: "Ist Sabine für Schülerjobs?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sabine findet es toll, weil ihr Sohn dadurch selbstständiger wird." },
      { id: 4, question: "Ist Herr Bauer für Schülerjobs?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Herr Bauer meint, Jugendliche brauchen ihre Freizeit und Arbeit schade der Gesundheit." },
      { id: 5, question: "Ist Felix für Schülerjobs?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Felix ist dafür, weil praktische Erfahrung wichtig ist." },
      { id: 6, question: "Ist Laura für Schülerjobs?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Laura ist dagegen, weil sie nach der Schule keine Energie mehr für Arbeit hat." },
      { id: 7, question: "Ist Herr Klein für Schülerjobs?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er ist dafür, weil es eine gute Vorbereitung auf das spätere Berufsleben ist." }
    ]
  }
];
