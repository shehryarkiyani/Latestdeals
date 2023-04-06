import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/20/solid";
import {
  BoltIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  PaperClipIcon,
} from "@heroicons/react/24/solid";
import React, { useState,useEffect } from "react";
import SidebarButton from "../Buttons/SidebarButton";



const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="lg:hidden z-50">
      <div
        className="flex p-3 bg-primary-dark rounded-lg"
        onClick={() => setShowSidebar(true)}
      >
        <Bars3Icon className="h-4 w-4 text-white" />
      </div>
      <aside
        className={`w-screen absolute top-0 left-0 ${
          showSidebar ? "flex" : "hidden"
        }`}
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto bg-gray-50 h-screen w-[80%] px-3 py-5 space-y-4">
          <SidebarButton
            icon={<HomeIcon className="h-5 w-5" />}
            title="Home"
            setShowSidebar={setShowSidebar}
          />
          <SidebarButton
            icon={<BriefcaseIcon className="h-5 w-5" />}
            title="Deals"
            setShowSidebar={setShowSidebar}
          />
          <SidebarButton
            icon={<BoltIcon className="h-5 w-5" />}
            title="Vouchers"
            setShowSidebar={setShowSidebar}
          />
          <SidebarButton
            icon={<PaperClipIcon className="h-5 w-5" />}
            title="News"
            setShowSidebar={setShowSidebar}
          />
          <SidebarButton
            icon={<InformationCircleIcon className="h-5 w-5" />}
            title="About"
            setShowSidebar={setShowSidebar}
          />
          <SidebarButton
            icon={<EnvelopeIcon className="h-5 w-5" />}
            title="Contact"
            setShowSidebar={setShowSidebar}
          />
        </div>
        <div
          className="w-[20%] h-screen bg-[rgba(0,0,0,0.5)] flex justify-end items-start px-5 py-2"
          onClick={() => setShowSidebar(false)}
        >
          <div className="rounded-full p-2 bg-white">
            <XMarkIcon className="h-5 w-5 text-black" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
