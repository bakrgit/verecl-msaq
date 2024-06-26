interface StatsCardProps {
  title: string;
  primaryWidth: string;
  secondaryWidth: string;
}

const StatsCard = ({ title, primaryWidth, secondaryWidth }: StatsCardProps) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 dark:text-white">{title}</h3>
      <div className="mt-2 space-y-2">
        <div
          className="h-3 rounded-[7px] bg-gray-500 dark:bg-gray-500"
          style={{ width: primaryWidth, height: "14px", borderRadius: "7px", backgroundColor: "#828282" }}
        ></div>
        <div
          className="h-3 rounded-[7px] bg-gray-500 dark:bg-gray-500"
          style={{ width: secondaryWidth, height: "14px", borderRadius: "7px", backgroundColor: "#BDBDBD" }}
        ></div>
      </div>
    </div>
  );
};

export default StatsCard;
