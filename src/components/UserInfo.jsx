import React, { useEffect, useState } from "react";
import { BsSendPlusFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { LuCake } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import { TbInfoOctagon } from "react-icons/tb";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useGetUserInfoQuery } from "../redux/api/contactApi";
import '../css/user.css';

const UserInfo = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const { data, isLoading } = useGetUserInfoQuery({ id, token });
  const user = data?.contact; 

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  // Update window width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className=" bg-sky-600 text-white text-lg font-bold rounded px-5 py-1">
          Loading....
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className=" flex justify-center py-16 max-sm:py-0  sm:bg-blue-200 max-sm:bg-blue-100">
        <div className="w-[80%] max-sm:w-[100%] sm:shadow-lg sm:p-5 max-sm:py-5 flex justify-center rounded bg-blue-100 relative py-10">
          <Link to={"/"}>
            <div className=" absolute left-2 top-2 bg-blue-200 font-bold rounded-full p-2  hover:bg-gray-100 hover:shadow duration-500">
              <BsArrowLeft className=" text-xl cursor-pointer" />
            </div>
          </Link>
          <div className="w-[80%] lg:w-[95%] flex flex-col py-5 gap-10">
            <div className=" p-1 flex max-md:flex-col justify-between items-center gap-8">
              <div className="flex max-md:flex-col items-center gap-4">
                <div className=" p-12 bg-cyan-700 w-40 max-sm:w-32 max-sm:p-8 flex justify-center items-center rounded-full">
                  <p className=" text-6xl font-medium text-white ">
                    {user?.name.substr(0, 1).toUpperCase()}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className=" text-2xl font-medium max-md:mx-auto tracking-wide">
                    {user?.name}
                  </p>
                  <p className=" border rounded-xl cursor-pointer max-md:mx-auto hover:shadow-md hover:bg-gray-100 duration-500 border-gray-400 flex items-center px-3 gap-3 justify-center py-1 font-medium">
                    <BsSendPlusFill className=" text-teal-700" /> Label
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex gap-3 items-center">
                  <AiOutlineStar />
                  <BiDotsVerticalRounded />
                  <button className=" bg-teal-600 px-3 py-1 font-medium rounded text-white hover:bg-teal-700 hover:shadow-md duration-500">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <hr className=" my-3 border border-gray-300 mx-auto w-[100%]" />
              <div className=" flex gap-5 absolute z-100">
                <p className="border bg-gray-50 hover:shadow hover:bg-gray-200 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
                  <HiOutlineMail className=" text-teal-600 max-sm:text-sm" />
                </p>
                <p className="border bg-gray-50 hover:shadow hover:bg-gray-200 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
                  <AiOutlineSchedule className=" text-teal-600 max-sm:text-sm" />
                </p>
                <p className="border bg-gray-50 hover:shadow hover:bg-gray-200 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
                  <BiMessageRoundedDots className=" text-teal-600 max-sm:text-sm" />
                </p>
                <p className="border bg-gray-50 hover:shadow hover:bg-gray-200 text-xl cursor-pointer duration-500 border-gray-300 rounded-full p-2">
                  <HiOutlineMail className=" text-teal-600 max-sm:text-sm" />
                </p>
              </div>
            </div>
            <div className=" flex max-lg:flex-col max-lg:gap-7 gap-10">
              <div className="flex flex-col gap-3 border border-gray-300 rounded w-[100%] xl:w-[60%] p-3">
                <h2 className="font-medium text-lg">Contact Detail</h2>
                <div className="flex gap-3 items-center rounded overflow-hidden whitespace-nowrap text-ellipsis">
                  <MdOutlineMarkEmailRead className=" text-lg text-gray-500" />
                  {user?.email.length >= 20  && windowWidth <= 380 ? (
                <p className="tracking-wide text-sky-600 max-w-[160px]">
                  {user?.email.substr(0, 18)}...
                </p>
              ) : (
                <p className="tracking-wide text-sky-600">{user?.email}</p>
              )}
                </div>
                <div className="flex gap-3 items-center">
                  <HiOutlinePhone className=" text-lg text-gray-500" />
                  <p className=" tracking-wide  text-sky-600">{user?.phone}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <LuCake className=" text-lg text-gray-500" />
                  <p className=" tracking-wide  text-sky-600">December 19,1992</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FaRegAddressCard className=" text-lg text-gray-500" />
                  <p className=" tracking-wide  text-sky-600">{user?.address}</p>
                </div>
              </div>
              <div className="xl:w-[40%] w-[100%] flex flex-col gap-3 history">
                <div className=" flex items-center gap-4">
                  <p className=" text-lg font-medium">History</p>
                  <TbInfoOctagon className=" text-gray-500 text-lg" />
                </div>
                <div className=" flex responsive gap-1">
                  <p>Last edited :</p>
                  <p className=" text-gray-600">Yesterday, 9:43 PM</p>
                </div>
                <div className=" flex responsive gap-1">
                  <p>Added to contacts :</p>
                  <p className=" text-gray-600">Yesterday, 9:43 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
