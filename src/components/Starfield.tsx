import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type Estrela = { x: number; y: number; r: number; fase: number; velocidade: number; profundidade: number }

// Substitui o setInterval + divs do portfólio antigo por um único canvas:
// muito mais leve e com parallax suave no scroll.
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduzir = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let estrelas: Estrela[] = []
    let frame = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const criar = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const total = Math.round((window.innerWidth * window.innerHeight) / 5000)
      estrelas = Array.from({ length: total }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.3 + 0.3,
        fase: Math.random() * Math.PI * 2,
        velocidade: Math.random() * 0.02 + 0.005,
        profundidade: Math.random() * 0.3 + 0.05,
      }))
    }

    const desenhar = () => {
      const h = window.innerHeight
      const scroll = window.scrollY
      ctx.clearRect(0, 0, window.innerWidth, h)
      for (const e of estrelas) {
        if (!reduzir) e.fase += e.velocidade
        const brilho = 0.45 + Math.sin(e.fase) * 0.35
        const y = (((e.y - scroll * e.profundidade) % h) + h) % h
        ctx.beginPath()
        ctx.arc(e.x, y, e.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 233, 255, ${brilho})`
        ctx.fill()
      }
      frame = requestAnimationFrame(desenhar)
    }

    criar()
    desenhar()
    window.addEventListener('resize', criar)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', criar)
    }
  }, [reduzir])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}
