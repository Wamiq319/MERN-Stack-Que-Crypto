import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  referralId: { type: String, required: true, unique: true },
  referredBy: { type: String, default: null },
  referrals: { type: Number, default: 0 },
  points: { type: Number, default: 50 },
  lastClaimedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
});

// Static method to register a user
userSchema.statics.Register = async function (walletAddress, referredBy) {
  // Step 1: Check if the user already exists based on the wallet address
  const existingUser = await this.findOne({ walletAddress });
  if (existingUser) {
    return {
      user: sanitizeUserData(existingUser),
      message: "Welcome back!",
    };
  }

  // Step 3: Generate a unique referral ID
  let referralId = generateReferralId();
  let linkExists = await this.findOne({ referralId });

  while (linkExists) {
    referralId = generateReferralId();
    linkExists = await this.findOne({ referralId });
  }

  // Step 4: Create and save a new user
  const newUser = new this({
    walletAddress,
    referralId,
    referredBy: referredBy || null,
    referrals: 0,
    points: 50,
  });

  // Step 5: Handle the case where the user was referred by someone
  if (referredBy) {
    const referrer = await this.findOne({ referralId: referredBy });
    if (referrer) {
      referrer.referrals += 1;
      referrer.points += 10; // Give referrer points for the referral
      await referrer.save();
    }
  }

  // Step 6: Save the new user
  await newUser.save();

  return {
    user: sanitizeUserData(newUser),
    message: "Welcome! Your account is ready.",
  };
};

// Method to handle daily claims
userSchema.statics.claimReward = async function (walletAddress) {
  // Step 1: Find the user based on wallet address
  const user = await this.model("User").findOne({ walletAddress });
  if (!user) return false;

  const now = Date.now();
  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

  // Step 2: Check if 24 hours have passed since the last claim
  if (!user.lastClaimedAt || now - user.lastClaimedAt >= TWENTY_FOUR_HOURS) {
    // Step 3: Update the user's claim status
    user.lastClaimedAt = now;
    user.points += 10;
    await user.save();
    return true; // Claim successful
  } else {
    return false; // Claim not allowed today
  }
};

// Utility function to sanitize user data
function sanitizeUserData(user) {
  const now = Date.now();
  const claimCooldown = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  let canClaimToday = false;
  let timeLeft = 0;

  if (!user.lastClaimedAt || now - user.lastClaimedAt >= claimCooldown) {
    canClaimToday = true; // User can claim today
  } else {
    // Calculate the remaining time until the user can claim again
    timeLeft = claimCooldown - (now - user.lastClaimedAt);
  }

  // Step 1: Return sanitized user data including claim eligibility
  return {
    walletAddress: user.walletAddress,
    referralId: user.referralId,
    referredBy: user.referredBy,
    referrals: user.referrals,
    points: user.points,
    canClaimToday: canClaimToday ? true : timeLeft, // Claim status or time left
  };
}
// Utility function to generate a random referral ID
function generateReferralId(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let referralId = "";

  // Step 1: Generate a random referral ID by choosing random characters
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralId += characters[randomIndex];
  }

  return referralId;
}

// Export the user model
export default mongoose.model("User", userSchema);
