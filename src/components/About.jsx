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
              here has been deliberately interdisciplinary — from fabricating GaAs waveguides in a
              cleanroom at USC, to building production-grade Python frameworks for hybrid
              quantum-classical experiments at NeoQuortex, to publishing IEEE research on post-quantum
              cryptography in distributed systems.
            </p>
            <p>
              My M.S. in <em>Quantum Information Science</em> from USC gave me a rigorous foundation
              in quantum algorithms, error mitigation, and hardware characterization. What drives me
              is the gap between theory and execution — translating research into structured,
              reproducible, production-ready prototypes that actually run on real hardware.
            </p>
            <p>
              I've worked across IBM, IonQ, IQM, Rigetti, and AWS Braket backends, building
              abstraction layers that separate circuit construction, transformation, execution, and
              measurement. I extend frameworks at the internals level, not just consume APIs. And I
              bring professional software engineering discipline to everything I build: modular
              architecture, version control, structured logging, and a commitment to objectively
              verifiable scientific outputs.
            </p>
            <p>
              Outside of work, I'm drawn to stargazing, music, reading across science and psychology,
              and anything that forces me to think differently about how the world works — which,
              honestly, is also why quantum computing feels like exactly the right field to be in.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
