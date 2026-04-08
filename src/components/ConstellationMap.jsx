import { useEffect, useRef, useState, useCallback } from 'react'
import ScrollReveal from './ScrollReveal'

/* ── Colors ── */
const C_CYAN = '#00e5ff'
const C_ROSE = '#ff6b9d'
const C_GOLD = '#ffd166'
const C_VIOLET = '#c084fc'
const C_WHITE = '#ffffff'

/* ── Constellation data ── */
const CONSTELLATIONS = [
  /* ─── QUANTUM ARRAY — upper-left ─── */
  {
    name: 'Quantum Array',
    color: C_CYAN,
    skills: [
      /* tools — solid */
      { label: 'PennyLane', x: 0.07, y: 0.10, r: 5 },
      { label: 'Qiskit', x: 0.17, y: 0.06, r: 5 },
      { label: 'AWS Braket', x: 0.03, y: 0.20, r: 4 },
      { label: 'PySCF', x: 0.04, y: 0.40, r: 3.5 },
      { label: 'OpenFermion', x: 0.12, y: 0.44, r: 3.5 },
      { label: 'mitiq', x: 0.30, y: 0.38, r: 3.5 },
      { label: 'Circuit Knitting', x: 0.26, y: 0.30, r: 3.5 },
      { label: 'QuTiP', x: 0.32, y: 0.46, r: 3.5 },
      /* concepts — outline */
      { label: 'Quantum Algorithms', x: 0.19, y: 0.14, r: 5, theory: true },
      { label: "Grover's Algorithm", x: 0.27, y: 0.08, r: 3.5, theory: true },
      { label: 'QPE', x: 0.10, y: 0.18, r: 3.5, theory: true },
      { label: 'QAOA', x: 0.23, y: 0.18, r: 3.5, theory: true },
      { label: 'Hybrid Algorithms', x: 0.13, y: 0.28, r: 5, theory: true },
      { label: 'VQE', x: 0.05, y: 0.30, r: 3.5, theory: true },
      { label: 'VTE', x: 0.09, y: 0.36, r: 3.5, theory: true },
      { label: 'ADAPT-VQE', x: 0.17, y: 0.36, r: 3.5, theory: true },
      { label: 'Hardware-Efficient Ansatz', x: 0.21, y: 0.32, r: 3.5, theory: true },
      { label: 'Quantum Chemistry', x: 0.07, y: 0.34, r: 4, theory: true },
      { label: 'Quantum Circuit Optimization', x: 0.25, y: 0.24, r: 3.5, theory: true },
      { label: 'Open Quantum Systems', x: 0.30, y: 0.42, r: 4, theory: true },
      { label: 'Quantum Error Correction', x: 0.32, y: 0.34, r: 4, theory: true },
      /* bridges */
      { label: 'Python', x: 0.36, y: 0.60, r: 6, bridge: true },
      { label: 'OpenQASM', x: 0.34, y: 0.16, r: 4, bridge: true },
      { label: 'Quantum Cryptography', x: 0.42, y: 0.22, r: 4, bridge: true, theory: true },
      { label: 'Quantum Dots', x: 0.68, y: 0.20, r: 4, bridge: true, theory: true },
    ],
    //   0 PennyLane  1 Qiskit  2 AWS Braket  3 PySCF  4 OpenFermion  5 mitiq
    //   6 CircuitKnitting  7 QuTiP  8 QAlgorithms  9 Grover  10 QPE  11 QAOA
    //  12 HybridAlg  13 VQE  14 VTE  15 ADAPT-VQE  16 HEA  17 QChem
    //  18 QCircOpt  19 OQS  20 QEC  21 Python  22 OpenQASM  23 QCrypto  24 QDots
    edges: [
      [0, 1], [1, 9], [1, 22],
      [8, 9], [8, 10], [8, 11],
      [12, 13], [12, 14], [12, 15], [12, 16], [12, 18],
      [13, 17], [14, 17], [15, 17],
      [17, 3], [17, 4], [3, 4],
      [18, 6],
      [19, 7],
      [20, 5],
      [21, 3], [21, 0],
      [22, 8],
    ],
  },
  /* ─── MATHEMATICAL FOUNDATIONS — below QM anchor ─── */
  {
    name: 'Mathematical Foundations',
    color: C_CYAN,
    skills: [
      { label: 'Linear Algebra', x: 0.50, y: 0.28, r: 4, theory: true },
      { label: 'Probability & Information Theory', x: 0.60, y: 0.30, r: 4, theory: true },
      /* anchor */
      { label: 'Quantum Mechanics', x: 0.56, y: 0.18, r: 10, bridge: true, anchor: true },
    ],
    edges: [
      [2, 0], [2, 1],
      [0, 1],
    ],
  },
  /* ─── CODE STREAM — bottom-center ─── */
  {
    name: 'Code Stream',
    color: C_ROSE,
    skills: [
      { label: 'Java', x: 0.42, y: 0.64, r: 4.5 },
      { label: 'Git', x: 0.34, y: 0.72, r: 4 },
      { label: 'GitHub', x: 0.38, y: 0.78, r: 3.5 },
      { label: 'SQL', x: 0.50, y: 0.74, r: 4 },
      { label: 'MySQL', x: 0.56, y: 0.80, r: 3.5 },
      { label: 'Django', x: 0.44, y: 0.84, r: 4 },
      { label: 'REST', x: 0.50, y: 0.88, r: 3.5 },
      { label: 'SOAP/XML', x: 0.46, y: 0.88, r: 3.5 },
      { label: 'Postman', x: 0.46, y: 0.94, r: 3 },
      { label: 'PL/SQL', x: 0.60, y: 0.86, r: 3 },
      { label: 'C/C++', x: 0.56, y: 0.62, r: 4 },
      { label: 'ARM Assembly', x: 0.62, y: 0.68, r: 3.5 },
      { label: 'HTML/CSS', x: 0.54, y: 0.80, r: 3.5 },
      { label: 'JavaScript', x: 0.60, y: 0.74, r: 3.5 },
      { label: 'MATLAB', x: 0.30, y: 0.66, r: 3.5 },
      { label: 'Jira', x: 0.58, y: 0.92, r: 3 },
      { label: 'Confluence', x: 0.64, y: 0.90, r: 3 },
      { label: 'Scrum', x: 0.62, y: 0.84, r: 3, theory: true },
      { label: 'Perforce', x: 0.30, y: 0.80, r: 3 },
      /* bridges */
      { label: 'Python', x: 0.36, y: 0.60, r: 6, bridge: true },
      { label: 'OpenQASM', x: 0.34, y: 0.16, r: 4, bridge: true },
      { label: 'Linux/Unix', x: 0.68, y: 0.58, r: 4, bridge: true },
      { label: 'Arduino', x: 0.74, y: 0.54, r: 4, bridge: true },
      { label: 'Quantum Cryptography', x: 0.42, y: 0.22, r: 4, bridge: true, theory: true },
      { label: 'Post-Quantum Cryptography', x: 0.46, y: 0.26, r: 3.5, bridge: true, theory: true },
    ],
    //  0 Java  1 Git  2 GitHub  3 SQL  4 MySQL  5 Django  6 REST  7 SOAP/XML
    //  8 Postman  9 PL/SQL  10 C/C++  11 ARM  12 HTML/CSS  13 JS  14 MATLAB
    // 15 Jira  16 Confluence  17 Scrum  18 Perforce
    // 19 Python  20 OpenQASM  21 Linux/Unix  22 Arduino  23 QCrypto  24 PostQCrypto
    edges: [
      [19, 0], [19, 1], [19, 14],
      [1, 2], [1, 18],
      [3, 4], [3, 9],
      [5, 6], [5, 7],
      [6, 8], [7, 8],
      [10, 11],
      [11, 20],
      [12, 13],
      [15, 16], [15, 17], [16, 17],
      [21, 10], [22, 10],
      [23, 24],
      [0, 3], [0, 5],
      [1, 0], [1, 10],           // Git → Java, Git → C/C++
      [12, 6], [12, 7],          // HTML/CSS → REST, HTML/CSS → SOAP/XML
    ],
  },
  /* ─── ELECTRONICS — lower-right ─── */
  {
    name: 'Electronics',
    color: C_GOLD,
    skills: [
      { label: 'Raspberry Pi', x: 0.80, y: 0.58, r: 3.5 },
      { label: 'Sensors', x: 0.84, y: 0.66, r: 3.5 },
      { label: 'NI Multisim', x: 0.88, y: 0.58, r: 3.5 },
      { label: 'Fritzing', x: 0.86, y: 0.72, r: 3 },
      /* bridges */
      { label: 'Arduino', x: 0.74, y: 0.54, r: 4, bridge: true },
      { label: 'Linux/Unix', x: 0.68, y: 0.58, r: 4, bridge: true },
    ],
    //  0 RPi  1 Sensors  2 NI Multisim  3 Fritzing  4 Arduino  5 Linux/Unix
    edges: [
      [4, 0], [4, 1],
      [0, 1],
      [2, 3],
      [3, 4],
      [5, 4],
    ],
  },
  /* ─── CLEANROOM & FABRICATION — upper-right ─── */
  {
    name: 'Cleanroom & Fabrication',
    color: C_VIOLET,
    skills: [
      { label: 'GaAs Fabrication', x: 0.78, y: 0.18, r: 4.5 },
      { label: 'RIE', x: 0.84, y: 0.10, r: 4 },
      { label: 'Profilometry', x: 0.86, y: 0.24, r: 3.5 },
      { label: 'Lattice Flip & Scribe', x: 0.82, y: 0.06, r: 3.5 },
      { label: 'Optical Microscopy', x: 0.90, y: 0.16, r: 3.5 },
      /* bridge */
      { label: 'Quantum Dots', x: 0.68, y: 0.20, r: 4, bridge: true, theory: true },
    ],
    //  0 GaAs  1 RIE  2 Profilometry  3 Lattice  4 Optical Microscopy  5 QDots
    edges: [
      [5, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [4, 2],
    ],
  },
]

/* ── Anchor node (Quantum Mechanics) — center of the map ── */
const ANCHOR = { label: 'Quantum Mechanics', x: 0.56, y: 0.18, r: 10 }

/* Anchor connects to these labels (drawn as cross-constellation lines) */
const ANCHOR_LINKS = [
  'Quantum Algorithms', 'Quantum Cryptography', 'Open Quantum Systems',
  'Quantum Dots', 'Linear Algebra', 'Probability & Information Theory',
]

/* ── Mobile fallback ── */
const SKILL_GROUPS = [
  {
    title: 'Quantum Array',
    cls: 'skill-chip--quantum',
    skills: [
      'PennyLane', 'Qiskit', 'AWS Braket', 'Quantum Algorithms',
      "Grover's Algorithm", 'QPE', 'QAOA', 'Hybrid Algorithms', 'VQE', 'VTE',
      'ADAPT-VQE', 'Hardware-Efficient Ansatz', 'Quantum Chemistry',
      'Quantum Circuit Optimization', 'Circuit Knitting', 'PySCF', 'OpenFermion',
      'Open Quantum Systems', 'QuTiP', 'Quantum Error Correction', 'mitiq',
    ],
  },
  {
    title: 'Mathematical Foundations',
    cls: 'skill-chip--quantum',
    skills: ['Quantum Mechanics', 'Linear Algebra', 'Probability & Information Theory'],
  },
  {
    title: 'Code Stream',
    cls: 'skill-chip--code',
    skills: [
      'Python', 'Java', 'C/C++', 'ARM Assembly', 'Git', 'GitHub', 'SQL', 'MySQL',
      'PL/SQL', 'Django', 'REST', 'SOAP/XML', 'Postman', 'Perforce', 'MATLAB',
      'HTML/CSS', 'JavaScript', 'OpenQASM', 'Linux/Unix', 'Jira', 'Confluence',
      'Scrum', 'Quantum Cryptography', 'Post-Quantum Cryptography',
    ],
  },
  {
    title: 'Electronics',
    cls: 'skill-chip--hardware',
    skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'NI Multisim', 'Fritzing'],
  },
  {
    title: 'Cleanroom & Fabrication',
    cls: 'skill-chip--cleanroom',
    skills: ['GaAs Fabrication', 'RIE', 'Profilometry', 'Lattice Flip & Scribe', 'Optical Microscopy', 'Quantum Dots'],
  },
]

/* ── Component ── */
export default function ConstellationMap() {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const [tooltip, setTooltip] = useState({ text: '', x: 0, y: 0, visible: false })
  const hoveredRef = useRef(null)
  const animProgress = useRef(0)
  const hasAnimated = useRef(false)
  const rippleRef = useRef(0)     // for anchor ripple
  const isAnimatingRef = useRef(false)

  // Build flat lookup: label → { x, y, r, colors[], theory, anchor }
  const starsRef = useRef(null)
  if (!starsRef.current) {
    const map = new Map()
    for (const c of CONSTELLATIONS) {
      for (const s of c.skills) {
        if (!map.has(s.label)) {
          map.set(s.label, { ...s, colors: [c.color] })
        } else {
          const existing = map.get(s.label)
          if (!existing.colors.includes(c.color)) existing.colors.push(c.color)
        }
      }
    }
    starsRef.current = map
  }

  // Pre-compute which labels connect to anchor
  const anchorConnectedSet = useRef(new Set(ANCHOR_LINKS))

  const draw = useCallback((ctx, w, h, progress, hovered, ripple) => {
    ctx.clearRect(0, 0, w, h)

    const anchorHovered = hovered === ANCHOR.label

    /* ── Pass 1: constellation edges ── */
    for (const constellation of CONSTELLATIONS) {
      const skills = constellation.skills
      for (const [a, b] of constellation.edges) {
        if (!skills[a] || !skills[b]) continue
        const sA = skills[a], sB = skills[b]
        const x1 = sA.x * w, y1 = sA.y * h
        const x2 = sB.x * w, y2 = sB.y * h
        const lineLen = Math.hypot(x2 - x1, y2 - y1)
        const drawLen = lineLen * Math.min(1, progress)
        const angle = Math.atan2(y2 - y1, x2 - x1)

        // Brighten if hovered node is one of the endpoints
        const isHighlighted = hovered && (sA.label === hovered || sB.label === hovered)
        const isAnchorHighlighted = anchorHovered &&
          (anchorConnectedSet.current.has(sA.label) || anchorConnectedSet.current.has(sB.label) ||
            sA.label === ANCHOR.label || sB.label === ANCHOR.label)

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x1 + Math.cos(angle) * drawLen, y1 + Math.sin(angle) * drawLen)
        ctx.strokeStyle = constellation.color
        ctx.globalAlpha = (isHighlighted || isAnchorHighlighted) ? 0.7 : 0.25
        ctx.lineWidth = (isHighlighted || isAnchorHighlighted) ? 2 : 1
        ctx.stroke()
        ctx.restore()
      }
    }

    /* ── Pass 2: anchor cross-constellation lines ── */
    if (progress > 0.3) {
      const ax = ANCHOR.x * w, ay = ANCHOR.y * h
      for (const label of ANCHOR_LINKS) {
        const target = starsRef.current.get(label)
        if (!target) continue
        const tx = target.x * w, ty = target.y * h
        const lineLen = Math.hypot(tx - ax, ty - ay)
        const drawLen = lineLen * Math.min(1, (progress - 0.3) / 0.7)
        const angle = Math.atan2(ty - ay, tx - ax)

        const isHighlighted = anchorHovered || hovered === label

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(ax + Math.cos(angle) * drawLen, ay + Math.sin(angle) * drawLen)
        ctx.strokeStyle = C_WHITE
        ctx.globalAlpha = isHighlighted ? 0.6 : 0.15
        ctx.lineWidth = isHighlighted ? 2 : 1
        ctx.setLineDash([6, 4])
        ctx.stroke()
        ctx.restore()
      }
    }

    /* ── Pass 3: constellation labels ── */
    if (progress > 0.4) {
      const labelAlpha = Math.min(1, (progress - 0.4) * 2.5) * 0.5
      for (const constellation of CONSTELLATIONS) {
        const skills = constellation.skills.filter(s => !s.bridge)
        if (skills.length === 0) continue
        const avgX = skills.reduce((s, sk) => s + sk.x, 0) / skills.length * w
        const minY = Math.min(...skills.map(sk => sk.y)) * h
        ctx.save()
        ctx.font = '700 13px "Exo 2", sans-serif'
        ctx.fillStyle = constellation.color
        ctx.globalAlpha = labelAlpha
        ctx.textAlign = 'center'
        ctx.fillText(constellation.name.toUpperCase(), avgX, minY - 18)
        ctx.restore()
      }
    }

    /* ── Pass 4: stars ── */
    for (const constellation of CONSTELLATIONS) {
      for (const skill of constellation.skills) {
        const sx = skill.x * w
        const sy = skill.y * h
        const starData = starsRef.current.get(skill.label)
        const isAnchor = skill.anchor
        const isBridge = starData.colors.length > 1
        const isHovered = hovered === skill.label
        const isAnchorLinked = anchorHovered && anchorConnectedSet.current.has(skill.label)

        // Skip bridge duplicates (draw only the first occurrence)
        if (skill.bridge && constellation !== CONSTELLATIONS.find(c => c.skills.some(s => s.label === skill.label))) continue

        /* Anchor node — special rendering */
        if (isAnchor) {
          const baseR = skill.r * Math.min(1, progress * 1.5)

          // Multi-layer glow
          for (let i = 3; i >= 0; i--) {
            ctx.save()
            const glowR = baseR * (3 + i * 2)
            const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR)
            grad.addColorStop(0, C_WHITE)
            grad.addColorStop(0.3, C_CYAN)
            grad.addColorStop(1, 'transparent')
            ctx.fillStyle = grad
            ctx.globalAlpha = (isHovered ? 0.18 : 0.08) * Math.min(1, progress * 2)
            ctx.beginPath()
            ctx.arc(sx, sy, glowR, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
          }

          // Ripple on hover
          if (anchorHovered && ripple > 0) {
            ctx.save()
            const rippleR = baseR + ripple * 80
            ctx.beginPath()
            ctx.arc(sx, sy, rippleR, 0, Math.PI * 2)
            ctx.strokeStyle = C_CYAN
            ctx.lineWidth = 1.5
            ctx.globalAlpha = Math.max(0, 0.4 * (1 - ripple))
            ctx.stroke()
            ctx.restore()
          }

          // Solid bright core
          ctx.save()
          ctx.beginPath()
          ctx.arc(sx, sy, baseR, 0, Math.PI * 2)
          ctx.fillStyle = C_WHITE
          ctx.globalAlpha = Math.min(1, progress * 2)
          ctx.fill()
          ctx.restore()

          // Inner color ring
          ctx.save()
          ctx.beginPath()
          ctx.arc(sx, sy, baseR * 0.6, 0, Math.PI * 2)
          ctx.fillStyle = C_CYAN
          ctx.globalAlpha = 0.5 * Math.min(1, progress * 2)
          ctx.fill()
          ctx.restore()

          // Label
          if (progress > 0.6) {
            ctx.save()
            ctx.font = 'bold 12px "Share Tech Mono", monospace'
            ctx.fillStyle = C_WHITE
            ctx.globalAlpha = Math.min(0.9, (progress - 0.6) * 3)
            ctx.textAlign = 'center'
            ctx.fillText(skill.label, sx, sy + baseR + 18)
            ctx.restore()
          }
          continue
        }

        /* Regular star glow */
        const glowColor = isBridge ? C_WHITE : constellation.color
        ctx.save()
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, skill.r * 5)
        grad.addColorStop(0, glowColor)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.globalAlpha = ((isHovered || isAnchorLinked) ? 0.4 : 0.18) * Math.min(1, progress * 2)
        ctx.beginPath()
        ctx.arc(sx, sy, skill.r * 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        /* Star dot */
        const dotR = skill.r * Math.min(1, progress * 1.5)
        const starColor = isBridge ? C_WHITE : constellation.color
        ctx.save()
        ctx.beginPath()
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2)
        ctx.globalAlpha = Math.min(1, progress * 2) * ((isHovered || isAnchorLinked) ? 1 : 0.9)
        if (skill.theory) {
          ctx.strokeStyle = starColor
          ctx.lineWidth = 1.8
          ctx.stroke()
        } else {
          ctx.fillStyle = starColor
          ctx.fill()
        }
        ctx.restore()

        /* Label */
        if (progress > 0.6) {
          ctx.save()
          ctx.font = '11px "Share Tech Mono", monospace'
          ctx.fillStyle = (isHovered || isAnchorLinked) ? '#ffffff' : '#e8e8f0'
          ctx.globalAlpha = Math.min((isHovered || isAnchorLinked) ? 1 : 0.7, (progress - 0.6) * 3)
          ctx.textAlign = 'left'
          ctx.fillText(skill.label, sx + skill.r + 8, sy + 4)
          ctx.restore()
        }
      }
    }
  }, [])

  /* ── Animation loop ── */
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
      draw(ctx, rect.width, rect.height, animProgress.current, hoveredRef.current, rippleRef.current)
    }

    function animate() {
      if (!running) return
      const needsAnim = animProgress.current < 1 || hoveredRef.current === ANCHOR.label
      if (animProgress.current < 1) {
        animProgress.current = Math.min(1, animProgress.current + 0.012)
      }
      // Ripple cycle when anchor is hovered
      if (hoveredRef.current === ANCHOR.label) {
        rippleRef.current = (rippleRef.current + 0.008) % 1
      } else {
        rippleRef.current = 0
      }
      const rect = wrap.getBoundingClientRect()
      draw(ctx, rect.width, rect.height, animProgress.current, hoveredRef.current, rippleRef.current)
      if (needsAnim) {
        animId = requestAnimationFrame(animate)
      } else {
        isAnimatingRef.current = false
      }
    }

    function startAnimLoop() {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true
        animate()
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        startAnimLoop()
      }
    }, { threshold: 0.15 })

    resize()
    draw(ctx, wrap.getBoundingClientRect().width, wrap.getBoundingClientRect().height, 0, null, 0)
    observer.observe(wrap)
    window.addEventListener('resize', resize)

    // Expose startAnimLoop so hover can restart it
    canvas.__startAnimLoop = startAnimLoop

    return () => {
      running = false
      cancelAnimationFrame(animId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [draw])

  /* ── Hover detection ── */
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const rect = wrap.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    let found = null
    // Check anchor first
    const adx = mx - ANCHOR.x * rect.width
    const ady = my - ANCHOR.y * rect.height
    if (Math.hypot(adx, ady) < 25) {
      found = { label: ANCHOR.label, x: ANCHOR.x * rect.width, y: ANCHOR.y * rect.height }
    }

    if (!found) {
      for (const c of CONSTELLATIONS) {
        for (const s of c.skills) {
          if (s.anchor) continue
          const sx = s.x * rect.width
          const sy = s.y * rect.height
          if (Math.hypot(mx - sx, my - sy) < 20) {
            found = { label: s.label, x: sx, y: sy }
            break
          }
        }
        if (found) break
      }
    }

    const prevHovered = hoveredRef.current
    if (found) {
      hoveredRef.current = found.label
      setTooltip({ text: found.label, x: found.x, y: found.y, visible: true })
    } else {
      hoveredRef.current = null
      setTooltip(prev => prev.visible ? { ...prev, visible: false } : prev)
    }

    // Redraw on hover change, and start anim loop for anchor ripple
    if (prevHovered !== hoveredRef.current) {
      if (hoveredRef.current === ANCHOR.label) {
        canvas.__startAnimLoop?.()
      } else {
        // Single redraw for non-anchor hover
        const ctx = canvas.getContext('2d')
        draw(ctx, rect.width, rect.height, animProgress.current, hoveredRef.current, rippleRef.current)
      }
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
          onMouseLeave={() => {
            hoveredRef.current = null
            setTooltip(prev => ({ ...prev, visible: false }))
            const canvas = canvasRef.current
            const wrap = wrapRef.current
            if (canvas && wrap) {
              const ctx = canvas.getContext('2d')
              const rect = wrap.getBoundingClientRect()
              draw(ctx, rect.width, rect.height, animProgress.current, null, 0)
            }
          }}
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
