import React from "react";

const Hero = () => {
  // Function to check if today is the 1st of the month
  const isFirstOfMonth = () => {
    const today = new Date();
    return today.getDate() === 1;
  };

  // Function to calculate time left until the next 1st of the month
  const timeLeftUntilNextFirst = () => {
    const today = new Date();
    let nextFirst = new Date(today.getFullYear(), today.getMonth() + 1, 1); // Next 1st of the month
    return nextFirst - today; // Time difference in milliseconds
  };

  return (
    <div className="header finisher-header w-full z-10 md:py-40 py-20 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-8 overflow-hidden">
        <div className="text-center px-15">
          <h1 className="md:text-3xl text-xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondaryBlue  to-primaryGreen">
            Welcome! Earn Rewards  By Referring!
          </h1>
          

          {/* Conditional Rendering */}
          {isFirstOfMonth() ? (
            <button className="mt-4 md:px-6 md:py-2 px-3 py-1 rounded-lg text-primaryGreen font-semibold border-white bg-white">
              Daily Claim
            </button>
          ) : (
            <div className="mt-4 text-white font-semibold">
              Time left to next 1st of the month: {timeLeftUntilNextFirst()} ms
            </div>
          )}

          <button className="mt-4 md:px-6 md:py-2 px-3 py-1 rounded-lg text-primaryGreen font-semibold border-2 border-primaryGreen bg-white">
            <a href="#Wallet">Start Referring</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
