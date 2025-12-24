


// // 1️⃣ IMPORTS
// import React, { useState, useEffect } from "react";
// import "./Projects.css";

// import uximg1 from "../assets/img6.png";
// import uximg2 from "../assets/img1.png";
// import uximg3 from "../assets/img2.png";
// import uximg4 from "../assets/img3.png";
// import uximg5 from "../assets/img4.png";
// import uximg6 from "../assets/img5.png";

// // import dimg1 from "../assets/img5.png";
// // import dimg2 from "../assets/img5.png";
// // import dimg3 from "../assets/img5.png";
// // import dimg4 from "../assets/img5.png";
// // import dimg5 from "../assets/img5.png";
// // import dimg6 from "../assets/img5.png";
// // import dimg7 from "../assets/img5.png";




// import Header from "../components/Header";
// import Pageword from "../components/Pageword";
// import ProjectsCards from "../components/ProjectsCards";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import { Supabase } from "../Supabase";


// // // 2️⃣ DATA (OUTSIDE the component)
// // const projectData = {
// //   "UX UI": [
// //     { title: "SoundFix", des: "Description 1", img: uximg1 },
// //     { title: "Giza zo", des: "Description 2", img: uximg2 },
// //     { title: "Muegy-web/app", des: "Description 3", img: uximg3 },
// //     { title: "Lamar redesign", des: "Description 4", img: uximg4 },
// //     { title: "Laliga redesign", des: "Description 5", img: uximg5 },
// //     { title: "Kids app", des: "Description 6", img: uximg6 }
// //   ],

// //   "3D & AR Design": [
// //     { title: "3D Project 1", des: "Description A", img: uximg1 },
// //     { title: "3D Project 2", des: "Description B", img: uximg1 },
// //     { title: "3D Project 3", des: "Description C", img: uximg1 },
// //     { title: "3D Project 4", des: "Description D", img: uximg1 },
// //     { title: "3D Project 5", des: "Description E", img: uximg1 },
// //     { title: "3D Project 6", des: "Description F", img: uximg1 }
// //   ],

// //   "Front-end": [
// //      { title: "frontend1", des: "Description A", img: uximg1 },
// //     { title: "front-end2", des: "Description B", img: uximg1 },
// //     { title: "front-end3", des: "Description C", img: uximg1 }

// //   ],

// //   "Graphic Design": [
// //      { title: "frontend1", des: "Description A", img: uximg1 },
// //     { title: "front-end2", des: "Description B", img: uximg1 },
// //     { title: "front-end3", des: "Description C", img: uximg1 }

// //   ],

// //   "Motion Graphics": [
// //      { title: "frontend1", des: "Description A", img: uximg2 },
// //     { title: "front-end2", des: "Description B", img: uximg4 },
// //     { title: "front-end3", des: "Description C", img: uximg3 }

// //   ]
// // };


// // // 3️⃣ COMPONENT
// //   const categories = Object.keys(projectData);
// //   const [activeCat, setActiveCat] = useState(categories[0]);

// // const categories = Object.keys(projectData);

// // const [activeCat, setActiveCat] = useState(categories[0]);


// // useEffect((c)=>{
//   //   async function callGetAPI(){
//     //     const res= await Supabase.from("Projects").select("*");
//     //     setProjects(res.data);
//     //     // console.log
//     //   }
//     //   callGetAPI
//     // },[]);
    
    
//  const Projects = () => {
//   // State for projects from Supabase
//   const [projects, setProjects] = useState([]);
//   // State for active category
//   const [activeCat, setActiveCat] = useState("");

//   // Fetch projects from Supabase
//   useEffect(() => {
//     async function fetchProjects() {
//       const { data, error } = await Supabase.from("projects").select("*");
//       if (error) {
//         console.log("Error fetching projects:", error);
//       } else {
//         setProjects(data);
//         // Set first category as active by default
//         if (data.length > 0) setActiveCat(data[0].category);
//       }
//     }
//     fetchProjects();
//   }, []);

//   // Get unique categories from fetched projects
//   const categories = [...new Set(projects.map((p) => p.category))];


//   return (<>

//     <Header

//     // w="Projects" word="Home"
    
//     />

//     <section className="page_layout">

   

//     <div className="row_cat">
//    {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`button ${activeCat === cat ? "active" : ""}`}
//               onClick={() => setActiveCat(cat)}
//             >
//               {cat}
//             </button>
//           ))}
// </div>


  

// <div className="cards_p">
//   {projects
//             .filter((proj) => proj.category === activeCat)
//             .map((proj) => (
//               <ProjectsCards
//                 key={proj.id}
//                 img={proj.cover_img} // assuming cover_img is a URL
//                 t={proj.title}
//                 p={proj.desc} // or desc depending on your DB
//               />
//             ))}
// </div>



//     {/* </div> */}

//     </section>

//     <br></br>
//     <br></br>
//     <br></br>


//     <Contact />

//     <br></br>


//     <Footer />

    
//   </>);
// };

// export default Projects;




import React, { useState, useEffect } from "react";
import "./Projects.css";

import Header from "../components/Header";
import ProjectsCards from "../components/ProjectsCards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Supabase } from "../Supabase";
import { Link } from "react-router-dom";


const Projects = () => {
  // State for projects from Supabase
  const [projects, setProjects] = useState([]);
  // State for active category
  const [activeCat, setActiveCat] = useState("");

  // Fetch projects from Supabase
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await Supabase.from("projects").select("*").order("id");
      if (error) {
        console.log("Error fetching projects:", error);
      } else {
        setProjects(data);
        // Set first category as active by default
        if (data.length > 0) setActiveCat(data[0].category);
      }
    }
    fetchProjects();
  }, []);




  // Get unique categories from fetched projects
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <>
      <Header />

      <section className="page_layout">
        {/* Categories buttons */}
        <div className="row_cat">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`button ${activeCat === cat ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects cards */}
        <div className="cards_p">

          {projects
            .filter((proj) => proj.category === activeCat)
            .map((proj) => (
              // <Link to={`/projects/:projectId/${proj.id}`}  style={{ textDecoration: "none", color: "inherit" }}> 
              // <ProjectsCards
              //   key={proj.id}
              //   img={proj.cover_img} // assuming cover_img is a URL
              //   t={proj.title}
              //   p={proj.desc} // or desc depending on your DB
              //   // onDelete={() => deleteRow(proj.id)} 
              //   />
              //   </Link>

              <Link to={`/projects/${proj.id}`} style={{ textDecoration: "none", color: "inherit" }}> 
  <ProjectsCards
    key={proj.id}
    img={proj.cover_img}
    t={proj.title}
    p={proj.desc} 
  />
</Link>

            ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Projects;

