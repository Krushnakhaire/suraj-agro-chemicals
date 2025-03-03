import express from "express";
import productRoutes from "./productRoutes.js";
import FertilizerShopRoutes from "./FertilizerShopRoutes.js";
import deliveryRoutes from "./deliveryRoutes.js";
import paymentRoutes from "./paymentRoutes.js";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/shops", FertilizerShopRoutes);
router.use("/deliveries", deliveryRoutes);
router.use("/payments", paymentRoutes);

export default router;