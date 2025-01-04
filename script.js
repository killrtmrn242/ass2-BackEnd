// Получение данных о погоде
function getWeather(city) {
    fetch(`http://localhost:3000/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.error('Error:', error));
}

// Отображение данных о погоде
function displayWeather(data) {
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
    `;
}

// Получение новостей
function getNews(city) {
    fetch(`http://localhost:3000/news?city=${city}`)
        .then(response => response.json())
        .then(data => {
            displayNews(data);
        })
        .catch(error => console.error('Error:', error));
}

// Отображение новостей
function displayNews(data) {
    const newsElement = document.getElementById('news');
    newsElement.innerHTML = `
        <h2>News in ${data.city}</h2>
        <ul>
            ${data.articles.map(article => `
                <li><a href="${article.url}" target="_blank">${article.title}</a></li>
            `).join('')}
        </ul>
    `;
}

// Получение данных о валюте
function getCurrency(currency) {
    fetch(`http://localhost:3000/currency?currency=${currency}`)
        .then(response => response.json())
        .then(data => {
            displayCurrency(data);
        })
        .catch(error => console.error('Error:', error));
}

// Отображение данных о валюте
function displayCurrency(data) {
    const currencyElement = document.getElementById('currency');
    currencyElement.innerHTML = `
        <h2>Currency Exchange Rates</h2>
        <p>1 ${data.base_currency} = ${data.rates[data.target_currency]} ${data.target_currency}</p>
    `;
}

// Пример вызова функций
getWeather('London');
getNews('London');
getCurrency('USD');
