const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route: /gethello
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
