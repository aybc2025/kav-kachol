import { ALL_DOTS } from "./RinkMarkings.jsx";
import styles from "./RinkHighlight.module.css";

// Zone tints sit under the markings; line highlights sit over them.
// tone "call" turns line highlights red and flashes them once (the whistle).
const ZONES = {
  "zone-left": { x: 0, w: 74 },
  "zone-neutral": { x: 76.2, w: 47.6 },
  "zone-right": { x: 126, w: 74 },
};

const BANDS = {
  "blue-left": { x: 70.6, w: 9 },
  "blue-right": { x: 120.4, w: 9 },
  "red-center": { x: 95.5, w: 9 },
  "goal-left": { x: 8.6, w: 4.8 },
  "goal-right": { x: 186.6, w: 4.8 },
};

export function ZoneTints({ ids = [] }) {
  return ids
    .filter((id) => ZONES[id])
    .map((id) => <rect key={id} className={styles.zone} x={ZONES[id].x} y="0" width={ZONES[id].w} height="85" />);
}

export function LineHighlights({ ids = [], tone = "info", flashKey }) {
  const cls = `${styles.band} ${tone === "call" ? styles.call : ""}`;
  return (
    <g key={flashKey} aria-hidden="true">
      {ids.map((id) => {
        if (BANDS[id]) return <rect key={id} className={cls} x={BANDS[id].x} y="0" width={BANDS[id].w} height="85" />;
        if (id === "crease-left") return <path key={id} className={cls} d="M11 34 A8.5 8.5 0 0 1 11 51 Z" />;
        if (id === "circle-center") return <circle key={id} className={styles.circle} cx="100" cy="42.5" r="15" />;
        if (id === "dotline-left") return <line key={id} className={styles.dashed} x1="31" y1="3" x2="31" y2="82" />;
        if (id === "bench") return <line key={id} className={styles.bench} x1="80" y1="84" x2="120" y2="84" />;
        if (id === "dots") {
          return ALL_DOTS.map(([x, y]) => <circle key={`${x}-${y}`} className={styles.dot} cx={x} cy={y} r="3.4" />);
        }
        return null;
      })}
    </g>
  );
}
