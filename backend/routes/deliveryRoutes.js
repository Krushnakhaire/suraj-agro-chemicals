import express from 'express';
import Delivery from '../models/Delivery.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    const { productName, quantity, deliveryDate, fertilizerShop } = req.body;

    try {
        const newDelivery = new Delivery({
            productName,
            quantity,
            deliveryDate,
            fertilizerShop
        });

        await newDelivery.save();
        res.status(201).json({ message: 'Delivery added successfully!', delivery: newDelivery });
    } catch (error) {
        res.status(400).json({ message: 'Error adding delivery', error });
    }
});

export default router;


