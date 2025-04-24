import React from 'react';
import ahmad from "../assets/ahmad.png";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -left-48 top-0 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -right-48 bottom-0 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          <span className="text-white">{t('about.title')}</span>
          <span className="text-purple-600">{t('about.title2')}</span>
        </h2>
        <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ahmad}
                  alt="Ahmad Ali"
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-4 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl transform rotate-6 scale-105"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* About Text */}
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                {t('about.content')}
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-xl border border-purple-500/10">
                <div className="text-3xl font-bold text-purple-400">3</div>
                <div className="text-gray-400 mt-2">Years of Experience</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-xl border border-purple-500/10">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-gray-400 mt-2">Projects Completed</div>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/Resume(P).pdf"
                download
                className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl text-white font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25"
                onClick={(e) => {
                  // Optional: Add click tracking
                  console.log('Download started');
                }}
              >
                <FaDownload className="text-lg" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
