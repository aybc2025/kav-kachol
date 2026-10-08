import { useOnlineStatus } from "../../hooks/useOnlineStatus.js";
import { Icon } from "../ui/Icon.jsx";
import styles from "./OfflineNotice.module.css";

export function OfflineNotice() {
  const online = useOnlineStatus();
  if (online) return null;
  return (
    <div className={styles.bar} role="status">
      <Icon name="offline" size={18} />
      <span>אין חיבור. הכול עובד כרגיל.</span>
    </div>
  );
}
