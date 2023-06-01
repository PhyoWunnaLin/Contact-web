import React from "react";
import ImagesUpload from "./CreateContentComponent/ImagesUpload";

import ContactForm from "./CreateContentComponent/ContactForm";
import bell from "../assets/bells.svg";
import people from "../assets/publicdomainq-buesinesspeople.svg";
const CreateContact = () => {
  return (
    <div className="bg-[#a2d2ff] m-auto ">
      <img src={bell} alt="" className=" fixed top-30 w-32 opacity-[0.2]" />
      <img
        src={people}
        alt=""
        className=" fixed bottom-2 right-2 w-32  lg:opacity-80 opacity-0 md:opacity-80"
      />
      <div
        className=" flex  flex-col lg:gap-10 gap-4 md:gap-10
      items-center h-full">
        <ImagesUpload />
        <ContactForm />
      </div>
    </div>
  );
};

export default CreateContact;
