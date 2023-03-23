import React from 'react'
import './About.css'
import { Button, Typography, Avatar } from "@mui/material";



const About = () => {
    const visitInstagram = () => {
        window.location = "https://instagram.com/hasann.mansoori";
      };

  return (
    <div className="aboutSection">
    <div></div>
    <div className="aboutSectionGradient"></div>
    <div className="aboutSectionContainer">
      <Typography component="h1">About Us</Typography>

      <div>
        <div>
          <Avatar
            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            src="https://res.cloudinary.com/dhp3jxjo1/image/upload/v1679000720/avatars/aq4t9e0jzcixowizzn1c.jpg"
            alt="Founder"
          />
          <Typography>Hasan Raza</Typography>
          <Button onClick={visitInstagram} color="primary">
            Visit Instagram
          </Button>
          <span>
            This is a sample wesbite made by @hasan. 
          </span>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default About
