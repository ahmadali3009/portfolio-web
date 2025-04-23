// src/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from "../assets/img1.jpg";
import { motion } from "framer-motion";
import { HOMEEN, HOMEAR } from '../constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Home = () => {
  const { t, i18n } = useTranslation();
  const homeContent = i18n.language === 'ar' ? HOMEAR[0] : HOMEEN[0];

  return (
    <section className="relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 pt-32 pb-12 sm:pt-40 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl sm:text-6xl font-bold text-white"
              >
                {homeContent.greeting}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-medium"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {homeContent.title}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-lg max-w-xl leading-relaxed"
            >
              {homeContent.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {/* Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <HiDownload className="text-xl" />
                Download CV
              </motion.button>

              {/* Social Links */}
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">20+</div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">6</div>
                <div className="text-gray-400">Featured Projects</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={img1}
                  alt="Profile"
                  className="rounded-2xl object-cover w-full h-full shadow-2xl"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
              </motion.div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -inset-4 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl transform rotate-6"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
