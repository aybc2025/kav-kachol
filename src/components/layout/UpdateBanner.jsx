import { useRegisterSW } from "virtual:pwa-register/react";
import { UPDATE_CHECK_INTERVAL } from "../../config/constants.js";
import { Button } from "../ui/Button.jsx";
import { IconButton } from "../ui/IconButton.jsx";
import styles from "./UpdateBanner.module.css";

// Shown when a newer deploy is waiting. Every push to main ships a new service worker;
// an open app also re-checks once an hour so long-lived tabs pick it up.
export function UpdateBanner() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (!registration) return;
      // Lives as long as the app: the registration is a page-lifetime singleton, so no cleanup.
      setInterval(() => {
        if (navigator.onLine) registration.update();
      }, UPDATE_CHECK_INTERVAL);
    },
  });

  if (!needRefresh) return null;

  return (
    <div className={styles.banner} role="status">
      <span className={styles.text}>יש גרסה חדשה</span>
      <Button variant="light" onClick={() => updateServiceWorker(true)}>
        לרענן
      </Button>
      <span className={styles.close}>
        <IconButton icon="close" label="לא עכשיו" onClick={() => setNeedRefresh(false)} />
      </span>
    </div>
  );
}
