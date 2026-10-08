import { UNITS } from "../../content/units.js";
import styles from "./Scoreboard.module.css";

// Progress shown as an arena scoreboard: one lamp per unit.
export function Scoreboard({ doneCount, accuracy, isDone }) {
  return (
    <section className={styles.board} aria-label="התקדמות">
      <div>
        <span className={styles.label}>יחידות שהושלמו</span>
        <span className={styles.big}>
          <span className="ltr">
            {doneCount} / {UNITS.length}
          </span>
        </span>
        <div className={styles.lamps} aria-hidden="true">
          {UNITS.map((u) => (
            <i key={u.id} className={isDone(u.id) ? styles.on : undefined} />
          ))}
        </div>
      </div>
      <div className={styles.side}>
        <span className={styles.label}>דיוק בחידונים</span>
        <span className={styles.mid}>
          <span className="ltr">{accuracy === null ? "–" : `${accuracy}%`}</span>
        </span>
      </div>
    </section>
  );
}
