import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Projectdetails from './pages/Projectdetails';
import THREEDProj from './pages/THREEDProj';
import Projects from './pages/Projects';
import About from './pages/About';
import TestAPI from './TestAPI';
// import Contact from './components/Contact';
import Contactme from './pages/Contactme';
  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/3D projects' element={<Projectdetails />} />
            <Route path='/3D projectss' element={<THREEDProj />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projectdetail3d1' element={<Projectdetails />} />
            <Route path='/contact' element={<Contactme />} />

            <Route path='/about' element={<About />} />
            <Route path='/test' element={<TestAPI/>}/>



            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;