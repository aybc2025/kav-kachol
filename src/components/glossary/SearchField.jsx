import { Icon } from "../ui/Icon.jsx";
import styles from "./SearchField.module.css";

export function SearchField({ value, onChange }) {
  return (
    <label className={styles.field}>
      <Icon name="search" size={18} />
      <span className="visually-hidden">חיפוש מונח</span>
      <input
        className={styles.input}
        type="search"
        inputMode="search"
        enterKeyHint="search"
        autoComplete="off"
        maxLength={40}
        placeholder="חיפוש בעברית או באנגלית"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
