import React from "react";
// import React, { useState, useEffect } from "react";


import Header from "../components/Header";
import Hero from "../components/Hero";
import BounceCards from "../components/BounceCards";
import Row_Section from "../components/Row_Section";
import log from "../assets/bg_log.png";
import uxuiworks from "../assets/game work ux ui.svg";
import workssvg from "../assets/works.svg";

import "./Home.css";
import Button from "../components/Button";
 import ProjectSection from "../components/ProjectSection";
// import Projectdetails from "./Projectdetails";
import Footer from "../components/Footer";

import tt from "../assets/tablet for portfolio 1.png"; 
import g from "../assets/geomtricnadayahia.png";
import tshirt from "../assets/tshirt event.jpg";
import eui from "../assets/globaloffshoringsummit.jpg";
import global from "../assets/euitopachiver.jpg";
import aicat from "../assets/aicat.jpg";

import LiquidEther from '../components/LiquidEther';
import Contact from "../components/Contact";
import Pcard from "../components/Pcard";

import uxui from "../assets/uxui_home_card.png";
import D from "../assets/3D booth card.png";
import F from "../assets/dev_card.png";
import G from "../assets/graphic_design_tshirt_card.png";

import { Helmet } from "react-helmet";
import { Supabase } from "../Supabase";
import { Link } from "react-router-dom";

import ph02 from "../assets/ph02.png";
import ph03 from "../assets/ph03.png";
import ph04 from "../assets/ph04.png";
import ph05 from "../assets/ph05.png";
import ph06 from "../assets/ph06.png";

import ScrollImages from "../components/ScrollImages";

import p1 from "../assets/ayla_.svg";
import p2 from "../assets/socialmedia_.svg";
import p3_vid from "../assets/webzoo.mp4";
import p4 from "../assets/3dblender_.svg";
import p5 from "../assets/phone_.svg";
import p6 from "../assets/zubaidaposter_.svg";
import p7 from "../assets/muegyvid.mp4";
import p8 from "../assets/aylavid.mp4";

import DotGrid from '../components/DotGrid';

// const [showScroll, setShowScroll] = useState(false);


// useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowScroll(true);
//   }, 7000); // ⏱ 7 seconds

//   return () => clearTimeout(timer);
// }, []);









// import BounceCards from './BounceCards'

const images = [
  eui,
  global,
  aicat,
  g,
  tshirt
];

// const transformStyles = [
//   "rotate(5deg) translate(-150px)",
//   "rotate(0deg) translate(-70px)",
//   "rotate(-5deg)",
//   "rotate(5deg) translate(70px)",
//   "rotate(-5deg) translate(150px)"
// ];

const transformStyles = [
  "rotate(5deg) translateX(-150px)",
  "rotate(0deg) translateX(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translateX(70px)",
  "rotate(-5deg) translateX(150px)"
];



async function seo() {
  const res = await Supabase.from("SEO").select("*")
  .eq("page_title", "Home");

}

// async function p() {
//   const p = await Supabase.from("projects").select("*")
// }



const Home = () => {
  return (
    <>

    <Helmet>
        <title>{seo.meta_title}</title>
        <meta name="description" content={seo.meta_description} />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/images/about.png" />
          <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      </Helmet>


    <div className="bodyy">


      <div style={{ width: '100%', height: '3500px', position: 'absolute' , marginTop: '0px' ,zIndex: -5,    }}>
  <DotGrid
    dotSize={3}
    gap={15}
    baseColor="#09292941"
    activeColor="#0E8C88"
    proximity={90}
    shockRadius={300}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />


     {/* <LiquidEther 
     
   

    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />

  </div> */}

  </div>

      <Header />

      <div className="position">

       <Hero />   
{/* 
       <div className="absol">

   <ScrollImages />

      </div> */}
{/* 
      <div className="absol">
  {showScroll && <ScrollImages />}
</div> */}



      </div>
      

      {/* <div className="zindex_rest_of_page"> */}
<div className="resttt">
      <article 
      className="about_bg"
      >
        <section className="vid">
          {/* <img src={log} className="v" alt="bg_log.png" /> */}

          <div className="youtube">
            <iframe
              className="bgvideo"
              // width="900"
              // height="500"
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
              <p className="f32">
                What makes my work
                <br /> unique?
              </p>
              <p className="f16_2">
                What sets my work apart is the blend of creativity and
                interactivity. I’ve led design projects in my university, built
                immersive 3D and AR websites, and created UX driven games
              </p>
            </div>

            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <Button button="Get to know me" />
              </Link>

            {/* <img src={uxuiworks} alt="ux_ui_works" /> */}
          </div>

          <div className="z2">
            <img className="works" src={workssvg} alt="uxui_works_all" />
            <br></br>
            <div className="col3">
              {/* <p className="f16_2">
                Beside design, I love reading, sketching, drawing, walking,
                basketball, and solving mysteries in detective movies. Hobbies
                that inspire my creativity and design thinking..
              </p> */}

            </div>
          </div>
        </section>

      <br></br>
      <br></br>
      <br></br>


      {/* <ProjectSection   /> */}
      {/* <Link to={`/projects/${p.category}`} style={{ textDecoration: "none", color: "inherit" }}> */}

      <section className="proj_sec">

        {/* <FlyingPosters /> */}



          </section>

         <br></br><br></br>

         <section className="photoss">
          <div className="colll">

            <div className="hor">
              {/* <img className="respon" src={p1} alt="" /> */}
                           <video
  className="aylavid"
  src={p8}
  autoPlay
  loop
  muted
  playsInline
>
  Your browser does not support the video tag.
</video>
              <img className="respon2" src={p2} alt="" />
            </div>

              {/* <img src={p3_vid} alt="nadayahia_gizazoo_video" /> */}
              <video
  className="muegyvid"
  src={p7}
  autoPlay
  loop
  muted
  playsInline
>
  Your browser does not support the video tag.
</video>


             <div className="hor">
              <img className="respon" src={p4} alt="" />
              <img className="respon" src={p5} alt="" />
            </div>

            </div>

            <div className="colll2">
              <img className="respon" src={p6} alt="" />
              {/* <img src={p7} alt="" /> */}
              
  <video
  src={p3_vid}
  autoPlay
  loop
  muted
  playsInline
  className="zoovid"
>
  Your browser does not support the video tag.
</video>


            </div>

          </section>
         


         <br></br><br></br>

        <div className="cente">
          <br></br><br></br>

          <p className="f32">Latest from My Blogs </p>
          <p className="f16_22">
            {/* Explore my journey in design through 
            reflections, real-life experiences, and projects. I share 
            the lessons, challenges, and moments that shaped me as a 
            design student, while exploring the ideas, skills, and 
            experiences that define my path in design.  */}

            Follow my journey through design, studies, and the books 
            that inspire me. I share my experiences, events I’ve 
            participated in, and the lessons that shape my perspective 
            as a design student
            </p>

          <br></br><br></br>
          <div className="blogss">
  <BounceCards
  images={images}
  transformStyles={transformStyles.map(t => t.replace('translate(', 'translateX('))}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  enableHover={true}
  className="custom-bounceCards"
/>
</div>

      {/* <BounceCards
      
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/> */}
</div>
   <br></br><br></br>
   <br></br><br></br>
   <br></br><br></br>


   <Contact />

   <br></br><br></br>
   <br></br><br></br>


      <Footer /> 
      {/* </div> */}
</div>
</div>

    </>
  );
};

export default Home;
