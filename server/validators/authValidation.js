import express from "express";

import {
  register,
  login,
} from "../controllers/authController.js";

import isAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

// Protected Dashboard Route
router.get("/dashboard", isAuthenticated, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Dashboard",
    user: req.user,
  });
});

export default router;