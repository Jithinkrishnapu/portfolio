import React from 'react';
import Link from 'next/link';
import Github from "../assets/github-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import GMail from "../assets/gmail-svgrepo-com.svg";
import Avatar from "../assets/avatar.jpeg"
import '../styles/Navbar.css'

interface Props {
    currentSection:string, handleClick:(section:string)=>void,handleBackClick:()=>void
}
const Navbar = ({ currentSection, handleClick,handleBackClick }:Props) => {
  return (
    <div className="flex-[1] px-5 top-3 z-30 md:z-10 h-[80px] overflow-hidden bg-black flex absolute w-[95%] left-[8px] justify-between items-center">
      <div className="flex-[3]">
      {/* <h1 onClick={handleBackClick} className="logo-3d font-mono">JK</h1> */}
      <img src='avatar.png' className='cursor-pointer object-cover w-[50px] h-[50px] rounded-full border border-gray-500' onClick={handleBackClick}  />
      </div>
      <div className="hidden bg-black md:flex space-x-4">
        {["Home", "About Me", "Portfolio", "Contact"].map((section) => (
          <h1
            key={section}
            className={`cursor-pointer transition duration-300 ${
                currentSection === section
                  ? "glossy-underline text-[#9333EA] transform scale-110"
                  : "hover:text-[#9333EA]"
              }`}
            onClick={() => handleClick(section)}
          >
            {section}
          </h1>
        ))}
      </div>
      <div className="flex flex-[3] justify-end items-center gap-2 ">
        <Link href="https://www.linkedin.com/in/jithin-krishna-078680177/">
          <LinkedIn height={25} width={25} fill={"#fff"} />
        </Link>
        <Link href="https://github.com/Jithinkrishnapu">
          <Github height={25} width={25} fill={"#fff"} />
        </Link>
        <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqLRrfLdfRKPKgtHtJHKrfFftscMPVrDFhXXPsXpjfKVgPQVgQWXDxsKppfWtlSfkkvjB">
          <GMail height={20} width={20} fill={"#fff"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
