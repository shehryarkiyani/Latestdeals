import Image from "next/image";
import React from "react";
import AmazonSvg from "../svgs/AmazonSvg";
import BellSvg from "../svgs/BellSvg";
import HandBagSvg from "../svgs/HandBagSvg";
import { FormattedMessage } from 'react-intl';
const MobileAppBanner = () => {
  return (
    <div className="bg-primary-dark text-white font-bold px-4 pt-6 flex flex-col md:flex-row items-center md:justify-center md:gap-x-10 text-xl">
      <div className="md:order-2">
        <div className="text-2xl mb-2"><FormattedMessage id="DownloadApp"/></div>
        <div className="flex px-1 py-1 space-x-2">
          <HandBagSvg />
          <p><FormattedMessage id="DealTxt"/></p>
        </div>
        <div className="flex px-1 py-1 space-x-2">
          <AmazonSvg />
          <p><FormattedMessage id="AmazonTxt"/></p>
        </div>
        <div className="flex px-1 py-1 space-x-2">
          <BellSvg />
          <p><FormattedMessage id="DealAlert"/></p>
        </div>
        <div className="flex gap-x-5 flex-wrap  my-5">
          <Image
            src="/appstore.png"
            className="w-36 h-fit"
            height={50}
            width={150}
            alt="downbtn"
          />
          <Image
            src="/googleplay.png"
            className="w-36 h-fit"
            height={50}
            width={150}
            alt="downbtn"
          />
        </div>
      </div>
      <Image
        src="/mobileapp.png"
        className="w-fit h-fit md:order-1"
        height={300}
        width={300}
        alt="app"
      />
    </div>
  );
};

export default MobileAppBanner;
