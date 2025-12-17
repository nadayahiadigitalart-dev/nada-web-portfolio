// import React, {useEffect, useState} from 'react';
// // import { useEffect } from 'react';
// import {Supabase} from './Supabase';

// const TestAPI = () => {

//     const [projects, setProjects] = useState([{
//         id:"",
//         cover_img:"",
//         title:""
// }]);



//     useEffect(()=>{

//          async function callGetAPI(){
//           const res = await Supabase.from("projects").select("*");
//           setProjects(res.data);
//             // console.log(res.data[0].title);
            
//         }

//         // callGetAPI();

//     },[]);
//     return ( <>
// 11213
    
    
//     </> );
// }
 
// export default TestAPI;



import { useEffect, useState } from "react";
// import TestAPI from './TestAPI';
import { Supabase } from "./Supabase";

const TestAPI = () => {

        const [projects, setProjects] = useState([{
        id:"",
        title:"",
        cover_img:"",
        images:""
}]);

    useEffect(()=>{
        
    async function CallGetAPI() {
        const projects = await Supabase.from("projects").select("*")
        setProjects(projects.data);
        // console.log(projects);

        {projects[0].category.map((c)=>{
            return <p>{c}</p>
        })}
        }

         CallGetAPI();

    },[]
    )


    return ( <>

1234

<p>{projects[0].title}</p>
<img src={projects[5].cover_img} alt="hiiii" />


    
    
    </> );
}
 
export default TestAPI;