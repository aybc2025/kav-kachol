import { Sheet } from "./Sheet.jsx";
import { Button } from "./Button.jsx";
import styles from "./ConfirmSheet.module.css";

// The cancel action sits first and the destructive one keeps its own name ("איפוס"), not "OK".
export function ConfirmSheet({ open, title, text, confirmLabel, onConfirm, onCancel }) {
  return (
    <Sheet open={open} onClose={onCancel} labelledBy="confirm-title">
      <h2 id="confirm-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <Button variant="ghost" onClick={onCancel}>
          ביטול
        </Button>
        <Button className={styles.danger} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </div>
    </Sheet>
  );
}
