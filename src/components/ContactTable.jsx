import React, { useState } from 'react'
import { HiPrinter } from 'react-icons/hi';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineEdit } from 'react-icons/md';
import { CiImport, CiExport } from 'react-icons/ci';

const ContactTable = () => {
    const [isHovered, setIsHovered] = useState(null);

    const contacts = [
        {
          id: 1,
          name: 'Khine Zin Thin',
          email: 'khine@gmail.com',
          phoneNumber: '1234567890',
          address: 'ho ner d ner',
        },
        {
            id: 2,
            name: 'Khine Zin Thin',
            email: 'khine@gmail.com',
            phoneNumber: '1234567890',
            address: 'ho ner d ner',
          },
          {
            id: 3,
            name: 'Khine Zin Thin',
            email: 'khine@gmail.com',
            phoneNumber: '1234567890',
            address: 'ho ner d ner',
          },
      ];

    const handleMouseEnter = (index) => {
        setIsHovered(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

  return (
    <div  className=' bg-blue-100  h-screen '>
            <div className=' relative z-10'>
            <table className=' w-full'>
                <thead className=' border-b-2 border-b-white text-left'>
                    <tr className=''>
                        <th className=' px-10 py-4  text-sm font-semibold tracking-wide'>
                            <span className=' text-gray-600 text-left'>Name</span>
                        </th>
                        <th className=' px-10  py-4 max-sm:hidden text-sm font-semibold tracking-wide'>
                            <span className=' text-gray-600 text-left'>Email</span>
                        </th>
                        <th className=' px-10 py-4 max-md:hidden text-sm font-semibold tracking-wide'>
                            <span className=' text-gray-600 text-left'>Phone Number</span>
                        </th>
                        <th className=' px-10 py-4 max-lg:hidden text-sm font-semibold tracking-wide'>
                            <span className=' text-gray-600 text-left'>Address</span>
                        </th>
                        <th className=' px-10 py-4 flex flex-row items-center text-xl gap-3'>
                            <span>
                            <HiPrinter className=' relative top-[2px] text-gray-600'></HiPrinter>
                            </span>
                            <span>
                            <CiImport className=' relative top-[2px]'></CiImport>
                            </span>
                            <span>
                            <CiExport className=' relative top-[2px]'></CiExport>
                            </span>
                            <span>:</span>
                        </th>
                    </tr>
                </thead>
                <tbody className=' z-10'>
                    <tr>
                        <td className='px-10 py-4'>
                            <span className=' text-blue-600 font-bold'>CONTACTS</span>
                        </td>
                    </tr>

                    {contacts.map((contact,index)=>{
                        return(
                            <tr key={contact.id} className={` border-b-2 border-b-white ${isHovered === index? 'bg-[#90cdf49f]' : ''}  hover:backdrop:blur-sm duration-500`} onMouseEnter={()=>handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}>
                        <td className=' flex flex-row items-center text-left px-10 py-4 text-sm font-semibold lg:tracking-wide'>
                            <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] rounded-full' alt="" />
                            <span className=' text-gray-600 lg:pl-3 pl-1 text-sm lg:text-base'>{contact.name}</span>
                        </td>
                        <td className=' text-left px-10 max-sm:hidden py-4  text-sm font-semibold lg:tracking-wide'>
                            <span className=' text-gray-600 text-sm lg:text-base'>{contact.email}</span>
                        </td>
                        <td className=' text-left px-10 max-md:hidden py-4  text-sm font-semibold lg:tracking-wide'>
                            <span className=' text-gray-600 text-sm lg:text-base'>{contact.phoneNumber}</span>
                        </td>
                        <td className=' text-left max-lg:hidden px-10 py-4  text-sm font-semibold lg:tracking-wide'>
                            <span className=' text-gray-600'>{contact.address}</span>
                        </td>
                        <td className={` ${isHovered === index? 'block' : 'invisible'}  group text-gray-600 relative bottom-2 border-3 border-black text-left px-10 py-4 flex flex-row items-center text-xl gap-3`}>
                            <span>
                            <AiOutlineStar className=''></AiOutlineStar>
                            </span>
                            <span>
                            <MdOutlineEdit className=''></MdOutlineEdit>
                            </span>
                            <span className=''>:</span>
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>

            <svg className='  fixed left-0 bottom-0'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,64L24,96C48,128,96,192,144,213.3C192,235,240,213,288,181.3C336,149,384,107,432,128C480,149,528,235,576,245.3C624,256,672,192,720,170.7C768,149,816,171,864,197.3C912,224,960,256,1008,250.7C1056,245,1104,203,1152,186.7C1200,171,1248,181,1296,202.7C1344,224,1392,256,1416,272L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </div>
  )
}

export default ContactTable