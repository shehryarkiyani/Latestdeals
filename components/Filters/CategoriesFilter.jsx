import {
  Battery100Icon,
  BellAlertIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  GlobeAmericasIcon,
  HomeModernIcon,
  MusicalNoteIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoryButton from "../Buttons/CategoryButton";

const CategoriesFilter = () => {
  const categoryList = useSelector(
    (state) => state.selectedCategory.categories
  );
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-5 border-b border-gray-300">
      <div
        className="flex justify-between items-center pr-2 pb-3"
        onClick={() => setOpen(!open)}
      >
        <div className="font-bold text-sm">CATEGORIES</div>
        <div className="rounded-full p-1 hover:bg-secondary-darker">
          {open ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronUpIcon className="h-4 w-4" />
          )}
        </div>
      </div>
      {open && (
        <div className="flex flex-col space-y-1">
          {categoryList.map((category) => (
            <CategoryButton
              key={category._id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesFilter;
