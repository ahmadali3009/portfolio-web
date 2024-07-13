import { CONTACT_EN, CONTACT_AR } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const Contact = () => {
    const { t, i18n } = useTranslation();

  const contactInfo = {
    en: CONTACT_EN,
    ar: CONTACT_AR,
  };

  return (
    <div className="border-b ☐ border-custom-dark-blue pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl bg-gradient-to-r from-white via-white to-purple-700 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter text-white">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-4"
        >
          {contactInfo[i18n.language].address}
        </motion.p>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-4"
        >
          {contactInfo[i18n.language].phone}
        </motion.p>
        <a href={`mailto:${contactInfo[i18n.language].email}`}>
          {contactInfo[i18n.language].email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
