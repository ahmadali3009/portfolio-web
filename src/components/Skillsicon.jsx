import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaNodeJs, FaGitAlt, FaPhp,
  FaHtml5, FaCss3Alt, FaDocker, FaSass
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiMongodb,
  SiExpress, SiRedux, SiTailwindcss,
  SiNextdotjs, SiFirebase, SiPostgresql,
  SiMysql
} from 'react-icons/si';

const Skillsicon = () => {
  const { t } = useTranslation();

  const iconVariant = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [-8, 8],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  });

  const skills = [
    // Frontend
    { icon: <FaReact />, color: "text-[#61DAFB]", duration: 2.0 },
    { icon: <SiRedux />, color: "text-[#764ABC]", duration: 2.2 },
    { icon: <SiNextdotjs />, color: "text-white", duration: 2.4 },
    { icon: <SiJavascript />, color: "text-[#F7DF1E]", duration: 2.6 },
    { icon: <SiTypescript />, color: "text-[#3178C6]", duration: 2.8 },
    { icon: <FaHtml5 />, color: "text-[#E34F26]", duration: 3.0 },
    { icon: <FaCss3Alt />, color: "text-[#1572B6]", duration: 3.2 },
    { icon: <SiTailwindcss />, color: "text-[#06B6D4]", duration: 3.4 },
    { icon: <FaSass />, color: "text-[#CC6699]", duration: 3.6 },

    // Backend
    { icon: <FaNodeJs />, color: "text-[#339933]", duration: 3.8 },
    { icon: <SiExpress />, color: "text-white", duration: 4.0 },
    { icon: <FaPhp />, color: "text-[#777BB4]", duration: 4.2 },
    { icon: <SiMongodb />, color: "text-[#47A248]", duration: 4.4 },
    { icon: <SiPostgresql />, color: "text-[#336791]", duration: 4.6 },
    { icon: <SiMysql />, color: "text-[#4479A1]", duration: 4.8 },

    // Tools & Others
    { icon: <FaGitAlt />, color: "text-[#F05032]", duration: 5.0 },
    { icon: <FaDocker />, color: "text-[#2496ED]", duration: 5.2 },
    { icon: <SiFirebase />, color: "text-[#FFCA28]", duration: 5.4 }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-white">{t('technologies.titlePart1')}</span>
          <span className="text-purple-600">{t('technologies.titlePart2')}</span>
        </h2>
        <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={iconVariant(skill.duration)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-2xl border-2 border-purple-500/30 bg-white/5 backdrop-blur-sm 
                            flex items-center justify-center hover:border-purple-500 transition-colors duration-300">
                <div className={`text-4xl ${skill.color}`}>
                  {skill.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skillsicon
