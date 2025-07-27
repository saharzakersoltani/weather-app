'use strict';

// Weather App
const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn__search');
const article = document.querySelector('article');
const apiKey = '3366667e3901a854740f2c0b55f891cc';

btnSearch.addEventListener('click', function (e) {
  e.preventDefault();

  if (input.value === '') alert('fill the inpute!');
  else {
    // console.log(input.value);
    const html = `
    <article>
        <div>
          <h4 class="city__temperature">27o C</h4>
          <h3 class="country__name">Iran</h3>
          <h4 class="city__name">
            Tehran <span class="city__calender__hour">2025-07-27 16:38</span>
          </h4>
          <div class="climator__flex">
            <p class="sky__like">light rain shower</p>
            <div>
              <p class="humidity">Humidity: 90%</p>
              <p class="wind">Wind: 13.7 km/h</p>
            </div>
          </div>
        </div>
        <div class="sky__img">
          <img src="images/mobile.jpg" />
        </div>
      </article>
    `;

    article.insertAdjacentHTML('afterbegin', html);

    // fetch API
    // const weatherSearch = function (cityName) {
    //   fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    //   )
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // };
    // weatherSearch('tehran');
  }
});
