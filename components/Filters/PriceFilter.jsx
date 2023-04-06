import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const PriceFilter = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-5 border-b border-gray-300">
      <div
        className="flex justify-between items-center pr-2 pb-3"
        onClick={() => setOpen(!open)}
      >
        <div className="font-bold text-sm">PRICE</div>
        <div className="rounded-full p-1 hover:bg-secondary-darker">
          {open ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronUpIcon className="h-4 w-4" />
          )}
        </div>
      </div>
      {open && (
        <div className="flex space-x-2 p-3">
          <input
            className="focus:outline-none w-20 rounded-lg px-2 py-1"
            type="number"
            min={0}
            name="min"
            id="min"
            placeholder="Min."
          />
          <p>to</p>
          <input
            className="focus:outline-none w-20 rounded-lg px-2 py-1"
            type="number"
            name="max"
            id="max"
            min={0}
            placeholder="Max."
          />
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
