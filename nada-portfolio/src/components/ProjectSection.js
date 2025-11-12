import React, { Component } from 'react';

        import React from "react";
import uxuiCard from "../assets/uxui_home_card.png";
import showreelVideo from "../assets/Nad Yahia-22-101081-showreel2024--.mp4";

import './ProjectSection.css';

const ProjectSection = () => {
    return ( 
        <>
        



    <main className="projects">
      <p className="f32">What services I offer ?</p>
      <section className="projects-section">
        <article className="horizontal-scroll">
          <section className="proj_cards">
            <div className="x">
              <div className="card_title">
                <p className="f32">UX / UI Design </p>
                <div className="tags_layout">
                  <p className="tag">ux research</p>
                  <p className="tag">ui design</p>
                  <p className="tag">wireframe</p>
                  <p className="tag">prototype </p>
                  <p className="tag">design system </p>
                </div>
                <br /><br /><br />
              </div>
              <a className="a" href="UXUI_Projectdetails1.html">
                <p className="lined_bu">Explore work</p>
              </a>
            </div>
            <img className="margin_photo_card" src={uxuiCard} alt="ux_ui_mockup_card" />
          </section>

          <section className="proj_cards">
            <video autoPlay muted loop playsInline width="500" height="300" controls>
              <source src={showreelVideo} type="video/mp4" />
            </video>
          </section>
        </article>
      </section>
    </main> 
    </>
    
  );
};

export default ProjectSection;

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
