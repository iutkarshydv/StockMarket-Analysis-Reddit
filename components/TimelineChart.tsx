import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'
import type { PostTimeline, SentimentTimeline } from '@/types/dashboard'

interface TimelineChartProps {
  data: PostTimeline[] | SentimentTimeline[]
  multiSeries?: boolean
}

export default function TimelineChart({ data, multiSeries = false }: TimelineChartProps) {
  if (multiSeries) {
    // Transform data for multi-series chart
    const sentimentByDate: any = {}
    const sentimentData = data as SentimentTimeline[]
    sentimentData.forEach(item => {
      if (!sentimentByDate[item.date]) {
        sentimentByDate[item.date] = { date: item.date, positive: 0, negative: 0, neutral: 0 }
      }
      sentimentByDate[item.date][item.sentiment] = item.count
    })
    const chartData = Object.values(sentimentByDate)

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="positive" stroke="#4ade80" strokeWidth={2} />
          <Line type="monotone" dataKey="negative" stroke="#f87171" strokeWidth={2} />
          <Line type="monotone" dataKey="neutral" stroke="#60a5fa" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-blue-500" />
        Posts Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
