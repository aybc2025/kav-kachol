import { useId } from "react";
import { getSignal, NEUTRAL_ARMS } from "../../content/signals.js";
import styles from "./SignalFigure.module.css";

// A geometric pictogram of an official in a striped jersey — a sign, not an illustration.
// Arms come from content/signals.js as two polylines.
const MOTION = {
  sweep: ["M8 30 l-5 7 l5 7", "M92 30 l5 7 l-5 7"],
  tap: ["M76 80 l6 4", "M78 74 l7 1"],
  pull: ["M48 70 l0 6", "M52 70 l0 6"],
  push: ["M50 54 l0 -8", "M46 50 l4 -4 l4 4"],
};

export function SignalFigure({ id, size = "md" }) {
  const signal = id === "neutral" ? null : getSignal(id);
  const arms = signal?.arms ?? NEUTRAL_ARMS;
  const patternId = `stripes${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const label = signal ? `סימן ${signal.he}` : "שופט";
  return (
    <svg className={`${styles.fig} ${styles[size]}`} viewBox="0 0 100 120" role="img" aria-label={label}>
      <defs>
        <pattern id={patternId} width="8" height="10" patternUnits="userSpaceOnUse">
          <rect width="4" height="10" fill="var(--ink)" />
          <rect x="4" width="4" height="10" fill="var(--surface)" />
        </pattern>
      </defs>
      <line className={styles.leg} x1="45" y1="72" x2="43" y2="112" />
      <line className={styles.leg} x1="55" y1="72" x2="57" y2="112" />
      <path className={styles.torso} fill={`url(#${patternId})`} d="M36 34 Q50 28 64 34 L62 74 L38 74 Z" />
      <rect className={styles.band} x="60" y="40" width="5" height="4" rx="1" />
      <circle className={styles.head} cx="50" cy="17" r="9" />
      {/* Each arm gets a light halo first, so a gesture in front of the striped shirt stays readable. */}
      {arms.map((pts, i) => (
        <polyline key={`h${i}`} className={styles.halo} points={pts.map((p) => p.join(",")).join(" ")} />
      ))}
      {arms.map((pts, i) => (
        <polyline key={`a${i}`} className={styles.arm} points={pts.map((p) => p.join(",")).join(" ")} />
      ))}
      {(MOTION[signal?.motion] ?? []).map((d) => (
        <path key={d} className={styles.motion} d={d} />
      ))}
    </svg>
  );
}
