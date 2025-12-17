import React, { useState } from 'react';
import Button from './Button';
import Tag from './Tag';


import './Pcard.css';


const Pcard = (props) => {
  
  const [showImg, setShowImg] = useState(false);
    return (

<>
 <section
      className="proj_cards"
      onMouseEnter={() => setShowImg(true)}
    >
            <div className="x">
              {/* <div className="card_title"> */}
                <div className='c'>
                <p className="f32">{props.t}</p>
              
                </div>
               
                 {/* <Tag tag1="ui design"/>
                 <Tag tag2="wireframe"/>
                 <Tag tag3="prototype"/>
                 <Tag tag4="design system"/> */}

    {/* <div className="tags_layout">
    <p className="tag">{props.tag1}</p>
     <p className="tag">{props.tag2}</p>
     <p className="tag">{props.tag3}</p>
     <p className="tag">{props.tag4}</p>
     <p className="tag">{props.tag5}</p> 
     </div> */}
      
               <br></br><br></br>
              {/* </div> */}
              <div className={`reveal ${showImg ? "show" : ""}`}>
              <a className="a" href="UXUI_Projectdetails1.html">
               <Button button="Explore Work"/>
              </a>
              </div>
              
            </div>
            <img 
            // className="pcard-img"
             className={`pcard-img ${showImg ? "show" : ""}`}
             src={props.img} alt="ux_ui_mockup_card" />
          </section> 


</>


      );
}
 
export default Pcard;