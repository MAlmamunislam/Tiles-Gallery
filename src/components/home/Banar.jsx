import React from "react";
import banarImg from "@/assets/image/img-1.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const Banar = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
      <Image
        src={banarImg}
        alt=" Tiles Banner"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight">
              Discover Your <br />
              <span className="text-[#af875a]">Perfect Aesthetic</span>
            </h1>

            <p className="text-gray-200 mt-6 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              Explore our curated collection of premium tiles that transform
              spaces into masterpieces.
            </p>

            <button className="mt-8 bg-[#af875a] hover:bg-[#96734d] text-white px-8 py-3 rounded-md flex items-center gap-2 text-lg transition-all duration-300 shadow-lg">
              <FiSearch size={20} />
              Browse Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
