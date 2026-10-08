import { basics, rink, faceoff } from "./basics-rink-faceoff.js";
import { offside, icing } from "./offside-icing.js";
import { penalties, goals, overtime } from "./penalties-goals-overtime.js";
import { signals } from "./signals.js";

const QUIZZES = { basics, rink, faceoff, offside, icing, penalties, goals, overtime, signals };

export const ALL_QUESTIONS = Object.values(QUIZZES).flat();

export function getQuiz(unitId) {
  return QUIZZES[unitId] ?? null;
}

export function getQuestionsByIds(ids) {
  const wanted = new Set(ids);
  return ALL_QUESTIONS.filter((q) => wanted.has(q.id));
}

export function unitOfQuestion(questionId) {
  return Object.keys(QUIZZES).find((unitId) => QUIZZES[unitId].some((q) => q.id === questionId)) ?? null;
}
