import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";
import "./FromComputer.css";
const fileTypes = ["JPG", "PNG", "GIF"];
const FromComputer = () => {
  const [file1, setFile] = useState("");
  //   const handleChange = (file) => {
  //     setFile(file);
  //   };
  const dropHandler = (e) => {
    e.preventDefault();
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };
  const dragHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className=" h-96 flex flex-col justify-center items-center gap-10">
      <div
        id="dropHere"
        onDrop={() => dropHandler(e)}
        onDragOver={() => dragHandler(e)}
        className=" w-[250px] h-[250px] rounded-[50%] bg-slate-100">
        <img
          className=" w-fit h-full"
          src="https://freesvg.org/storage/img/thumb/Caricatura_de_una_chica_soriendo.png"
          alt=""
        />
      </div>
      <input id="dropHere" type="file" placeholder=" drop Here" />
      {/* <FileUploader
        handleChange={() => handleChange(file)}
        name="file"
        types={fileTypes}
      /> */}
    </form>
  );
};

export default FromComputer;
