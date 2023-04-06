import { setFormType, setShowJoinModal } from "@/redux/joinModalSlice";
import { UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import { FormattedMessage } from 'react-intl';
const JoinButton = ({
  title,
  showIcon = true,
  textHiddenInSmallScreen = false,
}) => {
  const showJoinModal = useSelector((state) => state.showJoinModal.value);
  const formType = useSelector((state) => state.showJoinModal.formType);
  const dispatch = useDispatch();
  return (
    <div className="lg:order-4">
      <button
        className="w-fit px-3 py-[10px] bg-danger hover:bg-danger-dark rounded-lg flex items-center justify-between lg:space-x-1"
        onClick={() => dispatch(setShowJoinModal(true))}
      >
        <p
          className={`text-sm font-semibold ${
            textHiddenInSmallScreen ? "hidden lg:block" : null
          }`}
        >
          {title}
         
         
        </p>
        {showIcon && <UserPlusIcon className="h-4 w-4 lg:block" />}
      </button>
      {showJoinModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center max-w-[360px] space-y-3">
              {/*content*/}
              <button
                className="self-end"
                onClick={() => dispatch(setShowJoinModal(false))}
              >
                <XMarkIcon className="h-5 w-5 text-black" />
              </button>
              <Image
                src="/logoicon.png"
                alt="logo"
                width={32}
                height={50}
                className="my-1"
              />
              <div className="font-bold text-3xl text-center leading-8 mb-3">
                {formType == "signup" ?<FormattedMessage id="Join"/>  : <FormattedMessage id="Login"/>}
              </div>
              <div className="text-gray-500 font-bold text-center leading-4 mb-3">
              <FormattedMessage id="GetDealFound"/>
                <br />
                <FormattedMessage id="realPeople"/>
              </div>
              <button className="bg-[#1877F2] text-white font-bold py-2 w-[274px] rounded-lg">
              <FormattedMessage id="ContinueWithFb"/>
              </button>
              <div className="text-center font-medium">Or</div>
              {formType == "login" && <LoginForm />}
              {formType == "signup" && <SignupForm />}
              <small className="text-[10px] text-gray-400 w-[274px] text-center mx-4">
              <FormattedMessage id="ContinueAgree"/> <b><FormattedMessage id="Terms&Condition"/></b> <FormattedMessage id="and"/>{" "}
                <b><FormattedMessage id="PrivacyPolicy"/> </b>
                <FormattedMessage id="newsletter"/>
              </small>
              <button
                className={`text-gray-400 font-bold ${
                  formType == "login" ? "hidden" : null
                }`}
                onClick={() => dispatch(setFormType("login"))}
              >
                <FormattedMessage id="alreadyMember"/>
               
              </button>
              <button
                className={`text-gray-400 font-bold ${
                  formType == "signup" ? "hidden" : null
                }`}
                onClick={() => dispatch(setFormType("signup"))}
              >
                <FormattedMessage id="notjoined"/>
              </button>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default JoinButton;
