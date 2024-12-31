const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();

// Route to register user
router.get("/user", registerUser);

module.exports = router;
