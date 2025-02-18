import React, { useState, useEffect } from "react";

const Header = () => {
  const menuItems = ["Home", "Token", "Rewards", "Wallet", "RoadMap"];
  const [animationClass, setAnimationClass] = useState({
    logo: "opacity-0 translate-x-[-100px]", // Initial logo class
    menu: "opacity-0 translate-y-10", // Initial menu items class
    button: "opacity-0 translate-x-[100px]", // Initial button class
  });

  useEffect(() => {
    // Trigger animation after the component is mounted
    setAnimationClass({
      logo: "opacity-100 translate-x-0", // Logo slides in
      menu: "opacity-100 translate-y-0", // Menu items fade in
      button: "opacity-100 translate-x-0", // Button slides in
    });
  }, []);

  return (
    <header className="z-50 w-full mx-auto">
      <nav className="flex py-3">
        {/* QUE Text - Gradient, Bold, Slide in from Left */}
        <div
          className={`flex-1 flex justify-start items-center 
            ${animationClass.logo}
            transition-all duration-1000 ease-in-out`}
        >
          <h1 className=" mx-5 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-300">
            QUE
          </h1>
        </div>

        {/* Menu Items - Fade in */}
        <ul
          className={`flex-1 space-x-2 md:space-x-6 flex justify-center items-center 
            ${animationClass.menu} 
            transition-all duration-1000 ease-in-out`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className={`text-xs sm:text-sm md:text-lg font-semibold text-textBlack hover:text-primaryGreen transition-all duration-200`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Button - Slide in from Right */}
        <div
          className={`flex-1 flex justify-end items-center 
            ${animationClass.button} 
            transition-all duration-1000 ease-in-out`}
        >
          <button className="mx-3 px-3 py-1 text-xs sm:text-sm md:text-lg hover:text-blue-400 hover:bg-transparent hover:border hover:border-blue-400 rounded-lg bg-blue-400 text-white transition-all duration-1000">
            <a href="#Wallet">Wallet</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
