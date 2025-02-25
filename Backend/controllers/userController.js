import { Connection, PublicKey } from "@solana/web3.js";
import UserModel from "../models/user.js";

// Solana RPC URL
const solanaRpcUrl = "https://api.mainnet-beta.solana.com";
const connection = new Connection(solanaRpcUrl, "confirmed");

// Register User function (Solana)
export const registerUser = async (req, res) => {
  const { walletAddress, referredBy } = req.query;

  // Step 1: Validate wallet address presence
  if (!walletAddress) {
    return res
      .status(400)
      .json({ user: null, message: "Wallet Address is required" });
  }

  try {
    // Step 2: Check if wallet address is valid
    let publicKey;
    try {
      publicKey = new PublicKey(walletAddress);
    } catch (error) {
      return res
        .status(400)
        .json({ user: null, message: "Invalid Solana wallet address format" });
    }

    if (!PublicKey.isOnCurve(publicKey.toBytes())) {
      return res
        .status(400)
        .json({ user: null, message: "Invalid Solana wallet address" });
    }

    // Step 3: Check if wallet exists on the blockchain
    const accountInfo = await connection.getAccountInfo(publicKey);

    // Step 4: Get balance (even if it's 0)
    const balance = await connection.getBalance(publicKey);
    const solBalance = balance / 1e9; // Convert lamports to SOL

    // Step 5: Register the user
    const { user, message } = await UserModel.Register(
      walletAddress,
      referredBy
    );

    res.status(200).json({
      message,
      user,
      blockchainDetails: accountInfo,
      solBalance: solBalance,
    });
  } catch (err) {
    return res.status(400).json({ user: null, message: "Try Again later" });
  }
};

// Reward claim function
export const rewardClaim = async (req, res) => {
  const { walletAddress, claim } = req.query;

  if (!walletAddress) {
    return res
      .status(400)
      .json({ user: null, message: "Wallet Address is required" });
  }
  let publicKey;
  try {
    publicKey = new PublicKey(walletAddress);
  } catch (error) {
    return res
      .status(400)
      .json({ user: null, message: "Invalid Solana wallet address format" });
  }

  if (!PublicKey.isOnCurve(publicKey.toBytes())) {
    return res
      .status(400)
      .json({ user: null, message: "Invalid Solana wallet address" });
  }

  if (claim !== "daily") {
    return res.status(400).json({ user: null, message: "Invalid claim value" });
  }

  try {
    // Update the daily claim for the user
    const updated = await UserModel.claimReward(walletAddress);
    if (updated) {
      const { user, message } = await UserModel.Register(walletAddress);
      res.status(200).json({ message, user });
    } else {
      res.status(400).json({
        message: "Unable to claim. Please try again later.",
        user: null,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Unable to complete the request" });
  }
};
