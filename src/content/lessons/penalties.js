import { p, goalieDark, goalieBlue, puck, path, label } from "../scenes.js";

const powerPlay = [
  p("b9", "blue", 9, 32, 14), p("b17", "blue", 17, 32, 71), p("b19", "blue", 19, 14, 30),
  p("b44", "blue", 44, 66, 28), p("b5", "blue", 5, 66, 57),
  p("d4", "dark", 4, 24, 34), p("d2", "dark", 2, 24, 51), p("d12", "dark", 12, 42, 30), p("d8", "dark", 8, 42, 55),
  goalieDark(), goalieBlue(),
];

export default {
  id: "penalties",
  steps: [
    {
      heading: "עונש קטן — 2 דקות",
      body: "על רוב העבירות השחקן נשלח ל[[term:penalty-box|תא העונשין]] ל-2 דקות — [[term:minor|עונש קטן]]. הקבוצה שלו משחקת [[term:short-handed|בחסר]], והיריבה ב[[term:power-play|יתרון מספרי]], 5 נגד 4. אם היריבה מבקיעה ביתרון, העונש נגמר מיד.",
      scene: { players: powerPlay, puck: puck(68, 31), labels: [label(100, 80, "5 נגד 4")] },
    },
    {
      heading: "עונש כפול — 4 דקות",
      body: "עבירה חמורה יותר, כמו [[term:high-sticking|מקל גבוה]] שגורם לפציעה, מקבלת [[term:double-minor|עונש כפול]]: שני עונשים של 2 דקות ברצף. שער ביתרון מבטל רק את החלק שרץ באותו רגע.",
      figure: { type: "clock", value: "4:00", label: "עונש כפול" },
    },
    {
      heading: "עונש גדול — 5 דקות",
      body: "[[term:major|עונש גדול]] ניתן על עבירות מסוכנות ועל [[term:fighting|קטטה]]. השחקן יושב 5 דקות מלאות, גם אם היריבה מבקיעה בינתיים כמה שערים. על עבירה מסוכנת במיוחד, הוא גם מורחק מהמשחק.",
      figure: { type: "clock", value: "5:00", label: "עונש גדול" },
    },
    {
      heading: "הרחקה ל-10 דקות",
      body: "[[term:misconduct|הרחקה]] היא עונש אישי: השחקן יושב 10 דקות, אבל הקבוצה שלו לא משחקת בחסר — שחקן אחר עולה במקומו. [[term:game-misconduct|הרחקה מהמשחק]] פירושה שהשחקן לא חוזר עד הסוף.",
      figure: { type: "clock", value: "10:00", label: "הרחקה" },
    },
    {
      heading: "עונש מושהה",
      body: "כשעבירה מבוצעת נגד הקבוצה שמחזיקה בדיסקית, השופט מרים יד ולא שורק — זה [[term:delayed-penalty|עונש מושהה]]. המשחק נמשך עד שהקבוצה העבריינית נוגעת בדיסקית. בינתיים הקבוצה השנייה מוציאה את השוער ומעלה [[term:extra-attacker|שחקן שדה נוסף]], כי אין לה מה להפסיד.",
      scene: {
        players: [
          p("b9", "blue", 9, 34, 20), p("b19", "blue", 19, 28, 52), p("b44", "blue", 44, 64, 30),
          p("b6", "blue", 6, 112, 70), p("d4", "dark", 4, 22, 38), goalieDark(),
          { id: "gb", team: "blue", goalie: true, x: 128, y: 80 },
        ],
        puck: puck(37, 22),
        paths: [path([180, 50], [132, 77], "skate"), path([114, 76], [102, 60], "skate")],
        call: "delayed",
      },
    },
    {
      heading: "זריקת עונשין",
      body: "שחקן שפורץ לבד אל השער, בלי אף מגן לפניו, ומוכשל מאחור — מקבל [[term:penalty-shot|זריקת עונשין]]: הוא יוצא מהמרכז עם הדיסקית ומתמודד לבד מול השוער.",
      scene: {
        players: [p("b9", "blue", 9, 38, 42.5), goalieDark()],
        puck: puck(34, 43),
        paths: [path([96, 42.5], [42, 42.5], "skate")],
      },
    },
    {
      heading: "4 נגד 4, 5 נגד 3",
      body: "אם שני שחקנים, אחד מכל קבוצה, נענשים יחד — משחקים 4 נגד 4. אם קבוצה אחת מקבלת שני עונשים — 5 נגד 3. אף פעם לא יורדים מתחת לשלושה שחקני שדה; עונש נוסף מחכה בתור.",
      scene: {
        players: [
          p("b9", "blue", 9, 32, 14), p("b17", "blue", 17, 32, 71), p("b19", "blue", 19, 14, 30),
          p("b44", "blue", 44, 66, 28), p("b5", "blue", 5, 66, 57),
          p("d4", "dark", 4, 22, 42), p("d12", "dark", 12, 40, 30), p("d8", "dark", 8, 40, 55),
          goalieDark(), goalieBlue(),
        ],
        puck: puck(68, 31),
        labels: [label(100, 80, "5 נגד 3")],
      },
    },
    {
      heading: "העבירות שתשמעו הכי הרבה",
      body: "[[term:tripping|הכשלה]], [[term:hooking|הוקינג]], [[term:slashing|סלאשינג]], [[term:holding|החזקה]], [[term:interference|הפרעה]], [[term:cross-checking|קרוס-צ׳קינג]], [[term:high-sticking|מקל גבוה]] ו[[term:roughing|ראפינג]]. יש גם עונשים טכניים: [[term:too-many-men|יותר מדי שחקנים]] ו[[term:delay-of-game|עיכוב משחק]] — למשל כשמגן מעיף את הדיסקית מאזור ההגנה ישר אל מעבר לזכוכית. כל מונח כאן פותח הסבר.",
      figure: { type: "clock", value: "2:00", label: "רוב העבירות" },
    },
  ],
  iihfNote:
    "ב-IIHF קטטה מסתיימת בהרחקה מהמשחק. ב-NHL היא בדרך כלל ׳רק׳ עונש גדול של 5 דקות.",
};
