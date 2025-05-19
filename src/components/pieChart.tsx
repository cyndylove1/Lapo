import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Active", "Expired", "Inactive", "Blocked", "Lost"],
    datasets: [
      {
        data: [2000, 300, 75, 50, 25],
        backgroundColor: [
          "#00A8A3",
          "#FEC43D",
          "#2B4DC3",
          "#9B42F5",
          "#F34D4A",
        ],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg mt-2 shadow p-4 w-full">
      <h2 className="text-start">Card Status Distribution</h2>
      <div className="relative w-60 h-60">
        <Doughnut data={data} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="satoshi-500 text-[12px] leading-[100%] text-[#808080] pt-[60px]">
            Total Cards
          </h2>
          <h2 className="satoshi-500 text-[24px] leading-[100%] text-(--color) pt-[2px]">
            2,450
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-2 text-xs">
        <LegendItem color="#00A8A3" label="Active" />
        <LegendItem color="#FEC43D" label="Expired" />
        <LegendItem color="#2B4DC3" label="Inactive" />
        <LegendItem color="#9B42F5" label="Blocked" />
        <LegendItem color="#F34D4A" label="Lost" />
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center mx-2 my-1">
      <span
        className="w-3 h-3 rounded-full mr-2"
        style={{ backgroundColor: color }}
      ></span>
      <span className="satoshi-400 text-[12px] leading-[100%] text-[#808080] ">
        {label}
      </span>
    </div>
  );
}
