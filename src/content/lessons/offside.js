import { p, goalieDark, goalieBlue, puck, path } from "../scenes.js";

export default {
  id: "offside",
  steps: [
    {
      heading: "הדיסקית חייבת להיכנס ראשונה",
      body: "שחקן תוקף לא יכול להיכנס ל[[term:offensive-zone|אזור ההתקפה]] לפני הדיסקית. כאן מספר 9 כבר בפנים, והדיסקית עדיין לא חצתה את [[term:blue-line|הקו הכחול]] — שריקה.",
      scene: {
        players: [p("b9", "blue", 9, 64, 34), p("b17", "blue", 17, 92, 28), p("d4", "dark", 4, 50, 52), goalieDark(), goalieBlue()],
        puck: puck(88, 48),
        paths: [path([88, 48], [79, 46])],
        highlight: ["blue-left"],
        call: "offside",
      },
    },
    {
      heading: "המחליק קובע",
      body: "קובע איפה המחליקים — לא הגוף ולא המקל. מספיק שמחליק אחד נמצא על הקו או מאחוריו ברגע שהדיסקית חוצה את הקו כולו, וזה לא נבדל. גם מחליק שמורם באוויר מעל הקו נחשב ׳על הקו׳.",
      scene: {
        players: [p("b9", "blue", 9, 75, 36), p("b17", "blue", 17, 92, 28), p("d4", "dark", 4, 50, 52), goalieDark(), goalieBlue()],
        puck: puck(72, 52),
        paths: [path([84, 56], [72.5, 52])],
        highlight: ["blue-left"],
        call: "onside",
      },
    },
    {
      heading: "מי שמוביל את הדיסקית",
      body: "שחקן שמוביל את הדיסקית בעצמו, עם המקל ובשליטה, לא יהיה בנבדל גם אם המחליקים שלו חוצים את הקו לפני הדיסקית — למשל כשהוא מחליק אחורה. מעונת 2025-26 החוק דורש במפורש שליטה עם המקל, כך שבעיטה של הדיסקית עם המחליק לא מספיקה.",
      scene: {
        players: [p("b9", "blue", 9, 70, 40), p("b17", "blue", 17, 96, 24), p("d4", "dark", 4, 50, 52), goalieDark(), goalieBlue()],
        puck: puck(74.5, 42),
        paths: [path([86, 40], [72, 40], "skate")],
        highlight: ["blue-left"],
        call: "onside",
      },
    },
    {
      heading: "נבדל מושהה",
      body: "לפעמים הדיסקית נכנסת לאזור כשתוקף כבר בפנים, אבל אף תוקף לא נוגע בה. אז זה [[term:delayed-offside|נבדל מושהה]]: השופט מרים יד, וכל התוקפים צריכים לצאת מהאזור ולגעת בקו הכחול ([[term:tag-up|Tag up]]). אם אחד מהם נוגע בדיסקית לפני כן — שריקה.",
      scene: {
        players: [p("b9", "blue", 9, 56, 28), p("b17", "blue", 17, 52, 60), p("d4", "dark", 4, 36, 50), goalieDark(), goalieBlue()],
        puck: puck(32, 52),
        paths: [path([58, 28], [74, 28], "skate"), path([54, 60], [74, 60], "skate")],
        highlight: ["blue-left"],
        call: "delayed",
      },
    },
    {
      heading: "אחרי השריקה",
      body: "אחרי נבדל רגיל, הפייס-אוף נערך באזור הניטרלי, ליד הקו הכחול. אם השופט חושב שהתוקפים גרמו לנבדל בכוונה, הפייס-אוף עובר לאזור ההגנה שלהם. ואם הובקע שער אחרי נבדל שהשופטים פספסו — המאמן של הקבוצה השנייה יכול לבקש בדיקת וידאו ([[term:coaches-challenge|Coach's Challenge]]).",
      scene: {
        players: [p("b19", "blue", 19, 86, 20.5), p("d91", "dark", 91, 74, 20.5), goalieDark(), goalieBlue()],
        puck: puck(80, 20.5),
        highlight: ["blue-left"],
      },
    },
  ],
};
