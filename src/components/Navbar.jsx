import { Disclosure } from '@headlessui/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react'

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-custom-dark-blue">
      <div className="lg:mx-44 max-w-7xl px-2 sm:mx-24 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className='text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl'>Aa</h1>
          </div>
          <div className="flex items-center">
            <button className="ml-4">
              <a href='https://github.com/ahmadali3009'>
                <FaGithub className="rounded-full bg-gray-800 p-1 text-gray-400 text-4xl" />
              </a>
            </button>
            <button className='ml-4'>
              <a href='https://www.linkedin.com/in/ahmed-ali-b290b7249/'>
                <FaLinkedin className="rounded-full bg-gray-800 p-1 text-gray-400 text-4xl" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export default Navbar
