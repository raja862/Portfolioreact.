import React from 'react'
import  {Element } from 'react-scroll'
// import { IconButton } from '@mui/material';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="Contact">
         <h1>Contact</h1>
         <div className="contact__container">
            <p>
                Email:<span>rajakumaranmuni@gmail.com</span>
            </p>
            <p>
                Github Username:<span>raja862</span>
            </p>
            <p>
                Mobile Number:<span>8667593738</span>
            </p>
            {/* <div className="contact__icons">
                 <a href="https://www.linkedin.com/in/s-pradheep-9b8b17130">
                    <IconButton>
                     <LinkedInIcon/>
                    </IconButton>
                 </a>
                 <a href="google.com">
                    <IconButton>
                     <FacebookIcon/>
                    </IconButton>
                 </a>
                 <a href="google.com">
                    <IconButton>
                     <InstagramIcon/>
                    </IconButton>
                 </a>
            </div> */}


         </div>
    </Element>
  )
}

export default Contact
