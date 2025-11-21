import React from 'react';
import { useTranslation } from 'react-i18next';
import { EXPERIENCES_EN, EXPERIENCES_AR } from '../constants';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const TECH_BADGE_GRADIENTS = [
    "from-purple-500/90 via-indigo-500/80 to-cyan-400/80",
    "from-fuchsia-500/90 via-purple-500/70 to-sky-400/70",
    "from-amber-400/90 via-orange-500/80 to-fuchsia-500/70",
    "from-emerald-400/90 via-teal-500/80 to-sky-400/70"
];

const Experience = () => {
    const { t, i18n } = useTranslation();
    const EXPERIENCES = i18n.language === 'ar' ? EXPERIENCES_AR : EXPERIENCES_EN;

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const renderHighlightList = (items) => {
        if (!items || items.length === 0) return null;

        return (
            <ul className="space-y-2 text-sm leading-relaxed text-slate-300/90">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="relative pl-5 text-slate-300/90 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:to-cyan-300"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <section className="relative overflow-hidden bg-slate-950 py-24" ref={containerRef}>
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-36 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] -translate-y-1/3 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-y-1/4 translate-x-1/4 rounded-full bg-indigo-500/25 blur-3xl" />
            </div>

            {/* Title Section */}
            <motion.div 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto mb-20 max-w-2xl text-center"
            >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">
                    {t('experiences.badge', { defaultValue: 'Career Journey' })}
                </span>
                <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
                    <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                        {t('experiences.title')}
                    </span>
                    <span className="text-white"> {t('experiences.subtitle')}</span>
                </h2>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mt-6 text-base text-slate-300"
                >
                    {t('experiences.lead', {
                        defaultValue: 'From early beginnings to recent milestones, here is the timeline of building products, teams, and polished experiences.'
                    })}
                </motion.p>
            </motion.div>

            {/* Timeline */}
            <div
                className="relative mx-auto max-w-5xl space-y-16 px-4 md:space-y-20"
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "none" : "translateY(40px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                }}
            >
                <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/70 via-purple-500/20 to-transparent md:block" />

                {EXPERIENCES.map((experience, index) => {
                    const isEven = index % 2 === 0;
                    const wrapperAlignment = isEven
                        ? 'md:order-1 md:items-end md:pr-12 md:text-right'
                        : 'md:order-3 md:items-start md:pl-12 md:text-left';
                    const cardAlignment = isEven
                        ? 'md:items-end md:text-right'
                        : 'md:items-start md:text-left';
                    const badgeAlignment = isEven ? 'md:self-end' : 'md:self-start';

                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center"
                        >
                            <div
                                className={`order-1 flex flex-col gap-6 ${wrapperAlignment}`}
                            >
                                <div className={`group/card relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 text-slate-200 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.6)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-26px_rgba(99,102,241,0.8)] ${cardAlignment}`}>
                                    <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100 md:opacity-60" />
                                    <div className="absolute inset-0 rounded-3xl border border-white/5 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                                    <div className={`relative inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-purple-200 ${badgeAlignment}`}>
                                        {experience.year}
                                    </div>

                                    <div className="relative mt-6 space-y-3">
                                        <h3 className="text-2xl font-semibold text-white md:text-3xl">
                                            {experience.role}
                                        </h3>
                                        <p className="text-lg font-medium text-purple-300">
                                            {experience.company}
                                        </p>
                                        {experience.summary && (
                                            <p className="text-sm leading-relaxed text-slate-300/90">
                                                {experience.summary}
                                            </p>
                                        )}
                                    </div>

                                    <div className="relative mt-6 space-y-6">
                                        {experience.primaryClient && (
                                            <div className="space-y-3">
                                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200/80">
                                                    {experience.primaryClient.label || t('experiences.labels.client', { defaultValue: 'Client Engagement' })}
                                                </span>
                                                {(experience.primaryClient.title || experience.primaryClient.timeframe) && (
                                                    <div className="space-y-1">
                                                        {experience.primaryClient.title && (
                                                            <p className="text-base font-semibold text-white">
                                                                {experience.primaryClient.title}
                                                            </p>
                                                        )}
                                                        {experience.primaryClient.timeframe && (
                                                            <p className="text-sm font-medium text-purple-200/90">
                                                                {experience.primaryClient.timeframe}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                                {renderHighlightList(experience.primaryClient.highlights)}
                                            </div>
                                        )}

                                        {experience.otherProjects && (
                                            <div className="space-y-3">
                                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200/80">
                                                    {experience.otherProjects.label || t('experiences.labels.other', { defaultValue: 'Other Projects' })}
                                                </span>
                                                {(experience.otherProjects.title || experience.otherProjects.subtitle) && (
                                                    <div className="space-y-1">
                                                        {experience.otherProjects.title && (
                                                            <p className="text-base font-semibold text-white">
                                                                {experience.otherProjects.title}
                                                            </p>
                                                        )}
                                                        {experience.otherProjects.subtitle && (
                                                            <p className="text-sm font-medium text-purple-200/90">
                                                                {experience.otherProjects.subtitle}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                                {renderHighlightList(experience.otherProjects.highlights)}
                                            </div>
                                        )}

                                        {!experience.primaryClient && !experience.otherProjects && experience.description && (
                                            <p className="text-sm leading-relaxed text-slate-300/90 whitespace-pre-line">
                                                {experience.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="relative mt-7 flex flex-wrap gap-3">
                                        {experience.technologies.map((tech, techIndex) => {
                                            const gradientClass = TECH_BADGE_GRADIENTS[(techIndex + index) % TECH_BADGE_GRADIENTS.length];

                                            return (
                                                <motion.span
                                                    key={techIndex}
                                                    whileHover={{ y: -4, scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r ${gradientClass} px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_-18px_rgba(99,102,241,0.8)] transition-all duration-300`}
                                                >
                                                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                                    <span className="tracking-wide">{tech}</span>
                                                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-70">
                                                        <span className="absolute -inset-1 bg-gradient-to-r from-white/20 via-transparent to-transparent mix-blend-overlay" />
                                                    </span>
                                                </motion.span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="order-2 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="relative flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/20 shadow-[0_15px_35px_-15px_rgba(99,102,241,0.8)] backdrop-blur-md"
                                >
                                    <span className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400 via-indigo-400 to-cyan-300 opacity-80" />
                                    <span className="absolute h-full w-full animate-ping rounded-full bg-purple-400/40" />
                                    <span className="absolute h-12 w-12 rounded-full bg-slate-950/90" />
                                    <span className="relative h-3 w-3 rounded-full bg-purple-200" />
                                </motion.div>
                            </div>

                            <div className={`${isEven ? 'md:order-3' : 'md:order-1'} hidden h-full md:block`} aria-hidden="true" />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Experience;
