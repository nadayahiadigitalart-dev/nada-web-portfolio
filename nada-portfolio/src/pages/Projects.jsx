
import React, { useState, useEffect } from "react";
import "./Projects.css";

import Header from "../components/Header";
import ProjectsCards from "../components/ProjectsCards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Supabase } from "../Supabase";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import DotGrid from "../components/DotGrid";


const Projects = () => {

//   async function seo() {
//   const res = await Supabase.from("SEO").select("*")
//   .eq("page_title", "Projects");
// }


  
  const [projects, setProjects] = useState([]);
 
  const [activeCat, setActiveCat] = useState("");

  
  // useEffect(() => {
  //   async function fetchProjects() {
  //     const { data, error } = await Supabase.from("projects").select("*").order("id");
  //     if (error) {
  //       console.log("Error fetching projects:", error);
  //     } else {
  //       setProjects(data);
        
  //       if (data.length > 0) setActiveCat(data[0].category);
  //     }
  //   }
  //   fetchProjects();
  // }, []);


  useEffect(() => {
  async function fetchProjects() {
    const { data, error } = await Supabase
      .from("projects")
      .select("*")
      .order("id");

    console.log("Supabase projects:", data); // 👈 ADD THIS

    if (error) {
      console.log("Error fetching projects:", error);
    } else {
      setProjects(data);


      console.log("ALL projects:", data);
console.log(
  "Categories from DB:",
  data.map(p => p.category)
);





      if (data.length > 0) setActiveCat(data[0].category);
    }
  }
  fetchProjects();
}, []);





  
  // const categories = [...new Set(projects.map((p) => p.category))];

  const categories = [
  ...new Set(
    projects
      .map(p => p.category)
      .filter(Boolean) // removes null/undefined
  )
];


  return (

    
    <>

    {/* <Helmet>
        <title>{seo.meta_title}</title>
        <meta name="description" content={seo.meta_description} />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/images/about.png" />
          <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      </Helmet> */}

              <div style={{ width: '100%', height: '1380px', position: 'absolute' , marginTop: '0px' ,zIndex: -5,    }}>
  <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#09292933"
    activeColor="#0E8C88"
    proximity={90}
    shockRadius={250}
    shockStrength={5}
    resistance={1700}
    returnDuration={1.5}
  />
  </div>


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
    b={proj.button}
    // on="View Project"
  />
</Link>

            ))}
        </div>
      </section>

      <br></br>
      <br></br>


      <Contact />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
};

export default Projects;

