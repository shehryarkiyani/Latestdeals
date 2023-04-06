import { setLanguage } from "@/redux/langSlice";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from 'react-intl';
const ShareButton = () => {
  const selectedLang = useSelector((state) => state.language.value);
  const languages = ["EN","AR"];
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();
 
  const handleLangChange = (lang) => {
    dispatch(setLanguage(lang));
    setShowDropDown(false);
  };

  return (
    <div className="lg:order-4 relative z-0">
      <button
        className="px-3 py-[10px] bg-primary-dark hover:bg-primary-darker rounded-lg flex items-center justify-between lg:space-x-1 z-0"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <p className="text-sm text-white font-semibold hidden lg:block">
          {selectedLang}
        </p>
        <ChevronDownIcon className="text-white h-4 w-4" />
      </button>
      {showDropDown ? (
        <div className="absolute top-12 right-0 bg-white w-32 rounded-lg p-2 z-0">
          {languages.map((lang, index) => (
            <button
              className="flex items-center space-x-2 w-full hover:bg-gray-100"
              key={index}
              onClick={() => handleLangChange(lang)}
            >
              <p className="text-sm"><FormattedMessage id={lang}/> </p>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ShareButton;
