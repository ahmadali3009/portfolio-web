import React from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS_EN, PROJECTS_AR } from '../constants';
import { motion } from "framer-motion";

const Projectsdetail = () => {
  const { t, i18n } = useTranslation();
  const PROJECTS = i18n.language === 'ar' ? PROJECTS_AR : PROJECTS_EN;

  return (
    <div className="px-6 sm:px-6 lg:px-8">
      <div className="bg-custom-dark-blue my-20 py-8">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }} 
          className="text-center text-3xl text-white font-extrabold"
        >
          {t('projects.titlePart1')}
          <span className="text-purple-800">{t('projects.titlePart2')}</span>
        </motion.h1>
      </div>

      {PROJECTS.map((pro, index) => (
        <motion.div 
          key={index} 
          className="mb-8 flex flex-col lg:flex-row items-center lg:items-start justify-center p-6 bg-custom-dark-blue rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start items-center mb-4 lg:mb-0">
            <a href={pro.link} target="_blank" rel="noopener noreferrer">
              <motion.img 
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }} 
                src={pro.image} 
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"  
                width="200" 
                height="200" 
                alt={pro.title}
              />
            </a>
          </div>
          <motion.div 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }} 
            className="w-full max-w-xl lg:w-3/4 text-gray-200"
          >
            <h6 className="mb-2 font-semibold text-left text-xl">
              {pro.title}
            </h6>
            <a href={pro.link} target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="text-white bg-purple-700 hover:bg-purple-800 border border-purple-700 hover:border-purple-800 rounded-md px-4 py-2 m-1 transition-all"
              >
                {t('view')}
              </motion.button>
            </a>
            <p 
              className="text-left mt-4"
              dangerouslySetInnerHTML={{ __html: pro.description.replace(/\n/g, '<br />') }}
            />
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start">
              {pro.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-500 hover:border-purple-600 rounded-md px-3 py-1 m-1 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projectsdetail;
