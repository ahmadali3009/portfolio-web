import React from 'react';
import { useTranslation } from 'react-i18next';
import { EXPERIENCES_EN, EXPERIENCES_AR } from '../constants';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const Experience = () => {
    const { t, i18n } = useTranslation();
    const EXPERIENCES = i18n.language === 'ar' ? EXPERIENCES_AR : EXPERIENCES_EN;

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <div className="relative py-20" ref={containerRef}>
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
            <div className="max-w-6xl mx-auto px-4"
                 style={{
                     opacity: isInView ? 1 : 0,
                     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                 }}>
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
                        <div className={`flex items-center mb-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                                      flex-col group`}>
                            {/* Timeline Content */}
                            <div className="w-full md:w-1/2 px-6">
                                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl 
                                              shadow-xl backdrop-blur-sm border border-purple-500/10 
                                              hover:border-purple-500/30 transition-all duration-300
                                              group-hover:transform group-hover:scale-105
                                              hover:shadow-purple-500/10 hover:shadow-2xl">
                                    {/* Year Badge - make it more prominent */}
                                    <div className="inline-block px-4 py-2 bg-purple-900/50 text-purple-300 
                                                  rounded-full text-sm font-medium mb-6 
                                                  border border-purple-500/20">
                                        {experience.year}
                                    </div>

                                    {/* Role & Company - improve typography */}
                                    <h3 className="text-2xl font-bold text-white mb-3 
                                                 tracking-wide">
                                        {experience.role}
                                    </h3>
                                    <h4 className="text-lg text-purple-400 mb-6 
                                                 font-semibold">
                                        {experience.company}
                                    </h4>

                                    {/* Description - improve readability */}
                                    <p className="text-gray-300 mb-6 text-base leading-relaxed 
                                               whitespace-pre-line">  {/* Added whitespace-pre-line */}
                                        {experience.description}
                                    </p>

                                    {/* Technologies - improve spacing and style */}
                                    <div className="flex flex-wrap gap-3">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-4 py-2 text-sm font-medium 
                                                        bg-purple-900/40 text-purple-300 rounded-full
                                                        hover:bg-purple-900/60 transition-colors
                                                        duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Make Timeline Point more visible */}
                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                                          items-center justify-center z-10">
                                <motion.div 
                                    whileHover={{ scale: 1.3 }}
                                    className="w-5 h-5 rounded-full bg-purple-600 shadow-lg 
                                             shadow-purple-500/50 border-2 border-purple-400"
                                >
                                    <div className="w-full h-full rounded-full bg-purple-400 
                                                  animate-ping opacity-30"></div>
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
