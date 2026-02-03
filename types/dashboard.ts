// Type definitions for dashboard data structure

export interface Stats {
  total_posts: number
  avg_score: number
  avg_comments: number
  avg_sentiment: number
  positive_percentage: number
  negative_percentage: number
  neutral_percentage: number
}

export interface SentimentDistribution {
  positive: number
  negative: number
  neutral: number
}

export interface PostTimeline {
  date: string
  count: number
}

export interface SentimentTimeline {
  date: string
  sentiment: 'positive' | 'negative' | 'neutral'
  count: number
}

export interface Ticker {
  ticker: string
  count: number
}

export interface Post {
  title: string
  score: number
  sentiment_score: number
  created: string
}

export interface ModelResult {
  model: string
  accuracy: number
}

export interface SentimentEngagement {
  sentiment: string
  score: number
  comms_num: number
}

export interface DashboardData {
  stats: Stats
  sentiment_distribution: SentimentDistribution
  posts_timeline: PostTimeline[]
  sentiment_timeline: SentimentTimeline[]
  score_distribution: Record<string, number>
  top_positive_posts: Post[]
  top_negative_posts: Post[]
  top_tickers: Ticker[]
  sentiment_engagement: SentimentEngagement[]
  model_results: ModelResult[]
}
