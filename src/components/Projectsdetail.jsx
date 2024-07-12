import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projectsdetail = () => {
  return (
    <div className="px-6 sm:px-6 lg:px-8"> {/* Added padding classes here */}
      <div className="bg-custom-dark-blue my-20">
        <motion.h1 whileInView={{opacity:1 , y:0}}
                initial={{opacity:0 , y:-100}}
                transition={{duration:1.5}} className="text-center text-3xl text-white">
          Pro
          <span className="text-purple-800">jects</span>
        </motion.h1>
      </div>

      {PROJECTS.map((pro, index) => (
        <div key={index} className="mb-8 flex flex-wrap justify-center">
          <div className="w-full flex justify-center lg:w-1/4 lg:justify-start text-gray-200">
            <a href='https://github.com/ahmadali3009'><motion.img whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:0}}
          transition={{duration:1 , delay : 0.5} } src={pro.image} className="mb-2"  width="200" height="200" alt={pro.title}></motion.img></a>
          </div>
          <motion.div whileInView={{x:0 , opacity:1}}
            initial={{x:100 , opacity:0}}
            transition={{duration:1 , delay : 0.5} } className="w-full max-w-xl lg:w-3/4 ml-5">
            <h6 className="mb-2 font-semibold text-left lg:text-left text-gray-200">
              {pro.title}
            </h6>
            <a href={pro.link}> <button className='text-purple-500 border border-purple-500 rounded-md px-2 py-1 m-1' >view code</button></a>
            <p className="text-gray-200 text-left lg:text-left">{pro.description}</p>
            <div className="mt-3 flex flex-wrap justify-center lg:justify-start">
              {pro.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-purple-500 border border-purple-500 rounded-md px-2 py-1 m-1">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Projectsdetail;
