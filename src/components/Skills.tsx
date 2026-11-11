import { Monitor, Layers, Database, Terminal, Smartphone, GitBranch } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    color: 'text-blue-400',
    barColor: 'from-blue-500 to-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    icon: Layers,
    title: 'UI Frameworks & Styling',
    color: 'text-purple-400',
    barColor: 'from-purple-500 to-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    skills: [
      { name: 'Tailwind CSS', level: 93 },
      { name: 'Emotion & Styled System', level: 86 },
      { name: 'CSS Animations', level: 85 },
      { name: 'Styled Components', level: 82 },
      { name: 'Framer Motion', level: 78 },
      { name: 'SASS/SCSS', level: 80 },
    ],
  },
  {
    icon: Database,
    title: 'Backend & Database',
    color: 'text-green-400',
    barColor: 'from-green-500 to-emerald-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'MongoDB', level: 85 },
      { name: 'Mongoose', level: 87 },
      { name: 'REST APIs', level: 90 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    color: 'text-orange-400',
    barColor: 'from-orange-500 to-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Expo', level: 82 },
      { name: 'React Navigation', level: 80 },
      { name: 'AsyncStorage', level: 78 },
      { name: 'Push Notifications', level: 70 },
      { name: 'App Deployment', level: 75 },
    ],
  },
  {
    icon: GitBranch,
    title: 'State & Data Management',
    color: 'text-cyan-400',
    barColor: 'from-cyan-500 to-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    skills: [
      { name: 'Redux Toolkit', level: 90 },
      { name: 'Redux-Saga', level: 85 },
      { name: 'Context API', level: 90 },
      { name: 'React Query', level: 82 },
      { name: 'Axios', level: 88 },
      { name: 'Zustand', level: 78 },
    ],
  },
  {
    icon: Terminal,
    title: 'Tools & Workflow',
    color: 'text-yellow-400',
    barColor: 'from-yellow-500 to-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    skills: [
      { name: 'Docker', level: 84 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'npm/yarn', level: 90 },
      { name: 'Vite', level: 88 },
      { name: 'Postman', level: 88 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

type Category = typeof skillCategories[0]

function SkillCard({ category }: { category: Category }) {
  const Icon = category.icon
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`bg-[#111827] border ${category.border} rounded-2xl p-7 card-hover`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 ${category.bg} rounded-xl flex items-center justify-center`}>
          <Icon size={20} className={category.color} />
        </div>
        <h3 className="text-white font-bold text-lg">{category.title}</h3>
      </div>

      {/* Skills with bars */}
      <div className="flex flex-col gap-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-gray-400 text-sm">{skill.name}</span>
              <span className={`text-xs font-semibold ${category.color}`}>{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-[#1f2937] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${category.barColor} transition-all duration-1000 ease-out`}
                style={{
                  width: animated ? `${skill.level}%` : '0%',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d1527]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3 block">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I use to build digital solutions.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map(category => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
