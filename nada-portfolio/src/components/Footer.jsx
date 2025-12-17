// import React, { Component } from 'react';
import UX from "../assets/logo_nadayahia_uxui.png";
import "./Footer.css";
import drip from "../assets/dribbble-line.png";
import linked from "../assets/linkedin-fill.png";
import be from "../assets/behance-fill.png";




const Footer = () => {
    return ( 
        <>

          <footer class="footer">
         <img src={UX} alt="ux"/>
         <div className="icon_rights">
              <div className="row_links">
                <p className="l">Blogs</p>
                <p className="l">Projects</p>
                 <p className="l">About</p>
                <p className="l">contact</p>
            </div>
          <p class="f16_">© 2025 Nada Yahia. All rights reserved.</p>
          
          </div>

          {/* <div className="row_links"> */}

           <div class="ro_social">
         <a class="a" href="https://dribbble.com/nada_yahia" > <img src={drip} alt=''/></a>
          <a class="a" href="https://www.linkedin.com/in/nada-yahia-mostafa/" ><img src={linked} alt=''/></a>
         <a class="a" href="https://www.behance.net/nadayahia_" > <img src={be} alt='behance'/></a>
          </div>
         

              {/* <div className="col_links">
               
            </div> */}
          {/* </div> */}


    </footer>
        
        
        
        </>
        
     );
}
 
export default Footer;