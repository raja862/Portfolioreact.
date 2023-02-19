import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Rajakumaran Nagarajan</h1>
            <p>A professional Full Stack Developer</p>
            <a href="https://1drv.ms/b/s!Al0DlkZXuZTZgR5gYCvTdIL39o6b?e=tS7Oc8" target={"blank"}>
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
