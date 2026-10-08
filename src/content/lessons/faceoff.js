import { p, goalieDark, goalieBlue, puck } from "../scenes.js";

const centerSetup = [
  p("b19", "blue", 19, 106, 42.5), p("d91", "dark", 91, 94, 42.5),
  p("b9", "blue", 9, 108, 22), p("b17", "blue", 17, 108, 63),
  p("d4", "dark", 4, 92, 22), p("d2", "dark", 2, 92, 63),
  goalieDark(), goalieBlue(),
];

export default {
  id: "faceoff",
  steps: [
    {
      heading: "איך מתחילים",
      body: "כל שליש, וגם אחרי כל שער, מתחיל ב[[term:faceoff|פייס-אוף]] בנקודת המרכז: השופט מפיל את הדיסקית בין המקלות של שני ה[[term:center|סנטרים]], וכל אחד מנסה להעביר אותה לחבריו.",
      scene: { players: centerSetup, puck: puck(100, 42.5), highlight: ["circle-center"] },
    },
    {
      heading: "רק שניים בעיגול",
      body: "בזמן הפייס-אוף רק שני השחקנים שלוקחים אותו נמצאים בתוך העיגול. כל השאר עומדים מחוץ לו, בצד שלהם. מי שזז מוקדם מדי מוחלף בחבר אחר, והפרה שנייה של אותה קבוצה באותו פייס-אוף היא עונש של 2 דקות.",
      scene: { players: centerSetup, puck: puck(100, 42.5), highlight: ["circle-center"] },
    },
    {
      heading: "איפה המשחק מתחדש",
      body: "אחרי עצירה, הפייס-אוף נערך בנקודה הקרובה למקום שבו המשחק נעצר. יש מקרים שבהם החוק מכוון אותו: אחרי [[term:icing|איסינג]] — לאזור ההגנה של מי שעשתה אותו; אחרי [[term:offside|נבדל]] — לאזור הניטרלי; ואחרי שנשרק עונש — בדרך כלל לאזור ההגנה של הקבוצה שנענשה.",
      scene: { players: [goalieDark(), goalieBlue()], highlight: ["dots"] },
    },
    {
      heading: "למה זה חשוב",
      body: "מי שזוכה בפייס-אוף מקבלת את הדיסקית. פייס-אוף באזור ההתקפה הוא הזדמנות לבעיטה מיידית, ולכן קבוצות שולחות לשם את מי שהכי טוב בזה.",
      scene: {
        players: [
          p("b19", "blue", 19, 37, 64.5), p("d91", "dark", 91, 25, 64.5),
          p("b9", "blue", 9, 40, 46), p("b17", "blue", 17, 52, 70),
          p("b44", "blue", 44, 68, 30), p("d4", "dark", 4, 26, 46), p("d2", "dark", 2, 22, 78),
          goalieDark(), goalieBlue(),
        ],
        puck: puck(31, 64.5),
      },
    },
  ],
};
