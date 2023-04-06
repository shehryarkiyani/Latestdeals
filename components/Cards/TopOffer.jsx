import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const TopOffer = ({image, title, likes,id,handleClick}) => {
  return (
    <div className="flex px-2 py-2 rounded-lg bg-white w-64 min-w-[250px] space-x-2 cursor-pointer" onClick={()=>handleClick(id)}>
      <Image
        src={image}
        className="py-2"
        width={60} 
        height={50}
        alt="POST"
      />
      <div>
        <p className="font-medium text-xs">
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </p>
        <div className="flex justify-end items-end pt-6">
            <HeartIcon className="h-4 w-4 text-red-600" />
            <p className="text-xs">
                {likes}
            </p>
        </div>
      </div>
    </div>
  );
};

export default TopOffer;
