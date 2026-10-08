import styles from "./RinkPieces.module.css";

// A movement trace: kind "puck" (where the puck travelled) or "skate" (where a player skated).
export function RinkPath({ from, to, kind = "puck" }) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const head = 2.4;
  const left = [x2 - head * Math.cos(angle - 0.5), y2 - head * Math.sin(angle - 0.5)];
  const right = [x2 - head * Math.cos(angle + 0.5), y2 - head * Math.sin(angle + 0.5)];
  const cls = kind === "skate" ? styles.skate : styles.trace;
  return (
    <g className={`${styles.path} ${cls}`} aria-hidden="true">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline points={`${left.join(",")} ${x2},${y2} ${right.join(",")}`} />
    </g>
  );
}
