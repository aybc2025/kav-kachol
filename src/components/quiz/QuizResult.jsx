import { Button } from "../ui/Button.jsx";
import styles from "./QuizResult.module.css";

// The one celebratory moment in the app: the score "lights up" like a scoreboard.
export function QuizResult({ title, correct, total, missedQuestions, onRetry, primary }) {
  const perfect = correct === total;
  return (
    <section className={styles.wrap} aria-label={title}>
      <p className={`${styles.score} ltr`}>
        {correct} / {total}
      </p>
      <p className={styles.label}>{perfect ? "בלי אף טעות" : "תשובות נכונות"}</p>

      {missedQuestions.length > 0 ? (
        <div className={styles.missed}>
          <h2 className={styles.missedTitle}>טעית ב:</h2>
          <ul>
            {missedQuestions.map((q) => (
              // Picture questions share generic prompts ("נבדל או לא?"), so their explanation names the mistake better.
              <li key={q.id}>{q.scene || q.signal ? q.explain : q.prompt}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className={styles.actions}>
        {missedQuestions.length > 0 ? (
          <Button variant="ghost" onClick={onRetry}>
            לתרגל את הטעויות
          </Button>
        ) : null}
        <Button href={primary.href}>{primary.label}</Button>
      </div>
    </section>
  );
}
