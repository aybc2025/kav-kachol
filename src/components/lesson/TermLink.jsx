import { useTermSheet } from "../../hooks/useTermSheet.jsx";
import styles from "./TermLink.module.css";

export function TermLink({ id, children }) {
  const { openTerm } = useTermSheet();
  return (
    <button type="button" className={styles.term} onClick={() => openTerm(id)}>
      {children}
    </button>
  );
}
