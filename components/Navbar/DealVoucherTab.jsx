import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React from "react";

const DealVoucherTab = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 overflow-x-auto border-r-1 border-gray-400">
        <button className="bg-secondary-dark border rounded-3xl px-3 py-1 text-sm hover:bg-secondary-darker border-gray-300">
          Deals
        </button>
        <button className="bg-secondary-dark border rounded-3xl px-3 py-1 text-sm hover:bg-secondary-darker border-gray-300">
          Vouchers
        </button>
      </div>
      <div className="items-center space-x-2 hidden md:flex">
        <p className="text-sm">Sort by</p>
        <select
          id="filter"
          name="filter"
          className="focus:outline-none bg-white border rounded-3xl px-3 py-1 text-sm border-gray-300"
        >
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
        </select>
      </div>
      <button className="px-3 py-2 h-fit bg-white text-primary flex space-x-1 rounded-2xl items-center ml-2 md:hidden">
        <Bars3BottomLeftIcon className="h-4 w-4" />
        <p className="text-[13px] font-medium">Filter</p>
      </button>
    </div>
  );
};

export default DealVoucherTab;
