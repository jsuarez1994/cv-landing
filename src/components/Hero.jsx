import { useState, useEffect } from 'react'

const FULL_TEXT = 'Senior Software Engineer'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (displayed.length < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      setDone(true)
    }
  }, [displayed])

  return (
    <section className="hero">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <span className="terminal-title">bash — jsuarez@portfolio ~ — 80x24</span>
        </div>
        <div className="terminal-body">
          <p className="terminal-prompt">
            <span>jsuarez@portfolio</span>:~$ whoami
          </p>

          <h1 className="hero-name">JESÚS SUÁREZ LÓPEZ</h1>

          <p className="hero-title">
            {displayed}
            {!done && <span className="cursor" />}
          </p>

          <p className="hero-description">
            Ingeniero de software con más de 8 años diseñando y construyendo
            soluciones sobre Java y arquitecturas cloud en AWS. Experto en
            microservicios, Event Driven Design y toma de decisiones de arquitectura.
          </p>

          <div className="hero-contacts">
            <a className="contact-item phone" href="tel:+34656669195">
              +34 656 669 195
            </a>
            <a className="contact-item email" href="mailto:jesus1994sl@gmail.com">
              jesus1994sl@gmail.com
            </a>
            <a
              className="contact-item linkedin"
              href="https://linkedin.com/in/jesussuarezlopez"
              target="_blank"
              rel="noreferrer"
            >
              jesussuarezlopez
            </a>
            <a
              className="contact-item github"
              href="https://github.com/jsuarez1994"
              target="_blank"
              rel="noreferrer"
            >
              jsuarez1994
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
