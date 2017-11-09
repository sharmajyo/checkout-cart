/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const AdSchema = new mongoose.Schema({
  id: Number,
  type: String,
  rate: { type: Number, min: 0 },
});

export default mongoose.model('Ad', AdSchema);

