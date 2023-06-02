import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { LuImagePlus } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import ModalContents from "./ModalContents";
import { Link } from "react-router-dom";

const ImagesUpload = ({isLoading}) => {
  const [profileImage, setProfileImages] = useState("");
  const [error, setError] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <div className="bg-[#a2d2ff]  z-40 py-4  flex  justify-around overflow-hidden w-full lg:w-5/6 md:w-5/6  sticky top-0 lg:gap-5 md:gap-5">
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="xl"
        centered>
        <ModalContents close={close} />
      </Modal>
      <div className=" flex  flex-col">
        <Link to="/">
          <GrFormClose className=" text-2xl " />
        </Link>
        <p className=" lg:hidden md:hidden ">Edit Contact</p>
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
          className=" bg-violet-300  hover:bg-violet-300 active:bg-violet-600 px-5 py-1 rounded text-violet-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default ImagesUpload;
