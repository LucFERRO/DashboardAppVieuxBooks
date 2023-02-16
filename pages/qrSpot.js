import { apiService } from "../service/ApiService";
import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";
import styles from "../styles/QrCode.module.css";
import Link from "next/link";

export default function qrSpot() {
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
        const livreList = await apiService.get("spots");
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
                            --Choisissez un spot--
                        </option>
                        {livres.map((livres, index) => {
                            return (
                                <option key={index} value={livres._id}>
                                    {" "}
                                    {livres.address}{" "}
                                </option>
                            );
                        })}
                    </select>
                    <div className={styles.row}>

                        <button>
                            <Link href="/qrMembre">qrCode personne</Link>
                        </button>
                        <button>
                            <Link href="/choice">Retour</Link>
                        </button>
                        <button>
                            <Link href="/qrCode">qrCode livre</Link>
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
                        --Choisissez un spot--
                    </option>
                    {livres.map((livres, index) => {
                        return (
                            <option key={index} value={livres._id}>
                                {" "}
                                {livres.address}{" "}
                            </option>
                        );
                    })}
                </select>

                {/* TOFDO faire un json propre */}
                <Canvas
                    text={`{spotId: "${state._id}"}`}
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
                        <Link href="/qrMembre">qrCode personne</Link>
                    </button>
                    <button>
                        <Link href="/choice">Retour</Link>
                    </button>
                    <button>
                        <Link href="/qrCode">qrCode livre</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
