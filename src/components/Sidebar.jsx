import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { TbClockPause } from "react-icons/tb";
import { BsFillInboxesFill } from "react-icons/bs";
import { SlMagicWand } from "react-icons/sl";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { BsFillSendPlusFill } from "react-icons/bs";
import ContactTable from "./ContactTable";
import { useLogoutMutation } from "../redux/api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { removeUserFromCookie } from "../redux/services/authSlice";
import { Loader } from '@mantine/core';

const Sidebar = ({ open }) => {
  const [active, setActive] = useState("contacts");
  const [show, setShow] = useState(<ContactTable />);
  const [logout, { isLoading }] = useLogoutMutation();
  const token = Cookies.get("token");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    const { data } = await logout(token);
    if (data?.success) {
      dispatch(removeUserFromCookie());
      nav("/login");
    }
  };

  return (
    <>
      <div
        className={` bg-gray-50 w-64 shadow-lg h-screen flex flex-col gap-5 pt-5 fixed transition-all z-[100] duration-300 ease-in ${
          open ? " left-0 opacity-100" : "left-[-150px] opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <p>
            <BsFillSendPlusFill className="ml-2 text-2xl text-cyan-500" />
          </p>
          <Link to={"/createContact"}>
            <button className="px-7  bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-3xl shadow-md duration-500">
              Create Contact
            </button>
          </Link>
        </div>
        <div>
          <p
            onClick={() => {
              setActive("contacts");
              setShow(<ContactTable />);
            }}
            className={` hover:bg-blue-100 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
              active == "contacts" ? " text-sky-700 text-base bg-blue-200" : ""
            }`}
          >
            <TiUser className=" mr-4" />
            Contact
          </p>
          <p
            onClick={() => setActive("frequent")}
            className={` hover:bg-blue-100 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
              active == "frequent"
                ? " text-sky-700 text-[16px] bg-blue-200"
                : ""
            }`}
          >
            <TbClockPause className=" mr-4" />
            Frequent
          </p>
          <p
            onClick={() => setActive("otherContacts")}
            className={` hover:bg-blue-100 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
              active == "otherContacts"
                ? " text-sky-700 text-[16px] bg-blue-200"
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
              className={` hover:bg-blue-100 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
                active == "fix" ? " text-sky-700 text-[16px] bg-blue-200" : ""
              }`}
            >
              <SlMagicWand className=" mr-4" />
              Merge & fix
            </p>
            <p
              onClick={() => setActive("trash")}
              className={` hover:bg-blue-100 duration-200 flex text-[14px] cursor-pointer items-center pl-8 p-2 rounded-r-3xl  ${
                active == "trash" ? " text-sky-700 text-[16px] bg-blue-200" : ""
              }`}
            >
              <IoMdTrash className=" mr-4" />
              Trash
            </p>
          </div>
          <div className="flex pl-2 items-center">
            <button
              disabled={isLoading && true}
              onClick={logoutHandler}
              className="flex items-center shadow hover:shadow-md bg-white hover:bg-red-50 hover:text-red-500  duration-500  text-gray-700 px-5 py-1 rounded-3xl border"
            >
              {isLoading ? (
                  <Loader color="red" size="xs" className="mr-4"/>
              ) : (
                  <MdOutlineLogout className=" mr-4" />
              )}
              Log Out
            </button>
          </div>
        </div>
      </div>
      {show}
    </>
  );
};

export default Sidebar;
