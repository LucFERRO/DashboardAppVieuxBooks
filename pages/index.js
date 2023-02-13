import styles from "../styles/Home.module.css";
import shadowBall from '../public/shadowBall.png'
import alakazam from '../public/mega alakazam.gif'

export default function Home() {
  return (
      <div className={styles.page}>
        <div className={styles.row}>
          <div className={styles.container}>
            <input type="text" placeholder="Identifiant" />
            <input type="text" maxLength={4} placeholder="Code PIN" />
            <button>Connexion</button>
          </div>
          <img src={shadowBall.src} className={styles.shadowBall}></img>
          <img src={alakazam.src} className={styles.img}></img>
          <img src={alakazam.src} className={styles.img}></img>
        </div>
      </div>
  );
}
