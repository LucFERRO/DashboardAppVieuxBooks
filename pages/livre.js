import { useEffect, useState } from 'react'
import styles from '../styles/livre.module.css'
import {apiService} from '../service/ApiService'
import Link from 'next/link'

export default function livre() {

  const [spots, setSpots] = useState(null)

  const [state, setState] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setState(user => ({
      ...user, [name]: value
    }))
  }

  async function createBook(){
    const data = await apiService.post("books", state);
  }


  useEffect(() => {
    getSpot();
  }, [])

  async function getSpot(){
    const spotList = await apiService.get("spots");
    setSpots(spotList.data);
  }

  if(spots == null) {
    return <div>
      <p>En cours</p>
    </div>
  }


  return (
    <div className={styles.body}>
        <div className={styles.container}>
        <input type="text" placeholder="name" name='name'  onChange={handleChange}/>
        <input type="text" placeholder="Auteur" name='author' onChange={handleChange}/>
        <select name='spot_id' onChange={handleChange}>
          <option selected hidden>--Choisissez une adresse--</option>
          {spots.map((spot, index) => {
            return <option key={index} value={spot._id}> {spot.address} </option>
          })}

        </select>
        <button className={styles.button} onClick={createBook}>valider</button>
        <button><Link href="/choice">Retour</Link></button>
        </div>
    </div>
  )
}
