import React, { useEffect } from 'react'
import { ImProfile } from 'react-icons/im';
import { MdOutlineComputer } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/ri';
import styles from './InfoMe.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function InfoMe() {

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

  return (
    <div id='info'>
        <div className={styles.info_container} id='info'>
            <div className={styles.tittle} data-aos="fade-right">
                <h1>¿Quien soy?</h1>
            </div>
        <div className={styles.parrafo}>
            <p data-aos="zoom-in-up">Hola a todos!, soy John Angel. <br />
            Soy un desarrollador web Full Stack con inclinación hacia el desarrollo FrontEnd y el diseño de aplicaciones web. <br />
            Siempre dispuesto a trabajar en equipo y con gran interés en estar en constante aprendizaje, <br /> recientemente he estado trabajado en algunos proyectos, los cuales puedes encontrar en el apartado de "proyectos". <br />
            Me apasiona el software y los nuevos desafíos ¿Quieres saber más de mí?  Contáctame.</p>
            
        </div>
        <div className={styles.icons_p} data-aos="fade-up"
     data-aos-duration="3000">
        <div className={styles.icon_1} >
        <RiComputerLine size={60}/>
        </div>
        <div className={styles.icon_2} >
        <MdOutlineComputer size={60}/>
        </div>
        <div className={styles.icon_3}>
        <FiSmartphone size={60}/>
        </div>
        </div>
        </div>
    </div>
  )
}
