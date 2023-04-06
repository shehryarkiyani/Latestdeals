import {
  ArrowRightOnRectangleIcon,
  ChevronRightIcon,
  HeartIcon,
  ShoppingBagIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleLeftEllipsisIcon,
  FlagIcon,
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accordion";
import CommentModal from "@/components/Comment/CommentModal";
import { getCookie } from "cookies-next";
import { useSelector,useDispatch } from "react-redux";
import Link from "next/link";
import DotsDropdown from "@/components/Dropdowns/DotsDropdown";
import { FormattedMessage } from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { SetUser } from "@/globalFun";
// export const getStaticPaths = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deals/`);
//   const deals = await res.json();

//   const paths = deals.deals.map((deal) => {
//     return {
//       params: { id: deal._id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
 
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deals/${id}`);
  const deal = await res.json();
  
  return {
    props: { deal },
  };
};

const ProductPage = ({ deal }) => {
  const jwt = getCookie("token");
  
  const[initialRender,setInitialRender]=useState(true)
  const[Liked,setLiked]=useState(deal.deal.likes.length)
  const user = useSelector((state) => state.auth.user);
  const[isLiked,setisLiked]=useState(deal.deal.likes.includes(user._id))
  const[comments,setcomments]=useState(deal.deal.comments)
  const[openReportModal,setOpenReportModal]=useState(false)
const dispatch=useDispatch()
  useEffect(()=>{
    if(initialRender){
      setInitialRender(false)
    }else{
      console.log("isLiked",isLiked)
      if(isLiked){
        setLiked(Liked+1);
      }else{
        setLiked(Liked-1);
      }
    }
   
  },[isLiked])
  const likeDeal = () => {
    const axios = require("axios");
    if (isLiked) {
    
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/offers/likes/${deal.deal.id}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      axios
        .request(config)
        .then((response) => {
        
          setisLiked(false)
        })
        .catch((error) => {
          console.log(error);
          toast(error?.message)
        });
    } else {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/deals/likes/${deal.deal.id}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setisLiked(true)
        })
        .catch((error) => {
          console.log(error);
          toast(error?.message)
        });
    }
  };
  const Save=()=>{
    const axios = require("axios");
    if(user?.savedDeals.includes(deal.deal.id)){
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/deals/saves/${deal.deal.id}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
       
      };
  
      axios
        .request(config)
        .then((response) => {
          SetUser(dispatch)
          toast("UnSaved Successfully")
        })
        .catch((error) => {
          toast(error.message)
          SetUser(dispatch)
        });
    }else{
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_API_URL}/deals/saves/${deal.deal.id}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
       
      };
  
      axios
        .request(config)
        .then((response) => {
         
          toast("Saved Successfully")
          SetUser(dispatch)
        })
        .catch((error) => {
          toast(error.message)
        });
    }
 
}
const Share=()=>{
    const axios = require("axios");
    let config = {
      method: "PATCH",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/deals/reshare/${deal.deal.id}`,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
     
    };

    axios
      .request(config)
      .then((response) => {
       
        toast("Shared Successfully")
      })
      .catch((error) => {
        console.log(error);
      });
}

  const reportOffer = (reportdata) => {
   
    const axios = require("axios");
    
    let data={
      code: 0,
      offerType: "Deal",
      missingInfo: {
        title: reportdata.title,
        image: "asd"
    },
    explanation: reportdata.explanation
    }
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/reports/${deal.deal.id}`,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      data:data
    };

    axios
      .request(config)
      .then((response) => {
        toast("Report Successfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
    <div className="flex flex-col items-center justify-center bg-secondary">
      <ToastContainer />
      {/* ITEM HEADER */}
      <div className="w-full bg-white flex justify-center mb-8">
        <div className="bg-white pt-20 w-full max-w-5xl px-3 md:px-10">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <HomeIcon className="h-4 w-4" />
              <ChevronRightIcon className="h-4 w-4 pt-1" />
              <p className="text-sm mt-[1.5px]"><FormattedMessage id="Deals" /></p>
            </div>
            <DotsDropdown openReportModal={openReportModal} setOpenReportModal={setOpenReportModal} deal={deal} Save={Save} reportOffer={reportOffer} />
          </div>
          <div className="flex flex-col md:flex-row mt-5 md:space-x-5 mb-3">
            <div className="h-[350px] w-[350px] flex items-center justify-center p-4 rounded-lg">
              <Image
                src={deal.deal.image.path}
                width={350}
                height={350}
                alt="POST"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="text-lg text-center md:text-start md:text-2xl font-bold md:w-[80%]">
                  {deal.deal.title}
                </div>
                <div className="text-gray-500 font-medium mt-2 text-center md:text-start">
                  Available from Amazon
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                  <div className="text-primary font-extrabold text-4xl">
                    £{deal.deal.discountedPrice}
                  </div>
                  <div className="font-medium text-gray-500 line-through text-2xl">
                    £{deal.deal.recommendedRetailPrice}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex space-x-2 items-center mb-3 justify-center md:justify-start mt-5 md:mt-1">
                  <div className="p-1 rounded-full bg-red-500">
                    <HeartIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="font-light">
                    {Liked} <FormattedMessage id="LikePeople" />
                  </div>
                </div>
                <Link href={deal.deal.link}>
                  <button className="w-full md:w-full flex justify-center items-center text-white p-3 font-medium text-lg mb-5 rounded-lg space-x-2 bg-primary">
                    <p><FormattedMessage id="GetDeal" /></p>
                    <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-b p-2 mb-5">
            <div className="flex text-gray-500 font-medium text-sm justify-around">
              <button
                onClick={() => likeDeal()}
                className={`flex items-center space-x-2 hover:text-[#FF3D00] cursor-pointer ${isLiked?'text-[#FF3D00]':''}`}
              >
                <HeartIconOutline className={`h-6 w-6 text-gray-500 hover:bg-[#FFD8CC] hover:text-[#FF3D00] p-[3px] rounded-full ${isLiked?'text-[#FF3D00]':''}`}/>
                <p><FormattedMessage id="Like" /></p>
              </button>
              <Link href="#commentbox">
                <div className="flex items-center space-x-1 hover:text-[#007BC7] cursor-pointer">
                  <ChatBubbleLeftEllipsisIcon className="h-6 w-6 p-[3px] text-gray-500 hover:bg-[#CCE5F4] hover:text-[#007BC7] rounded-full" />
                  <p><FormattedMessage id="Comment" /></p>
                  <div className="px-[5px] mt-[3px] bg-gray-400 text-white rounded-full text-xs">
                    {deal.deal.comments.length}
                  </div>
                </div>
              </Link>
              <button  onClick={() => Share()} className="flex items-center space-x-1 cursor-pointer hover:text-[#FFBB00]">
                <ShareIcon className="h-6 w-6 p-[3px] rounded-full text-gray-500 hover:bg-[#FFF1CC] hover:text-[#FFBB00]" />
                <p><FormattedMessage id="Share" /></p>
              </button>
              <button
                onClick={() => setOpenReportModal(true)}
                className="flex items-center space-x-1 cursor-pointer hover:text-[#FF3D00]"
              >
                <FlagIcon className="h-6 w-6 p-[3px] rounded-full text-gray-500 hover:bg-[#FFD8CC] hover:text-[#FF3D00]" />
                <p><FormattedMessage id="Report" /></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ITEM DETAILS */}
      <Accordion title={<FormattedMessage id="Details" />}>
        <p
          className="mt-5 break-words"
          dangerouslySetInnerHTML={{ __html: deal.deal.details }}
        ></p>
      </Accordion>
      {/* Retailer Information */}
      <Accordion title={<FormattedMessage id="RetailerInformation" />}>
        <div className="flex">
          <div className="flex border-gray-300 border rounded w-fit">
            {/* <Image
              src={deal.deal.sharedBy.image}
              alt="Retailer Image"
              width={80}
              height={80}
            /> */}
          </div>
          <div className="flex ml-3 flex-col justify-around">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <div className="rounded-full p-2 bg-secondary">
                <ShoppingBagIcon className="h-5 w-5 text-black" />
              </div>
              <p><FormattedMessage id="All" /> {deal.deal.sharedBy.name} <FormattedMessage id="deals" /></p>
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <div className="rounded-full p-2 bg-secondary">
                <TicketIcon className="h-5 w-5 text-black" />
              </div>
              <p id="commentbox">
              <FormattedMessage id="All" /> {deal.deal.sharedBy.name} <FormattedMessage id="discountCodes" />
              </p>
            </div>
          </div>
        </div>
      </Accordion>
      {/* Comments */}
      <Accordion title={<FormattedMessage id="Comments" />}>
        <CommentModal 
          comments={comments}
          setcomments={setcomments}
          
          offer={deal.deal}
          type="deal"
        />
      </Accordion>
    </div>
  );
};

export default ProductPage;
