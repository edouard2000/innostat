import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Lightbulb, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-white text-center px-6 pb-0 bg-[#0f5d9a]">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Think. <span className="text-white">Innovate.</span> Excel.
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl font-medium mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        We are{" "}
        <span className="text-white">
          <Typewriter
            words={["Creative", "Reliable", "Impactful"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.h2>

      <motion.div
        className="mt-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Lightbulb className="w-12 h-12 text-white animate-pulse" />
        <p className="text-sm text-white mt-2">Innovation starts here.</p>
      </motion.div>
      <motion.div
        className="absolute bottom-10 flex flex-col items-center cursor-pointer"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        <p className="text-sm text-white">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
