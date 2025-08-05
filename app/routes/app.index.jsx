// index.js
const express = require('express');
const app = express();

// You can add Prisma setup or other logic here if needed
app.get('/', (req, res) => {
  res.send('Hello, Shopify App!');
});

// Make sure your server listens on the default port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
