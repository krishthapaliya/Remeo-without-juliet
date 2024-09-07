import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-between  p-4 bg-[#F0F8FF] text-black px-20 py-4 ">
=======
    <div className="flex items-center justify-between shadow shadow-yellow-50  bg-[#e0f0fe] text-black px-8 py-0.5">

>>>>>>> 425b77e5175c893acb697063244cd165cf2febe1
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 md:h-28" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-16">
        <Link
          to="/"
<<<<<<< HEAD
          className="hover:bg-blue-500 hover:text-white transition-colors  px-2 py-1 rounded-full text-base font-semibold text-gray-500"
=======
          className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full text-base font-semibold text-gray-500"
>>>>>>> 425b77e5175c893acb697063244cd165cf2febe1
        >
          HOME
        </Link>
        <Link
          to="/aboutus"
<<<<<<< HEAD
          className="hover:bg-blue-500 hover:text-white transition-colors  px-2 py-1 rounded-full text-base font-semibold text-gray-500"
=======
          className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full text-base font-semibold text-gray-500"
>>>>>>> 425b77e5175c893acb697063244cd165cf2febe1
        >
          ABOUT US
        </Link>
        <Link
<<<<<<< HEAD
          to="/event"
          className="hover:bg-blue-500 hover:text-white transition-colors  px-2 py-1 rounded-full text-base font-semibold text-gray-500"
=======
          to="/eventlist"
          className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full text-base font-semibold text-gray-500"
>>>>>>> 425b77e5175c893acb697063244cd165cf2febe1
        >
          EVENT LIST
        </Link>
        <Link
          to="/contactus"
<<<<<<< HEAD
          className="hover:bg-blue-500 hover:text-white transition-colors  px-2 py-1 rounded-full text-base font-semibold text-gray-500"
=======
          className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full text-base font-semibold text-gray-500"
>>>>>>> 425b77e5175c893acb697063244cd165cf2febe1
        >
          CONTACT US
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4 md:hidden">
          <button
            className="text-2xl absolute top-4 right-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
          <div className="flex flex-col space-y-4 mt-12">
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/eventlist"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EventList
            </Link>
            <Link
              to="/contactus"
              className="hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
