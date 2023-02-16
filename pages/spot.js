import { useEffect, useState } from "react";
import styles from "../styles/spot.module.css";
import { apiService } from "../service/ApiService";
import Link from "next/link";
export default function spot() {
  
  const [state, setState] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setState(user => ({
      ...user, [name]: value
    }))
  }

  async function createSpot(){
    const data = await apiService.post("spots", state);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <input
          onChange={handleChange}
          type="text"
          className={styles.input}
          placeholder="adresse du kiosque"
          name="address"
        />

        <button className={styles.button} onClick={createSpot}>valider</button>

        <button><Link href="/choice">Retour</Link></button>
      </div>
    </div>
  );
}
