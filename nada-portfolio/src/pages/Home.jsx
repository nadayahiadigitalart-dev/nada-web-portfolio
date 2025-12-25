import React from "react";

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


// import BounceCards from './BounceCards'

const images = [
  eui,
  global,
  tshirt,
  g,
  aicat
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];


async function seo() {
  const res = await Supabase.from("SEO").select("*")
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
     <LiquidEther
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

  </div>

      <Header />
    
       <Hero />   
   

      <article 
      // className="about_bg"
      >
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
      </article>

      <br></br>
      <br></br>
      <br></br>


      {/* <ProjectSection   /> */}

      <section className="proj_sec">

      {/* <Link to={`/projects/${p.category}`} style={{ textDecoration: "none", color: "inherit" }}> */}

      <Pcard t="UX UI Design" img={uxui} b="View Projects" />

      {/* </Link> */}


      
          <Pcard t="3D Design" img={D}  />




          <Pcard t="Front-end Development" img={F} />




          <Pcard t="Graphic Design" img={G}  />


          </section>

         <br></br><br></br>

        <div className="cente">
          <p className="f32">Latest from My Blogs </p>
      <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/>
</div>
   <br></br><br></br>

   <Contact />

      <Footer /> 
    </>
  );
};

export default Home;
