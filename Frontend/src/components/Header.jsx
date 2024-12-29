import React from "react";
import Logo from "../assets/Logo.png";
const Header = () => {
  const menuItems = ["Home", "Wallet", "About"];

  return (
    <header className="fixed top-2 z-50 w-11/12 mx-auto bg-white bg-opacity-70 backdrop-blur-md border-b border-lightGray shadow-md rounded-xl">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 md:w-20 md:h-5 object-contain"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-4 md:space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className="text-sm md:text-lg  font-semibold text-textBlack hover:text-primaryGreen transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="w-20 h-4 md:w-24 md:h-7 rounded-full  bg-primaryGreen font-semibold text-textBlack flex items-center justify-center">
          <a href="#Wallet">Wallet</a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
