import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, About, Experience, Tech, Works, Contact, StarsCanvas } from './components';
// import { Navbar } from './components';
// import Navbar from './components';
// import {
//   About, Contact, Experience, Feedbacks, Hero,
//   Navbar, Tech, Works, StarCanvas
// } from './components';

const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
