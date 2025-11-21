import React, { useState } from 'react';
import ahmad from "../assets/ahmad.png";
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaDownload, FaRocket, FaCode, FaPalette } from 'react-icons/fa';
import {
  FiFigma, FiLayers, FiTrendingUp, FiUsers, FiZap,
  FiAward, FiTarget, FiCoffee, FiGithub
} from 'react-icons/fi';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const About = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Full-Stack Development',
      level: 95,
      gradient: 'from-purple-500 via-indigo-500 to-cyan-400',
      description: 'React, Next.js, Node.js, TypeScript'
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: 'UI/UX Design',
      level: 88,
      gradient: 'from-fuchsia-500 via-purple-500 to-pink-400',
      description: 'Figma, Design Systems, Prototyping'
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: 'Performance Optimization',
      level: 92,
      gradient: 'from-amber-400 via-orange-500 to-red-400',
      description: 'Code-splitting, Caching, Profiling'
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: 'System Architecture',
      level: 90,
      gradient: 'from-emerald-400 via-teal-500 to-cyan-400',
      description: 'Microservices, APIs, Scalability'
    }
  ];

  const highlights = [
    {
      icon: <FiAward className="text-xl" />,
      value: '3+',
      label: 'Years Experience',
      color: 'from-purple-400 to-indigo-400'
    },
    {
      icon: <FiTarget className="text-xl" />,
      value: '20+',
      label: 'Projects Delivered',
      color: 'from-fuchsia-400 to-purple-400'
    },
    {
      icon: <HiSparkles className="text-xl" />,
      value: '1600+',
      label: 'Hours Coded',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      icon: <FiCoffee className="text-xl" />,
      value: '∞',
      label: 'Coffee Consumed',
      color: 'from-amber-400 to-orange-400'
    }
  ];

  const values = [
    {
      icon: <HiLightningBolt className="text-lg" />,
      title: 'Fast Execution',
      description: 'Rapid prototyping to production-ready code'
    },
    {
      icon: <FiUsers className="text-lg" />,
      title: 'Team Player',
      description: 'Collaborative approach with clear communication'
    },
    {
      icon: <FiTrendingUp className="text-lg" />,
      title: 'Growth Mindset',
      description: 'Always learning, always improving'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,112,219,0.15),transparent_70%)]" />
        <div className="absolute left-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[20%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-100/80 backdrop-blur-md">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
            {t('about.badge', { defaultValue: 'About Me' })}
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              {t('about.title', { defaultValue: 'Crafting Digital' })}
            </span>{' '}
            <span className="text-white">{t('about.title2', { defaultValue: 'Experiences' })}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300/90 sm:text-lg">
            {t('about.subtitle', {
              defaultValue:
                "I'm a full-stack developer passionate about building beautiful, performant web applications that users love. Let's create something amazing together.",
            })}
          </p>
        </motion.div>

        {/* Main Content Grid - Bento Style */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          {/* Profile Image - Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.6)] backdrop-blur-lg lg:col-span-5 lg:row-span-2"
          >
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={ahmad}
                  alt={t('about.imageAlt', { defaultValue: 'Ahmad Ali' })}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-xl"
              >
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-white">Available for Work</span>
              </motion.div>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/Resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.9)] transition-shadow duration-300 hover:shadow-[0_25px_55px_-18px_rgba(99,102,241,0.95)]"
            >
              <FaDownload className="text-base" />
              {t('about.actions.resume', { defaultValue: 'Download CV' })}
            </motion.a>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 lg:col-span-7 lg:row-span-2"
          >
            {/* About Text */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.6)] backdrop-blur-lg">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <FaRocket className="text-purple-400" />
                Who I Am
              </h3>
              <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
                {t('about.content', {
                  defaultValue:
                    "A passionate full-stack developer with 3+ years of experience building scalable web applications. I specialize in React, Next.js, and Node.js, with a keen eye for design and user experience. I love turning complex problems into simple, beautiful solutions.",
                })}
              </p>

              {/* Value Props */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300">
                      {value.icon}
                    </span>
                    <h4 className="text-sm font-semibold text-white">{value.title}</h4>
                    <p className="text-xs text-slate-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills with Progress */}
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_-45px_rgba(99,102,241,0.8)] backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  <div className="absolute -top-20 -right-20 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} text-white shadow-lg`}>
                        {skill.icon}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white">{skill.title}</h4>
                        <p className="text-xs text-slate-400">{skill.description}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-slate-400">Proficiency</span>
                        <span className="text-xs font-semibold text-purple-300">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 lg:col-span-12 lg:grid-cols-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_-45px_rgba(99,102,241,0.85)] backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <span className={`mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${highlight.color} text-white shadow-lg`}>
                    {highlight.icon}
                  </span>
                  <div className="text-3xl font-bold text-white">{highlight.value}</div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {highlight.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-cyan-500/10 p-8 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.6)] backdrop-blur-lg lg:col-span-12"
          >
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative text-center">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300/90 sm:text-base">
                I'm always excited to work on new projects and collaborate with talented teams. Whether you have a project in mind or just want to chat, feel free to reach out!
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.9)] transition-shadow duration-300 hover:shadow-[0_25px_55px_-18px_rgba(99,102,241,0.95)]"
                >
                  <HiSparkles className="text-lg" />
                  Get In Touch
                </motion.a>
                <motion.a
                  href="https://github.com/ahmadali3009"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-white/35 hover:bg-white/10"
                >
                  <FiGithub className="text-lg" />
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
