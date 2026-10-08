import { useEffect, useRef } from "react";
import styles from "./Sheet.module.css";

// Bottom sheet on the native <dialog> element: the browser handles focus trapping,
// focus return, Escape and the top layer. A tap on the scrim closes it.
export function Sheet({ open, onClose, labelledBy, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    const onCancel = (e) => {
      e.preventDefault();
      onClose();
    };
    const onClick = (e) => {
      if (e.target === dialog) onClose();
    };
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onClick);
    };
  }, [onClose]);

  return (
    <dialog ref={ref} className={styles.sheet} aria-labelledby={labelledBy}>
      <div className={styles.inner}>
        <span className={styles.grab} aria-hidden="true" />
        {open ? children : null}
      </div>
    </dialog>
  );
}
