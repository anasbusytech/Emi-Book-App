const express = require('express');
const app = express();

// Add any additional logic or setup (like Prisma) if needed
app.get('/', (req, res) => {
  res.send('Hello, Shopify App!');
});

// Export the app for Vercel
module.exports = app;
