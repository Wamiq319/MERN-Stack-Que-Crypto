// src/hooks/useUserDetails.js
import { useState, useEffect } from "react";
import axios from "axios";

const useUserDetails = (walletAddress, claim) => {
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [referralLink, setReferralLink] = useState("");

  const getReferralIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("referralId") || null;
  };

  useEffect(() => {
    if (!walletAddress) return;

    const fetchUserDetails = async () => {
      setLoading(true);
      setUserDetails(null);
      const referredBy = getReferralIdFromUrl();

      try {
        const response = await axios.get(`/api/user`, {
          params: { walletAddress, referredBy },
        });

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
      } catch (error) {
        setMessage(
          error.response?.data.message ||
            "Unable to complete the request. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [walletAddress]);

  const handleClaim = async () => {
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
        "Wallet Address must start with a letter, end with a digit, and be exactly 25 characters long."
      );
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`/api/claim-reward`, {
        params: { walletAddress, claim },
      });

      if (response.data && response.data.user) {
        setUserDetails(response.data.user);
        const newReferralLink = `${window.location.origin}?referralId=${response.data.user.referralId}`;
        setReferralLink(newReferralLink);
        localStorage.setItem("walletAddress", response.data.user.walletAddress);
        setMessage(response.data.message || "Claim successful");
      } else {
        setMessage(
          response.data.message ||
            "Unable to complete the request. Please try again."
        );
      }
    } catch (error) {
      setMessage(
        error.response?.data.message ||
          "Unable to complete the request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return { userDetails, message, loading, referralLink, handleClaim };
};

export default useUserDetails;
