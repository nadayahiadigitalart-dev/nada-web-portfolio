// import React from 'react';
// import React, { Component } from 'react';
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// import Pd from '../components/Pd';
// import Header from '../components/Header';
// import Tag from '../components/Tag';
// import Details1 from '../components/Details1';
// import Details2 from '../components/Details2';
// import group169 from '../assets/Group 169.png';


// import uxui1 from '../assets/3d_2.png';
// import Contact from './../components/Contact';
// import Footer from './../components/Footer';
// import { Supabase } from "../Supabase";
// // import { useParams } from 'react-router-dom';


// const Projectdetails = () => {

//      const [projects, setProjects] = useState([]);
//       // State for active category
//       const [activeCat, setActiveCat] = useState("");

//          const [projects, setProjects] = useState([{
//         id:"",
//         title:"",
//         cover_img:"",
//         images:""
// }]);
    

// const { id } = useParams();
// const [data, setData] = useState("");


// useEffect(() => {

//     async function CallRow() {
//     const res = await Supabase.from("projects").select("*").eq("id",id);
//     setData(res.data[0]);


//         CallRow();

//     }
// },[id])


//   if (!projectId) return;

//   async function fetchProject() {
//     const { data, error } = await Supabase
//       .from("projects")
//       .select("*")
//       .eq("id", projectId)
//       .single(); // fetch a single row

//     if (error) {
//       console.log("Error fetching project:", error);
//     } else {
//       console.log("Project fetched:", data);
//       setProjects([data]); // keep it as array if you want to map over it
//     }
//   }

//   fetchProject();
// }, [projectId]);



// const [project, setProject] = useState(null);


// useEffect(() => {
//   if (!projectId) return;

//   async function fetchProject() {
//     const { data, error } = await Supabase
//       .from("projects")
//       .select("*")
//       .eq("id", projectId)
//       .single(); // fetch a single row

//     if (error) {
//       console.log("Error fetching project:", error);
//     } else {
//       console.log("Project fetched:", data);
//       setProject(data); // <-- assign directly, no need for array
//     }
//   }

//   fetchProject();
// }, [projectId]);




    // return ( <>
    
    // <div className='mid' >

    // <Header/>

    // <Details1 img={uxui1} alt=".."  />

{/* {projects.length > 0 ? (
  projects.map((c) => (
    <Details2
      key={c.id}
      title0={c.title0}
      title1="Tools used"
      title2="Project Overview"
      tag1={c.tag1 && c.tag1.length > 0 ? c.tag1[0] : ""}
      tag2={c.tag1 && c.tag1.length > 1 ? c.tag1[1] : ""}
      tag3={c.tag1 && c.tag1.length > 2 ? c.tag1[2] : ""}
      des1={c.desc1}
      des2={c.desc2}
    />
  ))
) : (
  <p>Loading project...</p>
)}

{projects.map((c) => (
  <img key={c.id} src={c.cover_img} alt={c.title0} />
  
))} */}


  {/* {project ? (
  <>
    <Details2
      key={project.id}
      title0={project.title0}
      title1="Tools used"
      title2="Project Overview"
      tag1={project.tag1?.[0] || ""}
      tag2={project.tag1?.[1] || ""}
      tag3={project.tag1?.[2] || ""}
      des1={project.desc1}
      des2={project.desc2}
    />
    <img src={project.cover_img} alt={project.title0} />
  </>
) : (
  <p>Loading project...</p>
)} */}

// {projects ? (
//   <>
//     <Details2
//       key={data.id}
//       title0={data.title1}
//       title1="Tools used"
//       title2="Project Overview"
//       tag1={data.tag[0]}
//       tag2={data.tag[1]}
//       tag3={data.tag[2]}
//       des1={data.desc1}
//       des2={data.desc2}
//     />
//     <img src={data.cover_img} alt={data.title0} />
//   </>
// ) : (
//   <p>Loading project...</p>
// )}



    // </div>

    // <Contact />

    // <Footer />


    
    
//     </> );
// }
 
// export default Projectdetails;





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from '../components/Header';
import Details1 from '../components/Details1';
import Details2 from '../components/Details2';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import { Supabase } from "../Supabase";

import uxui1 from '../assets/3d_2.png';

const Projectdetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!projectId) return;

    async function fetchProject() {
      const { data, error } = await Supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .single(); // fetch single row

      if (error) {
        console.log("Error fetching project:", error);
      } else {
        setProject(data);
      }
    }

    fetchProject();
  }, [projectId]);

  return (
    <>
      <div className='mid'>
        <Header />
        <Details1 img={uxui1} alt=".." />

        {project ? (
          <>
            <Details2
              key={project.id}
              title0={project.title0}
              title1="Tools used"
              title2="Project Overview"
              tag1={project.tag1?.[0] || ""}
              tag2={project.tag1?.[1] || ""}
              tag3={project.tag1?.[2] || ""}
              des1={project.desc1}
              des2={project.desc2}
            />
            <img src={project.cover_img} alt={project.title0} />
          </>
        ) : (
          <p>Loading project...</p>
        )}
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Projectdetails;
