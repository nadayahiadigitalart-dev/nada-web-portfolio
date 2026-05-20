
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import Header from '../components/Header';
// import Details1 from '../components/Details1';
// import Details2 from '../components/Details2';
// import Contact from './../components/Contact';
// import Footer from './../components/Footer';
// import { Supabase } from "../Supabase";

// import uxui1 from '../assets/3d_2.png';

// const Projectdetails = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     if (!projectId) return;

//     async function fetchProject() {
//       const { data, error } = await Supabase
//         .from("projects")
//         .select("*")
//         .eq("id", projectId)
//         .single(); 

//       if (error) {
//         console.log("Error fetching project:", error);
//       } else {
//         setProject(data);
//       }
//     }

//     fetchProject();
//   }, [projectId]);

//   return (
//     <>
//       <div className='mid'>
//         <Header />
//         {project ? (
//           <>
//         <Details1
//          img={project.heroimg} alt=".." />

//             <Details2
//               key={project.id}
//               title0={project.title}
//               title1="Tools used"
//               title2="Project Overview"
//               tag1={project.tag}
//               tag2={project.tag1?.[1] || ""}
//               tag3={project.tag1?.[2] || ""}
//               des1={project.desc1}
//               des2={project.desc2}
//             />
//             <img src={project.images} alt={project.title0} />
//           </>
//         ) : (
//           <p>Loading project...</p>
//         )}
//       </div>

//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default Projectdetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from '../components/Header';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import { Supabase } from "../Supabase";

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

  // Inline styles for the row & column layout
  const styles = {
    sectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '3rem 2rem',
      gap: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    textColumn: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      gap: '1rem',
    },
    title: {
      fontSize: '2.5rem',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '600',
      color: '#ffffff', 
      margin: 0,
    },
    subtitle: {
      fontSize: '1.25rem',
      fontFamily: "'Poppins', sans-serif",

      fontWeight: '600',
      color: '#0E8C88', 
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    paragraph: {
      fontSize: '1.1rem',
      fontFamily: "'Poppins', sans-serif",
      lineHeight: '1.6',
      color: '#f8f8f8',
      margin: '0.5rem 0 0 0',

    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      maxWidth: '550px',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      objectFit: 'cover',
    },
  };

  return (
    <>
      <div className='mid'>
        <Header />
        
        {project ? (
          /* Main Details Section: Row layout */
          <section style={styles.sectionContainer}>
            
            {/* Left Side: Column Layout for Text Data */}
            <div style={styles.textColumn}>
              <p style={styles.title}>{project.title}</p>
              <p style={styles.subtitle}>{project.category}</p>
              <p style={styles.paragraph}>{project.desc1}</p>
            </div>

            {/* Right Side: Project Image Preview */}
            <div style={styles.imageContainer}>
              <img 
                src={project.images} 
                alt={project.title} 
                style={styles.image} 
              />
            </div>

          </section>
        ) : (
          <p style={{ textAlign: 'center', padding: '3rem' }}>Loading project details...</p>
        )}
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Projectdetails;