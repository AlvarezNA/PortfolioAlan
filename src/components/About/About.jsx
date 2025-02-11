import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className='section-container'>
      <Header
        heading="Sobre Mi"
        subHeading="Full stack developer">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>¡Hola!</h3>
            <p className='about-sub-heading-details'>
              Soy un <u>Apasionado</u>👋 de la programación y la tecnología, estudiando de forma autodidacta para convertirme en desarrollador profesional. A lo largo de mi aprendizaje, he realizado varios cursos y proyectos colaborativos que me han permitido adquirir experiencia práctica en el desarrollo de aplicaciones y soluciones.

💻 Mis habilidades incluyen trabajar con tecnologías como como CSS,SASS,JavaScript, React, Node.js,Mongodb,Python,PHP,SQL, Me entusiasma aprender continuamente y enfrentar nuevos retos que me permitan crecer tanto personal como profesionalmente.

🚀 Estoy buscando mi primera experiencia laboral en el mundo de la programación, donde pueda aportar mis conocimientos, trabajar en equipo y seguir desarrollándome como profesional.

¡Conectemos para compartir ideas o explorar oportunidades!
            </p>
            <h3 className='about-sub-heading'>¿Qué puedo aportar?</h3>
            <p className='about-sub-heading-details'>
            Resolución de problemas: Experiencia desarrollando soluciones eficientes y organizadas, tanto en frontend como en backend.
            Adaptabilidad: Facilidad para aprender nuevas herramientas y trabajar en diferentes entornos.
            Trabajo en equipo: Experiencia en proyectos colaborativos durante cursos y desafíos, fomentando la comunicación efectiva.
            Pasión por aprender: En constante mejora.

            </p>
        </div>
        <div className='about-main-right'>
            <img
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer
        phrase="Mira mis  "
        link="Proyectos!"
        toAddress="/Projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default About