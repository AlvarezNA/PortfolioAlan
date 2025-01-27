import React from 'react'
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import linkedIn from "./../../assets/li.png";
import whatsApp from './../../assets/whatsapp.png';
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xbllnpyv");
  if (state.succeeded){
      setTimeout(() => {
        document.getElementById("contact-form").reset();
      }, 2500)
  }
  return (
    <div className='section-container'>
      <Header
        heading="Ponte en contacto."
        subHeading="Estoy a un correo de distancia, ¡escríbeme y conversemos!.">
      </Header>
      <div className='contact-form-container'>
        {
            state.succeeded &&
            <div className='alert'>
                Mensaje Enviado!
            </div>
        }
        <form className='contact-form' onSubmit={handleSubmit}
        id='contact-form'>
          <input type="email" className='input-box email-input'
            placeholder='Tu Email' name='email' required/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          <textarea type="text" placeholder='Tu mensaje' name='message'
            className='input-box body-input' required></textarea>
          <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
          <button type="submit" className="contact-btn"
          disabled={state.submitting}>
            Enviar Email
          </button>
        </form>
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/AlvarezNA"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github' loading="lazy"/>
        </a>
        <a href="https://www.linkedin.com/in/alan-alvarez-na"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin' loading="lazy"/>
        </a>
        <a href="https://wa.me/5491133859711" 
           className='social-icon' 
           target="_blank" rel="noreferrer">
        <img src={whatsApp} alt='whatsapp' loading="lazy" />
        </a>
      </div>
      <Footer
        phrase="Leer más "
        link="Sobre mi."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact