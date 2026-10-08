import { useState } from "react";
import { useProgress } from "../hooks/useProgress.jsx";
import { ROUTES } from "../config/routes.js";
import { APP_VERSION } from "../config/constants.js";
import { href } from "../hooks/useHashRoute.js";
import { TopBar } from "../components/layout/TopBar.jsx";
import { IconButton } from "../components/ui/IconButton.jsx";
import { Button } from "../components/ui/Button.jsx";
import { ConfirmSheet } from "../components/ui/ConfirmSheet.jsx";
import styles from "./TabPage.module.css";
import s from "./SettingsPage.module.css";

const SIZES = [
  { id: "md", label: "רגיל" },
  { id: "lg", label: "גדול" },
];

export function SettingsPage() {
  const { progress, setTextSize, reset } = useProgress();
  const [confirming, setConfirming] = useState(false);
  const [cleared, setCleared] = useState(false);

  const doReset = () => {
    reset();
    setConfirming(false);
    setCleared(true);
  };

  return (
    <div className={styles.page}>
      <TopBar start={<IconButton icon="close" label="סגירה" href={href(ROUTES.home)} />} title="הגדרות" />
      <main className={styles.stack}>
        <section className={s.group} aria-labelledby="size-title">
          <h2 id="size-title" className={s.title}>
            גודל טקסט
          </h2>
          <div className={s.segment} role="group" aria-labelledby="size-title">
            {SIZES.map((size) => (
              <button
                key={size.id}
                type="button"
                className={s.seg}
                aria-pressed={progress.settings.textSize === size.id}
                onClick={() => setTextSize(size.id)}
              >
                {size.label}
              </button>
            ))}
          </div>
        </section>

        <section className={s.group} aria-labelledby="reset-title">
          <h2 id="reset-title" className={s.title}>
            התקדמות
          </h2>
          <p className={s.text}>נשמרת במכשיר הזה בלבד.</p>
          <Button variant="ghost" onClick={() => setConfirming(true)}>
            איפוס ההתקדמות
          </Button>
          {cleared ? (
            <p className={s.text} role="status">
              ההתקדמות אופסה.
            </p>
          ) : null}
        </section>

        <section className={s.group}>
          <h2 className={s.title}>על האפליקציה</h2>
          <p className={s.text}>
            החוקים לפי ספר החוקים של ה-NHL לעונת <span className="ltr">2025-26</span>, עם השינויים של{" "}
            <span className="ltr">2026-27</span>. הערות ׳ומה ב-IIHF?׳ מסבירות הבדלים בתחרויות בינלאומיות.
          </p>
          <p className={s.text}>
            גרסה <span className="ltr">{APP_VERSION}</span>
          </p>
        </section>
      </main>
      <ConfirmSheet
        open={confirming}
        title="לאפס את ההתקדמות?"
        text="יחידות שהושלמו, תוצאות חידונים ורשימת הטעויות יימחקו."
        confirmLabel="איפוס"
        onConfirm={doReset}
        onCancel={() => setConfirming(false)}
      />
    </div>
  );
}
