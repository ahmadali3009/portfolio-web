import { CONTACT_EN, CONTACT_AR } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const contactInfo = {
    en: CONTACT_EN,
    ar: CONTACT_AR,
  };

  const currentContact = contactInfo[i18n.language];

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: t('contact.labels.location', { defaultValue: 'Location' }),
      text: currentContact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(currentContact.address)}`,
      gradient: 'from-purple-500/90 via-indigo-500/80 to-cyan-400/80',
      delay: 0.2
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: t('contact.labels.phone', { defaultValue: 'Phone' }),
      text: currentContact.phone,
      href: `tel:${currentContact.phone}`,
      gradient: 'from-fuchsia-500/90 via-purple-500/70 to-sky-400/70',
      delay: 0.3
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: t('contact.labels.email', { defaultValue: 'Email' }),
      text: currentContact.email,
      href: `mailto:${currentContact.email}`,
      gradient: 'from-emerald-400/90 via-teal-500/80 to-sky-400/70',
      delay: 0.4
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/ahmadali3009",
      label: "GitHub",
      delay: 0.5
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/ahmed-ali-b290b7249/",
      label: "LinkedIn",
      delay: 0.6
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(147,112,219,0.15),transparent_60%)]" />
        <div className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute right-[-15%] top-1/3 h-[20rem] w-[20rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -top-24 left-[-20%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(244,114,182,0.08)_0%,rgba(255,255,255,0)_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-100/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
            {t('contact.badge', { defaultValue: "Let's Connect" })}
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              {t('contact.title', { defaultValue: 'Get in Touch' })}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-300/90 sm:text-base">
            {t('contact.subtitle', {
              defaultValue: "Ready to collaborate on your next project? Let's discuss how we can build something amazing together."
            })}
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.6)] backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_28px_60px_-26px_rgba(99,102,241,0.8)]"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-[0_20px_45px_-25px_rgba(99,102,241,0.9)]`}>
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-100/70">
                      {item.label}
                    </span>
                  </div>
                  <HiArrowNarrowRight className="text-xl text-slate-300/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-slate-200/90 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {item.text}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-100/70">
            {t('contact.social', { defaultValue: 'Follow Me' })}
          </span>
          <div className="mt-6 flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: link.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 shadow-[0_18px_60px_-45px_rgba(99,102,241,0.8)] backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_20px_60px_-30px_rgba(99,102,241,0.9)]"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-400/80">
            {t('contact.footer', {
              defaultValue: '© 2024 Ahmad Ali. Built with passion and precision.'
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
