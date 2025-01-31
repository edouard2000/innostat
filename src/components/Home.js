import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import TeamSection from "./TeamSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#0f5d9a]">
      <HeroSection />
      <AboutUs />
      <TeamSection />
    </div>
  );
};

export default Home;
