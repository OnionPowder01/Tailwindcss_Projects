import React, { useState } from "react";
import logo from "../images/logo.svg";


function NavBar() {

const [open, setOpen] = useState(false)

function handleClick() {
      setOpen(prevState => !prevState)
      
}

  return (
    // Nav Container
    <nav className="relative container mx-auto p-6">
      {/* Flex Container for All Items  */}
      <div className="flex items-center justify-between">
        {/* Flex Container For Logo/Menu */}
        <div className="flex items-center space-x-20">
          {/* Logo */}
          <img src={logo} alt="logo" />
          {/* Left Menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <button className="text-grayishViolet hover:text-veryDarkViolet">
              Features
            </button>
            <button className="text-grayishViolet hover:text-veryDarkViolet">
              Pricing
            </button>
            <button className="text-grayishViolet hover:text-veryDarkViolet">
              Resources
            </button>
          </div>
        </div>
        {/* Right Buttons Menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <button className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
            Sign Up
          </button>
        </div>

        {/* Hamburger Button  */}
        <button
          id="menu-btn"
          className={`block hamburger lg:hidden focus:outline-none ${open ? 'open' : ''}`}
          type="button"
          onClick={handleClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 ${open ? 'flex' : 'hidden'}`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <button className="w-full text-center">Features</button>
          <button className="w-full text-center">Pricing</button>
          <button className="w-full text-center">Resources</button>
          <button className="w-full pt-6 border-t border-gray-400 text-center">
            Login
          </button>
          <button className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
