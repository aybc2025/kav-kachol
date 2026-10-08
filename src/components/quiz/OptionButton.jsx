import styles from "./OptionButton.module.css";

// state: "idle" | "right" | "wrong" | "dim"
const SR_SUFFIX = { right: " — התשובה הנכונה", wrong: " — התשובה שבחרת" };

export function OptionButton({ text, state, disabled, onClick }) {
  return (
    <button type="button" className={`${styles.opt} ${styles[state]}`} disabled={disabled} onClick={onClick}>
      {text}
      {SR_SUFFIX[state] ? <span className="visually-hidden">{SR_SUFFIX[state]}</span> : null}
    </button>
  );
}
