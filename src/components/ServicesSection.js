import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Data Analysis and Reporting",
    description:
      "Unlock the full potential of your data with our expert data analysis services.",
    image: "/data_analysis&report.jpg",
  },
  {
    id: 2,
    title: "Graphic Design and Branding",
    description:
      "We specialize in producing high-quality, customized materials including notebooks,infographics, flyers, banners, badges, pull-up stands, posters...",
    image: "/branding.jpg",
  },
  {
    id: 3,
    title: "Short Courses and Professional Training",
    description:
      "Boost your career with our expert-led, certified training programs designed for today's competitive landscape.",
    image: "/shortcourses.jpg",
  },
  {
    id: 4,
    title: "Data Management Services",
    description:
      "Streamline your data processes with our reliable and efficient data management solutions.",
    image: "/datamanagement.jpg",
  },
  {
    id: 5,
    title: "Web Design and Development",
    description:
      "Create a powerful online presence with our custom web design and development services.",
    image: "/webdesign.jpg",
  },
  {
    id: 6,
    title: "Research and Consultancy",
    description:
      "Deliver impact with expert research and consultancy services for NGOs, academia, government, and businesses.",
    image: "/research.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#0e68b1] mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-sm md:text-base text-[#0e68b1]/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Discover our range of professional services designed to boost your business.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="block"
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-md border border-[#0e68b1]/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-contain bg-gray-50"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#0e68b1] mb-2 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#0e68b1]/80 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
