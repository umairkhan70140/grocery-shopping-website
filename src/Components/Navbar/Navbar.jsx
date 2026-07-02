import React, { useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll , setisScroll] = useState ()
      useEffect(()=>{
        const HandleScroll = ()=>{
 setisScroll(window.scrollY > 10)


      }

      window.addEventListener('scroll',HandleScroll)
      },[])

     
  return (
    <div className={`max-w-[1400px] h-[12vh] md:[14vh] mx-auto px-4 bg-white py-5 fixed top-0 left-0 right-0 z-50 ${isScroll ? "shadow-lg" : ""}`}>
      <nav className="flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Gr<span className="text-blue-500">o</span>sify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">About us</a></li>
          <li><a href="#" className="hover:text-blue-500">Process</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">

          {/* Search Bar */}
          <div className="md:flex border-2 border-blue-500 rounded-full hidden overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 focus:outline-none"
            />
            <div className="bg-blue-600 px-3 flex items-center justify-center text-white ">
              <IoMdSearch />
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-4 text-2xl">
            <IoIosHeart />
            <FaBagShopping />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 font-semibold bg-white shadow-lg p-4 rounded-lg">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Process</a>
          <a href="#">Contact us</a>

          {/* Mobile Search */}
          <div className="flex border-2 border-blue-500 rounded-full overflow-hidden mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-full focus:outline-none"
            />
            <div className="bg-blue-600 px-3 flex items-center justify-center text-white">
              <IoMdSearch />
            </div>
          </div>

          <div className="flex gap-6 text-2xl mt-2">
            <IoIosHeart />
            <FaBagShopping />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
