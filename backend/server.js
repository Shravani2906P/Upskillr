const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const swapRoutes = require('./routes/swapRoutes');
app.use('/api/swaps', swapRoutes);



// Test route
app.get('/', (req, res) => {
  res.send('API is running 🎯');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
