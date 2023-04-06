import { logoutUser } from "@/redux/auth/action-creators";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Link from "next/link";
const UserButton = ({ user }) => {
 
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  
  const handleLogOut = () => {
    dispatch(logoutUser(user));
  }
  return (
    <div className="pl-2 border-l border-gray-400 lg:order-4 flex items-center relative">
      <button
        className="bg-danger rounded-full flex justify-center items-center p-2 w-10 h-10"
        onClick={() => setShowOptions(!showOptions)}
      >
        {user.username?.slice(0,1).toUpperCase()}
      </button>
      {showOptions && (
        <div className="absolute top-12 right-0">
          <div className="bg-white rounded-lg shadow-lg w-48">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="flex flex-col w-full">
                <Link href="/dashboard">
                <p className="text-sm font-semibold p-4 pb-2 cursor-pointer">
                    Hello, {user.username}
                  </p>
                  </Link>
                 
                  <button className="text-xs text-gray-500 w-full text-left hover:bg-secondary pt-0 px-3 pb-4" onClick={()=>handleLogOut()}>
                    <span className="border-t border-gray-200 w-full block pt-3 px-2">
                      <FormattedMessage id="LogOut"/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;
