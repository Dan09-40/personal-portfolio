import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const hideTimer = setTimeout(() => setVisible(false), 2300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a0f1e] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo animation */}
        <div className="text-5xl font-black gradient-text mb-6 tracking-tight animate-pulse">
          D.A.
        </div>
        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-[#1f2937] rounded-full overflow-hidden mx-auto">
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              animation: 'loadingBar 1.8s ease-in-out forwards',
            }}
          />
        </div>
        <style>{`
          @keyframes loadingBar {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  )
}

