import { TrendingUp, TrendingDown, MessageCircle, FileText } from 'lucide-react'
import type { Stats } from '@/types/dashboard'

interface StatsCardsProps {
  stats: Stats
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="stat-card bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm font-medium">Total Posts</p>
            <p className="text-3xl font-bold mt-2">{stats.total_posts.toLocaleString()}</p>
          </div>
          <FileText className="w-12 h-12 opacity-80" />
        </div>
      </div>

      <div className="stat-card bg-gradient-to-br from-green-500 to-green-600">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm font-medium">Positive Sentiment</p>
            <p className="text-3xl font-bold mt-2">{stats.positive_percentage.toFixed(1)}%</p>
          </div>
          <TrendingUp className="w-12 h-12 opacity-80" />
        </div>
      </div>

      <div className="stat-card bg-gradient-to-br from-red-500 to-red-600">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-red-100 text-sm font-medium">Negative Sentiment</p>
            <p className="text-3xl font-bold mt-2">{stats.negative_percentage.toFixed(1)}%</p>
          </div>
          <TrendingDown className="w-12 h-12 opacity-80" />
        </div>
      </div>

      <div className="stat-card bg-gradient-to-br from-purple-500 to-purple-600">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm font-medium">Avg Comments</p>
            <p className="text-3xl font-bold mt-2">{stats.avg_comments.toFixed(0)}</p>
          </div>
          <MessageCircle className="w-12 h-12 opacity-80" />
        </div>
      </div>
    </div>
  )
}
