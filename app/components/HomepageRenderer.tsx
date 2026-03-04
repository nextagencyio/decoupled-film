'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import Image from 'next/image'
import { DrupalHomepage } from '@/lib/types'
import { Film, Camera, Clapperboard, Star, Award, Users } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const showcaseItems = [
  { icon: Film, label: 'Feature Films' },
  { icon: Camera, label: 'Cinematography' },
  { icon: Clapperboard, label: 'Direction' },
  { icon: Star, label: 'Festival Premieres' },
  { icon: Award, label: 'Award Winners' },
  { icon: Users, label: 'Ensemble Casts' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80&fit=crop', alt: 'Film set with lighting' },
  { src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80&fit=crop', alt: 'Film reel' },
  { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&q=80&fit=crop', alt: 'Director on set' },
  { src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80&fit=crop', alt: 'Cinema screen' },
  { src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80&fit=crop', alt: 'Film camera' },
  { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80&fit=crop', alt: 'Movie production' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Icon Showcase */}
      <section className="py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="red-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-wider uppercase">What We Do</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {showcaseItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-accent-600/10 border border-accent-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-600/20 group-hover:border-accent-600/40 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent-500" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-primary-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="red-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-wider uppercase">Behind the Lens</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-primary-950/40 group-hover:bg-primary-950/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-white">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Dark Footer */}
      <footer className="bg-primary-950 border-t border-primary-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-display text-accent-500 mb-4 tracking-wider uppercase">Parallax Studios</h3>
              <p className="text-gray-500 mb-4">
                Crafting visually stunning narratives through film, documentary, and commercial content.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="/projects" className="hover:text-accent-500 transition-colors">Projects</a></li>
                <li><a href="/team" className="hover:text-accent-500 transition-colors">Team Members</a></li>
                <li><a href="/services" className="hover:text-accent-500 transition-colors">Services</a></li>
                <li><a href="/news" className="hover:text-accent-500 transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-500">
                <li>456 Studio Row</li>
                <li>Brooklyn, NY 11201</li>
                <li>info@parallaxstudios.com</li>
                <li>(718) 555-0192</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Parallax Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
