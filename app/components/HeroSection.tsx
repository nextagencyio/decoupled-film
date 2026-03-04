'use client'

import Image from 'next/image'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80&fit=crop"
        alt="Film production"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/60 to-primary-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="red-accent-line" />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-normal text-white mb-6 tracking-wider uppercase">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{subtitle}</p>}
        {description && (
          <div className="text-lg text-gray-400 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-950 to-transparent" />
    </section>
  )
}
