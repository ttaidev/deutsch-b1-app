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
  },
  {
    id: "lesen-op-3",
    title: "Teil 4: Schulnoten abschaffen?",
    level: "B1",
    topic: "Schule & Bildung",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass Schulnoten abgeschafft werden sollten? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Anna (15): "Ich habe immer Bauchschmerzen vor der Zeugnisausgabe. Noten machen uns nur Angst und sagen nichts darüber aus, ob wir etwas wirklich verstanden haben. Ein ausführliches Feedbackgespräch wäre viel besser."
2. Herr Weber (Lehrer): "Noten sind wichtig, weil sie den Leistungsstand klar und vergleichbar machen. Wie sollen Universitäten oder Arbeitgeber sonst entscheiden, wer der beste Kandidat ist? Es gibt kein besseres System."
3. Julia (Mutter): "Mein Sohn weint oft, wenn er eine schlechte Note nach Hause bringt. Ich finde, man sollte Kinder loben und motivieren, statt sie mit Zahlen von 1 bis 6 zu bestrafen."
4. Max (17): "Ich lerne nur wegen der Noten. Ohne Noten würde ich wahrscheinlich gar nichts für die Schule machen. Der Konkurrenzkampf mit meinen Freunden motiviert mich total!"
5. Professor Fischer (Pädagoge): "Zahlreiche Studien belegen, dass Ziffernnoten das selbstständige Lernen behindern. Kinder lernen für die Prüfung, nicht für das Leben. Wir brauchen dringend alternative Bewertungssysteme."
6. Sarah (Arbeitgeberin): "Wenn Bewerber ohne Noten zu mir kommen, weiß ich überhaupt nicht, woran ich bin. Textzeugnisse sind oft so kompliziert geschrieben, dass niemand sie wirklich versteht."
7. Tim (14): "Ich hasse es, wenn der Lehrer die Arbeiten zurückgibt und alle vergleichen. Wer eine 5 hat, wird ausgelacht. Ohne Noten wäre die Stimmung in der Klasse viel entspannter."`,
    questions: [
      { id: 1, question: "Ist Anna für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie findet Noten machen Angst und will lieber Feedbackgespräche." },
      { id: 2, question: "Ist Herr Weber für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er meint, Noten sind wichtig für die Vergleichbarkeit." },
      { id: 3, question: "Ist Julia für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie will Kinder motivieren statt sie mit Noten zu bestrafen." },
      { id: 4, question: "Ist Max für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er lernt nur wegen der Noten und findet den Konkurrenzkampf gut." },
      { id: 5, question: "Ist Professor Fischer für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er meint, Noten behindern das Lernen und fordert Alternativen." },
      { id: 6, question: "Ist Sarah für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie braucht Noten, um Bewerber einschätzen zu können." },
      { id: 7, question: "Ist Tim für die Abschaffung von Schulnoten?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er meint, ohne Noten wäre die Stimmung entspannter." }
    ]
  },
  {
    id: "lesen-op-4",
    title: "Teil 4: Fast Food an Schulen verbieten?",
    level: "B1",
    topic: "Gesundheit & Ernährung",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen für ein Verbot von Fast Food an Schulen? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Frau Schmidt (Ernährungsberaterin): "Immer mehr Kinder sind übergewichtig. Schulen haben eine Vorbildfunktion und sollten nur gesundes Essen anbieten. Burger und Pommes gehören nicht in die Schulkantine."
2. Lukas (16): "Wenn es in der Schule nur noch Gemüse gibt, gehe ich eben in der Pause zum Supermarkt und kaufe mir dort Chips und Cola. Ein Verbot in der Schule bringt gar nichts."
3. Herr Wagner (Schulleiter): "Wir haben das Fast Food abgeschafft. Seitdem sind die Schüler nachmittags konzentrierter und nicht mehr so müde. Die Entscheidung war absolut richtig."
4. Maria (Mutter): "Jeder Mensch sollte selbst entscheiden, was er isst. Auch Kinder! Man sollte ihnen beibringen, wie man sich gesund ernährt, statt einfach alles zu verbieten."
5. Jan (15): "Ich liebe Pizza! Das gesunde Essen in der Kantine schmeckt oft langweilig. Ein bisschen Fast Food ab und zu hat noch niemandem geschadet."
6. Herr Klein (Arzt): "Die Gesundheit der Kinder muss an erster Stelle stehen. Zucker und Fett in diesen Mengen machen krank. Schulen müssen hier hart durchgreifen."
7. Lisa (17): "Es nervt, dass Erwachsene uns immer vorschreiben wollen, was gut für uns ist. Wenn ich Lust auf Pommes habe, will ich sie auch in der Pause essen dürfen."`,
    questions: [
      { id: 1, question: "Ist Frau Schmidt für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie meint, Schulen sollten nur gesundes Essen anbieten." },
      { id: 2, question: "Ist Lukas für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er meint, ein Verbot bringt nichts, da er es sich woanders kauft." },
      { id: 3, question: "Ist Herr Wagner für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er hat es bereits abgeschafft und findet die Entscheidung richtig." },
      { id: 4, question: "Ist Maria für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie ist gegen Verbote und für Aufklärung." },
      { id: 5, question: "Ist Jan für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er liebt Pizza und findet, Fast Food ab und zu schadet nicht." },
      { id: 6, question: "Ist Herr Klein für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er meint, Schulen müssen hart durchgreifen wegen der Gesundheit." },
      { id: 7, question: "Ist Lisa für ein Verbot von Fast Food?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie will selbst entscheiden, was sie isst, auch in der Pause." }
    ]
  },
  {
    id: "lesen-op-5",
    title: "Teil 4: Tierversuche in der Kosmetik?",
    level: "B1",
    topic: "Natur & Ethik",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen für ein komplettes Verbot von Tierversuchen in der Kosmetikindustrie? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Tierschützerin Anna: "Es ist grausam, dass Tiere für unseren Lippenstift oder unser Shampoo leiden müssen. Es gibt heute genug alternative Testmethoden. Ein Verbot ist längst überfällig!"
2. Herr Dr. Müller (Forscher): "Natürlich wollen wir Tiere schützen, aber die Sicherheit der Menschen geht vor. Ohne Tests an Tieren können wir gefährliche allergische Reaktionen bei neuen Inhaltsstoffen nicht zu 100% ausschließen."
3. Julia (20): "Ich kaufe nur noch Kosmetik, auf der das 'Cruelty-Free'-Logo steht. Wer heute noch Tierversuche macht, ist einfach von gestern. Das muss gesetzlich gestoppt werden."
4. Frau Braun (Managerin): "Wenn wir Tierversuche in Europa verbieten, wandern die Firmen einfach ins Ausland ab. Wir müssen internationale Regelungen finden, kein nationales Verbot, das unserer Wirtschaft schadet."
5. Max (25): "Ich verstehe bei Medikamenten, warum man testet. Aber für Make-up? Das ist reiner Luxus. Kein Lebewesen sollte für so etwas Unnötiges sterben."
6. Klaus (Chemiker): "Computermodelle sind gut, aber sie können einen echten Organismus nicht perfekt simulieren. Für komplett neue chemische Verbindungen brauchen wir noch Tierversuche."
7. Sarah (Tierrechtsaktivistin): "Tiere empfinden Schmerz genauso wie wir. Niemand hat das Recht, sie für menschliche Eitelkeit einzusperren und zu quälen. Schluss damit!"`,
    questions: [
      { id: 1, question: "Ist Anna für ein Verbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie findet es grausam und fordert ein Verbot." },
      { id: 2, question: "Ist Herr Dr. Müller für ein Verbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er meint, die Sicherheit der Menschen geht vor und Tests sind nötig." },
      { id: 3, question: "Ist Julia für ein Verbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie kauft nur tierversuchsfrei und will, dass es gesetzlich gestoppt wird." },
      { id: 4, question: "Ist Frau Braun für ein Verbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie ist gegen ein Verbot in Europa, weil Firmen sonst abwandern." },
      { id: 5, question: "Ist Max für ein Verbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er findet es für Kosmetik unnötig und falsch." },
      { id: 6, question: "Ist Klaus für ein Verbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er meint, wir brauchen noch Tierversuche für neue Chemikalien." },
      { id: 7, question: "Ist Sarah für ein Verbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie verurteilt Tierversuche als Quälerei und fordert ein Ende." }
    ]
  },
  {
    id: "lesen-op-6",
    title: "Teil 4: Kostenloser Nahverkehr?",
    level: "B1",
    topic: "Umwelt & Gesellschaft",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass Busse und Bahnen für alle kostenlos sein sollten? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Peter (Bürgermeister): "Wer soll das bezahlen? Die Busse müssen repariert werden und die Fahrer brauchen ihr Gehalt. Ein kostenloser Nahverkehr bedeutet nur, dass wir die Steuern massiv erhöhen müssen."
2. Lisa (Studentin): "Das wäre fantastisch! Für uns Studenten sind die Tickets oft viel zu teuer. Wenn der Nahverkehr gratis ist, würden viel mehr Leute das Auto stehen lassen."
3. Herr Wagner (Busfahrer): "Wenn niemand mehr bezahlen muss, werden die Busse überfüllt sein. Das führt zu Chaos und noch mehr Stress für uns Fahrer. Die Leute schätzen nur Dinge, die etwas kosten."
4. Anna (Umweltaktivistin): "Um den Klimawandel zu stoppen, müssen wir die Autos aus den Städten bekommen. Ein kostenloser ÖPNV ist der stärkste Anreiz dafür. Das ist gut für unsere Atemluft."
5. Klaus (Rentner): "Ich fahre sowieso selten Bus, aber wenn es kostenlos wäre, würde ich es öfter nutzen, um in die Stadt zum Arzt zu fahren. Das würde mein kleines Budget sehr entlasten."
6. Frau Meyer (Wirtschaftsexpertin): "Kostenlos ist nie etwas. Die Kosten werden auf alle Bürger umgelegt, auch auf die, die auf dem Land leben und gar keinen Bus haben. Das ist sehr ungerecht."
7. Julian (22): "In anderen Ländern wie Luxemburg funktioniert das doch schon! Es spart so viel Zeit, weil man keine Tickets mehr kontrollieren muss. Ich bin absolut dafür."`,
    questions: [
      { id: 1, question: "Ist Peter dafür?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er warnt vor massiven Steuererhöhungen." },
      { id: 2, question: "Ist Lisa dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie findet es fantastisch, da Tickets oft zu teuer sind." },
      { id: 3, question: "Ist Herr Wagner dafür?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er fürchtet überfüllte Busse, Chaos und Stress." },
      { id: 4, question: "Ist Anna dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie sieht es als Anreiz für Klimaschutz und saubere Luft." },
      { id: 5, question: "Ist Klaus dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Es würde sein Budget entlasten und er würde es öfter nutzen." },
      { id: 6, question: "Ist Frau Meyer dafür?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie findet es ungerecht, weil Menschen auf dem Land auch zahlen müssten." },
      { id: 7, question: "Ist Julian dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er findet, es spart Zeit (keine Kontrollen) und verweist auf Luxemburg." }
    ]
  },
  {
    id: "lesen-op-7",
    title: "Teil 4: Fremdsprachen im Kindergarten?",
    level: "B1",
    topic: "Bildung & Familie",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass Kinder schon im Kindergarten Fremdsprachen (wie Englisch) lernen sollten? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Sabine (Mutter): "Kleine Kinder lernen Sprachen spielerisch und ohne Mühe. Je früher man anfängt, desto besser ist die Aussprache später. Mein Sohn liebt den englischen Singkreis."
2. Herr Müller (Erzieher): "Viele Kinder können mit 4 Jahren noch nicht einmal richtig Deutsch sprechen. Wir sollten uns erst auf die Muttersprache konzentrieren, bevor wir sie mit Englisch verwirren."
3. Dr. Lehmann (Sprachforscherin): "Das Gehirn von Kleinkindern ist wie ein Schwamm. In den ersten Lebensjahren werden die Grundlagen für Mehrsprachigkeit gelegt. Diese Chance sollten wir unbedingt nutzen."
4. Klaus (Vater): "Ich finde das übertrieben. Kinder sollen im Kindergarten spielen und nicht schon Leistungsdruck haben wie in der Schule. Für Vokabeln ist noch genug Zeit."
5. Maria (30): "In unserer globalisierten Welt ist Englisch ein Muss. Wer schon früh anfängt, hat später in der Schule und im Beruf riesige Vorteile. Das sollte Standard sein."
6. Frau Bauer (Grundschullehrerin): "Das Problem ist, dass in den Grundschulen oft wieder bei Null angefangen wird. Die Kinder aus dem bilingualen Kindergarten langweilen sich dann. Das Konzept ist nicht ausgereift."
7. Lisa (Studentin): "Ich wünschte, ich hätte schon als kleines Kind Englisch gelernt! Ich tue mich heute so schwer mit der Grammatik. Frühförderung ist absolut sinnvoll."`,
    questions: [
      { id: 1, question: "Ist Sabine dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie meint, kleine Kinder lernen spielerisch und früh ist besser." },
      { id: 2, question: "Ist Herr Müller dafür?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er möchte sich erst auf die Muttersprache (Deutsch) konzentrieren." },
      { id: 3, question: "Ist Dr. Lehmann dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie sieht in den ersten Jahren die Grundlagen für Mehrsprachigkeit." },
      { id: 4, question: "Ist Klaus dafür?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er findet es übertrieben und will, dass Kinder nur spielen ohne Druck." },
      { id: 5, question: "Ist Maria dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie sieht Englisch als Muss und sieht riesige Vorteile." },
      { id: 6, question: "Ist Frau Bauer dafür?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie hält das Konzept für nicht ausgereift, weil Kinder sich in der Grundschule langweilen." },
      { id: 7, question: "Ist Lisa dafür?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie wünscht sich, sie hätte früher Englisch gelernt, Frühförderung ist sinnvoll." }
    ]
  },
  {
    id: "lesen-op-8",
    title: "Teil 4: 4-Tage-Arbeitswoche?",
    level: "B1",
    topic: "Arbeit & Wirtschaft",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass die 4-Tage-Woche (bei gleichem Gehalt) für alle eingeführt werden sollte? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Thomas (Angestellter): "Ein extra Tag Wochenende wäre ein Traum! Ich hätte mehr Zeit für meine Familie und Hobbys. Das würde die Leute viel motivierter und gesünder machen."
2. Frau Klein (Chefin eines Restaurants): "Wie soll das in der Gastronomie funktionieren? Ich kann mein Restaurant nicht drei Tage schließen. Und noch mehr Personal einstellen, kann ich mir nicht leisten."
3. Julia (Psychologin): "Immer mehr Menschen leiden unter Burnout. Eine Reduzierung der Arbeitszeit würde den Stress enorm senken. Gesunde Mitarbeiter sind am Ende produktiver."
4. Herr Schmidt (Fabrikbesitzer): "Wir stehen im internationalen Wettbewerb. Wenn wir weniger arbeiten, produzieren wir weniger. Unsere Wirtschaft würde zusammenbrechen. Das ist völlige Utopie."
5. Max (25): "Viele meiner Kollegen sitzen freitags ohnehin nur ihre Zeit ab und warten auf das Wochenende. In 4 Tagen schafft man genau so viel, wenn man konzentrierter arbeitet."
6. Herr Wagner (Politiker): "Wir haben ohnehin schon Fachkräftemangel. Wenn jetzt alle nur noch vier Tage arbeiten, wer erledigt dann die restliche Arbeit? Krankenhäuser und Pflegeheime würden kollabieren."
7. Anna (32): "Island hat es erfolgreich getestet. Die Produktivität ist geblieben oder sogar gestiegen, während die Zufriedenheit der Menschen enorm gewachsen ist. Wir müssen das ausprobieren!"`,
    questions: [
      { id: 1, question: "Ist Thomas für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er findet es einen Traum und erwartet mehr Motivation und Gesundheit." },
      { id: 2, question: "Ist Frau Klein für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie sieht es in der Gastronomie als nicht finanzierbar an." },
      { id: 3, question: "Ist Julia für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie meint, es senkt Stress und Burnout-Raten." },
      { id: 4, question: "Ist Herr Schmidt für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er warnt vor einem Zusammenbruch der Wirtschaft und weniger Produktion." },
      { id: 5, question: "Ist Max für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er glaubt, in 4 Tagen schafft man genauso viel Arbeit konzentrierter." },
      { id: 6, question: "Ist Herr Wagner für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er sieht Probleme wegen Fachkräftemangel, besonders in Krankenhäusern." },
      { id: 7, question: "Ist Anna für die 4-Tage-Woche?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie verweist auf erfolgreiche Tests in Island und will es ausprobieren." }
    ]
  },
  {
    id: "lesen-op-9",
    title: "Teil 4: Handyverbot an der Schule?",
    level: "B1",
    topic: "Schule & Technik",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass Smartphones in der Schule komplett verboten werden sollten? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Herr Müller (Lehrer): "In den Pausen starren alle nur noch auf ihre Bildschirme. Niemand redet mehr miteinander. Ein Verbot würde die Kommunikation unter den Schülern wieder fördern."
2. Jan (16): "Das ist doch lächerlich. Wir leben im digitalen Zeitalter. Anstatt Handys zu verbieten, sollte die Schule uns beibringen, wie man sie sinnvoll für die Recherche im Unterricht nutzt."
3. Lisa (Mutter): "Ich finde ein Verbot gut. So gibt es keine Probleme mehr mit heimlichen Fotos oder Cybermobbing auf dem Schulhof. Die Schule muss ein geschützter Raum bleiben."
4. Sarah (15): "Ich brauche mein Handy, um nach dem Stundenplan zu schauen oder meinen Eltern zu schreiben, wenn der Bus ausfällt. Wenn ich es abgeben müsste, wäre das total unpraktisch."
5. Frau Bauer (Pädagogin): "Konzentration ist das Wichtigste beim Lernen. Das ständige Vibrieren und die Nachrichten lenken extrem ab. Das Handy gehört während der Schulzeit ausgeschaltet in die Tasche."
6. Tom (Schülersprecher): "Ein striktes Verbot macht Handys nur noch interessanter. Man kann Schüler nicht von der modernen Welt abschotten. Wir brauchen klare Regeln, aber kein komplettes Verbot."
7. Herr Klein (Vater): "Als ich zur Schule ging, gab es so etwas auch nicht und wir haben es überlebt. Handys sind reines Spielzeug und haben in einer Bildungseinrichtung nichts verloren."`,
    questions: [
      { id: 1, question: "Ist Herr Müller für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er will die Kommunikation fördern, weil alle nur auf Bildschirme starren." },
      { id: 2, question: "Ist Jan für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er findet es lächerlich und will Handys für die Recherche nutzen." },
      { id: 3, question: "Ist Lisa für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie sieht es als Schutz vor heimlichen Fotos und Cybermobbing." },
      { id: 4, question: "Ist Sarah für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie braucht es für Stundenpläne und Kontakt zu Eltern." },
      { id: 5, question: "Ist Frau Bauer für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie meint, Handys lenken ab und gehören ausgeschaltet." },
      { id: 6, question: "Ist Tom für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er ist für klare Regeln, aber gegen ein komplettes Verbot." },
      { id: 7, question: "Ist Herr Klein für ein Handyverbot?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er sieht Handys als Spielzeug, die in der Schule nichts verloren haben." }
    ]
  },
  {
    id: "lesen-op-10",
    title: "Teil 4: Geschäfte am Sonntag öffnen?",
    level: "B1",
    topic: "Gesellschaft & Einkaufen",
    duration: "15 Phút",
    type: "Ý kiến",
    questionType: "ja_nein",
    readingText: `Lesen Sie die Texte 1 bis 7.
Sind die Personen der Meinung, dass Supermärkte und Geschäfte auch am Sonntag geöffnet haben sollten? Wählen Sie "Ja" (dafür) oder "Nein" (dagegen).

1. Anna (Krankenschwester): "Ich arbeite oft die ganze Woche im Schichtdienst. Wenn ich am Wochenende frei habe, schaffe ich es samstags oft nicht, in Ruhe einzukaufen. Ein offener Sonntag wäre für mich eine riesige Erleichterung."
2. Herr Weber (Gewerkschafter): "Der Sonntag ist traditionell ein Ruhetag. Die Verkäuferinnen und Verkäufer brauchen diesen Tag, um Zeit mit ihren Familien zu verbringen. Der Profit darf nicht über den Menschen stehen."
3. Julian (Student): "Ich brauche das Geld und würde super gerne sonntags jobben! An anderen Tagen habe ich oft Uni, aber am Sonntag hätte ich Zeit. Und man bekommt meistens sogar einen Sonntagszuschlag."
4. Frau Meier (Kirchenvertreterin): "Der Sonntag ist ein Tag der Besinnung und der Ruhe. Wenn wir ihn zum normalen Werktag machen, verlieren wir ein wichtiges Stück unserer Kultur. Der Konsumwahn muss auch mal Pause haben."
5. Max (Tourist): "Ich finde das in Deutschland immer so nervig. Wenn man am Wochenende einen Städtetrip macht, steht man sonntags vor verschlossenen Türen. In anderen Ländern ist doch auch alles offen."
6. Sabine (Verkäuferin): "Bitte nicht! Ich arbeite sowieso schon oft genug am Samstag. Wenn ich sonntags auch noch ranmuss, sehe ich meine Kinder ja gar nicht mehr am Wochenende."
7. Herr Klein (Geschäftsmann): "Der Online-Handel schläft nie. Wenn der stationäre Einzelhandel überleben will, muss er sich anpassen. Sonntags haben die Menschen Zeit zum Bummeln, das würde unsere Umsätze retten."`,
    questions: [
      { id: 1, question: "Ist Anna für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Sie hat wegen ihres Schichtdienstes samstags oft keine Zeit zum Einkaufen." },
      { id: 2, question: "Ist Herr Weber für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Er betont den Sonntag als Ruhetag für die Familien der Verkäufer." },
      { id: 3, question: "Ist Julian für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er würde als Student gerne am Sonntag arbeiten, um Geld zu verdienen." },
      { id: 4, question: "Ist Frau Meier für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie sieht den Sonntag als Tag der Besinnung und Kultur." },
      { id: 5, question: "Ist Max für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er findet geschlossene Geschäfte als Tourist nervig." },
      { id: 6, question: "Ist Sabine für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Nein", explanation: "Sie will am Sonntag Zeit für ihre Kinder haben." },
      { id: 7, question: "Ist Herr Klein für offene Geschäfte am Sonntag?", options: ["Ja", "Nein"], correct: "Ja", explanation: "Er will am Sonntag öffnen, um gegen den Online-Handel zu bestehen." }
    ]
  }
];
