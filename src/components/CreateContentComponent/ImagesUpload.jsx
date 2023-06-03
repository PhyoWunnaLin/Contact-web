import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { LuImagePlus } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import ModalContents from "./ModalContents";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const ImagesUpload = ({ isLoading }) => {
  const [profileImage, setProfileImages] = useState("");
  const [error, setError] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

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
    <div className="bg-[#a2d2ff]  z-40 py-4  flex  justify-around overflow-hidden w-full lg:w-5/6 md:w-5/6  sticky top-0 lg:gap-5 md:gap-5">
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
          <GrFormClose className=" text-3xl" />
        </Link>
        <span className=" group-hover:opacity-100 transition-opacity bg-gray-500 px-2 text-lg text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
          Cancel
        </span>
      </div>

      <div className=" ">
        <div
          onClick={open}
          className=" bg-blue-100 rounded-[50%] w-[150px] h-[150px] flex justify-center items-center align-middle flex-col">
          {error ? (
            <LuImagePlus className=" text-2xl" />
          ) : (
            <img className=" rounded" src={profileImage} />
          )}
        </div>
      </div>
      <div className="md:flex lg:flex flex-col-reverse">
        <button
          disabled={isLoading && true}
          form="create"
          type="submit"
          className=" bg-violet-300 shadow font-semibold  hover:bg-violet-300 hover:shadow-md hover:shadow-violet-400 active:bg-violet-600 px-5 py-1 rounded text-violet-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default ImagesUpload;
