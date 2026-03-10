import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaSass,
  FaBrain,
  FaCloud,
  FaDatabase
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiFastify,
  SiKubernetes,
  SiRedis
} from 'react-icons/si';

const clusterPalette = [
  {
    border: "from-purple-500/70 via-indigo-500/30 to-transparent",
    glow: "from-purple-400/40 via-indigo-400/10 to-transparent",
    accent: "from-purple-400 via-indigo-400 to-cyan-400"
  },
  {
    border: "from-fuchsia-500/70 via-purple-600/30 to-transparent",
    glow: "from-fuchsia-400/30 via-purple-500/10 to-transparent",
    accent: "from-fuchsia-400 via-purple-400 to-blue-400"
  },
  {
    border: "from-emerald-500/70 via-teal-500/30 to-transparent",
    glow: "from-emerald-400/30 via-teal-400/10 to-transparent",
    accent: "from-emerald-400 via-teal-400 to-sky-400"
  }
];

const chipGradients = [
  "from-purple-400 via-indigo-400 to-cyan-300",
  "from-fuchsia-400 via-purple-400 to-sky-300",
  "from-emerald-400 via-teal-400 to-cyan-300",
  "from-amber-400 via-orange-400 to-pink-400",
  "from-sky-400 via-blue-400 to-indigo-400",
  "from-rose-400 via-pink-400 to-purple-400"
];

const clusters = [
  {
    key: "frontend",
    defaultLabel: "Interface Systems",
    defaultHint: "Component-driven UI, rapid prototyping, and animation frameworks.",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "JavaScript (ES2023)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <FaSass /> }
    ]
  },
  {
    key: "backend",
    defaultLabel: "APIs, Data & Queues",
    defaultHint: "Secure services, data stores, and async workers for multi-tenant SaaS.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Fastify", icon: <SiFastify /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis / BullMQ", icon: <SiRedis /> }
    ]
  },
  {
    key: "ai_rag",
    defaultLabel: "AI / RAG Systems",
    defaultHint: "Retrieval-augmented generation pipelines with grounded, auditable answers.",
    skills: [
      { name: "RAG Architectures", icon: <FaBrain /> },
      { name: "LangChain", icon: <FaBrain /> },
      { name: "Google Gemini", icon: <FaCloud /> },
      { name: "ChromaDB / Vector DBs", icon: <FaDatabase /> }
    ]
  },
  {
    key: "tooling",
    defaultLabel: "DevOps & Delivery",
    defaultHint: "Automation, observability, and continuous delivery workflows.",
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  }
];

const Skillsicon = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] }
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute right-[-15%] top-1/3 h-[20rem] w-[20rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-20%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-100/80">
            {t('technologies.badge', { defaultValue: 'Core Stack' })}
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              {t('technologies.titlePart1', { defaultValue: 'Designing' })}
            </span>
            <span className="text-white"> {t('technologies.titlePart2', { defaultValue: ' with Code' })}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-300/90 md:text-base">
            {t('technologies.lead', {
              defaultValue: 'The frameworks, runtimes, and delivery tools that power polished interfaces, scalable APIs, and reliable releases.'
            })}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 flex flex-col gap-10"
        >
          {clusters.map((cluster, clusterIndex) => {
            const palette = clusterPalette[clusterIndex % clusterPalette.length];
            const label = t(`technologies.categories.${cluster.key}`, { defaultValue: cluster.defaultLabel });
            const hint = t(`technologies.descriptions.${cluster.key}`, { defaultValue: cluster.defaultHint });

            return (
              <motion.div
                key={cluster.key}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-[1px] shadow-[0_25px_70px_-40px_rgba(99,102,241,0.85)] backdrop-blur-sm"
              >
                <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${palette.border} opacity-90 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative h-full rounded-3xl bg-slate-950/80 px-6 py-7 md:px-8 md:py-9">
                  <div className="pointer-events-none absolute -top-24 -right-8 h-40 w-40 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white md:text-xl">
                        {label}
                      </h3>
                      <p className="max-w-xl text-sm text-slate-300/85 md:text-base">
                        {hint}
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-start gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-purple-100/60 md:justify-end">
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {t('technologies.labels.focus', { defaultValue: 'Focus' })}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {t('technologies.labels.impact', { defaultValue: 'Impact' })}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                    {cluster.skills.map((skill, skillIndex) => {
                      const gradient = chipGradients[(skillIndex + clusterIndex) % chipGradients.length];

                      return (
                        <motion.span
                          key={skill.name}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="group/tech relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                        >
                          <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-lg text-white shadow-[0_15px_40px_-25px_rgba(99,102,241,0.85)]`}>
                            <span className="relative drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
                              {skill.icon}
                            </span>
                          </span>
                          <span className="text-xs font-medium text-white sm:text-sm">
                            {skill.name}
                          </span>
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skillsicon;
