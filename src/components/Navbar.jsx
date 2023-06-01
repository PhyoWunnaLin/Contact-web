import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineQuestionCircle } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [searchOnclick, setSearchOnClick] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-gray-50 flex justify-between gap-5 items-center px-5 border py-5">
        <div
          className={` absolute transition-all z-auto duration-300 ease-in ${
            searchOnclick
              ? "top-5 opacity-100 sm:hidden "
              : "top-[-100px] opacity-0"
          }`}
        >
          <div
            className={` w-[200px] h-[50px] flex gap-3 border items-center rounded-lg bg-gray-100`}
          >
            <AiOutlineSearch className=" text-gray-600 text-[25px] ml-3"></AiOutlineSearch>
            <p className=" text-gray-400 text-sm ">Search</p>
          </div>
        </div>

        <div
          className={` ${
            searchOnclick ? "hidden sm:flex" : "block"
          }  flex items-center gap-4`}
        >
          <div className=" hover:bg-gray-200 rounded-full p-2 duration-500">
            <RxHamburgerMenu
              onClick={() => setOpen(!open)}
              className="text-2xl cursor-pointer text-gray-600"
            />
          </div>
          <div className=" flex items-center gap-4">
            <RiContactsBook2Fill className=" sm:block hidden text-[50px] text-blue-500"></RiContactsBook2Fill>
            <h1 className=" text-2xl text-gray-600">Contacts</h1>
          </div>
        </div>

        <div>
          <div className=" sm:block hidden">
            <div className=" lg:w-[600px] md:w-[400px] sm:w-[250px] h-[50px] rounded-lg border bg-gray-100 flex gap-3 items-center">
              <div className="ml-3 bg-gray-200 rounded-full p-2 duration-500">
                <AiOutlineSearch className=" text-gray-600 text-[25px]"></AiOutlineSearch>
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" bg-gray-100 flex-1 outline-none border-none"
              />
            </div>
          </div>
        </div>

        <div>
          <div className=" flex sm:gap-5 items-center">
            {searchOnclick ? (
              <RxCross2
                onClick={() => setSearchOnClick(!searchOnclick)}
                className={` ${
                  searchOnclick ? "block" : "block"
                } sm:hidden block text-gray-600 cursor-pointer text-[25px] ml-3`}
              />
            ) : (
              <AiOutlineSearch
                onClick={() => setSearchOnClick(!searchOnclick)}
                className={` ${
                  searchOnclick ? "block" : "block"
                } sm:hidden block text-gray-600 cursor-pointer text-[25px] ml-3`}
              ></AiOutlineSearch>
            )}
            <div className=" hover:bg-gray-200 rounded-full p-2 duration-500">
              <AiOutlineQuestionCircle className=" text-[20px] cursor-pointer text-gray-600"></AiOutlineQuestionCircle>
            </div>
            <div className=" hover:bg-gray-200 rounded-full p-2 duration-500">
              <MdSettings className=" text-[20px] cursor-pointer text-gray-600"></MdSettings>
            </div>
            <div className="sm:ml-2 ml-1 bg-[#ff7043] flex justify-center items-center w-[40px] h-[40px] rounded-full border">
              <p className=" text-lg text-white font-bold">K</p>
            </div>
          </div>
        </div>
      </div>
      <Sidebar open={open} />
    </>
  );
};

export default Navbar;
