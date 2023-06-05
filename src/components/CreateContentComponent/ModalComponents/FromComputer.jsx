import React, { useEffect, useId, useState } from "react";

import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setimages } from "../../../redux/services/contactSlice";

const fileTypes = ["JPG", "PNG", "GIF"];
const FromComputer = ({ close }) => {
  const [file, setFile] = useState(null);
  const input = useRef();
  const [src, setSrc] = useState("");
  const dispatch = useDispatch();

  if (file) {
    const blob = new Blob(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(blob);
    fileReader.addEventListener("load", (e) => {
      // console.log(e.target.result);
      let result = e.target.result;
      if (src != result) {
        setSrc(result);
      }
    });
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files);
  };

  const uploadedHandler = () => {
    dispatch(setimages(src));
    close();
  };
  if (file)
    return (
      <div className="h-[350px] flex flex-col justify-center items-center gap-10">
        <img
          src={src}
          alt=""
          className="rounded-[50%] w-[150px] h-[150px] object-cover object-center"
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
