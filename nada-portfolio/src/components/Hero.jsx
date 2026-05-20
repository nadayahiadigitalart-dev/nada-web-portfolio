import React, {  useEffect, useState } from 'react';

import uxui from "../assets/uxui1.svg";
import uxui2 from "../assets/uxui2.svg";
import uxui3 from "../assets/uxui3.svg";
import uxui4 from "../assets/uxui4.svg";
import uxui5 from "../assets/uxui5.svg";
import hero_vid from "../assets/Hailuo.mp4";
// import mm from "../assets/mmm.png";
import m from "../assets/hero_.svg";
// import m from "../assets/mm.png";






import "./Hero.css";
import Button from './Button';





 const Hero = () => {

    const [hoveringBtn, setHoveringBtn] = useState(false);

//    useEffect(() => {
//   setTimeout(() => {
//     document.querySelector(".col_hero")?.classList.add("show");
//   }, 400);

//   setTimeout(() => {
//     document.querySelector(".category")?.classList.add("show");
//   }, 6000);
// }, []);

useEffect(() => {

 setTimeout(() => {
    document.querySelector(".col_hero")?.classList.add("show");
  }, 400);

  // Images appear later (slower & elegant)
  setTimeout(() => {
    document.querySelectorAll(".hero-img").forEach(img => {
      img.classList.add("show");
    });
  }, 2200); // ⬅ longer delay

}, []);





    return ( 


        <>

<article className='centtt'>
         <section className="hero">

<div className='rw'>
          {/* <img  className="hero-img right"  src={mm} alt='right_uxui_photo' /> */}
        <div className="big_gap">

        <div className="col_hero">
          <p className='smalltext'>Hi there! I am Nada Yahia</p>
        <p className="hero_ff">
          {/* Dew of Ideas, Bloom of Design */}
         UX UI Designer 

          </p>
          <p className='f16_ce'>I design intuitive user experiences <br></br>that truly fit users’ needs 
          {/* <br></br> <br></br> I am a graphic designer, 3D designer and front-end developer as well  */}
          </p>
          {/* with a touch of creativity */}
        {/* <button id="hero-btn" className="lined_bu">View Projects</button> */}
        {/* <Button button="view projects" />
        </div> */}

          <Button
    button="view projects"
    onMouseEnter={() => setHoveringBtn(true)}
    onMouseLeave={() => setHoveringBtn(false)}
  />
</div>

         

        </div>

      


      

        {/* <div class="category">
            <div className="col_img">
            <p className="f_light">UX UI Design</p>
            <img src={uxui} alt="UX UI category"/>
            </div>
            
            <div className="col_img">
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

        </div> */}

        

        </div>

          

        {/* <div className="video_hero"> */}

       {/* <video className="bgg_video" width="100%" height="100%" autoPlay muted playsInline>
  <source src={hero_vid} type="video/mp4"/>
  Your browser does not support the video tag.
</video> */}


{/* <div class="gred"></div> */}
{/* </div> */}
</section>


   <img 
          // className='ph'
          // className="hero-img left" 
           className={`hero-img left ${hoveringBtn ? "rotate" : ""}`}
          src={m} alt='left_uxui_photo' />

          </article>

<br></br><br></br>
       

        
        </>
     );
 }
  
 export default Hero;