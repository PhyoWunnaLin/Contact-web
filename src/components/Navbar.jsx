import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/ai';


const Navbar = () => {
    const [searchOnclick,setSearchOnClick] = useState("off")
  return (
    <div >
        <div className=' flex justify-between items-center px-5 border py-5'>
                <div className={` ${searchOnclick == "on" ? "absolute top-5 sm:hidden" : "hidden"}`}>
                    <div className={` w-[200px] h-[50px] flex gap-3 border items-center rounded-lg bg-gray-100`}>
                        <AiOutlineSearch className=' text-gray-600 text-[25px] ml-3'></AiOutlineSearch>
                        <p className=' text-gray-400 text-sm '>Search</p>
                    </div>
                </div>

            <div className={` ${searchOnclick == "on" ? "hidden sm:flex" : "block"}  flex items-center gap-4`}>
                <RxHamburgerMenu className=' text-2xl text-gray-600'></RxHamburgerMenu>
                <div className=' flex items-center gap-4'>
                    <RiContactsBook2Fill className=' sm:block hidden text-[50px] text-blue-500'></RiContactsBook2Fill>
                    <h1 className=' text-2xl text-gray-600'>Contacts</h1>
                </div>
            </div>

            <div>
                <div className=' sm:block hidden'>
                    <div className=' lg:w-[600px] md:w-[400px] sm:w-[250px] h-[50px] rounded-lg border bg-gray-100 flex gap-3 items-center'>
                        <AiOutlineSearch className=' ml-3  text-gray-600 text-[25px]'></AiOutlineSearch>   
                        <input type="text" placeholder='Search' className=' bg-gray-100 flex-1 outline-none border-none'/>
                    </div>
                </div>
            </div>
            
            <div>
                <div className=' flex gap-5 items-center'>
                    <AiOutlineSearch onClick={()=> setSearchOnClick("on")} className={` ${searchOnclick == "on" ? "hidden" : "block"} sm:hidden block text-gray-600 text-[25px] ml-3`}></AiOutlineSearch>
                    <AiOutlineQuestionCircle className=' text-[20px] text-gray-600'></AiOutlineQuestionCircle>
                    <MdSettings className=' text-[20px] text-gray-600'></MdSettings>
                    <div className=' bg-[#ff7043] flex justify-center items-center w-[40px] h-[40px] rounded-full border'>
                        <p className=' text-lg text-white font-bold'>K</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Navbar