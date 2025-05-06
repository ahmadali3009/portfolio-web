import React from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS_EN, PROJECTS_AR } from '../constants';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projectsdetail = () => {
  const { t, i18n } = useTranslation();
  const PROJECTS = i18n.language === 'ar' ? PROJECTS_AR : PROJECTS_EN;

  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-24 py-16">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold">
          <span className="text-white">{t('projects.titlePart1')}</span>
          <span className="text-purple-600">{t('projects.titlePart2')}</span>
        </h2>
        <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs lg:text-sm font-medium bg-purple-900/30 text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 text-xs lg:text-sm font-medium bg-purple-900/30 text-purple-300 rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="text-gray-300 text-sm lg:text-base mb-6 line-clamp-3">
                {project.description.split('\n').slice(0, 3).join('\n')}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span>Code</span>
                </motion.a>
                
                {/* New Details Button */}
                <Link
                  to={`/projects/${index}`}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors"
                >
                  <FaInfoCircle className="text-lg" />
                  <span>Details</span>
                </Link>
                
                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-purple-600 hover:bg-purple-600/20 rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Hover Effect Corner */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projectsdetail;
