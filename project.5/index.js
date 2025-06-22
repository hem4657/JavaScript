const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const resultDiv = document.getElementById('result');

    // Helper icons for weather codes based on Open-Meteo weathercode https://open-meteo.com/en/docs#latitude=52.52&longitude=13.41&hourly=temperature_2m
const weatherCodeMap = {
  0: {desc: "Clear sky", icon: "☀️"},
  1: {desc: "Mainly clear", icon: "🌤️"},
  2: {desc: "Partly cloudy", icon: "⛅"},
  3: {desc: "Overcast", icon: "☁️"},
  45: {desc: "Fog", icon: "🌫️"},
  48: {desc: "Depositing rime fog", icon: "🌫️"},
  51: {desc: "Light drizzle", icon: "🌦️"},
  53: {desc: "Moderate drizzle", icon: "🌧️"},
  55: {desc: "Dense drizzle", icon: "🌧️"},
  56: {desc: "Light freezing drizzle", icon: "🌧️❄️"},
  57: {desc: "Dense freezing drizzle", icon: "🌧️❄️"},
  61: {desc: "Slight rain", icon: "🌦️"},
  63: {desc: "Moderate rain", icon: "🌧️"},
  65: {desc: "Heavy rain", icon: "🌧️"},
  66: {desc: "Light freezing rain", icon: "🌧️❄️"},
  67: {desc: "Heavy freezing rain", icon: "🌧️❄️"},
  71: {desc: "Slight snow fall", icon: "🌨️"},
  73: {desc: "Moderate snow fall", icon: "🌨️"},
  75: {desc: "Heavy snow fall", icon: "❄️"},
  77: {desc: "Snow grains", icon: "❄️"},
  80: {desc: "Slight rain showers", icon: "🌦️"},
  81: {desc: "Moderate rain showers", icon: "🌧️"},
  82: {desc: "Violent rain showers", icon: "⛈️"},
  85: {desc: "Slight snow showers", icon: "🌨️"},
  86: {desc: "Heavy snow showers", icon: "❄️"},
  95: {desc: "Thunderstorm", icon: "⛈️"},
  96: {desc: "Thunderstorm with slight hail", icon: "⛈️"},
  99: {desc: "Thunderstorm with heavy hail", icon: "⛈️"}
};
// Function to fetch lat/lon from city using Open-Meteo geocoding
async function getCoords(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch geocoding data.');
  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('No location found with that name.');
  }
  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    name: data.results[0].name,
    country: data.results[0].country,
    admin1: data.results[0].admin1 || ''
  };
}
// Function to fetch weather data for lat/lon
async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch weather data.');
  const data = await res.json();
  if (!data.current_weather) throw new Error('Current weather data unavailable.');
  return data.current_weather;
}
// Render weather info
function displayWeather(location, weather) {
  const codeInfo = weatherCodeMap[weather.weathercode] || {desc:"Unknown", icon:"❓"};
  resultDiv.innerHTML = `
    <div class="weather-result" role="region" aria-label="Weather information">
      <div class="location">${location.name}${location.admin1 ? ', ' + location.admin1 : ''}, ${location.country}</div>
      <div class="temp">${weather.temperature}&#8451; ${codeInfo.icon}</div>
      <div class="description">${codeInfo.desc}</div>
      <div class="details">
        <div title="Wind Speed (km/h)">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18"/></svg> 
          ${weather.windspeed} km/h
        </div>
        <div title="Wind Direction">
          <svg viewBox="0 0 24 24" aria-hidden="true" style="transform: rotate(${weather.winddirection}deg);">
            <path d="M12 19l-7-7h14z"/>
          </svg>
          ${weather.winddirection}&#176;
        </div>
      </div>
    </div>
  `;
}
// Display error message
function displayError(message) {
  resultDiv.innerHTML = `<div class="error" role="alert">${message}</div>`;
}
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    displayError('Please enter a city name.');
    return;
  }
  resultDiv.innerHTML = 'Loading...';
  try {
    const location = await getCoords(city);
    const weather = await getWeather(location.latitude, location.longitude);
    displayWeather(location, weather);
  } catch (error) {
    displayError(error.message);
  }
});