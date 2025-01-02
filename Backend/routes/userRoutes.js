const express = require("express");
const { registerUser, rewardClaim } = require("../controllers/userController");
const router = express.Router();

// Route to register user
router.get("/user", registerUser);
router.get("/claim-reward", rewardClaim);

module.exports = router;
