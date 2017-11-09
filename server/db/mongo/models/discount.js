/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const DiscountSchema = new mongoose.Schema({
  id: String,
  userId: Number,
  adId: Number,
  minimumPurchase: { type: Number, min: 0 },
  discoutedPrice: Number,
  rule: String,
});

export default mongoose.model('Discount', DiscountSchema);
