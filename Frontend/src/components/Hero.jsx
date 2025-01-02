import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Initialize FinisherHeader once the component is mounted
    new window.FinisherHeader({
      count: 35,
      size: {
        min: 5,
        max: 120,
        pulse: 0.1,
      },
      speed: {
        x: {
          min: 0,
          max: 0.5,
        },
        y: {
          min: 0,
          max: 1,
        },
      },
      colors: {
        background: "#07ff88",
        particles: ["#ffffff"],
      },
      blending: "lighten",
      opacity: {
        center: 0,
        edge: 0.6,
      },
      skew: 0,
      shapes: ["c"],
    });
  }, []);

  return (
    <div className="header finisher-header w-full  z-10 md:py-40  py-20 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-8 overflow-hidden">
        <div className="text-center px-15">
          <h1 className="md:text-3xl text-xl text-white font-semibold leading-tight">
            Welcome to QUE
          </h1>
          <h6 className="md:text-6xl text-3xl text-white font-bold leading-tight">
            Earn Rewards <br></br> By Refering!
          </h6>
          <button className="mt-4 md:px-6 md:py-2 px-3 py-1  rounded-lg text-primaryGreen font-semibold boder-white bg-white ">
            <a href="#Wallet">Start Reffering</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
