import ScrollReveal from './ScrollReveal'

const JOBS = [
  {
    role: 'Quantum Software Engineer',
    company: 'NeoQuortex — College Park, MD',
    date: 'Jun 2025 – Present',
    desc: `At NeoQuortex I architect and maintain a modular Python framework for hybrid quantum-classical experiments. The framework is built around clear abstraction layers — separating circuit construction, transformation, backend execution, and measurement — a design philosophy that maps directly to how modern quantum compilation pipelines are structured.

Core work includes building a PennyLane-based characterization framework that evaluates parameterized quantum circuits and ansatz across six metrics including expressibility and entanglement capability. I designed a benchmarking pipeline comparing 6+ parameterized circuits across 3+ algorithms for H\u2082 and LiH molecules, producing comparative performance datasets used internally for ansatz selection.

I also develop OpenQASM-level circuit transformation and analysis utilities that evaluate gate depth, gate counts, and backend-specific resource metrics across heterogeneous hardware targets including IBM, IonQ, and AWS Braket. Currently extending PennyLane core functionality to implement ADAPT-VQE with custom operator pools — working inside framework internals rather than simply consuming APIs.`,
    tags: ['PennyLane', 'Qiskit', 'AWS Braket', 'OpenQASM', 'Python', 'ADAPT-VQE', 'Circuit Benchmarking'],
    dotClass: '',
  },
  {
    role: 'Graduate Researcher',
    company: 'USC Nanostructures Materials & Devices Laboratory — Los Angeles, CA',
    date: 'May 2024 – Dec 2024',
    desc: `During my M.S., I worked in the USC Nanostructures Materials and Devices Lab on the fabrication of GaAs waveguides using Reactive Ion Etching (RIE) for Mesa-Top Quantum Dots. This role gave me hands-on experience with the physical hardware side of quantum systems — the layer beneath the algorithms. I executed DOE-driven experimental workflows and operated a full suite of cleanroom tools including plasma etchers, profilometers, optical microscopy equipment, wet benches, and fumehoods. It's a dimension of quantum engineering that very few software engineers have direct exposure to.`,
    tags: ['RIE', 'Nanofabrication', 'Profilometry', 'Optical Microscopy', 'GaAs', 'Quantum Dots'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Software Developer',
    company: 'Amdocs — Gurgaon, NCR, India',
    date: 'Jul 2021 – Jul 2023',
    desc: `At Amdocs I delivered Java-based backend services for telecom OMS/CRM platforms supporting high-revenue enterprise deployments. I built SOAP/XML APIs and database integrations for Singtel's digital platforms, led proof-of-concept engagements directly with Singtel clients, and supported production releases including the Singtel RED launch. I also handled documentation and ran knowledge transfer sessions for my team. This role sharpened my ability to deliver in fast-paced, high-stakes environments where learning new technology stacks on the job was the norm, not the exception.`,
    tags: ['Java', 'Oracle SQL', 'SOAP/XML', 'OMS/CRM', 'Perforce'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Web Development Intern',
    company: 'Saathi Global Education Network — Remote',
    date: 'Jan 2021 – Jun 2021',
    desc: `Led a 3-person team building the backend framework for a startup aiming to connect schools globally. Designed and built a Django-based Content Management System with REST APIs and a Neo4j graph database backend. First real exposure to project ownership, client-facing product thinking, and leading a small engineering team.`,
    tags: ['Python', 'Django', 'REST APIs', 'Neo4j'],
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
