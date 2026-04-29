import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@/assets/image/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#04111d] text-gray-300 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* 1. Brand Section - মোবাইলে দেখাবে */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src={logo} width={80} height={80} alt="log" ></Image>
            <h2 className="text-xl font-bold text-white tracking-wide">
              TileGallery
            </h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            We provide high-quality tiles that inspire and transform your living
            and working spaces.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaPinterestP, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#af875a] hover:border-[#af875a] transition-all cursor-pointer"
                >
                  <Icon size={14} className="text-white" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* 2. Quick Links - ছোট ডিভাইসে হিডেন থাকবে */}
        <div className="hidden md:block">
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "All Tiles", "My Profile", "Login", "Register"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center justify-between hover:text-[#af875a] cursor-pointer group"
                >
                  {item}{" "}
                  <IoIosArrowForward className="text-gray-500 group-hover:text-[#af875a]" />
                </li>
              ),
            )}
          </ul>
        </div>

        {/* 3. Categories - ছোট ডিভাইসে হিডেন থাকবে */}
        <div className="hidden lg:block">
          <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Ceramic Tiles",
              "Porcelain Tiles",
              "Marble Tiles",
              "Mosaic Tiles",
              "Natural Stone",
            ].map((item) => (
              <li key={item} className="hover:text-[#af875a] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Customer Care - ছোট ডিভাইসে হিডেন থাকবে */}
        <div className="hidden md:block">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Contact Us",
              "Shipping & Delivery",
              "Return Policy",
              "FAQ",
            ].map((item) => (
              <li key={item} className="hover:text-[#af875a] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Contact Us - মোবাইলে দেখাবে */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#af875a] mt-1" />
              <span>
                123 Design Street, <br /> Mymensing, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#af875a]" />
              <span>almamun@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#af875a]" />
              <span>+880 1994810914</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
        <p>© 2026 TileGallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
