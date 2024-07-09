import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skillsicon from './components/Skillsicon'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skillsicon/>
      </div>
    </>
  )
}

export default App
