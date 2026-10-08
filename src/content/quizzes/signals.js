// Signal questions show a referee figure instead of a rink.
export const signals = [
  { id: "signals-1", prompt: "מה הסימן הזה?", signal: "delayed-penalty", options: ["עונש מושהה", "שער", "פסק זמן", "נבדל"], answer: 0, explain: "יד ישרה מעל הראש — עונש מושהה." },
  { id: "signals-2", prompt: "מה הסימן הזה?", signal: "washout", options: ["שער", "ביטול", "איסינג", "קטטה"], answer: 1, explain: "תנועת ׳ניקוי׳ לצדדים: אין שער, או שממשיכים לשחק." },
  { id: "signals-3", prompt: "מה הסימן הזה?", signal: "tripping", options: ["הכשלה", "מקל גבוה", "החזקה", "ראפינג"], answer: 0, explain: "מכה ביד על הרגל מתחת לברך." },
  { id: "signals-4", prompt: "מה הסימן הזה?", signal: "misconduct", options: ["הרחקה", "הוקינג", "עונש מושהה", "איסינג"], answer: 0, explain: "ידיים על המותניים — 10 דקות." },
  { id: "signals-5", prompt: "מה הסימן הזה?", signal: "high-sticking", options: ["החזקה", "מקל גבוה", "סלאשינג", "הפרעה"], answer: 1, explain: "שני אגרופים זה מעל זה, ליד הראש." },
  { id: "signals-6", prompt: "מה הסימן הזה?", signal: "penalty-shot", options: ["זריקת עונשין", "שער", "ביטול", "הפרעה"], answer: 0, explain: "ידיים משולבות מעל הראש." },
  { id: "signals-7", prompt: "מה הסימן הזה?", signal: "icing", options: ["הפרעה", "איסינג", "החזקה", "נבדל"], answer: 1, explain: "קוון שמשלב ידיים על החזה." },
];
