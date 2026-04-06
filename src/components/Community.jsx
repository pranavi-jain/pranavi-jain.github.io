import ScrollReveal from './ScrollReveal'

const FEATURED = [
  {
    org: 'Thapar Amateur Astronomers Society (TAAS)',
    role: 'Joint Secretary',
    date: 'Feb 2018 – Jun 2020',
    location: 'Thapar Institute, Patiala',
    desc: 'Helped run the university\'s astronomy society for over two years — organizing observation nights, talks, and outreach events. The highlight was hosting around 300 school students for an astronomy event designed to spark curiosity about astrophysics in young minds. Stargazing is still something I do whenever the sky cooperates.',
  },
  {
    org: 'GirlScript Foundation — Patiala City Chapter',
    role: 'Chapter Lead',
    date: 'Jul 2019 – May 2020',
    location: null,
    desc: 'Initiated and led the Patiala city chapter of GirlScript Foundation, organizing tech events at the city level to encourage women\'s participation in engineering and technology. Getting more people — especially women — into technical fields is something I care about and tried to act on, not just endorse.',
  },
  {
    org: 'Saturnalia — Annual Technical Festival, Thapar Institute',
    role: 'Technical Events Head',
    date: 'Aug 2019 – Nov 2019',
    location: null,
    desc: 'Saturnalia is Thapar\'s flagship pan-India college fest. As Technical Events Head, I led the end-to-end planning and execution of all tech competitions — robotics (maze solvers, line followers), RC planes, hackathons, and more — from event design through the day of. The organizational side was the real challenge: coordinating a team of 5 co-leads and 40 junior volunteers across months of preparation, aligning on formats, judging criteria, logistics, and contingencies — all while managing my own coursework. On the day, we ran simultaneous competitions drawing ~15 participants per event and an overnight hackathon with around 200 participants. What I took away: how to delegate without micromanaging, how to hold a large team accountable to a shared deadline, and how quickly things go sideways when communication breaks down — and how to fix them in real time.',
  },
]

const COMPACT = [
  { role: 'IoT & Hardware Head', org: 'Google Developer Student Club (GDSC), Thapar Chapter', year: '2019–2020' },
  { role: 'Student Mentor', org: 'IETE Student\'s Forum, Thapar Chapter', year: '2018–2019' },
]

export default function Community() {
  return (
    <section className="section" id="community">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Leadership &amp; Community</h2>
          <p className="section-subtitle">// beyond the codebase</p>
        </ScrollReveal>

        <div className="community-featured">
          {FEATURED.map((item, i) => (
            <ScrollReveal key={i}>
              <div className="glass-card community-card">
                <div className="community-card__header">
                  <h3 className="community-card__org">{item.org}</h3>
                  <span className="timeline__date">{item.date}</span>
                </div>
                <p className="community-card__role">{item.role}{item.location ? ` · ${item.location}` : ''}</p>
                <p className="community-card__desc">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="community-compact">
            {COMPACT.map((item, i) => (
              <div className="community-compact__item" key={i}>
                <span className="community-compact__role">{item.role}</span>
                <span className="community-compact__org"> — {item.org}</span>
                <span className="community-compact__year"> · {item.year}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <div className="section-divider" style={{ marginTop: '4rem' }} />
    </section>
  )
}
