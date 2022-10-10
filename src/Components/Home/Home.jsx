import React from 'react'
import styles from './Home.module.css'
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import img from '../../Img/code_1.png'

export default function Home() {
  return (
    <div>
      <div className={styles.home_main}>
        <div className={styles.home} id='home'>
          <div className={styles.text_me}>
          <h1>I'm John Angel Alvarez</h1>
          <p>Front-end developer</p>
          </div>
          <div className={styles.img}>
            <img src={img} alt="" />
          </div>
          <div className={styles.down}>
        <div className={styles.rotate}>
          <small><span>SCROLL DOWN </span></small>
        </div>
        <div className={styles.iconrotate}>
        <AiOutlineArrowRight size={20}/>
        </div>
        </div>
        </div>
        <div className={styles.redes_main}>
        <div className={styles.redes}>
            <a href="https://www.linkedin.com/in/john-angel-993992246/" target='_blank'><SiLinkedin/></a>
            <a href="https://github.com/John-Alz" target='_blank'><SiGithub/></a>
            <a href="https://api.whatsapp.com/send?phone=573144048308" target='_blank'><SiWhatsapp/></a>
            {/* <a href=""><SiTwitter/></a> */}
            {/* <a href=""><ImProfile/></a> */}
        </div>
        <div className={styles.correo}>
            <a href='' target='_blank'>jairoanngelll@gmail.com</a>
        </div>
        </div>
        </div>
    </div>
  )
}
