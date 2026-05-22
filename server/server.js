import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();

// DATABASE CONNECT
connectDB();

// MIDDLEWARES
app.use(
  cors({
    origin: "https://daskboard-dpc0.onrender.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

// ERROR MIDDLEWARE
app.use(errorMiddleware);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});