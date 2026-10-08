import { useLesson } from "../hooks/useLesson.js";
import { getUnit } from "../content/units.js";
import { ROUTES } from "../config/routes.js";
import { href, navigate } from "../hooks/useHashRoute.js";
import { TopBar } from "../components/layout/TopBar.jsx";
import { IconButton } from "../components/ui/IconButton.jsx";
import { Button } from "../components/ui/Button.jsx";
import { LessonStep } from "../components/lesson/LessonStep.jsx";
import { NotFound } from "../components/layout/NotFound.jsx";
import styles from "./FocusPage.module.css";

export function LessonPage({ unitId }) {
  const unit = getUnit(unitId);
  const { lesson, current, step, total, isFirst, isLast, next, prev, finish } = useLesson(unitId);
  if (!unit || !lesson) return <NotFound />;

  const toQuiz = () => {
    finish();
    navigate(ROUTES.quiz(unitId));
  };

  return (
    <div className={styles.page}>
      <TopBar
        start={<IconButton icon="close" label="סגירה" href={href(ROUTES.home)} />}
        title={`יחידה ${unit.num}: ${unit.title}`}
      />
      <main className={styles.content}>
        <LessonStep step={current} index={step} total={total} iihfNote={isLast ? lesson.iihfNote : null} />
      </main>
      <footer className={styles.actions}>
        <Button variant="ghost" onClick={prev} disabled={isFirst}>
          הקודם
        </Button>
        {isLast ? (
          <Button onClick={toQuiz}>לחידון</Button>
        ) : (
          <Button onClick={next}>הבא</Button>
        )}
      </footer>
    </div>
  );
}
