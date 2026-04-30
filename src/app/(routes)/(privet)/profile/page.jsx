'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const page = () => {
     const userData = authClient.useSession();
     const user = userData.data?.user;
     console.log(user)

  return (
    <div className="bg-gray-300">
      <div className="flex justify-center items-center py-4  md:py-50">
        <div className="card w-96 bg-base-100 shadow-2xl border border-gray-200">
          <figure className="px-10 pt-10">
            <Image
              src={user?.image}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover border-4 border-primary"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>

            <div className="divider w-full"></div>

            <div className="card-actions w-full">
              <button className="btn btn-primary btn-block">
                Update Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
