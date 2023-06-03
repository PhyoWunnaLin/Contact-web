import React, { useState } from "react";
import { HiPaintBrush } from "react-icons/hi2";

import { Group } from "@mantine/core";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./ModalContents.css";

import FromComputer from "./ModalComponents/FromComputer";
import { useDispatch } from "react-redux";
import { setimages } from "../../redux/services/contactSlice";

const ModalContents = ({ close }) => {
  const dispatch = useDispatch();
  return (
    <Group className={` w-full   flex flex-col justify-center`}>
      <div className=" flex justify-between w-full ">
        <div className="modalcontentsParents ">
          <div className="modalContentsChild  w-9 h-9 rounded-[50%] flex flex-col justify-center items-center ">
            <AiOutlineClose
              onClick={() => {
                dispatch(setimages(null));
                close();
              }}
            />
          </div>
        </div>
        <p className=" text-xl">Choose Pictures</p>
        <div className="modalcontentsParents ">
          <div className="modalContentsChild  w-9 h-9 rounded-[50%] flex flex-col justify-center items-center ">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>

      <div className={`  w-full flex justify-between gap-6 p-5 border-b-2`}>
        <div
          className={`flex flex-col items-center justify-center align-middle`}>
          <HiPaintBrush className=" text-blue-300  text-[10px]" />
          <p className={`text-black  `}>Illustractions</p>
        </div>

        <div className=" flex flex-col items-center justify-center align-middle">
          <HiPaintBrush className=" text-blue-300 text-[10px]" />
          <p className="text-black ">GooglePhotos</p>
        </div>

        <div className=" flex flex-col items-center justify-center align-middle">
          <HiPaintBrush className=" text-blue-300 text-[10px]" />
          <p className="text-black ">FromComputer</p>
        </div>
      </div>

      <FromComputer close={close} />
    </Group>
  );
};

export default ModalContents;
