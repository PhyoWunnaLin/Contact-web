import React from "react";
import { useState } from "react";
import { BsFillPeopleFill, BsFillTelephoneFill } from "react-icons/bs";

const NameInput = ({ setName, name }) => {
  const [more, setMore] = useState("false");

  return (
    <div className="flex justify-around">
      <div>
        <BsFillPeopleFill
          onClick={() => {
            setMore(!more);
          }}
        />
      </div>
      <div>
        <div className=" flex justify-between items-center ">
          <div className="  flex flex-col justify-center items-center gap-4 ">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-[300px]  rounded-lg bg-blue-50 transition-transform px-6  py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className=" w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-200 outline-none text-blue-950 scale-1 hover:scale-105"
              type="text"
              placeholder="Last Name"
            />
            <input
              className={` w-[300px] ${
                more ? "hidden" : "block"
              }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105`}
              type="text"
              placeholder="Middle Name"
            />
            <input
              className={`  w-[300px] hover:shadow-sm ${
                more ? "hidden" : "block"
              } rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-300 outline-none text-blue-950 scale-1 hover:scale-105`}
              type="text"
              placeholder="NickName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameInput;
