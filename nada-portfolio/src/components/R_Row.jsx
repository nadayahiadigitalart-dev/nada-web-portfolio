import React, { Component } from 'react';

import'./R_Row.css';

import gameux from '../assets/sandoftime.png';
import Button from './Button';

const R_Row = (props) => {
    return (  <>

     <section className='row'>
            <div className='col'>
                <p className='rem2'>{props.t}</p>
                <p className='text'>{props.p}</p>
                <Button button="View Project" />
            </div>
                <img src={gameux} alt='nadayahia_uxuidesigner_VRgame_web_promotion' />
        </section>
        
    
    </>);
}
 
export default R_Row;