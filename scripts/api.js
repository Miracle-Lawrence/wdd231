const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");


const myKey = "74aba8f29efe636980dd2ac9a4ebc088";
const myLat = "49.749717076144634";
const myLon = "6.6343535985104";
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