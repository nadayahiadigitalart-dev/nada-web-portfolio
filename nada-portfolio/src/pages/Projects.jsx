// // import React, { useEffect } from 'react';

// import React from "react";


// import "./Projects.css";


// import uximg1 from "../assets/img6.png";
// import uximg2 from "../assets/img1.png";
// import uximg3 from "../assets/img2.png";
// import uximg4 from "../assets/img3.png";
// import uximg5 from "../assets/img4.png";
// import uximg6 from "../assets/img5.png";



// const categories = [
//     {
//         title: "SoundFix",
//         des: `A website that offer a great experience to help users fix their devices.`,
//         img: uximg1
//     },
//      {
//         title: "SoundFix",
//         des: `A website that offer a great experience to help users fix their devices.`,
//         img: uximg2
//     },
//      {
//         title: "SoundFix",
//         des: `A website that offer a great experience to help users fix their devices.`,
//         img: uximg3

//     },
//      {
//         title: "SoundFix",
//         des: `A website that offer a great experience to help users fix their devices.`,
//         img: uximg4


//     },
//      {
//         title: "SoundFix",
//         des: `A website that offer a great experience to help users fix their devices.`,
//         img: uximg5

//     },
//      {
//         title: "SoundFix",
//         des: `A website that offer a great experience to help users fix their devices.`,
//         img: uximg6

//     }
    
// ]




// const Projects = () => {
//     return ( <>
    
//      <div className="cards-container">
//       {categories.map((item, index) => (
//         <div className="card" key={index}>
//           <img src={item.img} alt={item.title} className="card-img" />
//           <h3>{item.title}</h3>
//           <p>{item.des}</p>
//         </div>
//       ))}
//     </div>
    
    
//     </> );
// }
 
// export default Projects;


// 1️⃣ IMPORTS
import React, { useState } from "react";
import "./Projects.css";

import uximg1 from "../assets/img6.png";
import uximg2 from "../assets/img1.png";
import uximg3 from "../assets/img2.png";
import uximg4 from "../assets/img3.png";
import uximg5 from "../assets/img4.png";
import uximg6 from "../assets/img5.png";

// import dimg1 from "../assets/img5.png";
// import dimg2 from "../assets/img5.png";
// import dimg3 from "../assets/img5.png";
// import dimg4 from "../assets/img5.png";
// import dimg5 from "../assets/img5.png";
// import dimg6 from "../assets/img5.png";
// import dimg7 from "../assets/img5.png";




import Header from "../components/Header";
import Pageword from "../components/Pageword";
import ProjectsCards from "../components/ProjectsCards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


// 2️⃣ DATA (OUTSIDE the component)
const projectData = {
  "UX UI": [
    { title: "SoundFix", des: "Description 1", img: uximg1 },
    { title: "Giza zo", des: "Description 2", img: uximg2 },
    { title: "Muegy-web/app", des: "Description 3", img: uximg3 },
    { title: "Lamar redesign", des: "Description 4", img: uximg4 },
    { title: "Laliga redesign", des: "Description 5", img: uximg5 },
    { title: "Kids app", des: "Description 6", img: uximg6 }
  ],

  "3D & AR Design": [
    { title: "3D Project 1", des: "Description A", img: uximg1 },
    { title: "3D Project 2", des: "Description B", img: uximg1 },
    { title: "3D Project 3", des: "Description C", img: uximg1 },
    { title: "3D Project 4", des: "Description D", img: uximg1 },
    { title: "3D Project 5", des: "Description E", img: uximg1 },
    { title: "3D Project 6", des: "Description F", img: uximg1 }
  ],

  "Front-end": [
     { title: "frontend1", des: "Description A", img: uximg1 },
    { title: "front-end2", des: "Description B", img: uximg1 },
    { title: "front-end3", des: "Description C", img: uximg1 }

  ],

  "Graphic Design": [
     { title: "frontend1", des: "Description A", img: uximg1 },
    { title: "front-end2", des: "Description B", img: uximg1 },
    { title: "front-end3", des: "Description C", img: uximg1 }

  ],

  "Motion Graphics": [
     { title: "frontend1", des: "Description A", img: uximg2 },
    { title: "front-end2", des: "Description B", img: uximg4 },
    { title: "front-end3", des: "Description C", img: uximg3 }

  ]
};


// 3️⃣ COMPONENT
const Projects = () => {
//   const categories = Object.keys(projectData);
//   const [activeCat, setActiveCat] = useState(categories[0]);

const categories = Object.keys(projectData);

const [activeCat, setActiveCat] = useState(categories[0]);


  return (<>

    <Header

    // w="Projects" word="Home"
    
    />

    <section className="page_layout">

    {/* <div className="row_cat">
        <div className="button">UX UI</div>
        <div className="button">3D & AR</div>
        <div className="button">Front-end</div>
        <div className="button">Graphic Design</div>
        <div className="button">Motion Graphics</div>
    </div> */}

    <div className="row_cat">
  {categories.map((cat) => (
    <button
      key={cat}
      className={`
        
        b
        ${activeCat === cat ? "active" : ""}`}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </button>
  ))}
</div>


    {/* <div className="cards_p"> */}
        {/* <div className="ca">
            <img src={uximg1} alt="uxui_project" />
            <p className="f24">SoundFix</p>
            <p className="f14">A website that offer a great experience to 
help users fix their devices.</p>

        </div> */}
        {/* <ProjectsCards img={uximg1} t="SoundFix" p="A website that offer a great experience to 
help users fix their devices."  />
<ProjectsCards img={uximg1} t="SoundFix" p="A website that offer a great experience to 
help users fix their devices."  />
<ProjectsCards img={uximg1} t="SoundFix" p="A website that offer a great experience to 
help users fix their devices."  />
<ProjectsCards img={uximg1} t="SoundFix" p="A website that offer a great experience to 
help users fix their devices."  />
<ProjectsCards img={uximg1} t="SoundFix" p="A website that offer a great experience to 
help users fix their devices."  />
<ProjectsCards img={uximg1} t="SoundFix" p="A website that offer a great experience to 
help users fix their devices."  /> */}

<div className="cards_p">
  {projectData[activeCat].map((item, index) => (
    <ProjectsCards
      key={index}
      img={item.img}
      t={item.title}
      p={item.des}
    />
  ))}
</div>



    {/* </div> */}

    </section>

    <br></br>
    <br></br>
    <br></br>


    <Contact />

    <br></br>


    <Footer />

    
  </>);
};

export default Projects;
