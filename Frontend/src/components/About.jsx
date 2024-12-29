import React from "react";
import secure from "../assets/secure.svg";
import rewarding from "../assets/rewarding.svg";
import fast from "../assets/fast.svg";

const About = () => {
  return (
    <div className="bg-white text-center text-primaryGreen py-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">About Us</h2>

      {/* About Us Description */}
      <p className="text-lg max-w-3xl mx-auto text-textBlack mb-8">
        Welcome to Que Amkre, where referring pays off! Our simple "Refer and
        Earn" program allows you to earn rewards by sharing our platform with
        friends and family. It’s easy, minimal, and rewarding—just refer, earn,
        and enjoy. At Que Amkre, we value connections and believe in rewarding
        those who help us grow. Start sharing today and make the most out of
        every referral!
      </p>

      {/* Icons in Card Layout */}
      <div className="w-full flex justify-between items-center space-x-7 px-4">
        <div
          className="flex-1 text-center p-6  rounded-lg "
          style={{
            boxShadow: "0 1px 10px rgba(7, 255, 136, 0.4)",
          }}
        >
          <img src={secure} alt="Secure" className="mx-auto w-28 h-28 mb-2" />
          <h4 className="font-semibold">Secure</h4>
          <p className="text-sm text-gray-600 mt-2">
            Your referrals are protected. We ensure your data and rewards are
            secure at all times.
          </p>
        </div>

        <div
          className="flex-1 text-center p-6  rounded-lg "
          style={{
            boxShadow: "0 1px 10px rgba(7, 255, 136, 0.4)",
          }}
        >
          <img src={fast} alt="Fast" className="mx-auto w-28 h-28 mb-2" />
          <h4 className="font-semibold">Fast</h4>
          <p className="text-sm text-gray-600 mt-2">
            Earn rewards quickly with our fast, simple referral process. Share
            and earn in no time.
          </p>
        </div>

        <div
          className="flex-1 text-center p-6  rounded-lg "
          style={{
            boxShadow: "0 1px 10px rgba(7, 255, 136, 0.4)",
          }}
        >
          <img
            src={rewarding}
            alt="Rewarding"
            className="mx-auto w-28 h-28 mb-2"
          />
          <h4 className="font-semibold">Rewarding</h4>
          <p className="text-sm text-gray-600 mt-2">
            Get rewarded for every successful referral. The more you share, the
            more you earn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
