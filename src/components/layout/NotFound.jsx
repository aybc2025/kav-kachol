import { ROUTES } from "../../config/routes.js";
import { href } from "../../hooks/useHashRoute.js";
import { Button } from "../ui/Button.jsx";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>העמוד הזה לא קיים</h1>
      <Button href={href(ROUTES.home)}>לדף הבית</Button>
    </main>
  );
}
