import React from 'react'
import "./Skills.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import skillsVector from "./../../assets/skills_vector.png";
import {skillList} from "./../../assets/skillsData";
import SkillCard from "./SkillCard.jsx";
function Skills() {
  return (
    <div className='section-container'>
      <Header
        heading="Skills"
        subHeading="Soy un apasionado de las nuevas tecnologías y disfruto explorarlas para resolver problemas reales. He trabajado con la pila MERN para desarrollar aplicaciones web modernas, integrando bases de datos NoSQL como MongoDB y creando APIs RESTful con Express."></Header>
      <div className='skill-card-container'>
      {
        skillList.map(({skillName, skillUrl}, index) =>  <SkillCard key={index} skillName={skillName}
          skillUrl={skillUrl}
          />)
      }
      </div>
      <Footer
        phrase="Contactame "
        link="aqui."
        toAddress="/contact"></Footer>
        <div className='skills-vector-frame'>
          <img src={skillsVector} alt="skill-vector"
          className='skills-vector' loading="lazy"
          />
        </div>
    </div>
  )
}

export default Skills