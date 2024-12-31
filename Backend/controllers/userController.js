const User = require("../models/user");

exports.registerUser = async (req, res) => {
  const { walletAddress, referredBy } = req.query;

  // Step 1: Get the correct client IP address (considering reverse proxy)
  let IpAddress = req.ip;

  // Check if we are behind a proxy (X-Forwarded-For) and use the first IP in the list
  if (req.headers["x-forwarded-for"]) {
    IpAddress = req.headers["x-forwarded-for"].split(",")[0].trim();
  }

  // Step 2: Validation for wallet address
  if (!walletAddress) {
    return res
      .status(400)
      .json({ user: null, message: "Wallet Address is required" });
  }

  if (walletAddress.length !== 10) {
    return res.status(400).json({
      user: null,
      message: "Wallet Address must be exactly 10 characters long",
    });
  }

  if (!/^[a-zA-Z0-9]+$/.test(walletAddress)) {
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
    // Step 4: Handle errors
    res.status(400).json({ message: error.message });
  }
};
