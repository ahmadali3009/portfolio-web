// src/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from "../assets/img1.jpg";
import { motion } from "framer-motion";
import { HOMEEN, HOMEAR } from '../constants'; // Import constants for multilingual content

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  const { t, i18n } = useTranslation();

  // Determine which language content to use based on current language
  const homeContent = i18n.language === 'ar' ? HOMEAR[0] : HOMEEN[0];

  return (
    <div>
      <div className="mt-6 mx-auto grid max-w-xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-semibold tracking-tight text-gray-200 sm:text-4xl"
          >
            {homeContent.greeting}
          </motion.h2>
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-2xl mt-10 tracking-tight bg-gradient-to-r from-white via-purple-500 to-purple-700 bg-clip-text text-transparent sm:text-l"
          >
            {homeContent.title}
          </motion.h1>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-gray-200"
          >
            {homeContent.description}
          </motion.p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={img1}
            className="rounded-lg bg-gray-800 w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
