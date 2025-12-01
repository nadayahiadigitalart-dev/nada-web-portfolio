import React, { useEffect, useRef } from 'react';
import './ProjectsSeaction.css';
import Pcard from './Pcard';
import Button from './Button';

import uxui from "../assets/uxui_home_card.png";
import D from "../assets/3D booth card.png";
import F from "../assets/dev_card.png";
import G from "../assets/graphic_design_tshirt_card.png";
import showreelVideo from "../assets/Nad Yahia-22-101081-showreel2024--.mp4";

const ProjectSection = () => {

  const scrollerRef = useRef(null); // <-- This MUST be defined

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onWheel = (e) => {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    };

    scroller.addEventListener('wheel', onWheel);
    return () => scroller.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <main className="projects">
      <p className="f32">What services I offer?</p>
      <section className="projects-section">
        <article className="horizontal-scroll" ref={scrollerRef}>
          <Pcard t="UX UI Design" img={uxui} />
          <Pcard t="3D Design" img={D} tag1="Product Design" tag2="Interior design"  />
          <Pcard t="Front-end Development" img={F} tag1="HTML" tag2="CSS"  />
          <Pcard t="Graphic Design" img={G} tag1="Illustrations" tag2="Social Media" />

          <section className="proj_cards">
            <div className="x">
              <div className="card_title">
                <p className="f32">Motion Graphics</p>
                <div className="tags_layout">
                  <p className="tag">Reels</p>
                  <p className="tag">Social media</p>
                  <p className="tag">2D</p>
                  <p className="tag">3D</p>
                </div>
                <br />
              </div>
              <Button button="Explore work" />
            </div>
            <video autoPlay muted loop playsInline width="500" height="300" controls>
              <source src={showreelVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </article>
      </section>
    </main>
  );
};

export default ProjectSection;
