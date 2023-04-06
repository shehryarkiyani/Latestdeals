import { setSelectedTab } from "@/redux/selectedTabSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from 'react-intl';
const NavbarButton = ({ title }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.selectedTab.value);
  const router = useRouter();
  const handleClick = () => {
    if (title === "Home") {
      dispatch(setSelectedTab("Home"));
      router.push("/");
      return;
    }
    dispatch(setSelectedTab(title));
    router.push(`/${title.toLowerCase()}`);
  };
  useEffect(() => {
    if (router.pathname !== selectedTab && router.pathname !== "/") {
      dispatch(
        setSelectedTab(
          router.pathname.slice(1).charAt(0).toUpperCase() +
            router.pathname.slice(2)
        )
      );
    } else if (router.pathname == "/") {
      dispatch(setSelectedTab("Home"));
    }
  }, [dispatch, router.pathname, selectedTab]);
  return (
    <button
      className={`${
        selectedTab == title ? "text-danger" : "text-white"
      } hover:text-danger font-medium text-[16px] text-sm`}
      onClick={() => handleClick()}
    >
      
      <FormattedMessage id={title}/>
    </button>
  );
};

export default NavbarButton;
