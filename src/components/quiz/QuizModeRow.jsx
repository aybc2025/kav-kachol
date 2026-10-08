import { Chevron } from "../ui/Chevron.jsx";
import styles from "./QuizModeRow.module.css";

// A quiz entry in the hub list. `score` is shown as "best / total" on the reading end.
export function QuizModeRow({ title, sub, score, href, disabled = false }) {
  const body = (
    <>
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {sub ? <span className={styles.sub}>{sub}</span> : null}
      </span>
      {score ? <span className={`${styles.score} ltr`}>{score}</span> : null}
      <Chevron />
    </>
  );
  if (disabled) {
    return (
      <li>
        <span className={`${styles.row} ${styles.disabled}`} aria-disabled="true">
          {body}
        </span>
      </li>
    );
  }
  return (
    <li>
      <a className={styles.row} href={href}>
        {body}
      </a>
    </li>
  );
}
