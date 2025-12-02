// import React, { useEffect } from 'react';

import React from "react";


import "./Projects.css";


import uximg1 from "../assets/img6.png";
import uximg2 from "../assets/img1.png";
import uximg3 from "../assets/img2.png";
import uximg4 from "../assets/img3.png";
import uximg5 from "../assets/img4.png";
import uximg6 from "../assets/img5.png";



const categories = [
    {
        title: "SoundFix",
        des: `A website that offer a great experience to help users fix their devices.`,
        img: uximg1
    },
     {
        title: "SoundFix",
        des: `A website that offer a great experience to help users fix their devices.`,
        img: uximg2
    },
     {
        title: "SoundFix",
        des: `A website that offer a great experience to help users fix their devices.`,
        img: uximg3

    },
     {
        title: "SoundFix",
        des: `A website that offer a great experience to help users fix their devices.`,
        img: uximg4


    },
     {
        title: "SoundFix",
        des: `A website that offer a great experience to help users fix their devices.`,
        img: uximg5

    },
     {
        title: "SoundFix",
        des: `A website that offer a great experience to help users fix their devices.`,
        img: uximg6

    }
    
]




const Projects = () => {
    return ( <>
    
     <div className="cards-container">
      {categories.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.title} className="card-img" />
          <h3>{item.title}</h3>
          <p>{item.des}</p>
        </div>
      ))}
    </div>
    
    
    </> );
}
 
export default Projects;