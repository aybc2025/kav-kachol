import { Scene } from "../rink/Scene.jsx";
import { ClockFigure } from "../figures/ClockFigure.jsx";
import { PeriodsFigure } from "../figures/PeriodsFigure.jsx";
import { PointsFigure } from "../figures/PointsFigure.jsx";
import { SignalFigure } from "../signals/SignalFigure.jsx";
import styles from "./StepVisual.module.css";

// One visual per step: a rink scene, a scoreboard figure, or a referee signal.
export function StepVisual({ item, flashKey, label, children }) {
  let visual = null;
  if (item.scene) visual = <Scene scene={item.scene} flashKey={flashKey} label={label} />;
  else if (item.signal) visual = <SignalFigure id={item.signal} />;
  else if (item.figure?.type === "clock") visual = <ClockFigure {...item.figure} />;
  else if (item.figure?.type === "periods") visual = <PeriodsFigure {...item.figure} />;
  else if (item.figure?.type === "points") visual = <PointsFigure />;
  if (!visual) return null;

  const framed = item.scene || item.signal;
  return (
    <div className={framed ? styles.frame : undefined}>
      {visual}
      {children}
    </div>
  );
}
