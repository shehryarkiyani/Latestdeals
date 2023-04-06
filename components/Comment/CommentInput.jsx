import EmojiPicker from "emoji-picker-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactGiphySearchBox from "react-giphy-searchbox";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { setShowJoinModal } from "@/redux/joinModalSlice";
import { useRouter } from "next/router";

const CommentInput = ({id,setcomments}) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  // const [showGifBox, setShowGifBox] = useState(false);
  const [jwt, setJwt] = useState("");
  // const showJoinModal = useSelector((state) => state.showJoinModal.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    const token = getCookie("token");
    setJwt(token);
  }, [jwt]);

  const handleContentChange = (event) => {
    setContent(event.target.textContent);
  };

  const postComment = () => {
    if (isLoggedIn) {
      setLoading(true);
      console.log("Loading", loading);

      const url = `${process.env.NEXT_PUBLIC_API_URL}/offers/comments/${id}`;
      var axios = require("axios");
      var data = JSON.stringify({
        text: content,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: url,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setcomments(response?.data?.offer.comments)
        })
        .catch(function (error) {
          console.log(error);
        });
      setContent("");
      setLoading(false);
    } else {
      console.log("Not logged in");
      dispatch(setShowJoinModal(true));
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/avatar.png"
        alt="Image"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex-1 bg-gray-100 rounded-xl px-3 items-end">
        <div className="flex w-full items-end">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-gray-100 rounded-lg py-3 h-auto w-full focus:outline-none"
          />
          <button
            className="focus:outline-none cursor-pointer text-blue-700 font-medium mb-3"
            onClick={() => postComment()}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
        {/* <div className="flex justify-between">
          <div>
            <div className="relative">
              <button
                className="font-bold text-xs text-gray-500 hover:text-black"
                onClick={() => setShowGifBox(!showGifBox)}
              >
                GIF
              </button>
              <div
                className={`absolute bottom-10 bg-white shadow-md rounded-lg py-3 h-auto w-fit px-2 focus:outline-none ${
                  !showGifBox && "hidden"
                }`}
              >
                <ReactGiphySearchBox
                  apiKey="SohA0yMiYlmAFRO0mUhNe1izCOAYCLgB"
                  onSelect={(item) =>
                    content.length === 0
                      ? setContent(" " + content + " " + item.bitly_gif_url)
                      : setContent(content + " " + item.bitly_gif_url)
                  }
                  masonryConfig={[
                    { columns: 2, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 3, imageWidth: 110, gutter: 5 },
                  ]}
                />
              </div>
            </div>
            <EmojiPicker
              onEmojiClick={emojiObject =>
                setContent(emojiObject.emoji)}
            />
          </div>
          <div className="flex gap-x-5 mb-2">
            <button
              className="font-bold text-xl text-gray-500 hover:text-black"
              onClick={handleBold}
            >
              B
            </button>
            <button
              className="italic font-bold text-xl text-gray-500 hover:text-black"
              onClick={handleItalic}
            >
              I
            </button>
            <button
              className="underline font-bold text-xl text-gray-500 hover:text-black"
              onClick={handleUnderline}
            >
              U
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommentInput;
