import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#0f5d9a] text-white flex flex-col items-center justify-center px-8 md:px-16 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4 text-center"
      >
        Contact Us
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg md:text-xl mb-8 text-center max-w-2xl"
      >
        Have any questions or need more information? We’re here to help!
      </motion.p>

      {/* Contact Sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row gap-8 mb-12 w-full max-w-4xl"
      >
        {/* Direct Contact */}
        <div className="flex-1 bg-black/20 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
          <div className="flex items-center mb-3">
            <Phone className="w-6 h-6 mr-3" />
            <span className="text-lg">+250 788 123 456</span>
          </div>
          <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 mr-3 text-green-400" />
            <span className="text-lg">+250 788 123 456</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-3" />
            <span className="text-lg">info@innostat.com</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex-1 bg-black/20 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Social Media</h3>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/innostat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com/innostat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/innostat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Response Time Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl text-center"
      >
        <p className="text-lg">
          We guarantee a response in less than 3 hours. Whether you have an inquiry,
          a suggestion, or want to collaborate, drop us a message and we’ll get back to you promptly.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactPage;
