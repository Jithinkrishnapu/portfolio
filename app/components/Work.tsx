'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  problem?: string
  solution?: string
  tag: string
  metric?: string
  image?: string
  icon?: React.ReactNode
}

const fallbackProjects: Project[] = [
  {
    id: 'tyreselect',
    title: 'TyreSelect POS',
    problem: 'Fragmented inventory and manual retail tracking.',
    solution: 'Cloud-based automation for multi-outlet retail operations.',
    tag: 'RETAIL AUTOMATION',
    metric: '40% Efficiency ↑',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white/20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    id: 'enterprise-crm',
    title: 'Enterprise CRM',
    problem: 'Inefficient lead pipeline and customer data silos.',
    solution: 'Bespoke management hub with AI lead scoring.',
    tag: 'CUSTOMER MGMT',
    metric: '25% Conversion ↑',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white/20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: 'erp-platform',
    title: 'ERP Platform',
    problem: 'Disjointed business units and operational lag.',
    solution: 'Unified ERP core for seamless resource planning.',
    tag: 'BUSINESS OPS',
    metric: '100% Visibility',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white/20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75L6.429 9.75 12 13.75l5.571-4L12 5.75zm0 8l-5.571 4L12 21.75l5.571-4-5.571-4z" />
      </svg>
    ),
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasDesc = !!(project.problem || project.solution)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group flex flex-col justify-between ${hasDesc ? 'h-full' : 'h-fit'}`}
    >
      <div className={`glass-card rounded-xl overflow-hidden border border-white/5 group-hover:border-[#a9fc03]/40 transition-all duration-300 flex flex-col ${hasDesc ? 'h-full' : 'h-fit'}`}>
        {/* Media Top Container */}
        <div className="relative overflow-hidden bg-white/5 flex items-center justify-center border-b border-white/5 aspect-video">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-[#333539]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              {project.icon}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-8 flex flex-col justify-between ${hasDesc ? 'flex-1' : ''}`}>
          <div>
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#a9fc03] transition-colors">
              {project.title}
            </h3>

            {/* Problem & Solution representation */}
            {hasDesc && (
              <div className="space-y-4 mb-8 text-sm">
                {project.problem && (
                  <div>
                    <p className="text-[10px] font-bold text-[#a9fc03] tracking-wider opacity-60 mb-1">PROBLEM</p>
                    <p className="text-white leading-relaxed">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <p className="text-[10px] font-bold text-[#a9fc03] tracking-wider opacity-60 mb-1">SOLUTION</p>
                    <p className="text-[#c1caad] leading-relaxed">{project.solution}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Metadata Badges */}
          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold tracking-widest text-[#c1caad]">
            <span className="uppercase">{project.tag}</span>
            {project.metric && (
              <span className="text-[#a9fc03] font-extrabold">{project.metric}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/getNotionData')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: any[]) => {
        if (data?.length > 0) {
          const mapped: Project[] = data.map((item, i) => {
            const properties = item.properties || {}
            
            // Map title
            const title =
              properties.title?.rich_text?.[0]?.plain_text ||
              properties.Name?.title?.[0]?.plain_text ||
              'Project'
              
            // Map details / description / problem / solution
            const rawDesc =
              properties.details?.rich_text?.[0]?.plain_text ||
              properties.description?.rich_text?.[0]?.plain_text ||
              ''
              
            // Try to split problem/solution if there is a delimiter, or fallback
            let problem = rawDesc
            let solution = ''
            if (rawDesc.includes('Solution:')) {
              const parts = rawDesc.split('Solution:')
              problem = parts[0].replace('Problem:', '').trim()
              solution = parts[1].trim()
            } else if (rawDesc.includes('|')) {
              const parts = rawDesc.split('|')
              problem = parts[0].trim()
              solution = parts[1].trim()
            }

            const tag = properties.Tag?.select?.name || properties.Category?.select?.name || 'SOFTWARE DEVELOPMENT'
            const metric = properties.Metric?.rich_text?.[0]?.plain_text || properties.Result?.rich_text?.[0]?.plain_text || undefined
            const image = properties.imageSrc?.url || properties.Image?.url || undefined

            return {
              id: item.id || String(i),
              title,
              problem: problem || undefined,
              solution: solution || undefined,
              tag,
              metric,
              image,
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white/20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              ),
            }
          })
          
          // Sort projects: put Karepe, Boon AI, or projects without descriptions, at the end
          const sorted = [...mapped].sort((a, b) => {
            const aTitle = a.title.toLowerCase()
            const bTitle = b.title.toLowerCase()
            const aHasDesc = a.problem && a.problem.trim().length > 0
            const bHasDesc = b.problem && b.problem.trim().length > 0
            const aIsLast = aTitle.includes('karepe') || aTitle.includes('boon') || !aHasDesc
            const bIsLast = bTitle.includes('karepe') || bTitle.includes('boon') || !bHasDesc
            
            if (aIsLast && !bIsLast) return 1
            if (!aIsLast && bIsLast) return -1
            return 0
          })

          setProjects(sorted)
        } else {
          setProjects(fallbackProjects)
        }
      })
      .catch(() => {
        setProjects(fallbackProjects)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="work" className="py-24 bg-[#0c0e12]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-left" ref={ref}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold text-xs tracking-widest text-[#a9fc03] uppercase mb-4 block"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Strategic Impact
          </motion.h2>
        </div>

        {/* Dynamic Project List Loader */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#a9fc03] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
        
      </div>
    </section>
  )
}
