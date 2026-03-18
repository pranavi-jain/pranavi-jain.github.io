import ScrollReveal from './ScrollReveal'

const JOBS = [
  {
    role: 'Quantum Software Engineer',
    company: 'NeoQuortex — College Park, MD',
    date: '2025 – Present',
    desc: 'Developing quantum software solutions, building quantum circuit simulations, and contributing to research in quantum algorithms and error correction for near-term quantum devices.',
    tags: ['PennyLane', 'Qiskit', 'AWS Braket', 'Python', 'Quantum Algorithms'],
    dotClass: '',
  },
  {
    role: 'Associate Software Engineer',
    company: 'Amdocs Development Centre — India',
    date: 'Jul 2021 – Jul 2023',
    desc: 'Engineered backend services and order-management systems for major telecom clients. Built and maintained Java-based microservices interfacing with Oracle SQL databases, ensuring high-throughput transaction processing.',
    tags: ['Java', 'Oracle SQL', 'OMS', 'Microservices'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Web Developer',
    company: 'Saathi Global Ed Network',
    date: 'Jan 2021 – Jun 2021',
    desc: 'Designed and developed a content management system using Python and Django, streamlining educational content delivery for a growing network of global partners.',
    tags: ['Python', 'Django', 'CMS', 'HTML/CSS'],
    dotClass: 'timeline__dot--cyan',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">// career trajectory</p>
        </ScrollReveal>

        <div className="timeline">
          {JOBS.map((job, i) => (
            <ScrollReveal key={i}>
              <div className="timeline__item">
                <div className={`timeline__dot ${job.dotClass}`} />
                <div className="glass-card timeline__card">
                  <div className="timeline__header">
                    <h3 className="timeline__role">{job.role}</h3>
                    <span className="timeline__date">{job.date}</span>
                  </div>
                  <p className="timeline__company">{job.company}</p>
                  <p className="timeline__desc">{job.desc}</p>
                  <div className="timeline__tags">
                    {job.tags.map(t => (
                      <span className="timeline__tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="section-divider" style={{ marginTop: '2rem' }} />
    </section>
  )
}
