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
  const [login, { isLoading }] = useLoginMutation();
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
        <button
          type="button"
          className=" bg-blue-400 px-4 py-1 rounded shadow-md flex items-center gap-2 text-white font-bold text-xl tracking-wider"
          disabled>
          <svg
            aria-hidden="true"
            class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          Loading ...
        </button>
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
        className=" w-[90%] h-auto md:w-[60%] lg:w-[400px] px-10 py-10 rounded-lg lg:px-10 lg:py-10 lg:shadow-none lg:border-0 border-2 hover:border-blue-300 shadow-md hover:shadow-blue-400 bg-gradient-to-r from-sky-100 to-blue-200">
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
              className=" border-b-2 hover:border-blue-400 hover:shadow-md rounded px-4 py-1 outline-none bg-opacity-5"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className=" border-b-2 hover:border-blue-400 hover:shadow-md rounded px-4 py-1 outline-none"
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
            <button
              type="submit"
              disabled={isLoading && true}
              className=" bg-blue-400 font-semibold text-lg lg:text-base text-white py-1 rounded-lg shadow-md hover:bg-blue-300 hover:text-gray-600 ">
              {isLoading ? <h2>Loading ... </h2> : "LOGIN"}
            </button>
          </div>

          <div>
            <h2 className=" flex justify-center text-lg lg:text-base mt-8">
              Or login with
            </h2>
            <div className=" w-[60%] mx-auto flex justify-around my-4 ">
              <div className="group flex relative">
                <a
                  href="https://facebook.com"
                  className=" text-blue-600 text-3xl lg:text-2xl">
                  <BsFacebook />
                </a>
                <span className=" group-hover:opacity-100 transition-opacity bg-gray-500 px-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                  Facebook
                </span>
              </div>
              <div className="group flex relative">
                <a href="https://github.com" className=" text-3xl lg:text-2xl">
                  <BsGithub />
                </a>
                <span className=" group-hover:opacity-100 transition-opacity bg-gray-500 px-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                  Github
                </span>
              </div>
              <div className="group flex relative">
                <a
                  href="https://google.com"
                  className=" text-green-600 text-3xl lg:text-2xl">
                  <BsGoogle />
                </a>
                <span className=" group-hover:opacity-100 transition-opacity bg-gray-500 px-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                  Google
                </span>
              </div>
            </div>
          </div>
          {/* <div class="group flex relative">
        <span className="bg-red-400 text-white px-2 py-1">Button</span>
        <span
          className=" group-hover:opacity-100 transition-opacity bg-gray-500 px-2 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
          facebook
        </span>
      </div> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
