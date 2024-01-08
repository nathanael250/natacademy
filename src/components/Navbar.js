import React, { useState } from 'react'
import Button from './Button'
import { HiAcademicCap } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const Lists = [
        {name:"Home",link:"/"},
        {name:"About Us",link:"/"},
        {name:"Service",link:"/"},
        {name:"Blog's",link:"/"},
        {name:"Contact",link:"/"},
    ]
    const [open,setOpen] = useState(true);
  return (
    
    <div className='w-full shadow-md fixed left-0 top-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='flex items-center cursor-pointer text-2xl font-bold text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1'>
                    <HiAcademicCap/>
                </span>
                Nat Academy
            </div>
            <div className='text-3xl absolute right-8 top-[20px] md:hidden' onClick={()=>{
                setOpen(!open);
            }}>
                {open ? <IoClose /> : <IoMenu/>}
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:w-auto w-full bg-white left-0 pl-9 md:z-auto z-[-1] transtion-all duration-500 ease-in ${open ? 'top-[65px]' :'top-[-400px]'}`}>
                {
                    Lists.map((link) => {
                        return(
                            <li className='md:mr-4 text-xl md:my-0 my-7'>
                                <a href={link.link} className='hover:text-gray-500'>{link.name}</a>
                            </li>
                        )
                    })
                }
                <Button></Button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar