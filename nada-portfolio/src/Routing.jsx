import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Projectdetails from './pages/Projectdetails';
import THREEDProj from './pages/THREEDProj';
import Projects from './pages/Projects';
import About from './pages/About';
  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/3D projects' element={<Projectdetails />} />
            <Route path='/3D projectss' element={<THREEDProj />} />
            <Route path='/proj' element={<Projects />} />
            <Route path='/about' element={<About />} />



            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;