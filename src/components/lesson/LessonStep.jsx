import { StepVisual } from "./StepVisual.jsx";
import { StepDots } from "./StepDots.jsx";
import { RichText } from "./RichText.jsx";
import { CallTag } from "../figures/CallTag.jsx";
import styles from "./LessonStep.module.css";

export function LessonStep({ step, index, total, iihfNote }) {
  const call = step.scene?.call;
  return (
    <article className={styles.step}>
      <h1 className={styles.heading}>{step.heading}</h1>
      <StepVisual item={step} flashKey={index} label={step.heading}>
        <StepDots current={index} total={total} />
      </StepVisual>
      {call ? <CallTag key={index} call={call} /> : null}
      <RichText text={step.body} className={styles.body} />
      {iihfNote ? (
        <aside className={styles.note}>
          <h2 className={styles.noteTitle}>ומה ב-IIHF?</h2>
          <p>{iihfNote}</p>
        </aside>
      ) : null}
    </article>
  );
}
