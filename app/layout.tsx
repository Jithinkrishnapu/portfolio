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
    default: 'Jithin Krishna | Freelance Software Developer | React Native & Flutter Expert',
    template: '%s | Jithin Krishna',
  },
  description: 'Hire Jithin Krishna - Senior Freelance Software Developer in Kochi, Kerala. Expert in React Native, Flutter, Next.js, Node.js. Building mobile apps & web solutions for startups and enterprises. 5+ years experience, 50+ projects delivered.',
  keywords: [
    'freelance software developer', 'freelance mobile app developer', 'hire react native developer',
    'hire flutter developer', 'freelance web developer India', 'freelance developer Kochi',
    'React Native developer', 'Flutter developer', 'Next.js developer', 'Node.js developer',
    'Full stack developer', 'Mobile app developer', 'Cross-platform app developer',
    'mobile app development services', 'web application development', 'custom software development',
    'software developer Kochi', 'app developer Kerala', 'freelancer India', 'remote developer',
  ],
  authors: [{ name: 'Jithin Krishna', url: 'https://jithinkrishna.com' }],
  creator: 'Jithin Krishna',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jithinkrishna.com',
    siteName: 'Jithin Krishna - Freelance Developer',
    title: 'Jithin Krishna | Freelance Software Developer | Mobile & Web Expert',
    description: 'Senior Freelance Software Developer specializing in React Native, Flutter, and Next.js.',
    images: [{ url: '/avatar.jpeg', width: 800, height: 800, alt: 'Jithin Krishna' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jithin Krishna | Freelance Software Developer',
    description: 'Senior Freelance Developer - React Native, Flutter, Next.js.',
    images: ['/avatar.jpeg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jithin Krishna',
  url: 'https://jithinkrishna.com',
  image: 'https://jithinkrishna.com/avatar.jpeg',
  jobTitle: 'Senior Software Developer',
  email: 'jithin1998official@gmail.com',
  telephone: '+919048512163',
  address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'Kerala', addressCountry: 'India' },
  sameAs: ['https://github.com/Jithinkrishnapu', 'https://www.linkedin.com/in/jithin-krishna-078680177/'],
  knowsAbout: ['React Native', 'Flutter', 'Next.js', 'Node.js', 'TypeScript', 'Mobile App Development'],
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
