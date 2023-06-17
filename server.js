const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('c:/Users/63945/Desktop/finalExam/routers/userRouter');
const orderRoutes = require('c:/Users/63945/Desktop/finalExam/routers/orderRouter');
const gameRoutes = require('c:/Users/63945/Desktop/finalExam/routers/gameRouter');

// Initialize Express app
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/games', gameRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
