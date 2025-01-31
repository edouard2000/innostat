// AboutUs.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-[#0f5d9a] px-8 md:px-16 pt-20 pb-16 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          We Are InnoStat.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-2xl font-light text-white"
        >
          Transforming <span className="font-semibold">data</span> into digital excellence, redefining <span className="font-semibold">branding</span>, and shaping the <span className="font-semibold">future</span>.
        </motion.p>
        <div className="mt-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-2 mx-auto text-xl font-semibold text-white hover:text-gray-200 transition-colors"
          >
            Our Mission{" "}
            <ChevronDown
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 overflow-hidden"
              >
                <motion.p className="text-lg leading-relaxed text-white">
                  We don't just analyze data – we <span className="font-bold">revolutionize</span> how businesses understand and utilize their information. Our approach blends cutting-edge analytics with strategic thinking, turning challenges into opportunities.
                </motion.p>
                <motion.p className="text-lg leading-relaxed text-white mt-4">
                  Together, we are shaping the future of data-driven success.{" "}
                  <span className="block font-bold mt-4">
                    We don’t follow trends. We create them.
                  </span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
