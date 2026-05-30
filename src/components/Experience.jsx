import ScrollReveal from './ScrollReveal'

const JOBS = [
  {
    role: 'Quantum Software Engineer',
    company: 'NeoQuortex — College Park, MD',
    date: 'Jun 2025 – Present',
    desc: <>At NeoQuortex, we are developing proprietary quantum chemistry algorithms that outperform existing approaches in both accuracy and computational efficiency. A second active project focuses on quantum circuit depth reduction — developing and evaluating techniques to reduce gate depth and resource overhead while preserving computational fidelity, which is critical for near-term quantum hardware.{'\n\n'}My work sits at two levels: the research side and the platform side. On the research side, I investigate quantum algorithms for molecular simulation — studying the landscape of VQE-family methods, ansatz design, and circuit-level performance characteristics to inform and support the development of NeoQuortex's proprietary algorithms. This involves benchmarking parameterized quantum circuits using metrics such as expressibility and entanglement capability, and running comparative studies across algorithms to understand where existing approaches break down and where new ones can perform better.{'\n\n'}On the platform side, I'm building a Python and PennyLane-based library and framework that provides a <a href="https://app.neoquortex.com/" target="_blank" rel="noopener noreferrer">unified interface</a> for running quantum chemistry experiments — spanning both established open-source algorithms like VQE and NeoQuortex's proprietary methods. The framework is designed with clean abstraction layers that separate circuit construction, transformation, backend execution, and measurement, making it backend-agnostic across various cloud quantum platforms.</>,
    tags: ['PennyLane', 'Qiskit', 'Cirq', 't|ket>', 'OpenQASM', 'AWS', 'Python', 'GitHub', 'Markdown', 'Benchmarking', 'Hybrid Algorithms', 'Quantum Chemistry', 'Hamiltonian Simulation', 'Quantum Mechanics', 'Linear Algebra'],
    dotClass: '',
  },
  {
    role: 'STEM Educator & Teaching Assistant',
    company: 'USC Viterbi K-12 STEM Center — Los Angeles, CA',
    date: 'Jun 2024 – Apr 2025',
    desc: `Over two stints at USC Viterbi's K-12 STEM Center, I worked as both a curriculum designer and teaching assistant across multiple programs. I designed lesson plans on semiconductors and robotics for high school students, and trained a class of 15 students on engineering fundamentals using Inspirit's curriculum on Meta Quest VR headsets. I also served as a TA and grader for high schoolers through USC's CORE-195 Discover Engineering summer program, where students explore engineering fields by building real prototypes.

    Teaching high school students is a different kind of challenge — it demands clarity, not just technical fluency. It's one of the experiences that helped me gain a strong grasp of my engineering fundamentals and introduced me to a new learning method: sharing knowledge.`,
    tags: ['STEM Education', 'Curriculum Design', 'Semiconductors', 'Robotics', 'Mentoring', 'Teaching', 'Grading'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Graduate Researcher',
    company: 'USC Nanostructures Materials & Devices Laboratory — Los Angeles, CA',
    date: 'May 2024 – Dec 2024',
    desc: `As a researcher in the USC Nanostructures Materials and Devices Lab (NMDL), I worked on the fabrication of GaAs waveguides using Reactive Ion Etching for a Mesa-Top Quantum Dots project. My contribution focused on the fabrication and characterization phases of the waveguides — executing DOE-driven protocols and operating cleanroom equipment, including plasma etchers, profilometers, optical microscopes, lattice flip and scribe, wet benches, and fumehoods.

    The project was ongoing at the time of my departure; my role was scoped to early experimental phases. This experience sits at the physical layer of quantum systems, below the algorithms and the software, and gives me a perspective on quantum hardware that most software engineers lack direct exposure to.`,
    tags: ['GaAs', 'Waveguides', 'Quantum Dots', 'Semiconductors', 'DOE (Design of Experiments)', 'Nanofabrication', 'Plasma Etching', 'RIE (Reactive Ion Etching)', 'Profilometry', 'Optical Microscopy', 'Cleanroom'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Software Developer',
    company: 'Amdocs — Gurgaon, NCR, India',
    date: 'Jul 2021 – Jul 2023',
    desc: `At Amdocs I delivered Java-based backend services for telecom OMS/CRM platforms supporting high-revenue enterprise deployments for Singtel. I built SOAP APIs and database integrations for Singtel's digital platforms, led proof-of-concept engagements directly with the client, and supported production releases including the Singtel RED launch. I also handled documentation and ran knowledge transfer sessions for my team.

    This role sharpened my ability to deliver in fast-paced, high-stakes environments where learning new technology stacks on the job was the norm.`,
    tags: ['Java', 'Eclipse', 'Oracle SQL', 'PLSQL', 'SOAP/SoapUI', 'Postman', 'XML', 'Unix', 'OMS (Order Management System)', 'Perforce', 'Jira', 'Confluence', 'Agile Methodology', 'Scrum', 'SDLC'],
    dotClass: 'timeline__dot--cyan',
  },
  {
    role: 'Web Development Intern',
    company: 'Saathi Global Education Network — Remote',
    date: 'Jan 2021 – Jun 2021',
    desc: `Led a 3-person team building the backend framework for a startup aiming to connect schools globally. Designed and built a Django-based CMS (Content Management System) with REST APIs and SQL database. First real exposure to project ownership, client-facing product thinking, and leading a small engineering team.`,
    tags: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'SQL', 'Product Ownership', 'Startup Environment'],
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
