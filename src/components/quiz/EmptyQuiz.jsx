import { ROUTES } from "../../config/routes.js";
import { href } from "../../hooks/useHashRoute.js";
import { Button } from "../ui/Button.jsx";
import styles from "./EmptyQuiz.module.css";

// Reached when there are no saved mistakes to practise, or the quiz name is unknown.
export function EmptyQuiz() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>אין כרגע שאלות לתרגל</h1>
      <p className={styles.text}>שאלות שתטעה בהן בחידונים יחכו לך כאן.</p>
      <Button href={href(ROUTES.quiz("mixed"))}>לחידון מעורב</Button>
    </main>
  );
}
