import React from "react";
import {BsSendPlusFill} from "react-icons/bs";

const UserInfo = () => {
  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="w-[80%] shadow-md p-5">
        <div className=" p-1 flex items-center gap-8">
          <div className=" p-12 bg-emerald-800 w-40 flex justify-center items-center rounded-full">
            <p className=" text-6xl font-medium text-white">K</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-2xl font-medium tracking-wide">Babe</p>
            <p className=" border rounded-xl cursor-pointer hover:shadow-md hover:bg-gray-50 duration-500 border-gray-400 flex items-center px-3 gap-3 justify-center py-1 font-medium"><BsSendPlusFill className=" text-sky-800"/> Label</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
