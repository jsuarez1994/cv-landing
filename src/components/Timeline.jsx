const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Cognizant',
    location: 'Sevilla',
    start: 'May 2025',
    end: 'Presente',
    present: true,
    bullets: [
      'Proyecto energético SaaS para tramitación de altas en diferentes comercializadoras, aplicando arquitectura hexagonal y TDD.',
      'Aplicaciones orientadas a Event Driven Design usando tecnologías AWS nativas: SNS, SQS, OpenAPI.',
      'Toma de decisiones de arquitectura en microservicios y artefactos comunes, priorizando eficiencia y modernidad.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'Capgemini',
    location: 'Sevilla',
    start: 'Ago 2022',
    end: 'May 2025',
    present: false,
    bullets: [
      'Proyecto bancario de gran escala con sistema complejo de gestión de pagos, financiación y un nuevo método de pago.',
      'Owner de varios artefactos y referente técnico en sus microservicios: diseño, evolución y toma de decisiones.',
      'Implementación con Java y Spring Boot sobre AWS, con participación activa en revisiones de código y decisiones de arquitectura.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'keapps',
    location: 'Madrid',
    start: 'Jul 2021',
    end: 'Ago 2022',
    present: false,
    bullets: [
      'Proyecto bancario sobre gestión de sucursales, con desarrollo end-to-end usando Angular (front) y Java/Spring Boot (back).',
      'Liderazgo técnico de un equipo de 3 personas en el área de back-end. Integración continua con Jenkins.',
    ],
  },
  {
    role: 'Center Senior → Center Developer → Junior Dev',
    company: 'everis (NTT Data)',
    location: 'Sevilla',
    start: 'Ene 2019',
    end: 'Jul 2021',
    present: false,
    bullets: [
      'Proyecto bancario de monitoreo de sucursales con Java 8, PostgreSQL y MongoDB.',
      'Progresión desde Junior hasta Center Senior en 2 años y 7 meses, con responsabilidad creciente en arquitectura de microservicios.',
    ],
  },
  {
    role: 'Programador · Becario',
    company: 'Deloitte España',
    location: 'Sevilla',
    start: 'Mar 2018',
    end: 'Dic 2018',
    present: false,
    bullets: [
      'Proyecto ferroviario con Java 6 y MySQL: mantenimiento de sistema legacy e implementación de nuevas features con metodología ágil.',
    ],
  },
]

export default function Timeline() {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">EXPERIENCIA_PROFESIONAL</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {EXPERIENCE.map((job, i) => (
          <div className="timeline-item" key={i}>
            <div className={`timeline-dot${job.present ? ' active' : ''}`} />
            <div className="timeline-card">
              <div className="timeline-header">
                <h3 className="timeline-role">{job.role}</h3>
                <span className={`timeline-date${job.present ? ' present' : ''}`}>
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="timeline-company">
                {job.company}
                <span>//</span>
                {job.location}
              </p>
              <ul className="timeline-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
