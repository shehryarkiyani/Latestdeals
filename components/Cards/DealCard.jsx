import {
  ArrowRightOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const DealCard = () => {
  const price = 12.99;
  const realPrice = 14.99;
  return (
    <div className="flex flex-col md:flex-row px-4 py-3 bg-white mt-5 rounded-xl">
      <Image src="/Post2.png" width={150} height={150} alt="POST" />
      <div className="ml-4 flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="mr-5">
            <div className="text-lg font-medium">
              Tisserand Aromatherapy Lavender Bath & Shower Wash Jasmine &
              Sandlewood 400ml
            </div>
            <div className="text-gray-400">
              Cheaper with Subscribe & Save
              https://images.latestdeals.co.uk/c-NlcXQLhjc.jpg With a loud
              chattering mind, sometimes it can be difficult to fall into that
              deep, restorative.
            </div>
          </div>
          <div className="flex flex-col justify-around items-center">
            {
              // If the price is not equal to the real price, then show the real price with a line through it
              price ? (
                price !== realPrice ? (
                  <div
                    className="flex justify-center space-x-2"
                    onClick={() => router.push(`/deals/${slugify(title)}`)}
                  >
                    <p className="text-primary text-center font-bold text-lg">
                      £{price}
                    </p>
                    <p className="text-gray-400 text-center line-through">
                      £{realPrice}
                    </p>
                  </div>
                ) : (
                  <p
                    className="text-lg font-medium text-primary text-center"
                    onClick={() => router.push(`/deals/${slugify(title)}`)}
                  >
                    £{price}
                  </p>
                )
              ) : (
                <p
                  className="text-lg font-medium text-primary text-center"
                  onClick={() => router.push(`/deals/${slugify(title)}`)}
                >
                  FREE
                </p>
              )
            }
            <button className="bg-primary text-white p-3 rounded-xl flex space-x-1 h-fit w-fit">
              <p className="text-sm font-medium">amazon.co.uk</p>
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-300 mt-5 pt-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/avatar.png"
              alt="avatar"
              className="rounded-full hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-gray-500 p-[1px]"
              width={18}
              height={18}
            />
            <p className="text-gray-500 text-xs">3h</p>
            <div className="p-[3px] rounded-full bg-red-500">
              <HeartIcon className="h-[10px] w-[10px] text-white" />
            </div>
            <p className="text-gray-500 text-xs">11 people like this deal</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <HeartIconOutline className="h-4 w-4" />
            <p className="font-medium text-sm">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
