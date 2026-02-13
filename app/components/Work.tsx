'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'

interface Project {
  id: string
  title: string
  description: string
  image: string
  playstore?: string
  appstore?: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#222] hover:border-accent/50 transition-all duration-300">
        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-dark/20 flex items-center justify-center">
              <span className="text-4xl">{project.title[0]}</span>
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">{project.title}</h3>
              <p className="text-[#888] text-xs mt-1 line-clamp-1">{project.description}</p>
            </div>
            <div className="flex gap-2">
              {project.playstore && (
                <a
                  href={project.playstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faGooglePlay} className="w-4 h-4 text-black" />
                </a>
              )}
              {project.appstore && (
                <a
                  href={project.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faAppStore} className="w-4 h-4 text-black" />
                </a>
              )}
            </div>
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
      .then(res => res.ok ? res.json() : Promise.reject())
      .then((data: any[]) => {
        if (data?.length > 0) {
          const mapped: Project[] = data.map((item, i) => ({
            id: item.id || String(i),
            title: item.properties?.title?.rich_text?.[0]?.plain_text || 
                   item.properties?.Name?.title?.[0]?.plain_text || 
                   'Project',
            description: item.properties?.details?.rich_text?.[0]?.plain_text ||
                        item.properties?.description?.rich_text?.[0]?.plain_text || 
                        'A project built with modern technologies.',
            image: item.properties?.imageSrc?.url || '',
            playstore: item.properties?.playStore?.url || undefined,
            appstore: item.properties?.appStore?.url || undefined,
          }))
          setProjects(mapped)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent mb-12" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold">products & projects</h2>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-[#888] py-12">No projects found</p>
        )}
      </div>
    </section>
  )
}
