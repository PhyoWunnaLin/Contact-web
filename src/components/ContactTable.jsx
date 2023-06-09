import { HiPrinter } from "react-icons/hi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { CiImport, CiExport } from "react-icons/ci";
import Cookies from "js-cookie";
import {
  useDeleteContactMutation,
  useGetContactQuery,
} from "../redux/api/contactApi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  addStarredContacts,
  removeStarredContacts,
} from "../redux/services/contactSlice";
import { BsFillTrashFill, BsInfoCircle } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const ContactTable = () => {
  const [isHovered, setIsHovered] = useState(null);
  const token = Cookies.get("token");
  const { data, isLoading, isSuccess } = useGetContactQuery(token);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactSlice.contact);
  const searchTerm = useSelector((state) => state.contactSlice.searchTerm);
  const [DeleteContact] = useDeleteContactMutation();
  const navigate = useNavigate();
  const starContacts = useSelector(
    (state) => state.contactSlice.starredContacts
  );
  // const starContacts = JSON.parse(Cookies.get("star"));
  // console.log(starContacts);

  const [starredRows, setStarredRows] = useState([]);

  const toggleStar = (index, contact) => {
    if (starredRows.includes(index)) {
      setStarredRows(starredRows.filter((rowIndex) => rowIndex !== index));
      dispatch(removeStarredContacts({ id: contact?.id }));
    } else {
      setStarredRows([...starredRows, index]);
      dispatch(addStarredContacts(contact));
    }
  };

  const deleteHandler = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const { data } = await DeleteContact({ token, id });
      }
    });
  };

  const toDetail = (id) => {
    navigate(`/info/${id}`);
  };

  useEffect(() => {
    dispatch(addContact(data?.contacts?.data));
  }, [data]);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleMouseEnter1 = (id) => {
    setIsHovered(id);
  };

  const handleMouseLeave1 = () => {
    setIsHovered(null);
  };

  if (isLoading) {
    return (
      <div className=" flex justify-center h-screen items-center">
        <button
          type="button"
          className=" bg-blue-400 px-4 py-1 rounded shadow-md flex items-center gap-2 text-white font-bold text-xl tracking-wider"
          disabled
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fillOpacity="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fillOpacity="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fillOpacity="currentFill"
            />
          </svg>
          Loading ...
        </button>
      </div>
    );
  }

  if (contacts?.length === 0) {
    return (
      <div className="pt-20 flex flex-col gap-3 justify-center items-center h-screen">
        <img
          src="https://i.pinimg.com/564x/7d/97/ae/7d97aeef0d9384c494a755a5d0fa8a43.jpg"
          className="w-[250px] h-[200px]"
        />
        <p className=" font-medium text-lg">No contacts yet</p>
        <Link to={"/createContact"}>
          <div className=" flex justify-center items-center gap-3 px-5 py-1 bg-sky-100 duration-500 rounded text-sky-500 hover:bg-sky-200 hover:text-sky-600">
            <FaRegUser />
            <p className=" font-medium">Create Contact</p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className=" pt-20 bg-blue-100">
      <div className=" relative z-10 overflow-hidden ">
        <table className=" w-full">
          <thead className=" border-b-2 border-b-white text-left">
            <tr className="">
              <th className=" px-10 py-4  text-sm font-semibold tracking-wide max-[420px]:px-5">
                <span className=" text-gray-600 text-left">Name</span>
              </th>
              <th className=" px-10  py-4 max-md:hidden text-sm font-semibold tracking-wide max-[420px]:px-5">
                <span className=" text-gray-600 text-left">Email</span>
              </th>
              <th className=" px-10 py-4 max-lg:hidden text-sm font-semibold tracking-wide max-[420px]:px-5">
                <span className=" text-gray-600 text-left">Phone Number</span>
              </th>
              <th className=" px-10 py-4 max-xl:hidden text-sm font-semibold tracking-wide max-[420px]:px-5">
                <span className=" text-gray-600 text-left">Address</span>
              </th>
              <th className=" px-10 py-4 flex flex-row items-center justify-end text-xl gap-3 max-[420px]:px-5">
                <span>
                  <HiPrinter className=" relative top-[2px] text-gray-600"></HiPrinter>
                </span>
                <span>
                  <CiImport className=" relative top-[2px]"></CiImport>
                </span>
                <span>
                  <CiExport className=" relative top-[2px]"></CiExport>
                </span>
                <span>:</span>
              </th>
            </tr>
          </thead>
          <tbody className=" z-10">
            {starContacts?.length > 0 ? (
              <tr>
                <td className="px-10 pt-4 whitespace-nowrap max-[420px]:px-5">
                  <p className=" text-gray-600 font-medium">
                    Starred Contacts ({starContacts?.length})
                  </p>
                </td>
              </tr>
            ) : null}
            {/* {starContacts?.map((starContact,index) => {
              return (
                <>
                  <tr
                    key={starContact?.id}
                    className={` border-b-2 border-b-white cursor-pointer ${
                      isHovered === starContact?.id ? "bg-[#90cdf49f]" : ""
                    }  hover:backdrop:blur-sm duration-500`}
                    onDoubleClick={() => toDetail(starContact?.id)}
                    onMouseEnter={() => handleMouseEnter1(starContact?.id)}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <td className=" text-left px-10 py-4 text-sm font-semibold lg:tracking-wide max-[420px]:px-5">
                      <div className="flex flex-row items-center">
                        <img
                          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                          className=" md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full"
                          alt=""
                        />
                        <span className=" text-gray-600 text-sm lg:text-base pl-2 select-none">
                          {starContact?.name}
                        </span>
                      </div>
                    </td>
                    <td className="  text-left lg:px-10 md:px-10 px-5 max-md:hidden py-4  text-sm font-semibold lg:tracking-wide select-none">
                      <span className=" text-gray-600 text-sm lg:text-base">
                        {starContact?.email}
                      </span>
                    </td>
                    <td className=" text-left lg:px-10 md:px-10 px-5 max-lg:hidden py-4  text-sm font-semibold lg:tracking-wide select-none">
                      <span className=" text-gray-600 text-sm lg:text-base">
                        {starContact?.phone}
                      </span>
                    </td>
                    <td className=" text-left max-xl:hidden lg:px-10 md:px-10 px-5 py-4  text-sm font-semibold lg:tracking-wide select-none">
                      <span className=" text-gray-600">{starContact?.address}</span>
                    </td>
                    <td
                      className={` ${
                        isHovered === starContact?.id ? "block" : "invisible"
                      }  group text-gray-600 text-left px-10 py-7 flex flex-row justify-end items-center text-xl gap-3 max-[380px]:px-5`}
                    >
                      <p>
                        {starredRows.includes(index) ? (
                          <AiFillStar
                            className={`cursor-pointer text-blue-600`}
                            onClick={() => toggleStar(index, starContact)}
                          />
                        ) : (
                          <AiOutlineStar
                            className={`cursor-pointer hover:text-gray-800`}
                            onClick={() => toggleStar(index, starContact)}
                          />
                        )}
                      </p>

                      <Link to={`/editInfo/${starContact.id}`}>
                        <p>
                          <MdOutlineEdit className=" cursor-pointer hover:text-gray-800"></MdOutlineEdit>
                        </p>
                      </Link>
                      <Link to={`/info/${starContact.id}`}>
                        <p>
                          <BsInfoCircle className=" hover:text-gray-800"></BsInfoCircle>
                        </p>
                      </Link>
                      <p
                        className=""
                        onClick={() => {
                          deleteHandler(starContact?.id);
                        }}
                      >
                        <BsFillTrashFill className=" text-red-600 cursor-pointer hover:text-red-500" />
                      </p>
                    </td>
                  </tr>
                </>
              );
            })} */}

            <tr>
              <td className="px-10 py-4 whitespace-nowrap max-[420px]:px-5">
                <p className=" text-blue-600 font-bold">
                  CONTACTS ({contacts?.length})
                </p>
              </td>
            </tr>

            {contacts
              ?.filter((contact) => {
                if (searchTerm === "") {
                  return contact;
                } else if (
                  contact?.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return contact;
                }
              })
              .map((contact, index) => {
                return (
                  // <Link to={`/createContact`}>
                  <tr
                    key={contact.id}
                    className={` border-b-2 border-b-white cursor-pointer ${
                      isHovered === index ? "bg-[#90cdf49f]" : ""
                    }  hover:backdrop:blur-sm duration-500`}
                    onDoubleClick={() => toDetail(contact?.id)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <td className=" text-left px-10 py-4 text-sm font-semibold lg:tracking-wide max-[420px]:px-5">
                      <div className="flex flex-row items-center">
                        <img
                          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                          className=" md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full"
                          alt=""
                        />
                        <span className=" text-gray-600 text-sm lg:text-base pl-2 select-none">
                          {contact.name}
                        </span>
                      </div>
                    </td>
                    <td className="  text-left lg:px-10 md:px-10 px-5 max-md:hidden py-4  text-sm font-semibold lg:tracking-wide select-none">
                      <span className=" text-gray-600 text-sm lg:text-base">
                        {contact.email}
                      </span>
                    </td>
                    <td className=" text-left lg:px-10 md:px-10 px-5 max-lg:hidden py-4  text-sm font-semibold lg:tracking-wide select-none">
                      <span className=" text-gray-600 text-sm lg:text-base">
                        {contact.phone}
                      </span>
                    </td>
                    <td className=" text-left max-xl:hidden lg:px-10 md:px-10 px-5 py-4  text-sm font-semibold lg:tracking-wide select-none">
                      <span className=" text-gray-600">{contact.address}</span>
                    </td>
                    <td
                      className={` ${
                        isHovered === index ? "block" : "invisible"
                      }  group text-gray-600 text-left px-10 py-10 flex flex-row justify-end items-center text-xl gap-3 max-[380px]:px-5`}
                    >
                      <p>
                        {starredRows.includes(index) ? (
                          <AiFillStar
                            className={`cursor-pointer text-blue-600`}
                            onClick={() => toggleStar(index, contact)}
                          />
                        ) : (
                          <AiOutlineStar
                            className={`cursor-pointer hover:text-gray-800`}
                            onClick={() => toggleStar(index, contact)}
                          />
                        )}
                      </p>

                      <Link to={`/editInfo/${contact.id}`}>
                        <p>
                          <MdOutlineEdit className=" cursor-pointer hover:text-gray-800"></MdOutlineEdit>
                        </p>
                      </Link>
                      <Link to={`/info/${contact.id}`}>
                        <p>
                          <BsInfoCircle className=" hover:text-gray-800"></BsInfoCircle>
                        </p>
                      </Link>
                      <p
                        className=""
                        onClick={() => deleteHandler(contact?.id)}
                      >
                        <BsFillTrashFill className=" text-red-600 cursor-pointer hover:text-red-500" />
                      </p>
                    </td>
                  </tr>
                  // </Link>
                );
              })}
          </tbody>
        </table>
      </div>
      <svg
        className="  fixed left-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,64L24,96C48,128,96,192,144,213.3C192,235,240,213,288,181.3C336,149,384,107,432,128C480,149,528,235,576,245.3C624,256,672,192,720,170.7C768,149,816,171,864,197.3C912,224,960,256,1008,250.7C1056,245,1104,203,1152,186.7C1200,171,1248,181,1296,202.7C1344,224,1392,256,1416,272L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default ContactTable;
