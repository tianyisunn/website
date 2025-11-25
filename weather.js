window.addEventListener("DOMContentLoaded", () => {
  updateChengdu();
  updateDublin();

  setInterval(updateChengdu, 900000);
  setInterval(updateDublin, 900000);
});

// Chengdu
async function updateChengdu() {
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
    console.error(err);
    document.getElementById("temp").innerText = "Error fetching weather.";
  }
}

// Dublin
async function updateDublin() {
  const apiKey = "955f27efc9c4417e8cb164315250910"; 
  const city = "Dublin, Ireland";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      document.getElementById("tempie").innerText = `${data.current.temp_c} °C`;
    } else {
      document.getElementById("tempie").innerText = "Could not fetch weather.";
    }
  } catch (err) {
    console.error(err);
    document.getElementById("tempie").innerText = "Error fetching weather.";
  }
}
