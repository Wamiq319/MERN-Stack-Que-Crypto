import React from "react";
import secure from "../assets/secure.svg";
import rewarding from "../assets/rewarding.svg";
import fast from "../assets/fast.svg";

const About = () => {
  return (
    <div className="bg-white text-center text-primaryGreen py-8 px-4 sm:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>

      {/* About Us Description */}
      <p className="text-base sm:text-lg max-w-3xl mx-auto text-textBlack mb-8">
        Welcome to Que Amkre, where referring pays off! Our simple "Refer and
        Earn" program allows you to earn rewards by sharing our platform with
        friends and family. It’s easy, minimal, and rewarding—just refer, earn,
        and enjoy. At Que Amkre, we value connections and believe in rewarding
        those who help us grow. Start sharing today and make the most out of
        every referral!
      </p>

      {/* Icons in Card Layout */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <img
            src={secure}
            alt="Secure"
            className="mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-2"
          />
          <h4 className="font-semibold text-lg sm:text-xl">Secure</h4>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Your referrals are protected. We ensure your data and rewards are
            secure at all times.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <img
            src={fast}
            alt="Fast"
            className="mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-2"
          />
          <h4 className="font-semibold text-lg sm:text-xl">Fast</h4>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Earn rewards quickly with our fast, simple referral process. Share
            and earn in no time.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
          <img
            src={rewarding}
            alt="Rewarding"
            className="mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-2"
          />
          <h4 className="font-semibold text-lg sm:text-xl">Rewarding</h4>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Get rewarded for every successful referral. The more you share, the
            more you earn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
