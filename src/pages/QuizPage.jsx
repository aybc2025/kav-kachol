import { useQuiz } from "../hooks/useQuiz.js";
import { getUnit, nextUnit } from "../content/units.js";
import { ROUTES } from "../config/routes.js";
import { href } from "../hooks/useHashRoute.js";
import { TopBar } from "../components/layout/TopBar.jsx";
import { IconButton } from "../components/ui/IconButton.jsx";
import { Button } from "../components/ui/Button.jsx";
import { ProgressBar } from "../components/ui/ProgressBar.jsx";
import { QuestionCard } from "../components/quiz/QuestionCard.jsx";
import { AnswerFeedback } from "../components/quiz/AnswerFeedback.jsx";
import { QuizResult } from "../components/quiz/QuizResult.jsx";
import { EmptyQuiz } from "../components/quiz/EmptyQuiz.jsx";
import styles from "./FocusPage.module.css";
import q from "./QuizPage.module.css";

function describe(mode) {
  if (mode === "mixed") return { title: "חידון מעורב", primary: { label: "לחידון נוסף", href: href(ROUTES.quizHub) } };
  if (mode === "missed") return { title: "תרגול טעויות", primary: { label: "לרשימת החידונים", href: href(ROUTES.quizHub) } };
  const unit = getUnit(mode);
  const next = nextUnit(mode);
  return {
    title: unit ? `חידון ${unit.title}` : "חידון",
    primary: next
      ? { label: `ליחידה ${next.num}`, href: href(ROUTES.lesson(next.id)) }
      : { label: "לדף הבית", href: href(ROUTES.home) },
  };
}

export function QuizPage({ mode }) {
  const quiz = useQuiz(mode);
  const { title, primary } = describe(mode);
  const close = <IconButton icon="close" label="סגירה" href={href(ROUTES.quizHub)} />;

  if (quiz.total === 0) {
    return (
      <div className={styles.page}>
        <TopBar start={close} title={title} />
        <EmptyQuiz />
      </div>
    );
  }

  if (quiz.finished) {
    const wrong = new Set(quiz.results.filter((r) => !r.correct).map((r) => r.id));
    return (
      <div className={styles.page}>
        <TopBar start={close} title={title} />
        <QuizResult
          title={title}
          correct={quiz.correctCount}
          total={quiz.total}
          missedQuestions={quiz.questions.filter((x) => wrong.has(x.id))}
          onRetry={quiz.retryMissed}
          primary={primary}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <TopBar start={close} title={title} />
      <main className={styles.content}>
        <div className={q.head}>
          <span>
            שאלה <span className="ltr">{quiz.index + 1}</span> מתוך <span className="ltr">{quiz.total}</span>
          </span>
          <span>
            <span className="ltr">{quiz.correctCount}</span> נכונות
          </span>
        </div>
        <ProgressBar value={quiz.index + (quiz.answered ? 1 : 0)} max={quiz.total} label="התקדמות בחידון" />
        <div className={q.body}>
          <QuestionCard question={quiz.question} selected={quiz.selected} onChoose={quiz.choose} />
          {quiz.answered ? <AnswerFeedback correct={quiz.isCorrect} explain={quiz.question.explain} /> : null}
        </div>
      </main>
      {quiz.answered ? (
        <footer className={`${styles.actions} ${styles.single}`}>
          <Button onClick={quiz.next}>{quiz.index === quiz.total - 1 ? "לתוצאה" : "לשאלה הבאה"}</Button>
        </footer>
      ) : null}
    </div>
  );
}
