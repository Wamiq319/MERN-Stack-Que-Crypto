import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  const isFirstOfMonth = () => {
    const today = new Date();
    return today.getDate() === 1;
  };

  const timeLeftUntilNextFirst = () => {
    const today = new Date();
    let nextFirst = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    return nextFirst - today;
  };

  useEffect(() => {
    if (!isFirstOfMonth()) {
      setTimeLeft(timeLeftUntilNextFirst());
    }
  }, []);

  return (
    <div className="header w-full z-10 md:py-16 py-8 overflow-hidden">
      <div className="text-center px-15">
        {/* Header - Fade-in */}
        <h2
          className={`sm:text-6xl text-4xl font-bold leading-normal md:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400 
          ${
            timeLeft ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } 
          transition-all duration-1000 ease-in-out`}
        >
          QUE Digital Token Airdrop
        </h2>

        <div className="flex justify-center md:gap-24 gap-1 mt-8">
          {/* Pre-sale Price Section - Slide-in Left */}
          <div
            style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
            className={`inline-block bg-white p-4 rounded-xl shadow-md text-left text-lg font-semibold text-darkGray py-4 md:block hidden space-y-4 
            ${
              timeLeft
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100px]"
            } 
            transition-all duration-1000 ease-in-out hover:scale-105`}
          >
            <p className="text-sm md:text-base">Pre-sale Price</p>
            <h3 className="text-3x md:text-5xl my-3 text-black">1000 Points</h3>
            <p className="text-sm md:text-base">= 1 ETH</p>
          </div>

          {/* Monthly / Countdown - Slide-in Right */}
          <div
            style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
            className={`inline-block bg-white p-4 rounded-xl shadow-md text-left text-lg font-semibold text-darkGray py-4 md:block space-y-4
            ${
              timeLeft
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[100px]"
            }
            transition-all duration-1000 ease-in-out hover:scale-105 `}
          >
            {isFirstOfMonth() ? (
              <button className="mt-4 md:px-6 md:py-2 px-3 py-1 rounded-lg text-primaryGreen font-semibold border-white bg-white text-sm md:text-base">
                Not Available
              </button>
            ) : (
              <div className="mt-4 font-semibold text-sm md:text-base text-darkGray">
                <p className="text-sm md:text-base">Airdrop Ending</p>
                <h3 className="text-3xl md:text-5xl my-3 text-blue-400">
                  <Countdown
                    timeLeft={timeLeftUntilNextFirst()}
                    format="days"
                  />
                </h3>
              </div>
            )}
          </div>
        </div>

        {/* Buttons - Fade-in */}
        <div
          className={`w-full flex justify-center md:gap-8 gap-4 mt-8 
          ${
            timeLeft ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } 
          transition-all duration-1000 ease-in-out`}
        >
          <button className="mt-4 bg-blue-400 md:px-6 md:py-2 px-3 py-1 rounded-xl text-white font-semibold blue-400 hover:bg-primaryGreen hover:text-darkGray hover:bg-white hover:border-2 hover:border-blue-400 hover:transform hover:-translate-y-2 transition-all duration-700">
            <a href="#Rewards">PreSale</a>
          </button>
          <button className="mt-4 md:px-6  md:py-2 px-3 py-1 rounded-lg text-darkGray font-semibold border-2 border-blue-400 bg-white hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-2 transition-all duration-700">
            <a href="#Rewards">AirDrop</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
