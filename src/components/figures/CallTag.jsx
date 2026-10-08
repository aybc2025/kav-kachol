import { CALLS } from "../rink/calls.js";
import styles from "./CallTag.module.css";

export function CallTag({ call }) {
  const info = CALLS[call];
  if (!info) return null;
  return (
    <p className={`${styles.tag} ${styles[info.tone]}`} role="status">
      {info.text}
    </p>
  );
}
