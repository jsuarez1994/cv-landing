import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Education from './components/Education'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">jsuarez@portfolio:~$</div>
        <ul className="navbar-links">
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#education">education</a></li>
        </ul>
      </nav>

      <Hero />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Timeline />
        </section>

        <section id="education">
          <Education />
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">
          &copy; 2025 <span>Jesús Suárez López</span> — Senior Software Engineer
          <span className="cursor" style={{ marginLeft: '8px' }} />
        </p>
      </footer>
    </>
  )
}

export default App
