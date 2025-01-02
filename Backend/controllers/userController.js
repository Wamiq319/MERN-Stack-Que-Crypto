const User = require("../models/user");

// Register User function
exports.registerUser = async (req, res) => {
  // Extract query parameters
  const { walletAddress, referredBy } = req.query;

  // Step 1: Get the correct client IP address (considering reverse proxy)
  let IpAddress = req.ip;

  // Check if we're behind a proxy (X-Forwarded-For) and use the first IP in the list
  if (req.headers["x-forwarded-for"]) {
    IpAddress = req.headers["x-forwarded-for"].split(",")[0].trim();
  }

  // Step 2: Validate wallet address
  if (!walletAddress) {
    return res
      .status(400)
      .json({ user: null, message: "Wallet Address is required" });
  }

  if (walletAddress.length !== 25) {
    return res.status(400).json({
      user: null,
      message: "Wallet Address must be exactly 25 characters long",
    });
  }

  const pattern = /^[a-zA-Z][a-zA-Z0-9]{23}[0-9]$/;
  if (!pattern.test(walletAddress)) {
    return res.status(400).json({
      user: null,
      message: "Wallet Address must contain only alphanumeric characters",
    });
  }

  const referrer = referredBy || null;

  // Step 3: Register the user with the extracted IP address
  try {
    const { user, message } = await User.Register(
      walletAddress,
      IpAddress,
      referrer
    );

    res.status(200).json({
      message: message,
      user: user,
    });
  } catch (error) {
    // Step 4: Handle errors during registration
    res.status(400).json({ message: "Internal Error Occurred", user: null });
  }
};

// Reward claim function
exports.rewardClaim = async (req, res) => {
  // Extract query parameters
  const { walletAddress, claim } = req.query;
  console.log(req.query);

  // Step 1: Validate wallet address
  if (!walletAddress) {
    return res
      .status(400)
      .json({ user: null, message: "Wallet Address is required" });
  }

  if (walletAddress.length !== 25) {
    return res.status(400).json({
      user: null,
      message: "Wallet Address must be exactly 25 characters long",
    });
  }
  const pattern = /^[a-zA-Z][a-zA-Z0-9]{23}[0-9]$/;
  if (!pattern.test(walletAddress)) {
    return res.status(400).json({
      user: null,
      message:
        "Wallet Address must start with a letter, end with a digit, and be exactly 25 characters long, containing alphanumeric characters only.",
    });
  }

  // Step 2: Validate claim value
  if (!claim) {
    return res.status(400).json({ user: null, message: "Claim is required" });
  }

  if (claim !== "daily") {
    return res.status(400).json({ user: null, message: "Invalid claim value" });
  }

  // Step 3: Update the daily claim for the user
  try {
    const updated = await User.claimReward(walletAddress);

    if (updated) {
      const { user, message } = await User.Register(walletAddress);
      res.status(200).json({
        message: message,
        user: user,
      });
    } else {
      res.status(200).json({
        message: "Unable to claim today. Please try again later.",
        user: null,
      });
    }
  } catch (error) {
    console.log(error.message);
    // Step 4: Handle errors during reward claim
    res.status(400).json({ message: "Unable to complete the request" });
  }
};
