import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Projectdetails from './pages/Projectdetails';
  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/3D projects' element={<Projectdetails />} />

            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;