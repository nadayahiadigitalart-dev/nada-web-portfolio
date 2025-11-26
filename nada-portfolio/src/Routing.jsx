import React, { Component } from 'react';
import Home from './pages/Home';
import Projectdetails from './pages/Projectdetails';
  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/p' element={<Projectdetails />} />

            <Route path='*' element={<Error />} />

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;