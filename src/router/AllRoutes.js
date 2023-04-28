import React from "react";
import Preview from "../views/Preview";

import HomeLightAnimation from '../views/all-home-version/HomeLightAnimation' ;

import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";

import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home-light-animation" element={<HomeLightAnimation />} />
        
        <Route path="/dark-particle-effect" element={<HomeDarkParticles />} />
        
        
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
};

export default AllRoutes;
