import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div>
            <div className="bg-gray-800 mb-12 mt-14">
                <motion.h1 whileInView={{opacity:1 , y:0}}
                initial={{opacity:0 , y:-100}}
                transition={{duration:1.5}}
                className="text-center text-3xl">
                    Experi
                    <span className="text-neutral-500">ences</span>
                </motion.h1>
            </div>
            <div className='px-6'>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap justify-center">
                        <div className="w-full text-left lg:w-1/4 sm:w-full">
                            <motion.p   whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:0}}
          transition={{duration:1 , delay : 0.5} }  className="mb-2 text-sm text-neutral-400">{experience.year}</motion.p>
                        </div>
                        <motion.div whileInView={{x:0 , opacity:1}}
            initial={{x:100 , opacity:0}}
            transition={{duration:1 , delay : 0.5} } className="w-full max-w-xl text-left lg:text-left sm:w-full px-4 lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} −{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p>{experience.description}</p>
                            <div className="mt-3 flex flex-wrap justify-center lg:justify-start">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="text-purple-500 border border-purple-500 rounded-md px-2 py-1 m-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
