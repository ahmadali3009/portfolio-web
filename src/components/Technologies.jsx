import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaPhp
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, 
  SiExpress, SiRedux, SiTailwindcss, 
  SiCodeigniter, SiPassport
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const Technologies = () => {
  const { t, i18n } = useTranslation();

  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "Next.js", icon: <TbBrandNextjs className="text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ]
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
        { name: "CodeIgniter", icon: <SiCodeigniter className="text-[#EF4223]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Passport.js", icon: <SiPassport className="text-white" /> },
      ]
    },
    {
      category: "Tools",
      techs: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('technologies.titlePart1')}
            </span>
            <span className="text-white">
              {t('technologies.titlePart2')}
            </span>
          </h2>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {technologies.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={techIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-4xl">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;