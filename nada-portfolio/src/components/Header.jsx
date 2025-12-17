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
    <Pageword w="Home" />
  <Navword word="Projects"/>
  <Navword word="About me"/>
  <Navword word="Blogs"/>
  <Navword word="Contact me"/>
  <Navword word="ع"/>

  </nav>


        </header>
     
        </>



     );
}
 
export default Header;