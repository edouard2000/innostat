import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Star, Lightbulb, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <section className="w-full py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-base md:text-lg font-medium text-[#0e68b1]/80">
              Transforming Data into 
              <span className="font-bold text-[#0e68b1] ml-2">
                <Typewriter
                  words={["Insights", "Solutions", "Success"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
            </div>
          </motion.div>

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#0e68b1] mb-4 text-center">Who We Are</h2>
            <p className="text-sm md:text-base text-[#0e68b1]/80 leading-relaxed text-center max-w-3xl mx-auto">
              The InnoStat Ltd is a registered liability company established in Rwanda in accordance with Law No. 007/2021 of 05/02/2021 governing companies in Rwanda. We are dedicated to delivering high quality services in data analysis and reporting, graphic design and branding, professional short courses and training, web design and development, data management, as well as research and consultancy.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0e68b1] mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-[#0e68b1]" />
                </div>
                <h4 className="text-lg font-semibold text-[#0e68b1] mb-2">Excellence</h4>
                <p className="text-sm text-[#0e68b1]/70">Striving for the highest quality in everything we do</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-[#0e68b1]" />
                </div>
                <h4 className="text-lg font-semibold text-[#0e68b1] mb-2">Innovation</h4>
                <p className="text-sm text-[#0e68b1]/70">Continuously seeking new and better ways to serve our clients</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-[#0e68b1]" />
                </div>
                <h4 className="text-lg font-semibold text-[#0e68b1] mb-2">Integrity</h4>
                <p className="text-sm text-[#0e68b1]/70">Maintaining the highest standards of honesty and ethical conduct</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
