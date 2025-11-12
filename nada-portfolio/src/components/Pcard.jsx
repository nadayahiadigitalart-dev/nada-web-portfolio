import React, { Component } from 'react';
import Button from './Button';
import Tag from './Tag';


import './Pcard.css';

const Pcard = (props) => {
    return (

<>
 <section className="proj_cards">
            <div className="x">
              <div className="card_title">
                <p className="f32">{props.t}</p>
               
                 {/* <Tag tag1="ui design"/>
                 <Tag tag2="wireframe"/>
                 <Tag tag3="prototype"/>
                 <Tag tag4="design system"/> */}

                 

                
              
               <br></br><br></br>
              </div>
              <a className="a" href="UXUI_Projectdetails1.html">
               <Button button="Explore Work"/>
              </a>
            </div>
            <img  src={props.img} alt="ux_ui_mockup_card" />
          </section>


</>


      );
}
 
export default Pcard;