import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const AboutDropDown = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="hidden md:block">
      <div
        className="flex justify-between items-center pr-2 pb-3"
        onClick={() => setOpen(!open)}
      >
        <div className="font-bold text-sm">ABOUT</div>
        {open ? (
          <ChevronDownIcon className="h-4 w-4" />
        ) : (
          <ChevronUpIcon className="h-4 w-4" />
        )}
      </div>
      {open && (
        <div className="flex space-x-2 leading-5 text-gray-500 text-sm pr-8">
          Discover the best deals on Amazon found by our community of bargain
          hunters. Amazon sells everything and with Amazon Prime you can get
          free delivery on many items. Amazon Lightning deals offer some of the
          best bargains, but you have to be quick: special offers get snapped up
          fast! Find all the best Amazon lightning deals and discounts here.
          Here, you can buy books, electrical-items, technology, plants, home
          ware and more. Plus, in certain parts of the UK, you can now order
          groceries with Amazon
        </div>
      )}
    </div>
  );
};

export default AboutDropDown;
