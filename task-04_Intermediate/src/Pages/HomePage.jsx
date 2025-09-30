// src/App.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import QualityCare from "../components/Care";


function HomePage() {
  return (
    <div >
      
      <HeroSection />
      <HowItWorks/>
      <QualityCare/>
     
    </div>
  );
}

export default HomePage;
