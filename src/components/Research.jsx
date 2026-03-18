import ScrollReveal from './ScrollReveal'

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Research &amp; Publications</h2>
          <p className="section-subtitle">// peer-reviewed work</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card research-card">
            <span className="research-card__badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              IEEE Published
            </span>
            <h3 className="research-card__title">
              Post Quantum Digital Signature Change in IOTA to Reduce Latency in Internet of Vehicles (IoV) Environments
            </h3>
            <p className="research-card__meta">
              2022 International Conference on IoT and Blockchain Technology (IBT) &nbsp;·&nbsp; IEEE Xplore
            </p>
            <a
              href="https://ieeexplore.ieee.org/document/9807757"
              target="_blank"
              rel="noopener noreferrer"
              className="research-card__link"
            >
              View on IEEE Xplore
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
