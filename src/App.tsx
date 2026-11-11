import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'

function useScrollReveal() {
  useEffect(() => {
    // Small delay so elements are in DOM
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
      elements.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [])
}

function App() {
  useScrollReveal()

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-[#0a0f1e]">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <BackToTop />
      </div>
    </>
  )
}

export default App
