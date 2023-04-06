import React,{useState,useEffect} from 'react'
import TopOffer from './Cards/TopOffer'
import { getCookie } from "cookies-next";
import {ColorRing} from 'react-loader-spinner'
import { useRouter } from "next/router";
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
const WeekTopOffers = ({headTitle}) => {
  const router = useRouter();
  const[offers,setoffers]=useState([])
  const[deals,setdeals]=useSelector((state)=>state.offers.deals)
  const[vouchers,setvouchers]=useSelector((state)=>state.offers.vouchers)
  const[Loader,setLoader]=useState(false);
useEffect(()=>{
  const getDeals=async()=>{
    let dealsArr=[]
    const token = getCookie("token");
    const headers={
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
 let response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deals/top-deals`,{
      method: "GET",
      headers:headers,
    
    }).then((response)=>response.json())
    .then((deals)=>{
     
  
      dealsArr=deals.deals
     
    return deals.deals
    })
   
 return response
  }
  const getVouchers=async()=>{
    let dealsArr=[]
    const token = getCookie("token");
    const headers={
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
 let response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vouchers/`,{
      method: "GET",
      headers:headers,
    
    }).then((response)=>response.json())
    .then((vouchers)=>{
     
  console.log(vouchers)
      dealsArr=vouchers?.vouchers
     
    return vouchers.vouchers
    })
   
 return response
  }
 const getOffers=async()=>{
  if(headTitle == "Deals"){
    setLoader(true)
    let r= await getDeals()
    setoffers(r)
    if(r){
      setLoader(false)
    }
 
  }else if(headTitle==="Vouchers"){
    setLoader(true)
    let r= await getVouchers()
    setoffers(r)
    if(r){
      setLoader(false)
    }
  }else{
    setLoader(true)
    let r= await getDeals()
    let r2= await getVouchers()
    
    if(r && r2){
      setoffers([...r,...r2])
      setLoader(false)
    }
  }
 }
 

 getOffers();
},[])
const handleClick=(id)=>{
if(headTitle == "Deals" || headTitle == "/" ){
  router.push(`/deals/${id}`)
}else{
  router.push(`/vouchers/${id}`)
}
  
}
  return ( 
    <div className='py-2'> 
        <p className="font-medium text-sm"> 
        <FormattedMessage id="WeekTopOffer"/>
       </p>
        
{Loader && 
 <ColorRing
 visible={true}
 height="80"
 width="80"
 ariaLabel="blocks-loading"
 wrapperStyle={{}} 
 wrapperClass="blocks-wrapper"
 colors={['#5A0064']}
/>
}
<div className="flex flex-nowrap space-x-3 w-full scroll-smooth py-2 overflow-x-auto scrollbar">
  {offers?.map((item)=>{
    return(
<TopOffer handleClick={handleClick} id={item.id} title={item.title} image={item?.image?.path} likes={item.likes.length} />
    )
  })}
 
 
 </div>
       
    </div>
  )
}

export default WeekTopOffers