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


 <main class="projects" >
        <p class="f32">What services I offer ?</p>
          <section class="projects-section">

  <article class="horizontal-scroll">
        <section class="proj_cards">

<div class="x">
            <div class="card_title">
                <p class="f32">UX / UI Design </p>
                <div class="tags_layout">
                    <p class="tag">ux research</p>
                    <p class="tag">ui design</p>
                    <p class="tag">wirfeframe</p>
                    <p class="tag">prototype </p>
                    <p class="tag">design system </p>

                    
                </div>
               <br><br><br> 
            </div>
                   <a class="a" href="UXUI_Projectdetails1.html"> <p class="lined_bu">
                        Explore work
                    </p></a>
</div>
                
                    
                <img class="margin_photo_card" src="photos/uxui_home_card.png" alt="ux_ui_mockup_card">
            </section>

            

            <a class="a" href="3d_projects.html">    <section class="proj_cards">

<div class="x">
            <div class="card_title">
                <p class="f32">3D Design </p>
                <div class="tags_layout">
                    <p class="tag">Interior</p>
                    <p class="tag">Product design</p>
                    <p class="tag">AR</p>
                    

                    
                </div>
               <br><br><br> 
            </div>
               <a class="a" href="3d_projects.html">  <p class="lined_bu">
                        Explore work
                    </p></a>
</div>
                
                    
                <img class="margin_photo_card" src="photos/3D booth card.png" alt="ux_ui_mockup_card">
            </section></a>

             <section class="proj_cards">

<div class="x">
            <div class="card_title">
                <p class="f32">Front-end Development</p>
                <div class="tags_layout">
                    <p class="tag">html</p>
                    <p class="tag"> CSS</p>
                    <p class="tag">JavaScript</p>
                    <p class="tag">React </p>
                  

                    
                </div>
               <br><br><br> 
            </div>
                    <p class="lined_bu">
                        Explore work
                    </p>
</div>
                
                    
                <img class="margin_photo_card" src="photos/dev_card.png" alt="ux_ui_mockup_card">
            </section>
       

             <section class="proj_cards">

<div class="x">
            <div class="card_title">
                <p class="f32">Graphic Design   </p>
                <div class="tags_layout">
                    <p class="tag">Illustrations</p>
                    <p class="tag">Social media posts </p>
                    <p class="tag">Branding</p>
                   

                    
                </div>
               <br><br><br> 
            </div>
                   <a class="a" href="Graphic_detailedProjects1.html"> <p class="lined_bu">
                        Explore work
                    </p></a>
</div>
                
                    
                <img class="margin_photo_card" src="photos/graphic_design_tshirt_card.png" alt="ux_ui_mockup_card">
            </section>

             <section class="proj_cards">

<div class="x">
            <div class="card_title">
                <p class="f32">Motion Graphics </p>
                <div class="tags_layout">
                    <p class="tag">Reels</p>
                    <p class="tag"> Social media</p>
                    <p class="tag">2D</p>
                    <p class="tag">3D </p>
                   

                    
                </div>
               <br><br><br> 
            </div>
                    <p class="lined_bu">
                        Explore work
                    </p>
</div>
                <video autoplay muted loop playsinline width="500" height="300" controls id="bg-video" >
  <source src="photos/Nad Yahia-22-101081-showreel2024--.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
                    
                <!-- <img class="margin_photo_card" src="photos/uxui_home_card.png" alt="ux_ui_mockup_card"> -->
            </section>

            

             
            
        </article>
    </section>

    </main>




    </>
  );
};

export default Home;
