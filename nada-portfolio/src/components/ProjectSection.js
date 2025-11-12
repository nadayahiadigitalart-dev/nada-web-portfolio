import React, { Component } from 'react';

        // import React from "react";
        import showreelVideo from "../assets/Nad Yahia-22-101081-showreel2024--.mp4";
        import uxuiCard from "../assets/uxui_home_card.png";
        
        import './ProjectSection';
import Pcard from './Pcard';

const ProjectSection = () => {
    return ( 
        <>


    <main className="projects">
      <p className="f32">What services I offer ?</p>
      <section className="projects-section">
        <article className="horizontal-scroll">
         
            <Pcard />
          {/* <section className="proj_cards">
            <video autoPlay muted loop playsInline width="500" height="300" controls>
              <source src={showreelVideo} type="video/mp4" />
            </video>
          </section> */}
        </article>
      </section>
    </main> 
    </>
    
  );
};

export default ProjectSection;

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
