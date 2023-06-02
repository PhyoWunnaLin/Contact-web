import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
const EmailPhoneAddress = ({ setEmail, setPhone, email, phone }) => {
  const [moreJob, setMoreJob] = useState("false");

  return (
    <div className=" flex gap-3 flex-col">
      {/* Email */}
      <div className=" flex justify-around items-center ">
        <div>
          <AiTwotoneMail />
        </div>
        <div>
          <div className=" flex justify-between ">
            <div className="  flex flex-col justify-center items-center gap-4 ">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105"
                type="Email"
                placeholder="Email"
                required
              />
            </div>
          </div>
        </div>
      </div>
      {/* Phone */}
      <div className=" flex justify-around items-center ">
        <div>
          <BsFillTelephoneFill
            onClick={() => {
              setMoreJob(!moreJob);
              console.log(moreJob);
            }}
          />
        </div>
        <div>
          <div className=" flex justify-between ">
            <div className="  flex flex-col justify-center items-center gap-4 ">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=" w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-200 outline-none text-blue-950 scale-1 hover:scale-105"
                type="number"
                placeholder="phone"
                required
              />
            </div>
          </div>
        </div>
      </div>
      {/* birthday */}
      <div className=" flex justify-around items-center ">
        <div>
          <FaBirthdayCake />
        </div>
        <div>
          <div className=" flex justify-between ">
            <div className="  flex flex-col justify-center items-center gap-4 ">
              <input
                className="w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105"
                type="text"
                placeholder="Birthday"
              />
            </div>
          </div>
        </div>
      </div>
      {/* note */}
      <div className=" flex justify-around items-center ">
        <div>
          <SlNote />
        </div>
        <div>
          <div className=" flex justify-between ">
            <div className="  flex flex-col justify-center items-center gap-4 ">
              <input
                className="w-[300px]   rounded-lg bg-blue-50 placeholder-blue-200 transition-transform px-6 py-2  outline-none text-blue-950 scale-1 hover:scale-105"
                type="text"
                placeholder="Note"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPhoneAddress;
