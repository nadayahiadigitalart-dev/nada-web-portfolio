import React, { Component } from 'react';
import './Details2.css';

const Details1 = (props) => {
    return ( <>

     <div className='bg_photo'>
        <img src={props.img} alt={props.alt} />
    </div>
    
    
    </> );
}
 
export default Details1;