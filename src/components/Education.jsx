import ScrollReveal from './ScrollReveal'

const SCHOOLS = [
  {
    degree: 'M.S. Quantum Information Science',
    school: 'University of Southern California',
    date: '2023 – 2025',
    detail: 'Focused on quantum computing, quantum algorithms, quantum error correction, and quantum information theory.',
    dotClass: '',
  },
  {
    degree: 'B.E. Electronics & Computer Engineering',
    school: 'Thapar Institute of Engineering & Technology',
    date: '2017 – 2021',
    detail: 'CGPA: 9.03 / 10. Coursework in embedded systems, digital logic design, IoT, and computer science fundamentals.',
    dotClass: 'timeline__dot--cyan',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">// academic coordinates</p>
        </ScrollReveal>

        <div className="timeline">
          {SCHOOLS.map((s, i) => (
            <ScrollReveal key={i}>
              <div className="timeline__item">
                <div className={`timeline__dot ${s.dotClass}`} />
                <div className="glass-card timeline__card">
                  <div className="timeline__header">
                    <h3 className="timeline__role">{s.degree}</h3>
                    <span className="timeline__date">{s.date}</span>
                  </div>
                  <p className="timeline__company">{s.school}</p>
                  <p className="timeline__desc">{s.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="section-divider" style={{ marginTop: '2rem' }} />
    </section>
  )
}
