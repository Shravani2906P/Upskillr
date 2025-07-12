const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  location: String,
  profilePhoto: String, // store image URL or base64 string
  skillsOffered: [String],
  skillsWanted: [String],
  availability: [String], // e.g., ["weekends", "evenings"]
  isPublic: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
