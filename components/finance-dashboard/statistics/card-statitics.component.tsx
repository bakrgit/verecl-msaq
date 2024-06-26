import Image from "next/image";
interface CardProps {
  title: string;
  amount: string;
  change: string;
  changeColor: string;
  graph: any;
}
const Card = ({ title, amount, change, changeColor, graph }: CardProps) => {
  return (
    <div className="relative rounded-[20px]  border border-gray-200  bg-white p-4 shadow-md dark:border-[#242424] dark:bg-[#1A1A1A]">
      <div className="flex w-full flex-row-reverse justify-between">
        <div className={`text-sm ${changeColor}`}>{change}</div>
        <h3 className="pr-16 text-sm font-medium text-gray-500 dark:text-white">{title}</h3>
      </div>
      <div className="flex w-full justify-between">
        <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{amount}</p>
        <div className="mt-2 flex space-x-1">
          <Image
            src={graph}
            alt="graph"
            width={60}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
