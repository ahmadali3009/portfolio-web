import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCloud, FaBrain } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

const categoryIconClasses =
  'flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-lg text-purple-200 shadow-[0_18px_40px_-22px_rgba(129,140,248,0.9)]';

const Technologies = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-cyan-300" />,
      description: 'Modern React/Next.js frontends with design systems and performance in mind.',
      chips: ['React 18', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'shadcn/ui', 'React Router'],
    },
    {
      title: 'Backend & APIs',
      icon: <FaNodeJs className="text-emerald-300" />,
      description: 'Scalable APIs and services for multi-tenant SaaS and real-time systems.',
      chips: [
        'Node.js',
        'Fastify',
        'Express.js',
        'MongoDB',
        'PostgreSQL · Prisma',
        'Redis · BullMQ',
        'JWT / OAuth2',
        'Stripe',
        'WebSockets · Socket.IO',
      ],
    },
    {
      title: 'AI / RAG & Data',
      icon: <FaBrain className="text-purple-300" />,
      description: 'Retrieval-augmented generation pipelines with grounded, production-ready responses.',
      chips: ['RAG Systems', 'LangChain', 'Google Gemini 2.5', 'ChromaDB', 'Vector Search', 'Prompt Engineering'],
    },
    {
      title: 'DevOps & Cloud',
      icon: <FaCloud className="text-sky-300" />,
      description: 'From local dev to production with CI/CD, containers, and cloud infrastructure.',
      chips: ['Docker', 'Kubernetes', 'AWS EC2 · S3 · ECR', 'GitHub Actions', 'Nginx', 'Monitoring & Logging'],
    },
  ];

  const chipVariants = {
    hidden: { y: 8, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-[-20%] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-100/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
            {t('technologies.badge', { defaultValue: 'Tech Stack' })}
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              {t('technologies.titlePart1')}
            </span>
            <span className="text-white"> {t('technologies.titlePart2')}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-300/90 sm:text-base">
            {t('technologies.lead', {
              defaultValue:
                'A focused toolkit for shipping enterprise SaaS, AI-powered RAG platforms, and real-time web applications.',
            })}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.7)] backdrop-blur-lg"
            >
              <div className="absolute -top-24 -right-24 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <div className={categoryIconClasses}>{category.icon}</div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    {category.title}
                    {category.title === 'Frontend' && (
                      <TbBrandNextjs className="text-sm text-slate-300 opacity-80" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-300/80 sm:text-sm">{category.description}</p>
                </div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.05, delayChildren: 0.15 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {category.chips.map((chip) => (
                  <motion.span
                    key={chip}
                    variants={chipVariants}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-[0_12px_35px_-24px_rgba(148,163,184,0.9)] transition-colors duration-300 hover:border-purple-300/70 hover:bg-purple-500/20"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300" />
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;