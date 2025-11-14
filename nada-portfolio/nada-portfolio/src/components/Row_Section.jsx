import React, { Component } from 'react';

import UXUILAP from "../assets/ux ui laptop soundfix.svg";
import "./Row_section.css";
import Button from './Button';

const Row_Section = (props) => {
    return ( 

        <>

        <section className="see">

        <img className="mockup1" src={UXUILAP} alt="UX UI MOCKUP1_NADAYAHIA"/>
        <div className="col" >
            <p className="f32">{props.f32}</p>
            <p className="f20_pink">{props.f20_pink}</p>
            {/* <p className="lined_bu">
                View UX UI Project
            </p> */}

          <Button button="UX UI Project" />



        </div>

    </section>
        
        
        
        
        
        </>




     );
}
 
export default Row_Section;