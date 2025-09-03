'use client'

import { useEffect, useRef } from 'react'

export const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight

    const colors = ['#FF6B6B', '#F7B801', '#6BCB77', '#4D96FF']
    const blobs: { x: number, y: number, radius: number, color: string, dx: number, dy: number }[] = []

    for (let i = 0; i < 10; i++) {
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)
      blobs.forEach(blob => {
        blob.x += blob.dx
        blob.y += blob.dy

        if (blob.x + blob.radius > width || blob.x - blob.radius < 0) blob.dx *= -1
        if (blob.y + blob.radius > height || blob.y - blob.radius < 0) blob.dy *= -1

        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fillStyle = blob.color
        ctx.fill()
        ctx.closePath()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-10" />
}
