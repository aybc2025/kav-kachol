import { puck, path, label, goalieDark, goalieBlue } from "../scenes.js";

export default {
  id: "rink",
  steps: [
    {
      heading: "מגרש עם פינות עגולות",
      body: "[[term:rink|המגרש]] ב-NHL הוא 200 על 85 רגל — בערך 61 על 26 מטר — מוקף [[term:boards|דפנות]] וזכוכית. הפינות מעוגלות, כך שהדיסקית מתגלגלת סביבן. גם מאחורי השער משחקים כרגיל.",
      scene: {
        puck: puck(14, 9),
        paths: [path([4, 32], [12, 10])],
        labels: [label(100, 79, "200 רגל (61 מטר)")],
      },
    },
    {
      heading: "שלושה אזורים",
      body: "שני [[term:blue-line|הקווים הכחולים]] מחלקים את המגרש לשלושה: [[term:offensive-zone|אזור ההתקפה]] ליד השער של היריבה, [[term:neutral-zone|האזור הניטרלי]] באמצע, ו[[term:defensive-zone|אזור ההגנה]] ליד השער שלך. אותו אזור הוא התקפה לקבוצה אחת והגנה לשנייה.",
      scene: {
        highlight: ["zone-left", "zone-right"],
        labels: [label(40, 79, "התקפה של הכחולים"), label(100, 79, "ניטרלי"), label(160, 79, "הגנה של הכחולים")],
      },
    },
    {
      heading: "הקו האדום",
      body: "[[term:red-line|הקו האדום]] חוצה את המגרש באמצע. הוא חשוב בעיקר לחוק ה[[term:icing|איסינג]]: האם הדיסקית נשלחה מהחצי שלך או מהחצי של היריבה.",
      scene: { highlight: ["red-center"] },
    },
    {
      heading: "הקווים הכחולים",
      body: "הקווים הכחולים הם הכניסה לאזור ההתקפה. חוק ה[[term:offside|נבדל]] בודק מה קרה בדיוק כשהדיסקית חצתה את הקו הכחול. הדיסקית נחשבת בתוך האזור רק כשהיא חצתה את הקו כולו.",
      scene: { highlight: ["blue-left", "blue-right"] },
    },
    {
      heading: "קו השער ורחבת השוער",
      body: "[[term:goal-line|קו השער]] האדום הדק עובר בין שני עמודי השער. מולו צבועה בכחול [[term:crease|רחבת השוער]] — המקום של השוער. תוקף שמפריע לשוער ברחבה יכול לגרום לביטול שער.",
      scene: {
        players: [goalieDark(), goalieBlue()],
        highlight: ["goal-left", "crease-left"],
      },
    },
    {
      heading: "תשע נקודות פייס-אוף",
      body: "על הקרח מסומנות תשע [[term:faceoff-dot|נקודות פייס-אוף]]: אחת במרכז, ארבע באזור הניטרלי ושתיים בכל אזור קצה, בתוך העיגולים האדומים. בכל פעם שהמשחק נעצר, הוא מתחדש באחת מהן.",
      scene: { highlight: ["dots"] },
    },
  ],
};
