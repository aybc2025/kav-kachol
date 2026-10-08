import { useProgress } from "../hooks/useProgress.jsx";
import { UNITS } from "../content/units.js";
import { getQuiz } from "../content/quizzes/index.js";
import { ROUTES } from "../config/routes.js";
import { MIXED_QUIZ_LENGTH } from "../config/constants.js";
import { href } from "../hooks/useHashRoute.js";
import { TopBar } from "../components/layout/TopBar.jsx";
import { QuizModeRow } from "../components/quiz/QuizModeRow.jsx";
import styles from "./TabPage.module.css";

export function QuizHubPage() {
  const { progress } = useProgress();
  const missedCount = progress.missed.length;

  return (
    <div className={styles.page}>
      <TopBar large title="חידון" />
      <main className={styles.stack}>
        <ul className={styles.list}>
          <QuizModeRow title="חידון מעורב" sub={`${MIXED_QUIZ_LENGTH} שאלות מכל היחידות`} href={href(ROUTES.quiz("mixed"))} />
          <QuizModeRow
            title="תרגול טעויות"
            sub={missedCount ? `${missedCount} שאלות שטעית בהן` : "אין כרגע טעויות לתרגל"}
            href={href(ROUTES.quiz("missed"))}
            disabled={missedCount === 0}
          />
        </ul>
        <h2 className={styles.sectionTitle}>לפי יחידה</h2>
        <ul className={styles.list}>
          {UNITS.map((u) => {
            const best = progress.quiz[u.id];
            return (
              <QuizModeRow
                key={u.id}
                title={u.title}
                sub={`${getQuiz(u.id)?.length ?? 0} שאלות`}
                score={best ? `${best.best}/${best.total}` : null}
                href={href(ROUTES.quiz(u.id))}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}
