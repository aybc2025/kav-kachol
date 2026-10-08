// Shared building blocks for rink scenes.
// Coordinates are in feet on a 200 × 85 NHL rink. x=0 is the left boards.
// Convention used in every lesson: the blue team attacks LEFT (toward the goal at x=11),
// matching Hebrew reading direction. The dark team defends the left goal.

export const p = (id, team, num, x, y, extra = {}) => ({ id, team, num, x, y, ...extra });

export const goalieDark = (x = 14, y = 42.5) => ({ id: "gd", team: "dark", goalie: true, x, y });
export const goalieBlue = (x = 186, y = 42.5) => ({ id: "gb", team: "blue", goalie: true, x, y });

export const puck = (x, y) => ({ x, y });

// A dashed movement line. kind: "puck" (dark dashes) or "skate" (blue dashes).
export const path = (from, to, kind = "puck") => ({ from, to, kind });

export const label = (x, y, text) => ({ x, y, text });
