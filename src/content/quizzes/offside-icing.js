import { p, goalieDark, goalieBlue, puck, path } from "../scenes.js";

const OFFSIDE = ["נבדל", "לא נבדל"];
const ICING = ["איסינג", "לא איסינג"];

export const offside = [
  {
    id: "offside-1", prompt: "נבדל או לא?",
    scene: { players: [p("b22", "blue", 22, 75, 40), goalieDark(), goalieBlue()], puck: puck(74, 56), paths: [path([84, 60], [75, 56.4])], highlight: ["blue-left"] },
    options: OFFSIDE, answer: 1,
    explain: "המחליק של מספר 22 נוגע בקו הכחול ברגע שהדיסקית חוצה — זה ׳על הקו׳, ולכן אין נבדל.",
  },
  {
    id: "offside-2", prompt: "נבדל או לא?",
    scene: { players: [p("b9", "blue", 9, 58, 28), p("b17", "blue", 17, 96, 48), goalieDark(), goalieBlue()], puck: puck(84, 52), paths: [path([92, 50], [79, 53])], highlight: ["blue-left"] },
    options: OFFSIDE, answer: 0,
    explain: "מספר 9 כבר באזור ההתקפה לפני שהדיסקית חצתה את הקו.",
  },
  { id: "offside-3", prompt: "מה קובע אם שחקן בנבדל?", options: ["מיקום המקל", "מיקום המחליקים", "מיקום הראש", "מיקום הגוף"], answer: 1, explain: "רק המחליקים. מספיק מחליק אחד על הקו או מאחוריו." },
  {
    id: "offside-4", prompt: "מספר 9 מוביל את הדיסקית עם המקל ומחליק אחורה. נבדל או לא?",
    scene: { players: [p("b9", "blue", 9, 70, 40), goalieDark(), goalieBlue()], puck: puck(74.5, 42), paths: [path([86, 40], [72, 40], "skate")], highlight: ["blue-left"] },
    options: OFFSIDE, answer: 1,
    explain: "מי שמוביל את הדיסקית עם המקל ובשליטה לא נמצא בנבדל.",
  },
  { id: "offside-5", prompt: "בנבדל מושהה, מה התוקפים צריכים לעשות?", options: ["לחכות לשריקה", "לצאת מהאזור ולגעת בקו הכחול", "להחליף שחקנים", "לגעת בדיסקית מהר"], answer: 1, explain: "Tag up: כולם יוצאים ונוגעים בקו, ורק אז המשחק ממשיך כרגיל." },
  { id: "offside-6", prompt: "מחליק שמורם באוויר מעל הקו הכחול נחשב...", options: ["בתוך האזור — נבדל", "על הקו — לא נבדל"], answer: 1, explain: "המחליק לא חייב לגעת בקרח, רק לא לעבור את הקו." },
  { id: "offside-7", prompt: "שער הובקע אחרי נבדל שהשופטים פספסו. מה הקבוצה השנייה יכולה לעשות?", options: ["כלום", "לבקש בדיקת וידאו", "לקבל זריקת עונשין", "לדרוש פייס-אוף חוזר"], answer: 1, explain: "Coach's Challenge — ואם הבדיקה לא משנה את ההחלטה, הם מקבלים עונש." },
];

export const icing = [
  {
    id: "icing-1", prompt: "מספר 5 מעיף את הדיסקית מהחצי שלו. אף אחד לא נוגע בה. איסינג או לא?",
    scene: { players: [p("b5", "blue", 5, 140, 60), goalieDark(), goalieBlue()], puck: puck(5, 20), paths: [path([137, 59], [6, 20])], highlight: ["red-center"] },
    options: ICING, answer: 0,
    explain: "נשלחה מאחורי הקו האדום וחצתה את קו השער בלי שנגעו בה.",
  },
  {
    id: "icing-2", prompt: "הפעם מספר 5 כבר עבר את הקו האדום. איסינג או לא?",
    scene: { players: [p("b5", "blue", 5, 88, 60), goalieDark(), goalieBlue()], puck: puck(5, 20), paths: [path([85, 59], [6, 20])], highlight: ["red-center"] },
    options: ICING, answer: 1,
    explain: "הדיסקית נשלחה מהחצי של היריבה, ולכן אין איסינג.",
  },
  { id: "icing-3", prompt: "קבוצה שמשחקת בחסר מעיפה את הדיסקית לכל אורך המגרש. מה קורה?", options: ["איסינג", "אין איסינג — מותר לה", "עונש", "פייס-אוף במרכז"], answer: 1, explain: "קבוצה בחסר רשאית לעשות איסינג." },
  { id: "icing-4", prompt: "מה אסור לקבוצה שעשתה איסינג?", options: ["להחליף שחקנים", "להחזיק את המקל ביד אחת", "לשחק עם השוער", "להבקיע מהפייס-אוף"], answer: 0, explain: "השחקנים העייפים נשארים על הקרח." },
  { id: "icing-5", prompt: "באיסינג היברידי, מה הקוון בודק?", options: ["מי יגיע ראשון לקו נקודות הפייס-אוף", "מי נגע אחרון בדיסקית", "כמה מהר הדיסקית נעה", "אם השוער זז"], answer: 0, explain: "אם המגן מוביל במרוץ — שריקה. אם התוקף — ממשיכים." },
  { id: "icing-6", prompt: "דיסקית שנשלחה מהחצי שלך נכנסת לשער של היריבה. מה זה?", options: ["איסינג", "שער"], answer: 1, explain: "שער הוא שער, מכל מקום על הקרח." },
  { id: "icing-7", prompt: "למה קיים חוק האיסינג?", options: ["כדי שקבוצות לא ירוויחו זמן בהעפת הדיסקית", "כדי להגן על השוער", "כדי לקצר את המשחק", "כדי למנוע קטטות"], answer: 0, explain: "בלי החוק, קבוצה מובילה הייתה פשוט מעיפה את הדיסקית שוב ושוב." },
];
