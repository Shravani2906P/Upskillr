const express = require('express');
const router = express.Router();
const SwapRequest = require('../models/SwapRequest');

// Create a new swap request
router.post('/', async (req, res) => {
  try {
    const newSwap = new SwapRequest(req.body);
    const saved = await newSwap.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all swap requests
router.get('/', async (req, res) => {
  try {
    const swaps = await SwapRequest.find();
    res.status(200).json(swaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update status (accept/reject)
router.patch('/:id', async (req, res) => {
  try {
    const updated = await SwapRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
