// import React from 'react';
import React, { Component } from 'react';



import Pd from '../components/Pd';
import Header from '../components/Header';
import Tag from '../components/Tag';
import Details1 from '../components/Details1';
import Details2 from '../components/Details2';
import group169 from '../assets/Group 169.png';


import uxui1 from '../assets/3d_2.png';
import Contact from './../components/Contact';
import Footer from './../components/Footer';


const Projectdetails = () => {
    return ( <>
    
    <div className='mid' >

    <Header/>

    <Details1 img={uxui1} alt=".."  />

    {/* <div className='details'>

        <div className='box1'>
            <h1 className='title'>3D Booth Design</h1>
            <p className='desc'>A modern, interactive 3D booth 
                experience designed to attract visitors and 
                communicate brand identity through immersive 
                visuals and clean spatial layout.</p>
        </div>

        <div className='box2'>
            <h2 className='title'>
                
                Tools used
            </h2>

           

            <div className='tag'>
               
                interiordesign
            </div>

            <div className='tag'>
               
                3D
            </div>

            <div className='tag'>
                
                3D design
            </div>
        </div>

        <div className='box3'>
            <h3 className='title'>
               


            </h3>
        </div> */}


        <Details2   
        title0="3D Booth Design"
        title1="Tools used"
        title2="Project Overview"
        tag1="interior design"
        tag2="3D"
        tag3="3dDesign"
        des1="A modern, interactive 3D booth experience 
        designed to attract visitors and communicate brand 
        identity through immersive visuals and clean spatial layout."
        des2="This project focuses on creating a 3D exhibition booth that merges aesthetics, usability, and storytelling. The goal was to design a visually appealing booth that enhances visitor engagement and reflects the brand’s identity while keeping the navigation intuitive and realistic.<br>

Objective: To create a digital booth concept that feels real and can be experienced online or integrated into AR environments for virtual exhibitions."
          
        />

    <img src={group169}  />

    </div>

    <Contact />

    <Footer />


    
    
    </> );
}
 
export default Projectdetails;