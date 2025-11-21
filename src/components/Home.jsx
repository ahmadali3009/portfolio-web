// src/Home.js
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from "../assets/img1.jpg";
import { motion, useSpring, useMotionTemplate } from "framer-motion";
import { HOMEEN, HOMEAR } from '../constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiArrowNarrowRight } from 'react-icons/hi';
import { FiBox, FiLayers, FiServer } from 'react-icons/fi';

const Home = () => {
  const { t, i18n } = useTranslation();
  const homeContent = i18n.language === 'ar' ? HOMEAR[0] : HOMEEN[0];
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  const pointerX = useSpring(50, { stiffness: 200, damping: 30, mass: 0.3 });
  const pointerY = useSpring(45, { stiffness: 200, damping: 30, mass: 0.3 });
  const tiltX = useSpring(0, { stiffness: 150, damping: 20 });
  const tiltY = useSpring(0, { stiffness: 150, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(430px at ${pointerX}% ${pointerY}%, rgba(139,92,246,0.55), rgba(76,29,149,0.08) 65%, transparent 75%)`;

  const handleHeroPointerMove = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    pointerX.set(Math.min(100, Math.max(0, x)));
    pointerY.set(Math.min(100, Math.max(0, y)));
  };

  const handleCardPointerMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentX = x / rect.width;
    const percentY = y / rect.height;
    tiltX.set((0.5 - percentY) * 18);
    tiltY.set((percentX - 0.5) * 18);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const highlightChips = [
    {
      id: '01',
      title: t('home.highlight.saas', { defaultValue: 'SaaS Launches' }),
      meta: '5+',
      detail: t('home.highlight.saasDetail', { defaultValue: 'Multi-tenant platforms deployed on cloud infra' }),
      icon: <FiBox className="text-lg" />,
      gradient: 'from-purple-500/85 via-violet-500/65 to-fuchsia-400/60',
    },
    {
      id: '02',
      title: t('home.highlight.ui', { defaultValue: 'UI Systems' }),
      meta: 'DesignOps',
      detail: t('home.highlight.uiDetail', { defaultValue: 'Accessible component libraries & motion specs' }),
      icon: <FiLayers className="text-lg" />,
      gradient: 'from-fuchsia-500/80 via-purple-500/60 to-rose-400/55',
    },
    {
      id: '03',
      title: t('home.highlight.devops', { defaultValue: 'DevOps' }),
      meta: 'Reliability',
      detail: t('home.highlight.devopsDetail', { defaultValue: 'CI/CD, observability pipelines, and on-call rotations' }),
      icon: <FiServer className="text-lg" />,
      gradient: 'from-indigo-500/80 via-violet-500/60 to-purple-400/55',
    },
  ];

  const primaryStacks = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Fastify',
    'Stripe',
  ];

  return (
    <section
      ref={heroRef}
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={() => {
        pointerX.set(50);
        pointerY.set(45);
      }}
      className="relative overflow-hidden bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,112,219,0.12),transparent_60%)]" />
        <div className="absolute left-1/2 top-[20%] h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-6%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-[150px]" />
        <div className="absolute bottom-[-35%] left-[-18%] h-[26rem] w-[26rem] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(244,114,182,0.08)_0%,rgba(255,255,255,0)_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:px-8 sm:pt-36 md:px-12 lg:px-16 lg:pt-40">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-x-20 xl:gap-x-24">
          <div className="relative flex flex-col gap-9 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-100/80"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
              {t('home.badge', { defaultValue: 'Building next-gen web experiences' })}
            </motion.div>

            <div className="space-y-6 max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="block text-slate-200">
                  {homeContent.greeting}
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  {homeContent.title}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-sm leading-relaxed text-slate-300/90 sm:text-base md:text-lg"
              >
                {homeContent.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-purple-100/70"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                {t('home.availability', { defaultValue: 'Available for contract & remote roles' })}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="/Resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-20px_rgba(99,102,241,0.9)] transition-shadow duration-300 hover:shadow-[0_25px_55px_-18px_rgba(99,102,241,0.95)]"
              >
                <HiDownload className="text-lg" />
                {t('home.actions.resume', { defaultValue: 'Download CV' })}
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:border-white/35 hover:bg-white/10"
              >
                <span>{t('home.actions.projects', { defaultValue: 'View Projects' })}</span>
                <HiArrowNarrowRight className="text-lg" />
              </motion.a>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/ahmadali3009"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/10"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ahmed-ali-b290b7249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/10"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {primaryStacks.map((stack, index) => (
                <span
                  key={stack}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/90 transition-colors duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  {stack}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4"
            >
              {[
                { value: '3+', label: t('home.stats.experience', { defaultValue: 'Years Delivering' }) },
                { value: '20+', label: t('home.stats.projects', { defaultValue: 'Projects Launched' }) },
                { value: '6', label: t('home.stats.featured', { defaultValue: 'Featured Builds' }) },
                { value: '15+', label: t('home.stats.stack', { defaultValue: 'Technologies' }) },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-left shadow-[0_20px_60px_-45px_rgba(99,102,241,0.85)] backdrop-blur-md sm:text-center">
                  <span className="text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-300/70 sm:text-[0.7rem]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap"
            >
              {highlightChips.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ y: -6 }}
                  className="group relative min-w-[240px] flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_18px_60px_-45px_rgba(99,102,241,0.8)] backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/12 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-[0_20px_45px_-25px_rgba(99,102,241,0.9)]`}>
                      {item.icon}
                    </span>
                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-white">{item.title}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-100/70">{item.meta}</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300/80 sm:text-sm">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.17, 0.55, 0.55, 1] }}
            className="relative mx-auto w-full max-w-md sm:max-w-lg pb-24"
            onPointerMove={handleCardPointerMove}
            onPointerLeave={resetTilt}
          >
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_45px_120px_-60px_rgba(99,102,241,0.9)] backdrop-blur-[18px]">
              <motion.div
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <motion.div
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: 'translateZ(40px)' }}
                  className="relative h-full w-full"
                >
                  <img
                    src={img1}
                    alt={t('home.imageAlt', { defaultValue: 'Profile portrait' })}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute bottom-6 right-6 hidden w-[18rem] rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white shadow-[0_25px_80px_-55px_rgba(99,102,241,0.85)] backdrop-blur-lg sm:flex sm:flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-100/80">
                  {t('home.highlight.current', { defaultValue: 'Working Style' })}
                </span>
                <span className="mt-2 text-xs leading-relaxed text-slate-200/85">
                  {t('home.highlight.focus', { defaultValue: 'Design-led engineering, measured releases, and end-to-end ownership.' })}
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-6 top-10 hidden w-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-white shadow-[0_30px_90px_-60px_rgba(99,102,241,0.9)] backdrop-blur-xl sm:block"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-purple-100/70">
                {t('home.badges.role', { defaultValue: 'Role' })}
              </span>
              <p className="mt-2 font-semibold">
                {t('home.badges.product', { defaultValue: 'Full Stack Product Engineer' })}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-6 bottom-16 hidden w-36 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-white shadow-[0_30px_90px_-60px_rgba(34,211,238,0.8)] backdrop-blur-xl sm:block"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
                {t('home.badges.shipped', { defaultValue: 'Shipped' })}
              </span>
              <p className="mt-2 font-semibold">
                {t('home.badges.hours', { defaultValue: '1600+ hours of production code' })}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
