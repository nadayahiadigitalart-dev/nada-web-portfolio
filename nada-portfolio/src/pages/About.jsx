import React, { Component } from 'react';
import Row_Section from '../components/Row_Section';

import './About.css';

import nada from "../assets/nadayahiauxuidesignerillustration.svg";
import Skills_section from '../components/Skills_section';

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





    </div>
    
    
    </> );
}
 
export default About;