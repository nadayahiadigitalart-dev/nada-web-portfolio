import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Projectdetails from './pages/Projectdetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <Projectdetails /> */}
  </React.StrictMode>
);


