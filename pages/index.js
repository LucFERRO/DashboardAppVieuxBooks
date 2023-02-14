import styles from "../styles/Home.module.css";
import shadowBall from "../public/shadowBall.png";
import alakazam from "../public/mega alakazam.gif";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import thunder1 from "../public/gsap/thunder1.png";

export default function Home() {
  const shadowBallRef = useRef(null);
  const ThunderRef = useRef(null);
  const thunder1Ref = useRef(null);
  const thunder1Ref2 = useRef(null);
  const thunder1Ref3 = useRef(null);
  const thunder1Ref4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      shadowBallRef.current,
      {
        rotate: 0,
      },
      {
        rotate: 360,
        repeat: -1,
        duration: 2,
        ease: "none",
      }
    );

    // gsap.fromTo(
    //   thunder1Ref.current,
    //   {
    //     rotate: 0,
    //     scale:0
    //   },
    //   {
    //     rotate: -360,
    //     repeat: -1,
    //     duration: 2,
    //     ease: "none",
    //     transformOrigin:"56% 0%",
    //     scale: .5,
    //     // yoyo: true
    //   }
    // );
    gsap.timeline()
      .fromTo(ThunderRef.current.children ,{

            rotate: 0,
            scale:0,
            opacity: 3
          },
          {
            transformOrigin:"56% 0%",
            repeat: -1,
            repeatRefresh: true,
            ease: "none",
            duration: 2,
            stagger:"random(0.2, 5)",
            delay:"random(0.2, 5)",
            rotate: "random(-360, 360)",
            scale: .5,
            opacity: 0
            // yoyo: true
          })
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.row}>
        <div className={styles.container}>
          <input type="text" placeholder="Identifiant" />
          <input type="text" maxLength={4} placeholder="Code PIN" />
          <button>
            <Link href="/choice">Connexion</Link>
          </button>
        </div>
        <div className={styles.containerShadowball}>
          <img
            ref={shadowBallRef}
            src={shadowBall.src}
            className={styles.shadowBall}
          ></img>
          <div ref={ThunderRef} className={styles.thunders}>
            <img ref={thunder1Ref} src={thunder1.src}></img>
            <img ref={thunder1Ref2} src={thunder1.src}></img>
            <img ref={thunder1Ref3} src={thunder1.src}></img>
            <img ref={thunder1Ref4} src={thunder1.src}></img>
          </div>
        </div>
        <img src={alakazam.src} className={styles.img}></img>
        <img src={alakazam.src} className={styles.img}></img>
      </div>
    </div>
  );
}
