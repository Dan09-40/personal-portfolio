import { ArrowRight, Download, Code2, Palette, Layers, Smartphone } from 'lucide-react'
import { useTypingEffect } from '../hooks/useAnimations'

export default function Hero() {
  const typedRole = useTypingEffect()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating icons - left */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10">
        <div className="float-icon text-blue-400/50 bg-blue-400/5 p-3 rounded-xl border border-blue-400/10">
          <Code2 size={22} />
        </div>
        <div className="float-icon-delay text-purple-400/50 bg-purple-400/5 p-3 rounded-xl border border-purple-400/10">
          <Smartphone size={22} />
        </div>
      </div>

      {/* Floating icons - right */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10">
        <div className="float-icon text-green-400/50 bg-green-400/5 p-3 rounded-xl border border-green-400/10">
          <Layers size={22} />
        </div>
        <div className="float-icon-delay text-pink-400/50 bg-pink-400/5 p-3 rounded-xl border border-pink-400/10">
          <Palette size={22} />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center max-w-3xl mx-auto fade-in-up z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-[#111827]/80 border border-green-500/20 rounded-full px-4 py-2 mb-10">
          <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 inline-block"></span>
          <span className="text-sm text-gray-300">Available for new projects</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight tracking-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Daniel Asebe</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            {typedRole}
            <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse align-middle" />
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          I build beautiful, scalable, and performant web and mobile applications.
          Specializing in <span className="text-blue-400 font-medium">React</span>,{' '}
          <span className="text-purple-400 font-medium">Node.js</span>,{' '}
          <span className="text-green-400 font-medium">React Native</span>, and TypeScript
          to craft modern digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30"
          >
            View Projects <ArrowRight size={18} />
          </button>
          <button className="flex items-center justify-center gap-2 border border-[#2d3748] hover:border-blue-500/50 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-blue-500/5">
            Download Resume <Download size={18} />
          </button>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {[
            'React',
            'Next.js',
            'Node.js',
            'React Native',
            'TypeScript',
            'Redux Toolkit',
            'Docker',
            'MongoDB',
          ].map(tech => (
            <span
              key={tech}
              className="text-xs text-gray-500 border border-[#1f2937] rounded-full px-3 py-1 bg-[#111827]/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-600 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
          <div className="scroll-dot w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
