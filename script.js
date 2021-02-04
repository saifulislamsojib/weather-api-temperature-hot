const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const key = "bf69e3436bda6abf9fcce1f295583552";

function weather() {
const city = document.getElementById("input-weather").value;
city ? getWeather(city) : alert("Please Write A City");
}

function getWeather(city) {
fetch(`${baseUrl}?q=${city}&appid=${key}`)
    .then((res) => res.json())
    .then((data) => showWeather(data))
    .catch((err) => alert(err));
}
const showWeather = (data) => {
const weatherCity = document.getElementById("city");
weatherCity.innerText = data.name || "Unknown Location!";
const temperature = document.getElementById("temperature");
temperature.innerText = data.main.temp;
const status = document.getElementById("status");
status.innerText = data.weather[0].main;
const weatherIcon = document.getElementById("weather-icon");
weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
};