// index.js
const express = require('express');
const app = express();

// You can add Prisma setup or other logic here if needed
app.get('/', (req, res) => {
  res.send('Hello, Shopify App!');
});

// Export the handler for Vercel
module.exports = app;
