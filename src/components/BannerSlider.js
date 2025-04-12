import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BannerSlider = () => {
  const slides = ["/slider1.png", "/slider2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full relative overflow-hidden" style={{ height: "70vh" }}>
      <div className="w-full h-full relative">
        <AnimatePresence initial={false}>
          <motion.div
            key={slides[currentIndex]}
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
            }}
          >
            <img
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="max-h-full w-full object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
