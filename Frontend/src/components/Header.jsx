import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const menuItems = ["Home", "Wallet", "About"];
  const [activeSection, setActiveSection] = useState(""); // Track active section

  return (
    <header className="fixed top-0 z-50 w-svw mx-auto bg-white bg-opacity-70 backdrop-blur-md border-b border-lightGray shadow-md">
      <nav className="flex py-3">
        {/* Logo */}
        <div className="flex-1 flex justify-start items-center">
          <img
            src={Logo}
            alt="Logo"
            className="mx-2 md:mx-5 w-14  md:w-28 object-contain"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex-1 space-x-2 md:space-x-6 flex justify-center items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className={`text-xs sm:text-sm md:text-lg font-semibold text-textBlack hover:text-primaryGreen transition-all duration-200 ${
                  activeSection === item ? "text-primaryGreen" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex-1 flex justify-end items-center">
          <button className="mx-3 px-3 py-1 text-xs sm:text-sm md:text-lg hover:text-primaryGreen hover:bg-transparent hover:border hover:border-primaryGreen rounded-lg bg-primaryGreen text-white transition-all">
            <a href="#Wallet">Wallet</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
