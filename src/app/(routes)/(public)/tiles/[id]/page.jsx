import Image from "next/image";
import Link from "next/link";
import React from "react";
const fetchData = async () => {
  const getPromise = await fetch(
    "https://tiles-gallery-omega.vercel.app/tiles.json",
  );
  const data = await getPromise.json();
  return data;
};

const DetaisCard = async ({ params }) => {
  const tiles = await fetchData();
  const { id } = await params;
  const targedTiles = tiles.find((t) => t.id === id);

//   console.log(targedTiles);
  return (
    <div className="bg-amber-50 p-50" >
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-[30px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row ">
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <Image
            src={targedTiles.image}
            width={1000}
            height={1000}
            alt=  {targedTiles?.title}
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-5 left-5 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
            {targedTiles.material}
          </div>
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-black text-gray-800 ">
            {targedTiles?.title}
            </h1>
          </div>

          <p className="text-gray-500  text-sm">
          {targedTiles?.description}
          </p>

          <div className="my-8 space-y-3">
            <div className="flex items-center text-gray-600">
              <span className="w-24 font-semibold text-xs uppercase text-gray-400">
                Dimensions
              </span>
              <span className="text-sm font-medium">{targedTiles?.dimensions}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="w-24 font-semibold text-xs uppercase text-gray-400">
                Material
              </span>
              <span className="text-sm font-medium">{targedTiles.material}</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="w-24 font-semibold text-xs uppercase  text-gray-400 ">
                Status
              </span>
              <span className="text-sm font-bold">In Stock</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-50">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Price
              </p>
              <h2 className="text-3xl font-extrabold text-blue-600 leading-none">
                ${targedTiles.price}
              </h2>
            </div>

            <Link href={'/tiles'}><button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-gray-200 hover:cursor-pointer">
             Go Back
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaisCard;
