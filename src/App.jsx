import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skillsicon from './components/Skillsicon'
import Experience from './components/Experience'
import Projects from './components/Projectsdetail'
import Contact from './components/contact'
function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skillsicon/>
      <Experience/>
      <Projects></Projects>
      <Contact/>
      </div>
    </>
  )
}

export default App
