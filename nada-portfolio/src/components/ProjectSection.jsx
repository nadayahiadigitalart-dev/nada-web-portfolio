// import React, { Component } from 'react';

        // import React from "react";
     import React, { useEffect, useRef } from 'react';

        import showreelVideo from "../assets/Nad Yahia-22-101081-showreel2024--.mp4";
      import useHorizontalScroll from "../useHorizontalScroll";
      // const scrollRef = useHorizontalScroll();
        import uxui from "../assets/uxui_home_card.png";
        import D from "../assets/3D booth card.png";
        import F from "../assets/dev_card.png";
        import G from "../assets/graphic_design_tshirt_card.png";



       
        
        import './ProjectSection';
import Pcard from './Pcard';
import Button from './Button';

const ProjectSection = () => {
  // useHorizontalScroll();
  // // const scrollerRef = useHorizontalScroll(); 


  //  const sectionRef = useRef(null);
  // const scrollerRef = useRef(null);

  //  useEffect(() => {
  //   const section = sectionRef.current;
  //   const scroller = scrollerRef.current;
  //   if (!section || !scroller) return;

  //   let maxScroll = scroller.scrollWidth - window.innerWidth;
  //   const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  //   let ticking = false;

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         const rect = section.getBoundingClientRect();
  //         const start = -rect.top;
  //         const totalScrollable = Math.max(1, rect.height - window.innerHeight);
  //         const progress = clamp(start / totalScrollable, 0, 1);
  //         const translateX = progress * maxScroll;
  //         scroller.style.transform = `translateX(-${translateX}px)`;
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   const revealCards = () => {
  //     const cards = scroller.querySelectorAll(".proj_cards");
  //     cards.forEach((card) => {
  //       const r = card.getBoundingClientRect();
  //       if (r.left < window.innerWidth * 0.8 && r.left + r.width > 0) {
  //         card.classList.add("visible");
  //       } else {
  //         card.classList.remove("visible");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   window.addEventListener("scroll", revealCards, { passive: true });
  //   window.addEventListener("resize", () => {
  //     maxScroll = scroller.scrollWidth - window.innerWidth;
  //     revealCards();
  //   });

  //   revealCards();
  //   onScroll();

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     window.removeEventListener("scroll", revealCards);
  //   };
  // }, []);



    return ( 
        <>


    <main  className="projects">
      <p className="f32">What services I offer ?</p>
      <section  className="projects-section">
        <article  className="horizontal-scroll">
         
            <Pcard  t="UX UI Design" img={uxui} tag1="UX Research" tag2="ui design"
            tag3="wireframe" tag4="prototype" tag5="design system" />

            <Pcard  t="3D Design" img={D} alt="Front-end_ux ui" tag1="Product Design"
            tag2="Interior design" tag3="AR" />

              <Pcard  t="Front-end Development" img={F} tag1="HTML"
            tag2="CSS" tag3="JavaScript" tag4="React" />

             <Pcard  t="Graphic Design" className="siZe" img={G} tag1="Illustrations"
            tag2="Social Media" tag3="Branding" />

              <section className="proj_cards">

<div class="x">
            <div class="card_title">
                <p class="f32">Motion Graphics </p>
                <div class="tags_layout">
                    <p class="tag">Reels</p>
                    <p class="tag"> Social media</p>
                    <p class="tag">2D</p>
                    <p class="tag">3D </p>
    
                </div>
               <br></br> 
            </div>
                    <Button button="Explore work"/>
</div>
                <video autoplay muted loop playsinline width="500" height="300" controls id="bg-video" >
  <source src="photos/Nad Yahia-22-101081-showreel2024--.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
                    
            </section>

        
        </article>
      </section>
    </main> 
    </>
    
  );
};

export default ProjectSection;

        
        
        
        
        
        

