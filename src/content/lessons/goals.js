import { p, goalieDark, goalieBlue, puck, path } from "../scenes.js";

export default {
  id: "goals",
  steps: [
    {
      heading: "כל הדיסקית מעבר לקו",
      body: "שער נספר רק כשהדיסקית חצתה את [[term:goal-line|קו השער]] כולה — בין העמודים ומתחת למשקוף. דיסקית שעדיין נוגעת בקו היא לא שער.",
      scene: {
        players: [p("b9", "blue", 9, 26, 52), goalieDark(19, 31), goalieBlue()],
        puck: puck(9.3, 43),
        paths: [path([24, 49], [10, 43.5])],
        view: "left-end",
        highlight: ["goal-left"],
        call: "goal",
      },
    },
    {
      heading: "בעיטה",
      body: "מותר שהדיסקית תפגע במחליק של תוקף ותיכנס לשער. אבל אם התוקף עושה תנועת בעיטה ברורה ומכניס אותה — השער נפסל.",
      scene: {
        players: [p("b9", "blue", 9, 19, 51), p("d4", "dark", 4, 27, 30), goalieDark(18, 33), goalieBlue()],
        puck: puck(9.5, 44),
        paths: [path([17, 49], [10, 44.5])],
        view: "left-end",
        highlight: ["goal-left"],
        call: "nogoal",
      },
    },
    {
      heading: "מקל גבוה",
      body: "תוקף שפוגע בדיסקית באוויר עם מקל שמעל גובה המשקוף — כ-1.2 מטר — לא יכול להבקיע כך. השער לא נספר.",
      scene: {
        players: [p("b17", "blue", 17, 22, 34), goalieDark(16, 51), goalieBlue()],
        puck: puck(9.5, 41),
        paths: [path([20, 35.5], [10.5, 40.5])],
        view: "left-end",
        highlight: ["goal-left"],
        call: "nogoal",
      },
    },
    {
      heading: "הפרעה לשוער",
      body: "תוקף שנכנס ל[[term:crease|רחבת השוער]] ומפריע לשוער לזוז או לעצור — זו [[term:goaltender-interference|הפרעה לשוער]], והשער נפסל. אם מגן דחף את התוקף פנימה, זה לא נחשב באשמתו.",
      scene: {
        players: [p("b17", "blue", 17, 17, 38), goalieDark(13, 45), p("b9", "blue", 9, 32, 58), goalieBlue()],
        puck: puck(9.5, 46),
        paths: [path([30, 55], [10.5, 46])],
        view: "left-end",
        highlight: ["crease-left"],
        call: "nogoal",
      },
    },
    {
      heading: "מסירה ביד",
      body: "מותר לתפוס את הדיסקית או להדוף אותה ביד, אבל אסור למסור ביד לחבר — חוץ מאשר בתוך אזור ההגנה של הקבוצה עצמה. שער שהוכנס ביד לא נספר אף פעם. מעונת 2025-26, אם הדיסקית רק נתקלה ביד במקרה ולא נתנה יתרון — לא שורקים.",
      scene: {
        players: [p("b44", "blue", 44, 160, 30), p("b5", "blue", 5, 168, 60), p("d12", "dark", 12, 140, 45), goalieBlue(), goalieDark()],
        puck: puck(166, 57),
        paths: [path([159, 32], [165, 55])],
        highlight: ["zone-right"],
      },
    },
    {
      heading: "בדיקת וידאו",
      body: "כל שער ב-NHL נבחן בחדר המצב של הליגה בטורונטו. בנוסף, מאמן יכול לבקש [[term:coaches-challenge|בדיקת וידאו]] על שער של היריבה, אם לדעתו היה לפניו נבדל, הפרעה לשוער או עצירה שהשופטים פספסו. אבל יש סיכון: אם ההחלטה לא משתנה, הקבוצה שלו מקבלת 2 דקות עונש.",
      figure: { type: "clock", value: "2:00", label: "בדיקה שנכשלה" },
    },
  ],
};
