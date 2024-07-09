import React from 'react';
import { PROJECTS } from '../constants';

const Projectsdetail = () => {
  return (
    <div>
      <div className="bg-gray-800 mb-12 mt-14">
        <h1 className="text-center text-3xl">
          Pro
          <span className="text-neutral-500">jects</span>
        </h1>
      </div>

      {PROJECTS.map((pro, index) => (
        <div key={index} className="mb-8 flex flex-wrap justify-center">
          <div className="w-full flex justify-center lg:w-1/4 lg:justify-start">
            <img src={pro.image} className="mb-2" width={120} height={120} alt={pro.title}></img>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold text-center lg:text-left">
              {pro.title}
            </h6>
            <p className="text-center lg:text-left">{pro.description}</p>
            <div className="mt-3 flex flex-wrap justify-center lg:justify-start">
              {pro.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-purple-500 border border-purple-500 rounded-md px-2 py-1 m-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projectsdetail;
