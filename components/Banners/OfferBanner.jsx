import Image from "next/image";
import React,{useState,useEffect} from "react";
import JoinButton from "../Buttons/JoinButton";

import { FormattedMessage } from 'react-intl';

const OfferBanner = ({title, description, hidden = false}) => {

  return (
    <div className={`bg-white justify-center items-center ${hidden ? "opacity-0 h-14" : "flex pt-20"}`}>
      <div className="w-full max-w-7xl px-3 flex">
        <div className="flex flex-col pb-2">
          <h1 className="font-bold text-lg md:text-xl">
            {title}
          </h1>
          <p className="text-[rgb(117,117,117)] leading-5 mb-5">
            {description}
          </p>
          <JoinButton title={<FormattedMessage id="JoinButtonTitle" />} showIcon={false} />
        </div>
        <div className={`flex-row-reverse w-[90%] hidden ${hidden ? "hidden" : "md:flex"}`}>
          <Image
            src="/person.jpg"
            alt="person"
            width={140}
            height={130}
            style={{ objectFit: "cover" }}
          />
          <div className="hidden md:flex flex-col items-end py-3">
            <p className="text-[#A8A8A8] font-bold leading-4">Tom Church</p>
            <p className="text-[#A8A8A8] font-light text-sm leading-4">
              Co-Founder &
            </p>
            <p className="text-[#A8A8A8] font-light text-sm leading-4">
              Chief Bargain Hunter
            </p>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default OfferBanner;
