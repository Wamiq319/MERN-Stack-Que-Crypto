import React, { useState, useEffect } from "react";
import {
  FaKey,
  FaAddressCard,
  FaCogs,
  FaGlobe,
  FaAdn,
  FaWallet,
} from "react-icons/fa";

const Rewards = () => {
  const [inViewLeftCard, setInViewLeftCard] = useState(false);
  const [inViewRightCard, setInViewRightCard] = useState(false);
  const [inViewTopCard, setInViewTopCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftCard = document.getElementById("left-card");
      const rightCard = document.getElementById("right-card");
      const topCard = document.getElementById("top-card");

      if (leftCard && typeof setInViewLeftCard === "function") {
        setInViewLeftCard(
          leftCard.getBoundingClientRect().top < window.innerHeight
        );
      }
      if (rightCard && typeof setInViewRightCard === "function") {
        setInViewRightCard(
          rightCard.getBoundingClientRect().top < window.innerHeight
        );
      }
      if (topCard && typeof setInViewTopCard === "function") {
        setInViewTopCard(
          topCard.getBoundingClientRect().top < window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Smart Contract for Que Digital */}
      <div
        id="top-card"
        style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
        className={`${
          inViewTopCard
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-120px]"
        } transition-all duration-[1000ms] ease-in-out hover:scale-95 transform bg-white  p-4 text-left mx-4 sm:mx-80 rounded-3xl`}
      >
        <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Smart Contract:
        </h2>
        <ul className="list-none font-light text-blue-500 space-y-2">
          <li>
            <FaKey className="inline mr-2" />{" "}
            <strong className="text-darkGray">Token Symbol:</strong> QD
          </li>
          <li className="text-nowrap">
            <FaAddressCard className="inline mr-2 break-all" />{" "}
            <strong className="text-darkGray ">Address:</strong>{" "}
            0x5b31B8cA1770CF1HJSFdklM
          </li>
          <li>
            <FaCogs className="inline mr-2" />{" "}
            <strong className="text-darkGray">Decimals:</strong> 18
          </li>
          <li>
            <FaGlobe className="inline mr-2" />{" "}
            <strong className="text-darkGray">Total Supply:</strong> 3,000,000
          </li>
          <li>
            <FaAdn className="inline mr-2" />{" "}
            <strong className="text-darkGray">Blockchain:</strong>{" "}
            Multi-Blockchain (Ethereum, Binance, etc.)
          </li>
          <li>
            <FaWallet className="inline mr-2" />{" "}
            <strong className="text-darkGray">Wallet Creation:</strong> Create
            your own wallet directly on Que Digital
          </li>
        </ul>
      </div>

      <div className="mt-8 justify-between hidden sm:flex">
        {/* Pre-sale Card for Que Digital */}
        <div
          id="left-card"
          style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
          className={`${
            inViewLeftCard
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-150px]"
          } transition-all duration-[1000ms] ease-in-out hover:scale-95 transform bg-white mx-8 p-4 text-left w-1/2 rounded-3xl`}
        >
          <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Pre-sale Info for Que Digital:
          </h2>
          <ul className="list-none space-y-2 text-sm text-darkGray">
            <li>
              <strong>Pre-sale Quantity:</strong> 1,800,000 NS (60%)
            </li>
            <li>
              <strong>Pre-sale Price:</strong> 1 ETH = 10,000 NS. Min: 0.1 ETH,
              Max: 10 ETH.
            </li>
            <li>
              <strong>Pre-sale Date:</strong> Starts on October 04, 2021 (20:30
              UTC+8).
            </li>
            <li>
              <strong>Pre-sale Rules:</strong> Use your wallet to send ETH to
              the pre-sale address.
            </li>
            <li>
              <strong>Post Pre-sale:</strong> 50% of raised funds go to listing;
              50% for buyback.
            </li>
          </ul>
        </div>

        {/* Airdrop Card for Que Digital */}
        <div
          id="right-card"
          style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
          className={`${
            inViewRightCard
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[120px]"
          } transition-all duration-[1000ms] ease-in-out hover:scale-95 transform bg-white mx-8 p-4 text-left w-1/2 rounded-3xl`}
        >
          <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Airdrop Info for Que Digital:
          </h2>
          <ul className="list-none space-y-2 text-sm text-darkGray">
            <li>
              <strong>Quantity:</strong> 600,000 NS (20%) via airdrop.
            </li>
            <li>
              <strong>Airdrop Date:</strong> Starts at 20:30 (UTC+8) on October
              04, 2021.
            </li>
            <li>
              <strong>Airdrop Rules:</strong> Submit your ETH wallet address to
              participate.
            </li>
            <li>
              <strong>Invitation Bonus:</strong> Earn 10 NS per invited friend
              (max 500 NS).
            </li>
            <li>
              <strong>Unclaimed Tokens:</strong> Will be permanently destroyed
              after the airdrop.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
