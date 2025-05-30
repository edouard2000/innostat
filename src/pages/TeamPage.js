import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Izabayo Josias,MPH",
    role: "Founder | Researcher | Statistician | Graphic Designer",
    education: "Master of Public Health-Epidemiology & Disease Control",
    linkedIn: "https://www.linkedin.com/in/izabayo-josias-957264205",
    avatar: "/josias.jpg",
  },
  {
    id: 2,
    name: "Kwizera Edouard",
    role: "Co-Founder | Developer",
    education: "Bachelor of Computer Science and Philosophy, Princeton University",
    linkedIn: "https://www.linkedin.com/in/edouard-princeton-cs",
    avatar: "/edouard.png",
  },
  {
    id: 3,
    name: "Ntakirutimana Zachee,MPH",
    role: "Head of Training | Tutorial Assistant",
    education: "Master of Public Health-Epidemiology & Disease Control",
    linkedIn: "https://www.linkedin.com/in/ntakirutimana-zachee-5ba17a18b",
    avatar: "/vet.jpg",
  },
  {
    id: 5,
    name: "Ngizwenayo Josue",
    role: "Head of Marketing",
    education: "Bachelor of Marketing, Christian University of Rwanda",
    linkedIn: "https://www.linkedin.com/in/josue-ngizwenayo-19528a345",
    avatar: "/jo_mukuu.jpeg",
  },
  {
    id: 6,
    name: "Hakizimana Noel",
    role: "Communications Officer",
    education: "Bachelor of Mechanical Engineering, University of Rwanda",
    linkedIn: "https://www.linkedin.com/in/hakizimana-no%C3%ABl-b9881a319",
    avatar: "/noel.jpg",
  },
  {
    id: 4,
    name: "Mfitumukiza Peter",
    role: "Software Engineer",
    education: "Software Engineering, African Leadership University",
    linkedIn: "https://www.linkedin.com/in/peter-mfitumukiza-78b8a91b4",
    avatar: "/peter.jpeg",
  },
  {
    id: 7,
    name: "Dr Kwizera Hosiane",
    role: "Adviser | Medical Doctor ",
    education: "Bachelor of Medicine and Surgery, University of Rwanda ",
    linkedIn: "https://www.linkedin.com/in/kwizera-hosiane-a159301a0",
    avatar: "/hosiane.jpeg",
  },
  {
    id: 8,
    name: "Nzamukosha Beatrice",
    role: "Trainer | Assistant lecturer",
    education: "University of Rwanda, Masters of Science in Agroforestry and Soil Management",
    linkedIn: "https://www.linkedin.com/in/beatrice-nzamukosha-17a9481b6",
    avatar: "/beatrice.jpeg",
  },
   {
    id: 8,
    name: "Gasafari Mpabuka Willy",
    role: "Senior Consultant | Statistician | Lecturer",
    education: "Masters in Demography (Population Studies)",
    linkedIn: "https://www.linkedin.com/in/willy-gasafari-383b2a179",
    avatar: "/willy.jpg",
  },
];

const TeamPage = () => {
  return (
    <section id="team" className="w-full py-20 px-8 md:px-16 bg-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-center mt-10 mb-6 text-[#0e68b1]">
          Meet Our Team
        </h2>
        <p className="text-[#0e68b1]/80 text-lg md:text-xl">
          Passionate professionals committed to excellence.
        </p>
        <div className="mt-4 w-24 h-1 bg-[#0e68b1] mx-auto"></div>
      </motion.div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-[#0e68b1] rounded-2xl p-6 border border-white/30 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {member.name}
              </h3>
              <p className="text-white/80 text-sm">{member.role}</p>
              <p className="text-white/60 text-xs mt-2">{member.education}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(member.linkedIn, "_blank")}
                className="mt-4 flex items-center gap-2 px-4 py-2 border border-white/30 bg-white rounded-full text-[#0e68b1] text-sm transition-colors duration-300 hover:bg-white/90"
              >
                <Linkedin className="w-5 h-5" />
                Connect
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
