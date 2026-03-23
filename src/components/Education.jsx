const EDUCATION = [
  {
    degree: 'Grado Superior DAW',
    school: 'IES Julio Verne',
    years: '2015 — 2018',
  },
  {
    degree: 'Grado en Artes Gráficas',
    school: 'IES Llanes',
    years: '2011 — 2014',
  },
]

export default function Education() {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">FORMACION</h2>
        <div className="section-line" />
      </div>

      <div className="education-grid">
        {EDUCATION.map((ed, i) => (
          <div className="education-card" key={i}>
            <p className="education-degree">{ed.degree}</p>
            <p className="education-school">{ed.school}</p>
            <p className="education-year">{ed.years}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
