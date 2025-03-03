import express from "express";
import FertilizerShop from "../models/FertilizerShop.js";

const router = express.Router();

router.get("/", async (req, res) => {  
  try {
    const shops = await FertilizerShop.find();
    res.json(shops);
  } catch (error) {
    console.error("Error fetching fertilizer shops:", error);
    res.status(500).json({ message: "Server Error: Could not fetch data." });
  }
});

export default router;
