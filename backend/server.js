import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // Import routes

const app = express();

app.use(express.json());
app.use(cors());

// Register Routes
app.use("/api", authRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/yourDB")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
