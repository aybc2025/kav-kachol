import { useId } from "react";
import { RinkMarkings } from "./RinkMarkings.jsx";
import styles from "./Rink.module.css";

// Rink surface in feet. `children` are drawn on top of the markings and clipped
// to the rounded boards, so zone tints never spill past the corners.
// viewBox crops to part of the rink (e.g. the area in front of one goal) without changing coordinates.
export function Rink({ label, under, children, viewBox = "0 0 200 85" }) {
  const clipId = `rink${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg className={styles.rink} viewBox={viewBox} role="img" aria-label={label}>
      <defs>
        <clipPath id={clipId}>
          <rect x="1" y="1" width="198" height="83" rx="27" />
        </clipPath>
      </defs>
      <rect x="1" y="1" width="198" height="83" rx="27" fill="var(--ice-sheet)" />
      <g clipPath={`url(#${clipId})`}>
        {under}
        <RinkMarkings />
        {children}
      </g>
      <rect x="1" y="1" width="198" height="83" rx="27" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
    </svg>
  );
}
