import ScrollReveal from './ScrollReveal'

const JOBS = [
  {
    role: 'Quantum Software Engineer',
    company: 'NeoQuortex — College Park, MD',
    date: 'Jun 2025 – Present',
    desc: `At NeoQuortex, we are building proprietary quantum chemistry algorithms designed to outperform existing approaches in accuracy and computational efficiency. A second active project focuses on circuit depth reduction — developing and evaluating techniques to reduce gate depth and resource overhead while preserving computational fidelity, which is critical for near-term hardware.

    My work sits at two levels: the research side and the platform side. On the research side, I investigate quantum algorithms for molecular simulation — studying the landscape of VQE-family methods, ansatz design, and circuit-level performance characteristics to inform and support the development of NeoQuortex's proprietary algorithms. This involves benchmarking parameterized quantum circuits across metrics like expressibility and entanglement capability, and running comparative studies across algorithms to understand where existing approaches break down and where new ones can do better.

    On the platform side, I'm building a Python and PennyLane-based library and framework that gives users a unified interface to run quantum chemistry experiments — spanning both established open-source algorithms like VQE and NeoQuortex's proprietary methods. The framework is designed with clean abstraction layers that separate circuit construction, transformation, backend execution, and measurement, making it backend-agnostic across various cloud quantum platforms.`,
    tags: ['PennyLane', 'Qiskit', 'Cirq', 't|ket>', 'OpenQASM', 'Markdown', 'Benchmarking', 'Hybrid Algorithms', 'Quantum Chemistry', 'Python', 'GitHub', 'AWS'],
    dotClass: '',
  },
  {
    role: 'STEM Educator & Teaching Assistant',
    company: 'USC Viterbi K-12 STEM Center — Los Angeles, CA',
    date: 'Jun 2024 – Apr 2025',
    desc: `Over two stints at USC Viterbi's K-12 STEM Center, I worked as both a curriculum designer and teaching assistant across multiple programs. I designed lesson plans on semiconductors and robotics for high school students, and served as TA and grader for The Coding School's quantum computing curriculum — taking live classes and supporting students learning quantum concepts from scratch. I also trained a class of 15 students on AR/VR fundamentals using Inspirit's curriculum on Meta Quest headsets, and mentored high schoolers through USC's CORE-195 Discover Engineering summer program, where students explore engineering fields by building real prototypes.

    Teaching quantum computing to high school students is a different kind of challenge — it demands clarity of intuition, not just technical fluency. It's one of the experiences I'm most glad to have had.`,
    tags: ['Quantum Computing Education', 'Curriculum Design', 'Semiconductors', 'AR/VR', 'Meta Quest', 'Mentoring'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Graduate Researcher',
    company: 'USC Nanostructures Materials & Devices Laboratory — Los Angeles, CA',
    date: 'May 2024 – Dec 2024',
    desc: `As a researcher in the USC Nanostructures Materials and Devices Lab, I worked on the fabrication of GaAs waveguides using Reactive Ion Etching for a Mesa-Top Quantum Dots project. My contribution focused on the fabrication and characterization phases of the experimental workflow — executing DOE-driven protocols and operating cleanroom equipment including plasma etchers, profilometers, optical microscopes, lattice flip and scribe, wet benches, and fumehoods.

    The project was ongoing at the time of my departure; my role was scoped to these early experimental phases. This experience sits at the physical layer of quantum systems — below the algorithms and the software — and gives me a perspective on quantum hardware that most software engineers don't have direct exposure to.`,
    tags: ['GaAs', 'Quantum Dots', 'DOE (Design of Experiments)', 'Nanofabrication', 'Plasma Etching', 'RIE', 'Profilometry', 'Optical Microscopy'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Software Developer',
    company: 'Amdocs — Gurgaon, NCR, India',
    date: 'Jul 2021 – Jul 2023',
    desc: `At Amdocs I delivered Java-based backend services for telecom OMS/CRM platforms supporting high-revenue enterprise deployments for Singtel. I built SOAP/XML APIs and database integrations for Singtel's digital platforms, led proof-of-concept engagements directly with Singtel clients, and supported production releases including the Singtel RED launch. I also handled documentation and ran knowledge transfer sessions for my team.

    This role sharpened my ability to deliver in fast-paced, high-stakes environments where learning new technology stacks on the job was the norm, not the exception.`,
    tags: ['Java', 'Oracle SQL', 'PLSQL', 'SOAP/SoapUI', 'Postman', 'XML', 'OMS (Order Management System)', 'Perforce', 'Jira', 'Confluence', 'Unix'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Web Development Intern',
    company: 'Saathi Global Education Network — Remote',
    date: 'Jan 2021 – Jun 2021',
    desc: `Led a 3-person team building the backend framework for a startup aiming to connect schools globally. Designed and built a Django-based Content Management System with REST APIs and SQL database backend. First real exposure to project ownership, client-facing product thinking, and leading a small engineering team.`,
    tags: ['Python', 'Django', 'Django REST Framework', 'SQL'],
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
