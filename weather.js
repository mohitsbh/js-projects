const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather_png");
const API_KEY = "32ce5681ea74ff23e8ca4e6ed19e7a84";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weatherCheck(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity-per").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind-per").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/Mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
