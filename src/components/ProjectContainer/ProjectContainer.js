import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./ProjectContainer.css";
const ProjectContainer = () => {

    const projects=[
        {
         img:"https://png.pngtree.com/png-vector/20210914/ourlarge/pngtree-calculator-with-big-display-png-image_3929175.jpg",
            title:"calucator",
            link:"https://cheery-marigold-199719.netlify.app"
        },
        {
            img:"https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=400",
            title:"Social-Blog",
            // desc:" website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
            link:"https://github.com/Pradheeptmr/Social-Blog"
        },
        {
          img:"https://c8.alamy.com/comp/2FME3ED/financial-management-vector-illustration-concept-with-characters-modern-flat-style-for-landing-page-mobile-app-poster-flyer-template-web-banner-2FME3ED.jpg",
          title:"Money Manager",
          // desc:" website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
          link:"https://raja-trifle-e0accd.netlify.app"
      },
        {
            img:"https://img.freepik.com/free-vector/furniture-shopping-app-collection_23-2148650135.jpg",
            title:"Online Shoping React",
            
            link:"https://lovely-queijadas-7a74f3.netlify.app"
        },
    ]
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some project which done for making lives of people easy
      </p>
      <div className="projectContainer__projects">
    {
        projects.map((project,index)=>{
            return (
                <Project
                 key={index} 
                 img={project.img} 
                 title={project.title} 
                 desc={project.desc} 
                 link={project.link} 
                 />
            )
        })
    }

      </div>
    </Element>
  )
}

export default ProjectContainer
