import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

type Props = {
  period?: string
}

// Fake datasets
const todayData = [
  { name: "09:00", revenue: 400 },
  { name: "12:00", revenue: 900 },
  { name: "15:00", revenue: 600 },
  { name: "18:00", revenue: 1200 },
]

const weekData = [
  { name: "Mon", revenue: 2400 },
  { name: "Tue", revenue: 1398 },
  { name: "Wed", revenue: 9800 },
  { name: "Thu", revenue: 3908 },
  { name: "Fri", revenue: 4800 },
  { name: "Sat", revenue: 3800 },
  { name: "Sun", revenue: 4300 },
]

const monthData = [
  { name: "Week 1", revenue: 12000 },
  { name: "Week 2", revenue: 18500 },
  { name: "Week 3", revenue: 14200 },
  { name: "Week 4", revenue: 21000 },
]

export default function DashboardChart({ period }: Props) {

  let data = todayData

  if (period === "week") data = weekData
  if (period === "month") data = monthData

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
        Revenue Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
            animationDuration={600}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}
