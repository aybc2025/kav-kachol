import { getSignal } from "../../content/signals.js";
import { Sheet } from "../ui/Sheet.jsx";
import { Button } from "../ui/Button.jsx";
import { SignalFigure } from "./SignalFigure.jsx";
import styles from "./SignalSheet.module.css";

export function SignalSheet({ signalId, onClose }) {
  const signal = signalId ? getSignal(signalId) : null;
  return (
    <Sheet open={Boolean(signal)} onClose={onClose} labelledBy="signal-title">
      {signal ? (
        <div className={styles.body}>
          <SignalFigure id={signal.id} />
          <h2 id="signal-title" className={styles.title}>
            {signal.he}
          </h2>
          <p className={styles.en} lang="en">
            {signal.en}
          </p>
          <dl className={styles.facts}>
            <dt>איך זה נראה</dt>
            <dd>{signal.how}</dd>
            <dt>מה זה אומר</dt>
            <dd>{signal.meaning}</dd>
          </dl>
          <Button variant="ghost" block onClick={onClose}>
            סגירה
          </Button>
        </div>
      ) : null}
    </Sheet>
  );
}
