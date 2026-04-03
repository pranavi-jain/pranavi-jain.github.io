import ScrollReveal from './ScrollReveal'

const FORTES = [
  {
    title: 'Cross-domain by design',
    desc: 'My background spans nanofabrication, quantum algorithm research, and production software engineering — not by accident, but because I\'ve always been drawn to the layer boundaries. I don\'t just know the stack; I\'ve worked at almost every level of it, from cleanroom to codebase.',
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
    desc: 'I extended PennyLane internals to implement ADAPT-VQE within weeks of joining NeoQuortex. At Amdocs, learning new enterprise stacks under production pressure was the norm. I go deep quickly and don\'t need hand-holding on unfamiliar technology — the evidence is in the track record.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Research → production',
    desc: 'I read papers to build things. At NeoQuortex, literature-driven research in quantum chemistry and circuit optimization feeds directly into production-ready prototypes. I close the loop between academic results and working, reproducible code.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Scientific rigor in engineering',
    desc: 'Reproducibility, structured logging, modular architecture, version control — I apply professional software engineering discipline to research code. Scientific outputs should be objectively verifiable and structurally sound, not just approximately correct.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Teaching-caliber understanding',
    desc: 'I\'ve designed curriculum and taught quantum computing to high school students. Explaining superposition and entanglement to a 16-year-old demands a different kind of clarity than writing a paper about it. I\'ve done both, and the teaching made the research sharper.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Genuine mathematical curiosity',
    desc: 'Quantum mechanics and mathematics aren\'t just my tools — they\'re how I think about problems. The abstractions are genuinely interesting to me, which means I go deeper than the surface when something doesn\'t make sense yet.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
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
