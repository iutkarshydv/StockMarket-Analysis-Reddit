'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, MessageSquare, BarChart3, Brain } from 'lucide-react'
import StatsCards from '@/components/StatsCards'
import SentimentChart from '@/components/SentimentChart'
import TimelineChart from '@/components/TimelineChart'
import TickersChart from '@/components/TickersChart'
import ModelResults from '@/components/ModelResults'
import TopPosts from '@/components/TopPosts'

export default function Home() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/dashboard-data.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-red-500">Error loading data. Please make sure to run `npm run export-data` first.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10" />
            <h1 className="text-4xl font-bold">WSB Sentiment Analysis</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Real-time sentiment analysis and insights from WallStreetBets posts
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <StatsCards stats={data.stats} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SentimentChart data={data.sentiment_distribution} />
          <TimelineChart data={data.posts_timeline} />
        </div>

        {/* Sentiment Timeline */}
        <div className="mb-6">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              Sentiment Over Time
            </h2>
            <TimelineChart 
              data={data.sentiment_timeline} 
              multiSeries={true}
            />
          </div>
        </div>

        {/* Tickers and Model Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TickersChart data={data.top_tickers} />
          <ModelResults data={data.model_results} />
        </div>

        {/* Top Posts */}
        <TopPosts 
          positive={data.top_positive_posts}
          negative={data.top_negative_posts}
        />

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400 pb-6">
          <p>Built with Next.js, Recharts, and Tailwind CSS | Data from r/WallStreetBets</p>
        </div>
      </div>
    </main>
  )
}
