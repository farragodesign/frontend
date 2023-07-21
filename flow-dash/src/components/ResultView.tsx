import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  count: any;
}

export const ResultView: NextPage<Props> = ({ count }) => {
  const [resultOpen, setResultOpen] = useState(false);

  const UpDownButton = resultOpen ? <ChevronUpIcon className="w-6 h-6 text-blue-600 hover:underline dark:text-blue-500 " /> : <ChevronDownIcon className="w-6 h-6 text-blue-600 hover:underline dark:text-blue-500 " />;
  return (
    <div className="w-full">
      <button type="button" className
      ="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Dark</button>
    </div>
  );
};
