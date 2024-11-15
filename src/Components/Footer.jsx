import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

function Footer() {
  return (
    <footer className="bg-l-black mt-10 text-white flex items-center px-20 justify-between h-16">
      <div className="flex items-center space-x-2 text-lg">
        <BiCopyright />
        <p className="text-lg font-roboto">Blogger</p>
      </div>
      <div className="flex text-[#808080] space-x-5 items-center font-roboto text-xl">
        <p className="text-white text-lg">Follow Us</p>
        <BsFacebook className="hover:text-[#1877f2] cursor-pointer hover:scale-[1.2] hover:shadow-xl" />
        <RiInstagramFill className="hover:text-[#f10162] cursor-pointer hover:scale-[1.2] hover:shadow-xl" />
        <BsTwitter className="hover:text-[#1c99e6] cursor-pointer hover:scale-[1.2] hover:shadow-xl" />
      </div>
    </footer>
  );
}

export default Footer;
