import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// Font Awesome config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jithinkrishna.com'),
  title: {
    default: 'Jithin Krishna | Tech Founder & Co-Founder at Codenzic Innovations',
    template: '%s | Jithin Krishna',
  },
  description: 'Tech founder building scalable SaaS and business automation systems. Co-Founder of Codenzic Innovations and former founding member at Mykare.',
  keywords: [
    'tech founder', 'startup founder', 'SaaS founder', 'Codenzic Innovations',
    'business automation', 'CRM systems', 'enterprise software', 'product leadership',
    'software architecture', 'tech entrepreneur', 'startup co-founder',
    'scalable systems', 'business solutions', 'technology strategy',
  ],
  authors: [{ name: 'Jithin Krishna', url: 'https://jithinkrishna.com' }],
  creator: 'Jithin Krishna',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jithinkrishna.com',
    siteName: 'Jithin Krishna - Tech Founder',
    title: 'Jithin Krishna | Tech Founder & Co-Founder at Codenzic Innovations',
    description: 'Tech founder building scalable SaaS and business automation systems. Co-Founder of Codenzic Innovations.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jithin Krishna Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jithin Krishna | Tech Founder & Co-Founder at Codenzic Innovations',
    description: 'Tech founder building scalable SaaS and business automation systems.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jithin Krishna',
  url: 'https://jithinkrishna.com',
  image: 'https://jithinkrishna.com/avatar.png',
  jobTitle: 'Tech Founder',
  worksFor: { '@type': 'Organization', name: 'Codenzic Innovations' },
  alumniOf: { '@type': 'Organization', name: 'Mykare Health' },
  email: 'jithin@codenzic.com',
  telephone: '+919048512163',
  address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'Kerala', addressCountry: 'India' },
  sameAs: ['https://github.com/Jithinkrishnapu', 'https://www.linkedin.com/in/jithin-krishna-078680177/'],
  knowsAbout: ['Product Strategy', 'SaaS Development', 'Business Automation', 'System Architecture', 'Enterprise Software'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased noise">{children}</body>
    </html>
  )
}
