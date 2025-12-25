
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
        .single(); 

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
        {project ? (
          <>
        <Details1
         img={project.heroimg} alt=".." />

            <Details2
              key={project.id}
              title0={project.title}
              title1="Tools used"
              title2="Project Overview"
              tag1={project.tag}
              tag2={project.tag1?.[1] || ""}
              tag3={project.tag1?.[2] || ""}
              des1={project.desc1}
              des2={project.desc2}
            />
            <img src={project.images} alt={project.title0} />
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
