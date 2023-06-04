import React from "react";
import { useState } from "react";
import { BsPeople } from "react-icons/bs";

const NameInput = ({ setName, name }) => {
  const [more, setMore] = useState("false");

  return (
    <div className=" flex gap-3 flex-col">
      <div className="flex justify-center items-start gap-6  ">
        <div className="">
          <BsPeople
            className=" text-2xl text-pink-700 max-sm:text-xl"
            onClick={() => {
              setMore(!more);
            }}
          />
        </div>
        <div>
          <div className=" flex justify-between ">
            <div className="  flex flex-col justify-center items-center gap-4">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="lg:w-[300px] md:w-[300px] w-[250px]  rounded-lg bg-blue-50 transition-transform px-6  py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105"
                type="text"
                placeholder="First Name"
                required
              />

              <input
                className=" lg:w-[300px] md:w-[300px] w-[250px]   rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105"
                type="text"
                placeholder="Last Name"
              />
              <input
                className={`lg:w-[300px] md:w-[300px] w-[250px]  ${
                  more ? "hidden" : "block"
                }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105`}
                type="text"
                placeholder="Middle Name"
              />
              <input
                className={` lg:w-[300px] md:w-[300px] w-[250px]  hover:shadow-sm ${
                  more ? "hidden" : "block"
                } rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105`}
                type="text"
                placeholder="NickName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameInput;
