// What each scene `call` means: the label under the rink and its tone.
// tone: "bad" (whistle / violation, red), "ok" (play on, green), "info" (neutral).
export const CALLS = {
  offside: { text: "שריקה: נבדל", tone: "bad" },
  onside: { text: "לא נבדל", tone: "ok" },
  icing: { text: "שריקה: איסינג", tone: "bad" },
  noicing: { text: "אין איסינג", tone: "ok" },
  goal: { text: "שער", tone: "ok" },
  nogoal: { text: "השער נפסל", tone: "bad" },
  delayed: { text: "יד מורמת: ממתינים", tone: "info" },
  penalty: { text: "עונש", tone: "bad" },
};

export function isViolation(call) {
  return CALLS[call]?.tone === "bad";
}
