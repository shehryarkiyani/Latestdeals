import { output } from "@/next.config";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CommentInstance = ({ comment,Like,isLiked }) => {
  const [duration, setDuration] = useState(null);
  console.log(comment)
  const fetchDuration = () => {
    const dateString = comment.createdAt;
    const date = new Date(dateString);
    const now = new Date();
    const comDuration = now - date;
    var output = "";
    if (duration < 60 * 1000) {
      // comment added less than 10 seconds ago
      output = "just now";
    } else if (comDuration < 60 * 60 * 1000) {
      // comDuration is less than 1 hour
      output = `${Math.floor(comDuration / (60 * 1000))} minutes ago`;
    } else if (comDuration < 24 * 60 * 60 * 1000) {
      // comDuration is less than 1 day
      output = `${Math.floor(comDuration / (60 * 60 * 1000))} hours ago`;
    } else if (comDuration < 7 * 24 * 60 * 60 * 1000) {
      // comDuration is less than 1 week
      output = `${Math.floor(comDuration / (24 * 60 * 60 * 1000))} days ago`;
    } else {
      // comDuration is 1 week or more
      output = `${Math.floor(
        comDuration / (7 * 24 * 60 * 60 * 1000)
      )} weeks ago`;
    }
    setDuration(output);
  };
  useEffect(() => {
    const dateString = comment.createdAt;
    const date = new Date(dateString);
    const now = new Date();
    const comDuration = now - date;
    var output = "";
    if (duration < 60 * 1000) {
      // comment added less than 10 seconds ago
      output = "just now";
    } else if (comDuration < 60 * 60 * 1000) {
      // comDuration is less than 1 hour
      output = `${Math.floor(comDuration / (60 * 1000))} minutes ago`;
    } else if (comDuration < 24 * 60 * 60 * 1000) {
      // comDuration is less than 1 day
      output = `${Math.floor(comDuration / (60 * 60 * 1000))} hours ago`;
    } else if (comDuration < 7 * 24 * 60 * 60 * 1000) {
      // comDuration is less than 1 week
      output = `${Math.floor(comDuration / (24 * 60 * 60 * 1000))} days ago`;
    } else {
      // comDuration is 1 week or more
      output = `${Math.floor(
        comDuration / (7 * 24 * 60 * 60 * 1000)
      )} weeks ago`;
    }
    setDuration(output);
  }, [comment.createdAt, duration]);
  return (
    <div className="flex items-start space-x-2 mt-5">

      {comment.user.image ? 
      <Image
      src={comment.user.image}
      alt="Image2"
      width={40}
      height={40}
      className="rounded-full"
    />:
    <div className="w-[40px] h-[40px] bg-yellow-500 rounded-[50%] flex justify-center items-center">
{comment.user.username[0]}
    </div>
      }
      <div className="flex flex-col space-y-2">
        <p className="text-sm flex-1 mt-1">
          <span className="font-bold text-primary">{comment.user.username}</span>{" "}
          <small className="font-light text-xs text-gray-500">{duration}</small>
        </p>
        <div className="bg-secondary rounded-xl p-2">{comment.text}</div>
        <div className="flex text-xs space-x-2">
        {isLiked?
      <button className="text-gray-500" onClick={()=>Like(comment._id)}>DisLike</button>
      :<button className="text-gray-500" onClick={()=>Like(comment._id)}>Like</button>  
      }  
          {/* <button className="text-gray-500">Reply</button> */}
          <div className="bg-primary p-[3px] h-fit rounded-full cursor-pointer"  onClick={()=>Like(comment._id)}>
            <HandThumbUpIcon className="h-3 w-3 text-white" />
          </div>
          <p className="text-gray-500">{comment.likes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentInstance;
