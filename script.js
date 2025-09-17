const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key

async function getWeather() {
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("weather-result");

  if (!city) {
    resultDiv.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const { name, main, weather, wind } = data;

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p>🌡️ Temperature: ${main.temp} °C</p>
      <p>☁️ Condition: ${weather[0].description}</p>
      <p>💧 Humidity: ${main.humidity}%</p>
      <p>🌬️ Wind Speed: ${wind.speed} m/s</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ " + error.message;
  }
}
