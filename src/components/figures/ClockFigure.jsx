import styles from "./Figures.module.css";

// A penalty-box clock, in the same scoreboard style as the home screen.
export function ClockFigure({ value, label }) {
  return (
    <div className={styles.board}>
      <span className={styles.boardLabel}>{label}</span>
      <span className={`${styles.clock} ltr`}>{value}</span>
    </div>
  );
}
