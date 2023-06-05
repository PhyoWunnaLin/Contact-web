import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { SlNote } from "react-icons/sl";
import ModalContents from "./CreateContentComponent/ModalContents";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import bell from "../assets/bells.svg";
import people from "../assets/publicdomainq-buesinesspeople.svg";
import NameInput from "./CreateContentComponent/ContactFormComponents/NameInput";
import EmailPhoneAddress from "./CreateContentComponent/ContactFormComponents/EmailPhoneAddress";
import OtherContact from "./CreateContentComponent/ContactFormComponents/OtherContact";
import { setimages } from "../redux/services/contactSlice";
import Cookies from "js-cookie";
import { BsPeople } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import background from "../assets/rm222batch2-mind-03.jpg";
import {
  useGetUserInfoQuery,
  useUpdateUserMutation,
} from "../redux/api/contactApi";
const EditInfo = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const image = useSelector((state) => state.contactSlice.images);
  const { id } = useParams();

  const token = Cookies.get("token");
  const { data, isLoading } = useGetUserInfoQuery({ id, token });
  const user = data?.contact;
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const [updateName, setupdateName] = useState("");
  const [updateEmail, setupdateEmail] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");

  const [errormessage, setErrorMessage] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    setupdateName(user?.name);
    setupdateEmail(user?.email);
    setUpdateAddress(user?.address);
    setUpdatePhone(user?.phone);
  }, [user]);

  const updatehandler = async (e) => {
    e.preventDefault();

    const contact = {
      ...user,
      name: updateName,
      email: updateEmail,
      address: updateAddress,
      phone: updatePhone,
    };
    const data = await updateUser({ contact, token });
    console.log(data);
    const refreshPage = () => {
      window.location.reload();
    };

    // console.log(contact);

    if (data?.data?.success) {
      nav("/");
      nav("/");
      setupdateName("");
      setupdateEmail("");
      setUpdateAddress("");
      setUpdatePhone("");
      refreshPage();
      setErrorMessage(null);
    } else {
      setErrorMessage(data?.error.data.message);
    }
  };
  // console.log(errormessage);
  if (user) {
    return (
      <>
        <div className=" bg-[#a2d2ff] h-screen">
          <div className="bg-[#a2d2ff] m-auto  ">
            <img
              src={bell}
              alt=""
              className=" fixed top-0 w-32 opacity-[0.2]"
            />
            <img
              src={people}
              alt=""
              className=" z-10  fixed bottom-2 right-2 w-32 sm:right-12 opacity-80"
            />
            <div className=" flex flex-col gap-20 justify-between  overflow-hidden">
              <div
                className="  flex  flex-col lg:gap-10 gap-4 md:gap-10
      items-center h-full">
                {/* ImageUpload */}
                <div className="bg-[#a2d2ff]  z-40 py-4  flex  justify-around overflow-hidden w-full lg:w-4/6 md:w-5/6  sticky top-0 lg:gap-5 md:gap-5 gap-1">
                  <Toaster position="top-center" reverseOrder={false} />
                  <Modal
                    opened={opened}
                    onClose={close}
                    withCloseButton={false}
                    size="xl"
                    centered>
                    <ModalContents close={close} />
                  </Modal>
                  <div className="md:flex lg:flex flex-col-reverse w-[26%] min-[540px]:w-auto lg:w-auto md:w-auto">
                    <button
                      // disabled={isLoading && true}

                      form="update"
                      type="submit"
                      className=" bg-violet-300 shadow font-semibold    hover:bg-violet-300 hover:shadow-md hover:shadow-violet-400 active:bg-violet-600 px-5 sm:px-7 py-1 rounded text-violet-800">
                      Save
                    </button>
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
                        // <p>{image[0].name}</p>
                        <img
                          src={image}
                          alt=""
                          className="rounded-[50%] w-[150px] h-[150px] object-cover object-center"
                        />
                      ) : (
                        <LuImagePlus className=" text-2xl text-pink-800" />
                      )}
                    </div>
                  </div>

                  <div className=" w-[73.57px] group flex relative justify-end">
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
                </div>
              </div>
              <div className=" bg-[#a2d2ff] mx-auto md:bg-[#bde0fe] lg:bg-[#a2d2ff] relative md:w-4/6 shadow lg:w-[63%] py-14 flex flex-col   w-full ">
                <form
                  onSubmit={updatehandler}
                  id="update"
                  className="w-[50%] z-20 flex-grow m-auto flex gap-4 flex-col justify-center">
                  <div className=" flex gap-3 flex-col">
                    <div className="flex justify-center items-start gap-6  ">
                      <div className="max-[280px]:hidden">
                        <BsPeople
                          className=" text-2xl text-pink-700 max-sm:text-xl "
                          onClick={() => {
                            // setMore(!more);
                          }}
                        />
                      </div>
                      <div>
                        <div className=" flex justify-between ">
                          <div className="  flex flex-col justify-center items-center gap-4">
                            <input
                              value={updateName}
                              onChange={(e) => {
                                setupdateName(e.target.value);
                                setErrorMessage(null);
                              }}
                              className="lg:w-[300px] md:w-[300px] w-[250px]  rounded-lg bg-blue-50 transition-transform  px-6  py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105"
                              type="text"
                              placeholder="First Name"
                              required
                            />
                            <small
                              className={`${
                                errormessage ? "block" : "hidden"
                              } text-red-600`}>
                              {errormessage}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <JobInput /> */}
                  <div className=" flex gap-3 flex-col">
                    {/* Email */}
                    <div className=" flex justify-center gap-6 items-center ">
                      <div className=" max-[280px]:hidden">
                        <AiOutlineMail className="text-2xl text-pink-700 max-sm:text-xl" />
                      </div>
                      <div>
                        <div className=" flex justify-between ">
                          <div className="  flex flex-col justify-center items-center gap-4 ">
                            <input
                              value={updateEmail}
                              onChange={(e) => setupdateEmail(e.target.value)}
                              className="lg:w-[300px] md:w-[300px] w-[250px]   rounded-lg bg-blue-50 transition-transform px-5 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105"
                              type="Email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className=" flex justify-center gap-6 items-center ">
                      <div className=" max-[280px]:hidden">
                        <AiOutlinePhone
                          className=" text-3xl text-pink-700 max-sm:text-2xl"
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
                              value={updatePhone}
                              onChange={(e) => setUpdatePhone(e.target.value)}
                              className=" lg:w-[300px] md:w-[300px] w-[250px]   rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105"
                              type="number"
                              placeholder="phone"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* birthday */}
                    <div className=" flex justify-center gap-6 items-center ">
                      <div className=" max-[280px]:hidden">
                        <SlCalender className="text-2xl text-pink-700 max-sm:text-xl" />
                      </div>
                      <div>
                        <div className=" flex justify-between ">
                          <div className="  flex flex-col justify-center items-center gap-4 ">
                            <input
                              className="lg:w-[300px] md:w-[300px] w-[250px]   rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105"
                              type="text"
                              placeholder="Birthday"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* note */}
                    <div className=" flex justify-center gap-6 items-center ">
                      <div className=" max-[280px]:hidden">
                        <SlNote className="text-2xl text-pink-700 max-sm:text-xl" />
                      </div>
                      <div>
                        <div className=" flex justify-between ">
                          <div className="  flex flex-col justify-center items-center gap-4 ">
                            <input
                              className="lg:w-[300px] md:w-[300px] w-[250px]    rounded-lg bg-blue-50 placeholder-violet-300 transition-transform px-6 py-2  outline-none text-violet-800 scale-1 hover:scale-105"
                              type="text"
                              placeholder="Note"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" flex justify-center gap-6 items-center">
                      <div className=" max-[280px]:hidden">
                        <FaRegAddressCard className=" text-2xl text-pink-600 max-sm:text-xl" />
                      </div>
                      <div>
                        <div className=" flex justify-between">
                          <div className="  flex flex-col justify-center items-center gap-4">
                            <input
                              value={updateAddress}
                              onChange={(e) => setUpdateAddress(e.target.value)}
                              className={` lg:w-[300px] md:w-[300px] w-[250px]  rounded-lg bg-blue-50 transition-transform px-6 py-2 placeholder-violet-300 outline-none text-violet-800 scale-1 hover:scale-105`}
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <img
                  src={background}
                  className=" absolute top-0 opacity-25  hidden lg:block "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default EditInfo;
