import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BannerSlider = () => {
  const slides = [
    { image: "/slide1.jpg", alt: "Professional Training Programs" },
    { image: "/slide2.jpg", alt: "Promotional Materials" },
    { image: "/slide3.jpg", alt: "Data Visualization Solutions" },
    { image: "/slide4.jpg", alt: "Web design and Development" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [containerHeight, setContainerHeight] = useState(0);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          slides.map((slide) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = slide.image;
              img.onload = () => {
                // Calculate aspect ratio and set container height
                const aspectRatio = img.naturalHeight / img.naturalWidth;
                const newHeight = Math.min(window.innerWidth * aspectRatio, window.innerHeight * 0.7);
                setContainerHeight(newHeight);
                resolve();
              };
              img.onerror = reject;
            });
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();

    // Handle window resize
    const handleResize = () => {
      const img = new Image();
      img.src = slides[currentIndex].image;
      img.onload = () => {
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const newHeight = Math.min(window.innerWidth * aspectRatio, window.innerHeight * 0.7);
        setContainerHeight(newHeight);
      };
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || isLoading) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isLoading, nextSlide]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section 
      className="w-full relative overflow-hidden mt-[70px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Banner images carousel"
      tabIndex={0}
    >
      <div 
        className="w-full relative"
        style={{ height: `${containerHeight}px` }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-contain"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/30 transition-all duration-200"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/30 transition-all duration-200"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide indicators/dots */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10"
        role="tablist"
        aria-label="Slide selection"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white scale-125" 
                : "bg-white bg-opacity-40 hover:bg-opacity-60"
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const BannerSlider = () => {
//   const slides = ["/slider1.png", "/slider2.png", "/slider3.png", "/slider4.png"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Preload images to prevent loading during transitions
//   useEffect(() => {
//     slides.forEach((slide) => {
//       const img = new Image();
//       img.src = slide;
//     });
//   });

//   useEffect(() => {
//     if (isPaused) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 10000);
    
//     return () => clearInterval(interval);
//   }, [slides.length, isPaused]);

//   return (
//     <section 
//       className="w-full relative overflow-hidden mt-16"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       aria-roledescription="carousel"
//       aria-label="Banner images carousel"
//     >
//       <div className="w-full h-[400px] relative">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={currentIndex}
//             className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
//             initial={{ opacity: 0, x: 200 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -200 }}
//             transition={{
//               opacity: { duration: 0.3 },
//               x: { duration: 0.3, ease: "easeInOut" },
//             }}
//           >
//             <img
//               src={slides[currentIndex]}
//               alt={`Slide ${currentIndex + 1}`}
//               className="max-h-full w-full object-cover"
//               loading="eager"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
      
//       {/* Navigation arrows */}
//       <button 
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
//         onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
//         aria-label="Previous slide"
//       >
//         ←
//       </button>
      
//       <button 
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
//         onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
//         aria-label="Next slide"
//       >
//         →
//       </button>
      
//       {/* Slide indicators/dots */}
//       <div 
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10"
//         role="tablist"
//         aria-label="Slide selection"
//       >
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//               index === currentIndex ? "bg-white" : "bg-white bg-opacity-40"
//             }`}
//             role="tab"
//             aria-selected={index === currentIndex}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BannerSlider;
