import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen bg-white px-6 py-20 flex flex-col items-center">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-[#0e68b1]"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl mb-10 text-center text-[#0e68b1]"
        >
          Have any questions or need more information? We’re here to help!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          {/* Direct Contact Card */}
          <div className="flex-1 bg-[#0e68b1] p-8 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Direct Contact</h3>
            <div className="flex items-center mb-3">
              <Phone className="w-6 h-6 mr-3 text-white" />
              <span className="text-lg text-white">+250 781685464</span>
            </div>
            <div className="flex items-center mb-3">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-6 h-6 mr-3 text-green-400"
              />
              <span className="text-lg text-white">+250 781685464</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-3 text-white" />
              <span className="text-lg text-white">info@innostat.com</span>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="flex-1 bg-[#0e68b1] p-8 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Social Media</h3>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/innostat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram className="w-8 h-8 text-white" />
              </a>
              <a
                href="https://twitter.com/innostat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Twitter className="w-8 h-8 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/innostat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Linkedin className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-[#0e68b1]">
            We guarantee a response in less than 3 hours. Whether you have an inquiry,
            a suggestion, or want to collaborate, drop us a message and we’ll get back to you promptly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
