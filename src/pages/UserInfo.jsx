import React from "react";
import { BsSendPlusFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const UserInfo = () => {
  return (
    <div className=" flex justify-center h-screen items-center">
      <div className="w-[80%] flex flex-col gap-5 shadow-md p-5">
        <div className=" p-1 flex justify-around items-center gap-8">
          <div className="flex items-center gap-4">
            <div className=" p-12 bg-emerald-800 w-40 flex justify-center items-center rounded-full">
              <p className=" text-6xl font-medium text-white">K</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-2xl font-medium tracking-wide">Babe</p>
              <p className=" border rounded-xl cursor-pointer hover:shadow-md hover:bg-gray-50 duration-500 border-gray-400 flex items-center px-3 gap-3 justify-center py-1 font-medium">
                <BsSendPlusFill className=" text-sky-800" /> Label
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex gap-3 items-center">
              <AiOutlineStar />
              <BiDotsVerticalRounded />
              <button className=" bg-sky-600 px-3 py-1 font-medium rounded text-white hover:bg-sky-700 hover:shadow-md duration-500">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex gap-5">
            <p className="border hover:bg-gray-100 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
              <HiOutlineMail className=" text-sky-800" />
            </p>
            <p className="border hover:bg-gray-100 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
              <HiOutlineMail className=" text-sky-800" />
            </p>
            <p className="border hover:bg-gray-100 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
              <HiOutlineMail className=" text-sky-800" />
            </p>
            <p className="border hover:bg-gray-100 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
              <HiOutlineMail className=" text-sky-800" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
