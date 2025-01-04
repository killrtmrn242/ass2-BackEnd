
# Weather App

This project is a weather application that provides weather data, news articles, and currency exchange rates for a given city. It also features a map that displays the location of the city entered by the user.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [API Usage](#api-usage)
- [Frontend Overview](#frontend-overview)
- [Key Design Decisions](#key-design-decisions)
- [Contributors](#contributors)

## Features

- Display current weather data for a city.
- Show the latest news related to the city.
- Display the current exchange rate for USD to RUB.
- Interactive map that shows the city location.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, Axios
- **APIs**: OpenWeatherMap, NewsAPI, ExchangeRate API
- **Google Maps**: For showing city locations on a map.

## Installation Instructions

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate into the project directory:

```bash
cd weather-app
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your API keys:

```plaintext
WEATHER_API_KEY=your-weather-api-key
NEWS_API_KEY=your-news-api-key
CURRENCY_API_KEY=your-currency-api-key
```

5. Start the server:

```bash
npm start
```

The backend will be running on `http://localhost:3000`.

6. Open `index.html` in your browser to use the application.

## API Usage

### Weather Data

- **Endpoint**: `/weather`
- **Method**: `GET`
- **Parameters**: `city` (required) - The name of the city for which weather data is requested.
- **Example Request**:

```bash
GET http://localhost:3000/weather?city=London
```

- **Response**:

```json
{
  "name": "London",
  "main": {
    "temp": 15.0,
    "humidity": 65
  },
  "weather": [
    {
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "wind": {
    "speed": 5.1
  }
}
```

### News Data

- **Endpoint**: `/news`
- **Method**: `GET`
- **Parameters**: `city` (required) - The name of the city for which news articles are fetched.
- **Example Request**:

```bash
GET http://localhost:3000/news?city=London
```

- **Response**:

```json
{
  "articles": [
    {
      "title": "News Title",
      "url": "https://news.example.com/article"
    }
  ]
}
```

### Currency Data

- **Endpoint**: `/currency`
- **Method**: `GET`
- **Parameters**: `currency` (required) - The currency code (e.g., `USD`).
- **Example Request**:

```bash
GET http://localhost:3000/currency?currency=USD
```

- **Response**:

```json
{
  "rates": {
    "RUB": 75.5
  },
  "base": "USD"
}
```

## Frontend Overview

1. **City Input**: The user enters a city name in the input field and clicks the "Получить данные" (Get Data) button to fetch information.
2. **Weather Section**: Displays the weather information including temperature, description, humidity, and wind speed.
3. **News Section**: Shows a list of news articles related to the entered city.
4. **Currency Section**: Displays the current exchange rate for USD to RUB.
5. **Google Map**: Displays the map of the entered city with a marker showing its location.

## Key Design Decisions

1. **Separation of Frontend and Backend**: The application has been designed with clear separation between frontend and backend, making it easier to scale or update one part without affecting the other.
2. **Async/Await**: Used `async/await` in backend API routes for handling asynchronous operations, ensuring a clean and readable code structure.
3. **Google Maps Integration**: The map is dynamically updated based on the city entered by the user, providing an interactive experience.
4. **Error Handling**: Comprehensive error handling is implemented both in the backend (for API calls) and the frontend (for invalid input or failed requests).


