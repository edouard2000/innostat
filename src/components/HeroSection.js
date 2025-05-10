import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Star, Lightbulb, Shield, Target, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-blue-100 top-1/4 -left-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute w-80 h-80 rounded-full bg-blue-50 bottom-1/4 -right-20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="z-10 px-4 md:px-0 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#0e68b1] tracking-tight">
              Innovation Simplified
            </h1>
            <div className="mt-6 text-xl md:text-2xl font-medium text-[#0e68b1]/80">
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

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-[#0e68b1] mb-6 text-center">Who We Are</h2>
              <p className="text-lg text-[#0e68b1]/80 leading-relaxed mb-12 text-center">
                The InnoStat Ltd is a registered liability company established in Rwanda in accordance with Law No. 007/2021 of 05/02/2021 governing companies in Rwanda. We are dedicated to delivering high-quality services in data analysis and reporting, graphic design and branding, professional short courses and training, web design and development, data management, as well as research and consultancy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-blue-50 rounded-xl p-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <Target className="h-12 w-12 text-[#0e68b1]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0e68b1] mb-4 text-center">Our Vision</h3>
                <p className="text-[#0e68b1]/80 leading-relaxed text-center">
                  To be a leading provider of innovative, data-driven, and design-centered solutions in Rwanda and beyond, empowering individuals, organizations, and communities through expert research, consultancy, professional training, data analysis, creative design, and digital development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-blue-50 rounded-xl p-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <Award className="h-12 w-12 text-[#0e68b1]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0e68b1] mb-4 text-center">Our Mission</h3>
                <p className="text-[#0e68b1]/80 leading-relaxed text-center">
                 Our mission is to empower individuals, organizations, and communities in Rwanda and beyond by delivering innovative, high-quality services in data analysis, graphic design, professional training, data management, web development, and research consultancy. Through evidence-based insights, hands-on capacity building, and creative solutions, we support informed decision-making, amplify impact, and contribute to inclusive, sustainable development.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl font-bold text-[#0e68b1] mb-8">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-[#0e68b1]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0e68b1] mb-2">Excellence</h4>
                  <p className="text-[#0e68b1]/70">Striving for the highest quality in everything we do</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-[#0e68b1]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0e68b1] mb-2">Innovation</h4>
                  <p className="text-[#0e68b1]/70">Continuously seeking new and better ways to serve our clients</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-[#0e68b1]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0e68b1] mb-2">Integrity</h4>
                  <p className="text-[#0e68b1]/70">Maintaining the highest standards of honesty and ethical conduct</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
