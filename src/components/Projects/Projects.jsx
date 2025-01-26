import React from 'react'
import "./Projects.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import {projectsData} from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard.jsx";
function Projects() {
  return (
    <div className='section-container'>
    <Header
        heading="Mis Proyectos."
        subHeading="Estos son algunos de los trabajos más interesantes que he realizado, ¡dale un vistazo!">
      </Header>
      <div className='project-cards-container'>
      {
        projectsData.map(({
          projectName,
          projectDescription,
          imageUrl,
          projectUrl
        }, index) => {
          return (<ProjectCard key={index}
          projectName={projectName}
          projectDescription={projectDescription}
          imageUrl={imageUrl}
          projectUrl={projectUrl}
        />);
        })
      }
      </div>
      <Footer
        phrase="Descubre "
        link="Mis Habilidades"
        toAddress="/skills">
      </Footer>
    </div>
  )
}

export default Projects