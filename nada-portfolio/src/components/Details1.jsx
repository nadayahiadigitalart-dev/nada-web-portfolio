import React, { Component } from 'react';

const Details1 = (props) => {
    return ( <>

     <div className='bg_photo'>
        <img src={props.img} alt={props.alt} />
    </div>
    
    
    </> );
}
 
export default Details1;