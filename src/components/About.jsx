import React from 'react';
import ahmad from "../assets/ahmad.png";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="bg-custom-dark-blue mt-12">
        <h1 className="text-center text-3xl text-white">
          {t('about.title')}
          <span className="text-purple-800">{t('about.title2')}</span>
        </h1>
      </div>
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-1 w-80 h-80">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            alt="Ahmad Ali"
            src={ahmad}
            className="rounded-lg bg-gray-800 w-80 h-80"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 sm:mx-6 text-gray-200"
          >
            {t('about.content')}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
