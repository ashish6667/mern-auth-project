import express from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getDashboard,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.get("/dashboard", protect, getDashboard);

export default router;