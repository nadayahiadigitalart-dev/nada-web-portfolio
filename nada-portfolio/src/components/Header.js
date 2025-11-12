import React, { Component } from 'react';
import logo from "../assets/logo_nadayahia_uxui.png";

import "./Header.css";
import Navword from './Navword';
import Pageword from './Pageword';



const Header = () => {
    return ( 
        <>

        <header className='header'>
            <img src={logo} alt="Nada_logo_ux ui designer" />

             <nav class="nav">
    <Pageword word="Home" />
  <Navword words="Projects"/>
  <Navword words="About me"/>
  <Navword words="Blogs"/>
  <Navword words="Contact me"/>
  <Navword words="ع"/>

  </nav>


        </header>
     
        </>



     );
}
 
export default Header;