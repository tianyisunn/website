window.addEventListener("DOMContentLoaded", getWeather);

async function getWeather() {
  const apiKey = "955f27efc9c4417e8cb164315250910"; 
  const city = "Chengdu, China";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      document.getElementById("temp").innerText = `${data.current.temp_c} °C`;
    } else {
      document.getElementById("temp").innerText = "Could not fetch weather.";
    }
  } catch (err) {
    document.getElementById("temp").innerText = "Error fetching weather.";
  }
}
