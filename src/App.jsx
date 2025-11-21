import './App.css';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skillsicon from './components/Skillsicon';
import Experience from './components/Experience';
import Projects from './components/Projectsdetail';
import Contact from './components/contact';
import LanguageSwitcher from './components/langswitch';

function App() {
  const { i18n } = useTranslation();

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="bg-slate-950 text-slate-50">
      <Navbar />
      <LanguageSwitcher />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skillsicon />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Contact />
    </div>
  );
}

export default App;