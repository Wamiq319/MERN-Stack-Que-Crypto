import React from "react";
import HeroImage from "../assets/HeroImage.png";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-lightGreen flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
        {/* Illustration (on mobile first) */}
        <div className="order-1 md:order-2 mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

        <div className="order-2 md:order-1 text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-primaryGreen">
            Earn rewards by referring!
          </h1>
          <p className="text-textBlack text-base md:text-lg">
            Refer and earn rewards while spreading the word. Start earning
            today!
          </p>
          <div className="flex space-x-4 justify-center md:justify-start mt-6">
            <button className="px-6 py-2 text-white bg-primaryGreen rounded-lg hover:bg-opacity-90 transition">
              Start Referring
            </button>
            <button className="px-6 py-2 text-primaryGreen border border-primaryGreen rounded-lg hover:bg-primaryGreen hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
