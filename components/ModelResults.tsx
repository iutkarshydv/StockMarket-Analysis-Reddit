import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Brain } from 'lucide-react'
import type { ModelResult } from '@/types/dashboard'

interface ModelResultsProps {
  data: ModelResult[]
}

export default function ModelResults({ data }: ModelResultsProps) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Brain className="w-6 h-6 text-purple-500" />
        Model Performance
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="model" angle={-45} textAnchor="end" height={100} />
          <YAxis domain={[0, 1]} />
          <Tooltip formatter={(value: number) => `${(value * 100).toFixed(2)}%`} />
          <Legend />
          <Bar dataKey="accuracy" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p className="font-semibold">Best Model: {data[0]?.model} ({(data[0]?.accuracy * 100).toFixed(2)}% accuracy)</p>
      </div>
    </div>
  )
}
