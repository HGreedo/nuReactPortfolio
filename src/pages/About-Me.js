import React from "react";
import img from "../images/linkedin.png"
import ('./aboutMe.css')


function About() {
 return (
    <div className="about-container">
            {<img className="profile-pic" alt ='profile-pic' src={img}/>    }
            <h1>Hello, I am Harrison</h1>
            <p>
            This is a working route I need to update accordingly 
            </p>
  </div>
        );
 }
export default About;