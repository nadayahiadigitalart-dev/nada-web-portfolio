import React, { Component } from 'react';
import './Details1';

const Details2 = (props) => {
    return ( <>

      <div className='details'>

        <div className='box1'>
            <h1 className='title'>{props.title0}</h1>
            <p className='desc'>{props.des1}</p>
        </div>

        <div className='box2'>
            <h2 className='title'>
                {props.title1}
                
            </h2>

            {/* <Tag  tag=""  /> */}

            <div className='tag'>
                {props.tag1}
               
            </div>

            <div className='tag'>
                {props.tag2}
              
            </div>

            <div className='tag'>
                {props.tag3}
               
            </div>
        </div>

        <div className='box3'>
            <h3 className='title'>
                {props.title2}
            </h3>
            <p className='desc'>{props.des2}</p>

        </div>


    </div>
    
    
    </> );
}
 
export default Details2;