import styles from "./Figures.module.css";

// Three 20-minute periods; with `overtime`, open-ended 20-minute playoff OT periods follow.
export function PeriodsFigure({ overtime = false }) {
  const regular = ["שליש 1", "שליש 2", "שליש 3"];
  return (
    <div className={styles.board}>
      <ol className={styles.periods}>
        {regular.map((name) => (
          <li key={name} className={styles.period}>
            <span className={styles.periodName}>{name}</span>
            <span className={`${styles.periodTime} ltr`}>20:00</span>
          </li>
        ))}
        {overtime ? (
          <li className={`${styles.period} ${styles.ot}`}>
            <span className={styles.periodName}>הארכות</span>
            <span className={`${styles.periodTime} ltr`}>20:00</span>
          </li>
        ) : null}
      </ol>
      <span className={styles.boardLabel}>{overtime ? "עד השער הראשון" : "השעון עוצר בכל שריקה"}</span>
    </div>
  );
}
