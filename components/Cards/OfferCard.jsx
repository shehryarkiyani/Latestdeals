import {
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import slugify from "../../utils/slugify";

const OfferCard = ({ offerid, offerType, time, image, title, deal, price, realPrice, likes, comments }) => {
  const router = useRouter();
  const dynamicUrl = `/${offerType == "Voucher" ? "vouchers" : "deals"}/${offerid}`
  return (
    <div className="flex flex-col p-3 bg-white rounded-xl space-y-3 justify-between cursor-pointer h-[345px] sm:h-[385px] lg:h-[410px]">
      <Link href={dynamicUrl} className="flex space-x-2">
        <Image
          src="/avatar.png"
          alt="avatar"
          className="rounded-full cursor-pointer"
          width={12}
          height={12}
        />
        <small className="text-gray-300 text-[11px]">{time}</small>
      </Link>
      <div className="h-[150px] ms:h-[190px] rounded-xl sm:mx-1 flex justify-center items-center overflow-hidden" onClick={()=>router.push(dynamicUrl)}>
        <Image
          src={image}
          width={200}
          height={200}
          alt="POST"
          className="max-h-full max-w-[full] object-contain hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <p className="font-medium text-[13px] text-center" onClick={()=>router.push(dynamicUrl)}>{title}</p>
      <button onClick={()=>router.push(`/dealers/${deal}`)} className="text-gray-400 text-xs text-center">{deal}</button>
      {
        // If the price is not equal to the real price, then show the real price with a line through it
        price ? (price !== realPrice ? (
          <div className="flex justify-center space-x-2" onClick={()=>router.push(dynamicUrl)}>
            <p className="text-primary text-center font-bold text-lg">
              £{price}
            </p>
            <p className="text-gray-400 text-center line-through">
              £{realPrice}
            </p>
          </div>
        ) : (
          <p className="text-lg font-medium text-primary text-center" onClick={()=>router.push(dynamicUrl)}>
            £{price}
          </p>
        )):(
          <p className="text-lg font-medium text-primary text-center" onClick={()=>router.push(dynamicUrl)}>
            FREE
          </p>
        )
      }
      <div className="border-t border-gray-200 pt-1 flex justify-around">
        <div className="flex items-center">
          <HeartIcon className="h-6 w-6 text-gray-400 hover:bg-[#FFD8CC] hover:text-[#FF3D00] p-1 rounded-full" />
          <p className="text-gray-400 text-[11px]">{likes ? likes.length : 0}</p>
        </div>
        <div className="flex items-center">
          <ChatBubbleLeftIcon className="h-6 w-6 p-1 text-gray-400 hover:bg-[#CCE5F4] hover:text-[#007BC7] rounded-full" />
          <p className="text-gray-400 text-[10px]">{comments ? comments.length : 0}</p>
        </div>
        <div className="flex items-center">
          <ArrowRightOnRectangleIcon className="h-6 w-6 p-1 text-gray-400 hover:bg-[#FFF1CC] hover:text-[#FFBB00] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
