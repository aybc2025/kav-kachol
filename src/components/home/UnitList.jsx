import { UNITS } from "../../content/units.js";
import { UnitRow } from "./UnitRow.jsx";
import styles from "./UnitList.module.css";

export function UnitList({ isDone, currentId }) {
  return (
    <section aria-labelledby="units-title">
      <h2 id="units-title" className="visually-hidden">
        יחידות לימוד
      </h2>
      <ol className={styles.list}>
        {UNITS.map((unit) => {
          let state = "new";
          if (isDone(unit.id)) state = "done";
          else if (unit.id === currentId) state = "current";
          return <UnitRow key={unit.id} unit={unit} state={state} />;
        })}
      </ol>
    </section>
  );
}
