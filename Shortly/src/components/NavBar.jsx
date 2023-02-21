import React from "react";
import logo from "../images/logo.svg";

function NavBar() {
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
                {/* @todo Hamburger Menu */}
            </div>
            {/* @todo Mobile Menu */}
        </nav>
    );
}

export default NavBar;
