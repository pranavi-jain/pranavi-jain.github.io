import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const SCHOOLS = [
  {
    degree: 'M.S. Quantum Information Science',
    school: 'University of Southern California',
    date: '2023 – 2025',
    gpa: 'GPA: 3.57 / 4',
    detail: 'Focused on quantum computing, quantum algorithms and cryptography, quantum error correction and mitigation, quantum information theory, open quantum systems, superconducting devices.',
    coursework: 'Engineering Quantum Mechanics · Quantum Information Processing · Quantum Devices · Open Quantum Systems · Quantum Error Correction · Quantum Cryptography · Applications to Quantum Computing',
    honor: null,
    dotClass: '',
  },
  {
    degree: 'B.E. Electronics & Computer Engineering',
    school: 'Thapar Institute of Engineering & Technology',
    date: '2017 – 2021',
    gpa: 'CGPA: 9.03 / 10',
    detail: 'Coursework in signals and systems, digital signal processing, embedded systems, digital logic design; and data structures and algorithms, computer networks, operating systems.',
    coursework: 'Computer Architecture · Embedded Systems · Digital System Design · Signal Processing · Data Structures & Algorithms · Machine Learning · Computer Networks · Probability & Information Theory · Database Management Systems · Operating Systems',
    honor: 'TIET Merit-III Scholarship — awarded to top 10% of B.E. cohort across disciplines',
    dotClass: 'timeline__dot--cyan',
  },
]

export default function Education() {
  const [expanded, setExpanded] = useState({})

  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))

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
                  <p className="timeline__desc">{s.detail}</p>

                  {s.honor && (
                    <p className="education__honor">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {s.honor}
                    </p>
                  )}

                  <button
                    className="education__coursework-toggle"
                    onClick={() => toggle(i)}
                    aria-expanded={!!expanded[i]}
                  >
                    {expanded[i] ? '▾' : '▸'} Coursework
                  </button>
                  {expanded[i] && (
                    <p className="education__coursework">{s.coursework}</p>
                  )}
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
