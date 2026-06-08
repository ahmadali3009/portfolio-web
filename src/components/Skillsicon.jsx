import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
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

const SkillTile = ({ skill, gradient, index }) => {
  // Cursor-following spotlight — the premium 2026 touch.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.12), transparent 70%)`;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -8 }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: [0.17, 0.55, 0.55, 1] }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group/tech relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-white/25"
    >
      {/* cursor spotlight layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tech:opacity-100"
        style={{ background: spotlight }}
      />

      <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-2xl text-white shadow-[0_18px_45px_-25px_rgba(99,102,241,0.9)] transition-transform duration-300 group-hover/tech:scale-110`}>
        <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors duration-300 group-hover/tech:bg-white/10" />
        <span className="relative drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
          {skill.icon}
        </span>
      </span>
      <span className="relative text-xs font-medium text-slate-200 transition-colors duration-300 group-hover/tech:text-white sm:text-sm">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skillsicon = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState("all");

  const tabs = useMemo(
    () => [
      { key: "all", defaultLabel: "All Stack" },
      ...clusters.map((cluster) => ({ key: cluster.key, defaultLabel: cluster.defaultLabel }))
    ],
    []
  );

  const visibleSkills = useMemo(() => {
    const source =
      activeKey === "all"
        ? clusters.flatMap((cluster, ci) =>
            cluster.skills.map((skill, si) => ({ skill, gradientIndex: ci + si }))
          )
        : (clusters.find((cluster) => cluster.key === activeKey)?.skills || []).map(
            (skill, si) => ({ skill, gradientIndex: si })
          );
    return source;
  }, [activeKey]);

  const activeHint =
    activeKey === "all"
      ? t('technologies.lead', {
          defaultValue:
            'The frameworks, runtimes, and delivery tools that power polished interfaces, scalable APIs, and reliable releases.'
        })
      : t(`technologies.descriptions.${activeKey}`, {
          defaultValue: clusters.find((c) => c.key === activeKey)?.defaultHint
        });

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
              defaultValue:
                'The frameworks, runtimes, and delivery tools that power polished interfaces, scalable APIs, and reliable releases.'
            })}
          </p>
        </motion.div>

        {/* Category segmented control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {tabs.map((tab) => {
            const isActive = tab.key === activeKey;
            const label = t(`technologies.categories.${tab.key}`, { defaultValue: tab.defaultLabel });

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveKey(tab.key)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors duration-300 sm:text-sm ${
                  isActive ? 'text-white' : 'text-slate-300/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-tab-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-white/15 bg-gradient-to-r from-purple-500/30 via-indigo-500/25 to-cyan-400/25 shadow-[0_15px_40px_-22px_rgba(99,102,241,0.95)]"
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active category hint */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeKey}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-center text-sm text-slate-400"
          >
            {activeHint}
          </motion.p>
        </AnimatePresence>

        {/* Skill grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleSkills.map(({ skill, gradientIndex }, index) => (
              <SkillTile
                key={`${activeKey}-${skill.name}`}
                skill={skill}
                index={index}
                gradient={chipGradients[gradientIndex % chipGradients.length]}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skillsicon;
