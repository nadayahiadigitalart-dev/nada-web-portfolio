import React, { Component } from 'react';
import { useState } from "react";
import logo from "../assets/logo_nadayahia_uxui.png";

import "./Header.css";
import Navword from './Navword';
import Pageword from './Pageword';
import { Link } from 'react-router-dom';
// import bggg from "../assets/nadalogobg.svg";
import bggg from "../assets/mg.svg";





const Header = () => {

  
  const [open, setOpen] = useState(false);


    return ( 
        <>

        {/* <br></br> */}
        {/* <br></br> */}

        <header className='header'>

<img className='lo' src={bggg} alt='nada_logo_img_background' />

            <img className='logoo' src={logo} alt="Nada_logo_ux ui designer" />

             {/* <nav class="nav"> */}
               <nav className={`nav ${open ? "open" : ""}`}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
    {/* <pageword w="Home"  /> */}
  <Navword word="Home" to="/" style={{ textDecoration: "none", color: "inherit" }} /></Link>

    

                <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
  <Navword word="Projects" to="/projects" style={{ textDecoration: "none", color: "inherit" }} /></Link>

                <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
  <Navword word="About me" to="/about" style={{ textDecoration: "none", color: "inherit" }} /></Link>

  
  <Navword word="Blogs"  />

                <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
  <Navword word="Contact me" to="/contact" style={{ textDecoration: "none", color: "inherit" }} /></Link>
  <Navword word="ع"/>
  {/* <div className='display'>☰
</div> */}

 {/* Mobile burger */}


  </nav>
  {/* <div className="burger">☰</div> */}
  <div className="burger" onClick={() => setOpen(!open)}>
  ☰
</div>


        </header>
     
        </>



     );
}
 
export default Header;