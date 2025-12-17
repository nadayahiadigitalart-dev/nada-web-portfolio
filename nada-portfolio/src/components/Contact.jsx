import React, { Component } from 'react';

import './Contact.css';
import contact from "../assets/tablet for portfolio 1.png";
import Button from './Button';

const Contact = () => {
    return ( <>

       <section className="contact">
                <div className="cont_col">
                    <p className="f32">Let`s make something<br></br> great together!</p>
                    {/* <p className="lined_bu">Contact me</p> */}
                    <Button button="Contact me" />
                </div>
                <img src={contact} alt="contact me NadaYahia UX UI 3D Graphic Design"/>
            </section>
    
    </> );
}
 
export default Contact;