import React from 'react';

import Header from "../components/Header"; 
import Hero from '../components/Hero';
import Row_Section from '../components/Row_Section';
import log from '../assets/bg_log.png';

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Row_Section 
        f32="See How UX UI Projects Turn Into Experiences" 
        f20_pink="Each project tells a different story.. from concept to execution." 
      />

      <article className="about_bg">
        <section className="vid">
          <img src={log} className="v" alt="bg_log.png" />

          
          <div className="youtube">
            <iframe 
              className="bgvideo"
              width="900" 
              height="500" 
              src="https://www.youtube.com/embed/cxDhoyBtVUw?autoplay=1&mute=1&controls=1&rel=0&loop=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <p className="f20">My Latest Showreel 2025</p>
          </div>
        </section>
      </article>

       <section class="ab">
        <div class="z">
            <div class="col2">
        <p class="f32">What makes my work<br></br> unique?</p>
        <p class="f16_2">What sets my work apart is the blend of creativity and 
            interactivity. I’ve led design projects in my university, built immersive 3D and AR websites, and created  UX driven games</p>
            </div>
        <img src="photos/game work ux ui.svg" alt="ux_ui_works"/>
        </div>

        <div class="z2" >
            <img class="works" src="photos/works.svg" alt="uxui_works_all">
            <div class="col3">
            <p class="f16_2">Beside design, I love reading, sketching, drawing, walking, 
                basketball, and solving mysteries in detective movies. Hobbies that
                 inspire my creativity and design thinking..</p>
                <p class="lined_bu">
                    Get to know me
            
                    
                </p>
                
            </div>

    </section>




    </>
  );
};

export default Home;
