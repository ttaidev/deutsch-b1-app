import { LESEN_EXERCISES_T1 } from "./data_t1";
import { LESEN_EXERCISES_T2 } from "./data_t2";
import { LESEN_EXERCISES_T3 } from "./data_t3";
import { LESEN_EXERCISES_T4 } from "./data_t4";
import { LESEN_EXERCISES_T5 } from "./data_t5";

export type QuestionType = "multiple_choice" | "true_false" | "ja_nein" | "matching";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface ReadingExercise {
  id: string;
  title: string;
  level: string;
  topic: string;
  duration: string;
  type: string;
  questionType: QuestionType;
  readingText: string;
  questions: Question[];
  completed?: boolean;
  score?: string;
}

export const LESEN_EXERCISES: ReadingExercise[] = [
  // --- LOẠI 1: ĐÚNG / SAI (Richtig / Falsch) ---
  {
    id: "lesen-tf-1",
    title: "Teil 1: Wohnungsanzeigen in Berlin",
    level: "B1",
    topic: "Wohnen & Leben",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Blog von Julian: Mein anstrengender Umzug nach Berlin

Hallo Leute! Endlich melde ich mich wieder bei euch. Die letzten Wochen waren der absolute Wahnsinn! Nach unzähligen Wohnungsbesichtigungen und stundenlangem Warten in langen Schlangen habe ich endlich eine neue Wohnung gefunden! Sie liegt nicht, wie ich anfangs gehofft hatte, im ruhigen Vorort, sondern direkt im lebhaften Zentrum von Berlin, gleich neben einem großen Park, in dem am Wochenende immer viele Straßenmusiker auftreten. 

Die Wohnung selbst ist ein Traum: Sie hat 3 Zimmer, einen kleinen, aber feinen Balkon und riesige Fenster, durch die den ganzen Tag die Sonne scheint. Ursprünglich wollte ich ja eine möblierte Wohnung mieten, weil mir das Kaufen von neuen Möbeln zu teuer war. Aber diese Wohnung war einfach so schön, dass ich sie unmöbliert genommen habe. Die Miete ist für Berliner Verhältnisse wirklich fair – nur 800 Euro kalt. Natürlich kommen da noch Strom, Internet und Heizung dazu, was mein Budget ziemlich strapaziert.

Nächste Woche am Samstag ziehe ich endlich um! Wer von euch hat Zeit und Lust, mir beim Kisten schleppen zu helfen? Mein Bruder wollte eigentlich kommen, aber er hat sich gestern beim Fußballspielen den Fuß verletzt und fällt aus. Ich habe bereits einen großen Transporter bei einer Autovermietung reserviert und wir fangen pünktlich um 9 Uhr morgens an. Wer mir hilft, muss natürlich nicht hungern: Abends lade ich alle Helfer zum Pizzaessen bei meinem Lieblingsitaliener um die Ecke ein – selbst kochen werde ich nach dem ganzen Stress definitiv nicht! Schreibt mir einfach in die Kommentare, ob ihr dabei seid!`,
    questions: [
      { id: 1, question: "Julian hat eine neue Wohnung auf dem Land gefunden.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Wohnung liegt im Zentrum von Berlin, nicht auf dem Land. (Căn hộ nằm ở trung tâm Berlin, không phải ở vùng quê.)" },
      { id: 2, question: "Die Wohnung kostet 800 Euro inklusive Nebenkosten.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "'800 Euro kalt' bedeutet ohne Nebenkosten (Strom, Internet etc. kommen noch dazu). ('800 Euro kalt' nghĩa là giá thuê chưa bao gồm phụ phí điện, nước, internet...)" },
      { id: 3, question: "Julian wollte von Anfang an eine unmöblierte Wohnung.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er schreibt: 'Ursprünglich wollte ich ja eine möblierte Wohnung mieten...'. (Anh ấy viết: 'Ban đầu tôi vốn định thuê một căn hộ đã có sẵn nội thất...')" },
      { id: 4, question: "Julians Bruder kann beim Umzug nicht helfen.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sein Bruder hat sich beim Fußballspielen verletzt und fällt aus. (Anh trai cậu ấy bị thương lúc đá bóng nên không thể đến giúp được.)" },
      { id: 5, question: "Jemand aus Julians Familie hat einen Transporter organisiert.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Julian selbst hat einen Transporter bei einer Autovermietung reserviert. (Chính Julian đã tự đặt thuê một chiếc xe tải chở hàng.)" },
      { id: 6, question: "Julian kocht abends für alle Helfer selbst.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er lädt alle zum Pizzaessen beim Lieblingsitaliener ein und sagt, er wird definitiv nicht selbst kochen. (Cậu ấy mời mọi người đi ăn pizza và nói chắc chắn sẽ không tự nấu ăn.)" }
    ]
  },
  {
    id: "lesen-tf-2",
    title: "Teil 1: Einladung zum Schulfest",
    level: "B1",
    topic: "Schule & Bildung",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Schul-Blog von Max: Rückblick auf unser verrücktes Schulfest

Hallo zusammen! Gestern war unser großes Sommerfest an der Goethe-Schule und es war ein voller Erfolg, auch wenn nicht alles genau nach Plan lief. Das Fest fand dieses Mal nicht wie sonst im Juli, sondern schon Mitte Juni statt, um dem schlechten Wetter auszuweichen. Offiziell dauerte es von 14:00 bis 18:00 Uhr auf dem großen Pausenhof. 

Am Anfang hatten wir etwas Pech: Kurz bevor die ersten Gäste kamen, fiel plötzlich der Strom in der gesamten Schule aus! Zum Glück hat unser Hausmeister Herr Koch das Problem nach einer halben Stunde gelöst, sodass die Musikboxen wieder funktionierten. Es gab so viele coole Aktivitäten für uns Schüler, wie zum Beispiel Kinderschminken, einen Hindernisparcours und Dosenwerfen. Das absolute Highlight war aber das kleine Theaterstück, das von der Klasse 3b aufgeführt wurde – sie haben das Märchen "Rotkäppchen" modern interpretiert und alle zum Lachen gebracht. Die Lehrer hatten vorher wochenlang mit ihnen geprobt.

Für das leibliche Wohl war ebenfalls bestens gesorgt: Die Elternvertreter haben Berge von Kuchen gebacken, Kaffee gekocht und Würstchen gegrillt. Jeder musste zwar für sein Essen bezahlen, aber die Preise waren total günstig. Die Einnahmen gehen nämlich komplett an ein tolles Projekt: Unsere Schule möchte neue Spielgeräte und vielleicht sogar ein kleines Klettergerüst für den Pausenhof kaufen. Nächstes Jahr bin ich auf jeden Fall wieder dabei, vielleicht verkaufe ich dann sogar selbst Kuchen an einem eigenen Stand!`,
    questions: [
      { id: 1, question: "Das Fest fand im Juli statt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Es fand dieses Mal schon Mitte Juni statt. (Lễ hội lần này diễn ra từ giữa tháng Sáu, không phải tháng Bảy.)" },
      { id: 2, question: "Das Sommerfest konnte ohne technische Probleme beginnen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Kurz bevor die Gäste kamen, fiel der Strom aus. (Ngay trước khi khách đến thì bị mất điện toàn trường.)" },
      { id: 3, question: "Alle Schüler haben zusammen ein Theaterstück aufgeführt.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Nur die Klasse 3b hat das Theaterstück aufgeführt. (Chỉ có lớp 3b diễn kịch, không phải tất cả học sinh.)" },
      { id: 4, question: "Essen und Trinken auf dem Fest wurden von den Eltern verkauft.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Die Elternvertreter haben Kuchen gebacken, Kaffee gekocht und Würstchen gegrillt. (Đại diện hội phụ huynh đã nướng bánh, pha cà phê và nướng xúc xích.)" },
      { id: 5, question: "Das gesammelte Geld wird für neue Computer ausgegeben.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Einnahmen gehen an ein Projekt für neue Spielgeräte und ein Klettergerüst. (Tiền thu được dùng để mua thiết bị vui chơi mới, không phải máy tính.)" },
      { id: 6, question: "Max hat dieses Jahr Kuchen auf dem Fest verkauft.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Er sagt, dass er vielleicht nächstes Jahr Kuchen verkaufen wird. (Cậu ấy nói rằng có thể năm sau cậu ấy mới tự bán bánh.)" }
    ]
  },
  {
    id: "lesen-tf-3",
    title: "Teil 1: Neuer Job im Krankenhaus",
    level: "B1",
    topic: "Arbeit & Gesundheit",
    duration: "15 Phút",
    type: "Đúng / Sai",
    questionType: "true_false",
    readingText: `Forenbeitrag von Anna (Thema: Erste Arbeitswoche):

Hallo liebe Foren-Mitglieder, ich muss euch unbedingt von meinen letzten Erlebnissen erzählen! Nach Monaten der anstrengenden Jobsuche und unzähligen Bewerbungsgesprächen habe ich endlich eine Zusage bekommen. Ich arbeite seit zwei Wochen als Krankenpflegerin auf der kardiologischen Station im neuen Stadtkrankenhaus. Ursprünglich wollte ich ja in einer Kinderklinik anfangen, weil ich so gerne mit Kindern arbeite, aber dort gab es leider keine freien Stellen.

Die Arbeit im Stadtkrankenhaus ist wirklich körperlich und mental anstrengend, aber sie macht mir überraschend großen Spaß. Meine Schicht beginnt meistens schon um 6 Uhr morgens, deshalb muss ich extrem früh aufstehen, meistens schon um 4:30 Uhr! Das war für mich als Langschläferin am Anfang eine riesige Umstellung. Die erfahrenen Kollegen auf meiner Station sind zum Glück alle sehr nett und helfen mir bei Fragen immer sofort weiter. Nur der Chefarzt ist manchmal etwas streng.

Nächsten Monat steht mir eine neue Herausforderung bevor: Ich muss das erste Mal an einem kompletten Wochenende arbeiten, sowohl Samstag als auch Sonntag. Darauf freue ich mich ehrlich gesagt nicht so sehr, da ich eigentlich mit meinen Freunden an einen See fahren wollte. Aber das gehört zum Job im Schichtdienst eben dazu. Habt ihr Tipps, wie man nach einer anstrengenden Schicht am besten abschalten kann? Wie war eigentlich eure allererste Arbeitswoche nach der Ausbildung?
Liebe Grüße, Anna`,
    questions: [
      { id: 1, question: "Anna arbeitet derzeit auf der Kinderstation.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie arbeitet auf der kardiologischen Station. In der Kinderklinik gab es keine Stellen. (Cô ấy làm ở khoa tim mạch, khoa nhi không có chỗ trống.)" },
      { id: 2, question: "Anna fand es am Anfang leicht, so früh aufzustehen.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie sagt: 'Das war für mich als Langschläferin am Anfang eine riesige Umstellung'. (Cô ấy là người thích ngủ nướng nên việc dậy sớm lúc đầu là một sự thay đổi cực lớn.)" },
      { id: 3, question: "Anna beginnt ihre Arbeit in der Regel um 6 Uhr.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Ihre Schicht beginnt meistens schon um 6 Uhr morgens. (Ca làm của cô ấy thường bắt đầu lúc 6 giờ sáng.)" },
      { id: 4, question: "Alle Menschen im Krankenhaus sind sehr freundlich zu Anna.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Die Kollegen sind nett, aber der Chefarzt ist manchmal etwas streng. (Đồng nghiệp thì tốt bụng nhưng bác sĩ trưởng khoa đôi khi hơi nghiêm khắc.)" },
      { id: 5, question: "Anna muss am nächsten Wochenende das erste Mal arbeiten.", options: ["Richtig", "Falsch"], correct: "Falsch", explanation: "Sie muss im *nächsten Monat* das erste Mal an einem Wochenende arbeiten, nicht am *nächsten Wochenende*. (Tháng sau cô ấy mới phải làm cuối tuần lần đầu tiên, không phải cuối tuần tới.)" },
      { id: 6, question: "Anna bittet die anderen Foren-Mitglieder um Ratschläge zur Entspannung.", options: ["Richtig", "Falsch"], correct: "Richtig", explanation: "Sie fragt: 'Habt ihr Tipps, wie man nach einer anstrengenden Schicht am besten abschalten kann?' (Cô ấy hỏi xin lời khuyên làm sao để thư giãn tốt nhất sau ca làm việc.)" }
    ]
  },

  // --- LOẠI 2: TRẮC NGHIỆM A/B/C (Multiple Choice) ---
  {
    id: "lesen-mc-1",
    title: "Teil 2: Die 4-Tage-Woche in Deutschland",
    level: "B1",
    topic: "Arbeit & Beruf",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Wirtschaftsblatt (Ausgabe München): Immer mehr deutsche Unternehmen aus unterschiedlichen Branchen testen derzeit ein revolutionäres Arbeitsmodell, das die traditionelle 40-Stunden-Woche ablösen könnte: die 4-Tage-Woche bei vollem Lohnausgleich. Laut einer groß angelegten und aktuellen Studie der Universität Münster haben bereits über 150 Vorreiter-Firmen in Deutschland, hauptsächlich in der IT- und Kreativbranche, dieses Modell verbindlich eingeführt.

Die Ergebnisse des ersten Testjahres, die von Wirtschaftspsychologen intensiv begleitet wurden, sind überraschend positiv ausgefallen. Obwohl die Mitarbeiter faktisch einen Tag weniger im Büro verbringen und dadurch weniger Arbeitsstunden leisten, ist die Produktivität in fast 80 Prozent der teilnehmenden Firmen gleich geblieben oder sogar leicht gestiegen. Viele Angestellte berichten in Interviews von deutlich weniger Stress, weniger Krankheitstagen und einer weitaus besseren Balance zwischen Familie und Beruf. Sie können sich an den Arbeitstagen besser konzentrieren und erledigen Aufgaben effizienter.

Wirtschaftsexperten und Politiker warnen jedoch vor zu großer Euphorie. Sie betonen nachdrücklich, dass dieses Modell nicht pauschal für alle Wirtschaftsbereiche geeignet ist. Insbesondere im Pflegebereich, in Krankenhäusern oder in der Gastronomie, wo rund um die Uhr physisches Personal benötigt wird, lässt sich die Arbeitszeit nicht einfach ohne neues Personal reduzieren. Kritiker befürchten zudem, dass der Druck an den vier Arbeitstagen enorm ansteigen könnte, was langfristig doch wieder zu Burnout und Erschöpfung führen würde. Dennoch planen weitere 300 Firmen, im nächsten Jahr Testphasen zu starten.`,
    questions: [
      { id: 1, question: "Was charakterisiert das neue Arbeitsmodell laut Text?", options: ["A) Man arbeitet 4 Tage, muss aber auf einen Teil des Gehalts verzichten.", "B) Man arbeitet 4 Tage und erhält weiterhin das gleiche Gehalt.", "C) Man arbeitet jeden Tag länger, hat aber freitags immer frei."], correct: "B) Man arbeitet 4 Tage und erhält weiterhin das gleiche Gehalt.", explanation: "Im Text steht: 'die 4-Tage-Woche bei vollem Lohnausgleich' (volles Gehalt). (Làm 4 ngày một tuần nhưng lương vẫn giữ nguyên 100%.)" },
      { id: 2, question: "In welchen Branchen wird das Modell hauptsächlich schon genutzt?", options: ["A) In der Gastronomie und Pflege.", "B) Im Einzelhandel und in Schulen.", "C) In der IT- und Kreativbranche."], correct: "C) In der IT- und Kreativbranche.", explanation: "...hauptsächlich in der IT- und Kreativbranche, dieses Modell verbindlich eingeführt. (...chủ yếu được áp dụng trong ngành IT và sáng tạo.)" },
      { id: 3, question: "Wie hat sich die Arbeitsleistung in den meisten Test-Firmen entwickelt?", options: ["A) Sie ist drastisch eingebrochen.", "B) Sie ist konstant geblieben oder sogar gestiegen.", "C) Sie hat sich fast verdoppelt."], correct: "B) Sie ist konstant geblieben oder sogar gestiegen.", explanation: "...ist die Produktivität in fast 80 Prozent der teilnehmenden Firmen gleich geblieben oder sogar leicht gestiegen. (Năng suất ở 80% công ty giữ nguyên hoặc thậm chí tăng nhẹ.)" },
      { id: 4, question: "Warum arbeiten die Menschen an den vier Tagen effektiver?", options: ["A) Weil sie konzentrierter sind.", "B) Weil sie mehr Geld für schnelle Arbeit bekommen.", "C) Weil sie Angst haben, entlassen zu werden."], correct: "A) Weil sie konzentrierter sind.", explanation: "Sie können sich an den Arbeitstagen besser konzentrieren und erledigen Aufgaben effizienter. (Họ có thể tập trung tốt hơn và hoàn thành công việc hiệu quả hơn.)" },
      { id: 5, question: "Welche Sorge haben die Kritiker bezüglich des Modells?", options: ["A) Sie glauben, dass die Wirtschaft zusammenbricht.", "B) Sie befürchten, dass der Stress an den verbleibenden vier Tagen zu hoch wird.", "C) Sie denken, dass die Leute im Büro einschlafen."], correct: "B) Sie befürchten, dass der Stress an den verbleibenden vier Tagen zu hoch wird.", explanation: "Kritiker befürchten zudem, dass der Druck an den vier Arbeitstagen enorm ansteigen könnte... (Những người chỉ trích lo sợ áp lực công việc trong 4 ngày đó sẽ tăng đột biến...)" },
      { id: 6, question: "Was ist die Hauptaussage des Textes über die 4-Tage-Woche?", options: ["A) Sie ist ein voller Erfolg und wird nächstes Jahr überall in Deutschland Pflicht.", "B) Niemand in Deutschland möchte mehr arbeiten, daher müssen Firmen handeln.", "C) Sie zeigt positive Ergebnisse, ist aber nicht für jeden Berufsbereich umsetzbar."], correct: "C) Sie zeigt positive Ergebnisse, ist aber nicht für jeden Berufsbereich umsetzbar.", explanation: "Der Text zeigt positive Studien auf, warnt aber gleichzeitig, dass es in der Pflege und Gastronomie nicht funktioniert. (Mô hình này mang lại kết quả tích cực, nhưng không phải ngành nào cũng áp dụng được, ví dụ như y tế hay nhà hàng.)" }
    ]
  },
  {
    id: "lesen-mc-2",
    title: "Teil 2: Erwachsene auf der Schulbank",
    level: "B1",
    topic: "Bildung & Sprachen",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Bildung aktuell: Lebenslanges Lernen wird in der heutigen Gesellschaft immer wichtiger. Nicht nur Kinder und Jugendliche, sondern auch immer mehr Erwachsene in Deutschland drücken wieder freiwillig die Schulbank. Die Volkshochschulen (VHS) im gesamten Bundesgebiet melden für das laufende Jahr einen historischen Rekord bei den Anmeldungen für Fremdsprachenkurse. 

Die Motivation für diesen Lerneifer ist vielschichtig, doch der Hauptgrund liegt oft in der sich verändernden Arbeitswelt: Da sehr viele Firmen heute global agieren und internationale Geschäftspartner haben, erwarten sie von ihren Mitarbeitern fließende Englisch- oder zumindest gute Spanischkenntnisse. Wer Karriere machen will, kommt an Fremdsprachen nicht mehr vorbei. Aber auch das private Reisen spielt eine immer größere Rolle. Bemerkenswert ist, dass zunehmend Menschen über 50 Jahre Sprachen wie Italienisch, Französisch oder Griechisch lernen. Ihr Ziel ist es nicht, die Sprache perfekt schreiben zu können, sondern sich im Urlaub besser mit Einheimischen auf dem Markt oder im Restaurant unterhalten zu können.

Um diesem enormen Ansturm und den veränderten Bedürfnissen der Berufstätigen gerecht zu werden, haben viele Sprachschulen ihr Angebot radikal umstrukturiert. Statt nur Kurse am späten Abend anzubieten, wenn viele nach der Arbeit zu müde sind, setzen sie nun verstärkt auf intensive Online-Kurse, die flexibel am Wochenende oder sogar frühmorgens vor der Arbeit stattfinden. Bildungsexperten gehen davon aus, dass in Zukunft auch Virtual-Reality-Brillen im Sprachunterricht eingesetzt werden.`,
    questions: [
      { id: 1, question: "Welchen Trend beschreibt der Artikel?", options: ["A) Weniger Kinder gehen in Deutschland zur Schule.", "B) Viele Erwachsene nehmen an Sprachkursen teil.", "C) Studenten brechen häufiger ihr Studium ab."], correct: "B) Viele Erwachsene nehmen an Sprachkursen teil.", explanation: "...auch immer mehr Erwachsene in Deutschland drücken wieder freiwillig die Schulbank. (...ngày càng có nhiều người lớn ở Đức tự nguyện cắp sách đến trường trở lại.)" },
      { id: 2, question: "Warum lernen viele Arbeitnehmer heutzutage Fremdsprachen?", options: ["A) Weil sie im Ausland studieren wollen.", "B) Weil internationale Unternehmen dies für die Karriere erwarten.", "C) Weil sie von ihren Chefs dazu gezwungen werden."], correct: "B) Weil internationale Unternehmen dies für die Karriere erwarten.", explanation: "Da sehr viele Firmen heute global agieren... erwarten sie von ihren Mitarbeitern fließende Englisch... (Vì nhiều công ty hoạt động toàn cầu nên họ yêu cầu nhân viên phải thông thạo ngoại ngữ để thăng tiến.)" },
      { id: 3, question: "Welches Ziel haben viele über 50-jährige Kursteilnehmer?", options: ["A) Sie wollen komplizierte fremdsprachige Bücher lesen.", "B) Sie wollen eine neue berufliche Herausforderung finden.", "C) Sie möchten sich auf Reisen mit den Menschen vor Ort verständigen können."], correct: "C) Sie möchten sich auf Reisen mit den Menschen vor Ort verständigen können.", explanation: "...sondern sich im Urlaub besser mit Einheimischen auf dem Markt oder im Restaurant unterhalten zu können. (...mà là để có thể trò chuyện tốt hơn với người bản địa khi đi du lịch.)" },
      { id: 4, question: "Warum waren die klassischen Abendkurse für viele ein Problem?", options: ["A) Weil die Kurse zu teuer waren.", "B) Weil die Menschen nach der Arbeit oft erschöpft sind.", "C) Weil die Lehrer abends keine Zeit hatten."], correct: "B) Weil die Menschen nach der Arbeit oft erschöpft sind.", explanation: "...Statt nur Kurse am späten Abend anzubieten, wenn viele nach der Arbeit zu müde sind... (Các khóa học buổi tối không hiệu quả vì lúc đó nhiều người đã quá mệt sau giờ làm.)" },
      { id: 5, question: "Wie reagieren die Sprachschulen auf die neuen Anforderungen?", options: ["A) Sie senken die Preise für Rentner.", "B) Sie bieten mehr flexible Online-Kurse am Wochenende an.", "C) Sie bauen neue Gebäude für größere Klassen."], correct: "B) Sie bieten mehr flexible Online-Kurse am Wochenende an.", explanation: "...setzen sie nun verstärkt auf intensive Online-Kurse, die flexibel am Wochenende oder sogar frühmorgens... stattfinden. (Họ tập trung vào các khóa học online linh hoạt vào cuối tuần hoặc sáng sớm.)" },
      { id: 6, question: "Welche technische Neuerung könnte bald im Unterricht genutzt werden?", options: ["A) Smartphones anstelle von Lehrbüchern.", "B) Übersetzungscomputer für alle Schüler.", "C) Brillen für virtuelle Realität (VR-Brillen)."], correct: "C) Brillen für virtuelle Realität (VR-Brillen).", explanation: "Bildungsexperten gehen davon aus, dass in Zukunft auch Virtual-Reality-Brillen im Sprachunterricht eingesetzt werden. (Các chuyên gia cho rằng kính thực tế ảo VR sẽ sớm được áp dụng trong giảng dạy.)" }
    ]
  },
  {
    id: "lesen-mc-3",
    title: "Teil 2: Ökotourismus in den Alpen",
    level: "B1",
    topic: "Reisen & Umwelt",
    duration: "15 Phút",
    type: "Trắc nghiệm",
    questionType: "multiple_choice",
    readingText: `Reisemagazin: Der Tourismus in den Alpengebieten, die jährlich Millionen von Besuchern anziehen, befindet sich in einem tiefgreifenden Wandel. Immer mehr umweltbewusste Urlauber interessieren sich für den sogenannten "Ökotourismus", der darauf abzielt, die Natur zu schützen und einen kleinen ökologischen Fußabdruck zu hinterlassen. Statt in riesigen, energiehungrigen Hotelkomplexen mit beheizten Poollandschaften zu übernachten, wählen viele Gäste ganz bewusst kleine Bio-Bauernhöfe, Holzhütten oder zertifizierte klimaneutrale Pensionen.

Diese völlig neue Art des Reisens schont nicht nur die empfindliche Bergwelt vor Verschmutzung und Lärm, sondern stärkt gleichzeitig auch die lokale Wirtschaft der Bergdörfer. Die Touristen kaufen Lebensmittel wie Käse, Milch und Brot direkt bei den regionalen Bauern, anstatt im großen Supermarkt. Außerdem reisen viele nicht mehr mit dem eigenen Auto an, sondern nutzen für ihre Ausflüge konsequent den öffentlichen Nahverkehr oder mieten sich E-Bikes.

Um diesen positiven Trend noch weiter zu fördern, haben einige innovative Gemeinden in Bayern und Österreich begonnen, kostenlose Tickets für Busse und Regionalbahnen an alle Touristen auszugeben, die mindestens drei Nächte in der Region bleiben. Zwar kritisieren einige Hotelbesitzer, dass sie durch diesen Trend Gäste verlieren, doch Umweltexperten und Forscher glauben fest daran, dass dieser sanfte Tourismus in den nächsten Jahren weiter rasant wachsen wird. Die Menschen möchten bewusster leben und die unberührte Natur genießen, ohne sie dabei zu zerstören.`,
    questions: [
      { id: 1, question: "Was ist das Hauptziel des Ökotourismus?", options: ["A) Der Bau von noch größeren Luxushotels.", "B) Die Natur zu schützen und weniger Spuren zu hinterlassen.", "C) Den Urlaub für die Menschen billiger zu machen."], correct: "B) Die Natur zu schützen und weniger Spuren zu hinterlassen.", explanation: "...der darauf abzielt, die Natur zu schützen und einen kleinen ökologischen Fußabdruck zu hinterlassen. (...nhằm mục đích bảo vệ thiên nhiên và để lại ít 'dấu chân sinh thái' nhất có thể.)" },
      { id: 2, question: "Wo übernachten viele der umweltbewussten Urlauber?", options: ["A) In großen Hotelanlagen mit warmen Pools.", "B) Im eigenen Wohnmobil auf Parkplätzen.", "C) In klimaneutralen Pensionen oder auf Bauernhöfen."], correct: "C) In klimaneutralen Pensionen oder auf Bauernhöfen.", explanation: "...wählen viele Gäste ganz bewusst kleine Bio-Bauernhöfe, Holzhütten oder zertifizierte klimaneutrale Pensionen. (Nhiều khách chọn lưu trú ở các trang trại sinh thái hoặc nhà trọ thân thiện với môi trường.)" },
      { id: 3, question: "Welchen wirtschaftlichen Vorteil bringt dieser Trend?", options: ["A) Internationale Supermärkte machen mehr Gewinn.", "B) Die kleinen Dörfer und lokalen Bauern verdienen mehr Geld.", "C) Es müssen keine Steuern mehr gezahlt werden."], correct: "B) Die kleinen Dörfer und lokalen Bauern verdienen mehr Geld.", explanation: "Die Touristen kaufen Lebensmittel wie Käse, Milch und Brot direkt bei den regionalen Bauern... stärkt gleichzeitig auch die lokale Wirtschaft. (Khách mua thực phẩm trực tiếp từ nông dân, giúp thúc đẩy nền kinh tế địa phương.)" },
      { id: 4, question: "Wie bewegen sich viele Öko-Touristen vor Ort fort?", options: ["A) Sie nutzen Busse, Bahnen oder E-Bikes.", "B) Sie fahren ausschließlich mit dem eigenen Auto.", "C) Sie mieten sich schnelle Sportwagen."], correct: "A) Sie nutzen Busse, Bahnen oder E-Bikes.", explanation: "...sondern nutzen für ihre Ausflüge konsequent den öffentlichen Nahverkehr oder mieten sich E-Bikes. (...mà họ kiên quyết sử dụng phương tiện công cộng hoặc thuê xe đạp điện.)" },
      { id: 5, question: "Welches Angebot machen einige bayrische Gemeinden ihren Gästen?", options: ["A) Kostenlose Skikurse für Anfänger.", "B) Ein kostenloses Ticket für den Nahverkehr, wenn sie länger bleiben.", "C) Kostenlose Übernachtungen für Familien."], correct: "B) Ein kostenloses Ticket für den Nahverkehr, wenn sie länger bleiben.", explanation: "...haben einige... Gemeinden in Bayern... begonnen, kostenlose Tickets für Busse und Regionalbahnen an alle Touristen auszugeben, die mindestens drei Nächte... bleiben. (Một số khu vực phát vé xe buýt và tàu miễn phí cho du khách ở lại ít nhất 3 đêm.)" },
      { id: 6, question: "Wer äußert sich kritisch über diesen neuen Reisetrend?", options: ["A) Einige Besitzer von großen Hotels.", "B) Die Umweltexperten.", "C) Die lokalen Bauern."], correct: "A) Einige Besitzer von großen Hotels.", explanation: "Zwar kritisieren einige Hotelbesitzer, dass sie durch diesen Trend Gäste verlieren... (Tuy nhiên, một số chủ khách sạn phàn nàn vì họ bị mất khách do xu hướng này.)" }
    ]
  }
];

LESEN_EXERCISES.push(...LESEN_EXERCISES_T1, ...LESEN_EXERCISES_T2, ...LESEN_EXERCISES_T3, ...LESEN_EXERCISES_T4, ...LESEN_EXERCISES_T5);
