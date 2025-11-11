import React, { Component } from 'react';

import uxui from "../assets/uxui1.svg";
import uxui2 from "../assets/uxui2.svg";
import uxui3 from "../assets/uxui3.svg";
import uxui4 from "../assets/uxui4.svg";
import uxui5 from "../assets/uxui5.svg";
import hero_vid from "../assets/Hailuo.mp4";


import "./Hero.css";


 const Hero = () => {
    return ( 


        <>


         <section className="hero">

        <div className="big_gap">

        <div class="col_hero">
        <p className="hero_f">Dew of Ideas, Bloom of Design</p>
        <button id="hero-btn" className="lined_bu">View Projects</button>
        </div>

        <div class="category">
            <div className="col_img">
            <p className="f_light">UX UI Design</p>
            <img src={uxui} alt="UX UI category"/>
            </div>
            
            <div class="col_img">
            <p className="f_light">3D Design</p>
            <img src={uxui2} alt="UX UI category"/>

            </div>

            <div className="col_img">
            <p className="f_light">Graphic Design</p>
            <img src={uxui3} alt="UX UI category"/>

            </div>

            <div className="col_img">
            <p className="f_light">Motion Graphic</p>
            <img src={uxui4} alt="UX UI category"/>

            </div>

            <div className="col_img">
            <p className="f_light">Front-end Development</p>
            <img src={uxui5} alt="UX UI category"/>

            </div>

        </div>

        </div>

        <div className="video_hero">

       <video className="bgg_video" width="100%" height="100%" autoPlay muted playsInline>
  <source src={hero_vid} type="video/mp4"/>
  Your browser does not support the video tag.
</video>

<div class="gred"></div>
</div>
</section>


<br></br><br></br>
       

  

       
        
        </>
     );
 }
  
 export default Hero;