import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    deliveryDate: { type: Date, required: true },
    fertilizerShop: { type: String, required: true }
}, { timestamps: true });

const Delivery = mongoose.model("Delivery", deliverySchema); 

export default Delivery;
