import { Rink } from "./Rink.jsx";
import { ZoneTints, LineHighlights } from "./RinkHighlight.jsx";
import { RinkPlayer } from "./RinkPlayer.jsx";
import { RinkPuck } from "./RinkPuck.jsx";
import { RinkPath } from "./RinkPath.jsx";
import { isViolation } from "./calls.js";
import pieces from "./RinkPieces.module.css";

// Named close-ups. Scenes near the goal are unreadable at full-rink scale on a phone.
const VIEWS = {
  full: "0 0 200 85",
  "left-end": "0 6 80 62",
  "right-end": "120 6 80 62",
};

// Draws one lesson/quiz scene. Players keep their React key (id) across steps,
// so moving from one step to the next animates them instead of re-drawing.
export function Scene({ scene, label, flashKey, showCall = true }) {
  const { players = [], puck, paths = [], highlight = [], labels = [], call, view = "full" } = scene;
  // In a close-up the board is magnified, so pieces are drawn smaller to keep their real proportion.
  const scale = view === "full" ? 1 : 0.7;
  const tone = showCall && isViolation(call) ? "call" : "info";
  return (
    <Rink label={label} viewBox={VIEWS[view] ?? VIEWS.full} under={<ZoneTints ids={highlight} />}>
      <LineHighlights ids={highlight} tone={tone} flashKey={flashKey} />
      {paths.map((p, i) => (
        <RinkPath key={`${flashKey}-${i}`} {...p} />
      ))}
      {labels.map((l) => (
        <text key={l.text} className={pieces.label} x={l.x} y={l.y} textAnchor="middle" dominantBaseline="central">
          {l.text}
        </text>
      ))}
      {players.map((pl) => (
        <RinkPlayer key={pl.id} {...pl} scale={scale} />
      ))}
      {puck ? <RinkPuck key="puck" {...puck} scale={scale} /> : null}
    </Rink>
  );
}
