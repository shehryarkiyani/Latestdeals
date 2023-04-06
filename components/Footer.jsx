import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { FormattedMessage } from 'react-intl';
const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-secondary-dark flex justify-center">
      <div className="max-w-7xl px-5 sm:px-10 w-full flex flex-col items-center">
        <div className="pt-10 sm:pb-5 flex grayscale">
          <Image src="/logo.png" alt="logo" height={40} width={40} />
          <div className="text-gray-500 font-bold text-3xl"><FormattedMessage id="LogoTitle"/></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 mb-10">
          <div className="flex flex-col items-start text-sm space-y-3">
            <div className="font-medium py-1 border-b border-gray-300">
              <FormattedMessage id="Latest"/> <FormattedMessage id="Deals"/>
            </div>
            <button onClick={() => router.push("/")}> <FormattedMessage id="Home"/></button>
            <button onClick={() => router.push("/deals")}> <FormattedMessage id="Deals"/></button>
            <button onClick={() => router.push("/vouchers")}>
            <FormattedMessage id="VoucherCode"/>
            </button>
          </div>
          <div className="flex flex-col items-start text-sm space-y-3">
            <div className="font-medium py-1 border-b border-gray-300">
            <FormattedMessage id="Policies"/>
            </div>
            <button onClick={() => router.push("/privacy-policy")}>
            <FormattedMessage id="PrivacyPolicy"/>
            </button>
            <button onClick={() => router.push("/terms-and-conditions")}>
            <FormattedMessage id="Terms&Condition"/>
            </button>
          </div>
          <div className="flex flex-col items-start text-sm space-y-3 sm:w-fit">
            <div className="font-medium py-1 border-b border-gray-300">
            <FormattedMessage id="Others"/>
            </div>
            <button onClick={() => router.push("/news")}><FormattedMessage id="News"/></button>
            <button onClick={() => router.push("/about")}><FormattedMessage id="AboutUs"/></button>
            <button onClick={() => router.push("/contact")}><FormattedMessage id="ContactUs"/></button>
          </div>
          <div className="flex flex-col items-start text-sm space-y-3 sm:mt-0">
            <div className="font-medium py-1 border-b border-gray-300">
            <FormattedMessage id="Help"/>
            </div>
            <div className="h-fit w-[80%]">
            <FormattedMessage id="FrequentlyAsked"/>
            </div>
            <button
              className="py-2 px-5 bg-secondary-darker rounded border-gray-400 border"
              onClick={() => router.push("/contact")}
            >
              <FormattedMessage id="GetHelp"/>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start w-full text-gray-600 text-sm pb-10">
          <p className="text-lg font-medium"><FormattedMessage id="SiteWorks"/></p>
          <ul className="list-disc list-inside">
            <li>
            <FormattedMessage id="CoverSite"/>
            </li>
            <li>
            <FormattedMessage id="ExternalWebsite"/>
            </li>
            <li>
            <FormattedMessage id="ShareLatest"/>
            </li>
            <li>
            <FormattedMessage id="AnyQuestion"/>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap border-t border-b border-gray-300 sm:p-4 sm:space-x-5">
          <SocialIcon
            url="https://facebook.com/"
            bgColor="#E4E6E9"
            fgColor="#4F4F4F"
          />
          <SocialIcon
            url="https://tiktok.com/"
            bgColor="#E4E6E9"
            fgColor="#4F4F4F"
          />
          <SocialIcon
            url="https://twitter.com/"
            bgColor="#E4E6E9"
            fgColor="#4F4F4F"
          />
          <SocialIcon
            url="https://youtube.com/"
            bgColor="#E4E6E9"
            fgColor="#4F4F4F"
          />
          <SocialIcon
            url="https://instagram.com/"
            bgColor="#E4E6E9"
            fgColor="#4F4F4F"
          />
        </div>
        <small className="text-center py-5 text-gray-600 leading-5">
        <FormattedMessage id="CopyRight"/> <br />
        <FormattedMessage id="address"/>
        </small>
      </div>
    </div>
  );
};

export default Footer;
