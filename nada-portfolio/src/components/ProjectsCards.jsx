import React, { Component } from 'react';
import Button from './Button';
import './ProjectsCards.css';

const ProjectsCards = (props) => {

 


    return ( <>

    <div
  className="card-wrap"
  onMouseMove={(e) => {
    const card = e.currentTarget.querySelector(".ca");
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget.querySelector(".ca");
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }}
>

      <div className="ca">
                <img src={props.img} alt="uxui_project" />
                <p className="f24">{props.t}</p>
                <p className="f14">{props.p}</p>
                {/* <p className="v">{props.p2}</p> */}

    <div  className='v'>{props.b}</div>
      {/* <Link to={`/projects/:projectId/${c.id}`}> */}
    
{/* </Link> */}
      </div>
{/* button="view project" */}

  {/* <img src={p.cover_img} alt={p.title} /> */}
    </div>
    
    </> );
}
 
export default ProjectsCards;