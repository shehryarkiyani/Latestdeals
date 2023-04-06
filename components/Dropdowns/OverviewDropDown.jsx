// import { CircleStackIcon } from "@heroicons/react/24/outline";
import { BoltIcon, BuildingOffice2Icon, ChevronDownIcon, ChevronUpIcon, CircleStackIcon, ClockIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const OverviewDropDown = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="hidden md:block">
      <div
        className="flex justify-between items-center pr-2 pb-3 mt-5"
        onClick={() => setOpen(!open)}
      >
        <div className="font-bold text-sm">OVERVIEW</div>
        {open ? (
          <ChevronDownIcon className="h-4 w-4" />
        ) : (
          <ChevronUpIcon className="h-4 w-4" />
        )}
      </div>
      {open && (
        <div className="flex flex-col space-y-1 py-2">
          <div className="flex items-center space-x-2">
            <CircleStackIcon className="h-4 w-4 text-yellow-600" />
            <p>
              Best Saving: <b>£299.98 off</b>
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <BoltIcon className="h-5 w-4 text-yellow-500" />
            <p>
              Total Offers: <b>397,564</b>
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <BuildingOffice2Icon className="h-4 w-4 text-blue-800" />
            <p>
              Active Deals: <b>71</b>
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <ClockIcon className="h-4 w-4 text-red-800" />
            <p>
              Last Updated: <b>Today</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewDropDown;
