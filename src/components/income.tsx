import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { day: "Mon", income: 50 },
  { day: "Tue", income: 40 },
  { day: "Wed", income: 25 },
  { day: "Thu", income: 60 },
  { day: "Fri", income: 55 },
  { day: "Sat", income: 20 },
  { day: "Sun", income: 80 },
];

// Custom tooltip with transparent background
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: "5px",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: 0, color: "#10B981" }}>{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function Income() {
  return (
    <div className="w-full h-[340px] bg-white rounded-[12px] pt-4 mt-2 px-4 pb-10 border-[1px] border-[#E2E2E2]">
      <h2 className="text-[18px] satoshi-500 leading-[18px] mb-4">
        This Week’s Income
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            stroke="#E5E7EB"
            vertical={false}
            strokeDasharray="0"
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#75c13f"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
