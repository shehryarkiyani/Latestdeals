import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Accordion = ({ title, children, isOpen = true, id }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="w-full max-w-5xl mb-5 px-3 md:px-10" id={id}>
      <div className="bg-white px-4 py-5 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{title}</p>
          {!open && <ChevronDownIcon className="h-8 w-8 ml-2 mt-1 hover:bg-gray-200 cursor-pointer rounded-full p-[5px]" onClick={()=>setOpen(true)} />}
          {open && <ChevronUpIcon className="h-8 w-8 ml-2 mt-1 hover:bg-gray-200 cursor-pointer rounded-full p-[5px]" onClick={()=>setOpen(false)} />}
        </div>
        <div className={`mt-5 ${!open && "hidden"}`}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
