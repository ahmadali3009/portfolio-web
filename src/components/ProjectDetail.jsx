import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
  const project = useLoaderData();
  const { t, i18n } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
          <FaArrowLeft />
          <span>{t('backToHome')}</span>
        </Link>
      </div>
      
      {/* Project Header */}
      <div className="container mx-auto px-6 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">{project.title}</h1>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors shadow-lg shadow-purple-600/20"
            >
              <FaGithub className="text-lg" />
              <span>Code</span>
            </motion.a>
            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-purple-600 hover:bg-purple-600/20 rounded-lg transition-colors shadow-lg shadow-purple-600/10"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </motion.div>
        
        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-600/10 border border-purple-500/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
          </div>
        </motion.div>
        
        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-purple-500/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
              {t('overview')}
            </h2>
            
            {/* Improved description rendering */}
            <div className="text-gray-300 leading-relaxed">
              {project.description.split('\n').map((paragraph, index) => {
                // Check if this is a bullet point
                if (paragraph.trim().startsWith('•')) {
                  return (
                    <div key={index} className="flex gap-3 mb-3">
                      <span className="text-purple-400 flex-shrink-0">•</span>
                      <span>{paragraph.trim().substring(1).trim()}</span>
                    </div>
                  );
                }
                // Check if this is a section header
                else if (paragraph.trim().endsWith(':') || paragraph.trim().endsWith(':\n')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-purple-300 mt-6 mb-3">
                      {paragraph.trim()}
                    </h3>
                  );
                }
                // Regular paragraph
                else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

