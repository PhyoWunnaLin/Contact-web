import React from "react";

import ContactForm from "./CreateContentComponent/ContactForm";
import bell from "../assets/bells.svg";
import people from "../assets/publicdomainq-buesinesspeople.svg";

const CreateContact = () => {
  return (
    <div className="bg-[#a2d2ff] m-auto  ">
      <img src={bell} alt="" className=" fixed top-30 w-32 opacity-[0.2]" />
      <img
        src={people}
        alt=""
        className=" z-10  fixed bottom-2 right-2 w-32 sm:right-12 opacity-80"
      />
      <div
        className="  flex  flex-col lg:gap-10 gap-4 md:gap-10
      items-center h-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default CreateContact;
