import React, { useState } from "react";
import welcome from "../assets/welcome.jpg";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";

// frontendC12@gmail.com
// teamc1234567
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const [register, { isLoading }] = useRegisterMutation();

  const nav = useNavigate();

  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const { data } = await register(user);
      console.log(data);
      if (data?.success === true) {
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className=" flex justify-center h-screen items-center">
        <h2>Waiting ....</h2>
      </div>
    );
  }

  return (
    <div className=" h-screen flex items-center justify-center lg:gap-[80px] ">
      <img
        src={welcome}
        alt="welcome.jpg"
        className=" invisible lg:visible w-16 md:w-[300px] lg:w-[600px] absolute lg:static"
      />
      <form
        onSubmit={registerHandler}
        className=" w-[90%] h-auto md:w-[60%] lg:w-[300px] px-10 py-10 rounded-lg lg:px-0 lg:py-0 lg:shadow-none lg:border-0 border-2 hover:border-blue-200 shadow-md hover:shadow-blue-200 lg:mt-10">
        <h2 className=" flex justify-center font-semibold text-3xl text-blue-900">
          Register Here
        </h2>
        <div>
          <div className=" flex flex-col gap-3 mt-10">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className=" border-b hover:border-blue-400 hover:shadow-md rounded px-4 py-1 outline-none"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className=" border-b hover:border-blue-400 hover:shadow-md rounded px-4 py-1 outline-none"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className=" border-b hover:border-blue-400 hover:shadow-md rounded px-4 py-1 outline-none"
            />
            <input
              type="text"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="confirm your password"
              className=" border-b hover:border-blue-400 hover:shadow-md rounded px-4 py-1 outline-none"
            />
          </div>
          {/* <hr className=" my-5" /> */}
          {/* <hr className=" my-3" /> */}
          <div className=" flex flex-col gap-5 mt-10">
            <div className=" flex gap-5 text-sm">
              <h2 className=" text-sm">Already have an account?</h2>
              <Link to={"/login"}>
                <button className=" text-blue-700 underline  hover:text-blue-950 hover:underline-offset-4">
                  LogIn
                </button>
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading && true}
              className=" bg-blue-400 font-semibold text-lg lg:text-base text-white py-1 rounded-lg shadow-md hover:bg-blue-300 hover:text-gray-600 mt-3">
              {isLoading ? <h2>Loading ... </h2> : "Register"}
            </button>
          </div>
        </div>
        <div>
          <h2 className=" flex justify-center text-lg lg:text-base mt-8">
            Or Log in with
          </h2>
          <div className=" w-[60%] mx-auto flex justify-around mt-4 ">
            <a
              href="https://facebook.com"
              className=" text-blue-600 text-3xl lg:text-2xl">
              <BsFacebook />
            </a>
            <a href="https://github.com" className=" text-3xl lg:text-2xl">
              <BsGithub />
            </a>
            <a
              href="https://google.com"
              className=" text-green-600 text-3xl lg:text-2xl">
              <BsGoogle />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
