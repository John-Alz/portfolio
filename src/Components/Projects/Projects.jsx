import React, { useEffect } from 'react'
import styles from './Projects.module.css'
import dogs from '../../Img/dogs.jpeg'
import rgb from '../../Img/rgb1.jpeg'
import { SiGithub } from 'react-icons/si';
import { SiGooglechrome } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

  return (
    <div>
        <div>
            <div className={styles.projects} id='projects'>
                <div className={styles.tittle} data-aos="fade-right">
                    <h1>Proyectos</h1>
                </div>
                <div className={styles.rotate}>
          <small><span data-aos="zoom-in">SCROLL DOWN </span></small>
        </div>
        <div className={styles.iconrotate}>
            <span data-aos="zoom-in">
                <AiOutlineArrowRight  size={20}/>
            </span>
        
        </div>
                <div className={styles.section_1}>
                    <div className={styles.text}>
                    <h2 data-aos="zoom-in-up">Wiki-dogs</h2>
                    <p data-aos="zoom-in-up">Aplicación creada con React y redux en la parte del front <br />
                    Y en la parte de back creada con postgresql, node y express. <br />
                    Se trata de un SPA en el cual puedes ordenar, buscar <br /> y crear nuevas razas de perros.</p>
                    <div className={styles.view} data-aos="zoom-in-up">
                    <a href="https://github.com/John-Alz/DOGS" target='_blank'><SiGithub/></a>
                    <a href="https://app-dogs-zeta.vercel.app/" target='_blank'><SiGooglechrome/></a>
                    </div>
                    </div>
                    <div className={styles.dogsw}>
                        <img data-aos="fade-down-left" src={dogs} alt="" />
                    </div>
                </div>
                <hr data-aos="zoom-in-up" />
                <div className={styles.section_2}>
                    <div className={styles.text_2}>
                    <h2 data-aos="zoom-in-up">E-commerce RGBtech</h2>
                    <p data-aos="zoom-in-up">Aplicación para RGBtech una tienda online de productos tecnológicos <br />
                     Desarrollada con un equipo de trabajo usando la metodología SCRUM<br />
                      Se desarrolló usando JavaScript, React, Redux toolkit, Tailwindcss, Node y SQL.</p>
                    <div className={styles.view} data-aos="zoom-in-up">
                    <a href="https://github.com/RGBTech-PF/rgbtech" target='_blank'><SiGithub/></a>
                    <a href="https://rgbtech.vercel.app/" target='_blank'><SiGooglechrome/></a>
                    </div>
                    </div>
                    <div className={styles.rgbw}>
                            <img data-aos="fade-up-left" src={rgb} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
