const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.send('🚀 CI/CD is working successfully!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
