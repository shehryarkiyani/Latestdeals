import { setselectedCategory } from "@/redux/selectedCategorySlice";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from 'react-intl';
const CategoryButton = ({ name, image }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory.value);
  const selected = selectedCategory == name;
  return (
    <button
      className={`flex justify-start items-center space-x-2 rounded-lg h-10 ${
        selected ? " bg-secondary-dark" : "hover:bg-secondary-dark"
      }`}
      onClick={() => selectedCategory === name ? dispatch(setselectedCategory("All")) : dispatch(setselectedCategory(name))}
    >
      <div
        className={`rounded-full p-2 ${
          selected ? "bg-primary" : "bg-secondary-darker"
        }`}
      >
        {image ? (
          <Image className="h-4 w-4" src={image} height={20} width={20} alt="iconimg" />
        ) : (
          <BookOpenIcon
            className={`h-4 w-4 ${selected ? "text-white" : "text-gray-600"}`}
          />
        )}
      </div>
      <div className="text-sm">
        <FormattedMessage id={name}/>
        </div>
    </button>
  );
};

export default CategoryButton;
