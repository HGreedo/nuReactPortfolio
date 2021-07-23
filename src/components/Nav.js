import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className="navbar">
    <Link className="navbarData" to="/pages/About-Me">About Me</Link>
    <Link className="navbarData" to="/pages/IdaShop">Ida Andersson Shop</Link>
    <Link className="navbarData" to="/pages/Resume">Resume</Link>
    <Link className="navbarData" to="/pages/ThirdPtyLinks">Links</Link>
    <Link className="navbarData" to="/Home">Back to Home</Link>
      </nav>
    );
  };
  
  export default Nav;