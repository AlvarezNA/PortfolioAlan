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
            <h3 className='about-sub-heading'>Developer</h3>
            <p className='about-sub-heading-details'>
              Soy <u>un desarrollador</u>.web autodidacta con una sólida base en la pila MERN (MongoDB, Express, React y Node.js) y un entusiasmo infinito por aprender y resolver problemas. Aunque no tengo experiencia profesional todavía, he trabajado en proyectos colaborativos y desafíos técnicos que me han permitido aplicar y mejorar mis habilidades.

Disfruto construir soluciones prácticas, desde aplicaciones web intuitivas hasta proyectos más técnicos, como el uso de inteligencia artificial para clasificar imágenes. Me destaco por mi capacidad de aprendizaje rápido, atención al detalle y pasión por mantenerme al día con las últimas tendencias tecnológicas.

Actualmente, busco mi primera oportunidad profesional en IT, donde pueda contribuir con mis conocimientos, seguir creciendo como desarrollador y formar parte de un equipo que comparta mi pasión por la tecnología.
            </p>
            <h3 className='about-sub-heading'>¿Qué puedo aportar?</h3>
            <p className='about-sub-heading-details'>
            Resolución de problemas: Experiencia desarrollando soluciones eficientes y organizadas, tanto en frontend como en backend.
            Adaptabilidad: Facilidad para aprender nuevas herramientas y trabajar en diferentes entornos.
            Trabajo en equipo: Experiencia en proyectos colaborativos durante cursos y desafíos, fomentando la comunicación efectiva.
            Pasión por aprender: En constante mejora, experimentando con tecnologías como IA, OpenCV, y el desarrollo full-stack.
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