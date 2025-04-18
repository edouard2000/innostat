import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Data Analysis and Reporting",
    description:
      "Unlock the full potential of your data with our expert data analysis services.",
    link: "/services/1",
    image: "/data_analysis&report.png",
  },
  {
    id: 2,
    title: "Graphic Design and Branding",
    description:
      "We specialize in producing high-quality, customized materials including notebooks, flyers, banners, badges, pull-up stands, posters...",
    link: "/services/2",
    image: "/branding.png",
  },
  {
    id: 3,
    title: "Short Courses and Professional Training",
    description: "Boost your career with our expert-led, certified training programs designed for today’s competitive landscape.",
    link: "/services/3",
    image: "/shortcourses.JPG",
  },
  {
    id: 4,
    title: "Data Management Services",
    description: "Streamline your data processes with our reliable and efficient data management solutions.",
    link: "/services/4",
    image: "/datamanagement.JPG",
  },
  {
    id: 5,
    title: "Web Design and Development",
    description:
      "Create a powerful online presence with our custom web design and development services.",
    link: "/services/5",
    image: "/webdesign.JPG",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-[#0e68b1] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#0e68b1]/80 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Discover our range of professional services designed to boost your
          business.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#0e68b1]/20 transform transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0e68b1] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#0e68b1]/80 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-block px-6 py-2 bg-[#0e68b1] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#0e68b1]/90"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
