import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material';
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/246196591/original/8bf59402cda3a0bb8ce57fe7b1f245205707a5b1/develop-web-application-by-using-mern-stack.png" alt=""/>
         </div>
         <div className="skillContainer__text">
            <h2>SKILLS</h2>
          <div className="skillContainer__skillSet">
            <h5>React</h5>
            <div className="skillContainer__slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Node.js</h5>
            <div className="skillContainer__slider skillContainer__slider2">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Javascript</h5>
            <div className="skillContainer__slider skillContainer__slider3">
              <LinearProgress variant="determinate" value={85} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>AWS</h5>
            <div className="skillContainer__slider skillContainer__slider4">
              <LinearProgress variant="determinate" value={65} />
            </div>
          </div>
             <div className="skillContainer__skillSet">
            <h5>HTML</h5>
            <div className="skillContainer__slider skillContainer__slider5">
              <LinearProgress variant="determinate" value={89} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>CSS</h5>
            <div className="skillContainer__slider skillContainer__slider6">
              <LinearProgress variant="determinate" value={91} />
            </div>
          </div>
          </div>
          
        

    </Element>
      
    
  )
}

export default SkillContainer
