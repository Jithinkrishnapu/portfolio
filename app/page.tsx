'use client'

import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import AskAI from './components/AskAI'

const Scene3D = dynamic(() => import('./components/Scene3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black -z-10" />,
})

export default function Home() {
  return (
    <main className="relative">
      <Scene3D />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <AskAI />
    </main>
  )
}
