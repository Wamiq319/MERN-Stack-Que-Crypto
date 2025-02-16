import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

const Hero = () => {
  // Step 1: Initialize state for time left until the next 1st of the month
  const [timeLeft, setTimeLeft] = useState(null);

  // Step 2: Function to check if today is the 1st of the month
  const isFirstOfMonth = () => {
    const today = new Date();
    return today.getDate() === 1;
  };

  // Step 3: Function to calculate time left until the next 1st of the month
  const timeLeftUntilNextFirst = () => {
    const today = new Date();
    let nextFirst = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    return nextFirst - today;
  };

  // Step 4: Update state for time left if today is not the 1st of the month
  useEffect(() => {
    if (!isFirstOfMonth()) {
      setTimeLeft(timeLeftUntilNextFirst());
    }
  }, []);

  return (
    <div className="header w-full z-10 md:py-16 py-8 overflow-hidden">
      <div className="text-center px-15">
        {/* Header */}
        <h1 className="md:text-6xl text-xl font-semibold leading-normal md:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-secondaryBlue to-primaryGreen">
          QUE Digital Token Airdrop
        </h1>

        <div className="flex justify-center  md:gap-24 gap-1 mt-8">
          {/* Pre-sale Price Section - Hidden on Mobile */}
          <div
            style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
            className="inline-block bg-white p-4 rounded-xl shadow-md text-left text-lg font-semibold text-darkGray py-4 md:block hidden space-y-4"
          >
            <p className="text-sm md:text-base">Pre-sale Price</p>
            <h3 className="text-3x md:text-5xl my-3 text-black">1000 Points</h3>
            <p className="text-sm md:text-base">= 1 ETH</p>
          </div>

          {/* Monthly / Countdown */}

          <div
            style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
            className="inline-block   bg-white p-4 rounded-xl shadow-md text-left text-lg font-semibold text-darkGray py-4 md:block  space-y-4"
          >
            {/* Conditional Rendering */}
            {isFirstOfMonth() ? (
              <button className="mt-4 md:px-6 md:py-2 px-3 py-1 rounded-lg text-primaryGreen font-semibold border-white bg-white text-sm md:text-base">
                Not Available
              </button>
            ) : (
              <div className="mt-4  font-semibold text-sm md:text-base text-darkGray">
                <p className="text-sm md:text-base ">Airdrop Ending</p>
                <h3 className="text-3xl md:text-5xl my-3 text-secondaryBlue">
                  <Countdown
                    timeLeft={timeLeftUntilNextFirst()}
                    format="days"
                  />
                </h3>
              </div>
            )}
          </div>
        </div>

        {/* Start Referring Button */}
        <button className="mt-4 md:px-6 md:py-2 px-3 py-1 rounded-lg text-primaryGreen font-semibold border-2 border-primaryGreen bg-white">
          <a href="#Wallet">Start Referring</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
