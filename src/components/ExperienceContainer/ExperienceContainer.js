import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id='exp'>
    <h1>Experience</h1>
    <div className="experienceContainer__info">
        <Experience number="+5 month" title="Front End React,HTML,CSS"/>
        <Experience number="+5 month" title="Back End Node Js,Database mongoess"/>
        <Experience number="+4" title="Projects" style={{backgroundColor:"#f64c08"}}/>
        
    </div>
    </Element>
  )
}

export default ExperienceContainer
