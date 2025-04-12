import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import servicesData from "../data/services.json"; 

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="text-center text-[#0e68b1] py-20">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-white text-[#0e68b1] py-16 px-8 md:px-16 mt-10">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{service.title}</h1>
        <p className="text-lg md:text-xl">{service.description}</p>
        <div className="mt-4 h-1 w-24 bg-[#0e68b1] mx-auto"></div>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
          <ul className="grid grid-cols-1 gap-4">
            {service.key_benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 bg-[#0e68b1]/10 p-4 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Who is it for?</h2>
          <ul className="space-y-4">
            {service.use_cases.map((useCase, index) => (
              <motion.li
                key={index}
                className="bg-[#0e68b1]/10 p-4 rounded-lg text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {useCase}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">How We Work</h2>
        <div className="relative border-l-2 border-[#0e68b1]/50">
          {service.process.map((step, index) => (
            <motion.div
              key={index}
              className="mb-8 ml-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-4 top-0 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-[#0e68b1] font-bold">{index + 1}</span>
              </div>
              <div className="bg-[#0e68b1]/10 p-4 rounded-lg">
                <p>{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          to="/contact"
          className="border border-[#0e68b1] bg-white text-[#0e68b1] px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-[#0e68b1] hover:text-white inline-block"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
};

export default ServiceDetailPage;
