import React, { Component } from 'react';
import Button from './Button';
import './ProjectsCards.css';

const ProjectsCards = (props) => {

     const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };


    return ( <>

      <div className="ca">
                <img src={props.img} alt="uxui_project" />
                <p className="f24">{props.t}</p>
                <p className="f14">{props.p}</p>
    <Button button="view project" />
    
      </div>
    
    
    </> );
}
 
export default ProjectsCards;