import { useProgress } from "../hooks/useProgress.jsx";
import { ROUTES } from "../config/routes.js";
import { href } from "../hooks/useHashRoute.js";
import { APP_NAME } from "../config/constants.js";
import { TopBar } from "../components/layout/TopBar.jsx";
import { IconButton } from "../components/ui/IconButton.jsx";
import { Scoreboard } from "../components/home/Scoreboard.jsx";
import { ContinueCard } from "../components/home/ContinueCard.jsx";
import { UnitList } from "../components/home/UnitList.jsx";
import styles from "./TabPage.module.css";

export function HomePage() {
  const { progress, doneCount, accuracy, continueUnit } = useProgress();
  const isDone = (id) => Boolean(progress.units[id]?.done);
  const savedStep = continueUnit ? progress.units[continueUnit]?.step ?? 0 : 0;

  return (
    <div className={styles.page}>
      <TopBar large title={APP_NAME} end={<IconButton icon="gear" label="הגדרות" href={href(ROUTES.settings)} />} />
      <main className={styles.stack}>
        <Scoreboard doneCount={doneCount} accuracy={accuracy} isDone={isDone} />
        <ContinueCard unitId={continueUnit} savedStep={savedStep} />
        <UnitList isDone={isDone} currentId={continueUnit} />
      </main>
    </div>
  );
}
