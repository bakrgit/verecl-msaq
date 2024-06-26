"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useTheme } from "@/contextes/ThemeContext"; // Assuming you have a ThemeContext for dark/light mode
import graph1 from "@/public/statsitc/graph1.png";
import graph2 from "@/public/statsitc/graph2.png";
import graph3 from "@/public/statsitc/graph3.png";
import Card from "@/components/finance-dashboard/statistics/card-statitics.component";
import Chart from "@/components/finance-dashboard/statistics/chart1.component";
import StatsCard from "@/components/finance-dashboard/statistics/status-card.component";
import LeftSide from "@/components/finance-dashboard/statistics/left-side.component";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StatisticsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="bg-gray-50 pb-0 pt-12 dark:bg-black">
      <div className="container mx-auto rounded-[20px] bg-gray-50 p-6 shadow-[2px_10px_81px_-8px_rgba(0,0,0,0.14)] dark:bg-[#161616]">
        <div className="grid gap-6  sm:grid-cols-1 lg:grid-cols-3">
          <Card
            title="Total Profit"
            amount="$350.240"
            change="+18.23"
            changeColor="text-green-500"
            graph={graph1}
          />
          <Card
            title="Total Revenue"
            amount="$400.690"
            change="+28.35"
            changeColor="text-red-500"
            graph={graph2}
          />
          <Card
            title="Product Sold"
            amount="$200.000"
            change="+28.35"
            changeColor="text-blue-500"
            graph={graph3}
          />
        </div>

        <div className="mt-6 flex flex-col space-y-6 lg:flex-row lg:gap-6 lg:space-y-0">
          <LeftSide />

          <Chart />
          <div className="flex w-full flex-col justify-around lg:col-span-3 lg:w-1/4">
            <StatsCard
              title="Employee"
              primaryWidth="141px"
              secondaryWidth="280px"
            />
            <StatsCard
              title="Independent Contractor"
              primaryWidth="141px"
              secondaryWidth="280px"
            />
            <StatsCard
              title="Contracted Employee"
              primaryWidth="141px"
              secondaryWidth="280px"
            />
            <StatsCard
              title="Stakeholders"
              primaryWidth="141px"
              secondaryWidth="280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
