import React from 'react';
import { useTranslation } from 'react-i18next';
import { EXPERIENCES_EN, EXPERIENCES_AR } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
    const { t, i18n } = useTranslation();
    const EXPERIENCES = i18n.language === 'ar' ? EXPERIENCES_AR : EXPERIENCES_EN;

    return (
        <div className="relative py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 -left-48 top-0 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute w-96 h-96 -right-48 bottom-0 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Title Section */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold">
                    <span className="text-white">{t('experiences.title')}</span>
                    <span className="text-purple-600">{t('experiences.subtitle')}</span>
                </h2>
                <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto px-4">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="relative"
                    >
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
                            <div className="w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                        </div>

                        {/* Experience Card Container */}
                        <div className={`flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                                      flex-col`}>
                            {/* Timeline Content */}
                            <div className="w-full md:w-1/2 px-6">
                                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl 
                                              shadow-xl backdrop-blur-sm border border-purple-500/10 
                                              hover:border-purple-500/30 transition-all duration-300">
                                    {/* Year Badge */}
                                    <div className="inline-block px-4 py-2 bg-purple-900/30 text-purple-300 
                                                  rounded-full text-sm font-medium mb-4">
                                        {experience.year}
                                    </div>

                                    {/* Role & Company */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {experience.role}
                                    </h3>
                                    <h4 className="text-lg text-purple-400 mb-4">
                                        {experience.company}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                                        {experience.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs font-medium bg-purple-900/30 
                                                         text-purple-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Point */}
                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                                          items-center justify-center">
                                <motion.div 
                                    whileHover={{ scale: 1.2 }}
                                    className="w-4 h-4 rounded-full bg-purple-600 shadow-lg 
                                             shadow-purple-500/50"
                                >
                                    <div className="w-full h-full rounded-full bg-purple-400 
                                                  animate-ping opacity-20"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
