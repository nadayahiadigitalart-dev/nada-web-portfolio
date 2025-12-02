import React, { Component } from 'react';

import glb from "../assets/Nada Yahia_22-101081_PC and Mobile Render.glb"

const THREEDProj = () => {
    return ( <>

    
    <section class="depth">

        <div class="coll">
        <p class="f32">Exploring Depth and Dimension</p>
        <p class="f20">Blending creativity with immersive </p>
        <p class="f16_">From interactive AR scenes to detailed <br></br>3D visuals that bring ideas to life.</p>
       <a class="a" href="3d_Projectdetails.html"> <button class="lined_bu">Explore</button></a>
        </div>
        
        
        <model-viewer 
    src={glb} 
    alt="3D Product Model showing ux ui soundfix project" 
    auto-rotate 
    camera-controls 
    shadow-intensity="1"
   style={{ width: "100%", height: "500px" }}>
    </model-viewer>

    </section>
    
    
    
    
    </> );
}
 
export default THREEDProj;