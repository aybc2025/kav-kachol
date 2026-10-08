import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { loadProgress, saveProgress, clearProgress, emptyProgress } from "../lib/storage.js";
import { UNITS } from "../content/units.js";

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => saveProgress(progress), [progress]);

  useEffect(() => {
    document.documentElement.dataset.text = progress.settings.textSize;
  }, [progress.settings.textSize]);

  const markStep = useCallback((unitId, step) => {
    setProgress((p) => {
      const prev = p.units[unitId] ?? { step: 0, done: false };
      if (prev.step === step && p.lastUnit === unitId) return p;
      return { ...p, lastUnit: unitId, units: { ...p.units, [unitId]: { ...prev, step } } };
    });
  }, []);

  const completeUnit = useCallback((unitId) => {
    setProgress((p) => {
      const prev = p.units[unitId] ?? { step: 0 };
      return { ...p, units: { ...p.units, [unitId]: { step: prev.step, done: true } } };
    });
  }, []);

  // unitId is null for mixed and mistakes-practice runs: those only update the mistakes list.
  const recordQuiz = useCallback(({ unitId, correct, total, missedIds, correctIds }) => {
    setProgress((p) => {
      const missed = new Set(p.missed);
      correctIds.forEach((id) => missed.delete(id));
      missedIds.forEach((id) => missed.add(id));
      const next = { ...p, missed: [...missed] };
      if (unitId) {
        const prev = p.quiz[unitId];
        const best = prev && prev.best / prev.total >= correct / total ? prev : { best: correct, total };
        next.quiz = { ...p.quiz, [unitId]: best };
      }
      return next;
    });
  }, []);

  const setTextSize = useCallback((textSize) => {
    setProgress((p) => ({ ...p, settings: { ...p.settings, textSize } }));
  }, []);

  const reset = useCallback(() => {
    clearProgress();
    setProgress((p) => ({ ...emptyProgress(), settings: p.settings }));
  }, []);

  const value = useMemo(
    () => ({ progress, markStep, completeUnit, recordQuiz, setTextSize, reset, ...summarize(progress) }),
    [progress, markStep, completeUnit, recordQuiz, setTextSize, reset]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

function summarize(progress) {
  const doneCount = UNITS.filter((u) => progress.units[u.id]?.done).length;
  const quizzes = Object.values(progress.quiz);
  const totals = quizzes.reduce((acc, q) => ({ best: acc.best + q.best, total: acc.total + q.total }), { best: 0, total: 0 });
  const accuracy = totals.total ? Math.round((totals.best / totals.total) * 100) : null;

  const last = progress.lastUnit && !progress.units[progress.lastUnit]?.done ? progress.lastUnit : null;
  const continueUnit = last ?? UNITS.find((u) => !progress.units[u.id]?.done)?.id ?? null;

  return { doneCount, accuracy, continueUnit };
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}
