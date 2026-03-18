import { useEffect, useRef, useState, useCallback } from 'react'
import ScrollReveal from './ScrollReveal'

/* ── Skill constellation data ────────────────── */
const CONSTELLATIONS = [
  {
    name: 'Quantum Array',
    color: '#7ecbcf',
    skills: [
      { label: 'PennyLane',              x: 0.18, y: 0.28, r: 5, bridge: false },
      { label: 'Qiskit',                 x: 0.28, y: 0.18, r: 5, bridge: false },
      { label: 'AWS Braket',             x: 0.12, y: 0.45, r: 4.5, bridge: false },
      { label: 'Quantum Algorithms',     x: 0.30, y: 0.38, r: 5.5, bridge: false },
      { label: 'Quantum Error Correction', x: 0.22, y: 0.55, r: 4, bridge: false },
      { label: 'Python',                 x: 0.40, y: 0.48, r: 6, bridge: true },
    ],
    edges: [[0,1],[0,2],[0,3],[1,3],[2,4],[3,4],[3,5]],
  },
  {
    name: 'Circuit Nebula',
    color: '#e8d5a3',
    skills: [
      { label: 'IoT',               x: 0.62, y: 0.20, r: 5, bridge: false },
      { label: 'Embedded Systems',   x: 0.72, y: 0.30, r: 4.5, bridge: false },
      { label: 'Digital Logic',      x: 0.58, y: 0.38, r: 4, bridge: false },
      { label: 'IR/Ultrasonic Sensors', x: 0.78, y: 0.15, r: 3.5, bridge: false },
    ],
    edges: [[0,1],[0,2],[1,2],[1,3],[0,3]],
  },
  {
    name: 'Code Stream',
    color: '#c47a9b',
    skills: [
      { label: 'Python',   x: 0.40, y: 0.48, r: 6, bridge: true },
      { label: 'Java',     x: 0.52, y: 0.65, r: 5, bridge: false },
      { label: 'Git',      x: 0.38, y: 0.75, r: 4, bridge: false },
      { label: 'SQL',      x: 0.62, y: 0.78, r: 4.5, bridge: false },
      { label: 'Django',   x: 0.48, y: 0.85, r: 4, bridge: false },
    ],
    edges: [[0,1],[0,2],[1,3],[1,4],[2,4],[3,4]],
  },
]

/* mobile fallback data */
const SKILL_GROUPS = [
  {
    title: 'Quantum Array',
    cls: 'skill-chip--quantum',
    skills: ['PennyLane', 'Qiskit', 'AWS Braket', 'Quantum Algorithms', 'Quantum Error Correction'],
  },
  {
    title: 'Circuit Nebula',
    cls: 'skill-chip--hardware',
    skills: ['IoT', 'Embedded Systems', 'IR/Ultrasonic Sensors', 'Digital Logic'],
  },
  {
    title: 'Code Stream',
    cls: 'skill-chip--code',
    skills: ['Python', 'Java', 'Git', 'SQL', 'Django'],
  },
]

export default function ConstellationMap() {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const [tooltip, setTooltip] = useState({ text: '', x: 0, y: 0, visible: false })
  const animProgress = useRef(0)
  const hasAnimated = useRef(false)

  // Build flat list of unique stars (merge bridged duplicates)
  const starsRef = useRef(null)
  if (!starsRef.current) {
    const map = new Map()
    for (const c of CONSTELLATIONS) {
      for (const s of c.skills) {
        const key = s.label
        if (!map.has(key)) {
          map.set(key, { ...s, colors: [c.color] })
        } else {
          map.get(key).colors.push(c.color)
        }
      }
    }
    starsRef.current = map
  }

  const draw = useCallback((ctx, w, h, progress) => {
    ctx.clearRect(0, 0, w, h)

    for (const constellation of CONSTELLATIONS) {
      const skills = constellation.skills

      // Draw constellation lines
      for (const [a, b] of constellation.edges) {
        const sA = skills[a], sB = skills[b]
        const x1 = sA.x * w, y1 = sA.y * h
        const x2 = sB.x * w, y2 = sB.y * h

        const lineLen = Math.hypot(x2 - x1, y2 - y1)
        const drawLen = lineLen * Math.min(1, progress)

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        const angle = Math.atan2(y2 - y1, x2 - x1)
        ctx.lineTo(x1 + Math.cos(angle) * drawLen, y1 + Math.sin(angle) * drawLen)
        ctx.strokeStyle = constellation.color
        ctx.globalAlpha = 0.3
        ctx.lineWidth = 1.2
        ctx.stroke()
        ctx.restore()
      }

      // Draw constellation group label
      if (progress > 0.4) {
        const avgX = skills.reduce((s, sk) => s + sk.x, 0) / skills.length * w
        const avgY = skills.reduce((s, sk) => s + sk.y, 0) / skills.length * h - 30
        ctx.save()
        ctx.font = '700 14px "Exo 2", sans-serif'
        ctx.fillStyle = constellation.color
        ctx.globalAlpha = Math.min(1, (progress - 0.4) * 2.5) * 0.5
        ctx.textAlign = 'center'
        ctx.fillText(constellation.name.toUpperCase(), avgX, avgY)
        ctx.restore()
      }

      // Draw stars and labels
      for (const skill of skills) {
        const sx = skill.x * w
        const sy = skill.y * h
        const starData = starsRef.current.get(skill.label)

        // Outer glow
        ctx.save()
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, skill.r * 5)
        grad.addColorStop(0, constellation.color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.globalAlpha = 0.2 * Math.min(1, progress * 2)
        ctx.beginPath()
        ctx.arc(sx, sy, skill.r * 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Star dot
        const dotR = skill.r * Math.min(1, progress * 1.5)
        ctx.save()
        ctx.beginPath()
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2)
        ctx.fillStyle = starData.colors.length > 1 ? '#ffffff' : constellation.color
        ctx.globalAlpha = Math.min(1, progress * 2)
        ctx.fill()
        ctx.restore()

        // Persistent skill label
        if (progress > 0.6) {
          ctx.save()
          ctx.font = '11px "Share Tech Mono", monospace'
          ctx.fillStyle = '#e8e8f0'
          ctx.globalAlpha = Math.min(0.75, (progress - 0.6) * 3)
          ctx.textAlign = 'left'
          ctx.fillText(skill.label, sx + skill.r + 8, sy + 4)
          ctx.restore()
        }
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')
    let animId
    let running = true

    function resize() {
      const rect = wrap.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw(ctx, rect.width, rect.height, animProgress.current)
    }

    function animate() {
      if (!running) return
      if (animProgress.current < 1) {
        animProgress.current = Math.min(1, animProgress.current + 0.012)
        const rect = wrap.getBoundingClientRect()
        draw(ctx, rect.width, rect.height, animProgress.current)
      }
      animId = requestAnimationFrame(animate)
    }

    // Intersection Observer to trigger animation
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        animate()
      }
    }, { threshold: 0.2 })

    resize()
    draw(ctx, wrap.getBoundingClientRect().width, wrap.getBoundingClientRect().height, 0)
    observer.observe(wrap)
    window.addEventListener('resize', resize)

    return () => {
      running = false
      cancelAnimationFrame(animId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [draw])

  // Hover detection
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const rect = wrap.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    let found = null
    for (const c of CONSTELLATIONS) {
      for (const s of c.skills) {
        const sx = s.x * rect.width
        const sy = s.y * rect.height
        const dist = Math.hypot(mx - sx, my - sy)
        if (dist < 20) {
          found = { label: s.label, x: sx, y: sy }
          break
        }
      }
      if (found) break
    }

    if (found) {
      setTooltip({ text: found.label, x: found.x, y: found.y, visible: true })
    } else {
      setTooltip(prev => prev.visible ? { ...prev, visible: false } : prev)
    }
  }

  return (
    <section className="section constellation-section" id="skills">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">// constellation map</p>
        </ScrollReveal>

        {/* Desktop canvas */}
        <div
          className="constellation-canvas-wrap"
          ref={wrapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false }))}
        >
          <canvas ref={canvasRef} className="constellation-canvas" aria-label="Interactive skill constellation map" />
          <div
            className={`constellation-tooltip${tooltip.visible ? ' visible' : ''}`}
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.text}
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="skills-cards">
          {SKILL_GROUPS.map(group => (
            <ScrollReveal key={group.title}>
              <div className="glass-card">
                <h3 className="skills-group__title">{group.title}</h3>
                <div className="skills-group__list">
                  {group.skills.map(s => (
                    <span key={s} className={`skill-chip ${group.cls}`}>{s}</span>
                  ))}
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
