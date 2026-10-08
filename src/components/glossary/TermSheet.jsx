import { useTermSheet } from "../../hooks/useTermSheet.jsx";
import { getTerm, CATEGORIES } from "../../content/glossary.js";
import { getUnit } from "../../content/units.js";
import { ROUTES } from "../../config/routes.js";
import { href } from "../../hooks/useHashRoute.js";
import { Sheet } from "../ui/Sheet.jsx";
import { Button } from "../ui/Button.jsx";
import styles from "./TermSheet.module.css";

// One sheet for the whole app, opened from the glossary list or from a term inside a lesson.
export function TermSheet({ currentUnitId }) {
  const { termId, closeTerm } = useTermSheet();
  const term = termId ? getTerm(termId) : null;
  const unit = term ? getUnit(term.unit) : null;
  const category = term ? CATEGORIES.find((c) => c.id === term.category) : null;
  // Inside the lesson that teaches this term, a "to the lesson" button would go nowhere.
  const showLessonLink = unit && unit.id !== currentUnitId;

  return (
    <Sheet open={Boolean(term)} onClose={closeTerm} labelledBy="term-title">
      {term ? (
        <div className={styles.body}>
          <h2 id="term-title" className={styles.title}>
            {term.he}
          </h2>
          <p className={styles.en}>
            <span className="ltr" lang="en">
              {term.en}
            </span>
          </p>
          <p className={styles.text}>{term.short}</p>
          <p className={styles.pills}>
            {unit ? <span className={styles.pill}>יחידה {unit.num}</span> : null}
            {category ? <span className={styles.pill}>{category.label}</span> : null}
          </p>
          <div className={styles.actions}>
            {showLessonLink ? (
              <Button href={href(ROUTES.lesson(unit.id))} onClick={closeTerm}>
                לשיעור
              </Button>
            ) : null}
            <Button variant="ghost" onClick={closeTerm}>
              סגירה
            </Button>
          </div>
        </div>
      ) : null}
    </Sheet>
  );
}
