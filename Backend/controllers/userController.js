const User = require("../models/user");

exports.registerUser = async (req, res) => {
  // const { walletNumber } = req.body;
  const walletNumber = "yfhyyfhfyflmj";
  const IpAddress = "898.167.998";
  const referredBy = "Z6DL4V";

  if (!walletNumber) {
    return res.status(400).json({ message: "Wallet number is required" });
  }

  // Ensure wallet number is exactly 10 characters long
  if (walletNumber.length < 10) {
    return res
      .status(400)
      .json({ message: "Wallet number must be exactly 10 characters long" });
  }

  if (!/^[a-zA-Z0-9]+$/.test(walletNumber)) {
    return res.status(400).json({
      message: "Wallet number must contain only alphanumeric characters",
    });
  }

  try {
    const { user, message } = await User.Register(
      walletNumber,
      IpAddress,
      referredBy
    );

    // Return response with the wallet number and IP address for now
    res.status(200).json({
      message: message,
      user: user,
    });
  } catch (error) {
    // Catch any other errors
    res.status(400).json({ message: error.message });
  }
};
