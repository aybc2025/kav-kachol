import styles from "./Button.module.css";

// variant: "primary" | "ghost" | "light". Pass `href` to render a link that looks like a button.
export function Button({ variant = "primary", href, block = false, className = "", children, ...rest }) {
  const cls = [styles.btn, styles[variant], block ? styles.block : "", className].join(" ");
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
