export default function About() {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">PERFIL_PROFESIONAL</h2>
        <div className="section-line" />
      </div>

      <div className="about-output">
        <p className="output-line prompt">
          jsuarez@portfolio:~$ cat profile.txt
        </p>
        <p className="output-line">
          Ingeniero de software con más de 8 años diseñando y construyendo
          soluciones sobre Java y arquitecturas cloud en AWS.
        </p>
        <br />
        <p className="output-line">
          Me gusta entender el porqué detrás de cada decisión técnica,
          explorando de forma continua nuevas herramientas, patrones y
          tendencias del sector.
        </p>
        <br />
        <p className="output-line">
          Disfruto asumiendo responsabilidad más allá de mi código: proponer
          mejoras proactivamente, compartir conocimiento con el equipo y
          aportar contexto de negocio a las decisiones de arquitectura.
        </p>
      </div>
    </div>
  )
}
