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

  // For detecting if the cards are in the viewport (for animation effects)
  useEffect(() => {
    const handleScroll = () => {
      const leftCard = document.getElementById("left-card");
      const rightCard = document.getElementById("right-card");
      if (leftCard && rightCard) {
        const leftCardInView =
          leftCard.getBoundingClientRect().top < window.innerHeight;
        const rightCardInView =
          rightCard.getBoundingClientRect().top < window.innerHeight;
        setInViewLeftCard(leftCardInView);
        setInViewRightCard(rightCardInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Smart Contract for Que Digital */}
      <div
        id="left-card"
        style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
        className={`${
          inViewLeftCard
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-120px]"
        } transition-all duration-[1000ms] ease-in-out hover:scale-105 transform bg-white  p-4 text-left mx-48 rounded-3xl`}
      >
        <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Smart Contract:
        </h2>
        <ul className="list-none font-light text-blue-500 space-y-2">
          <li>
            <FaKey className="inline mr-2" />{" "}
            <strong className="text-darkGray">Token Symbol:</strong> QD
          </li>
          <li>
            <FaAddressCard className="inline mr-2" />{" "}
            <strong className="text-darkGray">Contract Address:</strong>{" "}
            0x5b31B8cA1770CF1F817146B4cD2078Bf8629bf8a
          </li>
          <li>
            <FaCogs className="inline mr-2" />{" "}
            <strong className="text-darkGray">Decimals:</strong> 18
          </li>
          <li>
            <FaGlobe className="inline mr-2" />{" "}
            <strong className="text-darkGray">Total Supply:</strong> 3,000,000
          </li>
          <li className="text-nowrap">
            <FaAdn className="inline mr-2" />{" "}
            <strong className="text-darkGray">Blockchain:</strong>{" "}
            Multi-Blockchain (Supports Ethereum, Binance Smart Chain, and
            others)
          </li>
          <li>
            <FaWallet className="inline mr-2" />{" "}
            <strong className="text-darkGray">Wallet Creation:</strong> Create
            your own wallet directly on Que Digital
          </li>
        </ul>
      </div>

      <div className="mt-8 flex justify-between">
        {/* Pre-sale Card for Que Digital */}
        <div
          id="left-card"
          style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
          className={`${
            inViewLeftCard
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-150px]"
          } transition-all duration-[2000ms] ease-in-out hover:scale-105 transform bg-white mx-8 p-4 text-left w-1/2 rounded-3xl`}
        >
          <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Pre-sale Info for Que Digital:
          </h2>
          <ul className="list-none space-y-2 text-sm text-darkGray">
            <li>
              <strong>Pre-sale Quantity:</strong> 1,800,000 NS (60%)
            </li>
            <li>
              <strong>Pre-sale Price:</strong> 1 ETH = 10,000 NS. Minimum
              purchase: 0.1 ETH, Maximum purchase: 10 ETH.
            </li>
            <li>
              <strong>Pre-sale Date:</strong> Starts on October 04, 2021 (20:30
              UTC+8). Lasts for 30 days.
            </li>
            <li>
              <strong>Pre-sale Rules:</strong> Use your wallet to send ETH to
              the pre-sale address. Tokens are sent immediately after the
              transaction. The quantity of NS tokens for pre-sale is limited,
              and the quota is sorted by the arrival time of ETH (first come,
              first served).
            </li>
            <li>
              <strong>Post Pre-sale:</strong> 50% of the funds raised will be
              used for listing on Binance, Huobi, and Coinbase. The other 50%
              will be used to buyback NS tokens, preventing market dumps.
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
          } transition-all duration-[1500ms] ease-in-out hover:scale-105 transform bg-white mx-8 p-4 text-left w-1/2 rounded-3xl`}
        >
          <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Airdrop Info for Que Digital:
          </h2>
          <ul className="list-none space-y-2 text-sm text-darkGray">
            <li>
              <strong>Quantity:</strong> 600,000 NS (20%) will be distributed
              via airdrop.
            </li>
            <li>
              <strong>Airdrop Date:</strong> Airdrop starts at 20:30 (UTC+8) on
              October 04, 2021. The event lasts for 30 days.
            </li>
            <li>
              <strong>Airdrop Rules:</strong> Participate by submitting your ETH
              wallet address on the NFTSEA website. Each address will receive an
              initial 10 NS tokens. If the total airdrop amount exceeds the
              allocated 600,000 NS, the event will end early.
            </li>
            <li>
              <strong>Invitation Bonus:</strong> Users can earn 10 NS for each
              friend they invite (up to 50 friends, max 500 NS).
            </li>
            <li>
              <strong>Unclaimed Tokens:</strong> If tokens remain unclaimed
              after the airdrop, they will be permanently destroyed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
