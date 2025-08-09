const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const myKey = "74aba8f29efe636980dd2ac9a4ebc088";
const myLat = "5.0440095534908425";
const myLon = "7.922713971952539";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

apiFetch();

//Code for weather forecast
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console;
    const forecastList = data.list;

    // Create a map to store one forecast per day
    const dailyTemps = {};
    forecastList.forEach((forecast) => {
      const date = new Date(forecast.dt_txt);
      const hour = date.getHours();

      // Use the forecast closest to 12:00 PM each day
      if (hour === 12 && !dailyTemps[date.toDateString()]) {
        dailyTemps[date.toDateString()] = forecast.main.temp.toFixed(0);
      }
    });

    // Get the keys (dates) and fill in the forecast spans
    const days = Object.keys(dailyTemps);
    if (days.length >= 3) {
      document.getElementById("day1-temp").textContent = dailyTemps[days[0]];
      document.getElementById("day2-temp").textContent = dailyTemps[days[1]];
      document.getElementById("day3-temp").textContent = dailyTemps[days[2]];
    }
  } catch (error) {
    console.error("Forecast fetch error: ", error);
  }
}

apiFetchForecast();
