import express from 'express';
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product_id: Number,
    product_name: String,
    category: String,
    description: String,
    priceperunit: Number
});

const Product = mongoose.model('Product', productSchema, 'Product');

const router = express.Router();

router.get('/', async (req, res) => { 
  try {
      const products = await Product.find();
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
  }
});

export default router;
