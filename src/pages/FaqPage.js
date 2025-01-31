import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services does InnoStat provide?",
    answer:
      "InnoStat specializes in data analysis, graphic design and branding, short professional courses, data management, and web design and development. Our services are designed to empower individuals and businesses with innovative solutions.",
  },
  {
    question: "Who can benefit from InnoStat’s services?",
    answer:
      "We serve individuals, businesses, NGOs, and organizations that need data insights, branding, web solutions, or professional training. Whether you're a startup, a researcher, or a company looking to enhance your digital presence, we are here to help.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across multiple industries, including education, research, marketing, finance, technology, healthcare, and more. Our tailored solutions fit the needs of different sectors.",
  },
  {
    question: "What type of data analysis do you offer?",
    answer:
      "We offer statistical analysis, predictive modeling, business intelligence, data visualization, and more. Our experts work with SPSS, RStudio, and STATA to help businesses make data-driven decisions.",
  },
  {
    question: "Do you offer customized branding solutions?",
    answer:
      "Yes! We offer unique branding services, including logo design, business cards, flyers, posters, banners, certificates, and digital branding strategies to help businesses stand out.",
  },
  {
    question: "Can I enroll in a short course online?",
    answer:
      "Yes, InnoStat offers both in-person and online professional training courses in data analysis, graphic design, and data management. Our online courses are designed to be interactive and practical.",
  },
  {
    question: "What tools do you teach in your data analysis courses?",
    answer:
      "We provide hands-on training in SPSS, RStudio, and STATA, equipping learners with the skills needed to conduct effective data analysis and research.",
  },
  {
    question: "Can I learn graphic design at InnoStat?",
    answer:
      "Absolutely! Our graphic design training covers tools like Adobe Illustrator and practical techniques to create professional branding materials.",
  },
  {
    question: "How does InnoStat help with data management?",
    answer:
      "We assist businesses and researchers in organizing, storing, and maintaining data securely using advanced tools like KOBO Toolbox and SurveyCTO.",
  },
  {
    question: "Does InnoStat build websites?",
    answer:
      "Yes! We offer custom web design and development services, creating modern, responsive, and user-friendly websites that align with your brand and business goals.",
  },
  {
    question: "How long does it take to develop a website with InnoStat?",
    answer:
      "Project timelines vary depending on the complexity of the website. A simple website can take a few weeks, while a more complex one may take a few months. We ensure timely delivery without compromising quality.",
  },
  {
    question: "What is the pricing structure for InnoStat’s services?",
    answer:
      "Our pricing varies based on the service required. For data analysis, branding, web development, and training courses, we provide competitive rates tailored to each client's needs. Contact us for a detailed quote.",
  },
  {
    question: "How can I request a service from InnoStat?",
    answer:
      "You can reach out to us via our website, email, or LinkedIn. Our team will be happy to discuss your needs and provide a tailored solution.",
  },
  {
    question: "Do you offer corporate training for businesses?",
    answer:
      "Yes, we provide corporate training tailored to organizations looking to enhance their team’s skills in data analysis, digital branding, and data management.",
  },
  {
    question: "Can InnoStat handle large datasets for analysis?",
    answer:
      "Yes, we work with both small and large datasets, offering efficient analysis and insights to help businesses make informed decisions.",
  },
  {
    question: "Does InnoStat provide support after website development?",
    answer:
      "Yes! We offer post-launch support, including maintenance, updates, and additional improvements to ensure your website stays up to date.",
  },
  {
    question: "How do I get started with InnoStat?",
    answer:
      "Simply contact us through our website or LinkedIn, and we’ll guide you through the process of selecting the service that best fits your needs.",
  },
  {
    question: "Can I collaborate with InnoStat on research projects?",
    answer:
      "Yes, we work with researchers and organizations to assist in data collection, analysis, and visualization for academic and business research.",
  },
];

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <motion.div
      className="border-b border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left group focus:outline-none"
        onClick={toggle}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-3 h-3 rounded-full"
            animate={{
              backgroundColor: isOpen ? "#ffffff" : "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">
            {question}
          </h3>
        </div>
        <ChevronDown
          size={20}
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-6 text-gray-200 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0f5d9a] px-6 py-20 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div>
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              toggle={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
