import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    batchNo: String,
    paymentDate: String,
    fertilizerShop: String,
    productName: String,
    quantity: Number,
    totalAmount: Number,
});

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
