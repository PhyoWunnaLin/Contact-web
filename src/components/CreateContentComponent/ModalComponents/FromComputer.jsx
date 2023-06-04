import React, { useEffect, useId, useState } from "react";

import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setimages } from "../../../redux/services/contactSlice";
import Cookies from "js-cookie";

const fileTypes = ["JPG", "PNG", "GIF"];
const FromComputer = ({ close }) => {
  const [file, setFile] = useState(null);
  const input = useRef();
  const dispatch = useDispatch();
  // const src = Cookies.get("src")
  // console.log(src);

  // const src = useSelector(state => console.log(state.contactSlice.imageSrc))

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files);
  };

  const uploadedHandler = () => {
    dispatch(setimages(file));
    close();
  };
  if (file)
    return (
      <div className="h-[350px] flex flex-col justify-center items-center gap-10">
        <img
          src="https://img.freepik.com/free-vector/doodle-hand-drawn-cartoon-cute-girl-student-thinking-with-bubble-have-idea-dreaming_40876-3274.jpg?w=740&t=st=1685813059~exp=1685813659~hmac=0ba2e5216ab30ead759d0995fa99eee7fdb48ad1d8fb9ec46afec7d3c2324eed"
          // src={src}
          alt=""
          className="w-60 h-60  rounded-[50%]"
        />

        <div className=" flex gap-10 text-gray-500">
          <button
            className=" bg-pink-300 shadow font-semibold  hover:bg-pink-300 hover:shadow-md hover:shadow-pink-400 active:bg-pink-600 px-5 sm:px-3 py-1 rounded text-pink-800 "
            onClick={() => setFile(null)}>
            Cancel
          </button>
          OR
          <button
            onClick={uploadedHandler}
            className=" block  bg-violet-300 shadow font-semibold  hover:bg-violet-300 hover:shadow-md hover:shadow-violet-400 active:bg-violet-600 px-5 sm:px-3 py-1 rounded text-violet-800">
            Upload
          </button>
        </div>
      </div>
    );

  return (
    <>
      <div
        className="dropzone h-[350px] flex flex-col justify-center items-center gap-3"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <div className="w-60 h-60 max-sm:w-48 max-sm:h-48 border-violet-100 shadow border-2 rounded-[50%] flex flex-start justify-center items-center">
          <img
            src="https://img.freepik.com/premium-vector/business-women-worker-character-hand-drawn-cartoon-vector-art-illustration_56104-2182.jpg?w=740"
            alt=""
            className=" w-[50%]"
          />
          <h1 className="text-center">
            Drag <br />& <br /> Drop
          </h1>
        </div>
        <h1>Or</h1>
        <input
          type="file"
          onChange={(event) => setFile(event.target.files)}
          hidden
          ref={input}
        />
        <button
          onClick={() => input.current.click()}
          className=" block  bg-violet-300 shadow font-semibold  hover:bg-violet-300 hover:shadow-md hover:shadow-violet-400 active:bg-violet-600 px-5 sm:px-3 py-1 rounded text-violet-800">
          Select Files
        </button>
      </div>
    </>
  );
};

export default FromComputer;
