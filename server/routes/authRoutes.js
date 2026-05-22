import express from "express";

import {
  register,
  login,
} from "../controllers/authController.js";

import isAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Dashboard",
    user: req.user,
  });
});

export default router;