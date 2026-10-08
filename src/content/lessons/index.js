import basics from "./basics.js";
import rink from "./rink.js";
import faceoff from "./faceoff.js";
import offside from "./offside.js";
import icing from "./icing.js";
import penalties from "./penalties.js";
import goals from "./goals.js";
import overtime from "./overtime.js";
import signals from "./signals.js";

const LESSONS = { basics, rink, faceoff, offside, icing, penalties, goals, overtime, signals };

export function getLesson(unitId) {
  return LESSONS[unitId] ?? null;
}
