import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_NEWS } from '@/lib/queries'
import { NewsData } from '@/lib/types'
import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'News | Parallax Studios',
  description: 'Latest news and updates from Parallax Studios.',
}

async function getNews() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<NewsData>({
      query: GET_NEWS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeNewses?.nodes || []
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export default async function NewsPage() {
  const items = await getNews()

  return (
    <div className="min-h-screen bg-primary-950">
      <Header />

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-16">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-6 uppercase tracking-wider">
              News
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Latest updates from Parallax Studios.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-400 mb-2">No News Yet</h2>
              <p className="text-gray-500">
                News will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
