import React, { useState, useEffect } from "react";

const Header = () => {
  const fullMenu = ["Home", "Token", "Rewards", "Wallet", "RoadMap"];
  const mobileMenu = ["Token", "Rewards", "Wallet"]; // Only 3 items on mobile

  const [animationClass, setAnimationClass] = useState({
    logo: "opacity-0 translate-x-[-100px]",
    menu: "opacity-0 translate-y-10",
    button: "opacity-0 translate-x-[100px]",
  });

  useEffect(() => {
    setAnimationClass({
      logo: "opacity-100 translate-x-0",
      menu: "opacity-100 translate-y-0",
      button: "opacity-100 translate-x-0",
    });
  }, []);

  return (
    <header className="z-50 w-full mx-auto px-4">
      <nav className="flex py-2 items-center">
        {/* Logo */}
        <div
          className={`flex-1 flex justify-start items-center ${animationClass.logo} transition-all duration-1000 ease-in-out`}
        >
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-300">
            QUE
          </h1>
        </div>

        {/* Menu Items - 3 on Mobile, Full on Desktop */}
        <ul
          className={`flex flex-1 justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 ${animationClass.menu} transition-all duration-1000 ease-in-out`}
        >
          {(window.innerWidth < 768 ? mobileMenu : fullMenu).map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item}`}
                  className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-darkGray hover:text-primaryGreen transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Button */}
        <div
          className={`flex-1 flex justify-end items-center ${animationClass.button} transition-all duration-1000 ease-in-out`}
        >
          <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm md:text-base hover:text-blue-400 hover:bg-transparent hover:border hover:border-blue-400 rounded-lg bg-blue-400 text-white transition-all duration-300">
            <a href="#Wallet">Wallet</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
