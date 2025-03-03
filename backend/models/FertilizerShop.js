import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  shopid: { type: Number, required: true, unique: true },
  shopname: { type: String, required: true },
  ownername: { type: String, required: true },
  address: { type: String, required: true },
  contactnumber: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
}, { collection: 'FertilizerShop' }); 

const FertilizerShop = mongoose.model('FertilizerShop', shopSchema);
export default FertilizerShop;


