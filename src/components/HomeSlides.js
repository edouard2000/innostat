import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Data Analysis", description: "Insights that drive decisions." },
  { title: "Graphic Design & Branding", description: "Your vision, our creativity." },
  { title: "Short Courses", description: "Learn. Grow. Succeed." },
  { title: "Data Management", description: "Secure and structured data solutions." },
  { title: "Web Development", description: "Modern websites for a digital world." },
];

const HomeSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[50vh] flex flex-col items-center justify-center text-[#0e68b1] text-center px-6 bg-white">
      <div className="relative w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={services[currentIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="absolute w-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              {services[currentIndex].title}
            </h2>
            <p className="text-lg md:text-xl font-light mt-2">
              {services[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeSlides;
