const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ✅ Create new user (POST)
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all public users (GET)
router.get('/', async (req, res) => {
  try {
    const users = await User.find({ isPublic: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
