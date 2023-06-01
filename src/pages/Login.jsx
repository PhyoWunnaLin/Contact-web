import React, { useState } from "react";
import loginPic from "../assets/loginPic.jpg";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { addUserToCookie } from "../redux/services/authSlice";

const Login = () => {
  const [email, setEmail] = useState("frontendC12@gmail.com");
  const [password, setPassword] = useState("teamc1234567");
  const nav = useNavigate();
  const [login,{isLoading}] = useLoginMutation();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { email, password };
      const { data } = await login(user);
      dispatch(addUserToCookie({ user: data?.user, token: data?.token }));
      console.log(data);
      if (data?.success === true) {
        nav("/");
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
        src={loginPic}
        alt=""
        className=" invisible lg:visible w-16 md:w-[300px] lg:w-[600px] absolute lg:static"
      />
      <form
        onSubmit={loginHandler}
        className=" w-[90%] h-auto md:w-[60%] lg:w-[300px] px-10 py-10 rounded-lg lg:px-0 lg:py-0 lg:shadow-none lg:border-0 border-2 hover:border-blue-200 shadow-md hover:shadow-blue-200">
        <h2 className=" flex justify-center font-semibold text-3xl text-blue-900">
          Login
        </h2>
        <div>
          <div className=" flex flex-col gap-3 mt-10">
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
            <h2 className=" text-xs font-semibold ms-auto cursor-pointer">
              Forget password?
            </h2>
          </div>
          {/* <hr className=" my-5" /> */}
          <div className=" flex flex-col gap-10 mt-10">
            <div className=" flex gap-5 text-sm">
              <h2>Don't have an account?</h2>
              <Link to={"/register"}>
                <button className=" text-blue-700 underline  hover:text-blue-950 hover:underline-offset-4">
                  Register
                </button>
              </Link>
            </div>
            <button type="submit"
              disabled={isLoading && true} className=" bg-blue-400 font-semibold text-lg lg:text-base text-white py-1 rounded-lg shadow-md hover:bg-blue-300 hover:text-gray-600 ">
              {isLoading ? <h2>Loading ... </h2> : "LOGIN"}
            </button>
          </div>

          <div>
            <h2 className=" flex justify-center text-lg lg:text-base mt-8">
              Or login with
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
        </div>
      </form>
    </div>
  );
};

export default Login;
