import { useCallback, useEffect, useMemo, useState } from "react";
import { getLesson } from "../content/lessons/index.js";
import { useProgress } from "./useProgress.jsx";

export function useLesson(unitId) {
  const lesson = useMemo(() => getLesson(unitId), [unitId]);
  const { progress, markStep, completeUnit } = useProgress();

  const [step, setStep] = useState(() => {
    const saved = progress.units[unitId];
    if (!lesson || !saved || saved.done) return 0;
    return Math.min(saved.step, lesson.steps.length - 1);
  });

  useEffect(() => {
    if (lesson) markStep(unitId, step);
  }, [lesson, unitId, step, markStep]);

  const total = lesson?.steps.length ?? 0;
  const isFirst = step === 0;
  const isLast = step === total - 1;

  const next = useCallback(() => setStep((s) => Math.min(s + 1, total - 1)), [total]);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const finish = useCallback(() => completeUnit(unitId), [completeUnit, unitId]);

  return {
    lesson,
    step,
    total,
    current: lesson?.steps[step] ?? null,
    isFirst,
    isLast,
    next,
    prev,
    finish,
  };
}
