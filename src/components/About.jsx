import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">// who I am</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="about__text">
            <p>
              I'm a <strong>Quantum Software Engineer</strong> working at the intersection of quantum
              circuit design, algorithm development, and framework-level software engineering. My path
              here has been deliberately interdisciplinary — from fabricating nanoscale semiconductor
              devices in a cleanroom at USC, to building production-grade Python frameworks for hybrid
              quantum-classical experiments at NeoQuortex, to publishing IEEE research on post-quantum
              cryptography in distributed systems.
            </p>
            <p>
              My M.S. in <em>Quantum Information Science</em> from USC provided me with a rigorous
              grounding in quantum mechanics, quantum error correction, open quantum systems, and
              quantum cryptography. I'm drawn to mathematics and quantum mechanics not just as tools but
              as ways of thinking. What drives me is the space between theory and execution —
              translating research into structured, reproducible, production-ready systems that run on
              real hardware.
            </p>
            <p>
              Outside the lab and the terminal, I've spent time designing curriculum on semiconductor
              and quantum computing for high school students and teaching at USC Viterbi's K-12 STEM
              Center. This thread — making hard things understandable — is something I carry into
              everything I build
            </p>
            <p>
              When I'm not working, I'm usually stargazing, reading across science and philosophy, or
              finding music that matches whatever the sky looks like that night.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
