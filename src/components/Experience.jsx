import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <div>
            <div className="bg-gray-800 mb-12 mt-14">
                <h1 className="text-center text-3xl">
                    Experi
                    <span className="text-neutral-500">ences</span>
                </h1>
            </div>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap justify-center">
                        <div className="w-full text-center lg:w-1/4 sm:w-full">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl text-center lg:text-left sm:w-full lg:w-3/4">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
