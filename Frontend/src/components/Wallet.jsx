import React, { useState } from "react";
import axios from "axios";
import Countdown from "./Countdown";

const Wallet = () => {
  const walletaddress = localStorage.getItem("walletAddress") || undefined;
  const [walletAddress, setWalletAddress] = useState(walletaddress);
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [referralLink, setReferralLink] = useState("");
  const [claim, setClaim] = useState("daily");

  const getReferralIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("referralId") || null;
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = () => {
    if (!walletAddress) {
      setMessage("Wallet Address is required");
      return;
    }

    setLoading(true);
    setUserDetails(null);
    const referredBy = getReferralIdFromUrl();

    axios
      .get(`/api/user`, {
        params: { walletAddress, referredBy },
      })
      .then((response) => {
        if (response.data && response.data.user) {
          setUserDetails(response.data.user);
          const newReferralLink = `${window.location.origin}?referralId=${response.data.user.referralId}`;
          setReferralLink(newReferralLink);
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
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Unable to complete the request. Please try again.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handledailyClaim = () => {
    setClaim("daily");
    handleClaim();
  };

  const handleClaim = () => {
    if (!walletAddress) {
      setMessage("Wallet Address is required");
      return;
    }

    setLoading(true);
    setUserDetails(null);

    axios
      .get(`/api/claim-reward`, {
        params: { walletAddress, claim },
      })
      .then((response) => {
        if (response.data && response.data.user) {
          setUserDetails(response.data.user);
          const newReferralLink = `${window.location.origin}?referralId=${response.data.user.referralId}`;
          setReferralLink(newReferralLink);
          localStorage.setItem(
            "walletAddress",
            response.data.user.walletAddress
          );
          console.log(response.data.message);
          setMessage(response.data.message || "Welcome");
        } else {
          setMessage(
            response.data.message ||
              "Unable to complete the request. Please try again."
          );
        }
      })
      .catch((error) => {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Unable to complete the request. Please try again.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl sm:mx-auto mx-2 px-4 py-6 bg-transparent rounded-lg">
      <div
        style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
        className="relative z-10 bg-white px-4 py-3 rounded-lg shadow-xl space-y-6 hover:scale-95 transform transition-all duration-1000"
      >
        {!userDetails && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate__animated animate__fadeIn animate__delay-1s">
              Enter Wallet Address
            </h2>

            <div className="flex justify-center items-center space-x-2 w-full flex-wrap animate__animated animate__fadeIn animate__delay-2s">
              <input
                type="text"
                value={walletAddress || ""}
                onChange={handleWalletAddressChange}
                className="mt-4 px-4 py-2 border rounded-md flex-1 min-w-[200px] h-12 focus:border-blue-400 transition-all duration-300"
                placeholder="Enter your Sol wallet address"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="px-6 py-2 hover:text-green-400 hover:bg-transparent hover:border hover:border-green-400 rounded-lg bg-blue-400 text-lg w-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Show Wallet Details"}
            </button>

            {message && <small className="text-red-500">{message}</small>}
          </div>
        )}

        {userDetails && !loading && (
          <div className="relative z-10 mt-8 space-y-6">
            {/* Heading */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Wallet Details
              </h3>
              <p className="text-lg sm:text-base text-textBlack mt-2">
                Your current balance and referral stats
              </p>
            </div>

            {/* Wallet Info Cards */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-3 mt-8">
              <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Wallet Balance
                </h4>
                <p className="text-xl sm:text-lg text-textBlack">
                  {userDetails.points}
                </p>
              </div>

              <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Total Referred
                </h4>
                <p className="text-xl sm:text-lg text-textBlack">
                  {userDetails.referrals}
                </p>
              </div>

              <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Daily Claim
                </h4>
                {userDetails.canClaimToday == true ? (
                  <div className="flex justify-between items-center">
                    <p className="text-xl sm:text-lg text-textBlack">
                      10 Points
                    </p>
                    <button
                      onClick={handledailyClaim}
                      className="px-6 py-2 text-sm sm:text-base text-green-400 border border-green-400 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-lg"
                    >
                      Claim
                    </button>
                  </div>
                ) : (
                  <p className="flex space-x-2">
                    <Countdown
                      format="hour"
                      textSize="text-sm"
                      digitSize="text-xl font-semibold"
                      timeLeft={userDetails.canClaimToday}
                    />
                  </p>
                )}
              </div>
            </div>

            {/* Wallet Address & Referral Link */}
            <div className="mt-4 text-center">
              <p className="text-lg text-blue-400 break-all">
                <span className="text-textBlack">Wallet Address: </span>
                {userDetails.walletAddress}
              </p>
              <p className="text-lg sm:text-base text-textBlack break-all">
                Referral Link:{" "}
                <a
                  href={referralLink}
                  className="text-blue-400 hover:underline"
                >
                  {referralLink}
                </a>
              </p>
            </div>

            {/* Buttons - Full width on mobile */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base text-green-400 border border-green-400 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-lg"
                onClick={() =>
                  alert("Withdraw is not available, will be available soon")
                }
              >
                Withdraw
              </button>
              <button
                onClick={() => {
                  setUserDetails(null);
                  setMessage(null);
                }}
                className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base text-red-400 border border-red-400 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
