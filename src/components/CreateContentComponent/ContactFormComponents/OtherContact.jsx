import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
const OtherContact = ({ setAddress, address }) => {
  return (
    <div>
      <div className=" flex justify-around">
        <div>
          <FaBirthdayCake />
        </div>
        <div>
          <div className=" flex justify-between ">
            <div className="  flex flex-col justify-center items-center gap-4">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={` w-[300px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-300 outline-none text-blue-950 scale-1 hover:scale-105`}
                type="text"
                placeholder="Address"
              />
              {/* <input
                className={` w-[300px] ${
                  more ? "block" : "hidden"
                }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105`}
                type="text"
                placeholder="Street"
              />
              <input
                className={` w-[300px] ${
                  more ? "block" : "hidden"
                }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-300 outline-none text-blue-950 scale-1 hover:scale-105`}
                type="text"
                placeholder="City"
              />
              <input
                className={` w-[300px] ${
                  more ? "block" : "hidden"
                }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-blue-950 scale-1 hover:scale-105`}
                type="text"
                placeholder="Postal Code"
              />

              <input
                className={` w-[300px] ${
                  more ? "block" : "hidden"
                }  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-blue-300 outline-none text-blue-950 scale-1 hover:scale-105`}
                type="text"
                placeholder="Department"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherContact;
