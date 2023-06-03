import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { RxCross2, RxCross1 } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineQuestionCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { setSearchTerm } from "../redux/services/contactSlice";
import Cookies from "js-cookie";

const Navbar = () => {
  const [searchOnclick, setSearchOnClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const user = JSON.parse(Cookies.get("user"))
  // console.log(user)
  return (
    <>
      <div className=" bg-gray-50 flex justify-between gap-5 items-center px-2 sm:px-5 border h-20">
        <div
          className={` absolute transition-all z-auto duration-300 ease-in ${
            searchOnclick
              ? "top-4 opacity-100 sm:hidden "
              : "top-[-100px] opacity-0"
          }`}
        >
          <div className={` max-[500px]:w-[250px] max-[460px]:w-[200px] max-[400px]:w-[150px] w-[300px] h-[50px] flex gap-3 border items-center rounded-lg bg-gray-100`}>
            <AiOutlineSearch className=" text-gray-600 text-[25px] ml-3"></AiOutlineSearch>
            <input onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
                type="text"
                placeholder="Search"
                className=" bg-gray-100 flex-1 outline-none border-none relative w-[20px] "
              />
              <RxCross2
                onClick={() => setSearchOnClick(!searchOnclick)}
                className={` ${
                  searchOnclick ? "block" : "block"
                } sm:hidden block text-gray-600 cursor-pointer text-[20px] ml-3 absolute right-0 top-[0]`}
              />
          </div>
        </div>

        <div
          className={`flex ${
            searchOnclick ? "hidden sm:flex" : "block"
          }  flex items-center sm:gap-4 gap-2 max-[400px]:w-[150px]`}
        >
          <div className=" hover:bg-gray-200 rounded-full p-2 duration-500">
            {open ?(
                <RxCross1
                onClick={() => setOpen(!open)}
                className={` ${
                  open ? "block" : "block"
                } text-2xl cursor-pointer text-gray-600"]`}
              />
              ) : (
                <RxHamburgerMenu
              onClick={() => setOpen(!open)}
              className="text-2xl cursor-pointer text-gray-600"
            />
              )}
            
          </div>
          <div className=" flex items-center gap-4">
            <RiContactsBook2Fill className=" sm:block hidden text-[50px] text-blue-500"></RiContactsBook2Fill>
            <h1 className=" text-2xl text-gray-600 max-[380px]:in">Contacts</h1>
          </div>
        </div>

        <div>
          <div className=" sm:block hidden">
            <div className=" lg:w-[550px] md:w-[325px] sm:w-[208px] h-[50px] rounded-lg border bg-gray-100 flex gap-3 items-center">
              <div className="ml-3 bg-gray-200 rounded-full p-2 duration-500">
                <AiOutlineSearch className=" text-gray-600 text-[20px]"></AiOutlineSearch>
              </div>
              <input onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
                type="text"
                placeholder="Search"
                className=" bg-gray-100 flex-1 outline-none border-none pl-5 relative w-[20px] "
              />
            </div>
          </div>
        </div>

        <div>
          <div className=" flex gap-2 max-[400px]:gap-5  items-center">
            {/* {searchOnclick ? (
              <RxCross2
                onClick={() => setSearchOnClick(!searchOnclick)}
                className={` ${
                  searchOnclick ? "block" : "block"
                } sm:hidden block text-gray-600 cursor-pointer text-[25px] ml-3`}
              />
            ) : ( */}
              <AiOutlineSearch
                onClick={() => setSearchOnClick(true)}
                className={` ${
                  searchOnclick ? "hidden" : "block"
                } sm:hidden block text-gray-600 cursor-pointer text-[25px] ml-3`}
              ></AiOutlineSearch>
            {/* )} */}
            <div className="max-[400px]:hidden hover:bg-gray-200 rounded-full p-2 duration-500">
              <AiOutlineQuestionCircle className=" text-[20px] cursor-pointer text-gray-600"></AiOutlineQuestionCircle>
            </div>
            <div className="max-[400px]:hidden hover:bg-gray-200 rounded-full p-2 duration-500">
              <MdSettings className=" text-[20px] cursor-pointer text-gray-600"></MdSettings>
            </div>
            <div className=" cursor-pointer sm:ml-2 ml-1 bg-[#ff7043] flex justify-center items-center w-[40px] h-[40px] rounded-full border">
              <p className=" text-lg text-white font-bold">{user.name.substr(0,1).toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
      <Sidebar open={open} />
    </>
  );
};

export default Navbar;
