import React, { Component } from 'react';
import logo from "../assets/logo_nadayahia_uxui.png";

import "./Header.css";
import Navword from './Navword';
import Pageword from './Pageword';
import { Link } from 'react-router-dom';



const Header = () => {
    return ( 
        <>

        <header className='header'>
            <img src={logo} alt="Nada_logo_ux ui designer" />

             <nav class="nav">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
    <Pageword w="Home"  />
    </Link>

                <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
  <Navword word="Projects" to="/projects" style={{ textDecoration: "none", color: "inherit" }} /></Link>

                <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
  <Navword word="About me" to="/about" style={{ textDecoration: "none", color: "inherit" }} /></Link>

  
  <Navword word="Blogs"  />

                <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
  <Navword word="Contact me" to="/contact" style={{ textDecoration: "none", color: "inherit" }} /></Link>
  <Navword word="ع"/>

  </nav>


        </header>
     
        </>



     );
}
 
export default Header;