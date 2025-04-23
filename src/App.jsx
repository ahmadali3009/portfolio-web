import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skillsicon from './components/Skillsicon'
import Experience from './components/Experience'
import Projects from './components/Projectsdetail'
import Contact from './components/contact'
import LanguageSwitcher from './components/langswitch'
import { useTranslation } from 'react-i18next';
function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <Navbar/>
        <LanguageSwitcher/>
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


