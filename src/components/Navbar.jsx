import { Disclosure, Transition } from '@headlessui/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.3)]'
        : 'bg-slate-950/60 backdrop-blur-md border-b border-white/5'
      }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#home" className="group">
                  <h1 className='text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-300 group-hover:via-indigo-300 group-hover:to-cyan-200 sm:text-4xl'>
                    Aa
                  </h1>
                </a>
              </motion.div>

              {/* Language Switcher - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i18n.language === 'en'
                        ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.8)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i18n.language === 'ar'
                        ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.8)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    عربي
                  </button>
                </div>
              </div>

              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  href="https://github.com/ahmadali3009"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(99,102,241,0.6)]"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ahmed-ali-b290b7249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(99,102,241,0.6)]"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none">
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform opacity-0 -translate-y-4"
            enterTo="transform opacity-100 translate-y-0"
            leave="transition duration-200 ease-in"
            leaveFrom="transform opacity-100 translate-y-0"
            leaveTo="transform opacity-0 -translate-y-4"
          >
            <Disclosure.Panel className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
              <div className="space-y-4 px-4 pb-6 pt-4">
                {/* Language Switcher - Mobile */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-200/70">
                    {t('navbar.language', { defaultValue: 'Language' })}
                  </span>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${i18n.language === 'en'
                          ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.8)]'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage('ar')}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${i18n.language === 'ar'
                          ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.8)]'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      عربي
                    </button>
                  </div>
                </div>

                {/* Social Links - Mobile */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-200/70">
                    {t('navbar.connect', { defaultValue: 'Connect' })}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/ahmadali3009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmed-ali-b290b7249/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar
