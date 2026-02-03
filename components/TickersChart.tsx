import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { DollarSign } from 'lucide-react'

interface TickersChartProps {
  data: Array<{
    ticker: string
    count: number
  }>
}

export default function TickersChart({ data }: TickersChartProps) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-green-500" />
        Most Mentioned Tickers
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="ticker" type="category" width={60} />
          <Tooltip />
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
