// Utility function to generate a random referral ID
function generateReferralId(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Uppercase letters and digits
  let referralId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralId += characters[randomIndex]; // Append a random character
  }

  return referralId; // Return the generated referral ID
}
