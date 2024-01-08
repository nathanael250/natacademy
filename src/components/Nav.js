import { HiAcademicCap } from "react-icons/hi";
import Btn from "./Btn"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [open,setOpen] = useState(false);
  let Links = [
    {name:"HOME", link:"/"},
    {name:"SERVICE", link:"/"},
    {name:"ABOUT", link:"/"},
    {name:"BLOG'S", link:"/"},
    {name:"CONTACT", link:"/"},
  ]
 
  return (
   <div className="w-full shadow-md fixed top-0 left-0">
    <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
      <div className="font-bold text-2xl p-6 cursor-pointer flex items-center font-[poppinis] text-gray-800">
   <span className="text-3xl text-indigo-600 mr-1 pt-2">
   <HiAcademicCap/>
   </span>
   Natset Academy
   </div >
   
   <div className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
    {open ? <IoClose /> : <IoMenu/> }
   
   
   </div>
   <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?'top-[71px] opacity-100':'top-[-500px]'} md:opacity-100 opacity-0`}>
     {
      Links.map((link)=>{
        return(
        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
          <a href={link.link} className="hover:text-gray-400 duration-500">{link.name}</a>
        </li>
        )
      })
     }
     <Btn>Get Started</Btn>
     
   </ul>
  
    </div>
   </div>
  )
}

export default Nav