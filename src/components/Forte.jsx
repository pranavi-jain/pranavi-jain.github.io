import ScrollReveal from './ScrollReveal'

const FORTES = [
  {
    title: 'Cross-domain thinking',
    desc: 'My background deliberately spans hardware (nanofabrication, quantum dots), theory (quantum algorithms, error mitigation), and production software (framework engineering, benchmarking pipelines). I don\'t just know the stack — I\'ve worked at almost every layer of it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Fast, deep ramp-up',
    desc: 'I extended PennyLane internals to implement ADAPT-VQE within weeks of joining NeoQuortex. At Amdocs, learning new enterprise stacks under production pressure was standard practice. I\'m someone who goes deep quickly and doesn\'t need hand-holding on unfamiliar technology.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Research to production pipeline',
    desc: 'I read papers to build things. At NeoQuortex, literature-driven research in quantum chemistry and circuit optimization feeds directly into production-ready prototypes. I close the loop between academic results and working code.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Engineering discipline in scientific work',
    desc: 'Reproducibility, structured logging, modular architecture, version control, type checking — I apply professional software engineering practices to research code. Scientific results should be objectively verifiable and structurally sound.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Collaborative and client-ready',
    desc: 'I\'ve led PoC engagements with enterprise clients at Amdocs and worked closely with researchers to shape experimental frameworks at NeoQuortex. I\'m comfortable in both the technical weeds and the room where decisions get made.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function Forte() {
  return (
    <section className="section" id="forte">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">// personal strengths</p>
        </ScrollReveal>

        <div className="forte-grid">
          {FORTES.map((forte, i) => (
            <ScrollReveal key={i}>
              <div className="glass-card forte-card">
                <div className="forte-card__icon">{forte.icon}</div>
                <h3 className="forte-card__title">{forte.title}</h3>
                <p className="forte-card__desc">{forte.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
