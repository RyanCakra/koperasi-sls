import React from 'react';
import { Routes, Route, useLocation, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
// import Works from '../pages/Works';
// import Projects from '../pages/Projects';
import PageWrapper from '../components/templates/PageWrapper.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageWrapper>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/works" element={<Works />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </PageWrapper>
  );
};

export default AnimatedRoutes;
