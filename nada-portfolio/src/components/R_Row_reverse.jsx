import React, { Component } from 'react';

import'./R_Row.css';


import Button from './Button';

const R_Row = (props) => {
    return (  <>

     <section className='row2'>
            <div className='col2'>
                <p className='rem2'>{props.t}</p>
                <p className='text'>{props.p}</p>
                <Button button="View Project" />
            </div>
                <img src={props.src} alt={props.src} />
        </section>

        {/* nadayahia_uxuidesigner_VRgame_web_promotion */}
    
    
    </>);
}
 
export default R_Row;