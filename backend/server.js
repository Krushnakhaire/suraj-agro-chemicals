import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fertilizerShopRoutes from "./routes/FertilizerShopRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";

dotenv.config();


const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("❌ MongoDB URI is missing! Check your .env file.");
    process.exit(1); 
}

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());


app.use("/api/v1/fertilizer", fertilizerShopRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/delivery", deliveryRoutes); 


mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1); 
    });
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));