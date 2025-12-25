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
import Header from '../components/Header';


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
            const about = await Supabase.from("about").select("*").single()
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
    <Header />

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
            <R_Row t={about.role1} p={about.par1}  src={about.src1} />

{/* gameux    svg_ai    ieee_events */}

             <R_Row_reverse t={about.role2} p={about.par2} src={about.src2} />

             <R_Row t={about.role3} p={about.par3} src={about.src3} />
            </div>
        </div>


    </div>


{/* </>})} */}
    
    
    </> );
}
 
export default About;