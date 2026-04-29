import React from "react";
import logo from "@/assets/image/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

import { LuLayoutGrid } from "react-icons/lu";

const Navbar = () => {
  const links = (
    <>
      <Link
        className="text-white flex items-center gap-2  rounded-md transition-colors md:hover:bg-transparent hover:bg-[#af875a]  font-serif "
        href={"/"}
      >
        {" "}
        <IoHome /> Home
      </Link>
      <Link
        className="text-white flex items-center gap-2 font-serif rounded-md transition-colors md:hover:bg-transparent hover:bg-[#af875a] "
        href={"/tiles"}
      >
        {" "}
        <LuLayoutGrid /> All Tiles{" "}
      </Link>
    </>
  );
  return (
    <div className="navbar bg-[#0d1f30] shadow-sm px-4  flex justify-between items-center">
      {/* 1. Logo Section */}
      <div className="flex items-center gap-2 md:ml-5 ">
        <Image src={logo} alt="logo pic" width={70} height={70} />
        <div className="">
          <h2 className="text-white text-xl font-serif md:text-3xl font-semibold">
            Tiles <span className="text-[#af875a] ">Gallery</span>
          </h2>
          <p className="text-white text-mdfont-serif">CURATE YOUR SPACE</p>
        </div>
      </div>

      {/* 2. desktop Menu */}
      <div className="hidden md:flex gap-8">{links}</div>

      {/* 3. search & Profile Section */}
      <div className=" md:mr-5">
        {/* Dropdown Section */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full  border-gray-500 border-4">
              <img
                alt="User Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0d1f30] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-700"
          >
            {/* মোবাইলে মেনুগুলো এখানে দেখাবে (md:hidden) */}
            <li className="md:hidden ">{links}</li>

            <hr className="md:hidden my-1 border-gray-600" />

            {/* সাধারণ প্রোফাইল অপশন */}
            <li>
              <a className="justify-between hover:bg-[#af875a]">Profile</a>
            </li>

            <li>
              <a className="hover:bg-[#af875a]">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
