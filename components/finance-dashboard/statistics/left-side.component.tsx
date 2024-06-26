const LeftSide = () => {
  return (
    <div className="flex w-full flex-col justify-between rounded-[20px] border border-gray-200 bg-white p-4 shadow-md dark:border-[#242424] dark:bg-[#1A1A1A] lg:w-1/4 lg:max-w-[300px]">
      <h3 className="text-sm font-medium text-gray-500 dark:text-white">Total Balance</h3>
      <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">$350.0</p>
      <button className="mt-2 rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black">Transfer</button>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-white">Total Income</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">$320.0</p>
      </div>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-white">Total Expense</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">$220.0</p>
      </div>
    </div>
  );
};

export default LeftSide;
