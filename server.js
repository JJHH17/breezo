// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.static('public'));

const PORT = 3000;
const apiKey = process.env.API_KEY;

// Proxy route to hide API key from frontend
app.get('/api/weather', async (req, res) => {
  const location = req.query.location;

  if (!location) {
    return res.status(400).json({ error: 'Location is required' });
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=uk&include=days%2Chours&key=${apiKey}&contentType=json`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
