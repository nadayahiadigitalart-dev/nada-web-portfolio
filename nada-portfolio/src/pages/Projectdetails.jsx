// import React from 'react';
// import React, { Component } from 'react';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Pd from '../components/Pd';
import Header from '../components/Header';
import Tag from '../components/Tag';
import Details1 from '../components/Details1';
import Details2 from '../components/Details2';
import group169 from '../assets/Group 169.png';


import uxui1 from '../assets/3d_2.png';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import { Supabase } from "../Supabase";
// import { useParams } from 'react-router-dom';


const Projectdetails = () => {

     const [projects, setProjects] = useState([]);
      // State for active category
      const [activeCat, setActiveCat] = useState("");

//          const [projects, setProjects] = useState([{
//         id:"",
//         title:"",
//         cover_img:"",
//         images:""
// }]);
    

const { projectId } = useParams();


useEffect(() => {
  if (!projectId) return;

  async function fetchProject() {
    const { data, error } = await Supabase
      .from("projects")
      .select("*")
      .eq("id", projectId)
      .single(); // fetch a single row

    if (error) {
      console.log("Error fetching project:", error);
    } else {
      console.log("Project fetched:", data);
      setProjects([data]); // keep it as array if you want to map over it
    }
  }

  fetchProject();
}, [projectId]);





    return ( <>
    
    <div className='mid' >

    <Header/>

    <Details1 img={uxui1} alt=".."  />

{projects.map((c) => (<>
           
       
        <Details2   
        title0={c.title0}
        title1="Tools used"
        title2="Project Overview"
        tag1={c.tag1 && c.tag1.length > 0 ? c.tag1[0] : ""}
      tag2={c.tag1 && c.tag1.length > 1 ? c.tag1[1] : ""}
      tag3={c.tag1 && c.tag1.length > 2 ? c.tag1[2] : ""}
        des1={c.desc1}
        des2={c.desc2}
          
        />


    <img src={group169} />


{/* group169 */}
{/* {c.cover_img}  */}

    </>))}

    </div>

    <Contact />

    <Footer />


    
    
    </> );
}
 
export default Projectdetails;