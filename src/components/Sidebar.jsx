import React, { useState } from "react";
import { TiUser } from "react-icons/ti";
import { TbClockPause } from "react-icons/tb";
import { BsFillInboxesFill } from "react-icons/bs";
import { SlMagicWand } from "react-icons/sl";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { BsFillSendPlusFill } from "react-icons/bs";

const Sidebar = ({open}) => {
  const [active, setActive] = useState("contacts");
  return (
    <div>
      <div
        className={`w-64 shadow-lg h-screen flex flex-col gap-5 pt-5 fixed transition-all z-auto duration-300 ease-in ${open ? " left-0 opacity-100" : "left-[-150px] opacity-0"}`}
      >
        <div className="flex items-center gap-3">
          <p>
            <BsFillSendPlusFill className="ml-2 text-2xl text-cyan-500" />
          </p>
          <button className="px-7  bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-3xl shadow-md duration-500">
            Create Contact
          </button>
        </div>
        <div>
          <p
            onClick={() => setActive("contacts")}
            className={` hover:bg-teal-50 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
              active == "contacts" ? " text-teal-500 text-base bg-teal-50" : ""
            }`}
          >
            <TiUser className=" mr-4" />
            Contact
          </p>
          <p
            onClick={() => setActive("frequent")}
            className={` hover:bg-teal-50 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
              active == "frequent"
                ? " text-teal-500 text-[16px] bg-teal-50"
                : ""
            }`}
          >
            <TbClockPause className=" mr-4" />
            Frequent
          </p>
          <p
            onClick={() => setActive("otherContacts")}
            className={` hover:bg-teal-50 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
              active == "otherContacts"
                ? " text-teal-500 text-[16px] bg-teal-50"
                : ""
            }`}
          >
            <BsFillInboxesFill className=" mr-4" />
            Other contacts
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-3 ">
          <h2 className="pl-8 text-[17px] font-medium tracking-wide">
            Fix & manage
          </h2>
          <div>
            <p
              onClick={() => setActive("fix")}
              className={` hover:bg-teal-50 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
                active == "fix" ? " text-teal-500 text-[16px] bg-teal-50" : ""
              }`}
            >
              <SlMagicWand className=" mr-4" />
              Merge & fix
            </p>
            <p
              onClick={() => setActive("trash")}
              className={` hover:bg-teal-50 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
                active == "trash" ? " text-teal-500 text-[16px] bg-teal-50" : ""
              }`}
            >
              <IoMdTrash className=" mr-4" />
              Trash
            </p>
          </div>
          <div className="flex pl-2 items-center">
            <button className="flex items-center shadow hover:shadow-lg bg-white hover:bg-red-50 hover:text-red-500  duration-500  text-gray-700 px-5 py-1 rounded-3xl border">
              <MdOutlineLogout className=" mr-4" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
