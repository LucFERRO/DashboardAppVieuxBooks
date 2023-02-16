import styles from "../styles/rmBooks.module.css";
import { useEffect, useState } from "react";
import { apiService } from "../service/ApiService";
import Link from "next/link";
export default function rmBooks() {
  const [livres, setLivres] = useState(null);

  const [state, setState] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setState((user) => ({
      ...user,
      [name]: value,
    }));
  }

  useEffect(() => {
    getLivres();
  }, []);

  async function getLivres() {
    const livreList = await apiService.get("books");
    setLivres(livreList.data);
  }

  if (livres == null) {
    return (
      <div>
        <p>En cours</p>
      </div>
    );
  }

  async function auFeu(event) {
    const livreList = await apiService.delete(`books/${state._id}`);
    getLivres();
  }

  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <h1>Suppression d'un livre</h1>
        <select name="_id" onChange={handleChange}>
          <option selected hidden>
            --Choisissez un livre--
          </option>
          {livres.map((livre, index) => {
            return (
              <option key={index} value={livre._id}>
                {" "}
                {livre.name}{" "}
              </option>
            );
          })}
        </select>

        <button onClick={auFeu}>Au feu !!!</button>
        <button><Link href="/choice">Retour</Link></button>
      </div>
    </div>
  );
}
