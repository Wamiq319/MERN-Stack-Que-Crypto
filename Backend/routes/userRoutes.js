import express from "express";
import { registerUser, rewardClaim } from "../controllers/userController.js";

const router = express.Router();

// Route to register user
router.get("/user", registerUser);
router.get("/claim-reward", rewardClaim);

export default router;
