import { CATEGORIES } from "../../content/glossary.js";
import styles from "./CategoryChips.module.css";

export function CategoryChips({ value, onChange }) {
  return (
    <div className={styles.chips} role="group" aria-label="סינון לפי נושא">
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          type="button"
          className={styles.chip}
          aria-pressed={value === c.id}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
