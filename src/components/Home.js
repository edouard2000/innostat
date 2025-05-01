import React from "react";
import BannerSlider from "./BannerSlider";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
        <BannerSlider />
      <div className="container mx-auto px-4 -mt-4">
        <HeroSection />
        <ServicesSection />
        <a class="twitter-timeline" href="https://twitter.com/InnoSTAT_Rw?ref_src=twsrc%5Etfw">Tweets by InnoSTAT_Rw</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  );
};

export default Home;
