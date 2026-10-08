import { useCallback, useState } from "react";
import { getQuiz, ALL_QUESTIONS, getQuestionsByIds } from "../content/quizzes/index.js";
import { MIXED_QUIZ_LENGTH } from "../config/constants.js";
import { shuffle, sample } from "../lib/shuffle.js";
import { useProgress } from "./useProgress.jsx";

// mode: a unit id, "mixed" (random across all units) or "missed" (practice past mistakes).
function buildQuestions(mode, missed) {
  if (mode === "mixed") return sample(ALL_QUESTIONS, MIXED_QUIZ_LENGTH);
  if (mode === "missed") return shuffle(getQuestionsByIds(missed));
  const unitQuiz = getQuiz(mode);
  return unitQuiz ? shuffle(unitQuiz) : [];
}

export function useQuiz(mode) {
  const { progress, recordQuiz } = useProgress();
  const [questions, setQuestions] = useState(() => buildQuestions(mode, progress.missed));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState([]); // [{ id, correct }]
  const [finished, setFinished] = useState(false);
  const [isRetry, setIsRetry] = useState(false);

  const question = questions[index] ?? null;
  const answered = selected !== null;
  const isCorrect = answered && selected === question.answer;
  const correctCount = results.filter((r) => r.correct).length;

  const choose = useCallback(
    (optionIndex) => {
      if (selected !== null || !question) return;
      setSelected(optionIndex);
      setResults((r) => [...r, { id: question.id, correct: optionIndex === question.answer }]);
    },
    [selected, question]
  );

  const next = useCallback(() => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      return;
    }
    setFinished(true);
    recordQuiz({
      // A retry round covers only part of the unit, so it must not overwrite the unit's best score.
      unitId: mode === "mixed" || mode === "missed" || isRetry ? null : mode,
      correct: results.filter((r) => r.correct).length,
      total: questions.length,
      missedIds: results.filter((r) => !r.correct).map((r) => r.id),
      correctIds: results.filter((r) => r.correct).map((r) => r.id),
    });
  }, [index, questions.length, recordQuiz, mode, results, isRetry]);

  // Re-run with only the questions answered wrong in this round.
  const retryMissed = useCallback(() => {
    const wrong = new Set(results.filter((r) => !r.correct).map((r) => r.id));
    setQuestions(shuffle(questions.filter((q) => wrong.has(q.id))));
    setIndex(0);
    setSelected(null);
    setResults([]);
    setFinished(false);
    setIsRetry(true);
  }, [results, questions]);

  return {
    questions,
    question,
    index,
    total: questions.length,
    selected,
    answered,
    isCorrect,
    correctCount,
    results,
    finished,
    choose,
    next,
    retryMissed,
  };
}
