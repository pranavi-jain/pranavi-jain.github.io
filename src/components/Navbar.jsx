import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.querySelector(n.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Pranavi Jain — Home">PJ</a>

        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <div className={`navbar__links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((item, i) => (
            <span key={item.href} style={{ display: 'contents' }}>
              <a
                href={item.href}
                className={activeSection === item.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
              {i < NAV_ITEMS.length - 1 && <span className="navbar__dot" aria-hidden="true" />}
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}
