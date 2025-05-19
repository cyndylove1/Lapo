import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ChartDataItem = {
  name: string;
  Personalized: number;
  Instant: number;
};

// Chart data
const data: ChartDataItem[] = [
  { name: "May", Personalized: 10, Instant: 50 },
  { name: "Jun", Personalized: 20, Instant: 55 },
  { name: "Jul", Personalized: 10, Instant: 25 },
  { name: "Aug", Personalized: 10, Instant: 50 },
  { name: "Sep", Personalized: 10, Instant: 40 },
  { name: "Oct", Personalized: 20, Instant: 60 },
  { name: "Nov", Personalized: 10, Instant: 60 },
];

const renderCustomLegend = () => {
  return (
    <div
      style={{
        borderTop: "1px solid #E2E2E2",
        paddingTop: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#003087",
            fontFamily: "satoshi-400",
            color: "#808080",
          }}
        ></div>
        <span className="satoshi-400 text-[#808080] text-[12px]">
          Personalized
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            paddingBottom: "10px",
            backgroundColor: "#CCE2FF",
          }}
        ></div>
        <span className="satoshi-400 text-[#808080] text-[12px]">Instant</span>
      </div>
    </div>
  );
};

// Custom tooltip without background hover color
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <p className="label">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.fill }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};
  

export default function Chart() {
  return (
    <div className="w-full h-[315px] bg-white rounded-[12px] border-[1px] mt-2 border-[#E2E2E2] px-4 pt-4 pb-8">
      <h2 className="text-[18px] satoshi-500 leading-[18px] mb-2">
        Monthly Issuance
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          barGap={4}
        >
          <CartesianGrid vertical={false} stroke="#F2F4F7" />
          <XAxis
            dataKey="name"
            className="text-[11px] text-[#667085] satoshi-500 leading-[17px]"
          />
          <YAxis className="text-[11px] text-[#667085] satoshi-500 leading-[17px]" />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderCustomLegend} />
          <Bar
            dataKey="Personalized"
            stackId="a"
            fill="#014DAF"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="Instant"
            stackId="a"
            fill="#CCE2FF"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
