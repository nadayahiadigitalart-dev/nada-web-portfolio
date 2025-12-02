import React, { Component } from 'react';

import card1 from "../assets/Group 135.svg";
import card2 from "../assets/Group 112.svg";

import './Skills_section.css';


const Skills_section = () => {
    return ( <>

     <section class="cent">
      <img className="skillcard" src={card1} alt="skills" />
      <img className="uppercard" src={card2} alt="ux ui skills" />
      
    </section>
    
    </> );
}
 
export default Skills_section;