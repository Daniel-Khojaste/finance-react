import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [Nav, setNav] = useState(false);

  const HandleNav= () => {
    setNav(!Nav)
  }
  return (
    <div>
      <div className="text-white px-8 flex justify-between items-center h-24 max-w-[1240px] mx-auto">
        <h2 className="text-[#00df9a] font-bold text-3xl w-full">React.</h2>
        <ul className="hidden md:flex gap-9">
          <li>Home</li>
          <li>Team</li>
          <li>Content</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div onClick={HandleNav} className=" md:hidden">
            {!Nav ? <AiOutlineClose color="#00df9a" fontSize={24} /> : <AiOutlineMenu color="#00df9a" fontSize={24} />}
        </div>
        
        <div className={!Nav ? "fixed top-0 left-0 pt-8 h-full w-[60%] border-r-2 border-gray-500 bg-[#000300] ease-in-out duration-900 " : "fixed left-[-50%] ease-out duration-900"}>
        <ul >
        <h2 className="text-[#00df9a] font-bold text-3xl w-full pb-9 pl-9">React.</h2>
          <li className="px-9 py-8 border-b-2 border-gray-500">Home</li>
          <li className="px-9 py-8 border-b-2 border-gray-500">Team</li>
          <li className="px-9 py-8 border-b-2 border-gray-500">Content</li>
          <li className="px-9 py-8 border-b-2 border-gray-500">About</li>
          <li className="px-9 pt-8 ">Contact</li>
        </ul>
        </div>


      </div>
    </div>
  );
};

export default NavBar;
