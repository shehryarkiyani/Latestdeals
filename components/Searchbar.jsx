import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import { useDispatch } from "react-redux";
import { setsearch } from "@/redux/SearchOffers";
const Searchbar = () => {
  const [active, setActive] = useState(false);
  const[value,setvalue]=useState('')
  const dispatch=useDispatch()
  return (
    <div
      className={`${
        active
          ? "bg-[rgba(0,0,0,0.5)] h-screen absolute top-0 left-0 z-50"
          : "lg:order-3"
      }`}
      style={{ margin: 0 }}
    >
      <div
        className={`${active ? "w-screen m-0 h-10 z-30" : ""} block lg:block`}
      >
        <div className={`${active ? "bg-primary p-3 w-full" : "ml-2"}`}>
          <div
            className={`flex lg:bg-white ${
              active ? "bg-white" : ""
            } border-primary-dark border rounded-lg items-center px-2 h-10 max-w-5xl mx-auto`}
          >
            <MagnifyingGlassIcon
              className={`h-5 w-5 ${
                active ? "text-primary" : "text-white"
              } lg:text-primary`}
            />
            <input
              type="text"
              className={`bg-white rounded-lg min-w-[220px] pl-4 pr-2 lg:block focus:outline-none ${
                active ? "block" : "hidden"
              }`}
              value={value}
              onChange={(e)=>{dispatch(setsearch(e.target.value));setvalue(e.target.value)}}
              placeholder={"Search Offers..."}
            />
            {active && <XMarkIcon className="h-4 w-4" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
