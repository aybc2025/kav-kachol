import { Scene } from "../rink/Scene.jsx";
import { SignalFigure } from "../signals/SignalFigure.jsx";
import { OptionButton } from "./OptionButton.jsx";
import styles from "./QuestionCard.module.css";

// Short options (a word or two) sit two per row; longer ones get a full row each.
const isShort = (options) => options.every((o) => o.length <= 14);

export function QuestionCard({ question, selected, onChoose }) {
  const answered = selected !== null;
  return (
    <div className={styles.card}>
      <h1 className={styles.prompt}>{question.prompt}</h1>
      {question.scene ? (
        <div className={styles.frame}>
          <Scene key={question.id} scene={question.scene} flashKey={question.id} label={question.prompt} showCall={false} />
        </div>
      ) : null}
      {question.signal ? (
        <div className={styles.frame}>
          <SignalFigure id={question.signal} />
        </div>
      ) : null}
      <div className={`${styles.options} ${isShort(question.options) ? styles.two : ""}`} role="group" aria-label="תשובות">
        {question.options.map((text, i) => {
          let state = "idle";
          if (answered) {
            if (i === question.answer) state = "right";
            else if (i === selected) state = "wrong";
            else state = "dim";
          }
          return <OptionButton key={text} text={text} state={state} disabled={answered} onClick={() => onChoose(i)} />;
        })}
      </div>
    </div>
  );
}
