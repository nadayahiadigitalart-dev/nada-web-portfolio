import React, { Component } from 'react';
import Row_Section from '../components/Row_Section';

import './About.css';

import nada from "../assets/nadayahiauxuidesignerillustration.svg";
import Skills_section from '../components/Skills_section';
import R_Row from '../components/R_Row';
import R_Row_reverse from '../components/R_Row_reverse';
import gameux from '../assets/sandoftime.png';
import svg_ai from '../assets/aidesignmentor.svg';
import ieee_events from '../assets/ieee_events.png';


const About = () => {

    




    return ( <>

    <div className='main'>

        <section className='row'>
            <div className='col'>
                <p className='f40'>Who am I?</p>
                <p className='text'>-Digital art & Design student studying in Egypt university of Informatics.<br></br><br></br>

-Majoring in UX UI Design Program and learned lots of things like Graphic design, Branding Design, 3D Design, Front-end Programming (html, css, JavaScript, React), Digital painting, Illustration and Photography.<br></br><br></br>

-Worked on various projects, took many roles in different projects, participated in clubs as UX UI designer, multimedia & design member, organizer and now as a head of design in one of these clubs in my University</p>
            </div>
                <img src={nada} alt='nadayahia_uxuidesigner_illustration' />
        </section>

        <Skills_section />


        <div className='cent_roles'>
            <p className='t'>Roles I experenced while working on projects</p>
            <div className='col_roles'>
            <R_Row t="Sands of time website & AR Game" p='As an Interaction designer in this project, 
            I worked on creating wireframes, uderstanding how users interact & lead him in VR game 
            and was responsible for making animations in website, game.'  src={gameux} />

             <R_Row_reverse t="AI Design Mentor App" p='I had the opportunity to act as product manager 
             in a team. where I gained leadership skills and understand the relationship between 
             UX UI Design &  business needs.' src={svg_ai} />

             <R_Row t="IEEE SB website" p='As a UX UI designer I worked with team to create an 
             official website for IEEE. I analyzing usability issues & suggested what to enhance 
             or change, created mood board &  collaborating closely with my team to create the final 
             handoff-ready design.' src={ieee_events} />
            </div>
        </div>


    </div>
    
    
    </> );
}
 
export default About;