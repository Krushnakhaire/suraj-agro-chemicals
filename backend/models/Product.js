import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product_id: Number,
  product_name: String,
  category: String,
  description: String,
  priceperunit: Number
});

const Product = mongoose.model('Product', productSchema);
export default Product;


