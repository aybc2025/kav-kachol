import styles from "./TopBar.module.css";

// start: element at the inline-start edge (right in Hebrew); end: at the inline-end edge.
// large: the page name as a heading on the reading edge, with no start slot.
export function TopBar({ start, title, end, large = false }) {
  if (large) {
    return (
      <header className={`${styles.bar} ${styles.largeBar}`}>
        <h1 className={styles.large}>{title}</h1>
        <div className={`${styles.slot} ${styles.end}`}>{end}</div>
      </header>
    );
  }
  return (
    <header className={styles.bar}>
      <div className={styles.slot}>{start}</div>
      <span className={styles.title}>{title}</span>
      <div className={`${styles.slot} ${styles.end}`}>{end}</div>
    </header>
  );
}
