import { Icon } from "./Icon.jsx";
import styles from "./Chevron.module.css";

// Points "forward" in reading direction: left in Hebrew. The flip lives on the wrapper.
export function Chevron({ size = 20 }) {
  return (
    <span className={styles.wrap} aria-hidden="true">
      <Icon name="chevron" size={size} />
    </span>
  );
}
