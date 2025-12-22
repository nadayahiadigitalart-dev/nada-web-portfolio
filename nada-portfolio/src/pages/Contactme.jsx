import React, { useState } from 'react';
import './Contactme.css';
import drip from "../assets/dribbble-line.png";
import linked from "../assets/linkedin-fill.png";
import be from "../assets/behance-fill.png";
import { Supabase } from '../Supabase';
import Footer from '../components/Footer';
import Header from '../components/Header';
 const Contactme = () => {

    const [sender_name,setsender_name] = useState("");
    const [sender_email,setsender_email] = useState("");
    const [sub,setSubject] = useState("");
    const [msg,setMsg] = useState("");

//    async function sendMsg(){
//         const res= await Supabase.from("Contact Messages").insert({"sender_name":sender_name, "sender_email":sender_email, "msg":msg});

//         console.log()
//     }


    async function sendMsg() {
  const { data, error } = await Supabase
    .from("Contact Messages")
    .insert([
      {
        // sender_name: sender_name,
        // sender_email: sender_email,
        // subject: sub,
        // message: msg,

        "sender_name":sender_name, "sender_email":sender_email,
        "subject": sub, "message": msg
      }
    ]);

  if (error) {
    console.error("Supabase error:", error);
    alert("Message failed ❌");
  } else {
    console.log("Inserted data:", data);
    alert("Message sent successfully ✅");
  }
}

    // async function sendMsg(){
    //     const res= await Supabase.from("Contact Messages").select("*");
    //      Set

    //     console.log(res);
    //     getAllsendMsgAPI()
    // }






    return ( <>

    


    <Header/>

    <br></br>
    <br></br>
    <br></br>

    <div className='cont'>

        <div className='right_cont'>
            <p className='q'>Let`s make something great together!</p>
              <div class="ro_social">
                     <a class="a" href="https://dribbble.com/nada_yahia" > <img src={drip} alt=''/></a>
                      <a class="a" href="https://www.linkedin.com/in/nada-yahia-mostafa/" ><img src={linked} alt=''/></a>
                     <a class="a" href="https://www.behance.net/nadayahia_" > <img src={be} alt='behance'/></a>
                      </div>
        </div>

        <br></br>
        <br></br>
        <br></br>


    <form className='form'>

        <div className='row_label'>

<div className='col_l'>
        <label>Name</label>
        <input onChange={(i)=>{setsender_name(i.target.value)}} type='text' />
        </div>
<div className='col_l'>
        
        <label>Email</label>
        {/* <input type='text' /> */}
        <input onChange={(i)=>{setsender_email(i.target.value)}} type='text' />
        </div>
        </div>

         <label>Subject</label>
        <input onChange={(i)=>{setSubject(i.target.value)}} type='text' />

        <label >Message</label>
        <textarea className='label' onChange={(i)=>{setMsg(i.target.value)}} />
        {/* <button className='send'>Send</button> */}
        
        </form>

        <br></br>
        <br></br>


        {/* <button className='buu' onClick={()=>{console.log(sender_name)}}>
Send</button> */}

<button className='buu' onClick={sendMsg}>
  Send
</button>


</div>

<br></br>
        <br></br><br></br>
        <br></br>
         <br></br><br></br>
        <br></br>

<Footer/>
    
    </> );
 }
  
 export default Contactme;