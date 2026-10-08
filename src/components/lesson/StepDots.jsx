import styles from "./StepDots.module.css";

// Step segments fill in reading order (right-to-left in Hebrew), via normal flex flow.
export function StepDots({ current, total }) {
  return (
    <div className={styles.dots} aria-label={`צעד ${current + 1} מתוך ${total}`} role="img">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i <= current ? styles.done : styles.todo} />
      ))}
    </div>
  );
}
