import { ThumbsUp, ThumbsDown } from 'lucide-react'
import type { Post } from '@/types/dashboard'

interface TopPostsProps {
  positive: Post[]
  negative: Post[]
}

export default function TopPosts({ positive, negative }: TopPostsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Top Positive Posts */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <ThumbsUp className="w-6 h-6" />
          Top Positive Posts
        </h2>
        <div className="space-y-4">
          {positive?.slice(0, 5).map((post, idx) => (
            <div key={idx} className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-900/20 rounded">
              <h3 className="font-semibold text-sm line-clamp-2">{post.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="font-medium">Score: {post.score.toLocaleString()}</span>
                <span>Sentiment: {post.sentiment_score.toFixed(3)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Negative Posts */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
          <ThumbsDown className="w-6 h-6" />
          Top Negative Posts
        </h2>
        <div className="space-y-4">
          {negative?.slice(0, 5).map((post, idx) => (
            <div key={idx} className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20 rounded">
              <h3 className="font-semibold text-sm line-clamp-2">{post.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="font-medium">Score: {post.score.toLocaleString()}</span>
                <span>Sentiment: {post.sentiment_score.toFixed(3)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
