import { p, goalieDark, goalieBlue, puck, path, label } from "../scenes.js";

export default {
  id: "icing",
  steps: [
    {
      heading: "מה זה איסינג",
      body: "[[term:icing|איסינג]] הוא מצב שבו קבוצה שולחת את הדיסקית מהחצי שלה — מאחורי [[term:red-line|הקו האדום]] — והיא חוצה את [[term:goal-line|קו השער]] של היריבה בלי שאף אחד נגע בה. החוק מונע מקבוצה פשוט להעיף את הדיסקית רחוק כדי להרוויח זמן.",
      scene: {
        players: [p("b5", "blue", 5, 142, 60), p("d12", "dark", 12, 120, 40), goalieDark(), goalieBlue()],
        puck: puck(5, 22),
        paths: [path([139, 59], [6, 22])],
        highlight: ["red-center", "goal-left"],
        call: "icing",
      },
    },
    {
      heading: "איסינג היברידי",
      body: "ב-NHL הקוון לא שורק מיד. הוא בודק מי יגיע ראשון לקו של [[term:faceoff-dot|נקודות הפייס-אוף]] באזור הקצה: אם השחקן של הקבוצה השנייה מוביל — שריקה ואיסינג. אם התוקף מוביל — המשחק ממשיך. זה [[term:hybrid-icing|איסינג היברידי]], והוא נועד למנוע התנגשויות מסוכנות ליד הדפנות.",
      scene: {
        players: [p("d4", "dark", 4, 36, 30), p("b17", "blue", 17, 48, 18), goalieDark(), goalieBlue()],
        puck: puck(5, 22),
        paths: [path([62, 34], [38, 30], "skate"), path([72, 20], [50, 18], "skate")],
        highlight: ["dotline-left"],
        labels: [label(31, 80, "קו הנקודות")],
        call: "icing",
      },
    },
    {
      heading: "העונש: בלי החלפה",
      body: "קבוצה שעשתה איסינג לא רשאית להחליף שחקנים לפני הפייס-אוף, והוא נערך באזור ההגנה שלה. השחקנים העייפים נשארים על הקרח מול חמישייה טרייה — וזה העונש האמיתי. הקבוצה השנייה גם בוחרת באיזה משני העיגולים ייערך הפייס-אוף.",
      scene: {
        players: [
          p("b19", "blue", 19, 175, 64.5), p("d91", "dark", 91, 163, 64.5),
          p("b5", "blue", 5, 176, 47), p("d12", "dark", 12, 150, 70), goalieBlue(), goalieDark(),
        ],
        puck: puck(169, 64.5),
        highlight: ["zone-right"],
      },
    },
    {
      heading: "מתי זה לא איסינג",
      body: "קבוצה שמשחקת [[term:short-handed|בחסר]] בגלל עונש רשאית להעיף את הדיסקית — אין איסינג. אין איסינג גם כשהדיסקית נכנסת לשער (זה פשוט שער), כשהקוון חושב שהקבוצה השנייה יכלה להגיע אליה, או כשהשוער יוצא מהרחבה לכיוונה.",
      scene: {
        players: [p("b5", "blue", 5, 150, 50), p("b44", "blue", 44, 160, 25), p("d12", "dark", 12, 130, 45), goalieDark(), goalieBlue()],
        puck: puck(5, 62),
        paths: [path([147, 51], [6, 62])],
        highlight: ["red-center"],
        labels: [label(150, 80, "4 נגד 5")],
        call: "noicing",
      },
    },
  ],
};
