import ScrollReveal from './ScrollReveal'

const PROJECTS = [
  {
    title: 'Post-Quantum Digital Signatures for IoV',
    desc: 'Researched and implemented post-quantum cryptographic signature schemes within the IOTA distributed ledger to reduce transaction latency in Internet of Vehicles environments. Published at IEEE IBT 2022.',
    badge: 'IEEE Published',
    badgeClass: 'project-card__badge--published',
    tags: ['Quantum Cryptography', 'IOTA', 'IoV', 'Python'],
    link: 'https://ieeexplore.ieee.org/document/9807757',
  },
  {
    title: 'Queue Data Analytics — Cisco Meraki MV Sense 12',
    desc: 'Built an intelligent queue-analytics system using Cisco Meraki MV Sense 12 cameras for real-time crowd monitoring and prediction. Winner of the Smart India Hackathon 2019, a nationwide competition.',
    badge: '🏆 SIH 2019 Winner',
    badgeClass: 'project-card__badge--winner',
    tags: ['IoT', 'Python', 'Computer Vision', 'Analytics'],
    link: null,
  },
  {
    title: 'Quantum Computing Research Project',
    desc: 'Ongoing research exploring advanced quantum algorithms and error-mitigation strategies for near-term quantum hardware. Further details will be shared upon publication.',
    badge: 'In Progress',
    badgeClass: 'project-card__badge--progress',
    tags: ['PennyLane', 'Qiskit', 'Quantum Algorithms'],
    link: null,
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">// things I've built</p>
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
