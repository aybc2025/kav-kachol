import styles from "./GlossaryList.module.css";

export function GlossaryList({ terms, onOpen }) {
  return (
    <ul className={styles.list}>
      {terms.map((t) => (
        <li key={t.id}>
          <button type="button" className={styles.item} onClick={() => onOpen(t.id)}>
            <span className={styles.head}>
              <span className={styles.he}>{t.he}</span>
              <span className={styles.en} lang="en">
                {t.en}
              </span>
            </span>
            <span className={styles.short}>{t.short}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
