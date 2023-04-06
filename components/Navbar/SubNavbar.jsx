import {
  Bars3BottomLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import SubNavbarButton from "../Buttons/SubNavbarButton";
import { useSelector,useDispatch } from "react-redux";
import { setselectedFilter } from "@/redux/selectedFilter";
import { FormattedMessage } from 'react-intl';
const SubNavbar = () => {
  const dispatch = useDispatch();
  const navOptions = ["Home", "Deals", "Vouchers"];
  const sortOptions = ["Active", "Latest", "Popular"];
  const [sortOpen, setSortOpen] = useState(true);
  
  const [selectedSort, setSelectedSort] = useState(useSelector(state=> state.selectedFilter.value)); 
  return (
    <div className="flex justify-between items-center bg-secondary sticky top-16 z-30">
      <div className="flex space-x-2 overflow-x-auto border-r-1 border-gray-400 py-2">
        {navOptions.map((option, index) => (
          <SubNavbarButton routeTitle={option} title={<FormattedMessage id={option}/>} key={index} />
        ))}
      </div>
      <div className="items-center space-x-2 hidden md:flex">
        <p className="text-sm">
        <FormattedMessage id="SortBy"/>
         </p>
        <div className="flex flex-col relative">
          <button
            className="bg-white focus:outline-none rounded-full text-sm px-3 py-1 text-center inline-flex items-center"
            onClick={() => setSortOpen(!sortOpen)}
          >
             <FormattedMessage id={selectedSort}/>{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`z-10 ${
              sortOpen ? "hidden" : null
            } bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-36 absolute top-10 right-0`}
          >
            <ul
              className="py-2 text-sm"
              aria-labelledby="dropdownDefaultButton"
            >
              {sortOptions.map((option, index) => (
                <li key={index}>
                  <div
                    href="#"
                    className="block px-4 py-2 hover:bg-secondary cursor-pointer"
                    onClick={() => {
                      setSelectedSort(option);
                      dispatch( setselectedFilter(option))
                      setSortOpen(!sortOpen);
                    }}
                  >
                    <FormattedMessage id={option}/>
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className="px-3 py-2 h-fit bg-white text-primary flex space-x-1 rounded-2xl items-center ml-2 md:hidden">
        <Bars3BottomLeftIcon className="h-4 w-4" />
        <p className="text-[13px] font-medium">Filter</p>
      </button>
    </div>
  );
};

export default SubNavbar;
