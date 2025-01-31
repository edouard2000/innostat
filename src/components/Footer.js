import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f5d9a] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved at InnoStat
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;