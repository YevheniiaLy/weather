fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((items) => {
    console.log(items);
    let temp = document.querySelector(".temp");
    temp.textContent = items.main.temp;

    let pressure = document.querySelector(".pressure");
    pressure.textContent = items.main.pressure;

    let humidity = document.querySelector(".humidity");
    humidity.textContent = items.main.humidity;

    let speed = document.querySelector(".speed");
    speed.textContent = items.wind.speed;
    let deg = document.querySelector(".deg");
    deg.textContent = items.wind.deg;
    let descr = document.querySelector(".descr-box");
    descr.textContent = items.weather[0].description.toUpperCase();

    let city = document.querySelector(".city");
    city.textContent = items.name.toUpperCase();

    let icon = document.querySelector(".icon");

    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${items.weather[0].icon}.png`
    );
  });
