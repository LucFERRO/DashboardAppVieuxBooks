import React from 'react'
import { apiService } from "../service/ApiService";
import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";
import styles from "../styles/QrCode.module.css";
import Link from "next/link";

export default function qrMembre() {
  const { Canvas } = useQRCode();
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
    const livreList = await apiService.get("list");
    setLivres(livreList.data);
  }

  if (livres == null) {
    return <div>en cours</div>;
  }

  if (state == null) {
    return (
      <div className={styles.page}>
        <div className={styles.column}>
          <h1>Recuperer le QRCode</h1>
          <select name="_id" onChange={handleChange}>
            <option selected hidden>
              --Choisissez une personne--
            </option>
            {livres.map((livres, index) => {
              return (
                <option key={index} value={livres.code}>
                  {" "}
                  {livres.name}{" "}
                </option>
              );
            })}
          </select>

          <div className={styles.row}>

            <button>
              <Link href="/qrCode">qrCode livre</Link>
            </button>
            <button>
              <Link href="/choice">Retour</Link>
            </button>
            <button>
              <Link href="/qrSpot">qrCode Spot</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <h1>Recuperer le QRCode</h1>
        <select name="_id" onChange={handleChange}>
          <option selected hidden>
            --Choisissez une personne--
          </option>
          {livres.map((livres, index) => {
            return (
              <option key={index} value={livres.code}>
                {" "}
                {livres.name}{" "}
              </option>
            );
          })}
        </select>

        {/* TOFDO faire un json propre */}
        <Canvas
          text={`{memberCard: "${state._id}"}`}
          options={{
            level: "M",
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: "#010599FF",
              light: "#FFFFFFFF",
            },
          }}
        />
        <div className={styles.row}>

          <button>
            <Link href="/qrCode">qrCode livre</Link>
          </button>
          <button>
            <Link href="/choice">Retour</Link>
          </button>
          <button>
            <Link href="/qrSpot">qrCode Spot</Link>
          </button>

        </div>
      </div>
    </div>
  );
}
