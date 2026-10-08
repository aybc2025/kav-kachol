// Referee / linesman hand signals (NHL rule book, signals section).
// `arms` are two polylines in a 100 × 120 figure box, drawn from each shoulder
// (screen-left shoulder at 38,36 and screen-right shoulder at 62,36).
// `motion` adds small arrows that show the gesture moves.

const NEUTRAL_A = [[38, 36], [33, 56], [31, 74]];
const NEUTRAL_B = [[62, 36], [67, 56], [69, 74]];

export const SIGNALS = [
  {
    id: "delayed-penalty", he: "עונש מושהה", en: "Delayed penalty",
    how: "יד אחת מורמת וישרה מעל הראש.",
    meaning: "עבירה נגד הקבוצה עם הדיסקית. השופט ישרוק כשהקבוצה העבריינית תיגע בה.",
    arms: [NEUTRAL_A, [[62, 36], [65, 20], [67, 3]]],
  },
  {
    id: "goal", he: "שער", en: "Goal",
    how: "יד מצביעה אל תוך השער.",
    meaning: "השופט אישר שהדיסקית חצתה את קו השער.",
    arms: [NEUTRAL_A, [[62, 36], [78, 48], [94, 60]]],
  },
  {
    id: "washout", he: "ביטול", en: "Washout",
    how: "שתי ידיים נפרשות לצדדים בגובה הכתפיים, בתנועת ניקוי.",
    meaning: "אין שער, או שאין איסינג או נבדל. אצל הקוונים — ממשיכים לשחק.",
    arms: [[[38, 36], [21, 36], [4, 37]], [[62, 36], [79, 36], [96, 37]]],
    motion: "sweep",
  },
  {
    id: "icing", he: "איסינג", en: "Icing",
    how: "הקוון משלב ידיים על החזה.",
    meaning: "נשרק איסינג.",
    arms: [[[38, 36], [41, 47], [62, 41]], [[62, 36], [59, 49], [38, 44]]],
  },
  {
    id: "tripping", he: "הכשלה", en: "Tripping",
    how: "מכה ביד על הרגל, מתחת לברך.",
    meaning: "שחקן הפיל יריב עם המקל או הרגל.",
    arms: [NEUTRAL_A, [[62, 36], [68, 60], [59, 90]]],
    motion: "tap",
  },
  {
    id: "hooking", he: "הוקינג", en: "Hooking",
    how: "שתי ידיים מושכות משהו לכיוון הבטן.",
    meaning: "שחקן ׳תפס׳ יריב עם קצה המקל ועיכב אותו.",
    arms: [[[38, 36], [29, 54], [45, 63]], [[62, 36], [71, 54], [55, 63]]],
    motion: "pull",
  },
  {
    id: "slashing", he: "סלאשינג", en: "Slashing",
    how: "כף יד ׳חותכת׳ את האמה של היד השנייה.",
    meaning: "שחקן הכה יריב עם המקל.",
    arms: [[[38, 36], [30, 51], [57, 51]], [[62, 36], [73, 28], [52, 45]]],
    motion: "tap",
  },
  {
    id: "holding", he: "החזקה", en: "Holding",
    how: "יד אחת אוחזת בשורש כף היד השנייה, לפני החזה.",
    meaning: "שחקן החזיק יריב בידיים או בגוף.",
    arms: [[[38, 36], [35, 53], [49, 51]], [[62, 36], [66, 53], [51, 51]]],
  },
  {
    id: "high-sticking", he: "מקל גבוה", en: "High-sticking",
    how: "שני אגרופים זה מעל זה, בצד הראש.",
    meaning: "מקל פגע ביריב מעל הכתפיים.",
    arms: [[[38, 36], [49, 42], [66, 26]], [[62, 36], [75, 30], [67, 11]]],
  },
  {
    id: "interference", he: "הפרעה", en: "Interference",
    how: "ידיים משולבות בצורת X מול החזה, אגרופים סגורים.",
    meaning: "שחקן חסם יריב שלא החזיק בדיסקית.",
    arms: [[[38, 36], [40, 57], [61, 45]], [[62, 36], [60, 57], [39, 45]]],
  },
  {
    id: "cross-checking", he: "קרוס-צ׳קינג", en: "Cross-checking",
    how: "שני אגרופים נדחפים קדימה מהחזה, כאילו מחזיקים מקל.",
    meaning: "שחקן הדף יריב עם המקל מוחזק בשתי ידיים.",
    arms: [[[38, 36], [34, 50], [43, 46]], [[62, 36], [66, 50], [57, 46]]],
    motion: "push",
  },
  {
    id: "roughing", he: "ראפינג", en: "Roughing",
    how: "אגרוף מושט לצד הגוף.",
    meaning: "דחיפה או מכה אחרי השריקה, או התגוששות קלה.",
    arms: [NEUTRAL_A, [[62, 36], [79, 37], [95, 37]]],
  },
  {
    id: "misconduct", he: "הרחקה", en: "Misconduct",
    how: "שתי ידיים על המותניים.",
    meaning: "10 דקות לשחקן, בלי שהקבוצה משחקת בחסר.",
    arms: [[[38, 36], [25, 53], [40, 68]], [[62, 36], [75, 53], [60, 68]]],
  },
  {
    id: "penalty-shot", he: "זריקת עונשין", en: "Penalty shot",
    how: "ידיים משולבות מעל הראש.",
    meaning: "השחקן שנפגע יוצא לזריקה לבד מול השוער.",
    arms: [[[38, 36], [43, 17], [63, 3]], [[62, 36], [57, 17], [37, 3]]],
  },
];

export const NEUTRAL_ARMS = [NEUTRAL_A, NEUTRAL_B];

export function getSignal(id) {
  return SIGNALS.find((s) => s.id === id) ?? null;
}
