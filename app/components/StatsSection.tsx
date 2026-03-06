'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i}>
              <div className="text-3xl md:text-4xl font-display text-accent-500 tracking-wider">{stat.value || stat.number || stat.statValue}</div>
              <div className="text-gray-400 mt-1">{stat.label || stat.statLabel || stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
