import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { BarChart3 } from 'lucide-react'
import type { SentimentDistribution } from '@/types/dashboard'

interface SentimentChartProps {
  data: SentimentDistribution
}

const COLORS = {
  positive: '#4ade80',
  negative: '#f87171',
  neutral: '#60a5fa'
}

export default function SentimentChart({ data }: SentimentChartProps) {
  const chartData = Object.entries(data).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
    color: COLORS[name as keyof typeof COLORS]
  }))

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-blue-500" />
        Sentiment Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
