'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Get in Touch'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Contact Us'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-600/5 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="red-accent-line" />
        </div>
        <h2 className="text-3xl md:text-5xl font-display text-white mb-4 tracking-wider uppercase">{title}</h2>
        {description && (
          <div className="text-gray-400 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-accent-600 text-white rounded hover:bg-accent-700 transition-colors font-medium tracking-wide">
            {primaryLabel}
          </a>
          <a href="/about" className="px-8 py-4 border border-gray-600 text-gray-300 rounded hover:border-white hover:text-white transition-colors font-medium tracking-wide">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
