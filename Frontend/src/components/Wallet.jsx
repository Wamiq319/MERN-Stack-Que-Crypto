import React, { useState } from "react";
import axios from "axios";

const Wallet = () => {
  const walletaddress = localStorage.getItem("walletAddress") || undefined;
  const [walletAddress, setWalletAddress] = useState(walletaddress);
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [referralLink, setReferralLink] = useState("");

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
    if (walletAddress.length !== 10) {
      setMessage("Wallet address contain 10charcters only");
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(walletAddress)) {
      setMessage("Wallet Address must contain only alphanumeric characters");
      return;
    }

    setLoading(true);
    setUserDetails(null); // Reset userDetails before fetching
    const referredBy = getReferralIdFromUrl();
    console.log(walletAddress);
    axios
      .get(`/api/user`, {
        params: { walletAddress, referredBy },
      })
      .then((response) => {
        if (response.data && response.data.user) {
          console.log(response.data);
          setUserDetails(response.data.user);
          const newReferralLink = `${window.location.origin}?referralId=${response.data.user.referralId}`;
          setReferralLink(newReferralLink);

          localStorage.setItem(
            "walletAddress",
            response.data.user.walletAddress
          );
          setMessage(response.data.message || "Welcome");
        } else {
          console.log(response.data);
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
    <div className="max-w-4xl mx-auto px-6 py-1 bg-transparent rounded-lg">
      <div
        style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
        className="relative z-10 bg-white px-10 py-2 rounded-lg shadow-xl space-y-6"
      >
        {/* Show input form if there's no userDetails (wallet address is not yet fetched) */}
        {!userDetails && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primaryGreen">
              Enter Wallet Address
            </h2>
            <input
              type="text"
              value={walletAddress || ""}
              onChange={handleWalletAddressChange}
              className="mt-4 px-4 py-2 border rounded-md w-full"
              placeholder="Enter your wallet address"
            />
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

        {/* Show wallet details after successful fetch */}
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
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Wallet Balance
                </h4>
                <p className="text-xl text-textBlack">{userDetails.points}</p>
              </div>
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Total Referred
                </h4>
                <p className="text-xl text-textBlack">
                  {userDetails.referrals}
                </p>
              </div>
              <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primaryGreen">
                  Today
                </h4>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-textBlack">
                    {userDetails.dailyClaims} Points
                  </p>
                  <button className="px-6 py-2 text-sm text-primaryGreen border border-primaryGreen rounded-lg">
                    Claim
                  </button>
                </div>
              </div>
            </div>

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
