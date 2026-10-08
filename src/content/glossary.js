// Every [[term:id|…]] link in a lesson must point at an id in this list.
export const CATEGORIES = [
  { id: "all", label: "הכול" },
  { id: "play", label: "משחק" },
  { id: "rink", label: "מגרש" },
  { id: "penalties", label: "עונשים" },
  { id: "goalie", label: "שוער ושערים" },
];

const t = (id, he, en, category, short, unit) => ({ id, he, en, category, short, unit });

export const TERMS = [
  // משחק
  t("puck", "דיסקית", "Puck", "play", "דיסקית גומי שחורה וקפואה, בקוטר של כ-7.6 ס״מ. בה משחקים.", "basics"),
  t("stick", "מקל", "Stick", "play", "המקל שבו מובילים, מוסרים ובועטים את הדיסקית.", "basics"),
  t("period", "שליש", "Period", "play", "אחד משלושת חלקי המשחק, 20 דקות כל אחד.", "basics"),
  t("center", "סנטר", "Center", "play", "החלוץ האמצעי. בדרך כלל לוקח את הפייס-אופים.", "basics"),
  t("winger", "כנף", "Winger", "play", "חלוץ שמשחק בצד ימין או שמאל של המגרש.", "basics"),
  t("defenseman", "מגן", "Defenseman", "play", "אחד משני שחקני ההגנה, שמשחקים מאחורי החלוצים.", "basics"),
  t("line-change", "החלפה תוך כדי משחק", "Line change", "play", "החלפת שחקנים בלי לעצור את המשחק, כל 40-60 שניות בערך.", "basics"),
  t("body-check", "הדיפת גוף", "Body check", "play", "הדיפה חוקית בכתף או בירך של מי שמחזיק בדיסקית.", "basics"),
  t("faceoff", "פייס-אוף", "Faceoff", "play", "חידוש המשחק: השופט מפיל את הדיסקית בין המקלות של שני שחקנים.", "faceoff"),
  t("offside", "נבדל", "Offside", "play", "תוקף נכנס לאזור ההתקפה לפני הדיסקית.", "offside"),
  t("delayed-offside", "נבדל מושהה", "Delayed offside", "play", "הדיסקית נכנסה כשתוקף בפנים, אבל אף תוקף עוד לא נגע בה. הקוון מרים יד ומחכה.", "offside"),
  t("tag-up", "חזרה לקו", "Tag up", "play", "בנבדל מושהה: כל התוקפים יוצאים מהאזור ונוגעים בקו הכחול.", "offside"),
  t("icing", "איסינג", "Icing", "play", "דיסקית שנשלחה מהחצי שלך וחצתה את קו השער של היריבה בלי שנגעו בה.", "icing"),
  t("hybrid-icing", "איסינג היברידי", "Hybrid icing", "play", "הקוון שורק איסינג רק אם המגן מוביל במרוץ לקו נקודות הפייס-אוף.", "icing"),
  t("hand-pass", "מסירה ביד", "Hand pass", "play", "מסירה לחבר ביד. מותרת רק בתוך אזור ההגנה של הקבוצה.", "goals"),
  t("overtime", "הארכה", "Overtime", "play", "בעונה הסדירה: 5 דקות, 3 נגד 3, עד שער.", "overtime"),
  t("sudden-death", "שער זהב", "Sudden death", "play", "השער הראשון בהארכה מסיים את המשחק.", "overtime"),
  t("shootout", "שוטאאוט", "Shootout", "play", "סדרת ניסיונות אחד-על-אחד מול השוער, אם ההארכה נגמרה בלי שער.", "overtime"),
  t("playoffs", "פלייאוף", "Playoffs", "play", "סדרות הנוק-אאוט על גביע סטנלי. 16 קבוצות, הטוב משבעה בכל סבב.", "overtime"),
  t("extra-attacker", "שחקן שדה נוסף", "Extra attacker", "play", "שחקן שעולה במקום השוער, בעונש מושהה או בסוף משחק כשהקבוצה מפגרת.", "penalties"),
  t("coaches-challenge", "בדיקת וידאו של מאמן", "Coach's Challenge", "play", "בקשת מאמן לבדוק שער בווידאו. בדיקה שנכשלה עולה ב-2 דקות עונש.", "goals"),
  // מגרש
  t("rink", "מגרש", "Rink", "rink", "משטח הקרח: 200 על 85 רגל ב-NHL, עם פינות מעוגלות.", "rink"),
  t("boards", "דפנות", "Boards", "rink", "הקיר הנמוך שמקיף את המגרש, ומעליו זכוכית.", "rink"),
  t("red-line", "הקו האדום", "Center red line", "rink", "הקו שחוצה את המגרש באמצע. חשוב לאיסינג.", "rink"),
  t("blue-line", "הקו הכחול", "Blue line", "rink", "שני הקווים שמפרידים בין אזורי הקצה לאזור הניטרלי. קובעים נבדל.", "rink"),
  t("goal-line", "קו השער", "Goal line", "rink", "הקו האדום הדק שעובר בין עמודי השער.", "rink"),
  t("offensive-zone", "אזור התקפה", "Offensive zone", "rink", "האזור שבין הקו הכחול לשער של היריבה.", "rink"),
  t("neutral-zone", "אזור ניטרלי", "Neutral zone", "rink", "האזור שבין שני הקווים הכחולים.", "rink"),
  t("defensive-zone", "אזור הגנה", "Defensive zone", "rink", "האזור שבין הקו הכחול לשער שלך.", "rink"),
  t("faceoff-dot", "נקודת פייס-אוף", "Faceoff dot", "rink", "אחת מתשע הנקודות שבהן המשחק מתחדש.", "rink"),
  t("penalty-box", "תא העונשין", "Penalty box", "rink", "המקום שבו יושב שחקן שנענש.", "penalties"),
  // עונשים
  t("minor", "עונש קטן", "Minor penalty", "penalties", "2 דקות. נגמר מיד אם היריבה מבקיעה.", "penalties"),
  t("double-minor", "עונש כפול", "Double minor", "penalties", "שני עונשים קטנים ברצף, 4 דקות.", "penalties"),
  t("major", "עונש גדול", "Major penalty", "penalties", "5 דקות מלאות, גם אם היריבה מבקיעה.", "penalties"),
  t("misconduct", "הרחקה", "Misconduct", "penalties", "10 דקות לשחקן, בלי שהקבוצה משחקת בחסר.", "penalties"),
  t("game-misconduct", "הרחקה מהמשחק", "Game misconduct", "penalties", "השחקן לא חוזר עד סוף המשחק.", "penalties"),
  t("penalty-shot", "זריקת עונשין", "Penalty shot", "penalties", "ניסיון אחד-על-אחד מול השוער, אחרי עבירה על שחקן בפריצה.", "penalties"),
  t("power-play", "יתרון מספרי", "Power play", "penalties", "קבוצה עם יותר שחקנים על הקרח, בגלל עונש ליריבה.", "penalties"),
  t("short-handed", "בחסר", "Short-handed", "penalties", "קבוצה עם פחות שחקנים על הקרח בגלל עונש.", "penalties"),
  t("delayed-penalty", "עונש מושהה", "Delayed penalty", "penalties", "השופט מרים יד ומחכה שהקבוצה העבריינית תיגע בדיסקית.", "penalties"),
  t("tripping", "הכשלה", "Tripping", "penalties", "הפלת יריב עם המקל או הרגל. 2 דקות.", "penalties"),
  t("hooking", "הוקינג", "Hooking", "penalties", "עיכוב יריב עם קצה המקל. 2 דקות.", "penalties"),
  t("slashing", "סלאשינג", "Slashing", "penalties", "מכה ביריב עם המקל. 2 דקות.", "penalties"),
  t("holding", "החזקה", "Holding", "penalties", "החזקת יריב בידיים או בגוף. 2 דקות.", "penalties"),
  t("interference", "הפרעה", "Interference", "penalties", "חסימת שחקן שאין לו דיסקית. 2 דקות.", "penalties"),
  t("cross-checking", "קרוס-צ׳קינג", "Cross-checking", "penalties", "הדיפה עם המקל מוחזק בשתי ידיים. 2 דקות.", "penalties"),
  t("high-sticking", "מקל גבוה", "High-sticking", "penalties", "פגיעה ביריב עם המקל מעל הכתפיים. 2 דקות, או 4 אם יש פציעה.", "penalties"),
  t("roughing", "ראפינג", "Roughing", "penalties", "דחיפה או מכה אחרי השריקה, או התגוששות קלה. 2 דקות.", "penalties"),
  t("fighting", "קטטה", "Fighting", "penalties", "ב-NHL: עונש גדול של 5 דקות לכל משתתף.", "penalties"),
  t("too-many-men", "יותר מדי שחקנים", "Too many men", "penalties", "יותר משישה שחקנים על הקרח. עונש קטן לקבוצה.", "basics"),
  t("delay-of-game", "עיכוב משחק", "Delay of game", "penalties", "למשל: העפת הדיסקית מאזור ההגנה ישר אל מעבר לזכוכית. 2 דקות.", "penalties"),
  // שוער ושערים
  t("goalie", "שוער", "Goaltender", "goalie", "השחקן היחיד שמותר לו להחזיק את הדיסקית ולשכב על הקרח כדי לחסום.", "basics"),
  t("crease", "רחבת השוער", "Crease", "goalie", "השטח הכחול מול השער, שבו השוער מוגן.", "rink"),
  t("goaltender-interference", "הפרעה לשוער", "Goaltender interference", "goalie", "תוקף שמפריע לשוער ברחבה. השער נפסל.", "goals"),
];

export function getTerm(id) {
  return TERMS.find((term) => term.id === id) ?? null;
}
