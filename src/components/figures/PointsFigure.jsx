import styles from "./Figures.module.css";

const ROWS = [
  { result: "ניצחון", points: 2 },
  { result: "הפסד בהארכה או בשוטאאוט", points: 1 },
  { result: "הפסד בזמן החוקי", points: 0 },
];

export function PointsFigure() {
  return (
    <div className={styles.board}>
      <table className={styles.points}>
        <caption className="visually-hidden">נקודות בטבלת ה-NHL</caption>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.result}>
              <th scope="row">{row.result}</th>
              <td className="ltr">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
