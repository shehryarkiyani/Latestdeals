import { HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from 'react-intl';
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary px-5 pt-20 pb-5">
      <div className="w-full max-w-2xl">
        <HomeIcon className="h-4 w-4 mb-4 mx-1" />
      </div>
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl break-words font-[350]">
        <h1 className="text-2xl font-bold"><FormattedMessage id="AboutUs"/></h1>
        <iframe
          className="mb-5 mt-7 w-[95%]"
          width="560"
          height="300"
          src="https://www.youtube.com/embed/0H-1xWu_eqc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="font-bold mb-4">
        <FormattedMessage id="AboutWelcome"/>
        </h1>
        <p className="mb-5">
        <FormattedMessage id="AboutDescription"/>
         <b><FormattedMessage id="twomillion"/></b>
        </p>
        <Image
          src="/aboutus.png"
          className="w-full mb-4"
          alt="aboutimage"
          width={500}
          height={200}
        />
        <ul className="list-disc mx-6 my-8 font-bold">
          <li>
            <Link href="#" className="text-primary">
            <FormattedMessage id="Joindeal"/>
            
            </Link>
          </li>
          <li>
            <Link href="#" className="text-primary">
             
              <FormattedMessage id="Postdeal"/>
            </Link>
          </li>
          <li>
            <Link href="#" className="text-primary">
              <FormattedMessage id="Earnpoint"/>
            </Link>
          </li>
        </ul>
        <p className="mb-4">
        <FormattedMessage id="OurMission"/>
        </p>
        <p className="mb-4">
          <Link href="#" className="text-primary font-normal">
          <FormattedMessage id="receivedtxt"/>
           
          </Link>{" "}
          <FormattedMessage id="website"/>{" "}
          <Link href="#" className="text-primary font-normal">
          <FormattedMessage id="nationaltxt"/>
          </Link>{" "}
          <FormattedMessage id="nominatedtxt"/>
        </p>
        <p className="font-bold"><FormattedMessage id="JoinUs"/></p>
        <ul className="list-disc mx-6 my-4">
          <li>
            <Link href="#" className="text-primary font-bold">
            <FormattedMessage id="facebookgroup"/>
            </Link>{" "}

             <FormattedMessage id="facebookmembers"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-bold">
            <FormattedMessage id="youtube"/>
            </Link>{" "}
            <FormattedMessage id="subscribers"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-bold">
            <FormattedMessage id="tiktok"/>
            </Link>{" "}
            <FormattedMessage id="tiktokmembers"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-bold">
            <FormattedMessage id="insta"/>
            </Link>{" "}
            <FormattedMessage id="instamembers"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-bold">
            <FormattedMessage id="twitter"/>
            </Link>{" "}
            <FormattedMessage id="twitterMember"/>
          </li>
        </ul>
        <p className="font-bold"><FormattedMessage id="chat"/></p>
        <ul className="list-disc mx-6 my-4">
          <li>
            <Link href="#" className="text-primary font-bold">
            <FormattedMessage id="chattxt"/>
            </Link>{" "}
            <FormattedMessage id="freeOnline"/>
          </li>
        </ul>
        <p className="font-bold"> <FormattedMessage id="freeTotal"/></p>
        <ul className="list-disc mx-6 my-4">
          <li>
            <Link href="#" className="text-primary font-normal">
            <FormattedMessage id="StockChecker"/>
            </Link>{" "}
            <FormattedMessage id="FindoutStock"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-normal">
            <FormattedMessage id="Domino"/>
            </Link>{" "}
            <FormattedMessage id="vouchercode"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-normal">
            <FormattedMessage id="AmazonDiscount"/>
            </Link>{" "}
            <FormattedMessage id="secretdiscounts"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-normal">
            <FormattedMessage id="MarketPrice"/>
            </Link>{" "}
            <FormattedMessage id="Compareprices"/>
          </li>
          <li>
            <Link href="#" className="text-primary font-normal">
            <FormattedMessage id="MoneySaving"/>
            </Link>{" "}
            <FormattedMessage id="Expertinformation"/>
          </li>
        </ul>
        <p className="mb-4">
        <FormattedMessage id="builtfree"/>
        </p>
        <p className="mb-4">
        <FormattedMessage id="ifQuestion"/>
          <Link href="#" className="text-primary font-normal">
          <FormattedMessage id="getintouch"/>
          </Link>
        </p>
        <p className="font-bold"><FormattedMessage id="MoreInformation"/></p>
        <ul className="list-disc mx-6 my-4">
          <li>
            <Link href="#" className="text-primary font-normal">
             
              <FormattedMessage id="makeMoney"/>
            </Link>{" "}
          </li>
          <li>
          <FormattedMessage id="Want to"/>
            <Link href="#" className="text-primary font-normal">
            <FormattedMessage id="workwithus"/>
            </Link>
            ?
          </li>
        </ul>
        <p className="font-bold">

          <FormattedMessage id="DoesLatest"/>
        </p>
        <p className="mb-4">
        <FormattedMessage id="Atpresent"/>
         
        </p>
        <p className="font-bold mb-4"><FormattedMessage id="DoesLatest"/></p>
        <p className="mb-4">
        <FormattedMessage id="LatestDeals"/>
          <br /><FormattedMessage id="WeWork"/><br /><FormattedMessage id="London"/><br />E1W 1UN
        </p>
      </div>
    </div>
  );
};

export default About;
