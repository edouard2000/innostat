import React from "react";
import BannerSlider from "./BannerSlider";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutUs from "./AboutUs";
import TeamSection from "./TeamSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-full">
        <BannerSlider />
      </div>
      <div className="container mx-auto px-4 -mt-4">
        <HeroSection />
        <ServicesSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default Home;
