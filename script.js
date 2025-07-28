'use strict';

const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn__search');
const article = document.querySelector('article');
const apiKey = '3366667e3901a854740f2c0b55f891cc';

// Weather App
btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value === '') alert('fill the inpute!');
  else {
    // fetch API
    const fetchData = function (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          renderData(data);
        });
    };
    fetchData(input.value);

    // render data
    const renderData = function (data) {
      const html = `
    <article>
        <div class="sky__img">
          <img src="sky-images/02d@2x.png" />
        </div>

        <div>
          <h4 class="city__temperature">${Math.round(data.main.temp)}&deg;C</h4>
          <h3 class="location">${data.name}, ${data.sys.country} </h3>
          <!-- <h4 class="city__calender__hour">2025-07-27 16:38</h4> -->
          <div class="climator__flex">
            <p class="sky__like">${data.weather[0].description}</p>
            <div>
              <p class="humidity">Humidity: ${data.main.humidity}%</p>
              <p class="wind">Wind: ${data.wind.speed} km/h</p>
          </div>
          </div>
        </div>
        
      </article>
    `;
      article.insertAdjacentHTML('afterbegin', html);
    };
  }
});

const dt = 2759794;
const day = new Date(dt * 1000);
