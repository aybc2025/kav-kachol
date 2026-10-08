import { p, goalieDark, goalieBlue, puck, path, label } from "../scenes.js";

export default {
  id: "basics",
  steps: [
    {
      heading: "מטרה אחת: להכניס את הדיסקית",
      body: "שתי קבוצות מנסות להכניס [[term:puck|דיסקית]] גומי שחורה לשער של היריבה, בעזרת [[term:stick|מקל]]. מי שמבקיעה יותר שערים — מנצחת. בכל התרשימים כאן הקבוצה הכחולה תוקפת שמאלה.",
      scene: {
        players: [p("b9", "blue", 9, 30, 40), p("d4", "dark", 4, 38, 56), goalieDark(15, 47), goalieBlue()],
        puck: puck(9.5, 42.5),
        paths: [path([28, 40.5], [10, 42.5])],
        highlight: ["goal-left"],
        call: "goal",
      },
    },
    {
      heading: "שישה על הקרח",
      body: "לכל קבוצה יש על הקרח חמישה שחקני שדה ו[[term:goalie|שוער]]: שלושה חלוצים — [[term:center|סנטר]] ושני [[term:winger|כנפיים]] — ושני [[term:defenseman|מגנים]]. רק לשוער מותר לתפוס את הדיסקית ולהחזיק אותה.",
      scene: {
        players: [
          p("b9", "blue", 9, 55, 20), p("b19", "blue", 19, 60, 42.5), p("b17", "blue", 17, 55, 65),
          p("b44", "blue", 44, 88, 28), p("b5", "blue", 5, 88, 57), goalieBlue(),
          p("d4", "dark", 4, 30, 30), p("d2", "dark", 2, 30, 55), goalieDark(),
        ],
        puck: puck(64, 45),
        labels: [label(57, 9, "חלוצים"), label(88, 76, "מגנים"), label(183, 30, "שוער")],
      },
    },
    {
      heading: "שלושה שלישים של 20 דקות",
      body: "משחקים שלושה [[term:period|שלישים]] של 20 דקות, עם הפסקה ביניהם. השעון עוצר בכל שריקה, ולכן משחק אמיתי נמשך בערך שעתיים וחצי. בכל שליש הקבוצות מחליפות צד.",
      figure: { type: "periods" },
    },
    {
      heading: "מחליפים בלי לעצור",
      body: "שחקנים מתחלפים כל 40-60 שניות, גם באמצע המשחק — זו [[term:line-change|החלפה תוך כדי משחק]]. מי שיוצא צריך להגיע קרוב לספסל לפני שהמחליף עולה. אם יש על הקרח יותר מדי שחקנים, הקבוצה נענשת על [[term:too-many-men|יותר מדי שחקנים]].",
      scene: {
        players: [
          p("b17", "blue", 17, 108, 80), p("b21", "blue", 21, 116, 78),
          p("b9", "blue", 9, 70, 30), p("d4", "dark", 4, 55, 40), goalieDark(), goalieBlue(),
        ],
        puck: puck(66, 33),
        paths: [path([96, 62], [107, 78], "skate"), path([118, 82], [130, 66], "skate")],
        highlight: ["bench"],
        labels: [label(112, 70, "ספסלים")],
      },
    },
    {
      heading: "מגע גוף מותר — אבל לא כל מגע",
      body: "ב-NHL מותר [[term:body-check|להדוף בגוף]] את מי שמחזיק בדיסקית, עם הכתף או הירך. אסור לפגוע בראש, לדחוף מאחור אל הדפנות או להכות עם המקל — על אלה שורקים עונש, שנלמד ביחידה 6.",
      scene: {
        players: [p("d12", "dark", 12, 140, 7), p("b44", "blue", 44, 146, 11), goalieDark(), goalieBlue()],
        puck: puck(137, 9),
        paths: [path([158, 22], [148, 13], "skate")],
      },
    },
  ],
  iihfNote:
    "רוב מגרשי ההוקי באירופה רחבים יותר מאלה של ה-NHL, כך שיש יותר מקום לשחק עם הדיסקית.",
};
