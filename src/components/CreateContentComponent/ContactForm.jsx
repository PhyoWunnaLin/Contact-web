import React, { useState } from "react";

import NameInput from "./ContactFormComponents/NameInput";
// import JobInput from "./contactFormComponents/JobInput";
import EmailPhoneAddress from "./ContactFormComponents/EmailPhoneAddress";
import OtherContact from "./ContactFormComponents/OtherContact";
import { useCreateContactMutation } from "../../redux/api/contactApi";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import ImagesUpload from "./ImagesUpload";

const ContactForm = () => {
  const token = Cookies.get("token");
  const [name, setName] = useState("aa");
  const [email, setEmail] = useState("aa@gmail.com");
  const [address, setAddress] = useState("jhjghf");
  const [phone, setPhone] = useState("099897");
  const nav = useNavigate();
  const [CreateContact, { isLoading}] = useCreateContactMutation();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const contact = { name, email, address, phone };
    const data = await CreateContact({ token, contact });

    if (data?.data?.success) {
      nav("/");
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
    }

    
  };

  return (
    <>
      <ImagesUpload isLoading={isLoading}/>
      
      <div className="bg-[#bde0fe] md:w-4/6 shadow lg:w-4/6 py-14 flex flex-col   w-full h-screen  ">
        <form
          id="create"
          onSubmit={SubmitHandler}
          className="w-[50%] flex-grow m-auto flex gap-4 flex-col">
          <NameInput setName={setName} name={name} />
          {/* <JobInput /> */}
          <EmailPhoneAddress
            setEmail={setEmail}
            email={email}
            setPhone={setPhone}
            phone={phone}
          />
          <OtherContact setAddress={setAddress} address={address} />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
