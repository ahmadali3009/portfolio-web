import React from 'react';
import img1 from "../assets/img1.jpg";
import { motion } from "framer-motion";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  return (
    <div>
      <div className="mt-6 mx-auto grid max-w-xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-semiboldd tracking-tight text-gray-200 sm:text-4xl"
          >
            Ahmad Ali
          </motion.h2>
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-2xl mt-10 tracking-tight bg-gradient-to-r from-white via-purple-500 to-purple-700 bg-clip-text text-transparent sm:text-l"
            >
            Full Stack Developer
          </motion.h1>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-gray-200"
          >
            Full stack developer with 2 years of experience in JavaScript, React, Node.js, Express.js, and MongoDB. Skilled in MERN stack, Redux Toolkit, JWT authentication, and Git. Focused on user experience, SEO, and efficient state management. Passionate about solving complex problems and continuously learning new technologies.
          </motion.p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={img1}
            className="rounded-lg bg-gray-800 w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
