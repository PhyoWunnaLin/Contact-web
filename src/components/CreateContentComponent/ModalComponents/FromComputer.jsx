// import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";
// import "./FromComputer.css";
// const fileTypes = ["JPG", "PNG", "GIF"];
// const FromComputer = () => {
//   const [file, setFile] = useState("");
//   const handleChange = (file) => {
//     setFile(file);
//     console.log(file);
//   };

//   return (
//     <div className=" h-96 flex flex-col justify-center items-center gap-10">
//       <div className=" w-[250px] h-[250px] rounded-[50%] bg-slate-100">
//         <img
//           className=" w-fit h-full"
//           src="https://freesvg.org/storage/img/thumb/Caricatura_de_una_chica_soriendo.png"
//           alt=""
//         />
//       </div>

//       <FileUploader handleChange={()=>handleChange(file)} name="file" types={fileTypes} />
//     </div>
//   );
// };

// export default FromComputer;
