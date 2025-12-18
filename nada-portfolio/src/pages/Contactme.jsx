import React, { useState } from 'react';
import './Contactme.css';
import drip from "../assets/dribbble-line.png";
import linked from "../assets/linkedin-fill.png";
import be from "../assets/behance-fill.png";
 const Contactme = () => {

    const [title,setTitle] = useState("");
    const [email,setEmail] = useState("");
    const [msg,setMsg] = useState("");




    return ( <>

    <div className='cont'>

        <div className='right_cont'>
            <p className='q'>Let`s make something<br></br> great together!</p>
              <div class="ro_social">
                     <a class="a" href="https://dribbble.com/nada_yahia" > <img src={drip} alt=''/></a>
                      <a class="a" href="https://www.linkedin.com/in/nada-yahia-mostafa/" ><img src={linked} alt=''/></a>
                     <a class="a" href="https://www.behance.net/nadayahia_" > <img src={be} alt='behance'/></a>
                      </div>
        </div>

    

    <form>

        <label>Name</label>
        <input onChange={(i)=>{setTitle(i.target.value)}} type='text' />
        
        <label>Email</label>
        {/* <input type='text' /> */}
        <input onChange={(i)=>{setEmail(i.target.value)}} type='text' />

        <lebal>Message</lebal>
        <textares  onChange={(i)=>{setMsg(i.target.value)}} />
        <button className='send'>Send</button>
        
        </form>  

        <button onClick={()=>{console.log(title)}}>
test value</button>    

</div>
    
    </> );
 }
  
 export default Contactme;