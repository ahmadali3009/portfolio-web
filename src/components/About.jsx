import React from 'react'

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
]

const About = () => {
  return (
    <div>
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-1 w-80 h-80">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-800"
          />
        </div>
        <div>
          <p className="mt-4 text-gray-200">
          I am a full stack developer with 2 years of experience in building dynamic web applications. My expertise spans across JavaScript, React, Node.js, Express.js, and MongoDB, with a strong proficiency in the MERN stack, Redux Toolkit, JWT authentication, and Git for version control. I am dedicated to enhancing user experience, optimizing website SEO, and ensuring efficient state management. My passion lies in solving complex problems and continuously learning new technologies to stay ahead in the ever-evolving tech landscape. I am committed to delivering high-quality, scalable solutions for modern web development challenges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
