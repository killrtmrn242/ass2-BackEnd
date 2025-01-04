const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

// Пример маршрута для получения погоды
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric&lang=ru`;
  try {
    const response = await axios.get(weatherUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось получить данные о погоде' });
  }
});

// Пример маршрута для новостей
app.get('/news', async (req, res) => {
  const city = req.query.city;
  const newsUrl = `https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_API_KEY}`;
  try {
    const response = await axios.get(newsUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось получить новости' });
  }
});

// Пример маршрута для валют
app.get('/currency', async (req, res) => {
  const currency = req.query.currency;
  const currencyUrl = `https://api.exchangerate-api.com/v4/latest/${currency}`;
  try {
    const response = await axios.get(currencyUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось получить данные о валюте' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
