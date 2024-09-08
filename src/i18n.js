// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EXPERIENCES_EN, EXPERIENCES_AR } from './constants';

const resources = {
  en: {
    translation: {
      greeting: "Ahmad Ali",
      title: "Full Stack Developer",
      description: "Full stack developer with 2 years of experience in JavaScript, React, Node.js, Express.js, and MongoDB. Skilled in MERN stack, Redux Toolkit, JWT authentication, and Git. Focused on user experience, SEO, and efficient state management. Passionate about solving complex problems and continuously learning new technologies.",
      about: {
        title: "About ",
        title2:"Me",
        content: "I am a full stack developer with 3 years of experience in building dynamic web applications. My expertise spans across JavaScript, React, Node.js, Express.js, and MongoDB, with a strong proficiency in the MERN stack, Redux Toolkit, JWT authentication, and Git for version control. I am dedicated to enhancing user experience, optimizing website SEO, and ensuring efficient state management. My passion lies in solving complex problems and continuously learning new technologies to stay ahead in the ever-evolving tech landscape. I am committed to delivering high-quality, scalable solutions for modern web development challenges",
      },
      experiences: {
        title: "Experi",
        subtitle: "ences",
        data: EXPERIENCES_EN,
      },
      projects: {
    titlePart1: "Pro",
    titlePart2: "jects"
  },
  technologies:{
    titlePart1: "Techno",
    titlePart2: "logies"
  }
  

    }
  },
  ar: {
    translation: {
      greeting: "أحمد علي",
      title: "مطور متكامل",
      description: "مطور متكامل مع خبرة سنتين في JavaScript، React، Node.js، Express.js، وMongoDB. مهارة في MERN stack، Redux Toolkit، مصادقة JWT، وGit. يركز على تجربة المستخدم، تحسين محركات البحث، وإدارة الحالة بكفاءة. شغوف بحل المشكلات المعقدة وتعلم التقنيات الجديدة باستمرار.",
      about: {
        title: "عنّي",
        content: "أنا مطور متكامل مع خبرة واسعة في تقنيات متعددة...",
      },
      experiences: {
        title: "ت",
        subtitle: "جارب",
        data: EXPERIENCES_AR,
      },
      projects: {
          titlePart1: "المشاريع",
          titlePart2: " "  // Arabic does not have separate parts for the word 'projects'
        },
        technologies: {
          titlePart1: "التقنيات",
          titlePart2: ""
        },
        about: {
          title: "عني",
          title2: " ",
          content: "أنا مطور متكامل لدي خبرة سنتين في بناء تطبيقات الويب الديناميكية. تتضمن خبرتي JavaScript، React، Node.js، Express.js، وMongoDB، مع إتقان قوي في مكدس MERN، Redux Toolkit، مصادقة JWT، وGit للتحكم في الإصدارات. أنا ملتزم بتحسين تجربة المستخدم، وتحسين SEO للمواقع الإلكترونية، وضمان إدارة الحالة الفعالة. شغوف بحل المشكلات المعقدة والتعلم المستمر للتكنولوجيات الجديدة للبقاء على اطلاع دائم في المشهد التكنولوجي المتطور. أنا ملتزم بتقديم حلول عالية الجودة وقابلة للتوسع لتحديات تطوير الويب الحديثة."
        }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
