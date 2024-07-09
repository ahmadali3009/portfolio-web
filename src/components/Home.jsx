import React from 'react'

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
]

const Home = () => {
  return (
    <div>
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Ahmad Ali</h2>
          <h5 className="text-l mt-10 tracking-tight text-gray-200 sm:text-l">Full Stack Developer</h5>

          <p className="mt-4 text-gray-200">
          Full stack developer with 2 years of experience in JavaScript, React, Node.js, Express.js, and MongoDB. Skilled in MERN stack, Redux Toolkit, JWT authentication, and Git. Focused on user experience, SEO, and efficient state management. Passionate about solving complex problems and continuously learning new technologies.          </p>

         
        </div>
        <div className="grid grid-cols-1 w-80 h-80 justify-end">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-800"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
