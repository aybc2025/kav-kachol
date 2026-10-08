import styles from "./RinkPieces.module.css";

// Position is a CSS transform so it can transition between lesson steps.
// In SVG, CSS px in a translate() are user units — i.e. feet on this rink.
export function RinkPlayer({ team, num, goalie, x, y, scale = 1 }) {
  const teamCls = team === "blue" ? styles.blue : styles.dark;
  return (
    <g className={`${styles.piece} ${teamCls} ${goalie ? styles.goalie : ""}`} style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}>
      <circle className={styles.body} r="5" />
      <text className={styles.num} textAnchor="middle" dominantBaseline="central" y=".3">
        {goalie ? "ש" : num}
      </text>
    </g>
  );
}
