import React, { Component } from 'react';
import UX from "../assets/logo_nadayahia_uxui.png";

const Footer = () => {
    return ( 
        <>

          <footer class="footer">
         <img src={UX} alt="ux"/>
          <p class="f16_">© 2025 Nada Yahia. All rights reserved.</p>
          <div class="ro_social">
         <a class="a" href="https://dribbble.com/nada_yahia" > <img src="photos/dribbble-line.svg"/></a>
          <a class="a" href="https://www.linkedin.com/in/nada-yahia-mostafa/" ><img src="photos/linkedin-fill.svg"/></a>
         <a class="a" href="https://www.behance.net/nadayahia_" > <img src="photos/behance-fill.svg"/></a>

          </div>
    </footer>
        
        
        
        
        
        
        
        
        
        
        </>




        
     );
}
 
export default Footer;