import React from 'react';

import Header from "../components/Header"; 
import Hero from '../components/Hero';
import Row_Section from '../components/Row_Section';
import log from '../assets/bg_log.png';
import uxuiworks from '../assets/game work ux ui.svg';
import workssvg from '../assets/works.svg';

import "./Home.css";
import Button from '../components/Button';
import ansiStyles from './../../node_modules/@isaacs/cliui/node_modules/ansi-styles/index';

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


<section className="ab">
  <div className="z">
    <div className="col2">
      <p className="f32">What makes my work<br /> unique?</p>
      <p className="f16_2">What sets my work apart is the blend of creativity and 
          interactivity. I’ve led design projects in my university, built immersive 3D and AR websites, and created UX driven games</p>
    </div>
    <img src={uxuiworks} alt="ux_ui_works"/>
  </div>

  <div className="z2">
    <img className="works" src={workssvg} alt="uxui_works_all"/>
    <div className="col3">
      <p className="f16_2">Beside design, I love reading, sketching, drawing, walking, 
          basketball, and solving mysteries in detective movies. Hobbies that
          inspire my creativity and design thinking..</p>
   
      <Button button="Get to know me" />
    </div>
  </div>
</section>





    </>
  );
};

export default Home;
