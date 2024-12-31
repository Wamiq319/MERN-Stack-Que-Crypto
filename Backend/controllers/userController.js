const User = require("../models/user");

exports.registerUser = async (req, res) => {
  const { walletAddress, referredBy } = req.query;
  const IpAddress = "898.167.988";

  if (!walletAddress) {
    return res.status(400).json({ message: "Wallet Address is required" });
  }

  // Ensure wallet number is exactly 10 characters long
  if (walletAddress.length !== 10) {
    return res
      .status(400)
      .json({ message: "Wallet Address must be exactly 10 characters long" });
  }

  if (!/^[a-zA-Z0-9]+$/.test(walletAddress)) {
    return res.status(400).json({
      message: "Wallet Address must contain only alphanumeric characters",
    });
  }

  const referrer = referredBy || null;

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
    // Catch any other errors
    res.status(400).json({ message: error.message });
  }
};
