import { CONTACT_EN, CONTACT_AR } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const contactInfo = {
    en: CONTACT_EN,
    ar: CONTACT_AR,
  };

  const currentContact = contactInfo[i18n.language];

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      text: currentContact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(currentContact.address)}`,
      delay: 0.2
    },
    {
      icon: <FaPhone className="text-2xl" />,
      text: currentContact.phone,
      href: `tel:${currentContact.phone}`,
      delay: 0.4
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      text: currentContact.email,
      href: `mailto:${currentContact.email}`,
      delay: 0.6
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/ahmadali3009",
      label: "GitHub",
      delay: 0.8
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/ahmed-ali-b290b7249/",
      label: "LinkedIn",
      delay: 1
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -left-48 bottom-0 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -right-48 top-0 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center p-6 rounded-xl bg-white/5 border border-purple-500/20 
                         backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 
                            flex items-center justify-center group-hover:bg-purple-500/30 
                            transition-colors duration-300">
                {item.icon}
              </div>
              <div className="ml-4">
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
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
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-4 rounded-full bg-white/5 border border-purple-500/20 
                         hover:bg-white/10 transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
