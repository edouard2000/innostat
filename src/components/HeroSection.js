import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Code, LineChart, Target } from "lucide-react";

const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const missionRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <section className="w-full h-screen flex flex-col items-center justify-center relative">
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
        <div className="z-10 px-4 md:px-0 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#0e68b1] tracking-tight">
              Innovation Simplified
            </h1>
            
            <div className="mt-6 mb-8 text-xl md:text-2xl font-medium text-[#0e68b1]/80">
              We are 
              <span className="font-bold text-[#0e68b1] ml-2">
                <Typewriter
                  words={["creative", "strategic", "data-driven"]}
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          >
            {[
              { 
                icon: <Code className="h-8 w-8 text-[#0e68b1]" />, 
                title: "Develop", 
                description: "Custom solutions" 
              },
              { 
                icon: <LineChart className="h-8 w-8 text-[#0e68b1]" />, 
                title: "Analyze", 
                description: "Data-driven insights" 
              },
              { 
                icon: <Target className="h-8 w-8 text-[#0e68b1]" />, 
                title: "Deliver", 
                description: "Targeted results" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(14, 104, 177, 0.1)" }}
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md"
              >
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0e68b1] mb-2">{item.title}</h3>
                <p className="text-[#0e68b1]/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section 
        ref={missionRef}
        className="w-full py-8 px-4 md:px-0"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#0e68b1]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-[#0e68b1] mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <motion.div
            initial={{ height: isExpanded ? "auto" : 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <p className="text-lg text-[#0e68b1]/80 text-center leading-relaxed">
                We transform complex data into actionable insights, enabling businesses to 
                thrive in the digital era.
              </p>
              
              <div className="mt-8 pt-8 border-t border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#0e68b1] mb-2">Vision</h3>
                  <p className="text-[#0e68b1]/70">
                    A world where data empowers every decision
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#0e68b1] mb-2">Values</h3>
                  <p className="text-[#0e68b1]/70">
                    Excellence • Innovation • Integrity
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;