import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Lightbulb } from 'lucide-react';

const HeroSection = () => {
  const services = ['Design', 'Data Analysis', 'Training Excellence'];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Lightbulb size={48} className="text-[#0f5d9a]" />
        </div>

        <h1 className="text-3xl font-semibold mb-4">
          <span className="text-[#0f5d9a]">InnoStat</span>
          <br />
          Your one-stop solution for{' '}
          <span className="text-[#0f5d9a]">
            <Typewriter
              words={services}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        
        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Providing exceptional design services, professional data management and analysis, 
          and top-notch training courses tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;