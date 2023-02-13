import styles from "../styles/Choice.module.css";
import box from "../public/box.jpg";
import livre from "../public/livre.jpg";

export default function choice() {
  return (
    <div className={styles.column}>
      <h1>Choix Categorie</h1>

      <div className={styles.row}>
        <div className={styles.card}>
          <img src={livre.src}></img>
        </div>
        <div className={styles.card}>
          <img src={box.src}></img>
        </div>
      </div>
    </div>
  );
}
