import React, { useState } from "react";
import axios from "axios";
import Countdown from "./CountDown";
const Wallet = () => {
  // Step 1: Initialize state variables
  const walletaddress = localStorage.getItem("walletAddress") || undefined;
  const [walletAddress, setWalletAddress] = useState(walletaddress);
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [referralLink, setReferralLink] = useState("");
  const [claim, setClaim] = useState("daily");

  // Step 2: Get the referral ID from the URL parameters (if any)
  const getReferralIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("referralId") || null;
  };

  // Step 3: Handle changes to the wallet address input field
  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  // Step 4: Handle the form submission to fetch user details and for claim rewards
  const handleSubmit = () => {
    // Step 4.1: Basic validation for the wallet address
    if (!walletAddress) {
      setMessage("Wallet Address is required");
      return;
    }
    if (walletAddress.length !== 25) {
      setMessage("Wallet address must contain 25 characters only");
      return;
    }
    const pattern = /^[a-zA-Z][a-zA-Z0-9]{23}[0-9]$/;
    if (!pattern.test(walletAddress)) {
      setMessage(
        "Wallet Address must start with a letter, end with a digit, and be exactly 25 characters long, containing alphanumeric characters only."
      );
      return;
    }

    // Step 4.2: Set loading state and clear previous user details
    setLoading(true);
    setUserDetails(null); // Reset userDetails before fetching
    const referredBy = getReferralIdFromUrl(); // Get referral ID from URL if present

    // Step 4.3: Make the API request to fetch user details
    axios
      .get(`/api/user`, {
        params: { walletAddress, referredBy },
      })
      .then((response) => {
        if (response.data && response.data.user) {
          // Step 4.4: Set user details and generate referral link
          setUserDetails(response.data.user);
          const newReferralLink = `${window.location.origin}?referralId=${response.data.user.referralId}`;
          setReferralLink(newReferralLink);
          console.log(response.data);

          // Step 4.5: Store wallet address in localStorage
          localStorage.setItem(
            "walletAddress",
            response.data.user.walletAddress
          );
          setMessage(response.data.message || "Welcome");
        } else {
          setMessage(
            response.data.message ||
              "Unable to complete the request. Please try again."
          );
        }
      })
      .catch((error) => {
        // Step 4.6: Handle errors in API request
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Unable to complete the request. Please try again.");
        }
      })
      .finally(() => {
        // Step 4.7: Set loading state to false after the request completes
        setLoading(false);
      });
  };

  const handledailyClaim = () => {
    setClaim("daily");
    console.log(claim);
    handleClaim();
  };
  // Step 4: Handle the form submission to fetch user details
  const handleClaim = () => {
    // Step 4.1: Basic validation for the wallet address
    if (!walletAddress) {
      setMessage("Wallet Address is required");
      return;
    }
    if (walletAddress.length !== 25) {
      setMessage("Wallet address must contain 25 characters only");
      return;
    }
    const pattern = /^[a-zA-Z][a-zA-Z0-9]{23}[0-9]$/;
    if (!pattern.test(walletAddress)) {
      setMessage(
        "Wallet Address must start with a letter, end with a digit, and be exactly 25 characters long, containing alphanumeric characters only."
      );
      return;
    }

    // Step 4.2: Set loading state and clear previous user details
    setLoading(true);
    setUserDetails(null); // Reset userDetails before fetching

    // Step 4.3: Make the API request to update user details
    axios
      .get(`/api/claim-reward`, {
        params: { walletAddress, claim },
      })
      .then((response) => {
        if (response.data && response.data.user) {
          // Step 4.4: Set user details and generate referral link
          setUserDetails(response.data.user);
          const newReferralLink = `${window.location.origin}?referralId=${response.data.user.referralId}`;
          setReferralLink(newReferralLink);
          console.log(response.data);

          // Step 4.5: Store wallet address in localStorage
          localStorage.setItem(
            "walletAddress",
            response.data.user.walletAddress
          );
          setMessage(response.data.message || "Welcome");
        } else {
          setMessage(
            response.data.message ||
              "Unable to complete the request. Please try again."
          );
        }
      })
      .catch((error) => {
        // Step 4.6: Handle errors in API request
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Unable to complete the request. Please try again.");
        }
      })
      .finally(() => {
        // Step 4.7: Set loading state to false after the request completes
        setLoading(false);
      });
  };

  // Utility function to generate a random wallet address
  const generateWalletAddress = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate the first character (must be a letter)
    const firstCharacter = characters.charAt(Math.floor(Math.random() * 52)); // Only letters (A-Z, a-z)

    // Generate the middle 23 characters (can be any alphanumeric character)
    let middleCharacters = "";
    for (let i = 0; i < 23; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      middleCharacters += characters[randomIndex];
    }

    // Generate the last character (must be a digit)
    const lastCharacter = "0123456789".charAt(Math.floor(Math.random() * 10)); // Only digits (0-9)

    // Concatenate to form the full wallet address
    const walletAddress = firstCharacter + middleCharacters + lastCharacter;

    setWalletAddress(walletAddress);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-1 bg-transparent rounded-lg">
      <div
        style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
        className="relative z-10 bg-white px-3 py-2 rounded-lg shadow-xl space-y-6"
      >
        {/* Step 5: Show input form if user details are not available */}
        {!userDetails && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primaryGreen">
              Enter Wallet Address
            </h2>

            <div className="flex justify-center items-center space-x-2 w-full flex-wrap">
              <input
                type="text"
                value={walletAddress || ""}
                onChange={handleWalletAddressChange}
                className="mt-4 px-4 py-2 border rounded-md flex-1 min-w-[200px] h-12 focus:border-primaryGreen"
                placeholder="Enter your wallet address"
              />

              <button
                onClick={generateWalletAddress}
                className="mt-4 px-6 py-2 text-sm text-primaryGreen border border-primaryGreen rounded-lg min-w-[120px] h-12"
              >
                Generate
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="px-6 py-2 hover:text-primaryGreen hover:bg-transparent hover:border hover:border-primaryGreen rounded-lg bg-primaryGreen text-lg w-full text-white transition-all mt-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Show Wallet Details"}
            </button>
            {message && <small className="text-red-500">{message}</small>}
          </div>
        )}

        {/* Step 6: Show wallet details after successful fetch */}
        {userDetails && !loading && (
          <div className="relative z-10 mt-8 space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primaryGreen">
                Wallet Details
              </h3>
              <p className="text-lg text-textBlack mt-2">
                Your current balance and referral stats
              </p>
            </div>

            <div className="flex justify-between gap-3 mt-8">
              {/* Step 7: Show wallet balance */}
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Wallet Balance
                </h4>
                <p className="text-xl text-textBlack">{userDetails.points}</p>
              </div>
              {/* Step 8: Show total referrals */}
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Total Referred
                </h4>
                <p className="text-xl text-textBlack">
                  {userDetails.referrals}
                </p>
              </div>
              {/* Step 9: Show today's claim status */}
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Daily Claim
                </h4>
                {userDetails.canClaimToday == true ? (
                  <div className="flex justify-between items-center">
                    <p className="text-xl text-textBlack">10 Points</p>
                    <button
                      onClick={handledailyClaim}
                      className="px-6 py-2 text-sm text-primaryGreen border border-primaryGreen rounded-lg"
                    >
                      Claim
                    </button>
                  </div>
                ) : (
                  <Countdown timeLeft={userDetails.canClaimToday} />
                )}
              </div>
            </div>

            {/* Step 10: Display wallet address and referral link */}
            <div className="mt-4 text-center">
              <p className="text-center text-lg text-primaryGreen ">
                <span className="text-textBlack">Wallet Address:</span>
                {userDetails.walletAddress}
              </p>
              <p className="text-lg text-textBlack">
                Referral Link:{" "}
                <a
                  href={referralLink}
                  className="text-primaryGreen hover:underline"
                >
                  {referralLink}
                </a>
              </p>
            </div>

            {/* Step 11: Provide option to withdraw */}
            <div className="flex justify-between mt-6 space-x-4">
              <button className="px-6 py-2 hover:text-primaryGreen hover:bg-transparent hover:border hover:border-primaryGreen rounded-lg bg-primaryGreen text-lg w-full text-white transition-all">
                Withdraw
              </button>
            </div>
            {message && (
              <div className="text-base text-center text-orange-500 font-bold">
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
