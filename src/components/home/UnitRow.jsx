import { ROUTES } from "../../config/routes.js";
import { href } from "../../hooks/useHashRoute.js";
import { Chevron } from "../ui/Chevron.jsx";
import styles from "./UnitList.module.css";

// state: "done" | "current" | "new". Units are never locked: any one can be opened.
const STATE_TEXT = { done: "הושלמה", current: "היחידה הנוכחית", new: "" };

export function UnitRow({ unit, state }) {
  return (
    <li>
      <a className={`${styles.row} ${styles[state]}`} href={href(ROUTES.lesson(unit.id))}>
        <span className={`${styles.num} ltr`} aria-hidden="true">
          {unit.num}
        </span>
        <span className={styles.text}>
          <span className={styles.title}>{unit.title}</span>
          <span className={styles.sub}>{unit.sub}</span>
        </span>
        {STATE_TEXT[state] ? <span className="visually-hidden">{STATE_TEXT[state]}</span> : null}
        <Chevron />
      </a>
    </li>
  );
}
