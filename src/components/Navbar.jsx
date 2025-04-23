import { Disclosure } from '@headlessui/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import React from 'react'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Disclosure as="nav" className="bg-custom-dark-blue/80 backdrop-blur-md fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="lg:mx-44 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className='text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl hover:text-purple-500 transition-colors duration-300'>
                  Aa
                </h1>
              </div>

              {/* Language Switcher - Desktop */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    i18n.language === 'en'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-600/20'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    i18n.language === 'ar'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-600/20'
                  }`}
                >
                  عربي
                </button>
              </div>

              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="https://github.com/ahmadali3009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <FaGithub className="text-4xl p-1 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-ali-b290b7249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <FaLinkedin className="text-4xl p-1 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-600/20 hover:text-white focus:outline-none">
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
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-4 px-4 pb-6 pt-2">
              {/* Language Switcher - Mobile */}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    i18n.language === 'en'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-600/20'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    i18n.language === 'ar'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-600/20'
                  }`}
                >
                  عربي
                </button>
              </div>

              {/* Social Links - Mobile */}
              <div className="flex space-x-4 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com/ahmadali3009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <FaGithub className="text-4xl p-1 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-ali-b290b7249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <FaLinkedin className="text-4xl p-1 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar
