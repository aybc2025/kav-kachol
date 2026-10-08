import styles from "./ProgressBar.module.css";

// Fills from the inline-start edge, so it runs right-to-left in Hebrew.
export function ProgressBar({ value, max, label }) {
  const ratio = max > 0 ? Math.min(value / max, 1) : 0;
  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label={label}
    >
      <span className={styles.fill} style={{ transform: `scaleX(${ratio})` }} />
    </div>
  );
}
