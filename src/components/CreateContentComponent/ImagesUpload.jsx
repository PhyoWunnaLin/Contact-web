import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import ModalContents from "./ModalContents";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setimages } from "../../redux/services/contactSlice";

const ImagesUpload = ({ isLoading }) => {
  const [profileImage, setProfileImages] = useState("");
  const [error, setError] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  const image = useSelector((state) => state.contactSlice.images);
  const dispatch = useDispatch();
  if (isLoading) {
    toast("working...", {
      style: {
        border: "1px solid #000",
        padding: "5px 20px",
        color: "#fff",
        backgroundColor: "#000000ff",
      },
    });
  }

  return (
    <div className="bg-[#a2d2ff]  z-40 py-4  flex  justify-around overflow-hidden w-full lg:w-5/6 md:w-5/6  sticky top-0 lg:gap-5 md:gap-5 gap-1">
      <Toaster position="top-center" reverseOrder={false} />
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="xl"
        centered>
        <ModalContents close={close} />
      </Modal>
      <div className=" group flex relative">
        <Link to="/">
          <AiOutlineClose
            onClick={() => dispatch(setimages(null))}
            className=" lg:text-3xl md:text-3xl text-xl text-pink-800"
          />
        </Link>
        <span className=" group-hover:opacity-100 transition-opacity bg-gray-500 px-2 text-lg text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
          Cancel
        </span>
      </div>

      <div className=" cursor-pointer ">
        <div
          onClick={open}
          className=" bg-blue-100 rounded-[50%] w-[150px] h-[150px] flex justify-center items-center align-middle flex-col">
          {image ? (
            // <img
            //   onclick={() => dispatch(setimages(null))}
            //   className=" rounded"
            //   src={image[0]}
            // />
            <p>{image[0].name}</p>
          ) : (
            <LuImagePlus className=" text-2xl text-pink-800" />
          )}
        </div>
      </div>
      <div className="md:flex lg:flex flex-col-reverse">
        <button
          disabled={isLoading && true}
          form="create"
          type="submit"
          className=" bg-violet-300 shadow font-semibold  hover:bg-violet-300 hover:shadow-md hover:shadow-violet-400 active:bg-violet-600 px-5 sm:px-3 py-1 rounded text-violet-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default ImagesUpload;
