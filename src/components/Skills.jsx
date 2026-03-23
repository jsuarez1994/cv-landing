const SKILLS = [
  {
    category: 'LENGUAJES',
    tags: ['Java', 'Python', 'JavaScript'],
  },
  {
    category: 'BACKEND',
    tags: ['Spring Boot', 'Maven', 'Microservicios', 'Hexagonal Arch', 'TDD'],
  },
  {
    category: 'FRONTEND',
    tags: ['Angular', 'React'],
  },
  {
    category: 'CLOUD',
    tags: ['AWS', 'SNS', 'SQS', 'OpenAPI', 'Azure DevOps'],
  },
  {
    category: 'BASES_DE_DATOS',
    tags: ['SQL', 'PostgreSQL', 'MongoDB', 'NoSQL'],
  },
  {
    category: 'DEVOPS',
    tags: ['Docker', 'Jenkins', 'BitBucket', 'Git'],
  },
  {
    category: 'TESTING',
    tags: ['Selenium', 'JUnit', 'SonarLint'],
  },
  {
    category: 'GESTION',
    tags: ['Jira', 'Agile', 'Code Review'],
  },
]

export default function Skills() {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">TECNOLOGIAS</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div className="skill-block" key={skill.category}>
            <p className="skill-category">{skill.category}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
