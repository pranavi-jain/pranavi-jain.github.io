import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    title: 'Benchmarking Quantum Computers: Grover\'s Algorithm Across Hardware',
    desc: 'An empirical benchmarking study running Grover\'s search algorithm on four different quantum hardware and simulator platforms — IBM via Qiskit, IonQ, IQM, and Rigetti via AWS Braket. The project analyzes how each backend\'s transpiler handles gate decomposition, qubit routing, and circuit optimization differently, and compares actual performance against theoretical expectations. This is the kind of cross-platform, hardware-aware benchmarking that sits right on the boundary between algorithm research and compilation engineering.',
    badge: 'Quantum Benchmarking',
    badgeClass: 'project-card__badge--progress',
    tags: ['Qiskit', 'AWS Braket', 'IonQ', 'IQM', "Grover's Algorithm", 'Benchmarking'],
    link: null,
  },
  {
    title: 'Zero-Noise Extrapolation for Quantum Error Mitigation',
    desc: 'A deep-dive review of the Zero-Noise Extrapolation (ZNE) technique — one of the most practical near-term approaches to reducing the effects of noise in quantum circuits without full fault tolerance. The project surveys ZNE fundamentals and its various modifications, then implements a working demonstration using Qiskit with the mitiq error mitigation package. A practical study of the tradeoffs between circuit accuracy and computational overhead in NISQ-era devices.',
    badge: 'Error Mitigation',
    badgeClass: 'project-card__badge--progress',
    tags: ['Qiskit', 'mitiq', 'ZNE', 'Error Mitigation', 'NISQ'],
    link: null,
  },
  {
    title: 'Two-Qubit Entanglement Dynamics on IBM Quantum Systems',
    desc: 'An experimental study of entanglement dynamics on real IBM quantum processors. The project simulates the Nakajima-Zwanzig and Time-Convolutionless (TCL) master equations to characterize how two-qubit entanglement evolves under realistic decoherence conditions — bridging open quantum systems theory with experimental hardware behavior.',
    badge: 'Quantum Hardware',
    badgeClass: 'project-card__badge--published',
    tags: ['IBM Quantum', 'Qiskit', 'Entanglement', 'Open Quantum Systems', 'TCL'],
    link: null,
  },
  {
    title: 'Hybrid Quantum Networks for End-to-End Qubit State Transfer',
    desc: 'A theoretical investigation into integrating Fluxonium qubits with piezoelectric membranes for optical transduction of quantum states. The goal is seamless transfer of quantum information across hybrid quantum network nodes without loss — a key challenge for the future quantum internet. This project sits at the intersection of superconducting qubit architecture, quantum transduction, and network theory.',
    badge: 'Quantum Networks',
    badgeClass: 'project-card__badge--winner',
    tags: ['Fluxonium', 'Quantum Transduction', 'Quantum Networks', 'Piezoelectric'],
    link: null,
  },
  {
    title: 'Detection of Learner Concentration in Distance Learning',
    desc: 'Our final-year capstone tackled a problem that became acutely relevant during the pandemic: how do you know if an online learner is actually engaged? The project implemented ML models and neural networks to detect and quantify a student\'s concentration levels in real time, presenting statistical output to instructors.\n\nMy specific contribution was the hardware integration layer — connecting the webcam input pipeline to the ML model, handling the electronics side of real-time video capture and preprocessing. Working at the boundary between hardware input and software inference is something I\'ve returned to repeatedly since, in different forms.',
    badge: 'B.E. Capstone',
    badgeClass: 'project-card__badge--published',
    tags: ['Machine Learning', 'Neural Networks', 'IoT', 'Python', 'Webcam Integration', 'EdTech'],
    link: null,
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Academic Projects</h2>
          <p className="section-subtitle">// research-driven explorations</p>
        </ScrollReveal>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={i}>
              <div className="glass-card project-card">
                <span className={`project-card__badge ${p.badgeClass}`}>{p.badge}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => (
                    <span className="timeline__tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-card__link"
                    style={{ marginTop: '1rem' }}
                  >
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
