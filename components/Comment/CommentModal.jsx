import React, { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import CommentInstance from "./CommentInstance";
import { getCookie } from "cookies-next";
import { useSelector } from "react-redux";
const CommentModal = ({ comments, offer, type,setcomments }) => {
 const user=useSelector((state)=>state.auth.user)
  const jwt = getCookie("token");

  const getComments = async () => {
    if (type == "deal") {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/deals/${offer._id}`
      );
      const deal = await res.json();
      setcomments(deal.deal.comments);
    } else if (type == "voucher") {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/vouchers/${offer._id}`
      );
      const voucher = await res.json();
      setcomments(voucher.voucher.comments);
    }
  };
  useEffect(() => {
    
    getComments();
  }, [offer._id, type]);
  const Like=async(commentid)=>{
    let headers= {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    }
    console.log(comments," ",user._id)
    const filteredComments = comments.filter((comment) => {
      return comment.likes.filter((likeUserId) => {
        return likeUserId === user._id;
      }).length > 0;
    });
   console.log(filteredComments,"ds")
    if(filteredComments.length>1){
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/offers/comments/like/${commentid}`,
        {
          method: "delete",
          headers:headers
          
        }
      ).then((response)=>response.json())
      .then((data)=>{
        getComments()
      })
    }else{
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/offers/comments/like/${commentid}`,
        {
          method: "post",
          headers:headers
          
        }
      ).then((response)=>response.json())
      .then((data)=>{
        getComments()
      })
    }
  
    
    
  }
  return (
    <div>
      <CommentInput id={offer._id} setcomments={setcomments}/>
      {comments && comments.map((comment) => (
        <CommentInstance comment={comment} key={comment._id} Like={Like} isLiked={comment.likes.includes(user._id)} />
      ))}
    </div>
  );
};

export default CommentModal;
