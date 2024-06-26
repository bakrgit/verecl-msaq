import { Line } from "react-chartjs-2";
import { useTheme } from "@/contextes/ThemeContext";

const Chart = () => {
  const { theme } = useTheme();

  const data = {
    labels: [
      "12:00AM",
      "01:00AM",
      "02:00AM",
      "03:00AM",
      "04:00AM",
      "05:00AM",
      "06:00AM",
      "07:00AM",
      "08:00AM",
      "09:00AM",
      "10:00AM",
      "11:00AM"
    ],
    datasets: [
      {
        label: "Spend Overview",
        data: [5000, 4000, 3000, 2000, 5000, 6000, 4000, 3000, 4000, 5000, 6000, 5000],
        borderColor: theme === "dark" ? "#34D399" : "#10B981",
        backgroundColor: theme === "dark" ? "#34D39950" : "#10B98150",
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          color: theme === "dark" ? "#4B5563" : "#D1D5DB"
        },
        ticks: {
          color: theme === "dark" ? "#D1D5DB" : "#4B5563"
        }
      },
      y: {
        grid: {
          color: theme === "dark" ? "#4B5563" : "#D1D5DB"
        },
        ticks: {
          color: theme === "dark" ? "#D1D5DB" : "#4B5563"
        }
      }
    }
  };
  return (
    <div
      className="flex-grow rounded-[20px] border border-gray-200 bg-white p-4 shadow-md dark:border-[#242424] dark:bg-[#1A1A1A]"
      style={{ height: "500px" }}
    >
      <h3 className="text-sm font-medium text-gray-500 dark:text-white">Spend Overview</h3>
      <div className="h-full w-full">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Chart;
