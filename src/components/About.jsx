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
            I am a <strong>Quantum Software Engineer</strong> with a Master's degree in{' '}
            <em>Quantum Information Science</em> from the University of Southern California.
            My work lives at the intersection of quantum computing and practical software
            engineering — designing algorithms, building simulations, and pushing the boundaries
            of what near-term quantum hardware can achieve. I have published research through
            <strong> IEEE</strong> on post-quantum cryptography for IoT environments and hold
            a strong foundation in electronics, embedded systems, and full-stack development.
            When I'm not wrangling qubits, you'll find me lost in a good book, playing music,
            or stargazing — because the universe is endlessly fascinating at every scale.
          </div>
        </ScrollReveal>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
