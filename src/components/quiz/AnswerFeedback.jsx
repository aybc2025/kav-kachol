import styles from "./AnswerFeedback.module.css";

export function AnswerFeedback({ correct, explain }) {
  return (
    <div className={styles.box} role="status">
      <strong className={correct ? styles.right : styles.wrong}>{correct ? "נכון." : "לא בדיוק."}</strong>
      <p className={styles.text}>{explain}</p>
    </div>
  );
}
