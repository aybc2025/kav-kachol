import { Icon } from "./Icon.jsx";
import styles from "./IconButton.module.css";

// Always labelled: the label is what a screen reader announces.
export function IconButton({ icon, label, href, onClick }) {
  const content = <Icon name={icon} size={22} />;
  if (href) {
    return (
      <a className={styles.btn} href={href} aria-label={label}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={styles.btn} onClick={onClick} aria-label={label}>
      {content}
    </button>
  );
}
