import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let scrollY = 0

    const stars = []
    const STAR_COUNT = 220

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initStars() {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.6 + 0.3,
          baseAlpha: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.08,
          driftY: (Math.random() - 0.5) * 0.04,
          depth: Math.random() * 0.5 + 0.5, // parallax depth
        })
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const s of stars) {
        const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset)
        const alpha = s.baseAlpha + twinkle * 0.25
        const parallaxOffset = scrollY * (1 - s.depth) * 0.15

        const px = s.x + s.driftX
        const py = s.y + s.driftY + parallaxOffset

        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, Math.min(1, alpha))})`
        ctx.fill()

        // Glow for larger stars
        if (s.r > 1.2) {
          ctx.beginPath()
          ctx.arc(px, py, s.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(232, 213, 163, ${alpha * 0.08})`
          ctx.fill()
        }

        // Drift
        s.x += s.driftX
        s.y += s.driftY
        if (s.x < -5) s.x = canvas.width + 5
        if (s.x > canvas.width + 5) s.x = -5
        if (s.y < -5) s.y = canvas.height + 5
        if (s.y > canvas.height + 5) s.y = -5
      }

      animId = requestAnimationFrame(draw)
    }

    function onScroll() {
      scrollY = window.scrollY
    }

    resize()
    initStars()
    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />
      <div className="nebula-overlay" aria-hidden="true">
        <div className="nebula-blob nebula-blob--rose" />
        <div className="nebula-blob nebula-blob--indigo" />
        <div className="nebula-blob nebula-blob--cyan" />
      </div>
    </>
  )
}
