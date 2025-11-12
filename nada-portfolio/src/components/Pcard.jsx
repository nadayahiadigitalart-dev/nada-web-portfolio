import React, { Component } from 'react';
import Button from './Button';
import Tag from './Tag';
import uxuiCard from "../assets/uxui_home_card.png";

import './Pcard.css';

const Pcard = (props) => {
    return (

<>
 <section className="proj_cards">
            <div className="x">
              <div className="card_title">
                <p className="f32">{props.t}</p>
                <div className="tags_layout">
                 <Tag tag="ui design"/>
                 <Tag tag="wireframe"/>
                 <Tag tag="prototype"/>
                 <Tag tag="design system"/>
                
                </div>
               <br></br><br></br>
              </div>
              <a className="a" href="UXUI_Projectdetails1.html">
               <Button button="Explore Work"/>
              </a>
            </div>
            <img  src={uxuiCard} alt="ux_ui_mockup_card" />
          </section>


</>


      );
}
 
export default Pcard;