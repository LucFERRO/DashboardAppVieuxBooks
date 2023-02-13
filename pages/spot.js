import styles from "../styles/spot.module.css";

export default function spot() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <input
          type="text"
          className={styles.input}
          placeholder="adresse du kiosque"
        />

        <button className={styles.button}>valider</button>
      </div>
    </div>
  );
}
