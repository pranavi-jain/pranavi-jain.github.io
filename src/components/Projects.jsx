import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    title: 'Benchmarking Quantum Computers: Grover\'s Algorithm Across Hardware',
    desc: 'A holistic benchmarking study running Grover\'s search algorithm across four different quantum hardware and simulator platforms: IBM via Qiskit, IonQ, IQM, and Rigetti via AWS Braket. The project compares the actual performance of each backend against theoretical expectations.',
    badge: 'Quantum Benchmarking',
    badgeClass: 'project-card__badge--progress',
    tags: ['Qiskit', 'AWS Braket', 'IBM Quantum', "Grover's Algorithm", 'Benchmarking'],
    link: 'https://github.com/pranavi-jain/quantum-algorithms',
  },
  {
    title: 'Zero-Noise Extrapolation for Quantum Error Mitigation',
    desc: 'A deep-dive review of the Zero-Noise Extrapolation (ZNE) technique — one of the most practical near-term approaches to mitigating the effects of noise in quantum circuits. The project surveys ZNE fundamentals and its variants, then implements a working demonstration using Qiskit with the mitiq package.',
    badge: 'Error Mitigation',
    badgeClass: 'project-card__badge--progress',
    tags: ['Qiskit', 'mitiq', 'ZNE', 'Error Mitigation', 'NISQ'],
    link: 'https://github.com/pranavi-jain/Quantum-error-suppression-mitigation-and-correction',
  },
  {
    title: 'Two-Qubit Entanglement Dynamics using Master Equations',
    desc: 'An experimental study of entanglement dynamics on real IBM quantum processors, bridging open quantum systems theory with actual hardware behavior. The project simulates the Nakajima-Zwanzig and Time-Convolutionless (TCL) master equations to characterize the evolution of two-qubit entanglement under realistic decoherence conditions.',
    badge: 'Open Quantum Systems',
    badgeClass: 'project-card__badge--published',
    tags: ['Qiskit', 'Entanglement', 'Decoherence', 'Open Quantum Systems'],
    link: null,
  },
  {
    title: 'Hybrid Quantum Networks for End-to-End Qubit State Transfer',
    desc: 'A theoretical investigation into integrating Fluxonium qubits with piezoelectric membranes for optical transduction of quantum states. The goal is lossless transfer of quantum information across hybrid quantum network nodes - a key challenge for the future quantum internet. This project sits at the intersection of superconducting qubit architecture, quantum transduction, and network theory.',
    badge: 'Quantum Networks',
    badgeClass: 'project-card__badge--winner',
    tags: ['Quantum Networks', 'Superconducting', 'Photonic', 'Optical Transduction'],
    link: null,
  },
  {
    title: 'Detection of Learner Concentration in Distance Learning',
    desc: 'Our bachelor\'s final-year capstone project implemented ML models and neural networks to detect and quantify a student\'s concentration levels in real time, presenting statistical output to instructors. My specific contribution was the hardware integration layer: connecting the webcam input pipeline to the ML model, handling the electronics of real-time video capture and preprocessing.',
    badge: 'B.E. Capstone',
    badgeClass: 'project-card__badge--published',
    tags: ['IoT', 'Raspberry Pi', 'Python', 'Machine Learning', 'Neural Networks'],
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
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
