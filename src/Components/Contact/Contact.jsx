import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

    const [input, setInput] = useState({
        user_name: '',
        user_email: '',
        user_message: ''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        console.log(input);
    }

    const SendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zl6lxm3', 'template_ab1hxgg', e.target, 'YbzIpDaoXeNX4xMJK')
        .then(response => console.log(response))
        .catch(error => console.log(error))
        e.target.reset();
    }

  return (
    <div>
        <div className={styles.contact} id='contact'>
            <div>
            <div className={styles.tittle} data-aos="fade-right">
                <h1>Contactame.</h1>
            </div>
            <div className={styles.section_p}>
                <p data-aos="zoom-in-up">Siempre estoy abierto a discutir sobre <br /> tu propuesta
                 y hablar sobre cosas nuevas.</p>
            </div>
            <div className={styles.contact_main}>
                <div className={styles.section_contact}>
                <span data-aos="zoom-in-up">Mail me at.</span>
                <div className={styles.mail}>
                <a data-aos="zoom-in-up" href=''>jairoanngelll@gmail.com</a>
                </div>
            </div>
            <div className={styles.section_contact_me}>
                <span data-aos="zoom-in-up">Contact me</span>
                <div className={styles.section_icon}>
            <a data-aos="zoom-in-up" href="https://www.linkedin.com/in/john-angel-993992246/" target='_blank'><SiLinkedin/></a>
            <a data-aos="zoom-in-up" href="https://github.com/John-Alz" target='_blank'><SiGithub/></a>
            <a data-aos="zoom-in-up" href="https://api.whatsapp.com/send?phone=573144048308" target='_blank'><SiWhatsapp/></a>
            {/* <a data-aos="zoom-in-up" href=""><SiTwitter/></a> */}
                </div>
            </div>
            </div>
            </div>
            <div className={styles.form_main} data-aos="zoom-in">
                <form className={styles.form} onSubmit={SendEmail}>
                <div className={styles.form_container}>
                    <input name='user_name' type="text" className={styles.form_name} onChange={handleChange} placeholder='Tu nombre'/>
                    <input name='user_email' type="email" className={styles.form_mail} onChange={handleChange}  placeholder='Tu mail'/>
                    <textarea name='user_message' className={styles.form_message} onChange={handleChange}  placeholder='Tu mensaje'></textarea>
                    <input type="submit" value='Enviar' className={styles.form_cta}/>
                </div>
            </form>
            </div>
            </div>
    </div>
  )
}
