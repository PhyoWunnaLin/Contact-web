import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
const JobInput = () => {
  const [more, setMore] = useState("false");
  return (
    <div className=" flex justify-around">
      <div>
        <SlCalender
          onClick={() => {
            setMore(!more);
            console.log(more);
          }}
        />
      </div>
      <div>
        <div className=" flex justify-between items-center ">
          <div className="  flex flex-col justify-center items-center gap-4 ">
            <input
              className="w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105"
              type="text"
              placeholder="Company"
              required
            />
            <input
              className=" w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-200 outline-none text-blue-950 scale-1 hover:scale-105"
              type="text"
              placeholder="Job Title"
              required
            />
            <input
              className={` w-[300px]  ${
                more ? "hidden" : "block"
              }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105`}
              type="text"
              placeholder="Department"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInput;
