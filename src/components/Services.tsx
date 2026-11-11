import { Monitor, Smartphone, Database, Globe, Layers, Zap } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description:
      'Building fast, responsive, and modern web applications using React, Next.js, and TypeScript with clean, maintainable code.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Creating cross-platform mobile apps with React Native and Expo that run smoothly on both iOS and Android.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    tags: ['React Native', 'Expo', 'iOS & Android'],
  },
  {
    icon: Database,
    title: 'Backend & API',
    description:
      'Designing and building robust REST APIs and server-side logic with Node.js, Express, and MongoDB or PostgreSQL.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: Globe,
    title: 'Full-Stack Solutions',
    description:
      'End-to-end product development — from database design and backend logic to polished frontend and deployment.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    tags: ['Full-Stack', 'MERN', 'Deployment'],
  },
  {
    icon: Layers,
    title: 'UI/UX Design & Integration',
    description:
      'Turning wireframes and designs into pixel-perfect, animated interfaces with great user experience.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
    tags: ['Tailwind CSS', 'Figma', 'Animations'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improving load times, SEO scores, and Core Web Vitals for existing web applications.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    tags: ['SEO', 'Core Web Vitals', 'Optimization'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Services</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            I offer a range of development services to help bring your ideas to life — from web apps
            to mobile solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`bg-[#111827] border ${service.border} rounded-2xl p-7 card-hover group relative overflow-hidden`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Subtle glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${
                      service.color.includes('blue') ? 'rgba(59,130,246,0.06)' :
                      service.color.includes('purple') ? 'rgba(139,92,246,0.06)' :
                      service.color.includes('green') ? 'rgba(34,197,94,0.06)' :
                      service.color.includes('cyan') ? 'rgba(34,211,238,0.06)' :
                      service.color.includes('pink') ? 'rgba(236,72,153,0.06)' :
                      'rgba(234,179,8,0.06)'
                    }, transparent 70%)`,
                  }}
                />

                <div
                  className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className={service.color} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 border border-[#2d3748] rounded-full px-2.5 py-0.5 bg-[#0a0f1e]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

