import { setSelectedTab } from "@/redux/selectedTabSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from 'react-intl';
const SidebarButton = ({icon, title, setShowSidebar}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.selectedTab.value);
  const selected = selectedTab === title;

  const handleSelectedTab = () => {
    dispatch(setSelectedTab(title));
    if (title == "Home"){
      router.push("/");
    }
    else{
      router.push(`/${title.toLowerCase()}`);
    }
    setShowSidebar(false);
  }
  return (
    <button className="flex items-center space-x-2 w-full" onClick={()=>handleSelectedTab()}>
      <div className={`p-[5px] rounded-full ${selected ? "bg-primary text-white": "bg-secondary text-gray-600"}`}>
        {icon}
      </div>
      <p className={selected ? "text-primary": "text-black"}>
        
        <FormattedMessage id={title} />
        </p>
    </button>
  );
};

export default SidebarButton;
