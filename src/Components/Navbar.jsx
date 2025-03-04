import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4">
      <h1 className="w-full text-3xl text-[#00df9a] font-bold ">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Content</li>
        <li className="p-4">Resources</li>
        <li className="p-4">Team</li>
        <li className="p-4">About</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose color="#00df9a" fontSize="30px"/> : <AiOutlineMenu color="#00df9a" fontSize="30px" />}
        
      </div>
      <div className={!nav ? " fixed top-0 left-0 w-[60%] border-r-2 h-full border-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl text-[#00df9a] font-bold  p-10">REACT.</h1>
        <ul className="uppercase px-4 ">
          <li className="p-6 border-b-2 border-gray-900">Home</li>
          <li className="p-6 border-b-2 border-gray-900">Content</li>
          <li className="p-6 border-b-2 border-gray-900">Resources</li>
          <li className="p-6 border-b-2 border-gray-900">Team</li>
          <li className="p-6">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
