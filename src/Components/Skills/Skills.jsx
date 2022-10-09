import React, { useEffect } from 'react'
import styles from './Skills.module.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
        <div className={styles.skills} id='tecnologias'>
            <h1 data-aos="fade-right">Tecnologias</h1>
        </div>
        <div className={styles.icons}>
              <div className={styles.logos_1} data-aos="fade-up"
             data-aos-anchor-placement="center-bottom">
                     <div>
                            <AiFillHtml5 size={50}/>
                     </div>
                     <div>
                            <h3>HTML 5</h3>
                     </div>
              </div>
              
              <div className={styles.logos_1} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                            <DiCss3 size={50}/>
                     </div>
                     <div>
                            <h3>CSS 3</h3>
                     </div>
              </div>

              <div className={styles.logos_1} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                            <SiTailwindcss size={50}/>
                     </div>
                     <div>
                            <h3>Tailwindcss</h3>
                     </div>
              </div>

              <div className={styles.logos_2} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                            <SiJavascript size={50}/>
                     </div>
                     <div>
                            <h3>JavaScript</h3> 
                     </div>
              </div>

              <div className={styles.logos_2} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                            <FaReact size={50}/>
                     </div>
                     <div>
                            <h3>React</h3>
                     </div>
              </div>

              <div className={styles.logos_2} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                     <SiRedux size={50}/>
                     </div>
                     <div>
                     <h3>Redux</h3>
                     </div>
              </div>
              <div className={styles.linea_1} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <hr />
              </div>
              <div className={styles.linea_2} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <hr />
              </div>
              <div className={styles.linea_3} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <hr />
              </div>

              <div className={styles.logos_3} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                     <SiNodedotjs size={50}/>
                     </div>
                     <div>
                     <h3>Node</h3>
                     </div>
              </div>

              <div className={styles.logos_3} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                     <SiPostgresql size={50}/>
                     </div>
                     <div>
                     <h3>Postgresql</h3>
                     </div>
              </div>

              <div className={styles.logos_3} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                     <div>
                     <SiGit size={50}/>
                     </div>
                     <div>
                     <h3>Git</h3>
                     </div>
              </div>

        </div>
    </div>
  )
}
