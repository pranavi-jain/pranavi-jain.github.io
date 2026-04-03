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
              I'm a <strong>Quantum Software Engineer</strong> working at the intersection of
              quantum algorithm research, framework engineering, and hardware experimentation.
              My path here has been deliberately layered — from fabricating nanoscale semiconductor
              devices in a USC cleanroom, to building production-grade Python frameworks for hybrid
              quantum-classical experiments, to publishing IEEE research whose core subject was later
              selected as a NIST post-quantum cryptography standard.
            </p>
            <p>
              My M.S. in <em>Quantum Information Science</em> from USC gave me rigorous grounding
              across quantum mechanics, quantum error correction, open quantum systems, and quantum
              cryptography. What drives me is the space between theory and execution — translating
              research into structured, reproducible, production-ready systems that run on real
              hardware. I've worked across IBM, IonQ, IQM, Rigetti, and AWS Braket, and I extend
              frameworks at the internals level rather than simply consuming APIs.
            </p>
            <p>
              Outside the lab and the terminal, I've spent time teaching — designing curriculum on
              semiconductors and quantum computing for high school students at USC Viterbi's K-12
              STEM Center, and once hosting 300 school kids at an astronomy night as Joint Secretary
              of Thapar's Amateur Astronomers Society. That thread — making hard things
              understandable, and staying genuinely curious about the universe — is something I
              carry into everything I build.
            </p>
            <p>
              I'm drawn to mathematics and quantum mechanics not just as tools but as ways of
              thinking. When I'm not working, I'm usually stargazing, reading across science
              and psychology, or finding music that matches whatever the sky looks like that night.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
