import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['About', 'Services', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = navLinks.map(l => l.toLowerCase())
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#1f2937]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl font-black gradient-text cursor-pointer tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          D.A.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.toLowerCase()
            return (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </button>
            )
          })}

          {/* Hire Me button */}
          <button
            onClick={() => scrollToSection('Contact')}
            className="text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1527]/95 backdrop-blur-md border-t border-[#1f2937] mobile-menu-enter">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => {
              const isActive = activeSection === link.toLowerCase()
              return (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`text-left py-3 px-3 rounded-xl border-b border-[#1f2937] transition-colors font-medium text-sm ${
                    isActive
                      ? 'text-blue-400 bg-blue-400/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link}
                </button>
              )
            })}
            <button
              onClick={() => scrollToSection('Contact')}
              className="mt-3 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-full transition-all duration-200 text-center"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
