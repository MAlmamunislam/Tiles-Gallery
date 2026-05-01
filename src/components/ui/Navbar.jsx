"use client";
import React from "react";
import logo from "@/assets/image/logo.png";
import avatar from "@/assets/image/man.png";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

import { LuLayoutGrid } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const pathname = usePathname();

  const router = useRouter();
  const handleLogOut = async () => {
    const { data, error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
    if (!error) {
      toast.success("You have been logged out successfully");
    }
  };
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const links = (
    <>
      <Link
className={`text-white flex items-center gap-2 rounded-md transition-colors md:hover:bg-transparent hover:bg-[#af875a] font-serif ${
  pathname === "/" ? "border-2 p-2 rounded-md border-[#af875a]" : ""
}`}
        href={"/"}
      >
        <IoHome /> Home
      </Link>
      <Link
       className={`text-white flex items-center gap-2 rounded-md transition-colors md:hover:bg-transparent hover:bg-[#af875a] font-serif ${
  pathname === "/tiles" ? "border-2 p-2 rounded-md border-[#af875a]" : ""
}`}
        href={"/tiles"}
      >
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
      <div className=" md:mr-5">
        {/* Dropdown Section */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-20 rounded-full  border-gray-500 border-4">
              <Image
                src={user?.image ? user.image : avatar}
                referrerPolicy="no-referrer"
                width={1000}
                height={1000}
                alt="user image"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0d1f30] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-700"
          >
            <li className="md:hidden ">{links}</li>

            <hr className="md:hidden my-1 border-gray-600" />
            {user ? (
              <div>
                <li>
                  <Link
                    className=" gap-2 hover:bg-[#af875a]  font-serif"
                    href={"/profile"}
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogOut}
                    className="gap-2 hover:bg-[#af875a] font-serif w-full text-left"
                  >
                    Log Out
                  </button>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link
                    className="gap-2 hover:bg-[#af875a] font-serif w-full text-left"
                    href={"/signup"}
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    className="gap-2 hover:bg-[#af875a] font-serif w-full text-left"
                    href={"/login"}
                  >
                    Log In
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
