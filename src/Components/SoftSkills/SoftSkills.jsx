import React, { useEffect } from 'react'
import styles from './SoftSkills.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SoftSkills() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
        <div className={styles.softskills} id='softskills'>
            <div className={styles.tittle} data-aos="fade-right">
                <h1>Habilidades blandas</h1>
            </div>
            
            
            <div className={styles.habili}>
            <p data-aos="zoom-in-up">Adaptabiladad</p>
            <p data-aos="zoom-in-up">Trabajo en equipo</p>
            <p data-aos="zoom-in-up">Colaborativo</p>
            <p data-aos="zoom-in-up">Proactividad</p>
            <p data-aos="zoom-in-up">Comunciacion</p>
            <p data-aos="zoom-in-up">Creatividad</p>
            <p data-aos="zoom-in-up">Empatia</p>
            <p data-aos="zoom-in-up">Responsabilidad</p>
            </div>
            <div className={styles.rotate}>
          <small><span data-aos="zoom-in">SCROLL DOWN </span></small>
        </div>
        <div className={styles.iconrotate}>
            <span data-aos="zoom-in">
                <AiOutlineArrowRight  size={20}/>
            </span>
        
        </div>
        </div>
    </div>
  )
}
