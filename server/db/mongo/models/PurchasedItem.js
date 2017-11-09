/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema({
  id: String,
  userId: Number,
  adId: Number,
  qty: Number,
  ad: Object,
});

export default mongoose.model('PurchasedItem', PurchaseSchema);

