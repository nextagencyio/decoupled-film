import Link from 'next/link'
import { DrupalTeamMember } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface TeamMemberCardProps {
  item: DrupalTeamMember
}

export default function TeamMemberCard({ item }: TeamMemberCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-primary-900 border border-primary-800 rounded-xl hover:border-accent-600/40 hover:shadow-lg hover:shadow-accent-600/5 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-800 to-primary-900">
        {(item as any).photo?.url ? (
          <ResponsiveImage
            src={(item as any).photo.url}
            alt={(item as any).photo.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).photo.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/20 text-4xl font-display">{item.title?.charAt(0)}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
      </div>

      <div className="p-6">
          {(item as any).position && (
            <p className="text-sm text-accent-500 font-medium mb-2">{(item as any).position}</p>
          )}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-accent-500 font-medium group-hover:gap-2 transition-all">
          View profile
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
