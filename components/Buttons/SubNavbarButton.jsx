import { setSelectedTab } from "@/redux/selectedTabSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SubNavbarButton = ({ title,routeTitle }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.selectedTab.value);
  const selected = selectedTab === routeTitle;
  const router = useRouter();

  const handleClick = () => { 
    dispatch(setSelectedTab(routeTitle));
    if (routeTitle == "Home") {
      router.push("/");
    } else {
      router.push(`/${routeTitle?.toLowerCase()}`);
    }
  };
  return (
    <button
      className={`${
        selected
          ? "bg-primary font-medium text-white"
          : "bg-secondary-dark hover:bg-secondary-darker"
      } border rounded-3xl px-4 pt-[6px] pb-[7px] text-sm border-gray-300`}
      onClick={() => handleClick()}
    >
      {title}
    </button>
  );
};

export default SubNavbarButton;
