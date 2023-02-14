import styles from "../styles/Choice.module.css";
import box from "../public/box.jpg";
import livre from "../public/livre.jpg";
import Link from "next/link";
import LivreFeu from '../public/LivreFeu.jpg'
import QR from '../public/frame.png'
export default function choice() {
  return (
    <div className={styles.column}>
      <h1>Choix Categorie</h1>

      <div className={styles.row}>
        <div className={styles.card}>
          <img src={livre.src} onClick={() => window.location="livre"}></img>
        </div>


        <div className={styles.card}>
          <img src={LivreFeu.src} onClick={() => window.location="rmBooks"}></img>
        </div>

        <div className={styles.card}>
          <img src={QR.src} onClick={() => window.location="qrCode"}></img>
        </div>
        <div className={styles.card}>
          <img src={box.src} onClick={() => window.location="spot"}></img>
        </div>
      </div>
      <button><Link href="/">Retour</Link></button>
    </div>
  );
}
