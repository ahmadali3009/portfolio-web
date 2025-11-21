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
    <section className="relative overflow-hidden bg-slate-950 px-6 sm:px-8 md:px-12 lg:px-24 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-purple-800/30 blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mx-auto mb-20 max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
          {t('projects.subtitle', { defaultValue: 'Selected Work' })}
        </span>
        <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-white">
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            {t('projects.titlePart1')}
          </span>
          <span className="text-white"> {t('projects.titlePart2')}</span>
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 text-base text-slate-300"
        >
          {t('projects.lead', {
            defaultValue: 'A blend of crafted interfaces, thoughtful transitions, and resilient architecture built with love.'
          })}
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-3xl p-[1px] transition-transform duration-500 hover:-translate-y-2 hover:rotate-1"
          >
            <div className="absolute inset-px -z-10 rounded-3xl bg-gradient-to-br from-purple-500/40 via-purple-500/10 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-slate-900/70 px-6 pb-6 pt-5 shadow-[0_10px_50px_-25px_rgba(123,97,255,0.35)] backdrop-blur-xl">
              {/* Project index */}
              <motion.span
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.04 }}
                className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                {String(index + 1).padStart(2, '0')}
              </motion.span>

              {/* Project Image with Overlay */}
              <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-xl lg:text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-purple-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm lg:text-base text-slate-300/90 line-clamp-4">
                  {project.description.split('\n').slice(0, 4).join('\n')}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200/90 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/80">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 px-5 py-2 text-sm font-medium text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.9)] transition-shadow duration-500 hover:shadow-[0_22px_50px_-18px_rgba(99,102,241,1)]"
                >
                  <FaGithub className="text-base transition-transform duration-300 group-hover/button:-translate-y-[2px]" />
                  <span>{t('projects.actions.code', { defaultValue: 'Code' })}</span>
                </motion.a>
                
                <Link
                  to={`/projects/${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-100 transition-all duration-500 hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-50"
                >
                  <FaInfoCircle className="text-base" />
                  <span>{t('projects.actions.details', { defaultValue: 'Details' })}</span>
                </Link>
                
                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-100 transition-all duration-500 hover:border-white/30 hover:bg-white/10"
                  >
                    <FaExternalLinkAlt className="text-base" />
                    <span>{t('projects.actions.live', { defaultValue: 'Live' })}</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projectsdetail;
