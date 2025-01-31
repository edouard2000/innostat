import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "What services does InnoStat provide?",
    answer:
      "InnoStat offers a range of services, including data analysis, graphic design and branding, short professional courses, data management, and web design and development. Our goal is to provide innovative solutions that drive success.",
  },
  {
    question: "What types of data analysis do you offer?",
    answer:
      "We provide customized data analysis solutions using tools like SPSS, RStudio, and STATA. Whether you need statistical insights, business intelligence, or research support, our experts help you make data-driven decisions.",
  },
  {
    question: "Do you offer professional training courses?",
    answer:
      "Yes! We provide hands-on training in data analysis, graphic design, and data management. Our courses cover tools such as SPSS, RStudio, STATA, Adobe Illustrator, KOBO Toolbox, and SurveyCTO.",
  },
  {
    question: "How can InnoStat help with branding and graphic design?",
    answer:
      "We offer creative branding and design solutions, including logo design, marketing materials (flyers, posters, banners), and digital branding to help businesses establish a strong identity.",
  },
  {
    question: "Can InnoStat build a website for my business?",
    answer:
      "Absolutely! We create custom, responsive, and user-friendly websites tailored to your business needs. Our web development services ensure a strong digital presence with modern design and functionality.",
  },
];

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left group focus:outline-none"
        onClick={toggle}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`
              w-3 h-3 rounded-full transition-colors duration-300
              ${isOpen ? "bg-white" : "bg-white/20"}
              group-hover:bg-white
            `}
          ></div>
          <h3
            className={`
              text-xl font-medium transition-colors duration-300 text-white
              group-hover:text-white
            `}
          >
            {question}
          </h3>
        </div>
        <ChevronDown
          size={20}
          className={`
            text-white transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-500
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="pb-5 pl-6 text-gray-200 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0f5d9a] px-6 py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-3xl">
        {/* Title */}
        <h2
          className={`
            text-4xl font-extrabold text-center mb-12 text-white
            transform transition-all duration-700 delay-200
            ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }
          `}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div
          className={`
            transform transition-all duration-700 delay-400
            ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }
          `}
        >
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

        {/* More Questions Button */}
        <div className="text-center mt-12">
          <a
            href="/faq"
            className="inline-flex items-center px-6 py-3 text-white text-lg font-medium bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300"
          >
            More Questions <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
