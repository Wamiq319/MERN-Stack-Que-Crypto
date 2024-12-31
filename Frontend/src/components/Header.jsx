import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const menuItems = ["Home", "Wallet", "About"];
  const [activeSection, setActiveSection] = useState(""); // Track active section

  // // Function to handle scroll events
  // const handleScroll = () => {
  //   const sections = document.querySelectorAll("section");
  //   let currentSection = "";

  //   sections.forEach((section) => {
  //     const rect = section.getBoundingClientRect();
  //     console.log(rect);
  //     if (rect.top <= 120 && rect.bottom >= 120) {
  //       currentSection = section.id; // Update active section when it's in view
  //     }
  //   });

  //   setActiveSection(currentSection); // Update the active section state
  // };

  // useEffect(() => {
  //   // Listen for scroll events
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup listener on component unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="fixed px-5 py-2 top-0 z-50 w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md border-b border-lightGray shadow-md">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="md:w-15 w-15 h-7 md:h-7 object-contain"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-4 md:space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className={`text-sm md:text-lg font-semibold text-textBlack hover:text-primaryGreen transition-all duration-200 ${
                  activeSection === item ? "text-primaryGreen" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="px-6 py-1 hover:text-primaryGreen hover:bg-transparent hover:border hover:border-primaryGreen rounded-lg bg-primaryGreen text-lg text-white transition-all">
          <a href="#Wallet">Wallet</a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
