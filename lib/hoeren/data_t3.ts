import { ListeningExercise } from "./data";

export const HOEREN_T3_EXERCISES: ListeningExercise[] = [
  {
    id: "hoeren-3-1",
    title: "Teil 3: Diskussion über Schulkleidung",
    level: "B1",
    topic: "Schule & Gesellschaft",
    duration: "10 Phút",
    type: "Nghe đoạn dài (Đúng / Sai)",
    transcript: `Moderator: Herzlich willkommen zu unserer Sendung. Heute sprechen wir über das Thema 'Schuluniformen in Deutschland'. Im Studio sind Frau Lehmann, Lehrerin an einem Gymnasium, und Herr Schmidt, Vater von zwei Schulkindern. Frau Lehmann, Sie sind für die Einführung von Schulkleidung. Warum?
Frau Lehmann: Ja, genau. Ich beobachte jeden Tag, wie wichtig Markenkleidung für die Schüler geworden ist. Wer nicht die teuersten Schuhe oder Jacken trägt, wird oft ausgelacht. Eine einheitliche Schulkleidung würde diesen sozialen Druck beenden. Alle wären gleich.
Herr Schmidt: Da bin ich ganz anderer Meinung. Kleidung ist ein wichtiges Mittel für Jugendliche, um ihre Persönlichkeit und Individualität auszudrücken. Wenn alle das Gleiche tragen, sehen die Schulen aus wie vor 50 Jahren. Außerdem kostet Schulkleidung auch Geld, das viele Familien nicht haben.
Frau Lehmann: Aber die Familien sparen doch Geld, weil sie keine teuren Markenklamotten mehr kaufen müssen! Und wir sprechen nicht von altmodischen Uniformen, sondern von modernen Pullovern und T-Shirts mit dem Schullogo.
Herr Schmidt: Meine Kinder würden sich weigern, so etwas anzuziehen. Sie wollen selbst entscheiden, was ihnen gefällt.`,
    questions: [
      { id: 1, question: "Frau Lehmann ist gegen Schuluniformen.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie ist FÜR die Einführung von Schulkleidung. (Bà ấy ỦNG HỘ việc áp dụng đồng phục học sinh.)" },
      { id: 2, question: "Frau Lehmann findet, dass Markenkleidung für Schüler sehr wichtig geworden ist.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'wie wichtig Markenkleidung für die Schüler geworden ist'. (Bà ấy nói: 'quần áo hàng hiệu đã trở nên quan trọng như thế nào đối với học sinh'.)" },
      { id: 3, question: "Schüler ohne teure Kleidung werden manchmal ausgelacht.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Wer nicht die teuersten Schuhe trägt, wird oft ausgelacht'. (Bà ấy nói: 'Ai không đi đôi giày đắt tiền nhất, thường bị cười nhạo'.)" },
      { id: 4, question: "Nach Meinung von Frau Lehmann macht Schulkleidung alle Schüler gleich.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Alle wären gleich'. (Bà ấy nói: 'Tất cả sẽ giống nhau/bình đẳng'.)" },
      { id: 5, question: "Herr Schmidt ist der gleichen Meinung wie Frau Lehmann.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt: 'Da bin ich ganz anderer Meinung'. (Ông ấy nói: 'Về điều đó tôi hoàn toàn khác ý kiến'.)" },
      { id: 6, question: "Herr Schmidt glaubt, dass Jugendliche durch Kleidung ihre Persönlichkeit zeigen.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Er sagt: 'Kleidung ist ein wichtiges Mittel... um Individualität auszudrücken'. (Ông ấy nói: 'Quần áo là một công cụ quan trọng... để thể hiện cá tính'.)" },
      { id: 7, question: "Herr Schmidt meint, dass Schulkleidung kostenlos ist.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt: 'Außerdem kostet Schulkleidung auch Geld'. (Ông ấy nói: 'Ngoài ra đồng phục học sinh cũng tốn tiền'.)" },
      { id: 8, question: "Frau Lehmann glaubt, dass Familien Geld sparen könnten.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Aber die Familien sparen doch Geld'. (Bà ấy nói: 'Nhưng các gia đình lại tiết kiệm được tiền'.)" },
      { id: 9, question: "Frau Lehmann möchte, dass die Schüler altmodische Anzüge tragen.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie spricht von 'modernen Pullovern und T-Shirts'. (Bà ấy nói về 'những chiếc áo len và áo thun hiện đại'.)" },
      { id: 10, question: "Die Kinder von Herrn Schmidt finden Schuluniformen toll.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt: 'Meine Kinder würden sich weigern, so etwas anzuziehen'. (Ông ấy nói: 'Các con tôi sẽ từ chối mặc những thứ như vậy'.)" }
    ]
  },
  {
    id: "hoeren-3-2",
    title: "Teil 3: Vortrag über gesunde Ernährung",
    level: "B1",
    topic: "Gesundheit & Essen",
    duration: "10 Phút",
    type: "Nghe đoạn dài (Đúng / Sai)",
    transcript: `Ernährungsberaterin: Guten Abend liebe Zuhörer. In meinem heutigen Vortrag geht es um gesunde Ernährung im stressigen Alltag. Viele Menschen glauben, dass gesundes Essen teuer und kompliziert ist. Das stimmt aber nicht! Es fängt schon beim Frühstück an. Lassen Sie das fertige Müsli aus dem Supermarkt weg, denn es enthält extrem viel Zucker. Mischen Sie sich lieber Haferflocken mit frischem Obst und Nüssen. 
Zum Mittagessen essen viele Berufstätige schnell etwas beim Bäcker oder am Currywurst-Stand. Mein Tipp: Kochen Sie abends einfach die doppelte Menge und nehmen Sie die Reste am nächsten Tag in einer Box mit zur Arbeit. Das spart Geld und ist viel gesünder.
Und noch etwas Wichtiges zum Thema Trinken: Vergessen Sie süße Limonaden. Trinken Sie mindestens zwei Liter Wasser oder ungesüßten Tee am Tag. Wer diese kleinen Dinge im Alltag ändert, wird sich schon nach wenigen Wochen viel fitter fühlen.`,
    questions: [
      { id: 1, question: "Gesundes Essen ist laut der Sprecherin immer sehr teuer.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Das stimmt aber nicht!' (dass es teuer und kompliziert ist). (Cô ấy nói: 'Nhưng điều đó không đúng!' (rằng nó đắt và phức tạp).)" },
      { id: 2, question: "Fertiges Müsli aus dem Supermarkt ist sehr gesund.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'denn es enthält extrem viel Zucker'. (Cô ấy nói: 'vì nó chứa cực kỳ nhiều đường'.)" },
      { id: 3, question: "Die Sprecherin empfiehlt Haferflocken mit Obst zum Frühstück.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Mischen Sie sich lieber Haferflocken mit frischem Obst'. (Cô ấy nói: 'Tốt hơn là hãy tự trộn yến mạch với trái cây tươi'.)" },
      { id: 4, question: "Man soll mittags am besten eine Currywurst essen.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Das ist das, was viele tun, aber sie rät davon ab. (Đó là điều nhiều người làm, nhưng cô ấy khuyên không nên.)" },
      { id: 5, question: "Ein Tipp ist es, abends mehr zu kochen.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Kochen Sie abends einfach die doppelte Menge'. (Cô ấy nói: 'Hãy đơn giản là nấu gấp đôi lượng thức ăn vào buổi tối'.)" },
      { id: 6, question: "Essen von zu Hause mitzubringen spart Geld.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Das spart Geld und ist viel gesünder'. (Cô ấy nói: 'Nó tiết kiệm tiền và lành mạnh hơn nhiều'.)" },
      { id: 7, question: "Man sollte jeden Tag 2 Liter Limonade trinken.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Vergessen Sie süße Limonaden'. (Cô ấy nói: 'Hãy quên đi các loại nước chanh ngọt'.)" },
      { id: 8, question: "Die Sprecherin empfiehlt Wasser oder ungesüßten Tee.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Trinken Sie Wasser oder ungesüßten Tee'. (Cô ấy nói: 'Hãy uống nước hoặc trà không đường'.)" },
      { id: 9, question: "Die Tipps sind nur für Leute mit viel Zeit.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Vortrag geht um Ernährung im 'stressigen Alltag'. (Bài nói chuyện về dinh dưỡng trong 'cuộc sống hàng ngày căng thẳng'.)" },
      { id: 10, question: "Man fühlt sich durch diese Änderungen schnell fitter.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'wird sich schon nach wenigen Wochen viel fitter fühlen'. (Cô ấy nói: 'sẽ cảm thấy khỏe khoắn hơn nhiều chỉ sau vài tuần'.)" }
    ]
  },
  {
    id: "hoeren-3-3",
    title: "Teil 3: Vorstellung eines neuen Projekts",
    level: "B1",
    topic: "Umwelt & Gesellschaft",
    duration: "10 Phút",
    type: "Nghe đoạn dài (Multiple Choice)",
    transcript: `Projektleiter: Hallo zusammen. Ich möchte Ihnen heute unser neues Projekt 'Grüne Stadt' vorstellen. Unser Ziel ist es, die Stadt für alle Bewohner lebenswerter und umweltfreundlicher zu machen. Im ersten Schritt werden wir auf den Dächern von öffentlichen Gebäuden, wie Schulen und Krankenhäusern, Solarzellen installieren. Dadurch können wir unseren eigenen, sauberen Strom produzieren.
Im zweiten Schritt möchten wir den Autoverkehr in der Innenstadt reduzieren. Ab dem nächsten Jahr wird das Parken im Stadtzentrum deutlich teurer. Mit dem zusätzlichen Geld finanzieren wir kostenlose Leihfahrräder für alle Bürger. Außerdem werden neue Bäume an den Hauptstraßen gepflanzt, um die Luftqualität zu verbessern.
Wir wissen, dass nicht alle Autofahrer über diese Pläne glücklich sind. Aber wir müssen jetzt handeln, um unsere Stadt für die Zukunft zu schützen.`,
    questions: [
      { id: 1, question: "Was ist das Hauptziel des Projekts?", type: "multiple_choice", options: ["A) Die Stadt soll größer werden.", "B) Die Stadt soll umweltfreundlicher werden.", "C) Die Stadt soll mehr Autos bekommen."], correct: "B) Die Stadt soll umweltfreundlicher werden.", explanation: "Ziel ist es, die Stadt lebenswerter und umweltfreundlicher zu machen. (Mục tiêu là làm cho thành phố đáng sống hơn và thân thiện với môi trường hơn.)" },
      { id: 2, question: "Wo werden Solarzellen installiert?", type: "multiple_choice", options: ["A) Auf privaten Wohnhäusern.", "B) Auf öffentlichen Gebäuden.", "C) In den Parks."], correct: "B) Auf öffentlichen Gebäuden.", explanation: "Auf den Dächern von öffentlichen Gebäuden, wie Schulen. (Trên mái của các tòa nhà công cộng, như trường học.)" },
      { id: 3, question: "Warum werden Solarzellen installiert?", type: "multiple_choice", options: ["A) Für sauberen Strom.", "B) Weil sie schön sind.", "C) Um Wärme zu erzeugen."], correct: "A) Für sauberen Strom.", explanation: "Um eigenen, sauberen Strom zu produzieren. (Để tự sản xuất nguồn điện sạch.)" },
      { id: 4, question: "Was ändert sich für Autofahrer?", type: "multiple_choice", options: ["A) Sie dürfen nicht mehr ins Zentrum fahren.", "B) Das Parken im Zentrum wird teurer.", "C) Sie bekommen kostenlose Parkplätze."], correct: "B) Das Parken im Zentrum wird teurer.", explanation: "Ab dem nächsten Jahr wird das Parken im Stadtzentrum deutlich teurer. (Bắt đầu từ năm sau, việc đậu xe ở trung tâm thành phố sẽ đắt hơn đáng kể.)" },
      { id: 5, question: "Was passiert mit dem Geld, das durch das Parken eingenommen wird?", type: "multiple_choice", options: ["A) Es wird für kostenlose Leihfahrräder genutzt.", "B) Es wird für neue Straßen genutzt.", "C) Es geht an den Bürgermeister."], correct: "A) Es wird für kostenlose Leihfahrräder genutzt.", explanation: "Mit dem Geld finanzieren wir kostenlose Leihfahrräder. (Với số tiền đó, chúng tôi tài trợ xe đạp cho mượn miễn phí.)" },
      { id: 6, question: "Wer kann die Fahrräder nutzen?", type: "multiple_choice", options: ["A) Nur Touristen.", "B) Nur Kinder.", "C) Alle Bürger."], correct: "C) Alle Bürger.", explanation: "Kostenlose Leihfahrräder für alle Bürger. (Xe đạp cho mượn miễn phí cho mọi công dân.)" },
      { id: 7, question: "Warum werden neue Bäume gepflanzt?", type: "multiple_choice", options: ["A) Weil sie schön aussehen.", "B) Um die Luftqualität zu verbessern.", "C) Um Schatten für Autos zu machen."], correct: "B) Um die Luftqualität zu verbessern.", explanation: "Bäume werden gepflanzt, um die Luftqualität zu verbessern. (Cây được trồng để cải thiện chất lượng không khí.)" },
      { id: 8, question: "Sind alle Leute über die Pläne glücklich?", type: "multiple_choice", options: ["A) Ja, alle.", "B) Nein, nicht alle Autofahrer.", "C) Niemand ist glücklich."], correct: "B) Nein, nicht alle Autofahrer.", explanation: "Er sagt: 'Wir wissen, dass nicht alle Autofahrer über diese Pläne glücklich sind'. (Ông ấy nói: 'Chúng tôi biết rằng không phải tất cả người lái xe đều hài lòng về những kế hoạch này'.)" },
      { id: 9, question: "Wann wird das Parken teurer?", type: "multiple_choice", options: ["A) Ab sofort.", "B) Ab dem nächsten Jahr.", "C) In zehn Jahren."], correct: "B) Ab dem nächsten Jahr.", explanation: "Er sagt: 'Ab dem nächsten Jahr'. (Ông ấy nói: 'Từ năm sau'.)" },
      { id: 10, question: "Wie heißt das Projekt?", type: "multiple_choice", options: ["A) Schöne Stadt.", "B) Grüne Stadt.", "C) Saubere Stadt."], correct: "B) Grüne Stadt.", explanation: "Er stellt das Projekt 'Grüne Stadt' vor. (Ông ấy giới thiệu dự án 'Thành phố xanh'.)" }
    ]
  },
  {
    id: "hoeren-3-4",
    title: "Teil 3: Interview mit einer Schauspielerin",
    level: "B1",
    topic: "Kultur & Medien",
    duration: "9 Phút",
    type: "Nghe đoạn dài (Đúng / Sai)",
    transcript: `Moderator: Herzlich willkommen zu 'Kultur am Sonntag'. Mein heutiger Gast ist die bekannte Schauspielerin Anna Schmidt. Anna, Ihr neuer Film 'Sommer in Berlin' läuft gerade sehr erfolgreich im Kino. Haben Sie mit diesem großen Erfolg gerechnet?
Anna: Ehrlich gesagt, nein. Es war ein kleiner Independent-Film mit wenig Budget. Wir haben die Szenen oft sehr spontan gedreht. Dass jetzt so viele Leute den Film sehen wollen, ist eine wunderbare Überraschung.
Moderator: Sie spielen in dem Film eine Künstlerin, die versucht, in der großen Stadt zu überleben. Wie viel von Anna steckt in dieser Rolle?
Anna: Sehr viel! Ich bin ja selbst vor zehn Jahren nach Berlin gekommen und hatte anfangs große Probleme. Ich musste als Kellnerin arbeiten, um meine Miete zu bezahlen. Diese Erfahrungen haben mir bei der Rolle sehr geholfen.
Moderator: Was sind Ihre nächsten Pläne?
Anna: Ich werde erst einmal eine längere Pause machen und verreisen. Im Herbst beginne ich dann mit den Proben für ein Theaterstück in München.`,
    questions: [
      { id: 1, question: "Anna Schmidts neuer Film heißt 'Winter in Berlin'.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Der Film heißt 'Sommer in Berlin'. (Tên bộ phim là 'Mùa hè ở Berlin'.)" },
      { id: 2, question: "Der Film läuft zurzeit im Kino.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Der Film läuft gerade sehr erfolgreich im Kino. (Bộ phim hiện đang chiếu rất thành công tại rạp.)" },
      { id: 3, question: "Anna hat diesen großen Erfolg erwartet.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Ehrlich gesagt, nein'. (Cô ấy nói: 'Thành thật mà nói, không'.)" },
      { id: 4, question: "Der Film hatte ein sehr großes Budget.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Es war ein kleiner Independent-Film mit wenig Budget'. (Cô ấy nói: 'Đó là một bộ phim độc lập nhỏ với kinh phí thấp'.)" },
      { id: 5, question: "Anna spielt im Film eine Lehrerin.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie spielt eine Künstlerin. (Cô ấy đóng vai một nghệ sĩ.)" },
      { id: 6, question: "Anna hat persönliche Erfahrungen in die Rolle eingebracht.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie sagt: 'Sehr viel! ... Diese Erfahrungen haben mir bei der Rolle sehr geholfen'. (Cô ấy nói: 'Rất nhiều! ... Những kinh nghiệm này đã giúp tôi rất nhiều cho vai diễn'.)" },
      { id: 7, question: "Anna wohnt schon ihr ganzes Leben in Berlin.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie ist vor zehn Jahren nach Berlin gekommen. (Cô ấy đến Berlin từ 10 năm trước.)" },
      { id: 8, question: "Anna hat früher als Kellnerin gearbeitet.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie musste als Kellnerin arbeiten, um ihre Miete zu bezahlen. (Cô ấy đã phải làm bồi bàn để trả tiền thuê nhà.)" },
      { id: 9, question: "Annas nächstes Projekt ist sofort ein neuer Film.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie macht erst eine Pause und spielt dann Theater. (Cô ấy sẽ nghỉ ngơi trước rồi mới diễn kịch.)" },
      { id: 10, question: "Im Herbst wird sie in München am Theater arbeiten.", type: "true_false", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Im Herbst beginnt sie mit den Proben für ein Theaterstück in München. (Vào mùa thu cô ấy bắt đầu tập dượt cho một vở kịch ở Munich.)" }
    ]
  },
  {
    id: "hoeren-3-5",
    title: "Teil 3: Bericht über Carsharing",
    level: "B1",
    topic: "Technik & Verkehr",
    duration: "8 Phút",
    type: "Nghe đoạn dài (Multiple Choice)",
    transcript: `Radiosprecher: Immer mehr Menschen in Großstädten verzichten auf ein eigenes Auto und nutzen stattdessen Carsharing-Angebote. Aber lohnt sich das wirklich? Wir haben nachgefragt. Herr Weber aus Frankfurt ist seit zwei Jahren dabei. Er sagt: 'Für mich ist es perfekt. Ich fahre mit der U-Bahn zur Arbeit. Ein Auto brauche ich nur am Wochenende für größere Einkäufe oder Ausflüge. Durch Carsharing spare ich mir die Kosten für Versicherung, Reparaturen und den Parkplatz.'
Kritiker weisen jedoch darauf hin, dass Carsharing auf dem Land kaum funktioniert. Dort sind die Wege weiter und es gibt nicht genug Fahrzeuge. Außerdem beklagen sich manche Nutzer in der Stadt darüber, dass am Wochenende bei schönem Wetter oft alle Autos vermietet sind, wenn man spontan ans Meer fahren möchte.`,
    questions: [
      { id: 1, question: "Was machen immer mehr Menschen in Großstädten?", type: "multiple_choice", options: ["A) Sie kaufen mehr Autos.", "B) Sie nutzen Carsharing.", "C) Sie fahren Fahrrad."], correct: "B) Sie nutzen Carsharing.", explanation: "Menschen verzichten auf ein eigenes Auto und nutzen Carsharing-Angebote. (Mọi người từ bỏ việc sở hữu ô tô riêng và sử dụng các dịch vụ đi chung xe (Carsharing).)" },
      { id: 2, question: "Wer berichtet von seinen Erfahrungen?", type: "multiple_choice", options: ["A) Ein Autoverkäufer.", "B) Ein Mechaniker.", "C) Herr Weber aus Frankfurt."], correct: "C) Herr Weber aus Frankfurt.", explanation: "Herr Weber aus Frankfurt ist seit zwei Jahren dabei. (Ông Weber từ Frankfurt đã tham gia được hai năm.)" },
      { id: 3, question: "Wie kommt Herr Weber zur Arbeit?", type: "multiple_choice", options: ["A) Mit dem Auto.", "B) Mit dem Fahrrad.", "C) Mit der U-Bahn."], correct: "C) Mit der U-Bahn.", explanation: "Er sagt: 'Ich fahre mit der U-Bahn zur Arbeit'. (Ông ấy nói: 'Tôi đi làm bằng tàu điện ngầm'.)" },
      { id: 4, question: "Wann braucht Herr Weber ein Auto?", type: "multiple_choice", options: ["A) Jeden Tag.", "B) Nur am Wochenende.", "C) Nie."], correct: "B) Nur am Wochenende.", explanation: "Er sagt: 'Ein Auto brauche ich nur am Wochenende'. (Ông ấy nói: 'Tôi chỉ cần một chiếc xe vào cuối tuần'.)" },
      { id: 5, question: "Welche Kosten spart sich Herr Weber durch Carsharing?", type: "multiple_choice", options: ["A) Kosten für Kleidung.", "B) Versicherung und Parkplatz.", "C) Mietkosten."], correct: "B) Versicherung und Parkplatz.", explanation: "Er spart Versicherung, Reparaturen und Parkplatz. (Ông ấy tiết kiệm được tiền bảo hiểm, sửa chữa và chỗ đỗ xe.)" },
      { id: 6, question: "Funktioniert Carsharing auf dem Land gut?", type: "multiple_choice", options: ["A) Ja, sehr gut.", "B) Besser als in der Stadt.", "C) Kaum."], correct: "C) Kaum.", explanation: "Kritiker weisen darauf hin, dass es auf dem Land kaum funktioniert. (Những người chỉ trích chỉ ra rằng nó hầu như không hoạt động ở nông thôn.)" },
      { id: 7, question: "Warum ist Carsharing auf dem Land schwierig?", type: "multiple_choice", options: ["A) Die Leute mögen keine Autos.", "B) Die Wege sind weiter und es gibt zu wenige Autos.", "C) Die Straßen sind zu eng."], correct: "B) Die Wege sind weiter und es gibt zu wenige Autos.", explanation: "Dort sind die Wege weiter und es gibt nicht genug Fahrzeuge. (Ở đó khoảng cách xa hơn và không có đủ xe.)" },
      { id: 8, question: "Worüber beklagen sich manche Nutzer in der Stadt?", type: "multiple_choice", options: ["A) Die Autos sind zu groß.", "B) Die Autos sind zu teuer.", "C) Manchmal sind alle Autos vermietet."], correct: "C) Manchmal sind alle Autos vermietet.", explanation: "Sie beklagen, dass oft alle Autos vermietet sind. (Họ phàn nàn rằng thường xuyên tất cả các xe đều đã được cho thuê hết.)" },
      { id: 9, question: "Wann fehlen die Autos in der Stadt besonders oft?", type: "multiple_choice", options: ["A) Am Montagmorgen.", "B) Am Wochenende bei schönem Wetter.", "C) In der Nacht."], correct: "B) Am Wochenende bei schönem Wetter.", explanation: "Am Wochenende bei schönem Wetter, wenn man spontan wegfahren möchte. (Vào cuối tuần khi thời tiết đẹp, khi người ta muốn ngẫu hứng đi chơi xa.)" },
      { id: 10, question: "Ist Carsharing für Herrn Weber positiv oder negativ?", type: "multiple_choice", options: ["A) Positiv.", "B) Negativ.", "C) Er weiß es nicht."], correct: "A) Positiv.", explanation: "Er sagt: 'Für mich ist es perfekt'. (Ông ấy nói: 'Đối với tôi nó là hoàn hảo'.)" }
    ]
  }
];

export const HOEREN_T3_FULL = [
  ...HOEREN_T3_EXERCISES,
  ...HOEREN_T3_EXERCISES.map(ex => ({ ...ex, id: ex.id + "-copy" }))
];
