import { getUnit } from "../../content/units.js";
import { getLesson } from "../../content/lessons/index.js";
import { ROUTES } from "../../config/routes.js";
import { href } from "../../hooks/useHashRoute.js";
import { Button } from "../ui/Button.jsx";
import styles from "./ContinueCard.module.css";

export function ContinueCard({ unitId, savedStep }) {
  if (!unitId) {
    return (
      <section className={styles.card}>
        <div className={styles.text}>
          <h2 className={styles.title}>סיימת את כל היחידות</h2>
          <span className={styles.sub}>אפשר להמשיך לתרגל</span>
        </div>
        <Button href={href(ROUTES.quiz("mixed"))}>חידון מעורב</Button>
      </section>
    );
  }

  const unit = getUnit(unitId);
  const total = getLesson(unitId)?.steps.length ?? 0;
  const started = savedStep > 0;
  return (
    <section className={styles.card}>
      <div className={styles.text}>
        <h2 className={styles.title}>{unit.title}</h2>
        <span className={styles.sub}>
          {started ? (
            <>
              צעד <span className="ltr">{savedStep + 1}</span> מתוך <span className="ltr">{total}</span>
            </>
          ) : (
            `יחידה ${unit.num}`
          )}
        </span>
      </div>
      <Button href={href(ROUTES.lesson(unitId))}>{started ? "להמשיך" : "להתחיל"}</Button>
    </section>
  );
}
