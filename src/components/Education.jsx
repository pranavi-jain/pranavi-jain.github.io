import ScrollReveal from './ScrollReveal'

const SCHOOLS = [
  {
    degree: 'M.S. Quantum Information Science',
    school: 'University of Southern California',
    date: '2023 – 2025',
    gpa: 'GPA: 3.57 / 4',
    coursework: 'Engineering Quantum Mechanics · Quantum Information Processing · Quantum Devices · Open Quantum Systems · Quantum Error Correction · Quantum Cryptography · Applications to Quantum Computing',
    honor: null,
    dotClass: '',
  },
  {
    degree: 'B.E. Electronics & Computer Engineering',
    school: 'Thapar Institute of Engineering & Technology',
    date: '2017 – 2021',
    gpa: 'CGPA: 9.03 / 10',
    coursework: 'Object Oriented Programming · Database Management Systems · Operating Systems · Data Structures & Algorithms · Machine Learning · Image Processing & Computer Vision · Computer Architecture · Embedded Systems · Digital System Design · MOS Circuit Design · Circuit Analysis & Synthesis · Digital Signal Processing · Data Communication & Computer Networks · Probability & Information Theory · Graph Theory and Applications',
    honor: 'TIET Merit-III Scholarship — awarded to top 10% of B.E. cohort across each discipline',
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
                  <p className="timeline__gpa">{s.gpa}</p>

                  {s.honor && (
                    <p className="education__honor">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {s.honor}
                    </p>
                  )}

                  <p className="education__coursework">{s.coursework}</p>
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
