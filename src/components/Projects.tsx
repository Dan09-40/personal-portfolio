import { GitBranch, ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI-Driven Job Search & Recruitment Web Portal',
    description:
      'A smart web platform powered by AI that connects job seekers with employers. Features intelligent job matching, resume parsing, automated screening, and real-time application tracking for a modern recruitment experience.',
    tags: ['React', 'TypeScript', 'Node.js', 'REST API', 'AI/ML', 'Tailwind CSS'],
    image: '/projects/ai-job-search-v2.jpg?t=final' as string | null,
    imageAlt: 'AI Job Search & Recruitment Portal',
    gradient: 'from-blue-700/30 to-indigo-700/30',
    icon: '🤖',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dan09-40',
  },
  {
    id: 2,
    title: 'Sunday Market',
    description:
      'A cross-platform mobile e-commerce application built with React Native and Expo for fast local shopping and delivery. Connects buyers with local vendors, featuring real-time order tracking, digital cart management, and seamless mobile checkout.',
    tags: ['React Native', 'Expo', 'Mobile App', 'Node.js', 'MongoDB', 'REST API'],
    image: '/projects/sunday-market.jpg' as string | null,
    imageAlt: 'Sunday Market Mobile App',
    gradient: 'from-orange-600/30 to-amber-700/30',
    icon: '📱',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dan09-40',
  },
  {
    id: 3,
    title: 'Addis Cake & Delivery System',
    description:
      'A full-stack cake ordering and delivery web app for Addis Ababa. Users can browse handcrafted cakes, place custom orders, and get them delivered with care — built with a modern and beautiful UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'REST API'],
    image: '/projects/addis-cake.jpg' as string | null,
    imageAlt: 'Addis Cake & Delivery',
    gradient: 'from-pink-700/30 to-rose-700/30',
    icon: '🎂',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dan09-40',
  },
  {
    id: 4,
    title: 'Addis Song App (Music Catalog & Analytics)',
    description:
      'A full-stack MERN music catalog application enabling clients to create, update, and delete songs with a real-time statistics & analytics dashboard. Utilizes ExpressJS, MongoDB, and Mongoose packaged with Docker on the backend; and React, TypeScript, Redux Toolkit, Redux-Saga, and Emotion / Styled System on the frontend.',
    tags: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Redux-Saga',
      'Emotion',
      'Node.js',
      'ExpressJS',
      'MongoDB',
      'Mongoose',
      'Docker',
      'REST API',
    ],
    image: '/projects/addis-song.jpg' as string | null,
    imageAlt: 'Addis Music Hub',
    gradient: 'from-purple-700/30 to-violet-700/30',
    icon: '🎵',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dan09-40',
  },
]

type Project = typeof projects[0]

function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-10 items-center`}
    >
      {/* Image / preview */}
      <div className="w-full lg:w-1/2">
        <div
          className={`relative rounded-2xl overflow-hidden border border-[#1f2937] bg-gradient-to-br ${project.gradient} h-64 md:h-80 group`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center select-none">
                <div className="text-8xl mb-3 drop-shadow-lg">{project.icon}</div>
                <p className="text-gray-500 text-sm font-medium">{project.imageAlt}</p>
              </div>
            </div>
          )}
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        {/* Project number */}
        <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">
          Project 0{project.id}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 text-sm"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#2d3748] hover:border-blue-500/50 text-gray-300 hover:text-white px-6 py-2.5 rounded-full transition-all duration-200 text-sm hover:bg-blue-500/5"
          >
            <GitBranch size={15} /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of my recent work — from AI-powered web portals to mobile music and
            delivery apps.
          </p>
        </div>

        {/* Projects list */}
        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
