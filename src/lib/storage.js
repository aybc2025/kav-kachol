import { STORAGE_KEY, PROGRESS_VERSION } from "../config/constants.js";
import { UNITS } from "../content/units.js";

const UNIT_IDS = new Set(UNITS.map((u) => u.id));

export function emptyProgress() {
  return { version: PROGRESS_VERSION, units: {}, quiz: {}, missed: [], lastUnit: null, settings: { textSize: "md" } };
}

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const isCount = (v) => Number.isInteger(v) && v >= 0 && v < 1000;

// Rebuilds progress from untrusted storage, keeping only fields that match the schema.
// Anything unexpected is dropped rather than trusted, so a corrupted or older entry
// never crashes the app.
export function sanitize(raw) {
  const clean = emptyProgress();
  if (!isObj(raw) || raw.version !== PROGRESS_VERSION) return clean;

  if (isObj(raw.units)) {
    for (const [id, u] of Object.entries(raw.units)) {
      if (UNIT_IDS.has(id) && isObj(u) && isCount(u.step)) {
        clean.units[id] = { step: u.step, done: u.done === true };
      }
    }
  }
  if (isObj(raw.quiz)) {
    for (const [id, q] of Object.entries(raw.quiz)) {
      if (UNIT_IDS.has(id) && isObj(q) && isCount(q.best) && isCount(q.total) && q.best <= q.total) {
        clean.quiz[id] = { best: q.best, total: q.total };
      }
    }
  }
  if (Array.isArray(raw.missed)) {
    clean.missed = raw.missed.filter((x) => typeof x === "string" && x.length < 64).slice(0, 200);
  }
  if (UNIT_IDS.has(raw.lastUnit)) clean.lastUnit = raw.lastUnit;
  if (isObj(raw.settings) && (raw.settings.textSize === "md" || raw.settings.textSize === "lg")) {
    clean.settings.textSize = raw.settings.textSize;
  }
  return clean;
}

export function loadProgress() {
  try {
    const text = window.localStorage.getItem(STORAGE_KEY);
    return text ? sanitize(JSON.parse(text)) : emptyProgress();
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage can be full or blocked (private mode). Progress then lives for this session only.
  }
}

export function clearProgress() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to clear.
  }
}
