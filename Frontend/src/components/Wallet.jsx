import React, { useState } from "react";

const Wallet = () => {
  // State for wallet number, wallet details, and visibility
  const [walletNumber, setWalletNumber] = useState("");
  const [walletDetails, setWalletDetails] = useState(null);
  const [isWalletEntered, setIsWalletEntered] = useState(false); // Track if the wallet ID is entered

  // Sample wallet data (replace with actual data from your backend)
  const sampleWalletData = {
    balance: 1200, // Example balance
    totalReferred: 50, // Example total referred users
    claimableToday: 100, // Points claimable today
    referralLink: "https://example.com/referral-link", // Example referral link
  };

  // Handle wallet number input and simulate fetching wallet details
  const handleWalletNumberChange = (e) => {
    setWalletNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (walletNumber) {
      // Simulate fetching wallet details based on the wallet number
      setWalletDetails(sampleWalletData);
      setIsWalletEntered(true); // Set state to show wallet details
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-2xl border-2 border-primaryGreen relative overflow-hidden">
      {/* Lightning Effect (Green Glow) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primaryGreen to-transparent opacity-20 z-0"></div>

      {/* Wallet Number Input Field */}
      {!isWalletEntered ? (
        <div className="relative z-10 mb-6 text-center">
          <h2 className="text-3xl font-bold text-primaryGreen">
            Enter Wallet Number
          </h2>
          <input
            type="text"
            value={walletNumber}
            onChange={handleWalletNumberChange}
            className="mt-4 px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            placeholder="Enter your wallet number"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 text-white bg-primaryGreen rounded-lg hover:bg-opacity-90 transition w-full"
          >
            Show Wallet Details
          </button>
        </div>
      ) : (
        // Wallet Details Section
        <div className="relative z-10 mt-8 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primaryGreen">
              Wallet Details
            </h3>
            <p className="text-lg text-textBlack mt-2">
              Your current balance and referral stats
            </p>
          </div>

          {/* Small Cards Section */}
          <div className="flex justify-between gap-4 mt-8">
            {/* Wallet Balance Card */}
            <div className="w-1/3 bg-lightGreen p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-primaryGreen">
                Wallet Balance
              </h4>
              <p className="text-xl text-textBlack">${walletDetails.balance}</p>
            </div>
            {/* Total Referred Card */}
            <div className="w-1/3 bg-lightGreen p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-primaryGreen">
                Total Referred
              </h4>
              <p className="text-xl text-textBlack">
                {walletDetails.totalReferred}
              </p>
            </div>
            {/* Claimable Today Card */}
            <div className="w-1/3 bg-lightGreen p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-primaryGreen">
                Claim Today
              </h4>
              <p className="text-xl text-textBlack">
                {walletDetails.claimableToday} Points
              </p>
            </div>
          </div>

          {/* Referral Link Section */}
          <div className="mt-4 text-center">
            <p className="text-lg text-textBlack">Referral Link</p>
            <a
              href={walletDetails.referralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryGreen hover:underline"
            >
              {walletDetails.referralLink}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6 space-x-4">
            <button className="px-6 py-2 text-white bg-primaryGreen rounded-lg hover:bg-opacity-90 transition w-full md:w-auto">
              Withdraw
            </button>
            <button className="px-6 py-2 text-primaryGreen border border-primaryGreen rounded-lg hover:bg-primaryGreen hover:text-white transition w-full md:w-auto">
              Record Referral
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
