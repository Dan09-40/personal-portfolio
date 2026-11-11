import { Monitor, Smartphone, Database, Code2, Star, Coffee } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const specialties = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'React.js, Next.js, TypeScript',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Expo',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Express, REST APIs',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: Code2,
    title: 'Full-Stack',
    description: 'MongoDB, PostgreSQL, Firebase',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
]

const stats = [
  { label: 'Year Experience', value: 1, suffix: '+', icon: Star },
  { label: 'Projects Completed', value: 4, suffix: '+', icon: Code2 },
  { label: 'Cups of Coffee', value: 300, suffix: '+', icon: Coffee },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = Math.ceil(target / 40)
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 40)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-3xl font-black gradient-text">
      {count}{suffix}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d1527]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3 block">Who I am</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left card - bio */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-8 card-hover">
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/30">
                  DA
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#111827] pulse-dot"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Daniel Asebe</h3>
                <p className="text-blue-400 text-sm font-medium">Fullstack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">
              I am a passionate <span className="text-blue-400 font-medium">Fullstack Developer</span> with{' '}
              <span className="text-blue-400 font-medium">1+ year of hands-on experience</span> building modern, responsive, and scalable web and mobile applications. I specialize in crafting intuitive user interfaces and robust backend architectures.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Having completed 4 featured projects — spanning AI-driven web platforms, mobile e-commerce with React Native, and full-stack delivery & music apps — I thrive on turning complex problems into elegant, real-world digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1f2937]">
              {stats.map(stat => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <div className="text-gray-500 text-xs mt-1 leading-tight">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right side - specialty cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialties.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`bg-[#111827] border ${item.border} rounded-2xl p-6 card-hover group`}
                >
                  <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={22} className={item.color} />
                  </div>
                  <h4 className="text-white font-bold mb-1.5">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
