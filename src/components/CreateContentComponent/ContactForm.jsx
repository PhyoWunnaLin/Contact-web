import React, { useState } from "react";
import background from "../../assets/rm222batch2-mind-03.jpg";
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
  const [CreateContact, { isLoading }] = useCreateContactMutation();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const contact = { name, email, address, phone };
    const data = await CreateContact({ token, contact });

    const refreshPage = () => {
      window.location.reload();
    };

    if (data?.data?.success) {
      nav("/");
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
      refreshPage();
    }
  };

  return (
    <>
      <ImagesUpload isLoading={isLoading} />
      {/* bg-[#bde0fe] */}
      <div className=" bg-[#a2d2ff] md:bg-[#bde0fe] lg:bg-[#a2d2ff] relative md:w-4/6 shadow lg:w-4/6 py-14 flex flex-col   w-full ">
        <form
          id="create"
          onSubmit={SubmitHandler}
          className="w-[50%] z-20 flex-grow m-auto flex gap-4 flex-col justify-center">
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
        <img
          src={background}
          className=" absolute top-0 opacity-25  hidden lg:block "
          alt=""
        />
      </div>
    </>
  );
};

export default ContactForm;
