import styles from "../styles/Home.module.css";
import shadowBall from "../public/shadowBall.png";
import alakazam from "../public/mega alakazam.gif";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import thunder0 from "../public/gsap/thunder0.png";
import thunder1 from "../public/gsap/thunder1.png";
import thunder2 from "../public/gsap/thunder2.png";
import { apiService } from "../service/ApiService";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const shadowBallRef = useRef(null);
  const thunder0Ref = useRef(null);
  const ThunderRef = useRef(null);
  const thunder1Ref = useRef(null);
  const thunder1Ref2 = useRef(null);
  const thunder1Ref3 = useRef(null);
  const thunder1Ref4 = useRef(null);
  const thunder1Ref5 = useRef(null);
  const thunder1Ref6 = useRef(null);

  const thunder2Ref = useRef(null);
  const thunder2Ref2 = useRef(null);
  const thunder2Ref3 = useRef(null);
  const thunder2Ref4 = useRef(null);
  const thunder2Ref5 = useRef(null);
  const thunder2Ref6 = useRef(null);


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

    gsap.fromTo(
      thunder0Ref.current,
      {
        rotate: 0,
        opacity: .4,
      },
      {
        rotate: -360,
        repeat: -1,
        duration: 2,
        ease: "none",
        opacity: .1
        // yoyo: true
      }
    );

    gsap.timeline()
      .fromTo(ThunderRef.current.children, {

        rotate: 0,
        scale: 0,
        opacity: 3
      },
        {
          transformOrigin: "56% 0%",
          repeat: -1,
          repeatRefresh: true,
          ease: "none",
          duration: 2,
          stagger: "random(0.2, 5)",
          delay: "random(0.2, 5)",
          rotate: "random(-360, 360)",
          scale: .5,
          opacity: 0
          // yoyo: true
        })
  }, []);

  const [state, setState] = useState(null);


  function handleChange(e) {
    const { name, value } = e.target;
    setState(user => ({
      ...user, [name]: value
    }))
  }

  async function login(){
    const data = await apiService.login(state);
    if(data.data){
      window.location = '/choice'
    }
  }


  return (
    <div className={styles.page}>
      <div className={styles.row}>
        <div className={styles.container}>
          <input type="text" placeholder="Identifiant" name="name" onChange={handleChange}/>
          <input type="text" maxLength={10} name="code" placeholder="Code PIN" onChange={handleChange}/>
          <button onClick={login}>
            {/* <Link href="/choice">Connexion</Link> */}
            Connexion
          </button>
        </div>
        <div className={styles.containerShadowball}>
          <img
            ref={shadowBallRef}
            src={shadowBall.src}
            className={styles.shadowBall}
          ></img>

            <img ref={thunder0Ref} src={thunder0.src}  className={styles.thunderRings}></img>

          <div ref={ThunderRef} className={styles.thunders}>


            <img ref={thunder1Ref} src={thunder1.src}></img>
            <img ref={thunder1Ref2} src={thunder1.src}></img>
            <img ref={thunder1Ref3} src={thunder1.src}></img>
            <img ref={thunder1Ref4} src={thunder1.src}></img>
            <img ref={thunder1Ref5} src={thunder1.src}></img>
            <img ref={thunder1Ref6} src={thunder1.src}></img>

            <img ref={thunder2Ref} src={thunder2.src}></img>
            <img ref={thunder2Ref2} src={thunder2.src}></img>
            <img ref={thunder2Ref3} src={thunder2.src}></img>
            <img ref={thunder2Ref4} src={thunder2.src}></img>
            <img ref={thunder2Ref5} src={thunder2.src}></img>
            <img ref={thunder2Ref6} src={thunder2.src}></img>


          </div>
        </div>
        <img src={alakazam.src} className={styles.img}></img>
        <img src={alakazam.src} className={styles.img}></img>
      </div>
    </div>
  );
}
