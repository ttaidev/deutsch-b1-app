import { ListeningExercise } from "./data";

export const HOEREN_T1_EXERCISES: ListeningExercise[] = [
  {
    id: "hoeren-1-1",
    title: "Teil 1: Treffen am Wochenende",
    level: "B1",
    topic: "Freizeit & Verabredung",
    duration: "5 Phút",
    type: "Nghe đoạn hội thoại (Multiple Choice)",
    transcript: `Mann: Hallo Julia! Hast du am Samstagabend schon etwas vor?
Frau: Hallo Markus. Nein, ich habe noch keine Pläne. Warum fragst du?
Mann: Ich habe zwei Tickets für das Konzert von 'Silbermond' in der Stadthalle. Möchtest du mitkommen?
Frau: Oh, sehr gerne! Wann fängt das Konzert an?
Mann: Es beginnt um 20 Uhr. Sollen wir uns um 19 Uhr vor der Halle treffen?
Frau: Lass uns lieber schon um 18:30 Uhr treffen. Dann können wir vorher noch eine Kleinigkeit essen.
Mann: Gute Idee! Dann bis Samstag um halb sieben vor der Stadthalle.`,
    questions: [
      { id: 1, question: "Was machen Markus und Julia am Samstag?", type: "multiple_choice", options: ["A) Sie gehen ins Kino.", "B) Sie gehen auf ein Konzert.", "C) Sie gehen auf eine Geburtstagsparty."], correct: "B) Sie gehen auf ein Konzert.", explanation: "Markus lädt Julia zu einem Konzert von 'Silbermond' ein. (Markus mời Julia đi xem buổi hòa nhạc của 'Silbermond'.)" },
      { id: 2, question: "Wann beginnt die Veranstaltung?", type: "multiple_choice", options: ["A) Um 18:30 Uhr.", "B) Um 19:00 Uhr.", "C) Um 20:00 Uhr."], correct: "C) Um 20:00 Uhr.", explanation: "Markus sagt: 'Es beginnt um 20 Uhr'. (Markus nói: 'Nó bắt đầu lúc 20 giờ'.)" },
      { id: 3, question: "Warum wollen sie sich früher treffen?", type: "multiple_choice", options: ["A) Um vorher noch etwas zu essen.", "B) Um gute Plätze zu finden.", "C) Weil der Bus so früh fährt."], correct: "A) Um vorher noch etwas zu essen.", explanation: "Julia sagt: 'Dann können wir vorher noch eine Kleinigkeit essen'. (Julia nói: 'Sau đó chúng ta có thể ăn một chút gì đó trước'.)" },
      { id: 4, question: "Wer hat die Tickets?", type: "multiple_choice", options: ["A) Julia.", "B) Markus.", "C) Niemand."], correct: "B) Markus.", explanation: "Markus sagt: 'Ich habe zwei Tickets'. (Markus nói: 'Tôi có hai vé'.)" },
      { id: 5, question: "Wo findet das Konzert statt?", type: "multiple_choice", options: ["A) Im Stadion.", "B) Im Park.", "C) In der Stadthalle."], correct: "C) In der Stadthalle.", explanation: "Markus sagt: 'in der Stadthalle'. (Markus nói: 'ở phòng hòa nhạc thành phố'.)" },
      { id: 6, question: "Wer ist Silbermond?", type: "multiple_choice", options: ["A) Ein Film.", "B) Eine Band.", "C) Ein Restaurant."], correct: "B) Eine Band.", explanation: "Es ist ein Konzert von 'Silbermond'. (Đó là một buổi hòa nhạc của 'Silbermond' - tên một ban nhạc.)" },
      { id: 7, question: "Um wie viel Uhr treffen sie sich genau?", type: "multiple_choice", options: ["A) Um 18:00 Uhr.", "B) Um 18:30 Uhr.", "C) Um 19:00 Uhr."], correct: "B) Um 18:30 Uhr.", explanation: "Julia sagt: 'Lass uns lieber schon um 18:30 Uhr treffen'. (Julia nói: 'Tốt hơn là chúng ta hãy gặp nhau lúc 18:30'.)" },
      { id: 8, question: "Wo treffen sie sich?", type: "multiple_choice", options: ["A) Vor der Halle.", "B) Im Restaurant.", "C) Zu Hause."], correct: "A) Vor der Halle.", explanation: "Mann sagt: 'vor der Stadthalle'. (Người đàn ông nói: 'trước phòng hòa nhạc thành phố'.)" },
      { id: 9, question: "Was sagt Markus am Ende?", type: "multiple_choice", options: ["A) Gute Idee!", "B) Das geht nicht.", "C) Ich habe keine Zeit."], correct: "A) Gute Idee!", explanation: "Er sagt: 'Gute Idee!'. (Anh ấy nói: 'Ý kiến hay!'.)" },
      { id: 10, question: "Hatte Julia vorher Pläne?", type: "multiple_choice", options: ["A) Ja, sie wollte lernen.", "B) Ja, sie wollte arbeiten.", "C) Nein, sie hatte keine Pläne."], correct: "C) Nein, sie hatte keine Pläne.", explanation: "Sie sagt: 'Nein, ich habe noch keine Pläne'. (Cô ấy nói: 'Không, tôi chưa có kế hoạch gì'.)" }
    ]
  },
  {
    id: "hoeren-1-2",
    title: "Teil 1: Problem im Büro",
    level: "B1",
    topic: "Arbeit & Beruf",
    duration: "5 Phút",
    type: "Nghe đoạn hội thoại (Multiple Choice)",
    transcript: `Frau: Herr Müller, haben Sie den Bericht für das Meeting schon fertig?
Mann: Leider noch nicht, Frau Schmidt. Mein Computer ist heute Morgen abgestürzt und ich habe einige Daten verloren.
Frau: Oh nein, das ist ärgerlich. Brauchen Sie Hilfe?
Mann: Ich habe den IT-Service schon angerufen. Sie schicken gleich jemanden vorbei.
Frau: Das Meeting beginnt aber schon um 14 Uhr. Schaffen Sie das bis dahin?
Mann: Ich versuche es. Wenn nicht, müssen wir das Meeting auf morgen verschieben.`,
    questions: [
      { id: 1, question: "Warum ist der Bericht noch nicht fertig?", type: "multiple_choice", options: ["A) Herr Müller war krank.", "B) Der Computer ist abgestürzt.", "C) Frau Schmidt hat ihn vergessen."], correct: "B) Der Computer ist abgestürzt.", explanation: "Er sagt: 'Mein Computer ist heute Morgen abgestürzt'. (Anh ấy nói: 'Máy tính của tôi bị hỏng (treo) sáng nay'.)" },
      { id: 2, question: "Was ist mit den Daten passiert?", type: "multiple_choice", options: ["A) Sie sind gedruckt.", "B) Sie sind sicher.", "C) Einige sind verloren gegangen."], correct: "C) Einige sind verloren gegangen.", explanation: "Er sagt: 'ich habe einige Daten verloren'. (Anh ấy nói: 'tôi đã bị mất một số dữ liệu'.)" },
      { id: 3, question: "Wer soll das Computerproblem lösen?", type: "multiple_choice", options: ["A) Frau Schmidt.", "B) Der IT-Service.", "C) Herr Müller selbst."], correct: "B) Der IT-Service.", explanation: "Er sagt: 'Ich habe den IT-Service schon angerufen'. (Anh ấy nói: 'Tôi đã gọi dịch vụ IT (công nghệ thông tin) rồi'.)" },
      { id: 4, question: "Wann beginnt das Meeting?", type: "multiple_choice", options: ["A) Um 10 Uhr.", "B) Um 12 Uhr.", "C) Um 14 Uhr."], correct: "C) Um 14 Uhr.", explanation: "Frau Schmidt: 'Das Meeting beginnt aber schon um 14 Uhr'. (Bà Schmidt nói: 'Nhưng cuộc họp bắt đầu lúc 14 giờ'.)" },
      { id: 5, question: "Was passiert, wenn der Bericht nicht fertig wird?", type: "multiple_choice", options: ["A) Das Meeting wird abgesagt.", "B) Das Meeting wird verschoben.", "C) Jemand anderes macht ihn."], correct: "B) Das Meeting wird verschoben.", explanation: "Herr Müller: 'müssen wir das Meeting auf morgen verschieben'. (Ông Müller nói: 'chúng ta phải hoãn cuộc họp sang ngày mai'.)" },
      { id: 6, question: "Wann ist der Computer abgestürzt?", type: "multiple_choice", options: ["A) Gestern Abend.", "B) Heute Morgen.", "C) Vor einer Stunde."], correct: "B) Heute Morgen.", explanation: "Er sagt: 'heute Morgen abgestürzt'. (Anh ấy nói: 'bị hỏng (treo) sáng nay'.)" },
      { id: 7, question: "Wem berichtet Herr Müller das Problem?", type: "multiple_choice", options: ["A) Dem Chef.", "B) Frau Schmidt.", "C) Niemandem."], correct: "B) Frau Schmidt.", explanation: "Er spricht mit Frau Schmidt. (Anh ấy nói chuyện với bà Schmidt.)" },
      { id: 8, question: "Bietet Frau Schmidt Hilfe an?", type: "multiple_choice", options: ["A) Ja, sie fragt, ob er Hilfe braucht.", "B) Nein, sie ist wütend.", "C) Ja, sie ruft den IT-Service an."], correct: "A) Ja, sie fragt, ob er Hilfe braucht.", explanation: "Sie sagt: 'Brauchen Sie Hilfe?'. (Cô ấy hỏi: 'Anh có cần giúp đỡ không?'.)" },
      { id: 9, question: "Wann kommt der IT-Service?", type: "multiple_choice", options: ["A) Morgen.", "B) Gleich.", "C) Nächste Woche."], correct: "B) Gleich.", explanation: "Er sagt: 'Sie schicken gleich jemanden vorbei'. (Anh ấy nói: 'Họ sẽ cử người qua ngay'.)" },
      { id: 10, question: "Ist sich Herr Müller sicher, dass er es bis 14 Uhr schafft?", type: "multiple_choice", options: ["A) Ja, absolut sicher.", "B) Er versucht es, ist aber nicht sicher.", "C) Nein, er weiß, dass es unmöglich ist."], correct: "B) Er versucht es, ist aber nicht sicher.", explanation: "Er sagt: 'Ich versuche es. Wenn nicht...'. (Anh ấy nói: 'Tôi sẽ cố gắng. Nếu không...'.)" }
    ]
  },
  {
    id: "hoeren-1-3",
    title: "Teil 1: Im Reisebüro",
    level: "B1",
    topic: "Reisen & Urlaub",
    duration: "5 Phút",
    type: "Nghe đoạn hội thoại (Multiple Choice)",
    transcript: `Angestellter: Guten Tag! Wie kann ich Ihnen helfen?
Kundin: Guten Tag. Ich suche einen Urlaub für meine Familie. Wir sind zwei Erwachsene und zwei Kinder.
Angestellter: Haben Sie schon ein bestimmtes Ziel im Kopf?
Kundin: Wir würden gerne ans Meer fahren, am liebsten nach Spanien oder Italien.
Angestellter: In Italien hätte ich ein tolles Angebot für ein Familienhotel direkt am Strand in Rimini. Mit Vollpension.
Kundin: Das klingt gut. Wie viel kostet das für eine Woche im August?
Angestellter: Das wären 1500 Euro für die ganze Familie, inklusive Flug.`,
    questions: [
      { id: 1, question: "Wer möchte in den Urlaub fahren?", type: "multiple_choice", options: ["A) Eine Frau alleine.", "B) Ein Paar ohne Kinder.", "C) Eine Familie mit vier Personen."], correct: "C) Eine Familie mit vier Personen.", explanation: "Die Kundin sagt: 'Wir sind zwei Erwachsene und zwei Kinder'. (Khách hàng nói: 'Chúng tôi gồm hai người lớn và hai trẻ em'.)" },
      { id: 2, question: "Wohin möchte die Kundin am liebsten reisen?", type: "multiple_choice", options: ["A) In die Berge.", "B) Nach Spanien oder Italien.", "C) An die Ostsee."], correct: "B) Nach Spanien oder Italien.", explanation: "Sie sagt: 'am liebsten nach Spanien oder Italien'. (Cô ấy nói: 'thích đi Tây Ban Nha hoặc Ý nhất'.)" },
      { id: 3, question: "Was ist in dem Preis von 1500 Euro enthalten?", type: "multiple_choice", options: ["A) Nur das Hotel.", "B) Das Hotel und der Flug.", "C) Nur der Flug."], correct: "B) Das Hotel und der Flug.", explanation: "Der Angestellte sagt: 'inklusive Flug'. (Nhân viên nói: 'bao gồm cả chuyến bay'.)" },
      { id: 4, question: "Wie viele Kinder hat die Kundin?", type: "multiple_choice", options: ["A) Eins.", "B) Zwei.", "C) Drei."], correct: "B) Zwei.", explanation: "Sie sagt: 'zwei Kinder'. (Cô ấy nói: 'hai trẻ em'.)" },
      { id: 5, question: "Welches Ziel schlägt der Angestellte vor?", type: "multiple_choice", options: ["A) Mallorca.", "B) Rimini.", "C) Rom."], correct: "B) Rimini.", explanation: "Er sagt: 'in Rimini'. (Anh ấy nói: 'ở Rimini'.)" },
      { id: 6, question: "Wo liegt das vorgeschlagene Hotel?", type: "multiple_choice", options: ["A) In den Bergen.", "B) In der Stadt.", "C) Direkt am Strand."], correct: "C) Direkt am Strand.", explanation: "Er sagt: 'direkt am Strand'. (Anh ấy nói: 'ngay trên bãi biển'.)" },
      { id: 7, question: "Welche Verpflegung ist im Hotel dabei?", type: "multiple_choice", options: ["A) Nur Frühstück.", "B) Halbpension.", "C) Vollpension."], correct: "C) Vollpension.", explanation: "Er sagt: 'Mit Vollpension'. (Anh ấy nói: 'Kèm ăn ba bữa (Vollpension)'.)" },
      { id: 8, question: "Wann möchte die Familie reisen?", type: "multiple_choice", options: ["A) Im Juli.", "B) Im August.", "C) Im September."], correct: "B) Im August.", explanation: "Sie fragt: 'für eine Woche im August?'. (Cô ấy hỏi: 'trong một tuần vào tháng 8?'.)" },
      { id: 9, question: "Wie lange soll der Urlaub dauern?", type: "multiple_choice", options: ["A) Eine Woche.", "B) Zwei Wochen.", "C) Ein Wochenende."], correct: "A) Eine Woche.", explanation: "Sie fragt: 'für eine Woche'. (Cô ấy hỏi: 'trong một tuần'.)" },
      { id: 10, question: "Findet die Kundin das Angebot gut?", type: "multiple_choice", options: ["A) Ja, sie sagt 'Das klingt gut'.", "B) Nein, es ist zu teuer.", "C) Sie sagt nichts dazu."], correct: "A) Ja, sie sagt 'Das klingt gut'.", explanation: "Sie antwortet: 'Das klingt gut'. (Cô ấy trả lời: 'Nghe có vẻ tốt đấy'.)" }
    ]
  },
  {
    id: "hoeren-1-4",
    title: "Teil 1: Beim Arzt",
    level: "B1",
    topic: "Gesundheit",
    duration: "6 Phút",
    type: "Nghe đoạn hội thoại (Multiple Choice)",
    transcript: `Arzt: Guten Morgen, Herr Bauer. Was fehlt Ihnen denn?
Patient: Guten Morgen, Herr Doktor. Ich habe seit drei Tagen starke Kopfschmerzen und mein Hals tut weh.
Arzt: Haben Sie auch Fieber?
Patient: Ja, gestern Abend hatte ich 38,5 Grad.
Arzt: Ich werde Sie mal untersuchen. Machen Sie bitte den Mund auf und sagen Sie 'Ah'. Ja, der Hals ist sehr rot. Sie haben eine starke Erkältung.
Patient: Darf ich morgen zur Arbeit gehen?
Arzt: Nein, auf keinen Fall. Ich schreibe Sie für den Rest der Woche krank. Sie müssen viel schlafen und Tee trinken.`,
    questions: [
      { id: 1, question: "Wie lange hat der Patient schon Schmerzen?", type: "multiple_choice", options: ["A) Seit einem Tag.", "B) Seit drei Tagen.", "C) Seit einer Woche."], correct: "B) Seit drei Tagen.", explanation: "Er sagt: 'seit drei Tagen'. (Anh ấy nói: 'đã ba ngày nay'.)" },
      { id: 2, question: "Welche Symptome hat Herr Bauer?", type: "multiple_choice", options: ["A) Bauchschmerzen.", "B) Zahnschmerzen.", "C) Kopf- und Halsschmerzen."], correct: "C) Kopf- und Halsschmerzen.", explanation: "Er sagt: 'starke Kopfschmerzen und mein Hals tut weh'. (Anh ấy nói: 'đau đầu dữ dội và cổ họng tôi bị đau'.)" },
      { id: 3, question: "Hatte der Patient Fieber?", type: "multiple_choice", options: ["A) Ja, 38,5 Grad.", "B) Nein.", "C) Ja, 40 Grad."], correct: "A) Ja, 38,5 Grad.", explanation: "Er sagt: 'gestern Abend hatte ich 38,5 Grad'. (Anh ấy nói: 'tối qua tôi bị 38,5 độ'.)" },
      { id: 4, question: "Was stellt der Arzt fest?", type: "multiple_choice", options: ["A) Eine Grippe.", "B) Eine starke Erkältung.", "C) Allergie."], correct: "B) Eine starke Erkältung.", explanation: "Arzt sagt: 'Sie haben eine starke Erkältung'. (Bác sĩ nói: 'Anh bị cảm lạnh nặng'.)" },
      { id: 5, question: "Darf der Patient arbeiten gehen?", type: "multiple_choice", options: ["A) Ja, ab morgen.", "B) Ja, mit Medikamenten.", "C) Nein, er ist krankgeschrieben."], correct: "C) Nein, er ist krankgeschrieben.", explanation: "Arzt: 'Nein, auf keinen Fall'. (Bác sĩ: 'Không, tuyệt đối không'.)" },
      { id: 6, question: "Für wie lange wird er krankgeschrieben?", type: "multiple_choice", options: ["A) Für einen Tag.", "B) Für den Rest der Woche.", "C) Für einen Monat."], correct: "B) Für den Rest der Woche.", explanation: "Arzt: 'für den Rest der Woche krank'. (Bác sĩ: 'nghỉ ốm đến hết tuần'.)" },
      { id: 7, question: "Was soll der Patient machen?", type: "multiple_choice", options: ["A) Sport treiben.", "B) Viel schlafen und Tee trinken.", "C) Kaffee trinken."], correct: "B) Viel schlafen und Tee trinken.", explanation: "Arzt: 'Sie müssen viel schlafen und Tee trinken'. (Bác sĩ: 'Anh phải ngủ nhiều và uống trà'.)" },
      { id: 8, question: "Was sagt der Patient beim Arzt?", type: "multiple_choice", options: ["A) Oh.", "B) Ah.", "C) Ih."], correct: "B) Ah.", explanation: "Arzt: 'sagen Sie Ah'. (Bác sĩ: 'hãy nói Ah'.)" },
      { id: 9, question: "Wie sieht der Hals des Patienten aus?", type: "multiple_choice", options: ["A) Normal.", "B) Sehr rot.", "C) Weiß."], correct: "B) Sehr rot.", explanation: "Arzt: 'der Hals ist sehr rot'. (Bác sĩ: 'cổ họng rất đỏ'.)" },
      { id: 10, question: "Wann hatte der Patient Fieber?", type: "multiple_choice", options: ["A) Heute Morgen.", "B) Gestern Abend.", "C) Vorgestern."], correct: "B) Gestern Abend.", explanation: "Patient: 'gestern Abend hatte ich 38,5 Grad'. (Bệnh nhân: 'tối qua tôi bị 38,5 độ'.)" }
    ]
  },
  {
    id: "hoeren-1-5",
    title: "Teil 1: Im Restaurant",
    level: "B1",
    topic: "Essen & Trinken",
    duration: "5 Phút",
    type: "Nghe đoạn hội thoại (Multiple Choice)",
    transcript: `Kellner: Guten Abend! Haben Sie reserviert?
Gast: Ja, auf den Namen Fischer, für zwei Personen.
Kellner: Ah ja, Herr Fischer. Bitte folgen Sie mir. Hier ist Ihr Tisch am Fenster. Möchten Sie schon etwas trinken?
Gast: Ja, wir hätten gerne eine Flasche Mineralwasser und zwei Gläser Rotwein.
Kellner: Sehr gerne. Und zum Essen?
Gast: Ich nehme das Steak mit Pommes frites und meine Frau möchte den vegetarischen Auflauf.
Kellner: Das Steak medium oder durchgebraten?
Gast: Medium, bitte.`,
    questions: [
      { id: 1, question: "Hat der Gast einen Tisch reserviert?", type: "multiple_choice", options: ["A) Nein.", "B) Ja, für vier Personen.", "C) Ja, für zwei Personen."], correct: "C) Ja, für zwei Personen.", explanation: "Gast: 'für zwei Personen'. (Khách: 'cho hai người'.)" },
      { id: 2, question: "Auf welchen Namen ist reserviert?", type: "multiple_choice", options: ["A) Müller.", "B) Fischer.", "C) Bauer."], correct: "B) Fischer.", explanation: "Gast: 'auf den Namen Fischer'. (Khách: 'tên là Fischer'.)" },
      { id: 3, question: "Wo ist der Tisch?", type: "multiple_choice", options: ["A) Am Fenster.", "B) An der Tür.", "C) Draußen."], correct: "A) Am Fenster.", explanation: "Kellner: 'Hier ist Ihr Tisch am Fenster'. (Phục vụ: 'Đây là bàn của quý khách bên cửa sổ'.)" },
      { id: 4, question: "Was bestellen sie zu trinken?", type: "multiple_choice", options: ["A) Bier und Wasser.", "B) Wasser und Rotwein.", "C) Cola und Weißwein."], correct: "B) Wasser und Rotwein.", explanation: "Gast: 'Mineralwasser und zwei Gläser Rotwein'. (Khách: 'nước khoáng và hai ly rượu vang đỏ'.)" },
      { id: 5, question: "Was isst der Mann?", type: "multiple_choice", options: ["A) Vegetarischen Auflauf.", "B) Fisch.", "C) Steak mit Pommes."], correct: "C) Steak mit Pommes.", explanation: "Gast: 'Ich nehme das Steak mit Pommes frites'. (Khách: 'Tôi lấy món bít tết với khoai tây chiên'.)" },
      { id: 6, question: "Was isst die Frau?", type: "multiple_choice", options: ["A) Steak.", "B) Salat.", "C) Vegetarischen Auflauf."], correct: "C) Vegetarischen Auflauf.", explanation: "Gast: 'meine Frau möchte den vegetarischen Auflauf'. (Khách: 'vợ tôi muốn món nướng chay'.)" },
      { id: 7, question: "Wie möchte der Mann sein Steak?", type: "multiple_choice", options: ["A) Blutig.", "B) Medium.", "C) Durchgebraten."], correct: "B) Medium.", explanation: "Gast: 'Medium, bitte'. (Khách: 'Làm chín vừa, cảm ơn'.)" },
      { id: 8, question: "Wie viele Gläser Wein bestellen sie?", type: "multiple_choice", options: ["A) Eins.", "B) Zwei.", "C) Drei."], correct: "B) Zwei.", explanation: "Gast: 'zwei Gläser Rotwein'. (Khách: 'hai ly rượu vang đỏ'.)" },
      { id: 9, question: "Welche Art Wasser bestellen sie?", type: "multiple_choice", options: ["A) Leitungswasser.", "B) Eine Flasche Mineralwasser.", "C) Ein Glas Mineralwasser."], correct: "B) Eine Flasche Mineralwasser.", explanation: "Gast: 'eine Flasche Mineralwasser'. (Khách: 'một chai nước khoáng'.)" },
      { id: 10, question: "Wer spricht?", type: "multiple_choice", options: ["A) Zwei Freunde.", "B) Kellner und Gast.", "C) Koch und Kellner."], correct: "B) Kellner und Gast.", explanation: "Es ist ein Gespräch im Restaurant. (Đó là một cuộc trò chuyện trong nhà hàng.)" }
    ]
  }
];

export const HOEREN_T1_FULL = [
  ...HOEREN_T1_EXERCISES,
  ...HOEREN_T1_EXERCISES.map(ex => ({ ...ex, id: ex.id + "-copy" }))
];
