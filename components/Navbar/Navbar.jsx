import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  BeakerIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";
import NavbarButton from "../Buttons/NavbarButton";
import Searchbar from "../Searchbar";
import ShareButton from "../Buttons/ShareButton";
import JoinButton from "../Buttons/JoinButton";
import { useDispatch, useSelector } from "react-redux";
import UserButton from "../Buttons/UserButton";
import Link from "next/link";
import { FormattedMessage } from 'react-intl';
const Navbar = () => {
  const navOptions = ["Home", "Deals", "Vouchers", "News", "Contact", "About"];
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const user = useSelector((state) => state.auth?.user);
  return (
    <nav className="bg-primary py-3 flex justify-center items-center fixed w-full z-50">
      <div className="flex justify-between w-full max-w-7xl px-2 items-center space-x-3">
        <Sidebar navOptions={navOptions} className="lg:order-5" />
        <Searchbar className="lg:order-3" />
        <Link href="/">
        <div className="flex flex-grow w-full justify-center items-center lg:justify-start">
          <Image src="/logo.png" alt="logo" height={40} width={40} />
          <div className="ml-1 text-white font-bold text-lg">
            <FormattedMessage id="LogoTitle"/>
           </div>
        </div>
        </Link>
        <div className="hidden lg:flex justify-evenly items-center lg:order-2 space-x-3 flex-grow px-2">
          {navOptions.map((option, index) => (
            <NavbarButton title={option} key={index} />
          ))}
        </div>
        <ShareButton />
        {isLoggedIn ? (
          <UserButton user={user} />
        ) : (
          <JoinButton title={<FormattedMessage id="Join" />} textHiddenInSmallScreen={true} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
