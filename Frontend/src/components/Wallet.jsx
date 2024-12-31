import React, { useState } from "react";
import { fetchUserByWallet } from "../api/userAPI";

const Wallet = () => {
  // State for wallet number, wallet details, and visibility
  const [walletNumber, setWalletNumber] = useState("");
  const [walletDetails, setWalletDetails] = useState(null);
  const [isWalletEntered, setIsWalletEntered] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for API request
  const [error, setError] = useState(""); // Error message for failed request

  // Handle change in wallet number input field
  const handleWalletNumberChange = (e) => {
    setWalletNumber(e.target.value);
  };

  // Handle submit (API request to fetch user data by wallet)
  const handleSubmit = async () => {
    if (!walletNumber) {
      setError("Please enter a valid wallet address.");
      return;
    }

    setLoading(true); // Start loading state
    setError(""); // Reset previous error messages

    try {
      const userData = await fetchUserByWallet(walletNumber); // Fetch data from the API
      if (userData) {
        setWalletDetails(userData); // Set the fetched wallet details
        setIsWalletEntered(true); // Show wallet details section
      } else {
        setError("No user found with this wallet address."); // Handle case where user is not found
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching wallet details."); // Handle API errors
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-1 bg-transparent rounded-lg relative overflow-hidden">
      {/* Card with a custom green glow effect */}
      <div
        style={{
          boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)", // Custom green glow effect
        }}
        className="relative z-10 bg-white px-10 py-2 rounded-lg shadow-xl space-y-6"
      >
        {/* Wallet Number Input Field */}
        {!isWalletEntered ? (
          <div className="text-center">
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
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Show Wallet Details"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
            {/* Error display */}
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
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Wallet Balance
                </h4>
                <p className="text-xl text-textBlack">
                  ${walletDetails.balance}
                </p>
              </div>
              {/* Total Referred Card */}
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Total Referred
                </h4>
                <p className="text-xl text-textBlack">
                  {walletDetails.totalReferred}
                </p>
              </div>
              {/* Claimable Today Card */}
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Today
                </h4>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-textBlack">
                    {walletDetails.claimableToday} Points
                  </p>

                  <button className="px-6 py-2 text-sm text-primaryGreen border border-primaryGreen rounded-lg hover:bg-primaryGreen hover:text-white transition w-full md:w-auto">
                    Claim
                  </button>
                </div>
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
                Records
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
