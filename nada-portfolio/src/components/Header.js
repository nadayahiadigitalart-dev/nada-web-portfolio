import React, { Component } from 'react';
import logo from "../assets/logo_nadayahia_uxui.png";

import "./Header.css";


const Header = () => {
    return ( 
        <>

        <header className='header'>
            <img src={logo} alt="Nada_logo_ux ui designer" />

             <nav class="nav">
    <p  className="f16_color">Home</p>
   <p  className="f16">Projects</p>
   <p  className="f16">About me</p>
  <p  className="f16">Blog</p>
   <p  className="f16">Contact</p>
   <p className="f16" >ع</p>
  </nav>


        </header>
     
        </>



     );
}
 
export default Header;