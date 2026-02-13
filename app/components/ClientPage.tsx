'use client'

import dynamic from 'next/dynamic'
import Hero from './Hero'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'
import AskAI from './AskAI'

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black -z-10" />,
})

export default function ClientPage() {
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
