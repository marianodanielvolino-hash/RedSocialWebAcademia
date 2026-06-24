import { useEffect, useRef } from 'react'

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      r: number
      c: string
    }> = []

    const colors = ['#ED1686', '#FF9E19', '#F7F1E7', '#ED1686', '#FF9E19']

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = Math.max(rect.width, 1)
      h = Math.max(rect.height, 1)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const N = Math.max(26, Math.min(56, Math.round((w * h) / 15000)))
      nodes = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.8 + 1.1,
        c: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    let animationFrameId: number

    const loop = () => {
      ctx.clearRect(0, 0, w, h)

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 128) {
            ctx.globalAlpha = (1 - d / 128) * 0.22
            ctx.strokeStyle = '#ED1686'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Move & draw nodes
      ctx.globalAlpha = 1
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1

        ctx.globalAlpha = 0.92
        ctx.fillStyle = n.c
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
