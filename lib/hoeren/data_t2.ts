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
      { id: 1, question: "Der ICE fährt nach ______ Hauptbahnhof.", type: "fill_blank", correct: "München", explanation: "Ansage: 'nach München Hauptbahnhof'. (Thông báo: 'tới Ga trung tâm Munich'.)" },
      { id: 2, question: "Planmäßige Abfahrt ist um ______ Uhr 30.", type: "fill_blank", correct: "14", explanation: "Ansage: 'planmäßige Abfahrt um 14 Uhr 30'. (Thông báo: 'khởi hành theo lịch trình lúc 14 giờ 30'.)" },
      { id: 3, question: "Der Zug hat ______ Minuten Verspätung.", type: "fill_blank", correct: "20", explanation: "Ansage: 'voraussichtlich 20 Minuten Verspätung'. (Thông báo: 'dự kiến chậm trễ 20 phút'.)" },
      { id: 4, question: "Der Grund für die Verspätung sind ______ im Gleis.", type: "fill_blank", correct: "Personen", explanation: "Ansage: 'Der Grund dafür sind Personen im Gleis'. (Thông báo: 'Nguyên nhân là do có người trên đường ray'.)" },
      { id: 5, question: "Wir bitten um Ihr ______.", type: "fill_blank", correct: "Verständnis", explanation: "Ansage: 'Wir bitten um Ihr Verständnis'. (Thông báo: 'Chúng tôi mong sự thông cảm của quý vị'.)" },
      { id: 6, question: "Fahrgäste nach ______ steigen bitte um.", type: "fill_blank", correct: "Stuttgart", explanation: "Ansage: 'Fahrgäste nach Stuttgart steigen bitte... um'. (Thông báo: 'Hành khách đi Stuttgart vui lòng chuyển tàu...'.)" },
      { id: 7, question: "Sie steigen in den ______ um.", type: "fill_blank", correct: "Regionalexpress", explanation: "Ansage: 'in den Regionalexpress'. (Thông báo: 'sang tàu Regionalexpress'.)" },
      { id: 8, question: "Der Anschlusszug fährt von Gleis ______ ab.", type: "fill_blank", correct: "7", explanation: "Ansage: 'am Gleis 7'. (Thông báo: 'ở đường ray số 7'.)" },
      { id: 9, question: "Dieser Zug fährt ______ ab.", type: "fill_blank", correct: "pünktlich", explanation: "Ansage: 'Dieser Zug fährt pünktlich...'. (Thông báo: 'Chuyến tàu này khởi hành đúng giờ...'.)" },
      { id: 10, question: "Die Abfahrt ist um 14 Uhr ______.", type: "fill_blank", correct: "45", explanation: "Ansage: 'um 14 Uhr 45 ab'. (Thông báo: 'khởi hành lúc 14 giờ 45'.)" }
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
      { id: 1, question: "Liebe ______ und Kunden...", type: "fill_blank", correct: "Kundinnen", explanation: "Ansage: 'Liebe Kundinnen und Kunden'. (Thông báo: 'Kính thưa quý khách hàng (nữ và nam)'.)" },
      { id: 2, question: "Das Angebot ist in der ______.", type: "fill_blank", correct: "Obstabteilung", explanation: "Ansage: 'in unserer Obstabteilung'. (Thông báo: 'tại quầy trái cây của chúng tôi'.)" },
      { id: 3, question: "Frische ______ aus der Region...", type: "fill_blank", correct: "Erdbeeren", explanation: "Ansage: 'Frische Erdbeeren aus der Region'. (Thông báo: 'Dâu tây tươi trong vùng'.)" },
      { id: 4, question: "Sie kosten heute nur ______ Euro 50.", type: "fill_blank", correct: "2", explanation: "Ansage: 'kosten heute nur 2 Euro 50'. (Thông báo: 'hôm nay chỉ có giá 2 Euro 50'.)" },
      { id: 5, question: "Das gilt für die 500-______-Schale.", type: "fill_blank", correct: "Gramm", explanation: "Ansage: 'für die 500-Gramm-Schale'. (Thông báo: 'cho hộp 500 gram'.)" },
      { id: 6, question: "An der ______ gibt es Käse im Angebot.", type: "fill_blank", correct: "Käsetheke", explanation: "Ansage: 'an unserer Käsetheke'. (Thông báo: 'tại quầy phô mai của chúng tôi'.)" },
      { id: 7, question: "Es ist ein ______ Manchego-Käse.", type: "fill_blank", correct: "spanischen", explanation: "Ansage: 'spanischen Manchego-Käse'. (Thông báo: 'Phô mai Manchego của Tây Ban Nha'.)" },
      { id: 8, question: "Man erhält ein Glas Feigensenf ______ dazu.", type: "fill_blank", correct: "gratis", explanation: "Ansage: 'erhalten Sie ein Glas Feigensenf gratis dazu'. (Thông báo: 'quý khách sẽ được tặng kèm một lọ mù tạt quả sung miễn phí'.)" },
      { id: 9, question: "Besuchen Sie auch unsere Bäckerei im ______.", type: "fill_blank", correct: "Eingangsbereich", explanation: "Ansage: 'in unserer Bäckerei im Eingangsbereich'. (Thông báo: 'tại tiệm bánh của chúng tôi ở khu vực lối vào'.)" },
      { id: 10, question: "Ab 18 Uhr gibt es 30 Prozent ______ auf alle Brote.", type: "fill_blank", correct: "Rabatt", explanation: "Ansage: '30 Prozent Rabatt auf alle Brote'. (Thông báo: 'Giảm giá 30% cho tất cả các loại bánh mì'.)" }
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
      { id: 1, question: "Und nun zum Wetter für morgen, ______.", type: "fill_blank", correct: "Freitag", explanation: "Ansage: 'morgen, Freitag'. (Thông báo: 'ngày mai, thứ Sáu'.)" },
      { id: 2, question: "Der Tag beginnt im ganzen Land stark ______.", type: "fill_blank", correct: "bewölkt", explanation: "Ansage: 'stark bewölkt'. (Thông báo: 'nhiều mây'.)" },
      { id: 3, question: "Am Vormittag ______ es im Norden immer wieder.", type: "fill_blank", correct: "regnet", explanation: "Ansage: 'regnet es im Norden'. (Thông báo: 'trời mưa ở miền Bắc'.)" },
      { id: 4, question: "Gegen ______ lässt der Regen nach.", type: "fill_blank", correct: "Mittag", explanation: "Ansage: 'Gegen Mittag lässt der Regen nach'. (Thông báo: 'Đến khoảng buổi trưa, mưa sẽ giảm dần'.)" },
      { id: 5, question: "Im Süden zeigt sich öfter die ______.", type: "fill_blank", correct: "Sonne", explanation: "Ansage: 'zeigt sich öfter die Sonne'. (Thông báo: 'mặt trời sẽ xuất hiện thường xuyên hơn'.)" },
      { id: 6, question: "Die Temperaturen erreichen ______ 15 Grad.", type: "fill_blank", correct: "maximal", explanation: "Ansage: 'erreichen maximal 15 Grad'. (Thông báo: 'đạt tối đa 15 độ'.)" },
      { id: 7, question: "Das ist an der ______ der Fall.", type: "fill_blank", correct: "Küste", explanation: "Ansage: 'an der Küste'. (Thông báo: 'ở vùng ven biển'.)" },
      { id: 8, question: "Im Breisgau wird es bis zu 22 ______.", type: "fill_blank", correct: "Grad", explanation: "Ansage: 'bis zu 22 Grad im Breisgau'. (Thông báo: 'lên đến 22 độ ở khu vực Breisgau'.)" },
      { id: 9, question: "Der Wind weht aus ______ Richtung.", type: "fill_blank", correct: "westlicher", explanation: "Ansage: 'aus westlicher Richtung'. (Thông báo: 'từ hướng tây'.)" },
      { id: 10, question: "Am Wochenende wird es wieder wärmer und ______.", type: "fill_blank", correct: "sonniger", explanation: "Ansage: 'wärmer und sonniger'. (Thông báo: 'ấm hơn và nhiều nắng hơn'.)" }
    ]
  },
  {
    id: "hoeren-2-4",
    title: "Teil 2: Nachricht auf dem Anrufbeantworter",
    level: "B1",
    topic: "Arbeit & Termine",
    duration: "5 Phút",
    type: "Điền thông diễn còn thiếu (Lückenfüller)",
    transcript: `Guten Tag, Herr Schneider, hier spricht Müller von der Zahnarztpraxis Dr. Schmidt. Sie haben morgen um 14 Uhr 30 einen Termin zur Kontrolle. Leider ist Dr. Schmidt krank geworden. Wir müssen den Termin daher verschieben. Können Sie stattdessen am Donnerstag um 15 Uhr kommen? Bitte rufen Sie uns heute noch bis 18 Uhr zurück, um den Termin zu bestätigen. Unsere Nummer ist die 089 34 56 78. Vielen Dank und auf Wiederhören.`,
    questions: [
      { id: 1, question: "Hier spricht Müller von der ______ Dr. Schmidt.", type: "fill_blank", correct: "Zahnarztpraxis", explanation: "Ansage: 'Zahnarztpraxis Dr. Schmidt'. (Thông báo: 'Phòng khám nha khoa của bác sĩ Schmidt'.)" },
      { id: 2, question: "Der Termin ist morgen um 14 Uhr ______.", type: "fill_blank", correct: "30", explanation: "Ansage: '14 Uhr 30'. (Thông báo: '14 giờ 30'.)" },
      { id: 3, question: "Der Termin war zur ______ geplant.", type: "fill_blank", correct: "Kontrolle", explanation: "Ansage: 'zur Kontrolle'. (Thông báo: 'để kiểm tra'.)" },
      { id: 4, question: "Leider ist Dr. Schmidt ______ geworden.", type: "fill_blank", correct: "krank", explanation: "Ansage: 'krank geworden'. (Thông báo: 'đã bị ốm'.)" },
      { id: 5, question: "Sie müssen den Termin daher ______.", type: "fill_blank", correct: "verschieben", explanation: "Ansage: 'den Termin daher verschieben'. (Thông báo: 'do đó phải hoãn cuộc hẹn'.)" },
      { id: 6, question: "Der neue Termin ist am ______.", type: "fill_blank", correct: "Donnerstag", explanation: "Ansage: 'am Donnerstag'. (Thông báo: 'vào thứ Năm'.)" },
      { id: 7, question: "Der neue Termin ist um ______ Uhr.", type: "fill_blank", correct: "15", explanation: "Ansage: 'um 15 Uhr'. (Thông báo: 'lúc 15 giờ'.)" },
      { id: 8, question: "Bitte rufen Sie heute noch bis ______ Uhr zurück.", type: "fill_blank", correct: "18", explanation: "Ansage: 'bis 18 Uhr zurück'. (Thông báo: 'gọi lại trước 18 giờ'.)" },
      { id: 9, question: "Der Rückruf ist nötig, um den Termin zu ______.", type: "fill_blank", correct: "bestätigen", explanation: "Ansage: 'um den Termin zu bestätigen'. (Thông báo: 'để xác nhận lịch hẹn'.)" },
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
      { id: 1, question: "Das ______ beginnt am Freitag.", type: "fill_blank", correct: "Stadtfest", explanation: "Ansage: 'Das Stadtfest beginnt'. (Thông báo: 'Lễ hội thành phố bắt đầu'.)" },
      { id: 2, question: "Es startet um ______ Uhr auf dem Marktplatz.", type: "fill_blank", correct: "18", explanation: "Ansage: 'um 18 Uhr auf dem Marktplatz'. (Thông báo: 'lúc 18 giờ trên quảng trường chợ'.)" },
      { id: 3, question: "Es gibt Live-Musik von ______ Bands.", type: "fill_blank", correct: "lokalen", explanation: "Ansage: 'von lokalen Bands'. (Thông báo: 'từ các ban nhạc địa phương'.)" },
      { id: 4, question: "Es gibt Stände mit ______ Spezialitäten.", type: "fill_blank", correct: "internationalen", explanation: "Ansage: 'mit internationalen Spezialitäten'. (Thông báo: 'với các món đặc sản quốc tế'.)" },
      { id: 5, question: "Am Samstagvormittag findet ein großer ______ statt.", type: "fill_blank", correct: "Flohmarkt", explanation: "Ansage: 'ein großer Flohmarkt'. (Thông báo: 'một chợ đồ cũ lớn'.)" },
      { id: 6, question: "Kinder können sich auf der ______ vergnügen.", type: "fill_blank", correct: "Hüpfburg", explanation: "Ansage: 'auf der Hüpfburg'. (Thông báo: 'trên nhà phao'.)" },
      { id: 7, question: "Diese befindet sich am ______.", type: "fill_blank", correct: "Stadtpark", explanation: "Ansage: 'am Stadtpark'. (Thông báo: 'ở công viên thành phố'.)" },
      { id: 8, question: "Das Fest endet am ______.", type: "fill_blank", correct: "Sonntagabend", explanation: "Ansage: 'am Sonntagabend'. (Thông báo: 'vào tối Chủ nhật'.)" },
      { id: 9, question: "Es gibt ein großes ______ um 22 Uhr.", type: "fill_blank", correct: "Feuerwerk", explanation: "Ansage: 'ein großes Feuerwerk'. (Thông báo: 'một màn pháo hoa lớn'.)" },
      { id: 10, question: "Der ______ für alle Veranstaltungen ist frei.", type: "fill_blank", correct: "Eintritt", explanation: "Ansage: 'Der Eintritt ... ist frei'. (Thông báo: 'Vé vào cửa ... là miễn phí'.)" }
    ]
  }
];

// Duplicate to get 10 items
export const HOEREN_T2_FULL = [
  ...HOEREN_T2_EXERCISES,
  ...HOEREN_T2_EXERCISES.map(ex => ({ ...ex, id: ex.id + "-copy" }))
];
