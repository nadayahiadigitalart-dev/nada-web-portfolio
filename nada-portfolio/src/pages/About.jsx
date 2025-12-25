import React, { Component, useEffect, useState } from 'react';
import Row_Section from '../components/Row_Section';

import './About.css';

import nada from "../assets/nadayahiauxuidesignerillustration.svg";
import Skills_section from '../components/Skills_section';
import R_Row from '../components/R_Row';
import R_Row_reverse from '../components/R_Row_reverse';
import gameux from '../assets/sandoftime.png';
import svg_ai from '../assets/aidesignmentor.svg';
import ieee_events from '../assets/ieee_events.png';
import { Supabase } from '../Supabase';


const About = () => {

            const [about, setAbout] = useState([{ }]);

    //         id:"",
    //         title:"",
    //         cover_img:"",
    //         images:""
    // }]);

            // const [about, setAbout] = useState([{}]);

    
        useEffect(()=>{
            
        async function CallGetAPI() {
            const projects = await Supabase.from("about").select("*")
            setAbout(about.data);
            // console.log(projects);
    
            
            }
    
             CallGetAPI();
    
        },[]
        )
    
    




    return ( <>

{/* {about[0].category.map((c)=>{ */}
                {/* return <> */}
                 {/* <p>{c}</p> */}
            

    <div className='main'>

        <section className='row'>
            <div className='col'>
                <p className='f40'>{about.title_about}</p>
                <p className='text'>{about.par}</p>
            </div>
                <img src={nada} alt='nadayahia_uxuidesigner_illustration' />
        </section>

        <Skills_section />


        <div className='cent_roles'>
            <p className='t'>Roles I experenced while working on projects</p>
            <div className='col_roles'>
            <R_Row t={about.role1} p='As an Interaction designer in this project, 
            I worked on creating wireframes, uderstanding how users interact & lead him in VR game 
            and was responsible for making animations in website, game.'  src={about.src1} />

{/* gameux    svg_ai    ieee_events */}

             <R_Row_reverse t={about.role2} p='I had the opportunity to act as product manager 
             in a team. where I gained leadership skills and understand the relationship between 
             UX UI Design &  business needs.' src={about.src1} />

             <R_Row t={about.role3} p='As a UX UI designer I worked with team to create an 
             official website for IEEE. I analyzing usability issues & suggested what to enhance 
             or change, created mood board &  collaborating closely with my team to create the final 
             handoff-ready design.' src={about.src1} />
            </div>
        </div>


    </div>


{/* </>})} */}
    
    
    </> );
}
 
export default About;