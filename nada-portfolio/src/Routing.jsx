import React, { Component } from 'react';
import Home from './pages/Home';
  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='*' element={<Error />} />

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;