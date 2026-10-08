import { TABS } from "../../config/routes.js";
import { href } from "../../hooks/useHashRoute.js";
import { Icon } from "../ui/Icon.jsx";
import styles from "./BottomNav.module.css";

// No animation on tab switches: this is pressed dozens of times per session.
export function BottomNav({ active }) {
  return (
    <nav className={styles.nav} aria-label="ניווט ראשי">
      {TABS.map((tab) => (
        <a
          key={tab.key}
          href={href(tab.path)}
          className={styles.tab}
          aria-current={active === tab.key ? "page" : undefined}
        >
          <Icon name={tab.icon} />
          <span>{tab.label}</span>
        </a>
      ))}
    </nav>
  );
}
