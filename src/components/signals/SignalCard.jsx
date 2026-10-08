import { SignalFigure } from "./SignalFigure.jsx";
import styles from "./SignalCard.module.css";

export function SignalCard({ signal, onOpen }) {
  return (
    <li>
      <button type="button" className={styles.card} onClick={() => onOpen(signal.id)}>
        <SignalFigure id={signal.id} size="sm" />
        <span className={styles.he}>{signal.he}</span>
        <span className={styles.en} lang="en">
          {signal.en}
        </span>
      </button>
    </li>
  );
}
