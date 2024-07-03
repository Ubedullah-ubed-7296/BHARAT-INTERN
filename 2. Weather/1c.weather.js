const apikey = "e6e9d434760f2b564dd9dffad02ec04e";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  try {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    addWeatherToPage(respData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const city = data.name;

  const ctx = document.getElementById('weather-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Temperature (°C)', 'Humidity (%)'],
      datasets: [{
        label: 'Weather Info',
        data: [temp, humidity],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon
    }@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon
    }@2x.png" /></h2>
  <p>${city}</p>
        <small>${data.weather[0].main}</small>
        <div class="more-info">
        <p>Humidity : <span>${humidity}%</span></p>
        <p>Wind speed : <span>${+Math.trunc(windSpeed * 3.16)}km/h</span></p>
        </div>
    `;

  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value.trim();
  if (city) {
    getWeatherByLocation(city);
  }
});
