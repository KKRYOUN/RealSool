import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutUs from './AboutUs';
import AboutSool from './AboutSool';
import AboutCategory from './AboutCategory';

const About = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/aboutSool" element={<AboutSool />} />
      <Route path="/aboutCategory" element={<AboutCategory />} />
    </Routes>
    </>
  )
}

export default About;