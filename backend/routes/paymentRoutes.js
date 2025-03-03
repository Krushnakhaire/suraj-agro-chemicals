import express from "express";
import Payment from "../models/paymentModel.js";

const router = express.Router();


router.post("/add-payment", async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json({ message: "Payment receipt saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving payment receipt" });
    }
});

router.get("/payments", async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: "Error fetching payment receipts" });
    }
});

export default router;
