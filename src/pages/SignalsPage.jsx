import { useState } from "react";
import { SIGNALS } from "../content/signals.js";
import { TopBar } from "../components/layout/TopBar.jsx";
import { SignalCard } from "../components/signals/SignalCard.jsx";
import { SignalSheet } from "../components/signals/SignalSheet.jsx";
import styles from "./TabPage.module.css";
import grid from "./SignalsPage.module.css";

export function SignalsPage() {
  const [open, setOpen] = useState(null);
  return (
    <div className={styles.page}>
      <TopBar large title="סימני שופטים" />
      <main className={styles.stack}>
        <ul className={grid.grid}>
          {SIGNALS.map((s) => (
            <SignalCard key={s.id} signal={s} onOpen={setOpen} />
          ))}
        </ul>
      </main>
      <SignalSheet signalId={open} onClose={() => setOpen(null)} />
    </div>
  );
}
