import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightOnRectangleIcon,
  StarIcon as StarIconFilled,
} from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import AboutDropDown from "@/components/Dropdowns/AboutDropdown";
import OverviewDropDown from "@/components/Dropdowns/OverviewDropDown";
import DealVoucherTab from "@/components/Navbar/DealVoucherTab";
import DealCard from "@/components/Cards/DealCard";

const DealerPage = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-7xl px-5 flex items-center">
        <HomeIcon className="h-4 w-4" />
        <ChevronRightIcon className="h-4 w-4 mx-1" />
        <p className="text-sm">Retailers</p>
        <ChevronRightIcon className="h-4 w-4 mx-1" />
        <p className="text-sm">Amazon</p>
      </div>
      <div className="flex items-end py-4 justify-between w-full max-w-7xl px-5">
        <div className="flex">
          <div className="rounded-lg overflow-hidden h-20 w-20 md:h-32 md:w-32 flex justify-center items-center border-2 border-gray-3  00">
            <Image src="/Post2.png" width={100} height={100} alt="POST" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="text-3xl font-medium">Amazon Deals & Sales</div>
            <div className="text-gray-400 text-lg">
              The Best Savings & Offers in January 2023
            </div>
            <div className="flex items-end">
              <StarIconFilled className="h-5 w-5 text-yellow-400 mt-2" />
              <StarIconFilled className="h-5 w-5 text-yellow-400 mt-2" />
              <StarIconFilled className="h-5 w-5 text-yellow-400 mt-2" />
              <StarIconFilled className="h-5 w-5 text-yellow-400 mt-2" />
              <StarIcon className="h-5 w-5 text-yellow-400 mt-2" />
              <small className="ml-2 font-medium">
                4.6 stars from 551 reviews
              </small>
            </div>
          </div>
        </div>
        <button className="bg-primary text-white p-3 rounded-xl flex space-x-1">
          <p className="text-sm font-medium">amazon.co.uk</p>
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-center w-full bg-secondary">
        <div className="grid grid-cols-5 gap-5 pt-2 md:p-5 max-w-7xl">
          <div className="">
          <AboutDropDown />
          <OverviewDropDown />
          </div>
          <div className="bg-transparent w-full h-30 col-span-5 md:col-span-4 px-3">
            <DealVoucherTab />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl px-5 bg-secondary"></div>
    </div>
  );
};

export default DealerPage;
