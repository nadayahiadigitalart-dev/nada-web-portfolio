import React, { Component } from 'react';
import Button from './Button';
import './ProjectsCards.css';

const ProjectsCards = (props) => {

 


    return ( <>

      <div className="ca">
                <img src={props.img} alt="uxui_project" />
                <p className="f24">{props.t}</p>
                <p className="f14">{props.p}</p>
      {/* <Link to={`/projects/:projectId/${c.id}`}> */}
    <button  onClick={props.onDelete}/>
    
{/* </Link> */}
      </div>
{/* button="view project" */}

  {/* <img src={p.cover_img} alt={p.title} /> */}
    
    
    </> );
}
 
export default ProjectsCards;