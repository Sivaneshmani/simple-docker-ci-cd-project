const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.send('Hello from Backend API!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
