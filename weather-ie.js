window.addEventListener("DOMContentLoaded", getWeather);

async function getWeather() {
  const apiKey = "c0e184e891c630aa9e4e240491df4779"; 
  const city = "Dublin";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      document.getElementById("tempie").innerText = `${data.main.temp} °C`;
    } else {
      document.getElementById("temp").innerText = "Could not fetch weather.";
    }
  } catch (err) {
    document.getElementById("tempie").innerText = "Error fetching weather.";
  }
}
