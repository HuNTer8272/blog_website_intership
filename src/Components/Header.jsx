import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from './../assets/Images/Logo.png';
import { IoIosSearch } from 'react-icons/io';

function Header() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path ? 'font-bold' : '';
  };

  return (
    <div className="fixed z-10 top-0 left-0 right-0 h-[90px] font-poppins bg-[#fafafa] border-b border-off-white border-2 border-solid xl:pr-14 flex justify-between items-center px-3 py-4 md:pl-7 xl:pl-14">
      <div className="flex items-center justify-center space-x-1 sm:space-x-3 xl:space-x-6">
        <img src={logo} alt="logo" className="w-[40px] h-[40px] xl:w-[40px] xl:h-[40px]" />
        <h1 className="font-roboto text-lg font-bold sm:text-2xl text-l-black">Blogger</h1>
      </div>
      <ul className="flex space-x-5 sm:space-x-5 md:space-x-9 lg:space-x-12 xl:space-x-20 2xl:space-x-28">
        <NavLink exact to="/" className={`text-l-black cursor-pointer text-xs xl:text-lg hover:scale-[1.1]  duration-100 ease-in-out ${isActiveLink('/')}`}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/About" className={`text-l-black cursor-pointer text-xs xl:text-lg  hover:scale-[1.1] duration-100 ease-in-out ${isActiveLink('/About')}`}>
          <li>About Us</li>
        </NavLink>
        <NavLink to="/Contact" className={`text-l-black cursor-pointer text-xs xl:text-lg  hover:scale-[1.1] duration-100 ease-in-out ${isActiveLink('/Contact')}`}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="flex justify-center text-items-center relative pr-3 md:pr-8">
        <IoIosSearch className="absolute left-4 top-[13px] text-[17px] text-gray-600 z-10" />
        <input
          type="text"
          placeholder="Search"
          className="p-2 pr-5 xl:w-[300px] xl:h-[45px] text-gray-600 drop-shadow-lg line-clamp-1 outline-none focus:drop-shadow-cl duration-300 ease-in-out bg-off-white rounded-full pl-10 w-32 md:w-44 sm:w-36"
        />
      </div>
    </div>
  );
}

export default Header;
