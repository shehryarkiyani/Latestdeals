
import Image from "next/image";
import Link from "next/link";
import React,{useState,useEffect} from "react";
import { FormattedMessage } from 'react-intl';
import { HomeIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";

import DashboardOffers from "@/components/DashboardOffers";
const Dashboard = () => {
  const searchvalue=useSelector((state)=>state.SearchOffers.value)
  const user=useSelector((state)=>state?.auth?.user)
  const [likedDeals,setLikedDeals]=useState([])
  const [likedVouchers,setlikedVouchers]=useState([])
  
  const [sharedDeals,setSharedDeals]=useState([])
  const [sharedVouchers,setSharedVouchers]=useState([])

  const [savedDeals,setSavedDeals]=useState([])
  const [savedVoucher,setSavedVoucher]=useState([])

  const navOptions = ["Shared", "Liked", "Saved"];
  const [currentSelected,setcurrentSelected]=useState("Shared")
  const[items,setItem]=useState([])
  useEffect(()=>{
    if(searchvalue==""){
      if(currentSelected=="Shared"){
        setItem(sharedDeals)
      }else if(currentSelected=="Liked"){
        setItem(likedDeals)
      }else{
        setItem(savedDeals)
      }
      
    }else{
      if(currentSelected=="Shared"){
        let newItem=sharedDeals.filter((item)=>item.title.includes(searchvalue))
        setItem(newItem)
      }else if(currentSelected=="Liked"){
        let newItem=likedDeals.filter((item)=>item.title.includes(searchvalue))
        setItem(newItem)
      }else{
        let newItem=savedDeals.filter((item)=>item.title.includes(searchvalue))
        setItem(newItem)
      }
     
      
    }
  },[searchvalue,currentSelected])
 useEffect(()=>{
  const getData=async()=>{
    let token=JSON.parse( localStorage.getItem("token"))
    const axios = require("axios");
    let url=`${process.env.NEXT_PUBLIC_API_URL}/users/liked`
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.request(config).then((response) => {
     setLikedDeals(response.data.likedDeals)
      setlikedVouchers(response.data.likedVouchers)
      
    })
    .catch((error) => {
      console.log(error);
    });
    config.url=`${process.env.NEXT_PUBLIC_API_URL}/users/shared`
    axios.request(config).then((response) => {
     setSharedDeals(response.data.sharedDeals)
     setSharedVouchers(response.data.sharedDeals)
     setItem(response.data.sharedDeals)
     })
     .catch((error) => {
       console.log(error);
     });
     config.url=`${process.env.NEXT_PUBLIC_API_URL}/users/saved`
     axios.request(config).then((response) => {
      setSavedDeals(response.data.savedDeals)
      setSavedVoucher(response.data.savedVouchers)
      
     })
     .catch((error) => {
       console.log(error);
     });
  }
  getData()
 },[])
  return (
 <>
 <div className="relative bg-secondary">
    <div className="bg-[#5A0064] h-[185px]">
      <div className="max-w-7xl pt-20 mx-auto  ">
      
      <div className="pl-5 pt-0 w-full ">
      <div className="w-full flex gap-1 items-center">
        <HomeIcon className="h-4 w-4  mx-1 text-white" />
        <p className="text-sm text-white">{`> ${user?.username}`}</p>
      </div>
      </div>
      <div className="userImg mt-5 flex  gap-5 ml-4">
    <div className="w-32 h-32 border-white  shadow-md bg-white overflow-hidden rounded-[50%] " >
   
    {user?.image ?
   <img src={user?.image}/> 
  :
  <div className="w-32 h-32 text-lg bg-yellow-500 rounded-[50%] flex justify-center items-center">
{user?.username[0]}
    </div>
  }
    </div>
    <div>
    <p className="text-3xl text-white">{`${user?.username}`}</p>
    <p className="text-1xl text-white">Joined {`${(new Date(user.createdAt)).toISOString().slice(0, 10)}`}</p>
    </div>
    </div>
    </div>
 
    </div>
    <div className="mx-auto bg-white h-[100px] mb-10 pl-7 shadow-md ">
   
    </div>
    <div className="max-w-7xl mx-auto">
    <div className="w-full flex justify-center gap-3 ">
    {navOptions.map((option, index) => (
          <button
          key={index}
          className={`${
            currentSelected==option
              ? "bg-primary font-medium text-white"
              : "bg-secondary-dark hover:bg-secondary-darker"
          } border rounded-3xl px-4 pt-[6px] pb-[7px] text-sm border-gray-300`}
         onClick={()=>setcurrentSelected(option)}
        >
          <FormattedMessage id={option}/>
        </button>
        ))}
    </div>
   {(currentSelected=="Shared" && sharedDeals.length==0) &&
   <div className="w-full h-[120px] bg-white drop-shadow-md flex align-middle flex-col justify-center text-center mt-5" >
   <p className="text-2xl"><FormattedMessage id="NoPost"/> </p>
   <p><FormattedMessage id="try"/></p>
 </div>
   } 
   {(currentSelected=="Liked" && likedDeals.length==0) &&
   <div className="w-full h-[120px] bg-white drop-shadow-md flex align-middle flex-col justify-center text-center mt-5" >
   <p className="text-2xl"><FormattedMessage id="NoPost"/></p>
   <p><FormattedMessage id="try"/></p>
 </div>
   } 
   {(currentSelected=="Saved" && savedDeals.length==0) &&
   <div className="w-full h-[120px] bg-white drop-shadow-md flex align-middle flex-col justify-center text-center mt-5" >
   <p className="text-2xl"><FormattedMessage id="NoPost"/></p>
   <p><FormattedMessage id="try"/></p>
 </div>
   } 
      <div className="mt-5">
      <DashboardOffers 
    items={items}/>
      </div>
   
    </div>
    </div>
 </>
  )
} 

export default Dashboard