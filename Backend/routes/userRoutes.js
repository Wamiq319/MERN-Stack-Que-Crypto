const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();

// Route to register user
router.get("/users", registerUser);

module.exports = router;
