import styles from "./RinkPieces.module.css";

export function RinkPuck({ x, y, scale = 1 }) {
  return (
    <g className={styles.piece} style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}>
      <circle className={styles.puck} r="2.4" />
    </g>
  );
}
