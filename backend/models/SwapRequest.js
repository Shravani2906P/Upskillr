const mongoose = require('mongoose');

const swapRequestSchema = new mongoose.Schema({
  fromUser: { type: String, required: true },  // sender's user ID or name
  toUser: { type: String, required: true },    // receiver's user ID or name
  skillOffered: { type: String, required: true },
  skillWanted: { type: String, required: true },
  message: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('SwapRequest', swapRequestSchema);
