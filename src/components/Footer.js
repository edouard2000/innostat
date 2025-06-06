import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0e68b1] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} InnoStat. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white/80 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white/80 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white/80 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/innostat_rw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/InnoSTAT_Rw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/innostat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/80">
          <p>
            Designed with passion by InnoStat. We believe in innovation and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
