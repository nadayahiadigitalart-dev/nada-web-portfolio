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
    </>
  );
};

export default Home;
